"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var account_1 = require('./account');
require('rxjs/add/operator/toPromise');
var AccountsService = (function () {
    function AccountsService() {
    }
    AccountsService.prototype.getAccounts = function () {
        this.accounts = [
            { accountId: 101, name: 'user1' },
            { accountId: 102, name: 'admin1' },
            { accountId: 103, name: 'engineer1' }
        ];
        return this.accounts;
    };
    AccountsService.prototype.registerAccount = function (accountId, name) {
        var account = new account_1.Account();
        account.accountId = accountId;
        account.name = name;
        this.accounts.push(account);
        return this.accounts;
    };
    AccountsService = __decorate([
        core_1.Injectable()
    ], AccountsService);
    return AccountsService;
}());
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map