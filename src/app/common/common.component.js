"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CommonComponent = (function () {
    function CommonComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    CommonComponent.prototype.isSignin = function () {
        return this.loginService.isSignin();
    };
    CommonComponent.prototype.listEmployee = function () {
        return this.router.navigate(['/employees']);
    };
    CommonComponent.prototype.registerAccounts = function () {
        return this.router.navigate(['/accounts']);
    };
    CommonComponent = __decorate([
        core_1.Component({
            selector: 'common',
            templateUrl: './common.component.html',
            styleUrls: ['./common.component.css']
        })
    ], CommonComponent);
    return CommonComponent;
}());
exports.CommonComponent = CommonComponent;
//# sourceMappingURL=common.component.js.map