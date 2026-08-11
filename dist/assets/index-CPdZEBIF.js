(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const w=document.querySelector("#app");w.innerHTML=`
  <header class="site-header">
    <div class="brand">
      <span class="brand-mark">STONE</span>
      <span class="brand-name">LOADS</span>
    </div>

    <nav class="nav-links">
      <a href="#marketplace">Marketplace</a>
      <a href="#">Stone Types</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#" class="nav-cta">Request a Load</a>
    </nav>

    <a href="#pricing" class="login-link">Log in for Wholesale Pricing</a>
  </header>

  <main>
    <section class="filters" id="marketplace">
      <input type="search" placeholder="Search for flagging, steps, etc..." />
      <div class="filter-buttons">
        <button id="lioz-btn">Lios</button>
        <button id="mulenos-btn">Mulenos</button>
        <button>Category</button>
        <button>Status</button>
        <button>Size</button>
        <button>Supplier</button>
        <button>Availability</button>
        <button>Price</button>
        <button>Region</button>
      </div>
    </section>

    <section id="lioz-panel" class="lioz-panel hidden">
      <div class="lioz-scroller">
        <div class="lioz-grid" id="lioz-grid">
          <div class="frame-card">
            <div class="frame-inner">
              <img class="et-marquina-img" src="https://natstone.pt/wp-content/uploads/2019/09/NMN.jpg" alt="Mulenos Frame 1" />
              <p class="frame-caption">Frame 1</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_temas/icon[29].jpg" alt="Lioz Red Stone" />
              <p class="frame-caption">Lioz Red</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_artigos_galeria/foto[231].jpg" alt="Mulenos" />
              <p class="frame-caption">Mulenos</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_artigos_galeria/foto[229].jpg" alt="Mulenos" />
              <p class="frame-caption">Mulenos</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.stoneexpertise.com/image.php?image=lioz-classico-95900859.jpg&maxwidth=2400" alt="Lioz Classico frame 6" />
              <p class="frame-caption">Frame 6</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">Frame 7</div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">Frame 8</div>
          </div>
        </div>
      </div>
    </section>

    <section class="popular" id="pricing">
      <h2>Our Products</h2>
      <div class="product-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.51-4-768x768.jpeg" alt="Landscaper Specimen 3000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscaper Specimen 3000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.50-3-768x768.jpeg" alt="Landscape 500-1000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscape 500-1000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?auto=format&fit=crop&w=800&q=80" alt="Landscaper 3000 lbs 8-12 per pallet" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscaper 3000 lbs 8-12 per pallet</p>
          </div>
        </article>

        <article class="product-card out-of-stock">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Flint Hills Gray thin veneer" />
            <span class="stock-badge">Out of stock</span>
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - KS</p>
            <p class="product-title">Flint Hills Gray/Plaza Gray thin veneer Rumble/ashlar pattern</p>
          </div>
        </article>
      </div>

    </section>

    <section class="supplier-products">
      <div class="section-header">
        <h2>Other products from this supplier</h2>
        <span class="product-count">12 Products</span>
      </div>

      <div class="product-grid supplier-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1545259742-9bf7e9d72d33?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss waterfall 1"-"3" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss waterfall 1"-3"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss builders 3"-"5" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss builders 3"-5"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" alt="1-1.25 premium oklahoma flagstone" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">1"-1.25" premium oklahoma flagstone</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" alt="Oklahoma Thin Veneer Squares and Recs Brown" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma Thin Veneer Squares and Recs. Brown</p>
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
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Insights</h3>
          <ul>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Industries</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-section footer-contact">
          <p><a href="#">Direction on Google</a></p>
          <p><strong>Email</strong><br/><a href="mailto:contact@unitedcarriers.com">contact@unitedcarriers.com</a></p>
          <p><strong>Hotline</strong><br/>1300 000 082</p>
          <p><strong>Office Hours</strong><br/>Monday - Friday / 8:30AM - 5PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>All prices in AUD, inclusive of GST. Powered by Stripe.</span>
      </div>
    </footer>

    <div class="image-modal hidden" id="image-modal">
      <button class="modal-nav left" id="modal-prev" type="button" aria-label="Previous image">&lt;</button>
      <button class="modal-close" id="modal-close" aria-label="Close">×</button>
      <img id="modal-img" src="" alt="" />
      <button class="modal-nav right" id="modal-next" type="button" aria-label="Next image">&gt;</button>
    </div>

  </main>
`;const o=document.getElementById("image-modal"),v=document.getElementById("modal-img"),L=document.getElementById("modal-close"),g=document.getElementById("modal-prev"),h=document.getElementById("modal-next"),i=Array.from(document.querySelectorAll("#lioz-grid .frame-card img"));let l=0;function r(a){if(!i.length)return;const t=(a+i.length)%i.length;l=t;const c=i[t];v.src=c.src,v.alt=c.alt}function S(a){r(a),o.classList.remove("hidden")}function u(){o.classList.add("hidden")}i.forEach((a,t)=>{a.style.cursor="pointer",a.addEventListener("click",()=>{S(t)})});L.addEventListener("click",u);g&&h&&(g.addEventListener("click",()=>r(l-1)),h.addEventListener("click",()=>r(l+1)));document.addEventListener("keydown",a=>{o.classList.contains("hidden")||(a.key==="ArrowLeft"&&r(l-1),a.key==="ArrowRight"&&r(l+1),a.key==="Escape"&&u())});o.addEventListener("click",a=>{a.target===o&&u()});const p=document.getElementById("lioz-btn"),m=document.getElementById("mulenos-btn"),d=document.getElementById("lioz-panel");function y(a){!d||!a||a.addEventListener("click",()=>{d.classList.toggle("hidden");const t=String(!d.classList.contains("hidden"));p&&p.setAttribute("aria-expanded",t),m&&m.setAttribute("aria-expanded",t)})}y(p);y(m);const b=Array.from(document.querySelectorAll(".filter-buttons button"));b.forEach(a=>{a.addEventListener("click",()=>{b.forEach(t=>t.classList.remove("active")),a.classList.add("active")})});
