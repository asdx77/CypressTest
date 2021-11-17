/// <reference types ="cypress" />
/// <reference types="cypress-xpath" />


var bookSection ='//*[@id="app"]/div/div/div[2]/div/div[6]'
var BookStoreText  = '#app > div > div > div.pattern-backgound.playgound-header > div' 


it('open page',function(){


    cy.visit('https://demoqa.com/');
    cy.scrollTo('bottom');
    cy.xpath(bookSection).click();
    cy.get(BookStoreText).should('have.text', 'Book Store')
   

})

var resultText = '//*[@id="rso"]/div[1]/div/div[1]/div/div/div/div[1]/a/h3';


it('text',function(){

    cy.visit("https://google.com/");
    cy.get('.gLFyf').type("food wiki");
    cy.get('.gLFyf').type("{enter}");
    cy.xpath(resultText).should('have.text', 'Food - Wikipedia');

})

