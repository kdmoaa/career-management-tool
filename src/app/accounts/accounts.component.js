"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AccountsComponent = (function () {
    function AccountsComponent(accountsService, router) {
        this.accountsService = accountsService;
        this.router = router;
    }
    AccountsComponent.prototype.getAccounts = function () {
        this.accounts = this.accountsService.getAccounts();
    };
    AccountsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountsComponent.prototype.registerAccount = function (accountForm) {
        this.accounts = this.accountsService.registerAccount(accountForm.value.accountId, accountForm.value.name);
        return this.router.navigate(['/accounts']);
    };
    AccountsComponent = __decorate([
        core_1.Component({
            selector: 'app-accounts',
            templateUrl: './accounts.component.html',
            styleUrls: ['./accounts.component.css']
        })
    ], AccountsComponent);
    return AccountsComponent;
}());
exports.AccountsComponent = AccountsComponent;
//# sourceMappingURL=accounts.component.js.map