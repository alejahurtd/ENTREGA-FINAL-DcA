import { addUser } from '../../firebase/firebaseConfig';
import { LogIn } from '../../types/logIn';

const FormData: Omit<LogIn, 'id'> = {
	email: '',
	password: '',
};

class LoginScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeEmail(e: any) {
		FormData.email = e?.target?.value;
	}

	changePassword(e: any) {
		FormData.password = e?.target?.value;
	}

	submitForm() {
		addUser(FormData);
	}

	render() {
		const title = this.ownerDocument.createElement('h1');
		title.innerText = 'Login';
		this.shadowRoot?.appendChild(title);

		const email = this.ownerDocument.createElement('div');
		email.innerText = 'E-mail';
		this.shadowRoot?.appendChild(email);

		const mail = this.ownerDocument.createElement('input');
		mail.placeholder = 'Enter your email';
		mail.addEventListener('change', this.changeEmail);
		email.appendChild(mail);

		const password = this.ownerDocument.createElement('div');
		password.innerText = 'Password';
		this.shadowRoot?.appendChild(password);

		const enterPassword = this.ownerDocument.createElement('input');
		enterPassword.placeholder = 'At least 8 characters';
		enterPassword.addEventListener('change', this.changePassword);
		password.appendChild(enterPassword);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Log In';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);

		const privacy = this.ownerDocument.createElement('p');
		privacy.innerHTML = 'By creating an account, you agree to the Raw Terms of Service and Privacy Policy';
		this.shadowRoot?.appendChild(privacy);

		const signUp = this.ownerDocument.createElement('div');
		this.shadowRoot?.appendChild(signUp);

		const newAccount = this.ownerDocument.createElement('p');
		newAccount.innerText = "Don't have an account";
		signUp.appendChild(newAccount);

		const signUpButton = this.ownerDocument.createElement('button');
		signUpButton.innerText = 'Sign Up';
		signUp.appendChild(signUpButton); //conectar al dashboard
	}
}

customElements.define('login-screen', LoginScreen);
export default LoginScreen;
