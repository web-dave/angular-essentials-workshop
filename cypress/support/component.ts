// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount, MountConfig } from 'cypress/angular';
import { Type } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      potato: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(MyComponent)

Cypress.Commands.add(
  'potato',
  (component: Type<unknown> | string, config: MountConfig<unknown> = {}) => {
    config.imports?.push(RouterTestingModule);
    config.providers?.push(
      { provide: ActivatedRoute, useValue: {} },
      { provide: Router, useValue: { navigate: (...args: any) => {} } }
    );

    return mount(component, {
      ...config,
      autoSpyOutputs: true,
    });
  }
);
