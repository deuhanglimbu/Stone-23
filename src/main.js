import './style.css';

const app = document.querySelector('#app');
const frame3ImageDataUri = 'data:image/webp;base64,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';
app.innerHTML = `
  <div class="main-app" id="main-app">
  <header class="site-header">
    <div class="brand">
      <img src="https://marmotomas.com/wp-content/uploads/2021/05/marmotomas-logo-100.png" alt="Marmotomas logo" class="brand-logo" />
    </div>

    <div class="header-search">
      <input type="search" id="header-search-input" placeholder="Search for flagging, steps, etc..." />
    </div>

    <nav class="nav-links">
      <a href="#marketplace">Marketplace</a>
      <a href="#">Stone Types</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#" class="nav-cta">Request a Load</a>
    </nav>
  </header>

  <main>
    <section class="filters" id="marketplace">
      <input type="search" placeholder="Search for flagging, steps, etc..." />
      <div class="filter-buttons">
        <button>All</button>
        <button id="lioz-btn">Lioz</button>
        <button id="molenos-btn">Molenos</button>
        <button>Estarmos</button>
        <button>Ruivina</button>
        <button>Granit</button>
        <button>Zimbabwe</button>
        <button>Travertine</button>
        <button>Angola</button>
        <button>Silestone</button>
      </div>
    </section>

    <section id="lioz-panel" class="lioz-panel hidden">
      <div class="lioz-scroller">
        <div class="lioz-grid" id="lioz-grid">
          <div class="frame-card" data-filters="lioz category">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_artigos_galeria/foto[231].jpg" alt="Lioz stone" />
              <p class="frame-caption">Lioz</p>
            </div>
          </div>
          <div class="frame-card" data-filters="lioz category">
            <div class="frame-inner">
              <img src="https://www.criteriofavorito.com/images/data/catalogue/27/marmore-lioz1.jpg" alt="Lioz stone sample 2" />
              <p class="frame-caption">Lioz</p>
            </div>
          </div>
          <div class="frame-card" data-filters="lioz category">
            <div class="frame-inner">
              <img src="https://www.marmoresdagranja.com/galeria/pedras/5f71ebc4df4e0_lioz-rr.JPG" alt="Lioz stone sample 3" />
              <p class="frame-caption">Lioz</p>
            </div>
          </div>
          <div class="frame-card" data-filters="lioz category">
            <div class="frame-inner">
              <img src="https://www.galrao.com/wp-content/uploads/2024/09/Lioz-cover.jpg" alt="Lioz stone sample 4" />
              <p class="frame-caption">Lioz</p>
            </div>
          </div>
          <div class="frame-card" data-filters="lioz category">
            <div class="frame-inner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPHHo6SbhuprsGuBpAZtlMOvjJwjYcQ1UUXpuY4qJ8DFNfQ7m1TEgX-f5&s=10" alt="Lioz stone sample 5" />
              <p class="frame-caption">Lioz</p>
            </div>
          </div>
          <div class="frame-card" data-filters="molenos category">
            <div class="frame-inner">
              <img src="https://www.mandarinstone.com/app/uploads/2017/09/Moleanos-Honed-Limestone-Swatch.jpg" alt="Molenos stone" />
              <p class="frame-caption">Molenos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="molenos category">
            <div class="frame-inner">
              <img src="https://cdn.prod.website-files.com/5e1cf94f2b50942f7e1af54d/5e3b79097f457663912cac8f_moleanos-beige-detail.jpeg" alt="Molenos stone sample 2" />
              <p class="frame-caption">Molenos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="molenos category">
            <div class="frame-inner">
              <img src="https://inoperagroup.com/wp-content/uploads/Moleanos.jpg" alt="Molenos stone sample 3" />
              <p class="frame-caption">Molenos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="molenos category">
            <div class="frame-inner">
              <img src="https://natstone.pt/wp-content/uploads/2019/09/NMN-600x600.jpg" alt="Molenos stone sample 4" />
              <p class="frame-caption">Molenos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="molenos category">
            <div class="frame-inner">
              <img src="https://www.moleanos.com/wp-content/uploads/2015/06/03.-moleanos-classic-sandblasted-brushed1.jpg" alt="Molenos stone sample 5" />
              <p class="frame-caption">Molenos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="estarmos category">
            <div class="frame-inner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iYKrChcH5ytg129-c8WkFHRJN5IDkq1XaS5FQo8AtmHuRxZ1fgKdswJx&s=10" alt="Estarmos stone" />
              <p class="frame-caption">Estarmos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="estarmos category">
            <div class="frame-inner">
              <img src="https://image.made-in-china.com/2f0j00fpioPKhdbGrj/Natural-Stone-polished-honed-Albert-Grey-Marble-Slabs-for-interior-floor-wall-background-tiles-countertops-stairs-sills-mosaic-decoration.webp" alt="Estarmos stone sample 2" />
              <p class="frame-caption">Estarmos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="estarmos category">
            <div class="frame-inner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewZ_C1zOOrRpWpHOgoJYMsyt2rSZ3K6cRnSF0cj-W0w&s=10" alt="Estarmos stone sample 3" />
              <p class="frame-caption">Estarmos</p>
            </div>
          </div>
          <div class="frame-card" data-filters="ruivina category">
            <div class="frame-inner">
              <img src="https://pedrasalexandreecatarino.com/wp-content/uploads/2018/08/M%C3%A1rmore-Ruivina-480x480.png" alt="Ruivina stone" />
              <p class="frame-caption">Ruivina</p>
            </div>
          </div>
          <div class="frame-card" data-filters="granit category">
            <div class="frame-inner">
              <img src="https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg" alt="Granit stone" />
              <p class="frame-caption">Granit</p>
            </div>
          </div>
          <div class="frame-card" data-filters="angola category">
            <div class="frame-inner">
              <img src="https://www.stoneculture.co.uk/wp-content/uploads/2016/12/Stone_Culture_Angola_Black-scaled.jpg" alt="Angola stone sample" />
              <p class="frame-caption">Angola</p>
            </div>
          </div>
          <div class="frame-card" data-filters="travertine category">
            <div class="frame-inner">
              <img src="https://5.imimg.com/data5/IL/BV/MY-45551159/essence-desert-travertine-tiles.jpeg" alt="Travertino stone sample 1" />
              <p class="frame-caption">Travertino</p>
            </div>
          </div>
          <div class="frame-card" data-filters="silestone category">
            <div class="frame-inner">
              <img src="https://blueplanetrockks.com/wp-content/uploads/2026/02/Pure-White.jpg" alt="Silestone stone sample" />
              <p class="frame-caption">Silestone</p>
            </div>
          </div>
          <div class="frame-card" data-filters="silestone category">
            <div class="frame-inner">
              <img src="https://www.yomistone.com/wp-content/uploads/2020/06/YMQ214-White-Fantasy.jpg" alt="Silestone stone sample 2" />
              <p class="frame-caption">Silestone</p>
            </div>
          </div>
          <div class="frame-card" data-filters="zimbabwe category">
            <div class="frame-inner">
              <img src="https://www.stone.be/sites/default/files/product/swatch/large/img/NTS_Zimbabwe_Swatch_Lagre.jpg" alt="Zimbabwe stone sample" />
              <p class="frame-caption">Zimbabwe</p>
            </div>
          </div>
          <div class="frame-card" data-filters="zimbabwe category">
            <div class="frame-inner">
              <img src="https://granitex.ie/wp-content/uploads/2014/11/nero-zimbawe.jpg" alt="Zimbabwe stone sample 2" />
              <p class="frame-caption">Zimbabwe</p>
            </div>
          </div>
          <div class="frame-card" data-filters="zimbabwe category">
            <div class="frame-inner">
              <img src="https://mqpolska.pl/media/djcatalog2/images/item/2/zimbabwe-black_f.jpg" alt="Zimbabwe stone sample 3" />
              <p class="frame-caption">Zimbabwe</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="popular featured-products" id="pricing-top">
      <div class="product-grid single-feature">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-iwE41Et2XjPpgYPHGs3rRfOWmXnL7frEWKFI31Myrk2at5fimzh7x5rYHZ5Xizcs_Oc7833WR2bRtVjvm7osvjIng6SAymiYeWiRnpYXM4epFis4NOAYdSG2Fj-ykw0ZWYg0rTx9cJMx=s1360-w1360-h1020-rw" alt="Featured product 1" />
          </div>
        </article>
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl7T-cyn5ZZd8TtqHo2GvTK8lHBT3t8BFXTp_MwFO_aW8pxTj1NUBB5HeBVk2AYBvjhbyjnXvnIDbBaU_wbAlw9h9KyQVvUMQXFENOMPJc1CV_1s9qyzKikhSnIIHcGQvi9SzvvWKoXw0lz=s1360-w1360-h1020-rw" alt="Featured product 2" />
          </div>
        </article>
      </div>
    </section>

    <section class="popular" id="pricing">
      <div class="product-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="${frame3ImageDataUri}" alt="Frame 3" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.51-4-768x768.jpeg" alt="Landscaper Specimen 3000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscaper Specimen 3000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPfeQV3RGozli__QEOLXFXnQqf7RI7xpnvZiEgwU6HA&s=10" alt="Landscape 500-1000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscape 500-1000 lbs</p>
          </div>
        </article>

        <article class="product-card out-of-stock">
          <div class="image-wrap">
            <img src="https://www.panellingcentre.ie/images/200731-PC-Website-Worktops-600x600-V1-silestone1.jpg" alt="Silestone product" />
            <span class="stock-badge">Out of stock</span>
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - KS</p>
            <p class="product-title">Flint Hills Gray/Plaza Gray thin veneer Rumble/ashlar pattern</p>
          </div>
        </article>

      </div>

    </section>

    <button class="floating-chat" aria-label="Chat with us">
      <span>💬</span>
    </button>

    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-section">
          <img src="https://marmotomas.com/wp-content/uploads/2021/05/marmotomas-logo-100.png" alt="Marmotomas logo" class="footer-brand-logo" />
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p><strong>Morada:</strong><br/>Estrada Nacional 9, Ral Santa Maria e São Miguel, 2710-039 SINTRA</p>
          <p><strong>Horário Funcionamento:</strong><br/>Segunda – Sexta 08h às 17:30h</p>
        </div>
        <div class="footer-section footer-contact">
          <p><a href="#">Direction on Google</a></p>
          <p><strong>Email</strong><br/><a href="mailto:contact@unitedcarriers.com">contact@unitedcarriers.com</a></p>
          <p><strong>Hotline</strong><br/>1300 000 082</p>
          <p><strong>Office Hours</strong><br/>Monday - Friday / 8:30AM - 5PM</p>
        </div>
      </div>
      <div class="footer-bottom"></div>
    </footer>

    <div class="image-modal hidden" id="image-modal">
      <button class="modal-nav left" id="modal-prev" type="button" aria-label="Previous image">&lt;</button>
      <button class="modal-close" id="modal-close" aria-label="Close">×</button>
      <div class="modal-image-stage">
        <img id="modal-img" src="" alt="" />
        <div class="modal-actions">
          <button class="order-trigger" id="make-order-btn" type="button">Make a Order</button>
        </div>
      </div>
      <button class="modal-nav right" id="modal-next" type="button" aria-label="Next image">&gt;</button>
    </div>

    <div class="order-sheet-overlay hidden" id="order-sheet-overlay">
      <div class="order-sheet" role="dialog" aria-modal="true" aria-labelledby="order-sheet-title">
        <div class="order-sheet-header">
          <div>
            <p class="order-sheet-subtitle">Stone Order Request</p>
            <h3 id="order-sheet-title">Order Paper</h3>
          </div>
          <button class="close-sheet" id="close-sheet-btn" type="button" aria-label="Close order form">×</button>
        </div>

        <div class="order-sheet-body">
          <div class="order-sheet-form">
            <label>
              <span>Company Name</span>
              <input id="company-name" type="text" placeholder="Company name" />
            </label>

            <label>
              <span>Name</span>
              <input id="customer-name" type="text" placeholder="Enter name" />
            </label>

            <label>
              <span>Address</span>
              <textarea id="customer-address" rows="3" placeholder="Enter address"></textarea>
            </label>

            <div class="field-row two-col">
              <label>
                <span>Phone Number</span>
                <input id="customer-phone" type="tel" placeholder="Phone number" />
              </label>
              <label>
                <span>Email Address</span>
                <input id="customer-email" type="email" placeholder="Email address" />
              </label>
            </div>

            <div class="stone-preview-box">
              <div class="stone-preview-header">
                <div class="stone-preview-label">Selected Stone Image</div>
                <div class="stone-preview-name">Granit stone</div>
              </div>
              <div class="stone-preview-frame">
                <img id="order-preview-image" src="" alt="Selected stone" />
              </div>
            </div>

          </div>

          <aside class="order-design-panel">
            <div class="canvas-toolbar">
              <button type="button" class="tool-btn active" data-tool="pen">Pen</button>
              <button type="button" class="tool-btn" data-tool="line">Line</button>
              <button type="button" class="tool-btn" data-tool="rect">Rectangle</button>
              <button type="button" class="tool-btn" data-tool="eraser">Eraser</button>
              <button type="button" class="tool-btn" data-tool="clear">Clear</button>
              <input id="draw-color" type="color" value="#1f2937" aria-label="Choose drawing color" />
              <input id="draw-size" type="range" min="1" max="18" value="4" aria-label="Choose brush size" />
            </div>
            <canvas id="stone-design-canvas" width="320" height="260" aria-label="Stone design drawing area"></canvas>
          </aside>
        </div>

        <div class="sheet-actions">
          <button class="secondary-btn" id="order-details-btn" type="button">Order Details</button>
          <button class="primary-btn" id="submit-order-btn" type="button">Submit</button>
        </div>
      </div>
    </div>

    <div class="detail-document-overlay hidden" id="detail-document-overlay">
      <div class="detail-document" role="dialog" aria-modal="true" aria-labelledby="detail-document-title">
        <div class="detail-document-header">
          <div>
            <p class="order-sheet-subtitle">Order Details</p>
            <h3 id="detail-document-title">Detail Pages</h3>
          </div>
          <button class="close-sheet" id="close-detail-document-btn" type="button" aria-label="Close detail document">×</button>
        </div>

        <div class="detail-page-view" id="detail-pages-container"></div>

        <div class="detail-nav">
          <button type="button" class="nav-detail-page" id="save-detail-page-btn">Save</button>
        </div>
      </div>
    </div>

  </main>
  </div>
`;

// Sync header search with filter section search
const headerSearchInput = document.getElementById('header-search-input');
const filterSearchInput = document.querySelector('.filters input[type="search"]');
if (headerSearchInput && filterSearchInput) {
  headerSearchInput.addEventListener('input', () => {
    filterSearchInput.value = headerSearchInput.value;
    filterSearchInput.dispatchEvent(new Event('input'));
  });
}

// Enlarge any frame card image on click
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const makeOrderBtn = document.getElementById('make-order-btn');
const showStoneImageBtn = document.getElementById('show-stone-image-btn');
const orderSheetOverlay = document.getElementById('order-sheet-overlay');
const closeSheetBtn = document.getElementById('close-sheet-btn');
const submitOrderBtn = document.getElementById('submit-order-btn');
const orderDetailsBtn = document.getElementById('order-details-btn');
const orderPreviewImage = document.getElementById('order-preview-image');
const selectedStoneName = document.getElementById('selected-stone-name');
const designStoneName = document.getElementById('design-stone-name');
const detailDocumentOverlay = document.getElementById('detail-document-overlay');
const closeDetailDocumentBtn = document.getElementById('close-detail-document-btn');
const detailPagesContainer = document.getElementById('detail-pages-container');
const saveDetailPageBtn = document.getElementById('save-detail-page-btn');
const liozImages = Array.from(document.querySelectorAll('#lioz-grid .frame-card img'));
const productImages = Array.from(document.querySelectorAll('#pricing .product-card img'));
let activeImages = liozImages;
let activeImageIndex = 0;
let detailDocumentPageIndex = 0;
const totalDetailPages = 1;
const detailDocumentData = Array.from({ length: 200 }, (_, index) => ({
  sn: index + 1,
  lengthWidth: '',
  height: '',
  quantity: '',
  etc: '',
}));

function collectDetailDocumentSummary() {
  return detailDocumentData.map((row) => (
    `${row.sn} | ${row.lengthWidth} | ${row.height} | ${row.quantity} | ${row.etc}`
  )).join('\n');
}

function showModalImage(index) {
  if (!activeImages.length) return;
  const safeIndex = (index + activeImages.length) % activeImages.length;
  activeImageIndex = safeIndex;
  const activeImage = activeImages[safeIndex];
  modalImg.src = activeImage.src;
  modalImg.alt = activeImage.alt;
}

function openModalWithIndex(index, images) {
  activeImages = images;
  showModalImage(index);
  imageModal.classList.remove('hidden');
}

function closeModal() {
  imageModal.classList.add('hidden');
  if (orderSheetOverlay) {
    orderSheetOverlay.classList.add('hidden');
  }
}

function openOrderSheet() {
  const fallbackStoneImage = 'https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg';
  const fallbackStoneLabel = 'Granit stone';
  const activeImage = activeImages[activeImageIndex] || { src: fallbackStoneImage, alt: fallbackStoneLabel };

  if (orderPreviewImage) {
    orderPreviewImage.src = activeImage.src || fallbackStoneImage;
    orderPreviewImage.alt = activeImage.alt || fallbackStoneLabel;
  }

  const stoneLabel = activeImage.alt || fallbackStoneLabel;
  if (selectedStoneName) selectedStoneName.textContent = stoneLabel;
  if (designStoneName) designStoneName.textContent = stoneLabel;
  if (orderSheetOverlay) orderSheetOverlay.classList.remove('hidden');
}

function bindImagesToModal(images) {
  images.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      openModalWithIndex(index, images);
    });
  });
}

bindImagesToModal(liozImages);
bindImagesToModal(productImages);

modalClose.addEventListener('click', closeModal);
if (closeSheetBtn) closeSheetBtn.addEventListener('click', () => orderSheetOverlay.classList.add('hidden'));
if (modalPrev && modalNext) {
  modalPrev.addEventListener('click', () => showModalImage(activeImageIndex - 1));
  modalNext.addEventListener('click', () => showModalImage(activeImageIndex + 1));
}
if (makeOrderBtn) makeOrderBtn.addEventListener('click', openOrderSheet);
if (showStoneImageBtn) {
  showStoneImageBtn.addEventListener('click', () => {
    const imageSrc = orderPreviewImage?.src || 'https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg';
    const imageAlt = selectedStoneName?.textContent || 'Granit stone';
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    imageModal.classList.remove('hidden');
  });
}

function sendOrderEmail() {
  const companyName = document.getElementById('company-name')?.value?.trim() || 'Not provided';
  const customerType = document.getElementById('customer-type')?.value || 'Company';
  const customerName = document.getElementById('customer-name')?.value?.trim() || 'Not provided';
  const customerAddress = document.getElementById('customer-address')?.value?.trim() || 'Not provided';
  const customerPhone = document.getElementById('customer-phone')?.value?.trim() || 'Not provided';
  const customerEmail = document.getElementById('customer-email')?.value?.trim() || 'Not provided';
  const orderNotes = document.getElementById('order-notes')?.value?.trim() || collectDetailDocumentSummary();
  const requestedStoneName = 'Granit stone';
  const requestedStoneImageSrc = 'https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg';
  const stoneName = (selectedStoneName?.textContent?.trim() || requestedStoneName).trim();
  const stoneImageSrc = (orderPreviewImage?.src || (activeImages[activeImageIndex]?.src ?? requestedStoneImageSrc)).trim();

  const emailBody = [
    'Stone Order Request',
    '==================',
    `Company Name: ${companyName}`,
    `Type: ${customerType}`,
    `Name: ${customerName}`,
    `Address: ${customerAddress}`,
    `Phone Number: ${customerPhone}`,
    `Email Address: ${customerEmail}`,
    `Stone: ${stoneName}`,
    'Selected Stone Image:',
    stoneImageSrc || requestedStoneImageSrc,
    'Order Details:',
    orderNotes,
  ].join('\n');

  const subject = encodeURIComponent('Stone Order Request');
  const body = encodeURIComponent(emailBody);
  const mailtoLink = `mailto:tpjlimbu61@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
}

if (submitOrderBtn) {
  submitOrderBtn.addEventListener('click', () => {
    submitOrderBtn.textContent = 'Sending...';
    submitOrderBtn.disabled = true;

    setTimeout(() => {
      sendOrderEmail();
      submitOrderBtn.textContent = 'Submit';
      submitOrderBtn.disabled = false;
    }, 200);
  });
}

function renderDetailDocumentPages() {
  if (!detailPagesContainer) return;

  detailPagesContainer.innerHTML = '';

  const page = document.createElement('div');
  page.className = 'detail-page active';

  const rows = Array.from({ length: detailDocumentData.length }, (_, rowIndex) => {
    const row = detailDocumentData[rowIndex];
    if (!row) return '';

    return `
      <tr>
        <td>${row.sn}</td>
        <td><input type="text" value="${row.lengthWidth ?? ''}" data-row-index="${rowIndex}" data-field="lengthWidth" placeholder="Length/Width" /></td>
        <td><input type="text" value="${row.height ?? ''}" data-row-index="${rowIndex}" data-field="height" placeholder="Height" /></td>
        <td><input type="text" value="${row.quantity ?? ''}" data-row-index="${rowIndex}" data-field="quantity" placeholder="Quantity" /></td>
        <td><input type="text" value="${row.etc ?? ''}" data-row-index="${rowIndex}" data-field="etc" placeholder="Etc" /></td>
      </tr>
    `;
  }).join('');

  page.innerHTML = `
    <table class="detail-table">
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Length/Width</th>
          <th>Height</th>
          <th>Quantity</th>
          <th>Etc</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;

  page.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', (event) => {
      const target = event.target;
      const rowIndex = Number(target.dataset.rowIndex);
      const field = target.dataset.field;
      if (detailDocumentData[rowIndex]) {
        detailDocumentData[rowIndex][field] = target.value;
      }
    });
  });

  detailPagesContainer.appendChild(page);
}

function openDetailDocument() {
  detailDocumentPageIndex = 0;
  renderDetailDocumentPages();
  detailDocumentOverlay?.classList.remove('hidden');
}

if (orderDetailsBtn) {
  orderDetailsBtn.addEventListener('click', openDetailDocument);
}

if (closeDetailDocumentBtn) {
  closeDetailDocumentBtn.addEventListener('click', () => {
    detailDocumentOverlay?.classList.add('hidden');
  });
}

if (saveDetailPageBtn) {
  saveDetailPageBtn.addEventListener('click', () => {
    if (saveDetailPageBtn.dataset.orderReady === 'true') {
      sendOrderEmail();
      detailDocumentOverlay?.classList.add('hidden');
      return;
    }

    saveDetailPageBtn.dataset.orderReady = 'true';
    saveDetailPageBtn.textContent = 'Buy Now';
  });
}

renderDetailDocumentPages();

const stoneDesignCanvas = document.getElementById('stone-design-canvas');
const drawColorInput = document.getElementById('draw-color');
const drawSizeInput = document.getElementById('draw-size');
const drawingToolButtons = Array.from(document.querySelectorAll('.tool-btn'));

if (stoneDesignCanvas) {
  const ctx = stoneDesignCanvas.getContext('2d');
  let activeTool = 'pen';
  let isDrawing = false;
  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let lastY = 0;

  function setCanvasBackground() {
    ctx.clearRect(0, 0, stoneDesignCanvas.width, stoneDesignCanvas.height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, stoneDesignCanvas.width, stoneDesignCanvas.height);
  }

  function updateStrokeStyle() {
    const size = Number(drawSizeInput?.value || 4);
    const color = drawColorInput?.value || '#1f2937';
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }

  function setTool(toolName) {
    activeTool = toolName;
    drawingToolButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.tool === toolName);
    });
  }

  function clearCanvas() {
    setCanvasBackground();
  }

  function getCanvasPoint(event) {
    const rect = stoneDesignCanvas.getBoundingClientRect();
    const scaleX = stoneDesignCanvas.width / rect.width;
    const scaleY = stoneDesignCanvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawRect(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2 - x1, y2 - y1);
    ctx.stroke();
  }

  setCanvasBackground();
  updateStrokeStyle();

  drawingToolButtons.forEach(button => {
    button.addEventListener('click', () => {
      const toolName = button.dataset.tool;
      if (toolName === 'clear') {
        clearCanvas();
        return;
      }
      setTool(toolName);
    });
  });

  drawColorInput?.addEventListener('input', updateStrokeStyle);
  drawSizeInput?.addEventListener('input', updateStrokeStyle);

  stoneDesignCanvas.addEventListener('pointerdown', event => {
    const point = getCanvasPoint(event);
    isDrawing = true;
    startX = point.x;
    startY = point.y;
    lastX = point.x;
    lastY = point.y;
    updateStrokeStyle();

    if (activeTool === 'eraser') {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = Number(drawSizeInput?.value || 4) + 8;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      return;
    }

    if (activeTool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    }
  });

  stoneDesignCanvas.addEventListener('pointermove', event => {
    if (!isDrawing) return;
    const point = getCanvasPoint(event);

    if (activeTool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      lastX = point.x;
      lastY = point.y;
      return;
    }

    if (activeTool === 'eraser') {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      lastX = point.x;
      lastY = point.y;
      return;
    }

    if (activeTool === 'line') {
      const prev = stoneDesignCanvas.toDataURL();
      const img = new Image();
      img.onload = () => {
        setCanvasBackground();
        ctx.drawImage(img, 0, 0);
        drawLine(startX, startY, point.x, point.y);
      };
      img.src = prev;
      return;
    }

    if (activeTool === 'rect') {
      const prev = stoneDesignCanvas.toDataURL();
      const img = new Image();
      img.onload = () => {
        setCanvasBackground();
        ctx.drawImage(img, 0, 0);
        drawRect(startX, startY, point.x, point.y);
      };
      img.src = prev;
    }
  });

  stoneDesignCanvas.addEventListener('pointerup', event => {
    if (!isDrawing) return;
    const point = getCanvasPoint(event);

    if (activeTool === 'line') {
      drawLine(startX, startY, point.x, point.y);
    }

    if (activeTool === 'rect') {
      drawRect(startX, startY, point.x, point.y);
    }

    if (activeTool === 'eraser') {
      ctx.restore();
    }

    isDrawing = false;
  });

  stoneDesignCanvas.addEventListener('pointerleave', () => {
    isDrawing = false;
  });
}

document.addEventListener('keydown', e => {
  if (imageModal.classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') showModalImage(activeImageIndex - 1);
  if (e.key === 'ArrowRight') showModalImage(activeImageIndex + 1);
  if (e.key === 'Escape') closeModal();
});

imageModal.addEventListener('click', e => {
  if (e.target === imageModal) closeModal();
});

// Filter panel content by selected category button
const liozBtn = document.getElementById('lioz-btn');
const molenosBtn = document.getElementById('molenos-btn');
const liozPanel = document.getElementById('lioz-panel');
const filterButtons = Array.from(document.querySelectorAll('.filter-buttons button'));
const liozCards = Array.from(document.querySelectorAll('#lioz-grid .frame-card'));
const panelFilterKeys = new Set(['lioz', 'molenos', 'estarmos', 'ruivina', 'granit', 'angola', 'travertine', 'silestone', 'basalt', 'category', 'status', 'size', 'supplier', 'availability', 'italian', 'zimbabwe', 'region']);
let activeStoneFilter = null;

function updateLiozPanelState(isOpen) {
  if (!liozPanel) return;
  liozPanel.classList.toggle('hidden', !isOpen);
  const expandedState = String(isOpen);
  if (liozBtn) liozBtn.setAttribute('aria-expanded', expandedState);
  if (molenosBtn) molenosBtn.setAttribute('aria-expanded', expandedState);
}

function applyPanelFilter(filterKey) {
  let visibleCount = 0;
  liozCards.forEach(card => {
    const cardFilters = (card.dataset.filters || '').split(/\s+/).filter(Boolean);
    const isMatch = cardFilters.includes(filterKey);
    card.classList.toggle('hidden', !isMatch);
    if (isMatch) visibleCount += 1;
  });

  // If a category has no mapped cards yet, fallback to showing all cards.
  if (visibleCount === 0) {
    liozCards.forEach(card => card.classList.remove('hidden'));
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const selectedFilter = (button.textContent || '').trim().toLowerCase();
    if (!panelFilterKeys.has(selectedFilter)) {
      activeStoneFilter = null;
      updateLiozPanelState(false);
      return;
    }

    const isPanelOpen = liozPanel && !liozPanel.classList.contains('hidden');
    const isSameFilter = activeStoneFilter === selectedFilter;

    if (isPanelOpen && isSameFilter) {
      activeStoneFilter = null;
      updateLiozPanelState(false);
      return;
    }

    activeStoneFilter = selectedFilter;
    applyPanelFilter(selectedFilter);
    updateLiozPanelState(true);
  });
});




