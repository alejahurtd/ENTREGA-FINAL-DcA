import { appState } from '../../store/index';
import creatPostStyle from './creatPost.css';
import { Screens } from '../../types/storeScreens';

class CreatePostButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
					<style>${creatPostStyle}</style>
					<button id="createPostButton" class="create-post-button">+</button>
			`;
	}

	connectedCallback() {
		this.shadowRoot.querySelector('#createPostButton').addEventListener('click', () => {
			this.openModal();
		});
	}

	openModal() {
		const modalBackdrop = document.createElement('div');
		modalBackdrop.className = 'modal-backdrop';

		const modal = document.createElement('div');
		modal.className = 'modal';

		modal.innerHTML = `
		<span class="close-modal">&times;</span>
		<div class="modal-content">
				<button class= "new-post">New post</button>
				<button class= "new-tweet">New tweet</button>
		</div>
		`;

		this.shadowRoot.appendChild(modalBackdrop);
		this.shadowRoot.appendChild(modal);

		// Cerrar modal al hacer clic en el backdrop
		modalBackdrop.addEventListener('click', () => {
			modalBackdrop.remove();
			modal.remove();
		});

		// Cerrar modal al hacer clic en la "x"
		modal.querySelector('.close-modal').addEventListener('click', () => {
			modalBackdrop.remove();
			modal.remove();
		});
	}
}

customElements.define('create-post-button', CreatePostButton);
export default CreatePostButton;
