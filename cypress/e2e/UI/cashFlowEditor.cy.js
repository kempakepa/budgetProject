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
        cy.get('[data-cy="cost"]').should('be.checked');
    });

    it('should be possible to edit cost or income value', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        FiltererObject.clickSend();
        cy.get('#showlist')
            .find('li')
            .contains(requestBody.title)
            .find('[data-cy="edit-link"]')
            .click();

        //When
        const newCostData = TestDataProvider.createReqParamObject();
        cy.get('[data-cy="title"]').clear().type(newCostData.title);
        cy.get('[data-cy="comment"]').clear().type(newCostData.comment);
        cy.get('[data-cy="date"]').clear().type(newCostData.date);
        cy.get('[data-cy="amount"]').clear().type(newCostData.amount);
        cy.get('[data-cy="category"]').type(newCostData.category);
        cy.get('[data-cy="income"]').click();
        cy.get('[data-cy="update-button"]').click();

        //Then
        FiltererObject.clickSend();
        const cashItemRow = FiltererObject.getRow(newCostData.title);
        cashItemRow.should('contain.text', newCostData.comment);
        cashItemRow.should('contain.text', newCostData.date);
        cashItemRow.should('contain.text', newCostData.amount);
        cashItemRow.should('contain.text', newCostData.category.toLowerCase());
    });
});
