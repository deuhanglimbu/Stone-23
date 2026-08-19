import './style.css';
import { jsPDF } from 'jspdf';
import picture1 from './assets/pictur1.webp';
import picture2 from './assets/pictur2.webp';
import picture3 from './assets/pictur3.png';
import { CartPage, getStoredCartItems, getStoredSavedOrderItems, saveCartItems, saveSavedOrderItems } from './cart/cart.jsx';

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
    </nav>
  </header>

  <main>
    <section class="single-picture-slider" aria-label="Stone gallery slider">
      <div class="carousel" id="stone-carousel">
        <div class="carousel-copy">
          <p class="carousel-kicker">STONE</p>
          <h1>Natural Stone<br />for Timeless Spaces</h1>
          <p class="carousel-subtitle">Premium marble, granite and limestone for interior and exterior projects.</p>
          <div class="carousel-actions">
            <button class="carousel-cta primary" type="button">VIEW COLLECTION</button>
            <button class="carousel-cta secondary" type="button">CONTACT US</button>
          </div>
        </div>
        <button class="carousel-btn prev" type="button" aria-label="Previous image">‹</button>
        <div class="carousel-track" id="carousel-track">
          <div class="carousel-slide active">
            <img src="${picture1}" alt="Stone warehouse front" />
          </div>
          <div class="carousel-slide">
            <img src="${picture2}" alt="Stone warehouse detail" />
          </div>
          <div class="carousel-slide">
            <img src="${picture3}" alt="Stone stock and slabs" />
          </div>
        </div>
        <button class="carousel-btn next" type="button" aria-label="Next image">›</button>
      </div>
      <div class="carousel-dots" aria-label="Slider navigation">
        <button class="dot active" type="button" aria-label="Go to slide 1"></button>
        <button class="dot" type="button" aria-label="Go to slide 2"></button>
        <button class="dot" type="button" aria-label="Go to slide 3"></button>
      </div>
    </section>

    <section class="filters" id="marketplace">
      <input type="search" placeholder="Search for flagging, steps, etc..." />
      <div class="filter-buttons">
        <button class="active" data-filter="all">All</button>
        <button id="lioz-btn" data-filter="lioz">Lioz</button>
        <button id="molenos-btn" data-filter="molenos">Molenos</button>
        <button data-filter="estarmos">Estarmos</button>
        <button data-filter="ruivina">Ruivina</button>
        <button data-filter="granit">Granit</button>
        <button data-filter="zimbabwe">Zimbabwe</button>
        <button data-filter="travertine">Travertine</button>
        <button data-filter="angola">Angola</button>
        <button data-filter="silestone">Silestone</button>
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
              <img src="https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg" alt="Granit stone sample 2" />
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

    <section class="popular" id="pricing">
      <div class="product-grid">

      </div>

    </section>

    <button class="floating-chat" aria-label="Chat with us">
      <span>💬</span>
    </button>

    <section class="cart-section hidden" id="cart-section"></section>

    <section class="our-product" aria-label="Our products">
      <div class="our-product__header">
        <p class="section-kicker">Collection</p>
        <h2>Our Product</h2>
      </div>

      <div class="our-product__grid">
        <article class="product-card">
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" alt="Marble stone product" />
          <div class="product-card__body">
            <h3>Marble Collection</h3>
            <p>Premium natural stone for elegant interiors and architectural statement pieces.</p>
          </div>
        </article>

        <article class="product-card">
          <img src="https://i.etsystatic.com/51769720/r/il/b0e4d1/7888304796/il_1588xN.7888304796_djzz.jpg" alt="Stone slab detail" />
          <div class="product-card__body">
            <h3>Stone Slab</h3>
            <p>Polished finishes and durable surfaces for kitchens, bathrooms and feature walls.</p>
          </div>
        </article>

        <article class="product-card">
          <img src="https://thumbs.dreamstime.com/b/elegant-freestanding-bathtub-creates-luxurious-relaxing-spa-experience-natural-stone-elements-bathroom-design-featuring-371294990.jpg" alt="Stone bathtub interior" />
          <div class="product-card__body">
            <h3>Luxury Bathtub</h3>
            <p>Stone-crafted bathroom elements designed for comfort, longevity and style.</p>
          </div>
        </article>

        <article class="product-card">
          <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80" alt="Granite texture product" />
          <div class="product-card__body">
            <h3>Granite Texture</h3>
            <p>Natural granitic finish with a dense, elegant appearance for premium surfaces.</p>
          </div>
        </article>
      </div>
    </section>

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
      </div>
      <div class="modal-actions">
        <button class="primary-btn" id="create-order-modal-btn" type="button">Make Order</button>
      </div>
      <button class="modal-nav right" id="modal-next" type="button" aria-label="Next image">&gt;</button>
    </div>

    <div class="order-sheet-overlay hidden" id="order-sheet-overlay">
      <div class="order-sheet" role="dialog" aria-modal="true" aria-labelledby="order-sheet-title">
        <div class="order-sheet-body" id="order-sheet-body">
          <div class="order-step active" id="order-create-step">
            <div class="order-sheet-header order-subheader">
              <div>
                <p class="order-sheet-subtitle">Create Order</p>
                <h3>Create Order</h3>
                <div class="section-underline"></div>
              </div>
            </div>

            <div class="create-order-layout">
              <div class="selected-stone-panel">
                <div class="selected-stone-preview">
                  <img id="order-preview-image" src="" alt="Selected stone" />
                </div>
                <div class="selected-stone-meta">
                  <h4>Selected Stone</h4>
                  <p id="selected-stone-name">Granit stone</p>
                </div>
                <div class="selected-stone-upload">
                  <label for="selected-stone-file" class="upload-label">Keep your design PDF file</label>
                  <input id="selected-stone-file" type="file" accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf" />
                  <div class="upload-status" id="selected-stone-file-status">No file selected</div>
                </div>
              </div>

              <div class="buy-order-file">
                <table class="buy-order-table" aria-live="polite">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Length / Width / Height (cm)</th>
                      <th>Quantity</th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody id="buy-order-row-list"></tbody>
                </table>
              </div>
            </div>

            <div class="sheet-actions">
              <button class="secondary-btn" id="order-back-btn" type="button">Back</button>
              <button class="primary-btn save-order-btn" id="save-order-create-btn" type="button">Save</button>
            </div>
          </div>

          <div class="order-step hidden" id="order-buy-step">
            <div class="order-sheet-header order-subheader">
              <div>
                <p class="order-sheet-subtitle">Create Order</p>
                <h3>Create Order</h3>
                <div class="section-underline"></div>
              </div>
            </div>

            <div class="buy-order-file">
              <table class="buy-order-table" aria-live="polite">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Length / Width / Height (cm)</th>
                    <th>Quantity</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody id="buy-order-row-list"></tbody>
              </table>
            </div>

            <div class="sheet-actions">
              <button class="secondary-btn" id="buy-back-btn" type="button">Back</button>
              <button class="primary-btn" id="final-buy-btn-buy" type="button">Buy Now</button>
            </div>
          </div>
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
const modalCreateOrderBtn = document.getElementById('create-order-modal-btn');
const orderSheetOverlay = document.getElementById('order-sheet-overlay');
const closeSheetBtn = document.getElementById('close-sheet-btn');
const pdfOrderBtn = document.getElementById('pdf-order-btn');
const orderBackBtn = document.getElementById('order-back-btn');
const saveOrderBtn = document.getElementById('save-order-create-btn');
const saveOrderCreateBtn = document.getElementById('save-order-create-btn');
const buyBackBtn = document.getElementById('buy-back-btn');
const buyNowBtn = document.getElementById('final-buy-btn-buy');
const finalBuyButtons = [
  document.getElementById('final-buy-btn-buy'),
].filter(Boolean);
const cartSection = document.getElementById('cart-section');
const cartList = document.getElementById('cart-list');
const cartCountBadge = document.getElementById('cart-count-badge');
const navCartBtn = document.getElementById('nav-cart-btn');
const orderCreateStep = document.getElementById('order-create-step');
const orderBuyStep = document.getElementById('order-buy-step');
const buyOrderRowList = document.getElementById('buy-order-row-list');
const orderPreviewImage = document.getElementById('order-preview-image');
const selectedStoneFileInput = document.getElementById('selected-stone-file');
const selectedStoneFileStatus = document.getElementById('selected-stone-file-status');
const stoneDesignCanvas = document.getElementById('stone-design-canvas');
const drawColorInput = document.getElementById('draw-color');
const drawSizeInput = document.getElementById('draw-size');
const createOrderBtn = document.getElementById('create-order-btn');
const liozImages = Array.from(document.querySelectorAll('#lioz-grid .frame-card img'));
const productImages = Array.from(document.querySelectorAll('#pricing .product-card img'));
const bodyFeatureImages = Array.from(document.querySelectorAll('.body-feature img'));
const liozBtn = document.getElementById('lioz-btn');
const molenosBtn = document.getElementById('molenos-btn');
const liozPanel = document.getElementById('lioz-panel');
const filterButtons = Array.from(document.querySelectorAll('.filter-buttons button'));
const liozCards = Array.from(document.querySelectorAll('#lioz-grid .frame-card'));
const panelFilterKeys = new Set(['lioz', 'molenos', 'estarmos', 'ruivina', 'granit', 'angola', 'travertine', 'silestone', 'basalt', 'category', 'status', 'size', 'supplier', 'availability', 'italian', 'zimbabwe', 'region']);
const excludedOrderProduct = 'Landscape 500-1000 lbs';
const travertinoChosenImage = 'https://5.imimg.com/data5/IL/BV/MY-45551159/essence-desert-travertine-tiles.jpeg';
let activeImages = liozImages;
let activeImageIndex = 0;
let currentDrawingTool = 'pen';
let isDrawing = false;
let lastPoint = null;
let shapeStartPoint = null;
let orderSaved = false;
let selectedDrawingPdf = null;
let drawingPdfObjectUrl = '';

const selectedStoneAssetKey = 'stone-selected-assets';
const selectedStoneChoiceKey = 'stone-selected-order-choice';

function getSelectedStoneInfo() {
  const fallbackStoneName = 'Travertino stone sample 1';
  const fallbackStoneImage = 'https://5.imimg.com/data5/IL/BV/MY-45551159/essence-desert-travertine-tiles.jpeg';
  const stoneName = (document.querySelector('#selected-stone-name')?.textContent || document.querySelector('#design-stone-name')?.textContent || activeImages[activeImageIndex]?.alt || fallbackStoneName).trim();
  const stoneImage = (orderPreviewImage?.src || activeImages[activeImageIndex]?.src || fallbackStoneImage).trim();

  return {
    stoneName,
    stoneImage,
  };
}

function getStoredSelectedStoneChoice() {
  try {
    const raw = localStorage.getItem(selectedStoneChoiceKey);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch (error) {
    return null;
  }
}

function saveSelectedStoneChoice(imageSrc, imageAlt) {
  try {
    localStorage.setItem(selectedStoneChoiceKey, JSON.stringify({
      image: imageSrc || '',
      name: imageAlt || 'Selected stone',
    }));
  } catch (error) {
    // ignore storage issues
  }
}

function saveSelectedStoneAsset(file) {
  if (!file || !window.localStorage) return;

  const reader = new FileReader();
  reader.onload = () => {
    const asset = {
      name: file.name,
      type: file.type || 'application/octet-stream',
      size: file.size,
      dataUrl: String(reader.result || ''),
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem(selectedStoneAssetKey) || '[]');
      const list = Array.isArray(existing) ? existing : [];
      localStorage.setItem(selectedStoneAssetKey, JSON.stringify([...list, asset]));
      if (selectedStoneFileStatus) {
        selectedStoneFileStatus.textContent = `Stored: ${asset.name}`;
      }
    } catch (error) {
      if (selectedStoneFileStatus) {
        selectedStoneFileStatus.textContent = `Storage error: ${file.name}`;
      }
    }
  };
  reader.readAsDataURL(file);
}

const cartItems = getStoredCartItems();

function updateCartBadge() {
  const count = getStoredCartItems().length;
  if (cartCountBadge) {
    cartCountBadge.textContent = String(count);
  }
}

function openCartPage() {
  window.location.href = '/cart.html?openOrder=1';
}

function renderCartList() {
  if (!cartSection) return;

  updateCartBadge();
  cartSection.innerHTML = CartPage();
  cartSection.classList.remove('hidden');
  cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (window.location.hash !== '#cart-section') {
    window.location.hash = 'cart-section';
  }
}

function addOrderToCart() {
  const rows = Array.from(buyOrderRowList?.querySelectorAll('tr') || []);
  const stoneInfo = getSelectedStoneInfo();
  const currentCartItems = getStoredCartItems();

  const orderRows = rows
    .map((row) => {
      const inputs = Array.from(row.querySelectorAll('input'));
      const values = inputs.map((input) => (input.value || '').trim());
      const hasData = values.some(Boolean);
      if (!hasData) return null;

      const [dimensions, quantity, note] = values;
      return [
        dimensions || 'Length / Width / Height',
        quantity ? `Qty: ${quantity}` : 'Qty: -',
        note ? `Note: ${note}` : 'Note: -'
      ].join('\n');
    })
    .filter(Boolean);

  if (!orderRows.length) {
    window.location.assign('/saved.html');
    return;
  }

  const orderEntry = {
    text: orderRows.join('\n\n'),
    image: stoneInfo.stoneImage || '',
    stoneName: stoneInfo.stoneName || 'Selected stone'
  };

  const nextCartItems = [...currentCartItems, orderEntry];
  const nextSavedItems = [...getStoredSavedOrderItems(), orderEntry];

  saveCartItems(nextCartItems);
  saveSavedOrderItems(nextSavedItems);
  window.location.assign('/saved.html');
}

function hasValidOrderEntry() {
  if (!buyOrderRowList) return false;

  return Array.from(buyOrderRowList.querySelectorAll('tr')).some((row) => {
    const values = Array.from(row.querySelectorAll('input')).map((input) => (input.value || '').trim());
    return values.some(Boolean);
  });
}

function updateSaveButtonState() {
  if (saveOrderCreateBtn) {
    saveOrderCreateBtn.disabled = false;
  }
  if (saveOrderBtn) {
    saveOrderBtn.disabled = false;
  }
}

function renderBuyOrderRows() {
  if (!buyOrderRowList) return;

  const rows = Array.from({ length: 200 }, (_, index) => {
    const serialNumber = index + 1;
    return `
      <tr>
        <td>${serialNumber}</td>
        <td><input type="text" class="order-row-input" placeholder="Length / Width / Height" aria-label="Length, width and height row ${serialNumber}" /></td>
        <td><input type="text" class="order-row-input" placeholder="Quantity" aria-label="Quantity row ${serialNumber}" /></td>
        <td><input type="text" class="order-row-input" placeholder="Note" aria-label="Note row ${serialNumber}" /></td>
      </tr>
    `;
  }).join('');

  buyOrderRowList.innerHTML = rows;
  buyOrderRowList.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', updateSaveButtonState);
  });
  updateSaveButtonState();
}

function getOrderSheetRows() {
  if (!buyOrderRowList) return 'No order lines entered.';

  const rows = Array.from(buyOrderRowList.querySelectorAll('tr'))
    .map((row, index) => {
      const inputs = Array.from(row.querySelectorAll('input'));
      const values = inputs.map((input) => (input.value || '').trim());
      const hasData = values.some(Boolean);

      if (!hasData) return null;

      const [dimensions, quantity, note] = values;
      const noteText = note ? `\n  Note: ${note}` : '';

      return `Row ${index + 1}\n Length / Width / Height: ${dimensions || '-'}\n Quantity: ${quantity || '-'}${noteText}`;
    })
    .filter(Boolean);

  return rows.length ? rows.join('\n\n') : 'No order lines entered.';
}

function setOrderSheetMode(mode) {
  const isCreate = mode === 'create';
  if (orderCreateStep) orderCreateStep.classList.toggle('hidden', !isCreate);
  if (orderBuyStep) orderBuyStep.classList.toggle('hidden', isCreate);
}

function initDrawingTools() {
  if (!stoneDesignCanvas) return;

  const context = stoneDesignCanvas.getContext('2d');
  if (!context) return;

  const resizeCanvas = () => {
    const ratio = window.devicePixelRatio || 1;
    const rect = stoneDesignCanvas.getBoundingClientRect();
    stoneDesignCanvas.width = Math.max(640, rect.width) * ratio;
    stoneDesignCanvas.height = Math.max(220, rect.height) * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.lineCap = 'round';
    context.lineJoin = 'round';
  };

  const getPointerPosition = (event) => {
    const rect = stoneDesignCanvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const drawLine = (from, to) => {
    context.strokeStyle = currentDrawingTool === 'eraser' ? '#ffffff' : (drawColorInput ? drawColorInput.value : '#111827');
    context.lineWidth = Number(drawSizeInput?.value || 4);
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
  };

  document.querySelectorAll('.tool-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentDrawingTool = button.dataset.tool || 'pen';
      document.querySelectorAll('.tool-btn').forEach((tool) => tool.classList.toggle('active', tool === button));
    });
  });

  stoneDesignCanvas.addEventListener('pointerdown', (event) => {
    isDrawing = true;
    lastPoint = getPointerPosition(event);
    shapeStartPoint = lastPoint;
    if (currentDrawingTool === 'pen' || currentDrawingTool === 'eraser') {
      context.beginPath();
      context.moveTo(lastPoint.x, lastPoint.y);
    }
  });

  stoneDesignCanvas.addEventListener('pointermove', (event) => {
    if (!isDrawing) return;
    const point = getPointerPosition(event);
    if (currentDrawingTool === 'pen' || currentDrawingTool === 'eraser') {
      drawLine(lastPoint, point);
      lastPoint = point;
      return;
    }

    if (shapeStartPoint) {
      const snapshot = context.getImageData(0, 0, stoneDesignCanvas.width, stoneDesignCanvas.height);
      context.putImageData(snapshot, 0, 0);
      context.strokeStyle = drawColorInput ? drawColorInput.value : '#111827';
      context.lineWidth = Number(drawSizeInput?.value || 4);
      if (currentDrawingTool === 'line') {
        context.beginPath();
        context.moveTo(shapeStartPoint.x, shapeStartPoint.y);
        context.lineTo(point.x, point.y);
        context.stroke();
      }
      if (currentDrawingTool === 'rect') {
        const width = point.x - shapeStartPoint.x;
        const height = point.y - shapeStartPoint.y;
        context.strokeRect(shapeStartPoint.x, shapeStartPoint.y, width, height);
      }
    }
  });

  stoneDesignCanvas.addEventListener('pointerup', () => {
    isDrawing = false;
    lastPoint = null;
    shapeStartPoint = null;
  });

  stoneDesignCanvas.addEventListener('pointerleave', () => {
    isDrawing = false;
    lastPoint = null;
    shapeStartPoint = null;
  });

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function shouldShowOrderButtonForImage(activeImage) {
  const imageName = (activeImage?.alt || activeImage?.dataset?.stoneName || '').trim();
  const isBodyFeatureImage = !!activeImage && activeImage.closest && activeImage.closest('.body-feature');
  if (isBodyFeatureImage) {
    return false;
  }
  return imageName !== excludedOrderProduct && imageName !== 'Landscape 500-1000 lbs';
}

function showModalImage(index) {
  if (!activeImages.length) return;
  const safeIndex = (index + activeImages.length) % activeImages.length;
  activeImageIndex = safeIndex;
  const activeImage = activeImages[safeIndex];
  modalImg.src = activeImage.src;
  modalImg.alt = activeImage.alt;

  if (modalCreateOrderBtn) {
    const canOrder = shouldShowOrderButtonForImage(activeImage);
    modalCreateOrderBtn.hidden = !canOrder;
    modalCreateOrderBtn.style.display = canOrder ? 'inline-flex' : 'none';
  }
}

function openModalWithIndex(index, images) {
  activeImages = images;
  showModalImage(index);
  imageModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function closeModal() {
  if (modalCreateOrderBtn) {
    modalCreateOrderBtn.hidden = false;
    modalCreateOrderBtn.style.display = 'inline-flex';
  }
  imageModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
}

function syncSelectedStonePreview(imageSrc, imageAlt) {
  const fallbackStoneImage = travertinoChosenImage;
  const fallbackStoneLabel = 'Travertino stone sample 1';
  const previewImage = imageSrc || fallbackStoneImage;
  const previewAlt = imageAlt || fallbackStoneLabel;

  if (orderPreviewImage) {
    orderPreviewImage.src = previewImage;
    orderPreviewImage.alt = previewAlt;
  }

  const selectedStoneNameEl = document.getElementById('selected-stone-name');
  if (selectedStoneNameEl) {
    selectedStoneNameEl.textContent = previewAlt;
  }

  saveSelectedStoneChoice(previewImage, previewAlt);
}

function openOrderSheet(event) {
  const fallbackStoneImage = travertinoChosenImage;
  const fallbackStoneLabel = 'Travertino stone sample 1';
  const button = event && event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
  const explicitImage = button?.dataset?.stoneImage || button?.dataset?.image;
  const explicitName = button?.dataset?.stoneName || button?.dataset?.title;
  const savedChoice = getStoredSelectedStoneChoice();
  const activeImage = explicitImage
    ? { src: explicitImage, alt: explicitName || fallbackStoneLabel }
    : savedChoice && savedChoice.image
      ? { src: savedChoice.image, alt: savedChoice.name || fallbackStoneLabel }
      : (activeImages[activeImageIndex] || { src: fallbackStoneImage, alt: fallbackStoneLabel });

  if (!shouldShowOrderButtonForImage(activeImage)) {
    return;
  }

  syncSelectedStonePreview(activeImage.src || fallbackStoneImage, activeImage.alt || fallbackStoneLabel);
  renderBuyOrderRows();

  if (orderSheetOverlay) {
    orderSheetOverlay.classList.remove('hidden');
  }

  setOrderSheetMode('create');

  requestAnimationFrame(() => {
    const firstRowInput = buyOrderRowList?.querySelector('input');
    if (firstRowInput) {
      firstRowInput.focus();
      firstRowInput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

function getVisibleCategoryImages() {
  const visibleCards = liozCards.filter((card) => !card.classList.contains('hidden'));
  const visibleImages = visibleCards
    .map((card) => card.querySelector('img'))
    .filter(Boolean);

  return visibleImages.length ? visibleImages : liozImages;
}

function bindImagesToModal(images) {
  images.forEach((img, index) => {
    if (!img) return;
    img.style.cursor = 'pointer';
    img.dataset.stoneImage = img.dataset.stoneImage || img.src || '';
    img.dataset.stoneName = img.dataset.stoneName || img.alt || 'Selected stone';
    img.addEventListener('click', () => {
      const visibleImages = getVisibleCategoryImages();
      const selectedIndex = visibleImages.indexOf(img);
      openModalWithIndex(selectedIndex >= 0 ? selectedIndex : index, visibleImages);
    });
  });
}

const carouselTrack = document.getElementById('carousel-track');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
const carouselDots = Array.from(document.querySelectorAll('.dot'));
const carouselPrev = document.querySelector('.carousel-btn.prev');
const carouselNext = document.querySelector('.carousel-btn.next');
let currentSlideIndex = 0;
let carouselTimer = null;

function updateCarousel(index) {
  if (!carouselTrack || !carouselSlides.length) return;

  currentSlideIndex = (index + carouselSlides.length) % carouselSlides.length;
  carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  carouselSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === currentSlideIndex);
  });

  carouselDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentSlideIndex);
  });
}

function startAutoCarousel() {
  if (!carouselSlides.length) return;

  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    updateCarousel(currentSlideIndex + 1);
  }, 4000);
}

if (carouselNext) {
  carouselNext.addEventListener('click', () => {
    updateCarousel(currentSlideIndex + 1);
    startAutoCarousel();
  });
}

if (carouselPrev) {
  carouselPrev.addEventListener('click', () => {
    updateCarousel(currentSlideIndex - 1);
    startAutoCarousel();
  });
}

carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateCarousel(index);
    startAutoCarousel();
  });
});

updateCarousel(0);
startAutoCarousel();

bindImagesToModal(liozImages);
bindImagesToModal(productImages);
bindImagesToModal(bodyFeatureImages);

const bodyFeatureSection = document.querySelector('.body-feature');
if (liozPanel && bodyFeatureSection && liozPanel.parentNode) {
  liozPanel.classList.remove('hidden');
  bodyFeatureSection.parentNode.insertBefore(liozPanel, bodyFeatureSection);
}

if (new URLSearchParams(window.location.search).get('openOrder') === '1') {
  const cartHash = window.location.hash === '#cart-section' || window.location.hash === 'cart-section';

  if (cartHash) {
    renderCartList();
  } else {
    openOrderSheet();
  }
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (closeSheetBtn) {
  closeSheetBtn.addEventListener('click', () => {
    orderSheetOverlay.classList.add('hidden');
  });
}

if (pdfOrderBtn) {
  pdfOrderBtn.addEventListener('click', () => {
    generateOrderPdf();
    const customerEmail = document.getElementById('customer-email')?.value?.trim() || 'tpjlimbu61@gmail.com';
    const companyName = document.getElementById('company-name')?.value?.trim() || 'Not provided';
    const customerName = document.getElementById('customer-name')?.value?.trim() || 'Not provided';
    const customerAddress = document.getElementById('customer-address')?.value?.trim() || 'Not provided';
    const customerPhone = document.getElementById('customer-phone')?.value?.trim() || 'Not provided';
    const stoneDetails = getSelectedStoneInfo();
    const orderRows = getOrderSheetRows();
    const drawingPdfSection = buildDrawingPdfSection();
    const emailBody = [
      'Stone Order Request',
      '==================',
      'Customer Information',
      '--------------------',
      `Company Name: ${companyName}`,
      `Name: ${customerName}`,
      `Address: ${customerAddress}`,
      `Phone Number: ${customerPhone}`,
      `Email Address: ${customerEmail}`,
      '',
      'Stone Information',
      '-----------------',
      `Stone: ${stoneDetails.stoneName}`,
      'Stone Image:',
      stoneDetails.stoneImage,
      '',
      'Order Details',
      '-------------',
      orderRows,
      '',
      drawingPdfSection,
    ].join('\n');

    const subject = encodeURIComponent('Stone Order Request');
    const body = encodeURIComponent(emailBody);
    window.open(`mailto:${customerEmail}?subject=${subject}&body=${body}`, '_blank');
  });
}
if (modalPrev && modalNext) {
  modalPrev.addEventListener('click', () => showModalImage(activeImageIndex - 1));
  modalNext.addEventListener('click', () => showModalImage(activeImageIndex + 1));
}
if (modalCreateOrderBtn) {
  modalCreateOrderBtn.addEventListener('click', () => {
    const selectedImage = activeImages[activeImageIndex] || { src: travertinoChosenImage, alt: 'Travertino stone sample 1' };
    if (!shouldShowOrderButtonForImage(selectedImage)) {
      return;
    }
    syncSelectedStonePreview(selectedImage.src || travertinoChosenImage, selectedImage.alt || 'Travertino stone sample 1');
    imageModal.classList.add('hidden');
    openOrderSheet();
  });
}

if (selectedStoneFileInput) {
  selectedStoneFileInput.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
    if (!file) {
      if (selectedStoneFileStatus) selectedStoneFileStatus.textContent = 'No file selected';
      return;
    }

    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'application/pdf',
    ];
    const extension = file.name.split('.').pop()?.toLowerCase();
    const valid = allowedTypes.includes(file.type) || ['png', 'jpg', 'jpeg', 'pdf'].includes(extension || '');

    if (!valid) {
      if (selectedStoneFileStatus) {
        selectedStoneFileStatus.textContent = 'Only PNG, JPG, JPEG, or PDF files are allowed.';
      }
      selectedStoneFileInput.value = '';
      return;
    }

    saveSelectedStoneAsset(file);
  });
}

if (orderBackBtn) {
  orderBackBtn.addEventListener('click', () => {
    orderSheetOverlay.classList.add('hidden');
    imageModal.classList.remove('hidden');
  });
}
if (buyBackBtn) {
  buyBackBtn.addEventListener('click', () => {
    setOrderSheetMode('create');
  });
}

function formatDrawingPdfSummary(file) {
  if (!file) return 'No PDF selected';

  const sizeKb = Math.max(1, Math.round(file.size / 1024));
  const fileType = file.type || 'application/pdf';
  return `${file.name} (${fileType}, ${sizeKb} KB)`;
}

function setSelectedPdf(file) {
  if (!file) {
    selectedDrawingPdf = null;
    if (drawingPdfObjectUrl) {
      URL.revokeObjectURL(drawingPdfObjectUrl);
      drawingPdfObjectUrl = '';
    }
    const pdfMeta = document.getElementById('drawing-pdf-meta');
    const pdfLink = document.getElementById('drawing-pdf-link');
    if (pdfMeta) pdfMeta.textContent = 'No PDF selected';
    if (pdfLink) {
      pdfLink.classList.add('hidden');
      pdfLink.href = '#';
      pdfLink.removeAttribute('download');
      pdfLink.textContent = 'Open drawing PDF';
    }
    return;
  }

  selectedDrawingPdf = file;
  if (drawingPdfObjectUrl) {
    URL.revokeObjectURL(drawingPdfObjectUrl);
  }
  drawingPdfObjectUrl = URL.createObjectURL(file);

  const pdfMeta = document.getElementById('drawing-pdf-meta');
  const pdfLink = document.getElementById('drawing-pdf-link');
  if (pdfMeta) pdfMeta.textContent = formatDrawingPdfSummary(file);
  if (pdfLink) {
    pdfLink.href = drawingPdfObjectUrl;
    pdfLink.classList.remove('hidden');
    pdfLink.textContent = 'Open drawing PDF';
    pdfLink.download = file.name;
  }
}

const drawingPdfInput = document.getElementById('drawing-pdf-file');
const drawingPdfBackBtn = document.getElementById('drawing-pdf-back-btn');
if (drawingPdfInput) {
  drawingPdfInput.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
    setSelectedPdf(file);
  });
}

if (drawingPdfBackBtn) {
  drawingPdfBackBtn.addEventListener('click', () => {
    setOrderSheetMode('create');
    if (orderSheetOverlay) {
      orderSheetOverlay.classList.remove('hidden');
    }
  });
}

function buildDrawingPdfSection() {
  if (!selectedDrawingPdf) return 'Drawing PDF: cheak here';

  return [
    'Drawing PDF: cheak here',
    `File Name: ${selectedDrawingPdf.name}`,
    `File Type: ${selectedDrawingPdf.type || 'application/pdf'}`,
    `File Size: ${Math.max(1, Math.round(selectedDrawingPdf.size / 1024))} KB`,
    'Attachment: selected in browser during order creation',
  ].join('\n');
}

function generateOrderPdf() {
  const companyName = document.getElementById('company-name')?.value?.trim() || 'Not provided';
  const customerName = document.getElementById('customer-name')?.value?.trim() || 'Not provided';
  const customerAddress = document.getElementById('customer-address')?.value?.trim() || 'Not provided';
  const customerPhone = document.getElementById('customer-phone')?.value?.trim() || 'Not provided';
  const customerEmail = document.getElementById('customer-email')?.value?.trim() || 'Not provided';
  const stoneDetails = getSelectedStoneInfo();
  const orderRows = getOrderSheetRows();
  const drawingPdfSection = buildDrawingPdfSection();

  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const leftX = 40;
  const contentX = 52;
  const maxTextWidth = pageWidth - 90;
  let y = 48;

  const addWrappedText = (rawLines) => {
    const lines = Array.isArray(rawLines) ? rawLines : [rawLines];

    lines.forEach((line) => {
      const text = String(line ?? '').trim();
      if (!text) {
        y += 8;
        return;
      }

      const wrapped = doc.splitTextToSize(text, maxTextWidth);
      wrapped.forEach((wrappedLine) => {
        if (y > pageHeight - 40) {
          doc.addPage();
          y = 48;
        }
        doc.text(wrappedLine, contentX, y);
        y += 16;
      });
    });
  };

  const addSection = (title, lines) => {
    if (y > pageHeight - 80) {
      doc.addPage();
      y = 48;
    }

    doc.setFont(undefined, 'bold');
    doc.text(title, leftX, y);
    y += 18;
    doc.setFont(undefined, 'normal');

    addWrappedText(lines);
    y += 8;
  };

  doc.setFontSize(18);
  doc.setTextColor(17, 24, 39);
  doc.text('Stone Order Request', leftX, y);
  y += 28;

  doc.setFontSize(12);
  doc.setTextColor(51, 65, 85);

  addSection('Customer Information', [
    `Company Name: ${companyName}`,
    `Name: ${customerName}`,
    `Address: ${customerAddress}`,
    `Phone Number: ${customerPhone}`,
    `Email Address: ${customerEmail}`,
  ]);

  addSection('Stone Information', [
    `Stone: ${stoneDetails.stoneName}`,
    `Stone Image: ${stoneDetails.stoneImage}`,
  ]);

  const orderDetailLines = orderRows === 'No order lines entered.'
    ? ['No order lines entered.']
    : orderRows.split('\n\n').filter(Boolean).flatMap((block) => block.split('\n'));

  addSection('Order Details', orderDetailLines);
  addSection('Drawing PDF', drawingPdfSection.split('\n'));

  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'stone-order-request.pdf';
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000);
  return pdfUrl;
}

async function sendOrderEmail(forceRecipient = null) {
  const companyName = document.getElementById('company-name')?.value?.trim() || 'Not provided';
  const customerName = document.getElementById('customer-name')?.value?.trim() || 'Not provided';
  const customerAddress = document.getElementById('customer-address')?.value?.trim() || 'Not provided';
  const customerPhone = document.getElementById('customer-phone')?.value?.trim() || 'Not provided';
  const customerEmail = document.getElementById('customer-email')?.value?.trim() || 'Not provided';
  const stoneDetails = getSelectedStoneInfo();
  const orderRows = getOrderSheetRows();
  const drawingPdfSection = buildDrawingPdfSection();

  const emailBody = [
    'Stone Order Request',
    '==================',
    '',
    'Customer Information',
    '--------------------',
    `Company Name: ${companyName}`,
    `Name: ${customerName}`,
    `Address: ${customerAddress}`,
    `Phone Number: ${customerPhone}`,
    `Email Address: ${customerEmail}`,
    '',
    'Stone Information',
    '-----------------',
    `Stone: ${stoneDetails.stoneName}`,
    stoneDetails.stoneImage ? `Stone Image: ${stoneDetails.stoneImage}` : 'Stone Image: Not provided',
    '',
    'Order Details',
    '-------------',
    orderRows,
    '',
    'Drawing PDF',
    drawingPdfSection,
  ].join('\n');

  const pdfUrl = generateOrderPdf();
  const recipient = forceRecipient || (customerEmail !== 'Not provided' ? customerEmail : 'tpjlimbu61@gmail.com');
  const subject = encodeURIComponent('Stone Order Request');
  const body = encodeURIComponent(emailBody);

  saveCartItems([]);

  if (pdfUrl) {
    try {
      const pdfWindow = window.open(pdfUrl, '_blank');
      if (pdfWindow) {
        pdfWindow.opener = null;
      }
    } catch (error) {
      // Android browsers can block popup windows, so we fall back to direct navigation below.
    }
  }

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

if (navCartBtn) {
  navCartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openCartPage();
  });
}

if (saveOrderBtn) {
  saveOrderBtn.addEventListener('click', () => {
    addOrderToCart();
  });
}

if (buyNowBtn) {
  buyNowBtn.disabled = false;
  buyNowBtn.removeAttribute('disabled');
  buyNowBtn.addEventListener('click', () => {
    sendOrderEmail('tpjlimbu61@gmail.com');
  });
}

if (finalBuyButtons.length) {
  finalBuyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sendOrderEmail('tpjlimbu61@gmail.com');
    });
  });
}

[saveOrderCreateBtn, saveOrderBtn].filter(Boolean).forEach((button) => {
  button.addEventListener('click', () => {
    addOrderToCart();
  });
});

finalBuyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sendOrderEmail('tpjlimbu61@gmail.com');
  });
});

if (createOrderBtn) {
  createOrderBtn.addEventListener('click', () => {
    setOrderSheetMode('buy');
  });
}

initDrawingTools();
renderBuyOrderRows();
setOrderSheetMode('create');

document.addEventListener('keydown', (event) => {
  if (imageModal && !imageModal.classList.contains('hidden')) {
    if (event.key === 'ArrowLeft') showModalImage(activeImageIndex - 1);
    if (event.key === 'ArrowRight') showModalImage(activeImageIndex + 1);
    if (event.key === 'Escape') closeModal();
  }

  if (orderSheetOverlay && !orderSheetOverlay.classList.contains('hidden')) {
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') setOrderSheetMode('create');
    if (event.key === 'ArrowRight' || event.key === 'PageDown') setOrderSheetMode('buy');
  }
});

imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) closeModal();
});

// Filter panel content by selected category button
let activeStoneFilter = null;

function setAllFilterActive() {
  activeStoneFilter = null;
  filterButtons.forEach((button) => {
    const isAllButton = (button.dataset.filter || '').trim().toLowerCase() === 'all';
    button.classList.toggle('active', isAllButton);
  });
  liozCards.forEach((card) => card.classList.remove('hidden'));
  updateLiozPanelState(true);
}

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

  if (visibleCount === 0) {
    liozCards.forEach(card => card.classList.remove('hidden'));
  }

  activeImages = getVisibleCategoryImages();
  activeImageIndex = 0;
}

setAllFilterActive();

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const selectedFilter = (button.dataset.filter || button.textContent || '').trim().toLowerCase();
    if (selectedFilter === 'all') {
      setAllFilterActive();
      return;
    }

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




