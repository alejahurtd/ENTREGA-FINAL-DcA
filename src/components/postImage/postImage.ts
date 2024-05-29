// importamos css e iconos

import postStyles from './postImage.css';
import likedIconPath from '../../assets/heart.png';
import unlikedIconPath from '../../assets/emptyHeart.png';
import savedIconPath from '../../assets/save.png';
import unsavedIconPath from '../../assets/emptySave.png';

// Empieza nuestro "diccionario" para los nombres de los atributos HTML que el componente puede recibir.
// Recomendación de Anne, es mejor manejarlos sin mayusculas, (apesar que en la data esten con mayusculas) porque aveces ts no las lee y marca error

export enum Attribute {
	'id' = 'id',
	'image' = 'image',
	'isLiked' = 'isLiked',
	'isSaved' = 'isSaved',
	'likescount' = 'likescount',
	'username' = 'username',
	'description' = 'description',
}

class PostImage extends HTMLElement {
	id: string;
	image?: string;
	isLiked?: boolean;
	isSaved?: boolean;
	likescount?: string;
	username?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	// observedAttributes retorna una lista de atributos que cuando alguno cambia desencadena o se llama a "attributeChangedCallback"

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			id: null,
			image: null,
			isLiked: null,
			isSaved: null,
			likescount: null,
			username: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	//attributeChangedCallback se ejecuta cuando cambia algún atributo observado (arriba)

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.isLiked:
				this.isLiked = newValue === 'true';
				break;
			case Attribute.isSaved:
				this.isSaved = newValue === 'true';
				break;
			default:
				(this as any)[propName] = newValue;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	// Evento para nuestros Likes y Saves
	changeLikeState() {
		this.isLiked = !this.isLiked;
		this.render();
	}

	changeSaveState() {
		this.isSaved = !this.isSaved;
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			// Limpiar el contenido existente en el shadowRoot, para que no se duplique el contenido
			this.shadowRoot.innerHTML = '';

			//esctrcutura de nuestro componente

			this.shadowRoot.innerHTML += `
						 <style> ${postStyles}</style>

             <section class="container">
						 <div class="imgContainer">
						   <img class= "img" src="${this.image}" alt="Post image">
						 </div>
						 <div class="userContent">
						   <div class="iconContainer">
							    <img class= "icon" src="${this.isLiked ? likedIconPath : unlikedIconPath}" alt="Like icon" id="likeBtn">
							   <img class= "icon" src="${this.isSaved ? savedIconPath : unsavedIconPath}" alt="Save icon" id="saveBtn">
							 </div>
							 <div class= "likeContainer">
							 <p class= "likes">${this.likescount} likes</p>
							 </div>
							 <div class= "username-container">
							 <p
							   <span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>
							 </p>
							 </div>



						 </div>
            </section>
        `;
			// buscamos nuestros botones en el DOM
			const likeBtn = this.shadowRoot.querySelector('#likeBtn');
			const saveBtn = this.shadowRoot.querySelector('#saveBtn');

			// y aquí añadimos el evento para el click
			likeBtn?.addEventListener('click', () => this.changeLikeState());
			saveBtn?.addEventListener('click', () => this.changeSaveState());
		}
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
