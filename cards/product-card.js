class ProductCard extends WebComponent {
    get css() { return `
		<style>
			:host {
			
			}
			
			.card {
			  border: 1px solid black;
			  height: 300px;
			  width: 300px;
			}
			
			.img {
			  width: 300px;
			  height: 200px;
			  background-position: center;
			  background-repeat: no-repeat;
			  background-size: contain;
			}
		</style>
	`}

    get html() { return `
        <div class="card">
          <h3 class="title"></h3>
          <div class="img"></div>
          <div class="price"></div>
          <button class="button">Купить</button>
        </div>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {
        const title = this.shadowRoot.querySelector('.title')
        const img = this.shadowRoot.querySelector('.img')
        const price = this.shadowRoot.querySelector('.price')
        const button = this.shadowRoot.querySelector('.button')

        title.innerText = this.title
        img.style.backgroundImage = `url('${this.img}')`
        price.innerText = this.price
        button.addEventListener('click', () => {
            this.emit('add_product_to_cart', this.id)
        })
    }
}

customElements.define('product-card', ProductCard)
