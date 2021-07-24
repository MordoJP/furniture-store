import('./product-card.js')

class HeaderContainer extends WebComponent {
    get css() { return `
		<style>
		    .header {
		        display: flex;
		        flex-direction: column;
		        align-items: center;
		    }
		    
		    .header__content, .header__categories {
		        width: 95%;
		        max-width: 1440px;
		    }
		    
		    .header__content {
		        padding: 20px 10px;
		    }
		    
		    .category-button-container, .logo, .basket-search-container {
		        width: 300px;
		    }
		    
		    .header__content {
		        display: flex;
		        justify-content: space-between;
		        align-items: center;
		    }
		    
		    .category-button-container {
		        height: 40px;
		        display: flex;
		        align-items: center;
		    }
		    
		    .category-button {
		        width: 33px;
		        height: 33px;
		        cursor: pointer;
		        position: absolute;
		        opacity: 0.8;
		        transition: all 0.2s ease-out;
		    }
		    
		    .category-button:hover {
		        opacity: 1;
		    }
		    
		    .button__top-line-open, .button__bottom-line-open, .button__top-line-closed, .button__bottom-line-closed {
		        height: 2px;
		        width: 40px;
		        background-color: azure;
		        border-radius: 1px 1px 1px 1px;
		        position: relative;
                transition: all 0.3s ease-out;
		    }
		    
		    .button__top-line-open {
		        transform: rotate(45deg);
		        top: 16px;
		        left: -3px;
		    }
		    
		    .button__bottom-line-open {
		        transform: rotate(-45deg);
		        top: 14px;
		        left: -3px;
		    }
		    
		    .button__top-line-closed {
		        top: 12px;
		        left: -3px;
		    }
		    
		    .button__bottom-line-closed {
		        top: 16px;
		        left: -3px;
		    }
		    
            .logo {
                color: azure;
                margin: 0;
                text-align: center;
                font: 60px "Circe Bold";
            }
            
            .basket-search-container, .basket-container, .search-container {
                display: flex;
                align-items: center;
            }
            
            .basket-search-container {
                justify-content: space-between;
            }
            
            .basket-icon {
                width: 30px;
                height: 30px;
                color: azure;
                background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTUwLjAwMDAwMHB0IiBoZWlnaHQ9IjE1MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDE1MC4wMDAwMDAgMTUwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE2LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxOQo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwxNTAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8L2c+Cjwvc3ZnPgo=");
            }
            
            .header__categories-open {
                border-top: 1px solid azure;
                border-bottom: 1px solid azure;
                transition: all 0.3s ease-out;
                display: block;
            }
            
            .header__categories-closed {
                display: none;
                transition: all 0.3s ease-out;
            }
            
            .categories-container {
                list-style-type: none;
                margin: 0; 
                padding-left: 0;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            
            .categories-button {
                color: azure;
                font: 20px Circe;
                cursor: pointer;
                margin: 10px 35px;
            }
            
		</style>
	`}

    get html() { return `
        <header class="header">
            <div class="header__content">    
                <div class="category-button-container">
                    <div class="category-button">
                        <div class="button__top-line-closed" id="top-line"></div>
                        <div class="button__bottom-line-closed" id="bottom-line"></div>
                    </div>
                </div>
                <h1 class="logo">cose rubate</h1>
                <div class="basket-search-container">
                    <div class="basket-container">
                        <span class="basket-counter"></span>
                        <div class="basket-icon"></div>
                    </div>
                    <form class="search-container">
                        <input type="text" class="search-bar" placeholder="Поиск...">
                        <div class="search-icon">
                        <button class="search-button"></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="header__categories-closed" id="header__categories">
                <ul class="categories-container">
                <li class="categories-button cat-all">Все</li>
                <li class="categories-button cat-sale">Со скидкой</li>
                <li class="categories-button cat-sofa">Диваны</li>
                <li class="categories-button cat-armchair">Кресла</li>
                <li class="categories-button cat-bed">Кровати</li>
                <li class="categories-button cat-chair">Стулья</li>
                <li class="categories-button cat-table">Столы</li>
                <li class="categories-button cat-lighter">Светильники</li>
                <li class="categories-button cat-style">Декоративные украшения</li>
                </ul>
            </div>
        </header>
	`}

    constructor() {
        super()
        this.amount = 0
    }

    async connectedCallback() {
        const categoryButton = this.shadowRoot.querySelector('.category-button')
        const categoryes = this.shadowRoot.querySelector('#header__categories')
        const topLine = this.shadowRoot.querySelector('#top-line')
        const bottomLine = this.shadowRoot.querySelector('#bottom-line')

        categoryButton.addEventListener('click', () => {
            this.categoriesOpen(topLine, bottomLine, categoryes)
        })

        // const basketIcon = this.shadowRoot.querySelector('.basket-icon')
        // basketIcon.style.backgroundImage = 'url(img/icons/basket-icon.png);'
    }

    categoriesOpen (top, bottom, hide) {
        if (top.className === 'button__top-line-open') {
            top.classList.remove('button__top-line-open')
            top.classList.add('button__top-line-closed')
            bottom.classList.remove('button__bottom-line-open')
            bottom.classList.add('button__bottom-line-closed')
            hide.classList.remove('header__categories-open')
            hide.classList.add('header__categories-closed')
        } else {
            top.classList.remove('button__top-line-closed')
            top.classList.add('button__top-line-open')
            bottom.classList.remove('button__bottom-line-closed')
            bottom.classList.add('button__bottom-line-open')
            hide.classList.remove('header__categories-closed')
            hide.classList.add('header__categories-open')
        }
    }


    // addListeners() {
    //     this.addEventListener('add_product_to_cart', ({detail}) => {
    //         const idx = window.shop.products.findIndex(el => el.id === +detail)
    //         this.calculateAmount(window.shop.products[idx])
    //     })
    // }
    //
    // calculateAmount(product) {
    //     const price = product.price
    //     if (product.discount) {
    //         const priceDiscount = (product.price * (100 - product.discount)/100)
    //         this.amount += priceDiscount
    //     } else {
    //         this.amount += price
    //     }
    //     this.renderAmount()
    // }
    //
    // renderAmount() {
    //     this.shadowRoot.querySelector('.amount').innerText = this.amount
    // }
}

customElements.define('header-container', HeaderContainer)