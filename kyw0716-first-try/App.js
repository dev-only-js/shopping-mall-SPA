import cart from "/cart.js";
import productDetailPage from "/productDetailPage.js";
import productListPage from "/productListPage.js";

export default function App({ target }) {
  const { pathname } = location;
  this.element = document.createElement("h1");

  this.route = () => {
    if (pathname === "/") {
      new productListPage({ target: target }).render();
    } else if (pathname.match(/\/products\//) !== null) {
      new productDetailPage({ target: target }).render();
    } else if (pathname.match(/cart/) !== null) {
      new cart({ target: target }).render();
    }
  };

  this.route();
}
