class ShopCart extends WebComponent {
    get css() { return `
		<style>

		</style>
	`}

    get html() { return `
        <h1>корзина</h1>
        <p>сумма:</p>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {

    }
}

customElements.define('shop-cart', ShopCart)
