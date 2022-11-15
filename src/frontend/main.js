const { showAccountState } = require('./logic/accountStateCalc');
const {
    addCostOrIncomeOnClick,
    cashFlowManagerOnCategoryChange,
} = require('./logic/cashFlowManagerCalc');
const {
    filtererOnClick,
    filtererOnCategoryChange,
} = require('./logic/filtererCalc');
const {
    cashFlowEditorOnLoad,
    cashFlowEditorOnEdit,
} = require('./logic/cashFlowEditor');

window.showAccountState = showAccountState;
window.addCostOrIncomeOnClick = addCostOrIncomeOnClick;
window.cashFlowManagerOnCategoryChange = cashFlowManagerOnCategoryChange;
window.filtererOnClick = filtererOnClick;
window.filtererOnCategoryChange = filtererOnCategoryChange;
window.cashFlowEditorOnLoad = cashFlowEditorOnLoad;
window.cashFlowEditorOnEdit = cashFlowEditorOnEdit;
