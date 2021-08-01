class SliderContainer extends WebComponent {
    get css() { return `
		<style>
          
		</style>
	`}

    get html() { return `
      <div class="container">
        
      </div>
	`}

    constructor() {
        super()
    }

    async connectedCallback() {

    }
}

customElements.define('slider-container', SliderContainer)
