import newTweet from './newTweet.css';

interface Tweet {
	image: string;
	username: string;
	description: string;
}
const FormData: Omit<Tweet, 'id'> = {
	image: '',
	username: '',
	description: '',
};

class NewTweet extends HTMLElement {
	image?: string;
	username?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return Object.keys(FormData);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style> ${newTweet} </style>
				<section class="container">
					<div class="container__tweet-img">
						<div class="tweet">
							<p class="description">${this.description}</p>
						</div>
						<div class="img">
							<div class="img-container">
								<img class="img-post" src="${this.image}" alt="Post image">
							</div>
						</div>
					</div>
					<div class='infoUser'>
						<p class='username'>${this.username}</p>
					</div>
				</section>
			`;
		}
	}
}

customElements.define('post-tweet', NewTweet);
export default NewTweet;
