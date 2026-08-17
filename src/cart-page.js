import './style.css';
import { CartPage } from './cart/cart.jsx';

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    <main class="cart-page-shell">
      <header class="site-header">
        <div class="brand">
          <img src="https://marmotomas.com/wp-content/uploads/2021/05/marmotomas-logo-100.png" alt="Marmotomas logo" class="brand-logo" />
        </div>

        <nav class="nav-links">
          <a href="/">Home</a>
          <a href="/cart.html" class="nav-cart-link active">Cart</a>
        </nav>
      </header>

      ${CartPage()}
    </main>
  `;
}
