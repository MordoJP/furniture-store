class ShopCart extends WebComponent {
    get css() { return `
		<style>
            .basket {
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                overflow: hidden;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                z-index: 99;
                padding:30px 0;
            }
		</style>
	`}

    get html() { return `
        <div class="basket" id="basket">
            <div class="basket-container">
                <div class="basket-top">
                    <span class="basket-title">Корзина</span>
                    <button class="basket-close">
                        <div class="close-top"></div>
                        <div class="close-bottom"></div>
                    </button>
                </div>
                <div class="basket-empty">В корзине пусто</div>
                <div class="basket-products-block"></div>
                <div class="basket-info">
                    <div class="price-container">
                        <div class="price-title">Сумма заказа</div>
                        <div class="total-price"></div>
                    </div>
                    <div class="amount-container">
                        <div class="amount-title">Количество товара</div>
                        <div class="amount-total"></div>
                    </div>
                    <div class="basket-info-controls">
                        <div class="basket-promo">
                            <span class="promo-text"></span>
                            <input type="text" class="promo-place">
                        </div>
                        <div class="basket-buttons">
                            <button class="clear-basket">Очистить корзину</button>
                            <button class="buy">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {

    }
}

customElements.define('shop-cart', ShopCart)
