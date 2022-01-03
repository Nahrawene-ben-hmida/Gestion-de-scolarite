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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let CadresAdminService = class CadresAdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceCadresAdmin + "/cadreAdmins";
    }
    getAllCadreAdmins() {
        return this.httpClient.get(this.url);
    }
    getCadreAdminById(cadreAdminId) {
        return this.httpClient.get(this.url + '/' + cadreAdminId);
    }
    ajouteCadreAdmin(cadreAdmin) {
        return this.httpClient.post(this.url, cadreAdmin);
    }
    deleteCadreAdmin(id) {
        return this.httpClient.delete(this.url + '/' + id);
    }
    countAllCadresAdmins() {
        return this.httpClient.get(this.url + '/search/countAllCadreAdmins');
    }
};
CadresAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CadresAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CadresAdminService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let EnseignantService = class EnseignantService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEnseignant + "/enseignants";
    }
    getAllEnseignants() {
        return this.httpClient.get(this.url);
    }
    getEnseignantById(enseignantId) {
        return this.httpClient.get(this.url + '/' + enseignantId);
    }
    ajouteEnseignant(enseignant) {
        return this.httpClient.post(this.url, enseignant);
    }
    deleteEnseignant(id) {
        return this.httpClient.delete(this.url + '/' + id);
    }
    getClasses(idEnseignant) {
        return this.httpClient.get(this.url + "/" + idEnseignant + "/enseignantIdClasses");
    }
    countAllEnseignants() {
        return this.httpClient.get(this.url + "/search/countAllEnseignant");
    }
    deleteClass(idEnseignant, idClass) {
        return this.httpClient.delete(this.url + '/' + idEnseignant + '/enseignantIdClasses/' + idClass);
    }
};
EnseignantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnseignantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EnseignantService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map