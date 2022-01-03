(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["class-class-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/gestion-scolarite/class/class.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/gestion-scolarite/class/class.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-snackbar [type]=\"type\" [message]=\"message\" [show]=\"show\"></app-snackbar>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-card cardTitle=\"Class\" [options]=\"false\">\n            <div class=\"row\">\n                <div >\n                    <h5 class=\"mt-3\">Ajouter un Class</h5>\n                    <form [formGroup]=\"class\" (ngSubmit)=\"onSubmit()\"  >\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Class</span>\n                            </div>\n                            <input formControlName=\"nom_class\" name=\"nom_class\" type=\"text\" class=\"form-control\" placeholder=\"Nom Class\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.nom_class.errors }\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Ajouter</button>\n                            </div>\n                        </div>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Section</span>\n                            </div>\n                            <select formControlName=\"idSection\"  class=\"custom-select form-control\" id=\"inputGroupSelect04\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.idSection.errors }\">\n                                <option selected value=\"\" >Choose...</option>\n                                <option *ngFor=\"let section of sections\" value=\"{{section.id}}\">{{section.section}}</option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>\n<div>\n    <mat-form-field>\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"Class\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom Class </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.nom_class}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Section\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Section </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    {{row.section}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Modifier\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button (click)=\"modifier(row.id)\" class=\"btn btn-secondary\">Modifier</button>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n            </tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/demo/gestion-scolarite/class/class-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/class/class-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ClassRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoutingModule", function() { return ClassRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.component */ "./src/app/demo/gestion-scolarite/class/class.component.ts");




var routes = [{
        path: '',
        component: _class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"]
    }];
var ClassRoutingModule = /** @class */ (function () {
    function ClassRoutingModule() {
    }
    ClassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClassRoutingModule);
    return ClassRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/gestion-scolarite/class/class.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/class/class.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZ2VzdGlvbi1zY29sYXJpdGUvY2xhc3MvY2xhc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/gestion-scolarite/class/class.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/class/class.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/demo/services/class.service.ts");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/demo/services/section.service.ts");








var ClassComponent = /** @class */ (function () {
    function ClassComponent(classService, formBuilder, sectionService) {
        this.classService = classService;
        this.formBuilder = formBuilder;
        this.sectionService = sectionService;
        this.submitted = false;
        this.show = false;
        this.displayedColumns = ['id', 'Class', 'Section', 'Modifier'];
    }
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionService.getAllSections().subscribe(function (sections) {
            _this.sections = sections._embedded.sections;
        });
        this.class = this.formBuilder.group({
            nom_class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idSection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ClassComponent.prototype.setClasses = function () {
        var _this = this;
        this.classService.getAllClasses().subscribe(function (classes) {
            var e_1, _a;
            console.log("classes", classes);
            _this.classes = classes._embedded.classes;
            var _loop_1 = function (cl) {
                _this.classService.getSection(cl.id).subscribe(function (section) {
                    var sec;
                    sec = section;
                    cl["section"] = sec.section;
                });
            };
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.classes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var cl = _c.value;
                    _loop_1(cl);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.classes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Object.defineProperty(ClassComponent.prototype, "f", {
        get: function () { return this.class.controls; },
        enumerable: true,
        configurable: true
    });
    ClassComponent.prototype.ngAfterViewInit = function () {
        this.setClasses();
    };
    ClassComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ClassComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.class.invalid) {
            return;
        }
        console.log(this.class.value);
        this.classService.ajouteClass(this.class.value).subscribe(function (cla) {
            _this.classService.ajouteSection(cla.id, _this.class.value.idSection).subscribe(function (c) {
                _this.setClasses();
                _this.submitted = false;
                _this.class.reset({
                    idSection: ""
                });
            });
        });
    };
    ClassComponent.prototype.modifier = function (id) {
        var _this = this;
        console.log(id);
        this.classService.getClassById(id).subscribe(function (cla) {
            _this.classService.getSection(id).subscribe(function (section) {
                var sec;
                sec = section;
                _this.class = _this.formBuilder.group({
                    nom_class: [cla.nom_class, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    idSection: [sec.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    id: [cla.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            });
        });
    };
    ClassComponent.ctorParameters = function () { return [
        { type: _services_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_section_service__WEBPACK_IMPORTED_MODULE_7__["SectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ClassComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ClassComponent.prototype, "sort", void 0);
    ClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class',
            template: __webpack_require__(/*! raw-loader!./class.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/gestion-scolarite/class/class.component.html"),
            styles: [__webpack_require__(/*! ./class.component.scss */ "./src/app/demo/gestion-scolarite/class/class.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_section_service__WEBPACK_IMPORTED_MODULE_7__["SectionService"]])
    ], ClassComponent);
    return ClassComponent;
}());



/***/ }),

/***/ "./src/app/demo/gestion-scolarite/class/class.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/gestion-scolarite/class/class.module.ts ***!
  \**************************************************************/
/*! exports provided: ClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassModule", function() { return ClassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _class_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-routing.module */ "./src/app/demo/gestion-scolarite/class/class-routing.module.ts");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class.component */ "./src/app/demo/gestion-scolarite/class/class.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");













var ClassModule = /** @class */ (function () {
    function ClassModule() {
    }
    ClassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_class_component__WEBPACK_IMPORTED_MODULE_4__["ClassComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _class_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClassRoutingModule"],
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
    ], ClassModule);
    return ClassModule;
}());



/***/ }),

/***/ "./src/app/demo/services/class.service.ts":
/*!************************************************!*\
  !*** ./src/app/demo/services/class.service.ts ***!
  \************************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ClassService = /** @class */ (function () {
    function ClassService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/classes";
        this.newHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/uri-list',
                'Accept': 'text/uri-list'
            })
        };
    }
    ClassService.prototype.getAllClasses = function () {
        return this.httpClient.get(this.url);
    };
    ClassService.prototype.getClassById = function (classId) {
        return this.httpClient.get(this.url + '/' + classId);
    };
    ClassService.prototype.ajouteClass = function (cla) {
        return this.httpClient.post(this.url, cla);
    };
    ClassService.prototype.deleteClass = function (id) {
        return this.httpClient.delete(this.url + '/' + id);
    };
    ClassService.prototype.ajouteSection = function (idClass, idSection) {
        return this.httpClient.put(this.url + "/" + idClass + "/sectionClass", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/sections/" + idSection, this.newHeader);
    };
    ClassService.prototype.getSection = function (idClass) {
        return this.httpClient.get(this.url + "/" + idClass + "/sectionClass");
    };
    ClassService.prototype.countAllClasses = function () {
        return this.httpClient.get(this.url + '/search/countAllClasses');
    };
    ClassService.prototype.countClassesBySessionId = function (sessionId) {
        return this.httpClient.get(this.url + '/search/countClassesBySession?idSession=' + sessionId);
    };
    ClassService.prototype.getClassesBySessionId = function (sessionId) {
        return this.httpClient.get(this.url + '/search/findClassesBySession?idSession=' + sessionId);
    };
    ClassService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClassService);
    return ClassService;
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
//# sourceMappingURL=class-class-module-es5.js.map