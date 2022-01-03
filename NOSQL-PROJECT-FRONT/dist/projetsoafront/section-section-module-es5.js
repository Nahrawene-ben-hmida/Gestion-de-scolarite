(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-section-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/gestion-scolarite/section/section.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/gestion-scolarite/section/section.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-snackbar [type]=\"type\" [message]=\"message\" [show]=\"show\"></app-snackbar>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-card cardTitle=\"Section\" [options]=\"false\">\n            <div class=\"row\">\n                <div >\n                    <h5 class=\"mt-3\">Ajouter une Section</h5>\n                    <form [formGroup]=\"section\" (ngSubmit)=\"onSubmit()\"  >\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Section</span>\n                            </div>\n                            <input formControlName=\"section\" name=\"section\" type=\"text\" class=\"form-control\" placeholder=\"Produit Designation\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.section.errors }\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Ajouter</button>\n                            </div>\n                        </div>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Matiere</span>\n                            </div>\n                            <select formControlName=\"idMatieres\"  class=\"custom-select form-control\" id=\"inputGroupSelect04\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" multiple [ngClass]=\"{'is-invalid': submitted && f.idMatieres.errors }\">\n                                <option selected value=\"\" >Choose...</option>\n                                <option *ngFor=\"let matiere of matieres\" value=\"{{matiere.id}}\">{{matiere.matiere}}</option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>\n<div>\n    <mat-form-field>\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"Section\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Section </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.section}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Matieres\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Matieres </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    {{row.matieres}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Modifier\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button (click)=\"modifier(row.id)\" class=\"btn btn-secondary\">Modifier</button>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n            </tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/demo/gestion-scolarite/section/section-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/section/section-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionRoutingModule", function() { return SectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.component */ "./src/app/demo/gestion-scolarite/section/section.component.ts");




var routes = [{
        path: '',
        component: _section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"]
    }];
var SectionRoutingModule = /** @class */ (function () {
    function SectionRoutingModule() {
    }
    SectionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SectionRoutingModule);
    return SectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/gestion-scolarite/section/section.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/section/section.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZ2VzdGlvbi1zY29sYXJpdGUvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/gestion-scolarite/section/section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/section/section.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/demo/services/section.service.ts");
/* harmony import */ var _services_matiere_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/matiere.service */ "./src/app/demo/services/matiere.service.ts");








var SectionComponent = /** @class */ (function () {
    function SectionComponent(sectionService, formBuilder, matiereService) {
        this.sectionService = sectionService;
        this.formBuilder = formBuilder;
        this.matiereService = matiereService;
        this.submitted = false;
        this.show = false;
        this.displayedColumns = ['id', 'Section', 'Matieres', 'Modifier'];
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matiereService.getAllMatieres().subscribe(function (matieres) {
            _this.matieres = matieres._embedded.matieres;
        });
        this.section = this.formBuilder.group({
            section: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idMatieres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SectionComponent.prototype.ngAfterViewInit = function () {
        this.setSections();
    };
    SectionComponent.prototype.setSections = function () {
        var _this = this;
        this.sectionService.getAllSections().subscribe(function (sections) {
            var e_1, _a;
            _this.sections = sections._embedded.sections;
            var _loop_1 = function (sec) {
                _this.matiereService.getMatiereBySectionId(sec.id).subscribe(function (mats) {
                    var e_2, _a;
                    var matis;
                    matis = mats;
                    var strMatieres = '';
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](matis._embedded.matieres), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var mat = _c.value;
                            strMatieres += mat.matiere + " ";
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    sec["matieres"] = strMatieres;
                });
            };
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.sections), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sec = _c.value;
                    _loop_1(sec);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.sections);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Object.defineProperty(SectionComponent.prototype, "f", {
        get: function () {
            return this.section.controls;
        },
        enumerable: true,
        configurable: true
    });
    SectionComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SectionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.section.invalid) {
            return;
        }
        this.sectionService.ajouteSection(this.section.value).subscribe(function (section) {
            _this.section.value.idMatieres.forEach(function (idMatiere) {
                _this.sectionService.ajouteMatiere(section.id, idMatiere).subscribe(function (sec) {
                    _this.setSections();
                    _this.submitted = false;
                    _this.section.reset();
                });
            });
        });
    };
    SectionComponent.prototype.modifier = function (id) {
        var _this = this;
        this.sectionService.getSectionById(id).subscribe(function (sec) {
            _this.sectionService.getMatieres(sec.id).subscribe(function (mat) {
                var e_3, _a;
                var matieres;
                matieres = mat;
                var index = 0;
                if (matieres._embedded.matieres.length == 0) {
                    _this.section = _this.formBuilder.group({
                        section: [sec.section, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        id: [sec.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        idMatieres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                }
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](matieres._embedded.matieres), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var matiere = _c.value;
                        _this.sectionService.deleteMatiere(sec.id, matiere.id).subscribe(function () {
                            index++;
                            if (index == matieres._embedded.matieres.length) {
                                _this.section = _this.formBuilder.group({
                                    section: [sec.section, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    id: [sec.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    idMatieres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                                });
                            }
                        });
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
        });
    };
    SectionComponent.ctorParameters = function () { return [
        { type: _services_section_service__WEBPACK_IMPORTED_MODULE_6__["SectionService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_matiere_service__WEBPACK_IMPORTED_MODULE_7__["MatiereService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], SectionComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], SectionComponent.prototype, "sort", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/gestion-scolarite/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/demo/gestion-scolarite/section/section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_6__["SectionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_matiere_service__WEBPACK_IMPORTED_MODULE_7__["MatiereService"]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/demo/gestion-scolarite/section/section.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/section/section.module.ts ***!
  \******************************************************************/
/*! exports provided: SectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionModule", function() { return SectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _section_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-routing.module */ "./src/app/demo/gestion-scolarite/section/section-routing.module.ts");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section.component */ "./src/app/demo/gestion-scolarite/section/section.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");













var SectionModule = /** @class */ (function () {
    function SectionModule() {
    }
    SectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_section_component__WEBPACK_IMPORTED_MODULE_4__["SectionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _section_routing_module__WEBPACK_IMPORTED_MODULE_3__["SectionRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            ]
        })
    ], SectionModule);
    return SectionModule;
}());



/***/ }),

/***/ "./src/app/demo/services/matiere.service.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/services/matiere.service.ts ***!
  \**************************************************/
/*! exports provided: MatiereService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereService", function() { return MatiereService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MatiereService = /** @class */ (function () {
    function MatiereService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/matieres";
        this.newHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/uri-list',
                'Accept': 'text/uri-list'
            })
        };
    }
    MatiereService.prototype.getAllMatieres = function () {
        return this.httpClient.get(this.url);
    };
    MatiereService.prototype.getMatiereById = function (matiereId) {
        return this.httpClient.get(this.url + '/' + matiereId);
    };
    MatiereService.prototype.ajouteMatiere = function (matiere) {
        return this.httpClient.post(this.url, matiere);
    };
    MatiereService.prototype.deleteMatiere = function (id) {
        return this.httpClient.delete(this.url + '/' + id);
    };
    //
    // test(){
    //   return this.httpClient.post("http://localhost:8081/sections/1/matiereSection","http://localhost:8081/matieres/4",this.newHeader)
    // }
    MatiereService.prototype.ajouteSection = function (idMatiere, idSection) {
        return this.httpClient.put(this.url + "/" + idMatiere + "/sections", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/sections/" + idSection, this.newHeader);
    };
    MatiereService.prototype.getMatiereBySectionId = function (idSection) {
        return this.httpClient.get(this.url + "/search/findAllBySectionsId?sectionId=" + idSection);
    };
    MatiereService.prototype.countAllMatieres = function () {
        return this.httpClient.get(this.url + '/search/countAllMatieres');
    };
    MatiereService.prototype.deleteSectionById = function (idSection, idMatiere) {
        return this.httpClient.delete(this.url + '/' + idMatiere + '/sections/' + idSection);
    };
    MatiereService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MatiereService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MatiereService);
    return MatiereService;
}());



/***/ }),

/***/ "./src/app/demo/services/section.service.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/services/section.service.ts ***!
  \**************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var SectionService = /** @class */ (function () {
    function SectionService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/sections";
        this.newHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/uri-list',
                'Accept': 'text/uri-list'
            })
        };
    }
    SectionService.prototype.getAllSections = function () {
        return this.httpClient.get(this.url);
    };
    SectionService.prototype.getSectionById = function (sectionId) {
        return this.httpClient.get(this.url + '/' + sectionId);
    };
    SectionService.prototype.ajouteSection = function (section) {
        return this.httpClient.post(this.url, section);
    };
    SectionService.prototype.deleteSection = function (id) {
        return this.httpClient.delete(this.url + '/' + id);
    };
    SectionService.prototype.ajouteMatiere = function (idSection, idMatiere) {
        return this.httpClient.put(this.url + "/" + idSection + "/matiereSection", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/matieres/" + idMatiere, this.newHeader);
    };
    SectionService.prototype.getMatieres = function (idSection) {
        return this.httpClient.get(this.url + "/" + idSection + "/matiereSection");
    };
    SectionService.prototype.countAllSections = function () {
        return this.httpClient.get(this.url + '/search/countAllSections');
    };
    SectionService.prototype.deleteMatiere = function (idSection, idMatiere) {
        return this.httpClient.delete(this.url + '/' + idSection + '/matiereSection/' + idMatiere);
    };
    SectionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SectionService);
    return SectionService;
}());



/***/ })

}]);
//# sourceMappingURL=section-section-module-es5.js.map