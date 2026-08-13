(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const fe=document.querySelector("#app"),ve="data:image/webp;base64,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";fe.innerHTML=`
  <div class="main-app" id="main-app">
  <header class="site-header">
    <div class="brand">
      <span class="brand-mark">STONE</span>
      <span class="brand-name">LOADS</span>
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
        <button>Basalt</button>
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
          <div class="frame-card" data-filters="basalt category">
            <div class="frame-inner">
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80" alt="Basalt stone sample" />
              <p class="frame-caption">Basalt</p>
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
      <h2>Our Products</h2>
      <div class="product-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://www.sigma3.co.uk/_userfiles/images/luna-heritage-grey-ow-esher-2.jpg" alt="Frame 4" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="${ve}" alt="Frame 3" />
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
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.50-3-768x768.jpeg" alt="Landscape 500-1000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscape 500-1000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Landscaper 3000 lbs 8-12 per pallet" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
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
            <img src="https://images.unsplash.com/photo-1545259742-9bf7e9d72d33?auto=format&fit=crop&w=800&q=80" alt="1-1.25 premium oklahoma flagstone" />
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
`;const j=document.getElementById("header-search-input"),q=document.querySelector('.filters input[type="search"]');j&&q&&j.addEventListener("input",()=>{q.value=j.value,q.dispatchEvent(new Event("input"))});const x=document.getElementById("image-modal"),M=document.getElementById("modal-img"),he=document.getElementById("modal-close"),$=document.getElementById("modal-prev"),_=document.getElementById("modal-next"),ee=document.getElementById("make-order-btn"),te=document.getElementById("show-stone-image-btn"),S=document.getElementById("order-sheet-overlay"),ae=document.getElementById("close-sheet-btn"),E=document.getElementById("submit-order-btn"),se=document.getElementById("order-details-btn"),u=document.getElementById("order-preview-image"),v=document.getElementById("selected-stone-name"),ie=document.getElementById("design-stone-name"),g=document.getElementById("detail-document-overlay"),oe=document.getElementById("close-detail-document-btn"),T=document.getElementById("detail-pages-container"),A=document.getElementById("save-detail-page-btn"),me=Array.from(document.querySelectorAll("#lioz-grid .frame-card img")),be=Array.from(document.querySelectorAll("#pricing .product-card img"));let b=me,y=0;const I=Array.from({length:200},(e,a)=>({sn:a+1,lengthWidth:"",height:"",quantity:"",etc:""}));function ye(){return I.map(e=>`${e.sn} | ${e.lengthWidth} | ${e.height} | ${e.quantity} | ${e.etc}`).join(`
`)}function C(e){if(!b.length)return;const a=(e+b.length)%b.length;y=a;const i=b[a];M.src=i.src,M.alt=i.alt}function we(e,a){b=a,C(e),x.classList.remove("hidden")}function W(){x.classList.add("hidden"),S&&S.classList.add("hidden")}function Ee(){const e="https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg",a="Granit stone",i=b[y]||{src:e,alt:a};u&&(u.src=i.src||e,u.alt=i.alt||a);const o=i.alt||a;v&&(v.textContent=o),ie&&(ie.textContent=o),S&&S.classList.remove("hidden")}function pe(e){e.forEach((a,i)=>{a.style.cursor="pointer",a.addEventListener("click",()=>{we(i,e)})})}pe(me);pe(be);he.addEventListener("click",W);ae&&ae.addEventListener("click",()=>S.classList.add("hidden"));$&&_&&($.addEventListener("click",()=>C(y-1)),_.addEventListener("click",()=>C(y+1)));ee&&ee.addEventListener("click",Ee);te&&te.addEventListener("click",()=>{const e=(u==null?void 0:u.src)||"https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg",a=(v==null?void 0:v.textContent)||"Granit stone";M.src=e,M.alt=a,x.classList.remove("hidden")});function ue(){var t,m,r,Z,X,R,F,Q,U,V,Y,H,D,J,K;const e=((m=(t=document.getElementById("company-name"))==null?void 0:t.value)==null?void 0:m.trim())||"Not provided",a=((r=document.getElementById("customer-type"))==null?void 0:r.value)||"Company",i=((X=(Z=document.getElementById("customer-name"))==null?void 0:Z.value)==null?void 0:X.trim())||"Not provided",o=((F=(R=document.getElementById("customer-address"))==null?void 0:R.value)==null?void 0:F.trim())||"Not provided",s=((U=(Q=document.getElementById("customer-phone"))==null?void 0:Q.value)==null?void 0:U.trim())||"Not provided",l=((Y=(V=document.getElementById("customer-email"))==null?void 0:V.value)==null?void 0:Y.trim())||"Not provided",d=((D=(H=document.getElementById("order-notes"))==null?void 0:H.value)==null?void 0:D.trim())||ye(),h="Granit stone",f="https://www.criteriofavorito.com/images/data/catalogue/5/granito-pedras-salgadas1.jpg",k=(((J=v==null?void 0:v.textContent)==null?void 0:J.trim())||h).trim(),G=((u==null?void 0:u.src)||(((K=b[y])==null?void 0:K.src)??f)).trim(),w=["Stone Order Request","==================",`Company Name: ${e}`,`Type: ${a}`,`Name: ${i}`,`Address: ${o}`,`Phone Number: ${s}`,`Email Address: ${l}`,`Stone: ${k}`,"Selected Stone Image:",G||f,"Order Details:",d].join(`
`),L=encodeURIComponent("Stone Order Request"),z=encodeURIComponent(w),n=`mailto:tpjlimbu61@gmail.com?subject=${L}&body=${z}`;window.location.href=n}E&&E.addEventListener("click",()=>{E.textContent="Sending...",E.disabled=!0,setTimeout(()=>{ue(),E.textContent="Submit",E.disabled=!1},200)});function ge(){if(!T)return;T.innerHTML="";const e=document.createElement("div");e.className="detail-page active";const a=Array.from({length:I.length},(i,o)=>{const s=I[o];return s?`
      <tr>
        <td>${s.sn}</td>
        <td><input type="text" value="${s.lengthWidth??""}" data-row-index="${o}" data-field="lengthWidth" placeholder="Length/Width" /></td>
        <td><input type="text" value="${s.height??""}" data-row-index="${o}" data-field="height" placeholder="Height" /></td>
        <td><input type="text" value="${s.quantity??""}" data-row-index="${o}" data-field="quantity" placeholder="Quantity" /></td>
        <td><input type="text" value="${s.etc??""}" data-row-index="${o}" data-field="etc" placeholder="Etc" /></td>
      </tr>
    `:""}).join("");e.innerHTML=`
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
        ${a}
      </tbody>
    </table>
  `,e.querySelectorAll("input").forEach(i=>{i.addEventListener("input",o=>{const s=o.target,l=Number(s.dataset.rowIndex),d=s.dataset.field;I[l]&&(I[l][d]=s.value)})}),T.appendChild(e)}function Pe(){ge(),g==null||g.classList.remove("hidden")}se&&se.addEventListener("click",Pe);oe&&oe.addEventListener("click",()=>{g==null||g.classList.add("hidden")});A&&A.addEventListener("click",()=>{if(A.dataset.orderReady==="true"){ue(),g==null||g.classList.add("hidden");return}A.dataset.orderReady="true",A.textContent="Buy Now"});ge();const c=document.getElementById("stone-design-canvas"),P=document.getElementById("draw-color"),p=document.getElementById("draw-size"),ne=Array.from(document.querySelectorAll(".tool-btn"));if(c){let h=function(){e.clearRect(0,0,c.width,c.height),e.fillStyle="#ffffff",e.fillRect(0,0,c.width,c.height)},f=function(){const n=Number((p==null?void 0:p.value)||4),t=(P==null?void 0:P.value)||"#1f2937";e.lineWidth=n,e.lineCap="round",e.lineJoin="round",e.strokeStyle=t,e.fillStyle=t},k=function(n){a=n,ne.forEach(t=>{t.classList.toggle("active",t.dataset.tool===n)})},G=function(){h()},w=function(n){const t=c.getBoundingClientRect(),m=c.width/t.width,r=c.height/t.height;return{x:(n.clientX-t.left)*m,y:(n.clientY-t.top)*r}},L=function(n,t,m,r){e.beginPath(),e.moveTo(n,t),e.lineTo(m,r),e.stroke()},z=function(n,t,m,r){e.beginPath(),e.rect(n,t,m-n,r-t),e.stroke()};var ze=h,Ae=f,Ie=k,Se=G,Ce=w,ke=L,Ge=z;const e=c.getContext("2d");let a="pen",i=!1,o=0,s=0,l=0,d=0;h(),f(),ne.forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.tool;if(t==="clear"){G();return}k(t)})}),P==null||P.addEventListener("input",f),p==null||p.addEventListener("input",f),c.addEventListener("pointerdown",n=>{const t=w(n);if(i=!0,o=t.x,s=t.y,l=t.x,d=t.y,f(),a==="eraser"){e.save(),e.globalCompositeOperation="destination-out",e.lineWidth=Number((p==null?void 0:p.value)||4)+8,e.beginPath(),e.moveTo(t.x,t.y);return}a==="pen"&&(e.beginPath(),e.moveTo(t.x,t.y))}),c.addEventListener("pointermove",n=>{if(!i)return;const t=w(n);if(a==="pen"){e.beginPath(),e.moveTo(l,d),e.lineTo(t.x,t.y),e.stroke(),l=t.x,d=t.y;return}if(a==="eraser"){e.beginPath(),e.moveTo(l,d),e.lineTo(t.x,t.y),e.stroke(),l=t.x,d=t.y;return}if(a==="line"){const m=c.toDataURL(),r=new Image;r.onload=()=>{h(),e.drawImage(r,0,0),L(o,s,t.x,t.y)},r.src=m;return}if(a==="rect"){const m=c.toDataURL(),r=new Image;r.onload=()=>{h(),e.drawImage(r,0,0),z(o,s,t.x,t.y)},r.src=m}}),c.addEventListener("pointerup",n=>{if(!i)return;const t=w(n);a==="line"&&L(o,s,t.x,t.y),a==="rect"&&z(o,s,t.x,t.y),a==="eraser"&&e.restore(),i=!1}),c.addEventListener("pointerleave",()=>{i=!1})}document.addEventListener("keydown",e=>{x.classList.contains("hidden")||(e.key==="ArrowLeft"&&C(y-1),e.key==="ArrowRight"&&C(y+1),e.key==="Escape"&&W())});x.addEventListener("click",e=>{e.target===x&&W()});const le=document.getElementById("lioz-btn"),re=document.getElementById("molenos-btn"),N=document.getElementById("lioz-panel"),ce=Array.from(document.querySelectorAll(".filter-buttons button")),de=Array.from(document.querySelectorAll("#lioz-grid .frame-card")),xe=new Set(["lioz","molenos","estarmos","ruivina","granit","angola","travertine","basalt","category","status","size","supplier","availability","italian","zimbabwe","region"]);let B=null;function O(e){if(!N)return;N.classList.toggle("hidden",!e);const a=String(e);le&&le.setAttribute("aria-expanded",a),re&&re.setAttribute("aria-expanded",a)}function Le(e){let a=0;de.forEach(i=>{const s=(i.dataset.filters||"").split(/\s+/).filter(Boolean).includes(e);i.classList.toggle("hidden",!s),s&&(a+=1)}),a===0&&de.forEach(i=>i.classList.remove("hidden"))}ce.forEach(e=>{e.addEventListener("click",()=>{ce.forEach(s=>s.classList.remove("active")),e.classList.add("active");const a=(e.textContent||"").trim().toLowerCase();if(!xe.has(a)){B=null,O(!1);return}if(N&&!N.classList.contains("hidden")&&B===a){B=null,O(!1);return}B=a,Le(a),O(!0)})});
