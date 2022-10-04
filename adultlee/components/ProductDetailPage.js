export default function ProductDetailPage({ $target, productId }) {
  const $page = document.createElement("div");

  this.state = { productId };

  $page.className = "ProductDetailPage";

  $page.innerHTML = "<h1>삼품 상세 정보 페이지</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
  this.render();
}
