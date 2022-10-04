import ProductListPage from "./components/ProductListPage.js";
import ProductDetailPage from "./components/ProductDetailPage.js";
import CartPage from "./components/CartPage.js";

export default function App({ $target }) {
  this.route = () => {
    // route를 이동시키는 함수이다. 다른 컴포넌트의  this.render와 유사하다.
    const { pathname } = location; // 현재 위치를 받아준다.
    console.log(pathname);
    $target.innerHTML = "";
    if (pathname === "/") {
      const productListPage = new ProductListPage({ $target: $target });
    } else if (pathname.indexOf("/products/") > -1) {
      const productId = pathname.split("/products/")[1];

      const productDetailPage = new ProductDetailPage({
        $target: $target,
        productId: productId,
      });
    } else if (pathname === "/cart") {
      const cartPage = new CartPage({
        $target: $target,
        iniitialState: [],
      });
    }
  };

  this.route();
}
