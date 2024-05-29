import menuPhoneStyles from './menuPhone.css';
import searchMenuIcon from '../../assets/icon-search-menu.png';
import notificationMenuIcon from '../../assets/icon-notifications-menu.png';
import homeMenuIcon from '../../assets/icon-home-menu.png';
import profileMenuIcon from '../../assets/icon-profile-menu.png';

//Este componente estático. No nos vamos a guiar de la estructura de los principales

class MenuPhoneBar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>${menuPhoneStyles}</style>
              <nav class="menuphone-bar">
                  <div class="icons-menu">
                    <img class= "icons-menu img" src="${searchMenuIcon}" alt="search">
                    <img class= "icons-menu img" src="${notificationMenuIcon}" alt="notification">
                    <img class= "icons-menu img" src="${homeMenuIcon}" alt="home">
                    <img class= "icons-menu img" src="${profileMenuIcon}" alt="profile">
                  </div>

              </nav>
          `;
		}
	}
}

customElements.define('menu-phone', MenuPhoneBar);
export default MenuPhoneBar;
