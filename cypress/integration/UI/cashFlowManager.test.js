const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');
const {
    generateFakeTextData,
    generateFakeDatatypeData,
    generateFakeNumeicData,
} = require('../../utils/testDataProvider');

describe('cashFlowManager tests', () => {
    it('should add Cost if valid input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.costAddedConfirmationMessage
            );
    });

    it('should not add Cost if invalid empty title input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: '{backspace}',
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getTitle().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty comment input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: '{backspace}',
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getComment().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty date input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: '{selectAll}{del}',
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getDate().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: '{backspace}',
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getAmount().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty category input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: '{backspace}',
        });
        CashFlowManagerObject.getCategory().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if negative amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: -100,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if 0 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: 0,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });
    it('should not add Cost if -0.01 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: -0.01,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should add Cost if 0.01 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: 0.01,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.costAddedConfirmationMessage
            );
    });

    it('should add Income if valid input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
    });

    it('should not add Income if invalid empty title input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: '{backspace}',
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getTitle().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty comment input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: '{backspace}',
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getComment().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty date input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: '{selectAll}{del}',
            amount: generateFakeNumeicData(),
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getDate().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: '{backspace}',
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getAmount().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty category input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: generateFakeNumeicData(),
            category: '{backspace}',
        });
        CashFlowManagerObject.getCategory().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        cy.get('input:invalid').should('have.length', 1);
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if negative amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: -100,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if 0 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: 0,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });
    it('should not add Income if -0.01 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: -0.01,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should add Income if 0.01 amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: generateFakeTextData(),
            comment: generateFakeTextData(),
            date: generateFakeDatatypeData(),
            amount: 0.01,
            category: generateFakeTextData(),
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
    });
});
