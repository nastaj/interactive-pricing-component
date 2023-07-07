const viewsEl = document.querySelector(".views");
const priceEl = document.querySelector(".price");
const rangeEl = document.querySelector(".range");
const btnBilling = document.querySelector("#billing-toggle");

const viewsPriceRatio = [
  { pageviews: "10k", price: 8 },
  { pageviews: "50k", price: 12 },
  { pageviews: "100k", price: 16 },
  { pageviews: "500k", price: 24 },
  { pageviews: "1m", price: 36 },
];

class App {
  #isYearly = false;
  #rangeValue;
  #views;
  #price;

  constructor() {
    rangeEl.addEventListener("input", this._updatePricing.bind(this));
    btnBilling.addEventListener("change", this._setBillingType.bind(this));
  }

  _updatePricing() {
    this.#rangeValue = +rangeEl.value;
    this.#views = viewsPriceRatio[this.#rangeValue].pageviews;
    this.#price = viewsPriceRatio[this.#rangeValue].price.toFixed(2);

    this._renderViewsPrice();
  }

  _renderViewsPrice() {
    viewsEl.textContent = this.#views;
    priceEl.textContent = this.#isYearly
      ? `$${(this.#price * 0.75).toFixed(2)}`
      : `$${this.#price}`;
  }

  _setBillingType() {
    btnBilling.checked ? (this.#isYearly = true) : (this.#isYearly = false);

    this._updatePricing();
  }
}

const app = new App();
