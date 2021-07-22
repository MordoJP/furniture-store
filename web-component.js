const webComponentTemplate = document.createElement('template')

webComponentTemplate.innerHTML = `
	<style>	
		*,
		*::before,
		*::after,
		:host,
		:host::before,
		:host::after {
			box-sizing: border-box;
			font-family: 'Roboto', sans-serif;
		}
		
		:host,
		:host::before,
		:host::after {
			display: block;
		}
	
		.hidden,
		:host([hidden]),
		:host(.hidden) {
			display: none !important;
		}
	</style>
`

class WebComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(webComponentTemplate.content.cloneNode(true))
        WebComponent.formTemplate({root: this.shadowRoot, template: this.css})
        WebComponent.formTemplate({root: this.shadowRoot, template: this.html})
        this.setElementAttrs(this.getElementAttrs)
    }

    static formTemplate({root, template}) {
        if (template === undefined) return
        const templateElement = document.createElement('template')
        templateElement.innerHTML = template
        root.append(templateElement.content.cloneNode(true))
    }

    get getElementAttrs() {
        if (!this.hasAttributes()) return
        return [].slice.call(this.attributes).map((attr) => ({
            name: attr.name,
            value: attr.value
        }))
    }

    setElementAttrs(attrs) {
        if (typeof attrs !== 'undefined') attrs.forEach(attr => {
            this[`${attr.name}Prop`] = attr.value
        })
    }

    emit(eventName, detail = null) {
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail
        }))
    }

    async fetch(method, url, params = null, body = null) {
        const DOMAIN = window.config.domain
        method = method.toUpperCase()
        const options = {
            method,
            headers: {'content-type': 'application/json; charset=utf-8'}
        }
        if (method !== 'GET' && body !== null) options.body = JSON.stringify(body)
        let req = DOMAIN + url
        const queryParams = p => {
            return Object.keys(p)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(p[k]))
                .join('&')
        }
        if (params !== null) req += (req.indexOf('?') === -1 ? '?' : '&') + queryParams(params)
        return fetch(req, options)
        .then(res => res.json())
        .catch(err => {
            console.error(err)
            throw new Error(err)
        })
    }

    get f() {
        return {
            declOfNum: (quantity, words = ['предмет', 'предмета', 'предметов']) => {
                const setWord = number => {
                    const cases = [2, 0, 1, 1, 1, 2]
                    return words[
                        (number % 100 > 4 && number % 100 < 20)
                            ? 2
                            : cases[(number % 10 < 5)
                            ? number % 10
                            : 5]
                        ]
                }
                return `${quantity} ${setWord(quantity)}`
            },
            getRandomInt: (min, max) => {
                min = Math.ceil(min)
                max = Math.floor(max)
                return Math.floor(Math.random() * (max - min + 1)) + min
            },
        }
    }
}

window.WebComponent = WebComponent
