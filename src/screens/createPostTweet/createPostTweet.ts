import { addTweet } from '../../services/firebaseConfig';
import MenuBar from '../../components/menuBar/menuBar';

const formData = {
	description: '',
};

class Tweet extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeDescription(e: any) {
		formData.description = e?.target?.value;
	}

	submitForm() {
		addTweet(formData);
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
		tittle.innerText = 'Creat a new tweet';
		sectionTittle.appendChild(tittle);

		const share = this.ownerDocument.createElement('div');
		sectionTittle.appendChild(share);

		const shareButton = this.ownerDocument.createElement('button');
		shareButton.innerText = 'share';
		shareButton.addEventListener('click', this.submitForm);
		share.appendChild(shareButton);

		const sectionCreateTweet = this.ownerDocument.createElement('div');
		section.appendChild(sectionCreateTweet);

		const description = this.ownerDocument.createElement('section');
		sectionCreateTweet.appendChild(description);

		const textDescription = this.ownerDocument.createElement('imput');
		textDescription.innerText = 'Write a tweet...';
		description.appendChild(textDescription);
	}
}

customElements.define('app-creatTweet', Tweet);
export default Tweet;
