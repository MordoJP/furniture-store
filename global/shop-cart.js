class ShopCart extends WebComponent {
    get css() { return `
		<style>
		    /*base styles for basket*/
		    .basket, .overlay {
		        width: 100%;
                height: 100%;
                top: 0;
                left: 0;
		    }
		
            .basket {
                position: fixed;
                overflow: hidden;
                overflow-y: auto;
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: center;
                z-index: 10;
                
            }
            
            .overlay {
                position: absolute;
                background-color: azure;
                opacity: .3;
                pointer-events: auto; /* позырить че это */
            }
            
            .basket-container {
                margin: auto;
                background-color: black;
                z-index: 8;
                width: 95%;
                height: 95%;
                display: flex;
                flex-direction: column;
            }
            
            /*styles for basket appearance*/
            .basket-closed {
                visibility: hidden;
            }
            
            .basket-active {
                visibility: visible;
            }
            
            .basket-active, .basket-container {
                /*transform: scale(1);*/
                opacity: 1;
            }
            
            .basket-opened {
                position: fixed;
                right: 0;
                left: 0;
                overflow: hidden;
            }
            
            /*top part of the basket*/
            .basket-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                margin: 10px;
                border-bottom: 1px solid azure;
            }
            
            .basket-empty {
                display: flex;
                font: 30px "Circe Light";
                color: azure;
                margin: auto;
            }
            
            .basket-title {
                font: 34px "Circe Bold";
                color: azure;
                margin-left: 30px;
            }
            
            .basket-close {
                border: 0;
                padding: 0;
                background-color: transparent;
                width: 40px;
                height: 40px;
                opacity: .7;
                cursor: pointer;
                transition: all 0.2s ease-out;
            }
            
            .basket-close:hover {
                opacity: 1;
            }
            
            .close-top, .close-bottom {
                width: 50px;
                height: 2px;
                background-color: azure;
                border-radius: 1px;
                position: relative;
                left: -4px;
            }
            
            .close-top {
                top: 2px;
                transform: rotate(45deg);
            }
            
            .close-bottom {
                top: 0;
                transform: rotate(-45deg);
            }
            
            /*bottom part of the basket*/
            .basket-bottom {
                height: 100%;
                display: flex;
                justify-content: space-between;
                margin: 10px;
            }
            
            .basket-products-block {
                width: 70%;
                margin: 10px;
                display: none;
                flex-direction: column;
            }
            
            
            /*basket info & controls*/
            .basket-info {
                margin: 10px;
                width: 30%;
                display: none;
                flex-direction: column;
                justify-content: space-between;
            }
            
            /*Price & amount*/
            .price-title, .amount-title, .promo-text {
                font: 25px Circe;
                color: azure;
            }
            
            .price-total, .amount-total {
                font: 20px "Circe Light";
                color: azure;
                margin: 10px 40px;
                text-align: end;
            }
            
            /*promo & buttons*/
            .basket-promo, .basket-buttons {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .clear-basket, .buy {
                border: 1px solid azure;
                border-radius: 25px 25px 25px 25px;
                width: 200px;
                height: 50px;
                margin: 10px;
                text-align: center;
                font: 16px Circe;
                background-color: black;
                color: azure;
                opacity: .8;
                transition: All 0.2s ease-out;
                cursor: pointer;
            }
            
            .clear-basket:hover, .buy:hover {
                opacity: 1;
            }
            
            .promo-place {
                background: #242424;
                height: 45px;
                border-radius: 45px;
                width: 200px;
                padding: 10px 25px;
                border: 0;
                font: 20px "Circe Bold";
                color: azure;
                margin: 10px;
            }
            
            .promo-place:focus {
                border: 1px solid azure;
                outline: none;
            }
            
            /*product container*/
            .product-container {
                height: 150px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin: 20px 10px;
                padding-right: 40px;
            }
            
            .product-left-info, .product-left-part, .product-right-part, .product-amount-controls, .price-container {
                display: flex;
            }
            
            .product-left-info, .product-right-part, .price-container {
                flex-direction: column;
            }
            
            .product-left-info {
                justify-content: space-between;
            }
            
            .product-image {
                width: 150px;
                height: 150px;
                margin: 0 30px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            
            .product-amount-controls {
                align-items: center;
            }
            
            .product-title, .product-unit-price, .product-amount, .product-old-price, .product-amount-minus, .product-amount-plus, .product-price-all, .product-delete {
                color: azure;
            }
            
            .product-title{
                font: 30px "Circe ExtraBold";
                margin: 0 0 10px;
            }
            
            .product-old-price {
                font: 12px "Circe ExtraLight";
                text-decoration: line-through;
            }
            
            .product-unit-price {
                font: 16px Circe;
            }
            
            .product-price-all {
                font: 25px "Circe Light";
                margin: 30px 0;
            }
            
            .product-amount-minus, .product-amount-plus, .product-delete {
                cursor: pointer;
                background-color: black;
                border: 1px solid azure;
                opacity: .7;
                transition: all 0.3s ease-out;
            }
            
            .product-amount-minus:hover, .product-amount-plus:hover, .product-delete:hover {
                opacity: 1;
            }
            
            .product-amount-minus, .product-amount-plus {
                font: 20px "Circe Bold";
                height: 25px;
                width: 25px;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 10px;
                padding: 0;
            }
            
            .product-delete {
                font: 16px Circe;
                height: 40px;
                width: 100px;
                border-radius: 20px 20px 20px 20px;
            }
		</style>
	`}

    get html() { return `
        <div class="basket basket-closed" id="basket">
            <div class="basket-container">
                <div class="basket-top">
                    <span class="basket-title">Корзина</span>
                    <button class="basket-close">
                        <div class="close-top"></div>
                        <div class="close-bottom"></div>
                    </button>
                </div>
                <div class="basket-bottom">
                    <div class="basket-empty">В корзине пусто</div>
                    <div class="basket-products-block"></div>
                    <div class="basket-info">
                        <div class="info-container">
                            <div class="price-container">
                                <div class="price-title">Сумма заказа</div>
                                <div class="price-total">100 780 00 руб</div>
                            </div>
                            <div class="amount-container">
                                <div class="amount-title">Количество товара</div>
                                <div class="amount-total">100 шт.</div>
                            </div>
                        </div>
                        <div class="basket-info-controls">
                            <div class="basket-promo">
                                <span class="promo-text">Введите промокод</span>
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
            <div class="overlay"></div>
        </div>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {
        window.shop.class = 'basket-closed'
        const basket = this.shadowRoot.querySelector('#basket')
        const basketCloser = this.shadowRoot.querySelector('.basket-close')
        const basketProducts = this.shadowRoot.querySelector('.basket-products-block')
        const emptyBasket = this.shadowRoot.querySelector('.basket-empty')
        const basketInfo = this.shadowRoot.querySelector('.basket-info')
        const basketClear = this.shadowRoot.querySelector('.clear-basket')

        window.addEventListener('basket-status', () => {this.openBasket(basket)})
        basketCloser.addEventListener('click', () => {
            window.shop.class = 'basket-closed'
            this.openBasket(basket)
        })

        window.addEventListener('basket-create-product', () => {this.productsAdder(basketProducts, emptyBasket, basketInfo)})

        basketClear.addEventListener('click', this.cleaner())
    }

    openBasket (basketClass){
        if (window.shop.class === 'basket-active') {
            basketClass.classList.remove('basket-closed')
            basketClass.classList.add('basket-active')
        } else {
            basketClass.classList.remove('basket-active')
            basketClass.classList.add('basket-closed')
        }
    }

    productsAdder(cont, empty, baskInfo) {
        cont.innerHTML = ''
        if (window.shop.basket.length) {
            empty.style.display = 'none'
            baskInfo.style.display = 'flex'
            cont.style.display = 'flex'
            console.log(1)
            window.shop.basket.forEach(prod => {
                const product = document.createElement('div')
                product.className = 'product-container'
                product.innerHTML = `<div class="product-left-part">
                <div class="product-image" style="background-image: url('img/products/${prod.img}')"></div> /*так находит изображение*/
                <div class="product-left-info">
                <h2 class="product-title">${prod.title}</h2>
                <div class="price-container">
                <span ${this.discountChecker(prod.discount, prod.price)} / штука</span>
                </div>
                <div class="product-amount-controls">
                    <button class="product-amount-minus">-</button>
                    <span class="product-amount">${prod.count}</span>
                    <button class="product-amount-plus">+</button>
                </div>
                </div>
                </div>
                <div class="product-right-part">
                <span class="product-price-all" id=prc-"${prod.id}">${this.f.numberFormat(this.discountCheckerNumb(prod.discount, prod.price) * prod.count)}</span>
                <button class="product-delete" id="del-${prod.id}">Удалить</button>
                </div>`
                cont.append(product)
            })
        } else {
            empty.style.display = 'flex'
            baskInfo.style.display = 'none'
            cont.style.display = 'none'
        }
    }

    discountChecker(disc, pr) {
        if (disc) {
            return `class="product-old-price">${this.f.numberFormat(pr)} / штука</span><span class="product-unit-price">${this.f.numberFormat(pr * (100 - disc) / 100)}`
        }
        else {
            return `class="product-old-price" style="opacity: 0">0</span><span class="product-unit-price">${this.f.numberFormat(pr)}`
        }
    }

    discountCheckerNumb(disc, pr) {
        if (disc) {
            return pr * (100 - disc) / 100
        }
        else {
            return pr
        }
    }

    cleaner() {
        window.shop.basket = []
        this.emit('basket-create-product')
    }
}

customElements.define('shop-cart', ShopCart)