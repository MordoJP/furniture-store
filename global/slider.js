class SliderContainer extends WebComponent {
    get css() { return `
		<style>
		    .slider-container {
		        display: flex;
		        flex-direction: column;
		        align-items: center;
		        width: 95%;
		        max-width: 1423px;
		        margin: 0 auto;
		    }
            .slider {
                max-width: 100%;
                margin: 10px auto;
                display: flex;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
            }
            
            .slider-line {
                display: flex;
                transition: All 0.5s ease-out;
            }
            
            .slide {
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            
            .slider-dot {
                height: 10px;
                width: 10px;
                margin: 0 3px;
                border: 0;
                padding: 0;
                border-radius: 50%;
                background-color: azure;
                opacity: .7;
                transition: all 0.2s ease-out;
            }
            
            .slider-dot:hover {
                opacity: 1;
            }
		</style>
	`}

    get html() { return `
      <div class="slider-container">
        <div class="slider">
            <div class="slider-line"></div>
        </div>
        <div class="slider-buttons-container"></div>
      </div>
	`}

    constructor() {
        super()
        this.width = 0;
        this.positionNow = 0;
    }

    async connectedCallback() {
        await this.getSlides()
        window.shop.slider = this.slides

        const slider = this.shadowRoot.querySelector('.slider')
        const sliderLine = this.shadowRoot.querySelector('.slider-line')
        const buttonsContainer = this.shadowRoot.querySelector('.slider-buttons-container')

        this.slidesCreator(sliderLine, buttonsContainer, slider)
        setInterval(() => this.rollSliderAuto(sliderLine), 5000)
    }

    async getSlides() {
        this.slides = await this.fetch('get', 'slider/')
    }

    slidesCreator(line, buttons, sl) {
        let count = 0
        window.shop.slider.forEach(slide => {
            const box = document.createElement('div')
            const button = document.createElement('button')
            box.style.backgroundImage = `url('img/slider/${slide}')`
            box.className = 'slide'
            button.id = `cnt-${count}`
            count++
            button.className = 'slider-dot'
            button.addEventListener('click', () => this.rollSlider(line, button))
            line.append(box)
            buttons.append(button)
            this.sliderLineWidth(sl, line, box)
            window.addEventListener('resize', () => this.sliderLineWidth(sl, line, box))
        })
    }

    sliderLineWidth(sl, line, img){
        this.width = sl.offsetWidth
        line.style.width = `${this.width * window.shop.slider.length}px`
        img.style.width = `${this.width}px`
        img.style.height = `${this.width / 2}px`
        line.style.transform = `translate(-${this.width * this.positionNow}px`
    }

    rollSlider(slider, counter) {
        slider.style.transform = `translate(-${this.width * +counter.id[4]}px`
        this.positionNow = +counter.id[4]
    }

    rollSliderAuto(slider) {
        if (this.positionNow < window.shop.slider.length - 1){
            this.positionNow++
        } else {
            this.positionNow = 0
        }
        slider.style.transform = `translate(-${this.width * this.positionNow}px`
    }
}

customElements.define('slider-container', SliderContainer)