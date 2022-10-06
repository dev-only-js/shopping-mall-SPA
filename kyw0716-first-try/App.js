import List from "./List.js";
import Detail from "./Detail.js";
import Cart from "./Cart.js";

export default function App({ target }) {
  this.route = () => {
    const { pathname } = location;

    if (pathname === "/web/") {
      // 메인
      new List({ target: target }).render();
    } else if (pathname.match(/\/products\//) !== null) {
      // 상품 디테일
      new Detail({ target: target }).render();
    } else if (pathname.match(/cart/) !== null) {
      // 장바구니
      new Cart({ target: target }).render();
    }
  };

  this.route();
}
