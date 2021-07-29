import('./product-card.js')

class CardsContainer extends WebComponent {
    get css() { return `
		<style>
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 auto;
            width: 90%;
            max-width: 1440px;
          }
          
          .amount {
            color: azure;
          }
		</style>
	`}

    get html() { return `
      <div class="container">
        
      </div>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {
        this.createProductList().then(() => {
            this.renderCards()
        })
    }

    async createProductList() {
        await this.getProducts()
        await this.getCategory()
        this.products.forEach(prod => {
            prod.categoryName = this.getCategoryName(prod.category)
        })
        window.shop.products = this.products
    }

    async getProducts() {
        this.products = await this.fetch('get','products/')
    }

    async getCategory() {
        window.shop.categories = await this.fetch('get','categories/')
        this.emit('create-categories')
    }

    getCategoryName(categoryId) {
        const { name } = window.shop.categories.find(names => names.id === categoryId)
        return name
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
                productCard.categoryName = card.categoryName
                return productCard
            })
            this.shadowRoot.querySelector('.container').append(...cards)
        }
    }
}

customElements.define('cards-container', CardsContainer)
