import('./global/header-container.js')
import('./cards/cards-container.js')
import('./global/shop-cart.js')

class MyApp extends WebComponent {
    get css() { return `
		<style>
			:host {
              
			}
		</style>
	`}

    get html() { return `
        <header-container></header-container>
        <cards-container></cards-container>
	`}

    constructor() {
        super()
        window.shop = {basket: []}
    }

    addToBasket (prod) {
        const index = window.shop.basket.findIndex(product => product.id === prod.id)
        if (index === -1){
            prod.count = 1;
            prod.totalPrice = prod.price
            window.shop.basket.push(prod)
        } else {
            window.shop.basket.splice(index, 1)
        }
        window.shop.totalPrice = this.basketCounter()
        this.emit('basket-changed')
    }

    basketCounter() {
        return window.shop.basket.reduce((accumulator, currentValue) => {
            console.log(accumulator)
            console.log(currentValue)
            return +accumulator + +currentValue.totalPrice;
        }, 0)
    }

    async connectedCallback() {
        window.config = {
            domain: 'http://localhost:3000/'
        }
        document.addEventListener('add_product_to_cart', (e) => {
            this.addToBasket(e.detail)
            e.stopPropagation()
        })
    }
}

customElements.define('my-app', MyApp)
