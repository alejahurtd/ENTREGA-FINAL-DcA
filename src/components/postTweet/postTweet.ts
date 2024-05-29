import tweetStyles from './postTweet.css';

export enum Attribute {
	'image' = 'image',
	'description' = 'description',
	'username' = 'username',
}

class PostTweet extends HTMLElement {
	image?: string;
	description?: string;
	username?: string;

	// recordar el modo open  del componente, si este el componente no se encapsula (no funciona)
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			description: null,
			username: null,
		};
		return Object.keys(attrs);
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
			// Limpiar el contenido existente en el shadowRoot, para que no se duplique el contenido
			this.shadowRoot.innerHTML = '';
			// creamos nuestro css para solo el componente.
			this.shadowRoot.innerHTML += `
						 <style> ${tweetStyles}</style>
      <section class="container">
				<div class="container__tweet-img">
				  <div class=tweet>
					 <p class= "description"> ${this.description} </p>
					</div>
					<div class="img">
					 <div class= "img-container">
					   <img class= "img-post" src="${this.image}" alt="Post image">
				   </div>
					</div>
				</div>
				<div class='infoUser'>
				 <p class= "username"> ${this.username} </p>
				</div>
			</section>

        `;
		}
	}
}

customElements.define('post-tweet', PostTweet);
export default PostTweet;
