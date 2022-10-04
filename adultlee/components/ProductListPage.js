export default function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = `<hi>상품 목록</hi>`;
  $target.appendChild($page);

  this.render = () => {};

  this.render();
}
