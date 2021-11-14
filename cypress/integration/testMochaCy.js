/// <reference types ="cypress" />

var bookSection = '#app > div > div > div.home-body > div > div:nth-child(6)'
var BookStoreText  = '#app > div > div > div.pattern-backgound.playgound-header > div' 


it('open page',function(){


    cy.visit('https://demoqa.com/');
    cy.scrollTo('bottom');
    cy.get(bookSection).trigger('click');
    cy.get(BookStoreText).should('have.text', 'Book Store')
   

})

var resultText = 'div.uMdZh:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)';



it('text',function(){


    cy.visit("https://google.com/");
    cy.get('.gLFyf').type("food");
    cy.get('.gLFyf').type("{enter}");
    cy.get(resultText).should('have.text', 'Harto’s fast food')


})

