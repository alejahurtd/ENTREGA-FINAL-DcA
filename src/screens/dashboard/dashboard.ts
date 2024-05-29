import dashboardStyles from './dashboard.css';

// componentes
import '../../components/exportPapa';
import MenuPhoneBar from '../../components/menuPhone/menuPhone';
import PostImage, { Attribute as PostImageAttribute } from '../../components/postImage/postImage';
import PostTweet, { Attribute as PostTweetAttribute } from '../../components/postTweet/postTweet';
import MenuBar from '../../components/menuBar/menuBar';
import CreatePostButton from '../../components/creatPost/creatPost';

// Data
import dataPostImage from '../../data/dataPostImage';
import dataPostTweet from '../../data/dataPostTweet';

class Dashboard extends HTMLElement {
	PostImageList: PostImage[] = [];
	PostTweetList: PostTweet[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataPostImage.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostImageCard.setAttribute(PostImageAttribute.image, data.image);
			PostImageCard.setAttribute(PostImageAttribute.isLiked, data.isLiked ? 'true' : 'false');
			PostImageCard.setAttribute(PostImageAttribute.isSaved, data.isSaved ? 'true' : 'false');
			PostImageCard.setAttribute(PostImageAttribute.likescount, data.likesCount);
			PostImageCard.setAttribute(PostImageAttribute.username, data.username);
			PostImageCard.setAttribute(PostImageAttribute.description, data.description);

			// Añade el elemento PostImage a la lista PostImageList
			this.PostImageList.push(PostImageCard);
			console.log('list', this.PostImageList);
		});

		dataPostTweet.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostTweetCard = this.ownerDocument.createElement('post-tweet') as PostTweet;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostTweetCard.setAttribute(PostTweetAttribute.image, data.image);
			PostTweetCard.setAttribute(PostTweetAttribute.description, data.description);
			PostTweetCard.setAttribute(PostTweetAttribute.username, data.username);

			// Añade el elemento PostTweet a la lista PostTweetList
			this.PostTweetList.push(PostTweetCard);
			console.log('list', this.PostTweetList);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${dashboardStyles}</style>`;
		}

		const menuBar = this.ownerDocument.createElement('menu-bar') as MenuBar;
		menuBar.className = 'menubar';
		const menuPhoneBar = this.ownerDocument.createElement('menu-phone') as MenuPhoneBar;
		menuPhoneBar.className = 'menuphone';

		const container = this.ownerDocument.createElement('section');
		container.className = 'container';

		const PostImageCards = this.ownerDocument.createElement('div');
		PostImageCards.className = 'container-post';
		this.PostImageList.forEach((PostImageCard) => {
			PostImageCards.appendChild(PostImageCard);
		});
		container.appendChild(PostImageCards);

		const PostTweetCards = this.ownerDocument.createElement('div');
		PostTweetCards.className = 'container-tweet';
		this.PostTweetList.forEach((PostTweetCard) => {
			PostTweetCards.appendChild(PostTweetCard);
		});

		container.appendChild(PostTweetCards);
		const createPostButton = this.ownerDocument.createElement('create-post-button') as CreatePostButton;
		this.shadowRoot.appendChild(createPostButton);
		this.shadowRoot.appendChild(menuBar);
		this.shadowRoot.appendChild(menuPhoneBar);

		this.shadowRoot?.appendChild(container);
	}
}
customElements.define('app-dashboard', Dashboard);
export default Dashboard;
