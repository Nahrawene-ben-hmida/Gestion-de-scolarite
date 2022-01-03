(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-gestion-scolarite-gestion-scolarite-module"],{

/***/ "./src/app/demo/gestion-scolarite/gestion-scolarite-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/gestion-scolarite-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: GestionScolariteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionScolariteRoutingModule", function() { return GestionScolariteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [{
        path: '',
        children: [
            {
                path: 'session',
                loadChildren: () => Promise.all(/*! import() | session-session-module */[__webpack_require__.e("default~class-class-module~demo-cadres-admin-cadres-admin-module~demo-enseignant-enseignant-module~d~8630d238"), __webpack_require__.e("default~demo-etudiant-etudiant-module~session-session-module"), __webpack_require__.e("session-session-module")]).then(__webpack_require__.bind(null, /*! ./session/session.module */ "./src/app/demo/gestion-scolarite/session/session.module.ts")).then(m => m.SessionModule)
            },
            {
                path: 'section',
                loadChildren: () => Promise.all(/*! import() | section-section-module */[__webpack_require__.e("default~class-class-module~demo-cadres-admin-cadres-admin-module~demo-enseignant-enseignant-module~d~8630d238"), __webpack_require__.e("section-section-module")]).then(__webpack_require__.bind(null, /*! ./section/section.module */ "./src/app/demo/gestion-scolarite/section/section.module.ts")).then(m => m.SectionModule)
            },
            {
                path: 'matiere',
                loadChildren: () => Promise.all(/*! import() | matiere-matiere-module */[__webpack_require__.e("default~class-class-module~demo-cadres-admin-cadres-admin-module~demo-enseignant-enseignant-module~d~8630d238"), __webpack_require__.e("matiere-matiere-module")]).then(__webpack_require__.bind(null, /*! ./matiere/matiere.module */ "./src/app/demo/gestion-scolarite/matiere/matiere.module.ts")).then(m => m.MatiereModule)
            },
            {
                path: 'class',
                loadChildren: () => Promise.all(/*! import() | class-class-module */[__webpack_require__.e("default~class-class-module~demo-cadres-admin-cadres-admin-module~demo-enseignant-enseignant-module~d~8630d238"), __webpack_require__.e("class-class-module")]).then(__webpack_require__.bind(null, /*! ./class/class.module */ "./src/app/demo/gestion-scolarite/class/class.module.ts")).then(m => m.ClassModule)
            }
        ]
    }
];
let GestionScolariteRoutingModule = class GestionScolariteRoutingModule {
};
GestionScolariteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GestionScolariteRoutingModule);



/***/ }),

/***/ "./src/app/demo/gestion-scolarite/gestion-scolarite.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/gestion-scolarite.module.ts ***!
  \********************************************************************/
/*! exports provided: GestionScolariteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionScolariteModule", function() { return GestionScolariteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gestion_scolarite_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestion-scolarite-routing.module */ "./src/app/demo/gestion-scolarite/gestion-scolarite-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





let GestionScolariteModule = class GestionScolariteModule {
};
GestionScolariteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gestion_scolarite_routing_module__WEBPACK_IMPORTED_MODULE_3__["GestionScolariteRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], GestionScolariteModule);



/***/ })

}]);
//# sourceMappingURL=demo-gestion-scolarite-gestion-scolarite-module-es2015.js.map