export default function cart({ target }) {
  this.element = document.createElement("h1");
  this.element.innerHTML = "장바구니";

  this.render = () => {
    target.appendChild(this.element);
  };
}
