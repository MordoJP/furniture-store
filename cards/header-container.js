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
		    
		    .mover {
		        width: 100%;
		        height: 128px;
		        background-color: black;
		        transition: ease-out 0.3s;
		    }
		    
		    .header__content {
		        width: 100%;
		        padding: 20px 40px;
		        position: fixed;
		        margin-bottom: 100px;
		        z-index: 5;
		        background-color: black;
		    }
		    
		    .category-button-container, .logo, .basket-search-container {
		        width: 300px;
		    }
		    
		    .header__content {
		        display: flex;
		        justify-content: space-between;
		        align-items: center;
		    }
		    
		    /*.basket-search-container {*/
		    /*    */
		    /*}*/
		    
		    .basket-icon-img, .search-icon-img{
                height: 30px;
                width: 30px;
                cursor: pointer;
                opacity: 0.8;
		        transition: all 0.2s ease-out;
            }
            
            
            .search-container-form {
                position: absolute;
                height: 30px;
                width: 30px;
            }
            
            .search-container-form:hover> .search-bar{
                background: #242424;
                height: 45px;
                border-radius: 45px;
                width: 300px;
                padding: 10px 25px;
                z-index: 1;
            }
            
            .search-button {
                position: absolute;
                top: 0;
                right: 0;
                background: none;
                border: 0;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 1;
            }
            
            .search-bar {
                height: 40px;
                width: 0;
                padding: 3px 20px;
                outline: none;
                transition: 0.4s cubic-bezier(0, 0.8, 0, 1);
                position: absolute;
                top: -7px;
                right: -11px;
                border: none;
                background: none;
                color: azure;
                font: 16px Circe;
            }
		    
		    .category-button-container {
		        height: 30px;
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
		    
		    .category-button:hover, .basket-icon-img:hover, .search-icon-img:hover {
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
            
            .basket-container, .search-container {
                width: 30px;
                margin: 0 20px;
            }
            
            .basket-search-container {
                justify-content: flex-end;
            }
            
            .header__categories-open {
                border-top: 1px solid azure;
                border-bottom: 1px solid azure;
                transition: all 0.3s ease-out;
                box-sizing: border-box;
                position: fixed;
                background-color: black;
                z-index: 4;
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
                opacity: .8;
            }
            
            .categories-button:hover {
                opacity: 1;
            }
            
            @media screen and (max-width: 1135px) {
                .logo {
                    font: 45px "Circe Bold";
                }
                
                .category-button-container, .basket-search-container {
		            width: 200px;
		        }
            }
            
            @media screen and (max-width: 767px) {
                .logo {
                    font: 30px "Circe Bold";
                }
                
                .header__content {
                    width: 100%;
                    padding: 10px 20px;
                    margin-bottom: 100px;
                }
                
                .basket-icon-img, .search-icon-img {
                    height: 20px;
                    width: 20px;
                }
                
                .category-button-container, .basket-search-container {
		            width: 80px;
		        }
		        
		        .basket-container, .search-container  {
		            margin: 0 5px;
		        }
		        
		        .header__categories-open {
		            top: -183px;
		        }
		        
		        .mover {
		            height: 65px;
		        }
		        
		        .search-container-form:hover> .search-bar{
                    width: 250px;
                }
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
                        <div class="basket-counter"></div>
                        <div class="basket-icon">
                        <img src="img/icons/basket-icon-n.png" alt="" class="basket-icon-img">
                        </div>
                    </div>
                    <div class="search-container">
                    <form class="search-container-form">
                        <input type="text" class="search-bar" placeholder="Поиск...">
                        <div class="search-icon">
                        <button class="search-button">
                            <img src="img/icons/search-icon-n.png" alt="" class="search-icon-img">
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div class="mover"></div>
            <div class="header__categories-open" id="header__categories">
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
        const headerContent = this.shadowRoot.querySelector('.header__content')
        const categories = this.shadowRoot.querySelector('#header__categories')
        const topLine = this.shadowRoot.querySelector('#top-line')
        const bottomLine = this.shadowRoot.querySelector('#bottom-line')
        const mover = this.shadowRoot.querySelector('.mover')

        categoryButton.addEventListener('click', () => {
            this.categoriesOpen(topLine, bottomLine, categories, mover, headerContent)
        })
    }

    categoriesOpen (top, bottom, hide, move, header) {
        let marginOpen
        if (window.matchMedia("(min-width: 1136px)").matches) {
            marginOpen = 128
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            marginOpen = 106
        } else if (window.matchMedia("(min-width: 320px)").matches) {
            marginOpen = 248
        }

        if (top.className === 'button__top-line-open') {
            top.classList.remove('button__top-line-open')
            top.classList.add('button__top-line-closed')
            bottom.classList.remove('button__bottom-line-open')
            bottom.classList.add('button__bottom-line-closed')
            hide.style.margin = '0 0 0'
            move.style.height = `${header.clientHeight}px`
        } else {
            top.classList.remove('button__top-line-closed')
            top.classList.add('button__top-line-open')
            bottom.classList.remove('button__bottom-line-closed')
            bottom.classList.add('button__bottom-line-open')
            hide.style.margin = `${marginOpen}px 0 0`
            move.style.height = `${header.clientHeight + hide.clientHeight}px`
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