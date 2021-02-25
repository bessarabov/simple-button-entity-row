# simple-button-entity-row

This is a repo with Home Assistant custom ui card `simple-button-entity-row`.

This card is used inside `entities`. It can show icon, name and a button with some text.
Pressing the button makes the service call.

## Installation

There are several ways, you can add this card to your Home Assistant.

### Manual installation

 * Copy file `simple-button-entity-row.js` to `/config/www/simple-button-entity-row.js`
 * Check that you can see this file as http://hassio.local:8123/local/simple-button-entity-row.js (restart HA if you can't)
 * Add `/local/simple-button-entity-row.js` as `JavaScript Module` in HA config http://hassio.local:8123/config/lovelace/resources

### Installation with HACS

If you use HACS, you can install this card with HACS (but HACS is not required,
if you don't use HACS you can install this card using the steps described in the previous section)

To install this card with HACS just use the standart HACS way to install
cards from the custom GitHub repository.

## Configuration

When you have this card installed in your Home Assistant you can use it. Add to your
lovelace ui:

```yaml
- type: 'custom:simple-button-entity-row'
  icon: mdi:car
  name: My car
  button_text: Start engine
  tap_action:
    action: call-service
    service: system_log.write
    service_data:
      message: Starting engine
```

All the fields are optional, but without specifing `tap_action` there is no much sence in this card.

## Examples

```yaml
title: Home
views:
  - path: default_view
    title: Home
    badges: null
    cards:
      - type: entities
        entities:

          - type: 'custom:simple-button-entity-row'

          - type: 'custom:simple-button-entity-row'
            icon: mdi:brush

          - type: 'custom:simple-button-entity-row'
            icon: mdi:flower-outline
            name: Flower
            button_text: Water
            tap_action:
              action: call-service
              service: system_log.write
              service_data:
                message: Watering flower

          - type: 'custom:simple-button-entity-row'
            icon: mdi:car
            name: My car
            button_text: Start engine
            tap_action:
              action: call-service
              service: system_log.write
              service_data:
                message: Starting engine
```

![](https://upload.bessarabov.ru/bessarabov/JE07f9pSsy9nrqR5wJiEMgk1Pro.png)


