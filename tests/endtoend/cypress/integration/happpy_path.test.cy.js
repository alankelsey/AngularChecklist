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
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        //  cy.get('body > div > div > div:nth-child(1) > ul li')
        // .its('length').as('startLength');
        cy.get('body > div > div > div:nth-child(1) > ul li').as('elementToMeasure')
        cy.get('@elementToMeasure').its('length');
        // cy.debug();
        cy.get('@elementToMeasure')
            .then($elementToMeasure => {
                const startLength = $elementToMeasure.length;
                expect($elementToMeasure.length).to.be.gt(0)
                // return startLength;
                cy.log(startLength);

            });
            cy.log(startLength);
            // cy.debug();
        // cy.get('@startLength').its('length');

        cy.get('body > div > div > div:nth-child(1) > ul > li:nth-child(1) > button')
        .click();

        // const endLength = cy.get('@elementToMeasure').its('length').invoke('valueOf');
        // cy.debug();
        // cy.get('body > div > div > div:nth-child(1) > ul li')
        // .should('be.lt', startLength);

        // cy.get('body > div > div > div:nth-child(1) > ul li')
        // .should('have.length', startLength).debug();
    });
});

// describe('completed Text', () => {
//     it('contains the correct text', () => {
//         cy.visit('https://alankelsey.github.io/AngularChecklist/');

//         cy.get('body > div > div > div:nth-child(2) > div')
//         .invoke('text')
//         .should('equal', 'Nothing done yet.')
//     });
// });
