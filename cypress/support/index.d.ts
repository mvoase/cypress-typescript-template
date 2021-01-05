/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    /**Auto fill text fields instead of typing text in - Good for lengthy characters **/
    fill(text: string): Chainable<any>;
    /** Emulates the viewport of a particular mobile device **/
    emulate(deviceName: string, orientation?: string): Chainable<any>;
    /** Add force click function to remove options **/
    forceClick(): Chainable<any>;
    /**
     * Validates snapshot image from snapshot directory against snapshot taken from current test
     * */
    matchImageSnapshot(options?: any);
  }
}
