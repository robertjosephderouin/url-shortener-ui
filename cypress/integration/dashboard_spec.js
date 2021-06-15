describe('Dashboard', () => {
  
    beforeEach(() => {
        const baseURL = 'http://localhost:3001/api/v1/urls';
      cy.intercept('GET', `${baseURL}`, {
        urls: [{
                id: 1,
                long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                short_url: 'http://localhost:3001/useshorturl/1',
                title: 'Awesome photo'
              }  
            ]
        })
    });

    it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
  
      cy.visit('http://localhost:3000/')
        cy.get('h3').contains('Awesome photo')
    });


    it('When a user visits the page, they can view the Form with the proper inputs', () => {
  
        cy.visit('http://localhost:3000/')
            cy.get('[placeholder="Title..."]').should('have.value', '')
            cy.get('[placeholder="URL to Shorten..."]').should('have.value', '')
            cy.get('button').contains('Shorten Please!')
      });

    
    it('When a user fills out the form, the information is reflected in the input fields', () => {

    cy.visit('http://localhost:3000/')
        cy.get('[placeholder="Title..."]').should('have.value', '')
        cy.get('[placeholder="URL to Shorten..."]').should('have.value', '')
        cy.get('[placeholder="Title..."]').type('Sample Title')
        cy.get('[placeholder="Title..."]').should('have.value', 'Sample Title')
        cy.get('[placeholder="URL to Shorten..."]').type('Sample URL')
        cy.get('[placeholder="URL to Shorten..."]').should('have.value', 'Sample URL')
  });
  
});
