// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import { deviceConfig } from '../helpers/devices';

Cypress.Commands.add(
  'fill',
  {
    prevSubject: 'element'
  },
  (subject, value) => {
    cy.wrap(subject).invoke('val', value).trigger('input').trigger('change');
  }
);

Cypress.Commands.add('emulate', (deviceName: string) => {
  const device = deviceConfig.devices[deviceName];
  console.log(`Viewport set to device: ${deviceName}`);
  return cy.viewport(device.width, device.height);
});

addMatchImageSnapshotCommand({
  failureThreshold: 0.0, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.3 }, // threshold for each pixel
  capture: 'viewport' // capture viewport in screenshot
});

Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).click({ force: true });
});

function unquote(str) {
  return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add('after', { prevSubject: 'element' }, subject => {
  const win = subject[0].ownerDocument.defaultView;
  const after = win?.getComputedStyle(subject[0], '::after' || ':after');
  return unquote(after?.getPropertyValue('content'));
});

Cypress.Commands.add('mockGeolocation', (latitude: number, longitude: number) => {
  cy.window().then(($window) =>  {
    cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
      return callback({ coords: { latitude, longitude } });
    });
  });
});
