# budgetProject

Projekt ma na celu stworzenie prostej aplikacji do zarzadzania budzetem domowym

## Funkcjonalanosci

-   dodawanie kosztu/wplywu wg szablonu
    -   tytul
    -   komentarz
    -   data
    -   kwota
    -   kategoria
-   pobranie aktualnego stanu konta
-   listowanie wydatkow/wplywow wg kryteriow:
    -   kategoria
    -   data
    -   kwota
    -   tytul (optional)

## Moduly i ich zaleznosci

```mermaid
sequenceDiagram
    User->>cashFlowManager: addCost
    User->>cashFlowManager: addIncome
    User->>AccountState: getAccountState
    cashFlowManager->>AccountState: changeAccountState
    User->>cashFlowManager: listCostAndIncome
    cashFlowManager->>Filterer: filterCostAndIncome
    User->>FiltererBalancer: getFinanceBalance
```
