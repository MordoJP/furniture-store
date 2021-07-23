import('./product-card.js')

class CardsContainer extends WebComponent {
    get css() { return `
		<style>
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
		</style>
	`}

    get html() { return `
      <div class="container">
        
      </div>
      
      <div class="amount"></div>
	`}

    constructor() {
        super()
        this.amount = 0
    }

    async connectedCallback() {
        this.getCategory().then(() => {
            this.getProducts().then(() => {
                this.renderCards()
            })
        })

        this.addListeners()
    }

    async getProducts() {
        this.products = await this.fetch('get','products/')
        window.shop = {products : this.products}
    }

    async getCategory() {
        this.categories = await this.fetch('get','categories/')
    }

    findCategoryName(product) {
        this.categories.forEach(names => {
            if (names.id === product.category) {
                product.categoryName = names.name
            }
        })
    }

    renderCards() {
        if (this.products.length) {
            const cards = this.products.map(card => {
                const productCard = document.createElement('product-card')
                productCard.id = card.id
                productCard.img = card.img
                productCard.title = card.title
                productCard.price = card.price
                productCard.category = card.category
                productCard.discount = card.discount
                this.findCategoryName(productCard)
                return productCard
            })
            this.shadowRoot.querySelector('.container').append(...cards)
        }


    }

    addListeners() {
        this.addEventListener('add_product_to_cart', ({detail}) => {
            const idx = window.shop.products.findIndex(el => el.id === +detail)
            this.calculateAmount(window.shop.products[idx])
        })
    }

    calculateAmount(product) {
        const price = product.price
        this.amount += price
        this.renderAmount()
    }

    renderAmount() {
        this.shadowRoot.querySelector('.amount').innerText = this.amount
    }
}

customElements.define('cards-container', CardsContainer)