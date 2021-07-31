class ProductCard extends WebComponent {
    get css() { return `
		<style>
		    
			:host {
			
			}
			
			.card {
			    height: 400px;
			    width: 350px;
			    margin: 60px 0;
			    display: flex;
			    flex-direction: column;
			    justify-content: space-between;
			    align-items: center;
			    background-color: black;
			    cursor: pointer;
			}
			
			.category, .button:hover, .old-price {
			    opacity: .7;
			}
			
			.category, .title, .price, .old-price, .button {
			    color: azure;
			}
			
			.sale, .sale-mouse-enter {
			    width: 30px;
			    height: 30px;
			    opacity: .0;
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    overflow: hidden;
			    background-color: #242424;
			    border-radius: 15px 15px 15px 15px;
			    transition: all 0.2s ease-out;
			}
			
			.sale {
			    width: 30px;
			}
			
			.sale-mouse-enter {
			    width: 120px;
			}
			
			.sale-text {
			    color: #242424;
			    font: 3px "Circe Light";
			    transition: all 0.2s ease-out;
			    opacity: 0;
			}
			
			.sale-text-mouse-enter {
			    opacity: 1;
			    color: azure;
			    font: 15px "Circe Light";
			}
	
			.title-box {
			    width: 70%;
			    display: flex;
			    flex-direction: column;
			}
			
			.category {
			    font: 15px "Circe ExtraLight";
			}
			
			.title {
			    font: 35px "Circe Bold";
			    margin: 0;
			}
			
			.img, .img-mouse-enter {
			    height: 180px;
			    background-position: center;
			    background-repeat: no-repeat;
			    background-size: contain;
			    transition: all 0.2s ease-out;
			}
			
			.img {
			    width: 95%;
			}
			
			.img-mouse-enter {
			    transform: scale(1.1);
			}
			
			.price-box {
			    display: flex;
			    flex-direction: column;
			    justify-content: space-between;
			    align-items: center;
			    height: 40px;
			}
			
			.price {
			    font: 20px Circe;
			}
			
			.old-price {
			    font: 12px "Circe Light";
			    text-decoration: line-through;
			}
			
			.button {
			    width: 200px;
			    height: 50px;
			    margin-top: 8px;
			    background-color: black;
			    font: 15px "Circe Light";
			    border: 1px solid azure;
			    border-radius: 25px 25px 25px 25px;
			    cursor: pointer;
			    transition: all 0.2s ease-out;
			}
			
			@media screen and (max-width: 1135px) {
			    .card {
			        height: 400px;
			        width: 300px;
			        margin: 50px 0;
			    }
			    
			    .sale, .sale-mouse-enter {
			    width: 25px;
			    height: 25px;
			    border-radius: 12px 12px 12px 12px;
			    }
			
			    .sale {
			        width: 25px;
			    }
			
			    .sale-mouse-enter {
			        width: 100px;
			    }
			
			    .sale-text {
			        font: 3px "Circe Light";
			    }
			
			    .sale-text-mouse-enter {
			        font: 12px "Circe Light";
			    }
			    
			    .img, .img-mouse-enter {
			        height: 170px;
			    }
			    
			    .price-box {
			        height: 35px;
			    }
			
			    .price {
			        font: 18px Circe;
			    }
			
			    .old-price {
			        font: 12px "Circe Light";
			    }
			
			    .button {
			        width: 150px;
			        height: 40px;
			        margin-top: 8px;
			        font: 15px "Circe Light";
			        border-radius: 20px 20px 20px 20px;
			    }
			}
			
			@media screen and (max-width: 767px) {
			    .card {
			        height: 300px;
			        width: 200px;
			        margin: 40px 0;
			    }
			    
			    .category {
			        font: 12px "Circe ExtraLight";
			    }
			    
			    .title {
			        font: 23px "Circe Bold";
			    }
			
			    .sale, .sale-mouse-enter {
			    width: 20px;
			    height: 20px;
			    border-radius: 10px 10px 10px 10px;
			    }
			
			    .sale {
			        width: 20px;
			    }
			
			    .sale-mouse-enter {
			        width: 80px;
			    }
			
			    .sale-text {
			        font: 3px "Circe Light";
			    }
			
			    .sale-text-mouse-enter {
			        font: 12px "Circe Light";
			    }
			    
			    .img, .img-mouse-enter {
			        height: 150px;
			    }
			    
			    .price-box {
			        height: 30px;
			    }
			
			    .price {
			        font: 15px Circe;
			    }
			
			    .old-price {
			        font: 10px "Circe Light";
			    }
			
			    .button {
			        width: 150px;
			        height: 40px;
			        margin-top: 8px;
			        font: 15px "Circe Light";
			        border-radius: 20px 20px 20px 20px;
			    }
			}
		
		</style>
	`}

    get html() { return `
        <div class="card">
            <div class="sale">
                <div class="sale-text"></div>
            </div>
            <div class="title-box">
                <span class="category"></span>
                <h3 class="title"></h3>
            </div>
            <div class="img"></div>
            <div class="price-box">
                <div class="price"></div>
                <div class="old-price"></div>
            </div>
            <button class="button">В корзину</button>
        </div>
	`}


    constructor() {
        super()
    }

    async connectedCallback() {
        const card = this.shadowRoot.querySelector('.card')
        const title = this.shadowRoot.querySelector('.title')
        const img = this.shadowRoot.querySelector('.img')
        const price = this.shadowRoot.querySelector('.price')
        const button = this.shadowRoot.querySelector('.button')
        const sale = this.shadowRoot.querySelector('.sale')
        const saleText = this.shadowRoot.querySelector('.sale-text')
        const category = this.shadowRoot.querySelector('.category')
        const oldPrice = this.shadowRoot.querySelector('.old-price')

        category.innerText = this.categoryName
        title.innerText = `${this.title}`
        img.style.backgroundImage = `url('img/products/${this.img}')`
        price.innerText = `${this.price} руб.`
        this.discountAjuster(this.discount, saleText, sale, oldPrice, price, this.price)

        button.addEventListener('click', () => {
            this.emit('add_product_to_cart', {id: this.id, title: this.title, price: this.price, img: this.img, discount: this.discount})
            const index = window.shop.basket.findIndex(product => product.id === this.id)
            this.emit('basket-create-product')
            if (index !== -1) {
                button.innerText = 'Удалить'
            } else {
                button.innerText = 'В корзину'
            }
        })
        card.addEventListener('mouseenter', () => {
            this.aiming(sale, saleText, img)
        })
        card.addEventListener('mouseleave', () => {
            this.aiming(sale, saleText, img)
        })
    }

    discountAjuster(disc, salerTxt, saler, old, newPr, pricer) {
        if (disc) {
            salerTxt.innerText = `Скидка ${disc} %`
            saler.style.opacity = 0.8
            old.innerText = this.f.numberFormat(pricer)
            newPr.innerText = this.f.numberFormat((pricer * (100 - disc)/100))
        } else {
            newPr.innerText = this.f.numberFormat(pricer)
        }
    }

    aiming(sal, salTxt, image) {
        sal.classList.toggle('sale-mouse-enter')
        salTxt.classList.toggle('sale-text-mouse-enter')
        image.classList.toggle('img-mouse-enter')
    }
}

customElements.define('product-card', ProductCard)