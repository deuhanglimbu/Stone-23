const cartItemsKey = 'stone-cart-items';
const savedOrderItemsKey = 'saved-order-items';
const cartItemsKeys = [cartItemsKey];

function getNormalizedItemKey(item) {
  if (typeof item === 'string') {
    return String(item).trim();
  }

  if (typeof item === 'object' && item) {
    const text = String(item?.text || '').trim();
    const image = String(item?.image || '').trim();
    const stoneName = String(item?.stoneName || '').trim();
    return JSON.stringify({ text, image, stoneName });
  }

  return '';
}

function sanitizeCartItems(items) {
  if (!Array.isArray(items)) return [];

  const uniqueItems = [];
  const seen = new Set();

  for (const item of items) {
    if (!item) continue;

    let isValid = false;
    let key = '';

    if (typeof item === 'string') {
      const normalized = item.trim();
      isValid = normalized.length > 0 && normalized !== 'No order details entered.';
      key = normalized;
    }

    if (typeof item === 'object') {
      const text = String(item?.text || '').trim();
      const image = String(item?.image || '').trim();
      const stoneName = String(item?.stoneName || '').trim();
      isValid = text.length > 0 && text !== 'No order details entered.' && (image.length > 0 || stoneName.length > 0);
      key = JSON.stringify({ text, image, stoneName });
    }

    if (!isValid || !key) continue;
    if (seen.has(key)) continue;

    seen.add(key);
    uniqueItems.push(item);
  }

  return uniqueItems;
}

function readStoredItems(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeStoredItems(storageKey, items) {
  const cleaned = sanitizeCartItems(items);
  localStorage.setItem(storageKey, JSON.stringify(cleaned));
}

function getRawStoredCartItems() {
  try {
    return cartItemsKeys.reduce((items, key) => {
      if (items.length) return items;
      return readStoredItems(key);
    }, []);
  } catch (error) {
    return [];
  }
}

function writeStoredCartItems(items) {
  writeStoredItems(cartItemsKey, items);
}

export function getStoredCartItems() {
  try {
    const parsed = getRawStoredCartItems();
    const cleaned = sanitizeCartItems(parsed);

    if (cleaned.length !== (Array.isArray(parsed) ? parsed.length : 0)) {
      writeStoredCartItems(cleaned);
    }

    return cleaned;
  } catch (error) {
    return [];
  }
}

export function saveCartItems(items) {
  writeStoredCartItems(items);
}

export function getStoredSavedOrderItems() {
  try {
    const parsed = readStoredItems(savedOrderItemsKey);
    const cleaned = sanitizeCartItems(parsed);

    if (cleaned.length !== parsed.length) {
      writeStoredItems(savedOrderItemsKey, cleaned);
    }

    return cleaned;
  } catch (error) {
    return [];
  }
}

export function saveSavedOrderItems(items) {
  writeStoredItems(savedOrderItemsKey, items);
}

export function CartPage() {
  const items = getStoredCartItems();
  const isOrderSummary = new URLSearchParams(window.location.search).get('openOrder') === '1';
  const pageTitle = isOrderSummary ? 'Read for Order' : 'Cart';

  window.__sendSavedOrderEmail = () => {
    const savedItems = getStoredCartItems();
    const subject = encodeURIComponent('Stone Order Request');
    const formatOrderItem = (item, index) => {
      const normalized = typeof item === 'string'
        ? { text: item, stoneName: 'Stone item', image: '' }
        : {
            text: item?.text || 'Stone item',
            stoneName: item?.stoneName || 'Stone item',
            image: item?.image || ''
          };

      const text = String(normalized.text || '').trim();
      const lines = text.split('\n').filter(Boolean).map((part) => part.trim());
      const firstLine = lines[0] || normalized.stoneName || 'Stone item';
      const qtyLine = lines.find((part) => part.startsWith('Qty:')) || 'Qty: -';
      const noteLine = lines.find((part) => part.startsWith('Note:')) || 'Note: -';
      const imageValue = normalized.image ? String(normalized.image).trim() : '';

      return [
        `Item ${index + 1}`,
        `Stone: ${normalized.stoneName || 'Stone item'}`,
        `Details: ${firstLine}`,
        qtyLine,
        noteLine,
        imageValue ? `Image: ${imageValue}` : ''
      ].filter(Boolean).join('\n');
    };

    const emailBody = [
      'Stone Order Request',
      '==================',
      savedItems.map(formatOrderItem).join('\n\n--------------------\n\n'),
    ].filter(Boolean).join('\n\n');

    saveCartItems([]);
    const recipient = 'tpjlimbu61@gmail.com';
    const mailto = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailto;
  };

  return `
    <section class="cart-page" id="cart-page">
      <div class="section-header cart-header">
        <h2>${pageTitle}</h2>
        <button class="primary-btn cart-top-action-btn" type="button" onclick="window.__sendSavedOrderEmail()">Buy Now</button>
      </div>

      ${items.length === 0 ? `
        <div class="cart-page-empty">Your cart is empty.</div>
      ` : `
        <ol class="cart-page-list">
          ${items.map((item, index) => {
            const normalizedItem = typeof item === 'string'
              ? { text: item, image: '', stoneName: 'Stone item' }
              : {
                  text: item?.text || 'Stone item',
                  image: item?.image || '',
                  stoneName: item?.stoneName || 'Stone item'
                };

            const previousItem = items[index - 1];
            const previousStoneName = typeof previousItem === 'string' ? 'Stone item' : (previousItem?.stoneName || 'Stone item');
            const stoneTitle = normalizedItem.stoneName || 'Stone item';

            const textValue = String(normalizedItem.text || '').trim();
            let dimensions = 'Length / Width / Height';
            let qtyValue = '-';
            let noteValue = '-';

            const textWithNewlines = textValue
              .replace(/\r/g, '')
              .split('\n')
              .filter(Boolean)
              .map((part) => part.trim())
              .join('\n');

            if (textWithNewlines) {
              const qtyIndex = textWithNewlines.indexOf('Qty:');
              const noteIndex = textWithNewlines.indexOf('Note:');

              if (qtyIndex >= 0) {
                const beforeQty = textWithNewlines.slice(0, qtyIndex).trim();
                const afterQty = noteIndex >= 0 ? textWithNewlines.slice(qtyIndex + 4, noteIndex).trim() : textWithNewlines.slice(qtyIndex + 4).trim();
                const proposedDimensions = beforeQty
                  .replace(new RegExp(`^${stoneTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'), '')
                  .trim();
                dimensions = proposedDimensions || 'Length / Width / Height';
                qtyValue = afterQty || '-';
                noteValue = noteIndex >= 0 ? textWithNewlines.slice(noteIndex + 5).trim() || '-' : '-';
              } else if (noteIndex >= 0) {
                const beforeNote = textWithNewlines.slice(0, noteIndex).trim();
                const proposedDimensions = beforeNote
                  .replace(new RegExp(`^${stoneTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'), '')
                  .trim();
                dimensions = proposedDimensions || 'Length / Width / Height';
                noteValue = textWithNewlines.slice(noteIndex + 5).trim() || '-';
              } else {
                const proposedDimensions = textWithNewlines
                  .replace(new RegExp(`^${stoneTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'), '')
                  .trim();
                dimensions = proposedDimensions || 'Length / Width / Height';
              }
            }

            const qtyLine = `Qty: ${qtyValue}`;
            const noteLine = `Note: ${noteValue}`;
            const shouldShowImage = index === 0 || String(previousStoneName || '').trim().toLowerCase() !== String(stoneTitle || '').trim().toLowerCase();

            return `
              <li class="cart-page-item order-summary-item">
                <span class="cart-page-number">${index + 1}.</span>
                ${shouldShowImage && normalizedItem.image ? `
                  <div class="cart-page-image-stack order-summary-image-wrap">
                    <img class="cart-page-thumb order-summary-thumb" src="${normalizedItem.image}" alt="${normalizedItem.stoneName}" />
                  </div>
                ` : ''}
                <div class="cart-page-text-wrap order-summary-wrap">
                  <div class="cart-page-text order-summary-text">
                    <span class="order-summary-title">${stoneTitle}</span>
                    <span class="order-summary-dimensions">${dimensions}</span>
                    <span class="order-summary-line">${qtyLine}</span>
                    <span class="order-summary-line">${noteLine}</span>
                  </div>
                </div>
              </li>
            `;
          }).join('')}
        </ol>
      `}
    </section>
  `;
}
