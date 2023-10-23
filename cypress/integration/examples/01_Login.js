// compiler about the types (type definitions) for a specific library or package
// In this case, it's indicating that the TypeScript compiler should consider the types for the "Cypress" library.
/// <reference types = "Cypress"/>



it('Login',function()
{
    //Cy is object of cypress. It is a like gateway to all cypress commands
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //Locators on the basis of Input or name
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    //Locators on the basis of button
    cy.get('button[type="submit"]').click();

    //assertions
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

}
)

// before(() => {
//     cy.loginEnvironment();
//   });
  


