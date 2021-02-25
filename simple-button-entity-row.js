class SimpleButtonEntityRow extends Polymer.Element {

  static get template() {

    return Polymer.html`
        <style>
        .simple-button-entity-row-icon {
            position: relative;
            display: inline-block;
            width: 40px;
            color: var(--paper-item-icon-color, #44739e);
            border-radius: 50%;
            height: 40px;
            text-align: center;
            background-size: cover;
            line-height: 40px;
            vertical-align: middle;
            box-sizing: border-box;
        }
        .simple-button-entity-row-td {
            padding: 0;
        }
        </style>

        <table cellspacing="0">
        <tr>
        <td class="simple-button-entity-row-td">
            <span class="simple-button-entity-row-icon">
                <ha-icon icon="[[icon]]"></ha-icon>
            </span>
        </td>

        <td class="simple-button-entity-row-td" style="width:100%;">
            <span class="my-class" style="margin-left: 16px;">[[name]]</span>
        </td>

        <td class="simple-button-entity-row-td">
            <input type="button" style="cursor: pointer;" value="[[buttonText]]" on-click='clickHandler'/>
        </td>
        </tr>
        </table>
    `;
  }

  setConfig(config) {
    this._config = config;

    if ('icon' in config) {
        this.icon = config.icon;
    } else {
        this.icon = 'mdi:no-such-icon';
    }

    if ('name' in config) {
        this.name = config.name;
    } else {
        this.name = '';
    }

    if ('button_text' in config) {
        this.buttonText = config.button_text;
    } else {
        this.buttonText = 'Action';
    }
  }

  set hass(hass) {
    this._hass = hass;
  }

  clickHandler(e) {
    const service = this._config.tap_action.service.split(".")
    this._hass.callService(service[0], service[1], this._config.tap_action.service_data);
  }

}

customElements.define('simple-button-entity-row', SimpleButtonEntityRow);
