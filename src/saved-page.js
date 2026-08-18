import './style.css';
import { jsPDF } from 'jspdf';
import { getStoredSavedOrderItems, saveSavedOrderItems } from './cart/cart.jsx';

const app = document.querySelector('#app');

if (app) {
  const items = getStoredSavedOrderItems();

  const buildOrderEmailBody = () => {
    const savedItems = getStoredSavedOrderItems();
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

    return [
      'Stone Order Request',
      '==================',
      savedItems.map(formatOrderItem).join('\n\n--------------------\n\n'),
    ].filter(Boolean).join('\n\n');
  };

  window.__sendSavedOrderEmail = () => {
    const emailBody = buildOrderEmailBody();
    const recipient = 'tpjlimbu61@gmail.com';
    const modal = document.getElementById('saved-order-email-modal');

    if (modal) {
      const toInput = document.getElementById('saved-order-email-to');
      const ccInput = document.getElementById('saved-order-email-cc');
      const subjectInput = document.getElementById('saved-order-email-subject');
      const bodyInput = document.getElementById('saved-order-email-body');

      if (toInput) toInput.value = recipient;
      if (ccInput) ccInput.value = '';
      if (subjectInput) subjectInput.value = 'Stone Order Request';
      if (bodyInput) bodyInput.value = emailBody;

      modal.classList.remove('hidden');
      return;
    }

    saveSavedOrderItems([]);
    const subject = encodeURIComponent('Stone Order Request');
    const mailto = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailto;
  };

  window.__closeEmailComposer = () => {
    const modal = document.getElementById('saved-order-email-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };

  window.__sendComposeEmail = () => {
    const toInput = document.getElementById('saved-order-email-to');
    const ccInput = document.getElementById('saved-order-email-cc');
    const subjectInput = document.getElementById('saved-order-email-subject');
    const bodyInput = document.getElementById('saved-order-email-body');

    const to = (toInput?.value || '').trim();
    const cc = (ccInput?.value || '').trim();
    const subject = encodeURIComponent((subjectInput?.value || 'Stone Order Request').trim() || 'Stone Order Request');
    const body = encodeURIComponent((bodyInput?.value || buildOrderEmailBody()).trim());
    const recipient = to || 'tpjlimbu61@gmail.com';
    const ccParam = cc ? `&cc=${encodeURIComponent(cc)}` : '';

    saveSavedOrderItems([]);
    window.__closeEmailComposer();
    window.location.href = `mailto:${recipient}?subject=${subject}${ccParam}&body=${body}`;
  };

  const removeItemAt = (index) => {
    const nextItems = [...items];
    nextItems.splice(index, 1);
    saveSavedOrderItems(nextItems);
    window.location.reload();
  };

  window.__goBackToCreateOrder = () => {
    window.location.href = '/?openOrder=1';
  };

  window.__downloadSavedOrderPdf = () => {
    if (!items.length) return;

    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxTextWidth = pageWidth - 90;
    let y = 48;

    const addWrappedText = (rawText) => {
      const text = String(rawText ?? '').trim();
      if (!text) {
        y += 10;
        return;
      }

      const wrapped = doc.splitTextToSize(text, maxTextWidth);
      wrapped.forEach((line) => {
        if (y > pageHeight - 40) {
          doc.addPage();
          y = 48;
        }
        doc.text(line, 40, y);
        y += 18;
      });
    };

    addWrappedText('Saved Order');
    addWrappedText('====================');

    items.forEach((item, index) => {
      const normalizedItem = typeof item === 'string'
        ? { text: item, image: '', stoneName: 'Stone item' }
        : {
            text: item?.text || 'Stone item',
            image: item?.image || '',
            stoneName: item?.stoneName || 'Stone item'
          };

      addWrappedText(`Order ${index + 1}`);
      addWrappedText(`Stone: ${normalizedItem.stoneName || 'Stone item'}`);
      addWrappedText(String(normalizedItem.text || '').trim());
      addWrappedText('');
    });

    doc.save('saved-order.pdf');
  };

  app.innerHTML = `
    <main class="saved-page-shell">
      <header class="site-header">
        <div class="brand">
          <img src="https://marmotomas.com/wp-content/uploads/2021/05/marmotomas-logo-100.png" alt="Marmotomas logo" class="brand-logo" />
        </div>

        <nav class="nav-links">
          <a href="/">Home</a>
          <a href="/cart.html">Cart</a>
          <a href="/saved.html" class="active">Saved</a>
        </nav>
      </header>

      <section class="cart-page saved-page">
        <div class="section-header cart-header">
          <h2>Saved Order</h2>
        </div>

        ${items.length === 0 ? `
          <div class="cart-page-empty">No saved order found.</div>
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
                  <button class="remove-order-mark" type="button" aria-label="Remove item ${index + 1}" onclick="window.__removeSavedItem(${index})">×</button>
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

        <div class="saved-page-actions">
          <button class="secondary-btn saved-back-btn" type="button" onclick="window.__goBackToCreateOrder()">Back</button>
          <button class="secondary-btn saved-pdf-btn" type="button" onclick="window.__downloadSavedOrderPdf()">PDF</button>
          <button class="primary-btn saved-cart-btn" type="button" onclick="window.__sendSavedOrderEmail()">Buy Now</button>
        </div>
      </section>

      <div class="saved-order-email-modal hidden" id="saved-order-email-modal" role="dialog" aria-modal="true">
        <div class="saved-order-email-sheet">
          <div class="saved-order-email-toolbar">
            <div class="saved-order-email-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="saved-order-email-icons">
              <button type="button" aria-label="Reply" class="saved-order-email-icon-btn">↩</button>
              <button type="button" aria-label="Archive" class="saved-order-email-icon-btn">⤴</button>
              <button type="button" aria-label="Send" class="saved-order-email-icon-btn send">➤</button>
            </div>
          </div>

          <div class="saved-order-email-form">
            <div class="saved-order-email-row">
              <label>To:</label>
              <input id="saved-order-email-to" type="email" value="tpjlimbu61@gmail.com" />
            </div>
            <div class="saved-order-email-row">
              <label>Cc:</label>
              <input id="saved-order-email-cc" type="text" value="" />
            </div>
            <div class="saved-order-email-row">
              <label>Subject:</label>
              <input id="saved-order-email-subject" type="text" value="Stone Order Request" />
            </div>
          </div>

          <div class="saved-order-email-body-wrap">
            <div class="saved-order-email-body" id="saved-order-email-body">${buildOrderEmailBody().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          </div>

          <div class="saved-order-email-footer">
            <button type="button" class="saved-order-email-cancel" onclick="window.__closeEmailComposer()">Close</button>
            <button type="button" class="saved-order-email-send" onclick="window.__sendComposeEmail()">Send</button>
          </div>
        </div>
      </div>
    </main>
  `;

  window.__removeSavedItem = (index) => {
    if (typeof index !== 'number' || index < 0 || index >= items.length) return;
    removeItemAt(index);
  };
}
