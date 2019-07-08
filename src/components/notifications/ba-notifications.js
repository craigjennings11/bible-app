import './ba-notification.js';
import { css, html, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import base from '../../styles/base.js';

class BibleAppNotifications extends LitElement {
  static get is() { return 'ba-notifications'; }

  static get properties() {
    return {
      notifications: { type: Array },
    };
  }

  static get styles() {
    return [
      base,

      css`
        :host {
          bottom: 1rem;
          left: 1.5rem;
          position: fixed;
          right: 1.5rem;
          z-index: 100;
        }

        div {
          height: 100%;
        }

        @media screen and (min-width: 768px) {
          :host {
            left: 2rem;
            right: unset;
            width: 300px;
          }
        }
      `,
    ];
  }

  render() {
    const notifications = repeat(
      this.notifications,
      n => n.key,
      n => html`<ba-notification class="mb-1" .notification=${n}></ba-notification>`,
    );

    return html`
      <div class="d-flex flex-column justify-end">
        ${notifications}
      </div>
    `;
  }
}

customElements.define(BibleAppNotifications.is, BibleAppNotifications);

export default BibleAppNotifications;