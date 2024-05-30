import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './PostImage'; // Importamos el componente PostImage

class PostContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.addEventListener('post-added', this.handlePostAdded.bind(this));
	}

	async connectedCallback() {
		await this.fetchData();
	}

	async fetchData() {
		const querySnapshot = await getDocs(collection(db, 'posts'));
		const postsData = [];
		querySnapshot.forEach((doc) => {
			postsData.push(doc.data());
		});
		this.render(postsData);
	}
	handlePostAdded(event: CustomEvent) {
		const newPost = event.detail;
		this.addPostToDOM(newPost);
	}

	addPostToDOM(post) {
		const container = this.shadowRoot.querySelector('.post-container');

		const postElement = document.createElement('post-image');
		postElement.setAttribute('id', post.id);
		postElement.setAttribute('image', post.image);
		postElement.setAttribute('isLiked', post.isLiked);
		postElement.setAttribute('isSaved', post.isSaved);
		postElement.setAttribute('likescount', post.likesCount);
		postElement.setAttribute('username', post.username);
		postElement.setAttribute('description', post.description);

		container.appendChild(postElement);
	}
	render(posts) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <style>
          .post-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
        </style>
        <div class="post-container"></div>
      `;

			posts.forEach((post) => this.addPostToDOM(post));
		}
	}
}

customElements.define('post-container', PostContainer);
