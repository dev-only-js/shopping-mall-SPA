import { fetchData } from "./api.js";

export default function Detail({ target }) {
  this.container = document.createElement("div");
  this.container.className = `ProductListPage`;

  this.header = document.createElement("h1");
  this.header.innerHTML = "상품목록";

  this.list = document.createElement("ul");

  this.render = async () => {
    this.container.appendChild(this.header);
    const data = await fetchData("");
    console.log(data);
    this.list.innerHTML = `
            ${data
              .map((product) => {
                return `
                    <li class="Product" style="cursor: pointer;" id="${product.id}">
                        <img src="${product.imageUrl}">
                        <div class="Product__info">
                            <div>${product.name}</div>
                            <div>${product.price}원~</div>
                        </div>
                    </li>
                `;
              })
              .join("")}
        `;
    this.container.appendChild(this.list);
    target.appendChild(this.container);
  };

  this.list.addEventListener("click", (e) => {
    let target = e.target;
    let id;
    if (target.tagName !== null) {
      while (target.tagName !== "LI") {
        target = target.parentNode;
      }
      id = target.id;
      location.href = `/web/products/${id}`;
    }
  });
}
