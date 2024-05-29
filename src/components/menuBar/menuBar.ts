import menuStyles from './menuBar.css';
import logoImg from '../../assets/logo.png';
import notificationsIcon from '../../assets/icon notifications.png';
import homeIcon from '../../assets/icon home.png';
import profileIcon from '../../assets/icon profile.png';

class MenuBar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>${menuStyles}</style>
              <nav class="menu-bar">
                  <div class="logo">
                  <img src="${logoImg}" alt="logo">
                  </div>
                  <div class="search-box">
                      <input type="text" class="search-box-input"  placeholder="Search...">
                  </div>
                  <div class="icons">
                    <img src="${notificationsIcon}" alt="Icono home">
                    <img src="${homeIcon}" alt="Icono home">
                    <img src="${profileIcon}" alt="Icono profile">
                  </div>

              </nav>
              <div class="line-separator"></div>
          `;
		}
	}
}

customElements.define('menu-bar', MenuBar);
export default MenuBar;
