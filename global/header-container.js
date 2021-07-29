class HeaderContainer extends WebComponent {
    get css() { return `
		<style>
		    /*basic header styles*/
		    .header {
		        display: flex;
		        flex-direction: column;
		        align-items: center;
		    }
		    
		    .mover {
		        transition: ease-out 0.3s;
		        height: 138px;
		    }
		    
		    .header-container {
		        position: fixed;
		        z-index: 2;
		        display: flex;
		        flex-direction: column;
		        align-items: center;
		    }
		    
		    .header-content, .header-categories {
		        width: 95%;
		        max-width: 1440px;
		        background-color: black;
		    }
		    
		    .header-content {
		        width: 100%;
		        padding: 20px 40px;
		        z-index: 3;
		        display: flex;
		        justify-content: space-between;
		        align-items: center;
		    }
		    
		    /*header-content inner items*/
		    .logo {
                color: azure;
                margin: 0;
                text-align: center;
                font: 60px "Circe Bold";
            }
		    
		    .category-button-container, .logo, .basket-search-container {
		        width: 300px;
		    }
		    
		    /*basket styles*/
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
		    
		    
		    .category-button:hover, .basket-button:hover, .search-button:hover {
		        opacity: 1;
		    }
		    
		    .basket-button, .search-button {
                border: 0;
                width: 30px;
                height: 30px;
                background-color: transparent;
                background-repeat: no-repeat;
                opacity: .8;
		        transition: ease-out 0.2s;
            }
            
            .basket-button {
                background-image: url("img/icons/basket-icon.svg"); /*если добавить вначале слэш, то путь будет правильный, но картинка не отобразится*/
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                position: absolute;
            }
            
            .basket-counter {
		        color: azure;
		        width: 25px;
		        height: 25px;
		        position: relative;
		        font: 16px "Circe ExtraBold";
		        background-color: #242424;
		        border-radius: 50%;
		        display: none;
		        align-items: center;
		        justify-content: center;
		        top: -7px;
		        left: 17px;
		        z-index: 4;
		    }
		    
		    /*search styles*/
            .search-button {
                position: absolute;
                top: 0;
                right: 0;
                background-image: url("img/icons/search-icon.svg"); /*то же самое что и выше с корзиной*/
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                z-index: 1;
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
            
		    /*category styles*/
		    .category-button-container {
		        height: 30px;
		        display: flex;
		        align-items: center;
		    }
		    
		    .category-button {
		        width: 40px;
		        height: 40px;
		        background-color: transparent;
		        border: 0;
		        cursor: pointer;
		        position: absolute;
		        opacity: 0.8;
		        transition: all 0.2s ease-out;
		    }
		    
		    .button-top-line-open, .button-bottom-line-open, .button-top-line-closed, .button-bottom-line-closed {
		        height: 2px;
		        width: 40px;
		        background-color: azure;
		        border-radius: 1px 1px 1px 1px;
		        position: relative;
		        left: -6px;
                transition: all 0.3s ease-out;
		    }
		    
		    .button-top-line-open {
		        transform: rotate(45deg);
		        top: 1px;
		    }
		    
		    .button-bottom-line-open {
		        transform: rotate(-45deg);
		        top: 0;
		    }
		    
		    .button-top-line-closed {
		        top: -4px;
		    }
		    
		    .button-bottom-line-closed {
		        top: 5px;
		    }
		    
            .header-categories {
                height: auto;
                border-top: 1px solid azure;
                border-bottom: 1px solid azure;
                transition: all 0.3s ease-out;
                box-sizing: border-box;
                transform: translateY(-250px);
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
            
            /*adaptive styles*/
            @media screen and (max-width: 1135px) {
                .logo {
                    font: 45px "Circe Bold";
                }
                
                .category-button-container, .basket-search-container {
		            width: 200px;
		        }
		        
		        .mover {
		            height: 116px;
		        }
            }
            
            @media screen and (max-width: 767px) {
                .logo {
                    font: 30px "Circe Bold";
                    width: 150px;
                }
                
                .mover {
		            height: 75px;
		        }
                
                .header-content {
                    width: 100%;
                    padding: 10px 20px;
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
		        
		        .search-container-form:hover> .search-bar{
                    width: 250px;
                }
            }
		</style>
	`}

    get html() { return `
        <header class="header">
            <div class="mover"></div>
            <div class="header-container">
                <div class="header-content">    
                    <div class="category-button-container">
                        <button class="category-button">
                            <div class="button-top-line-closed" id="top-line"></div>
                            <div class="button-bottom-line-closed" id="bottom-line"></div>
                        </button>
                    </div>
                    <h1 class="logo">cose rubate</h1>
                    <div class="basket-search-container">
                        <div class="basket-container">
                            <div class="basket-counter">0</div>
                            <button class="basket-button"></button>
                        </div>
                        <div class="search-container">
                        <form class="search-container-form">
                            <input type="text" class="search-bar" placeholder="Поиск...">
                            <div class="search-icon">
                            <button class="search-button">
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div class="header-categories">
                    <div class="categories-container"></div>
                </div>
            </div>
        </header>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {
        const headerContent = this.shadowRoot.querySelector('.header-content')
        const categoryButton = this.shadowRoot.querySelector('.category-button')
        const mover = this.shadowRoot.querySelector('.mover')
        const categories = this.shadowRoot.querySelector('.header-categories')
        const topLine = this.shadowRoot.querySelector('#top-line')
        const bottomLine = this.shadowRoot.querySelector('#bottom-line')
        const basketCounter = this.shadowRoot.querySelector('.basket-counter')
        const categoriesContainer = this.shadowRoot.querySelector('.categories-container')

        window.addEventListener('basket-changed', () => {
            basketCounter.innerText = window.shop.basket.length
            if (window.shop.basket.length === 0){
                basketCounter.style.display = 'none'
            } else {
                basketCounter.style.display = 'flex'
            }
        })
        this.updateCount(basketCounter)


        categoryButton.addEventListener('click', () => {
            this.categoriesOpen(topLine, bottomLine, categories, mover, headerContent)
        })

        window.addEventListener('create-categories', () => {
            this.render(categoriesContainer)
        })
    }

    //function for open/close category-navigation
    categoriesOpen (top, bottom, hide, move, header) {
        if (top.className === 'button-top-line-open') {
            top.classList.remove('button-top-line-open')
            top.classList.add('button-top-line-closed')
            bottom.classList.remove('button-bottom-line-open')
            bottom.classList.add('button-bottom-line-closed')
            hide.style.transform = 'translateY(-250px)'
            move.style.height = `${header.clientHeight + 10}px`
        } else {
            top.classList.remove('button-top-line-closed')
            top.classList.add('button-top-line-open')
            bottom.classList.remove('button-bottom-line-closed')
            bottom.classList.add('button-bottom-line-open')
            hide.style.transform = 'translateY(0)'
            move.style.height = `${header.clientHeight + hide.clientHeight}px`
        }
    }

    updateCount(basketCounter) {
        document.addEventListener('update-counter', ({detail}) => {
            basketCounter.innerText = detail
        })
    }

    //create category buttons
    render(categoriesBox) {
        const allCat = document.createElement('div')
        allCat.className = 'categories-button'
        allCat.id = 'cat-all'
        allCat.innerText = 'Все'
        const discCat = document.createElement('div')
        discCat.className = 'categories-button'
        discCat.id = 'cat-sale'
        discCat.innerText = 'Со скидкой'
        categoriesBox.append(allCat, discCat)

        if (window.shop.categories.length) {
            const cats = window.shop.categories.map(cat => {
                const newCat = document.createElement('div')
                newCat.id = `cat-${cat.id}`
                newCat.className = 'categories-button'
                newCat.innerText = cat.severalNames
                return newCat
            })
            categoriesBox.append(...cats)
        }
    }
}

// categoryFilter(){
//
// }

customElements.define('header-container', HeaderContainer)