import { fetchData } from "./api.js";

export default function Detail({ target }) {
  const id = location.pathname.replace("/web/products/", "");
  this.container = document.createElement("div");
  this.container.className = `ProductDetailPage`;

  this.header = document.createElement("h1");
  this.header.innerHTML = "상품 디테일";

  this.container.appendChild(this.header);

  this.state = {
    selectedProducts: [],
    price: 0,
  };

  this.render = async () => {
    const data = await fetchData(`/${id}`);

    this.container.innerHTML = `
            <div class="ProductDetail">
                <img src="${data.imageUrl}">
                <div class="ProductDetail__info">
                    <h2>${data.name}</h2>
                    <div class="ProductDetail__price">${data.price}원~</div>
                    <select>
                        <option>선택하세요.</option>
                        ${data.productOptions
                          .map((option) => {
                            return option.stock === 0
                              ? `<option value="${option.name}, ${
                                  option.price
                                }, ${option.stock}, ${option.id}">(품절) ${
                                  option.name
                                }${
                                  option.price ? `(+${option.price})` : ""
                                }</option>`
                              : `<option value="${option.name}, ${
                                  option.price
                                }, ${option.stock}, ${option.id}">${
                                  option.name
                                }${
                                  option.price ? `(+${option.price})` : ""
                                }</option>`;
                          })
                          .join("")}
                    </select>
                    <div class="ProductDetail__selectedOptions">
                        <h3>선택된 상품</h3>
                        <ul>
                            ${this.state.selectedProducts
                              .map((option) => {
                                return `<li>${data.name} ${option[0]}${
                                  option[1] !== "0" ? `(+${option[1]})` : ""
                                } <div><input name="${
                                  option[3]
                                }" type="number" value="0" min="0" max="${Number(
                                  option[2]
                                )}"/>개</div></li>`;
                              })
                              .join("")}
                        </ul>
                        <div class="ProductDetail__totalPrice">${
                          this.state.price
                        }원</div>
                        <button class="OrderButton">주문하기</button>
                    </div>
                </div>
            </div>
        `;
    target.appendChild(this.container);
    console.log(data);

    const button = document.getElementsByClassName("OrderButton")[0];
    button.addEventListener("click", () => {
      location.href = `/web/cart`;
    });

    this.container.childNodes[1].childNodes[3].childNodes[5].addEventListener(
      "change",
      (e) => {
        if (
          this.state.selectedProducts.filter((arr) =>
            arr.includes(e.target.value.split(", ")[0])
          ).length === 0 &&
          e.target.value.split(", ")[2] !== "0" &&
          e.target.value !== "선택하세요."
        ) {
          this.state = {
            ...this.state,
            selectedProducts: [
              ...this.state.selectedProducts,
              [...e.target.value.split(", ")],
            ],
          };
          console.log(this.state.selectedProducts);
          this.render();
        }
      }
    );
    this.container.childNodes[1].childNodes[3].childNodes[7].childNodes[3].addEventListener(
      "change",
      (e) => {
        // e.target.name에 option id 들어있음
        // e.target.value에 현재 선택된 수량 들어있음
        console.log(e.target);
      }
    );
  };
}
