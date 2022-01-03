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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.component */ "./src/app/demo/gestion-scolarite/class/class.component.ts");




const routes = [{
        path: '',
        component: _class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"]
    }];
let ClassRoutingModule = class ClassRoutingModule {
};
ClassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClassRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/class.service */ "./src/app/demo/services/class.service.ts");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/demo/services/section.service.ts");








let ClassComponent = class ClassComponent {
    constructor(classService, formBuilder, sectionService) {
        this.classService = classService;
        this.formBuilder = formBuilder;
        this.sectionService = sectionService;
        this.submitted = false;
        this.show = false;
        this.displayedColumns = ['id', 'Class', 'Section', 'Modifier'];
    }
    ngOnInit() {
        this.sectionService.getAllSections().subscribe(sections => {
            this.sections = sections._embedded.sections;
        });
        this.class = this.formBuilder.group({
            nom_class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idSection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    setClasses() {
        this.classService.getAllClasses().subscribe(classes => {
            console.log("classes", classes);
            this.classes = classes._embedded.classes;
            for (let cl of this.classes) {
                this.classService.getSection(cl.id).subscribe(section => {
                    let sec;
                    sec = section;
                    cl["section"] = sec.section;
                });
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.classes);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    get f() { return this.class.controls; }
    ngAfterViewInit() {
        this.setClasses();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.class.invalid) {
            return;
        }
        console.log(this.class.value);
        this.classService.ajouteClass(this.class.value).subscribe(cla => {
            this.classService.ajouteSection(cla.id, this.class.value.idSection).subscribe(c => {
                this.setClasses();
                this.submitted = false;
                this.class.reset({
                    idSection: ""
                });
            });
        });
    }
    modifier(id) {
        console.log(id);
        this.classService.getClassById(id).subscribe(cla => {
            this.classService.getSection(id).subscribe(section => {
                let sec;
                sec = section;
                this.class = this.formBuilder.group({
                    nom_class: [cla.nom_class, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    idSection: [sec.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    id: [cla.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
            });
        });
    }
};
ClassComponent.ctorParameters = () => [
    { type: _services_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_section_service__WEBPACK_IMPORTED_MODULE_7__["SectionService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _class_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-routing.module */ "./src/app/demo/gestion-scolarite/class/class-routing.module.ts");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class.component */ "./src/app/demo/gestion-scolarite/class/class.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");













let ClassModule = class ClassModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ClassService = class ClassService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/classes";
        this.newHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/uri-list',
                'Accept': 'text/uri-list'
            })
        };
    }
    getAllClasses() {
        return this.httpClient.get(this.url);
    }
    getClassById(classId) {
        return this.httpClient.get(this.url + '/' + classId);
    }
    ajouteClass(cla) {
        return this.httpClient.post(this.url, cla);
    }
    deleteClass(id) {
        return this.httpClient.delete(this.url + '/' + id);
    }
    ajouteSection(idClass, idSection) {
        return this.httpClient.put(this.url + "/" + idClass + "/sectionClass", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/sections/" + idSection, this.newHeader);
    }
    getSection(idClass) {
        return this.httpClient.get(this.url + "/" + idClass + "/sectionClass");
    }
    countAllClasses() {
        return this.httpClient.get(this.url + '/search/countAllClasses');
    }
    countClassesBySessionId(sessionId) {
        return this.httpClient.get(this.url + '/search/countClassesBySession?idSession=' + sessionId);
    }
    getClassesBySessionId(sessionId) {
        return this.httpClient.get(this.url + '/search/findClassesBySession?idSession=' + sessionId);
    }
};
ClassService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ClassService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let SectionService = class SectionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/sections";
        this.newHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/uri-list',
                'Accept': 'text/uri-list'
            })
        };
    }
    getAllSections() {
        return this.httpClient.get(this.url);
    }
    getSectionById(sectionId) {
        return this.httpClient.get(this.url + '/' + sectionId);
    }
    ajouteSection(section) {
        return this.httpClient.post(this.url, section);
    }
    deleteSection(id) {
        return this.httpClient.delete(this.url + '/' + id);
    }
    ajouteMatiere(idSection, idMatiere) {
        return this.httpClient.put(this.url + "/" + idSection + "/matiereSection", _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].proxyServiceEtudiant + "/matieres/" + idMatiere, this.newHeader);
    }
    getMatieres(idSection) {
        return this.httpClient.get(this.url + "/" + idSection + "/matiereSection");
    }
    countAllSections() {
        return this.httpClient.get(this.url + '/search/countAllSections');
    }
    deleteMatiere(idSection, idMatiere) {
        return this.httpClient.delete(this.url + '/' + idSection + '/matiereSection/' + idMatiere);
    }
};
SectionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SectionService);



/***/ })

}]);
//# sourceMappingURL=class-class-module-es2015.js.map