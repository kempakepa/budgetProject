const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');

describe('cashFlowManager tests', () => {
    it('should add Cost if valid input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: '{backspace}',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '{selectAll}{del}',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: '{backspace}',
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
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

    it('should not add Cost if nagetive amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('cost', {
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: -100,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 0,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: -0.01,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 0.01,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: '{backspace}',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '{selectAll}{del}',
            amount: 100,
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: '{backspace}',
            category: 'Food',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
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

    it('should not add Income if nagetive amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCostOrIncome('income', {
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: -100,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 0,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: -0.01,
            category: 'category',
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
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 0.01,
            category: 'category',
        });
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
    });
});
