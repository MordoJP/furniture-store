import('./cards/cards-container.js')
import('./shop-cart.js')

class MyApp extends WebComponent {
    get css() { return `
		<style>
			:host {
              
			}
		    
		    .store-name {
		        margin: 0;
		        color: azure;
		        font: 60px Tahoma;
			    font-weight: bold;
		    }
			
		</style>
	`}

    get html() { return `
        <h1 class="store-name">Cose rubate</h1>
        <cards-container></cards-container>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {
        window.config = {
            domain: 'http://localhost:3000/'
        }
    }
}

customElements.define('my-app', MyApp)
