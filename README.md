# cypress-typescript-template
Cypress TypeScript Github Template

## Overview

This template is to be used as a starting point when creating a new automation test framework in TypeScript using Cypress.io

The project has a couple of examples tests which targets http://demoqa.com/

## Structure

The template uses the following structure and dependencies as a starting point:

Everything Cypress related sits under the Cypress directory. 

Tests -> e2e/tests folder 

Plugins -> The template uses the `cy-ts-preprocessor.js` for TypeScript compiling. 

esLint - The template utilises esLint to format and lint the code.

## Scripts 

The template utilises the following scripts:

``npm run format`` - This script formats your code using Prettier

``npm run lint:code`` - This carries out a lint using esLint

``npm run cypress:run`` - This runs your Cypress tests in a headless state.

``npm run cypress:open`` - This opens the Cypress GUI so you can select tests to run.
