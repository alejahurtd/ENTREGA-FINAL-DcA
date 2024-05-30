import postStyles from './postImage.css';
import likedIconPath from '../../assets/heart.png';
import unlikedIconPath from '../../assets/emptyHeart.png';
import savedIconPath from '../../assets/save.png';
import unsavedIconPath from '../../assets/emptySave.png';

interface Post {
	id: string;
	image: string;
	isLiked: boolean;
	isSaved: boolean;
	likescount: string;
	username: string;
	description: string;
}
const FormData: Omit<Post, 'id'> = {
	image: '',
	isLiked: false,
	isSaved: false,
	likescount: '',
	username: '',
	description: '',
};

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

	static get observedAttributes() {
		return Object.keys(FormData);
	}

	attributeChangedCallback(propName: keyof FormData, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case 'isLiked':
				this.isLiked = newValue === 'true';
				break;
			case 'isSaved':
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

	async render() {
		const css = this.ownerDocument.createElement('style');
		css.innerHTML = postStyles;
		this.shadowRoot?.appendChild(css);

		const postContainer = this.ownerDocument.createElement('section');
		const image = this.ownerDocument.createElement('img');
		image.src = this.image;
		postContainer.appendChild(image);

		const likeContainer = this.ownerDocument.createElement('div');
		likeContainer.innerHTML = `
      <img src="${this.isLiked ? likedIconPath : unlikedIconPath}" alt="Like icon" id="likeBtn">
      <p>${this.likescount} likes</p>
    `;
		postContainer.appendChild(likeContainer);

		const usernameContainer = this.ownerDocument.createElement('div');
		usernameContainer.innerHTML = `
      <p>
        <span>${this.username}</span>: <span>${this.description}</span>
      </p>
    `;
		postContainer.appendChild(usernameContainer);

		this.shadowRoot?.appendChild(postContainer);
	}

	changeLikeState() {
		this.isLiked = !this.isLiked;
		this.render();
	}

	changeSaveState() {
		this.isSaved = !this.isSaved;
		this.render();
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
