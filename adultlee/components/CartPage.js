export default function CartPage({ $target, iniitialState }) {
  const $page = document.createElement("div");

  $page.className = "CartPage";

  $page.innerHTML = "<h1>장바구니</h1>";

  $target.appendChild($page);

  this.render = () => {};

  this.render();
}
