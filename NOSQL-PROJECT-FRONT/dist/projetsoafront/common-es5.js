(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/demo/services/cadres-admin.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo/services/cadres-admin.service.ts ***!
  \*******************************************************/
/*! exports provided: CadresAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadresAdminService", function() { return CadresAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CadresAdminService = /** @class */ (function () {
    function CadresAdminService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceCadresAdmin + "/cadreAdmins";
    }
    CadresAdminService.prototype.getAllCadreAdmins = function () {
        return this.httpClient.get(this.url);
    };
    CadresAdminService.prototype.getCadreAdminById = function (cadreAdminId) {
        return this.httpClient.get(this.url + '/' + cadreAdminId);
    };
    CadresAdminService.prototype.ajouteCadreAdmin = function (cadreAdmin) {
        return this.httpClient.post(this.url, cadreAdmin);
    };
    CadresAdminService.prototype.deleteCadreAdmin = function (id) {
        return this.httpClient.delete(this.url + '/' + id);
    };
    CadresAdminService.prototype.countAllCadresAdmins = function () {
        return this.httpClient.get(this.url + '/search/countAllCadreAdmins');
    };
    CadresAdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CadresAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CadresAdminService);
    return CadresAdminService;
}());



/***/ }),

/***/ "./src/app/demo/services/enseignant.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/services/enseignant.service.ts ***!
  \*****************************************************/
/*! exports provided: EnseignantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnseignantService", function() { return EnseignantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var EnseignantService = /** @class */ (function () {
    function EnseignantService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEnseignant + "/enseignants";
    }
    EnseignantService.prototype.getAllEnseignants = function () {
        return this.httpClient.get(this.url);
    };
    EnseignantService.prototype.getEnseignantById = function (enseignantId) {
        return this.httpClient.get(this.url + '/' + enseignantId);
    };
    EnseignantService.prototype.ajouteEnseignant = function (enseignant) {
        return this.httpClient.post(this.url, enseignant);
    };
    EnseignantService.prototype.deleteEnseignant = function (id) {
        return this.httpClient.delete(this.url + '/' + id);
    };
    EnseignantService.prototype.getClasses = function (idEnseignant) {
        return this.httpClient.get(this.url + "/" + idEnseignant + "/enseignantIdClasses");
    };
    EnseignantService.prototype.countAllEnseignants = function () {
        return this.httpClient.get(this.url + "/search/countAllEnseignant");
    };
    EnseignantService.prototype.deleteClass = function (idEnseignant, idClass) {
        return this.httpClient.delete(this.url + '/' + idEnseignant + '/enseignantIdClasses/' + idClass);
    };
    EnseignantService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EnseignantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnseignantService);
    return EnseignantService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map