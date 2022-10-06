export default function Detail({ target }) {
  this.container = document.createElement("div");
  this.container.className = "CartPage";

  this.header = document.createElement("h1");
  this.header.innerHTML = "장바구니";

  this.list = document.createElement("div");
  this.list.className = `Cart`;

  this.container.appendChild(this.header);
  this.container.appendChild(this.list);

  this.render = () => {
    this.list.innerHTML = `
          <ul>
              <li class="Cart__item">
                  <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
                  <div class="Cart__itemDesription">
                      <div>커피잔 100개 번들 10,000원 10개</div>
                      <div>100,000원</div>
                  </div>
              </li>
              <li class="Cart__item">
                  <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
                  <div class="Cart__itemDesription">
                      <div>커피잔 100개 번들 10,000원 10개</div>
                      <div>100,000원</div>
                  </div>
              </li>
          </ul>
          <div class="Cart__totalPrice">
              총 상품가격 175,000원
          </div>
          <button class="OrderButton">주문하기</button>
      `;
    target.appendChild(this.container);
  };
}
