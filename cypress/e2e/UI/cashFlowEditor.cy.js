const { HomePageObject } = require('../../POP/homePageObject');
const { FiltererObject } = require('../../POP/filtererObject');
const { TestDataProvider } = require('../../utils/testDataProvider');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');

describe('cashFlowEditor tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
    });

    it('should edit option should be visible and enable next in filterer list', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        //When
        FiltererObject.clickSend();

        //Then
        cy.get('#showlist')
            .find('li')
            .eq(0)
            .find('[data-cy="edit-link"]')
            .should('exist');
    });

    it('should edit form be fill by saved values', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        FiltererObject.clickSend();

        //When
        cy.get('#showlist')
            .find('li')
            .contains(requestBody.title)
            .find('[data-cy="edit-link"]')
            .click();

        //Then
        cy.get('[data-cy="title"]').should('have.value', requestBody.title);
        cy.get('[data-cy="comment"]').should('have.value', requestBody.comment);
        cy.get('[data-cy="date"]').should('have.value', requestBody.date);
        cy.get('[data-cy="amount"]').should('have.value', requestBody.amount);
        cy.get('[data-cy="category"]').should(
            'have.value',
            requestBody.category.toLowerCase()
        );
        //TODO: check cash item type
        //cy.get('[data-cy="cash-flow-type"]').should('have.value', 'COST');
    });

    it.skip('should be possible to edit cost or income value', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        FiltererObject.clickSend();
        cy.get('#showlist')
            .find('li')
            .eq(0)
            .find('[data-cy="edit-link"]')
            .click();

        //When
        const newCostData = TestDataProvider.createReqParamObject();
        cy.get('[data-cy="title"]').type(newCostData.title);
        cy.get('[data-cy="comment"]').type(newCostData.comment);
        cy.get('[data-cy="date"]').type(newCostData.date);
        cy.get('[data-cy="amount"]').type(newCostData.amount);
        cy.get('[data-cy="title"]').type(newCostData.category);
        cy.get('[data-cy="category"]').type(newCostData.title);
        cy.get('[data-cy="cash-flow-type"]').type('INCOME');
        cy.get('[data-cy="update-button"').click();

        //Then
        cy.get('[data-cy="filterer-header"]').should('be.visible');
        //TODO: na liśćie jest wiersz ze zmodyfikowanymi danymi
    });

    it.skip('should account state be updated when user change cost or income value', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        //TODO: check account state
        //TODO: click send
        //TODO: click edit
        //When
        //TODO: edit cash flow type and amount
        //TODO: go to account state
        //Then
        //TODO: assert account state
    });
});
