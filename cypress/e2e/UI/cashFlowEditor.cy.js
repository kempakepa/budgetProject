const { HomePageObject } = require('../../POP/homePageObject');

describe('cashFlowEditor tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
    });

    it('should edit option should be visible and enable next in filterer list', () => {});

    it('should edit form be fill by saved values', () => {});

    it('should be possible to edit cost or income value', () => {});

    it('should account state be updated when user change cost or income value', () => {});
});
