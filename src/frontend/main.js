const { showAccountState } = require('./logic/accountStateCalc');
const {
    addCostOrIncomeOnClick,
    cashFlowManagerOnCategoryChange,
} = require('./logic/cashFlowManagerCalc');
const {
    filtererOnClick,
    filtererOnCategoryChange,
} = require('./logic/filtererCalc');

window.showAccountState = showAccountState;
window.addCostOrIncomeOnClick = addCostOrIncomeOnClick;
window.cashFlowManagerOnCategoryChange = cashFlowManagerOnCategoryChange;
window.filtererOnClick = filtererOnClick;
window.filtererOnCategoryChange = filtererOnCategoryChange;
