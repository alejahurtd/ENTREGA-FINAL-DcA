import { addUser } from '../../services/firebaseConfig';

const formData = {
	Name: '',
	email: '',
	password: '',
};

class Register extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}

	changeAge(e: any) {
		formData.Name = e?.target?.value;
	}

	submitForm() {
		addUser(formData);
	}

	async render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Creat an Account';
		this.shadowRoot?.appendChild(title);

		const Name = this.ownerDocument.createElement('div');
		Name.innerText = 'First and last name';
		this.shadowRoot?.appendChild(Name);

		const mail = this.ownerDocument.createElement('input');
		mail.placeholder = 'Enter your email';
		mail.addEventListener('change', this.changeEmail);
		Name.appendChild(mail);

		const password = this.ownerDocument.createElement('div');
		password.innerText = 'Password';
		this.shadowRoot?.appendChild(password);

		const enterPassword = this.ownerDocument.createElement('input');
		enterPassword.placeholder = 'At least 8 characters';
		enterPassword.addEventListener('change', this.changePassword);
		password.appendChild(enterPassword);

		const confirmPassword = this.ownerDocument.createElement('div');
		confirmPassword.innerText = 'Confirm Password';
		this.shadowRoot?.appendChild(password);

		const confirmEnterPassword = this.ownerDocument.createElement('input');
		confirmEnterPassword.placeholder = 'At least 8 characters';
		confirmEnterPassword.addEventListener('change', this.changePassword);
		password.appendChild(confirmEnterPassword);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Create account';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);

		const privacy = this.ownerDocument.createElement('p');
		privacy.innerHTML = 'By creating an account, you agree to the Raw Terms of Service and Privacy Policy';
		this.shadowRoot?.appendChild(privacy);

		const signUp = this.ownerDocument.createElement('div');
		this.shadowRoot?.appendChild(signUp);

		const newAccount = this.ownerDocument.createElement('p');
		newAccount.innerText = 'Already have an account?';
		signUp.appendChild(newAccount);

		const logInUpButton = this.ownerDocument.createElement('p');
		logInUpButton.innerText = 'Log In';
		logInUpButton.addEventListener('click', () => {
			// Obtener referencia a la pantalla de registro
			const signUpScreen = document.getElementById('app-login');

			if (signUpScreen) {
				// Mostrar la pantalla de registro
				signUpScreen.style.display = 'block';
			} else {
				console.error("Element with ID 'signup-screen' not found.");
			}
		});
		signUp.appendChild(logInUpButton);
	}
}

customElements.define('app-register', Register);
export default Register;
