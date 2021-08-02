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
                display: flex;
                box-sizing: border-box;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: center;
                z-index: 10;
                transition: All 0.3s ease-out;
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
                opacity: 0;
            }
            
            .basket-active {
                visibility: visible;
            }
            
            .basket-active, .basket-container {
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
                height: 10%;
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
                height: 80%;
                display: flex;
                justify-content: space-between;
                margin: 20px;
                box-sizing: border-box;
            }
            
            .basket-products-block {
                width: 70%;
                height: 100%;
                margin: 10px;
                display: none;
                flex-direction: column;
                overflow-y: auto;
                flex-grow: 1;
                box-sizing: border-box;
            }
            
            
            /*basket info & controls*/
            .basket-info {
                margin: 10px;
                width: 30%;
                height: 100%;
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
                text-align: center;
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
            
            .product-right-part {
                align-items: flex-end;
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
                width: 130px;
                justify-content: space-between;
            }
            
            .product-title, .product-unit-price, .product-amount, .product-old-price, .product-price-all, .product-delete, .product-amount {
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
                opacity: .7;
                transition: all 0.3s ease-out;
            }
            
            .product-amount-minus:hover, .product-amount-plus:hover, .product-delete:hover {
                opacity: 1;
            }
            
            .product-amount {
                font: 20px Circe;
            }
            
            .product-amount-minus, .product-amount-plus {
                height: 25px;
                width: 25px;
                border: 0;
                margin: 0 10px;
                padding: 0;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
            
            .product-amount-minus{
                background-image: url("img/icons/minus.svg");
            }
            
            .product-amount-plus{
                background-image: url("img/icons/plus.svg");
            }
            
            .product-delete {
                font: 16px Circe;
                height: 40px;
                width: 100px;
                border-radius: 20px;
                border: 1px solid azure;
            }
            
            @media screen and (max-width: 1135px) {
            .basket-bottom {
                margin: 12px;
            }
            
            .product-container {
                height: 120px;
                margin: 12px 6px;
                padding-right: 25px;
            }
            
            .basket-products-block, .basket-info{
                margin: 0;
            }
            
            .basket-title {
                font: 24px "Circe Bold";
                margin-left: 15px;
            }
            
            .price-title, .amount-title, .promo-text {
                font: 16px Circe;
            }
            
            .close-top, .close-bottom {
                width: 30px;
            }
            
            .product-title {
                font: 20px "Circe ExtraBold";
            }
            
            .price-total, .amount-total {
                font: 14px "Circe Light";
            }
            
            .product-old-price {
                font: 8px "Circe ExtraLight";
            }
            
            .product-unit-price {
                font: 12px Circe;
            }
            
            .product-price-all {
                font: 16px "Circe Light";
                margin: 20px 0;
            }
            
            .product-amount-minus, .product-amount-plus {
                height: 18px;
                width: 18px;
                margin: 0 7px;
            }
            
            .product-image {
                width: 120px;
                height: 120px;
                margin: 0 20px;
            }
            
            .product-amount {
                font: 15px Circe;
            }
            
            .product-delete {
                font: 12px Circe;
                height: 30px;
                width: 85px;
                border-radius: 30px;
            }
            
            .promo-place {
                height: 35px;
                border-radius: 35px;
                width: 150px;
                padding: 8px 18px;
                font: 15px "Circe Bold";
                margin: 8px;
            }
            
            .clear-basket, .buy {
                border-radius: 35px;
                width: 150px;
                height: 35px;
                margin: 8px;
                font: 14px Circe;
            }
            
            .basket-empty {
                font: 17px "Circe Light";
            }
            
            .basket-close {
                width: 30px;
                height: 30px;
            }
            
            }
            
            @media screen and (max-width: 767px) {
            .basket-bottom {
                margin: 6px;
                flex-direction: column;
                align-items: center;
                overflow-y: auto;
                box-sizing: border-box;
            }
            
            .basket-promo, .basket-buttons, .price-container-total, .amount-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .basket-info, .basket-products-block {
                width: 95%;
                height: auto;
                padding: 0 2.5%;
            }
            
            .basket-info {
                padding: 0 10px;
            }
            
            .product-container {
                height: 70px;
                width: 97%;
                margin: 8px 4px;
                padding-right: 5px;
            }
            
            .basket-title {
                font: 18px "Circe Bold";
                margin-left: 15px;
            }
            
            .price-title, .amount-title, .promo-text {
                font: 10px Circe;
            }
            
            .close-top, .close-bottom {
                width: 20px;
            }
            
            .product-title {
                font: 14px "Circe ExtraBold";
                margin: 0;
            }
            
            .product-amount-controls {
                width: 60px;
            }
            
            .price-total, .amount-total {
                font: 10px "Circe Light";
                margin: 0;
            }
            
            .product-old-price {
                font: 6px "Circe ExtraLight";
            }
            
            .product-unit-price {
                font: 9px Circe;
            }
            
            .product-price-all {
                font: 12px "Circe Light";
                margin: 20px 0;
            }
            
            .product-amount-minus, .product-amount-plus {
                height: 15px;
                width: 15px;
                margin: 0 5px;
            }
            
            .product-image {
                width: 50px;
                height: 50px;
                margin: 0 10px;
            }
            
            .price-container {
                flex-direction: column;
            }
            
            .product-amount {
                font: 10px Circe;
            }
            
            .product-delete {
                font: 8px Circe;
                height: 20px;
                width: 70px;
                border-radius: 20px;
            }
            
            .promo-place {
                height: 25px;
                border-radius: 25px;
                width: 130px;
                padding: 5px 12px;
                font: 12px "Circe Bold";
            }
            
            .clear-basket, .buy {
                border-radius: 25px;
                width: 130px;
                height: 25px;
                margin: 5px;
                font: 10px Circe;
            }
            
            .basket-empty {
                font: 12px "Circe Light";
            }
            
            .basket-close {
                width: 20px;
                height: 20px;
            }
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
                            <div class="price-container-total">
                                <div class="price-title">Сумма заказа</div>
                                <div class="price-total"></div>
                            </div>
                            <div class="amount-container">
                                <div class="amount-title">Количество товара</div>
                                <div class="amount-total">100 шт.</div>
                            </div>
                        </div>
                        <div class="basket-info-controls">
                            <div class="basket-promo">
                                <span class="promo-text">Введите промокод</span>
                                <input type="text" class="promo-place" placeholder="LETO HOME">
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
        await this.getPromo()
        window.shop.promos = this.promos

        const basket = this.shadowRoot.querySelector('#basket')
        const basketCloser = this.shadowRoot.querySelector('.basket-close')
        const basketProducts = this.shadowRoot.querySelector('.basket-products-block')
        const emptyBasket = this.shadowRoot.querySelector('.basket-empty')
        const basketInfo = this.shadowRoot.querySelector('.basket-info')
        const basketClear = this.shadowRoot.querySelector('.clear-basket')
        const totalPrice = this.shadowRoot.querySelector('.price-total')
        const count = this.shadowRoot.querySelector('.amount-total')
        const overlay = this.shadowRoot.querySelector('.overlay')
        const promo = this.shadowRoot.querySelector('.promo-place')

        window.shop.class = 'basket-closed'
        window.addEventListener('basket-status', () => {this.openBasket(basket)})
        basketCloser.addEventListener('click', () => {
            window.shop.class = 'basket-closed'
            this.openBasket(basket)
        })
        overlay.addEventListener('click', () => {
            window.shop.class = 'basket-closed'
            this.openBasket(basket)
        })

        window.addEventListener('change-total-price', () => {
            window.shop.totalPrice = this.reduceValue('totalPrice')
            totalPrice.innerText = this.f.numberFormat(this.reduceValue('totalPrice'))
            count.innerText = `${this.reduceValue('count')} шт.`

        })

        promo.addEventListener('input', (e) => {
            const index = window.shop.promos.findIndex(p => p.name === e.target.value)
            if (index !== -1) {
                console.log(1)
                totalPrice.innerText = this.f.numberFormat(window.shop.totalPrice * (100 - window.shop.promos[index].discount) / 100)
            } else {
                console.log(2)
                totalPrice.innerText = this.f.numberFormat(window.shop.totalPrice)
            }
        })

        window.addEventListener('basket-create-product', () => {this.productsAdder(basketProducts, emptyBasket, basketInfo)})

        basketClear.addEventListener('click', () => this.cleaner())
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

    async getPromo() {
        this.promos = await this.fetch('get','promo/')
    }

    productsAdder(cont, empty, baskInfo) {
        while (cont.firstChild) cont.firstChild.remove()
        if (window.shop.basket.length) {
            empty.style.display = 'none'
            baskInfo.style.display = 'flex'
            cont.style.display = 'flex'
            window.shop.basket.forEach(prod => {
                const product = document.createElement('div')
                product.className = 'product-container'
                product.innerHTML = `<div class="product-left-part">
                <div class="product-image" style="background-image: url('img/products/${prod.img}')"></div>
                <div class="product-left-info">
                <h2 class="product-title">${prod.title}</h2>
                <div class="price-container">
                <span ${this.discountChecker(prod.discount, prod.price)} / штука</span>
                </div>
                <div class="product-amount-controls">
                    <button class="product-amount-minus" id="min-${prod.id}"></button>
                    <span class="product-amount">${prod.count}</span>
                    <button class="product-amount-plus" id="pls-${prod.id}"></button>
                </div>
                </div>
                </div>
                <div class="product-right-part">
                <span class="product-price-all" id="prc-${prod.id}">${this.f.numberFormat(this.discountCheckerNumb(prod.discount, prod.price) * prod.count)}</span>
                <button class="product-delete" id="del-${prod.id}">Удалить</button>
                </div>`
                const deleteProduct = product.querySelector('.product-delete')
                const prodMinus = product.querySelector('.product-amount-minus')
                const prodPlus = product.querySelector('.product-amount-plus')
                deleteProduct.addEventListener('click', (e) => {
                    const index = window.shop.basket.findIndex(product => product.id === e.target.id.split('-')[1])
                    window.shop.basket.splice(index, 1)
                    this.caller()
                    this.emit('header-count')
                })
                prodMinus.addEventListener('click', (e) => {
                    const index = window.shop.basket.findIndex(product => product.id === e.target.id.split('-')[1])
                    const bask = window.shop.basket[index]
                    if (bask.count === 1) {
                        window.shop.basket.splice(index, 1)
                    }
                    bask.count--
                    bask.totalPrice = bask.discount ? bask.price * (100 - bask.discount) / 100 * bask.count : bask.price * bask.count
                    this.caller()
                })
                prodPlus.addEventListener('click', (e) => {
                    const index = window.shop.basket.findIndex(product => product.id === e.target.id.split('-')[1])
                    const bask = window.shop.basket[index]
                    bask.count++
                    bask.totalPrice = bask.discount ? bask.price * (100 - bask.discount) / 100 * bask.count : bask.price * bask.count
                    this.caller()
                })

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

    caller() {
        this.emit('basket-create-product')
        this.emit('change-add-button')
        this.emit('basket-changed')
        this.emit('change-total-price')
    }

    cleaner() {
        window.shop.basket = []
        this.caller()
    }

    reduceValue(val) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue[val]
        return window.shop.basket.reduce(reducer, 0)
    }
}

customElements.define('shop-cart', ShopCart)