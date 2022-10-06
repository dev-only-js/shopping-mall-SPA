export default function productListPage({ target }) {
  this.element = document.createElement("h1");

  this.render = () => {
    this.element.innerHTML = "제품 리스트";
    target.appendChild(this.element);
  };
}
