import MenuBar from '../../components/menuBar/menuBar';
import { addPost } from '../../services/firebaseConfig';

const formData = {
	image: '',
	description: '',
};

class Post extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeImage(e: any) {
		formData.image = e?.target?.value;
	}

	changeDescription(e: any) {
		formData.description = e?.target?.value;
	}

	submitForm() {
		addPost(formData);
	}

	render() {
		const sectionBar = this.ownerDocument.createElement('MenuBar') as MenuBar;
		this.shadowRoot?.appendChild(sectionBar);

		const section = this.ownerDocument.createElement('section');
		this.shadowRoot?.appendChild(section);

		const creatPost = this.ownerDocument.createElement('div');
		section.appendChild(creatPost);

		const sectionTittle = this.ownerDocument.createElement('div');
		creatPost.appendChild(section);

		const tittle = this.ownerDocument.createElement('p');
		tittle.innerText = 'Creat a new post';
		sectionTittle.appendChild(tittle);

		const share = this.ownerDocument.createElement('div');
		sectionTittle.appendChild(share);

		const shareButton = this.ownerDocument.createElement('button');
		shareButton.innerText = 'share';
		shareButton.addEventListener('click', this.submitForm);
		share.appendChild(shareButton); // conectar al dashboard y que se recargue la imagen

		const sectionCreatePost = this.ownerDocument.createElement('div');
		section.appendChild(sectionCreatePost);

		const sectionImage = this.ownerDocument.createElement('section');
		sectionCreatePost.appendChild(sectionImage);

		const image = this.ownerDocument.createElement('imput');
		image.innerText = '+';
		// image.type = 'file';
		sectionImage.appendChild(image);

		const description = this.ownerDocument.createElement('section');
		sectionCreatePost.appendChild(description);

		const textDescription = this.ownerDocument.createElement('imput');
		textDescription.innerText = 'Write a description...';
		description.appendChild(textDescription);
	}
}

customElements.define('app-creatPost', Post);
export default Post;
