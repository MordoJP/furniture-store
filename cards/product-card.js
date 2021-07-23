class ProductCard extends WebComponent {
    get css() { return `
		<style>
		    @import "../style/circe.css";
		    
			:host {
			
			}
			
			.card {
			    height: 450px;
			    width: 300px;
			    margin: 60px 20px 0;
			    display: flex;
			    flex-direction: column;
			    justify-content: space-between;
			    align-items: center;
			    background-color: black;
			    border: 1px solid azure;
			}
			
			.sale, .title-box, .img, .price-box, .button {
			    margin: 5px 0;
			}
			
			.sale {
			    color: azure;
			    width: 120px;
			    height: 30px;
			    opacity: .0;
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    background-color: #161b2b;
			    border-radius: 5px 5px 5px 5px;
			}
	
			.title-box {
			    width: 80%;
			    height: 30px;
			    display: flex;
			    flex-direction: column;
			}
			
			.category {
			    font: 15px Tahoma;
			    color: azure;
			}
			
			.title {
			    font: 30px Tahoma;
			    font-weight: bold;
			    color: azure;
			    margin: 5px 0;
			}
			
			.img {
			    width: 95%;
			    height: 200px;
			    background-position: center;
			    background-repeat: no-repeat;
			    background-size: contain;
			}
			
			.price-box {
			    display: flex;
			    flex-direction: column;
			    justify-content: space-between;
			    align-items: center;
			    height: 40px;
			}
			
			.price {
			    font: 20px Tahoma;
			    color: #f0ffff;
			}
			
			.old-price {
			    font: 12px Tahoma;
			    color: #f0ffff;
			    text-decoration: line-through;
			    opacity: .8;
			}
			
			.button {
			    border: 0;
			    width: 200px;
			    height: 50px;
			    background-color: azure;
			    color: #161b2b;
			    font: 15px Tahoma;
			    border-radius: 25px 25px 25px 25px;
			    cursor: pointer;
			}
			
			.button:hover {
			    opacity: .8;
			    transition: 0.2s;
			}
			
			@media screen and (max-width: 1024px) {
			    .card {
			        height: 350px;
			        width: 250px;
			        margin: 20px;
			    }
			    
			    .img {
			        width: 250px;
			        height: 200px;
			    }
			}
			
			@media screen and (max-width: 640px) {
			    .card {
			        height: 250px;
			        width: 150px;
			        margin: 10px;
			    }
			    
			    .img {
			        width: 150px;
			        height: 100px;
			    }
			}
			
			@media screen and (max-width: 320px) {
			    .card {
			        height: 150px;
			        width: 100px;
			        margin: 5px;
			    }
			    
			    .img {
			        width: 100px;
			        height: 50px;
			    }
			}
		</style>
	`}

    get html() { return `
        <div class="card">
            <div class="sale"></div>
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
        const title = this.shadowRoot.querySelector('.title')
        const img = this.shadowRoot.querySelector('.img')
        const price = this.shadowRoot.querySelector('.price')
        const button = this.shadowRoot.querySelector('.button')
        const sale = this.shadowRoot.querySelector('.sale')
        const category = this.shadowRoot.querySelector('.category')
        const oldPrice = this.shadowRoot.querySelector('.old-price')

        category.innerText = this.categoryName

            title.innerText = `${this.title}`
        img.style.backgroundImage = `url('img/products/${this.img}')`
        price.innerText = `${this.price} руб.`
        if (this.discount) {
            sale.innerText = `Скидка ${this.discount} %`
            sale.style.opacity = 0.8;
            oldPrice.innerText = `${this.price.toFixed(2)} руб.`
            price.innerText = `${(this.price * (100 - this.discount)/100).toFixed(2)} руб.`
        } else {
            price.innerText = `${this.price.toFixed(2)} руб.`
        }
        button.addEventListener('click', () => {
            this.emit('add_product_to_cart', this.id)
        })
    }


}

customElements.define('product-card', ProductCard)
