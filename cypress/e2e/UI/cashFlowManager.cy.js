const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('cashFlowManager tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
    });

    it('should add Cost if 0.01 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject('amount', 0.01)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.costAddedConfirmationMessage
            );
    });

    it('should add Income if 0.01 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject('amount', 0.01)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
    });

    it('should add Cost if valid input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject()
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.costAddedConfirmationMessage
            );
    });

    it('should add Income if valid input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject()
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
    });

    it('should not add Cost if invalid empty title input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject(
                'title',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getTitle().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('title').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty title input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject(
                'title',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getTitle().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('title').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty comment input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject(
                'comment',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getComment().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('comment').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty comment input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject(
                'comment',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getComment().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('comment').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty date input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject('date', '{selectAll}{del}')
        );
        CashFlowManagerObject.getDate().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('date').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty date input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject('date', '{selectAll}{del}')
        );
        CashFlowManagerObject.getDate().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('date').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject(
                'amount',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getAmount().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('amount').should;
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject(
                'amount',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getAmount().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('amount').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if invalid empty category input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject(
                'category',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getCategory().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('category').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if invalid empty category input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject(
                'category',
                '{selectAll}{del}'
            )
        );
        CashFlowManagerObject.getCategory().then(($input) => {
            expect($input[0].validationMessage).to.eq(
                CashFlowManagerObject.HTMLValidationErrorMessage
            );
        });
        CashFlowManagerObject.getInvalidElement('category').should(
            'have.length',
            1
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if negative amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject('amount', -100)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if negative amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject('amount', -100)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if 0 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject('amount', 0)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if 0 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject('amount', 0)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Cost if -0.01 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'cost',
            TestDataProvider.customizeReqParamObject('amount', -0.01)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });

    it('should not add Income if -0.01 amount input', () => {
        CashFlowManagerObject.addCostOrIncome(
            'income',
            TestDataProvider.customizeReqParamObject('amount', -0.01)
        );
        CashFlowManagerObject.getSubmitionMessage()
            .invoke('text')
            .should(
                'equal',
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
    });
});