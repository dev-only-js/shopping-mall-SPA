export default function productDetailPage({ target }) {
  this.element = document.createElement("h1");
  this.element.innerHTML = "디테일 페이지";

  this.render = () => {
    target.appendChild(this.element);
  };
}
