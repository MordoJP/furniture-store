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
        window.addEventListener('my-custom-event', (e) => {
            this.shadowRoot.querySelector('p').innerText = e.detail
        })
    }
}

customElements.define('shop-cart', ShopCart)
