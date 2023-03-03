describe('Heading Text', () => {
    it('contains the correct title', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('h1')
        .invoke('text')
        .should('equal', 'Sample Angular Checklist')
    });
});

describe('ToDo Text', () => {
    it('contains the correct text', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(1) > h2')
        .invoke('text')
        .should('equal', 'To Do:')
    });
});

describe('completed Text', () => {
    it('contains the correct text', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(2) > h2')
        .invoke('text')
        .should('equal', 'Completed:')
    });
});

describe('To Do list pre is poluated', () => {
    it('list contains items', () => {
        cy.visit('https://alankelsey.github.io/AngularChecklist/');

        cy.get('body > div > div > div:nth-child(1) > ul')
        .its('length')
        .should('be.gt', 0)
    });
});