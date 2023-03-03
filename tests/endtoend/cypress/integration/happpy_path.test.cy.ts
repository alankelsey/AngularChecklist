const { start } = require("repl");

describe('Validate list states', () => {
    it('To Do list has items', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(1) > ul')
        .its('length')
        .should('be.gt', 0)

        // cy.get('body > div > div > div:nth-child(2) > div')
        // .invoke('text')
        // .should('equal', 'Nothing done yet.')
    });

    it('contains the correct text', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(2) > div')
        .invoke('text')
        .should('equal', 'Nothing done yet.')
    });
});

describe('Happy path workflow', () => {
    it('Mark task done on todo list', () => {
        this.startLength;
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        //  cy.get('body > div > div > div:nth-child(1) > ul li')
        // .its('length').as('startLength');
        cy.get('body > div > div > div:nth-child(1) > ul li').as('elementToMeasure')
        cy.get('@elementToMeasure').its('length');
        cy.get('@elementToMeasure')
            .then($elementToMeasure => {
               this.startLength = $elementToMeasure.length;
                expect($elementToMeasure.length).to.be.gt(0)
                // return startLength;
                cy.log('startLength');

            });

        cy.get('body > div > div > div:nth-child(1) > ul > li:nth-child(1) > button')
        .click();

        cy.get('@elementToMeasure')
            .then($elementToMeasure => {
                expect($elementToMeasure.length).to.be.lt(this.startLength)
                cy.log('startLength');

            });

    });
});

describe('completed Text', () => {
    it('contains the correct text', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(2) > div')
        .invoke('text')
        .should('equal', 'Nothing done yet.')
    });
});
