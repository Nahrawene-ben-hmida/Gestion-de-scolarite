(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-etudiant-etudiant-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/etudiant/etudiant.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/etudiant/etudiant.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-snackbar [type]=\"type\" [message]=\"message\" [show]=\"show\"></app-snackbar>\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <app-card cardTitle=\"Etudiant\" [options]=\"false\">\n            <div class=\"row\">\n                <div >\n                    <h5 class=\"mt-3\">Ajouter un Etudiant</h5>\n                    <form [formGroup]=\"etudiant\" (ngSubmit)=\"onSubmit()\"  >\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Etudiant</span>\n                            </div>\n                            <input formControlName=\"nom\" name=\"nom\" type=\"text\" class=\"form-control\" placeholder=\"Nom\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.nom.errors }\">\n                            <input formControlName=\"prenom\" name=\"prenom\" type=\"text\" class=\"form-control\" placeholder=\"Prenom\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.prenom.errors }\">\n                            <input formControlName=\"adresse\" name=\"adresse\" type=\"text\" class=\"form-control\" placeholder=\"Adresse\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.adresse.errors }\">\n                            <input formControlName=\"telephone\" name=\"telephone\" type=\"number\" class=\"form-control\" placeholder=\"Telephone\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.telephone.errors }\">\n\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Ajouter</button>\n                            </div>\n                        </div>\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Class</span>\n                            </div>\n                            <select formControlName=\"idClass\"  class=\"custom-select form-control\" id=\"inputGroupSelect04\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.idClass.errors }\">\n                                <option   value=\"\" selected>Choose...</option>\n                                <option *ngFor=\"let cla of classes\" value=\"{{cla.id}}\">{{cla.nom_class}}</option>\n                            </select>\n                        </div>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Session</span>\n                            </div>\n                            <select formControlName=\"idSession\"  class=\"custom-select form-control\" id=\"inputGroupSelect05\" (focus)=\"focus=true\" (blur)=\"focus=false\" required=\"required\" [ngClass]=\"{'is-invalid': submitted && f.idSession.errors }\">\n                                <option  value=\"\" selected>Choose...</option>\n                                <option *ngFor=\"let sess of sessions\" value=\"{{sess.id}}\">{{sess.anneeScolaire}}</option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>\n<div>\n    <mat-form-field>\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n    </mat-form-field>\n\n    <div class=\"mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"Nom\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Nom </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.nom}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"Prenom\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Prenom </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.prenom}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"Adresse\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Adresse </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.adresse}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"Telephone\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Telephone </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.telephone}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Class\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Class </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    {{row.class}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Session\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Session </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    {{row.session}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Resultat\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Resultat </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <select #result class=\"custom-select\" (change)=\"resultChanged(result.value,row.id)\" value=\"{{row.resultat}}\">\n                        <option value=\"nonAffectee\">Non Affectee</option>\n                        <option value=\"reussit\">Reussit</option>\n                        <option value=\"redoublant\">Redoublant</option>\n                    </select>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Absence\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Absence </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <!--<button (click)=\"absence(row.id)\" class=\"btn btn-info\">Absence</button>-->\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"absence(row.id)\">Absence</button>\n\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Modifier\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Modifier </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button (click)=\"modifier(row.id)\" class=\"btn btn-secondary\">Modifier</button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Supprimer\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Supprimer </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button (click)=\"supprimer(row.id)\" class=\"btn btn-danger\">Supprimer</button>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n            <!-- Row shown when there is no matching data. -->\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n            </tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>\n\n<app-ui-modal #absenceC dialogClass=\"modal-dialog-centered\">\n    <div class=\"app-modal-header\">\n        <h5 class=\"modal-title\">Absence par matiere</h5>\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"absenceHide()\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n\n    <div class=\"app-modal-body\">\n\n        <mat-form-field color=\"accent\" appearance=\"fill\">\n            <mat-label>Choisir une date</mat-label>\n            <input matInput (dateInput)=\"pickedDate($event.value)\" [matDatepicker]=\"picker1\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n        <form  [formGroup]=\"matiereAbsence\"  >\n            <table   >\n                <th>Matieres</th>\n                <tr *ngFor=\"let mat of etudiantMatieres; let i=index\"  >\n                    <div *ngIf=\"matiereAbsence.controls[i]\">\n                        <div  [formGroup]=\"matiereAbsence.controls[i]\" >\n                            <td >\n                                <input disabled  name=\"matiere\" class=\"form-control\"  type=\"text\"  formControlName=\"matiere\" value=\"{{mat.matiere}}\">\n\n                            </td>\n                            <td>\n                                <select class=\"form-control\" formControlName=\"status\"      class=\"custom-select form-control\"  >\n                                    <option value=\"null\">Pas de class a ce date</option>\n                                    <option value=\"present\">Present</option>\n                                    <option value=\"absent\">Absent</option>\n                                </select>\n                            </td>\n                        </div>\n                    </div>\n\n                </tr>\n            </table>\n        </form>\n    </div>\n    <div class=\"app-modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"absenceHide()\">Close</button>\n        <button type=\"button\" (click)=\"matiereAbsenceSubmit()\" class=\"btn btn-primary\">Save changes</button>\n    </div>\n\n\n</app-ui-modal>\n"

/***/ }),

/***/ "./src/app/demo/etudiant/etudiant-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/etudiant/etudiant-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: EtudiantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudiantRoutingModule", function() { return EtudiantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _etudiant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etudiant.component */ "./src/app/demo/etudiant/etudiant.component.ts");




var routes = [{
        path: '',
        component: _etudiant_component__WEBPACK_IMPORTED_MODULE_3__["EtudiantComponent"]
    }];
var EtudiantRoutingModule = /** @class */ (function () {
    function EtudiantRoutingModule() {
    }
    EtudiantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EtudiantRoutingModule);
    return EtudiantRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/etudiant/etudiant.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/demo/etudiant/etudiant.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZXR1ZGlhbnQvZXR1ZGlhbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/etudiant/etudiant.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/etudiant/etudiant.component.ts ***!
  \*****************************************************/
/*! exports provided: EtudiantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudiantComponent", function() { return EtudiantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _services_etudiant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/etudiant.service */ "./src/app/demo/services/etudiant.service.ts");
/* harmony import */ var _services_class_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/class.service */ "./src/app/demo/services/class.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/section.service */ "./src/app/demo/services/section.service.ts");
/* harmony import */ var _services_absences_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/absences.service */ "./src/app/demo/services/absences.service.ts");
/* harmony import */ var _services_matiere_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/matiere.service */ "./src/app/demo/services/matiere.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/session.service */ "./src/app/demo/services/session.service.ts");













var EtudiantComponent = /** @class */ (function () {
    function EtudiantComponent(etudiantService, formBuilder, classService, sectionService, absencesService, matiereService, sessionService) {
        this.etudiantService = etudiantService;
        this.formBuilder = formBuilder;
        this.classService = classService;
        this.sectionService = sectionService;
        this.absencesService = absencesService;
        this.matiereService = matiereService;
        this.sessionService = sessionService;
        this.submitted = false;
        this.show = false;
        this.displayedColumns = ['id', 'Nom', 'Prenom', 'Adresse', 'Telephone', 'Class', 'Session', 'Resultat', 'Absence', 'Supprimer', 'Modifier'];
    }
    EtudiantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classService.getAllClasses().subscribe(function (classes) {
            _this.classes = classes._embedded.classes;
            console.log(_this.classes);
        });
        this.sessionService.getAllSession().subscribe(function (sessions) {
            _this.sessions = sessions._embedded.sessions;
        });
        this.etudiant = this.formBuilder.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            prenom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idClass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            resultat: ['nonAffectee']
        });
        this.matiereAbsence = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
    };
    EtudiantComponent.prototype.createMatiereAbsence = function (matiere, status, idAbsence) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            matiere: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](matiere),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](status),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](idAbsence)
        });
    };
    EtudiantComponent.prototype.setEtudiants = function () {
        var _this = this;
        this.etudiantService.getAllEtudiants().subscribe(function (etudiants) {
            var e_1, _a;
            _this.etudiants = etudiants._embedded.etudiants;
            var _loop_1 = function (etud) {
                _this.etudiantService.getClass(etud.id).subscribe(function (cla) {
                    var cl;
                    cl = cla;
                    etud["class"] = cl.nom_class;
                });
                _this.etudiantService.getSession(etud.id).subscribe(function (sess) {
                    var se;
                    se = sess;
                    etud["session"] = se.anneeScolaire;
                });
            };
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.etudiants), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var etud = _c.value;
                    _loop_1(etud);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(_this.etudiants);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.etudiants);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    Object.defineProperty(EtudiantComponent.prototype, "f", {
        get: function () { return this.etudiant.controls; },
        enumerable: true,
        configurable: true
    });
    EtudiantComponent.prototype.ngAfterViewInit = function () {
        this.setEtudiants();
    };
    EtudiantComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EtudiantComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.etudiant.invalid) {
            return;
        }
        if (!this.etudiant.value.id) {
            this.etudiant.value['resultat'] = 'nonAffectee';
        }
        this.etudiantService.ajouteEtudiant(this.etudiant.value).subscribe(function (etudiant) {
            _this.etudiantService.ajouteClass(etudiant.id, _this.etudiant.value.idClass).subscribe(function (etud) {
                _this.etudiantService.ajouteSession(etudiant.id, _this.etudiant.value.idSession).subscribe(function (res) {
                    _this.setEtudiants();
                    _this.submitted = false;
                    _this.etudiant.reset({
                        idClass: "",
                        idSession: ""
                    });
                });
            });
        });
    };
    EtudiantComponent.prototype.absence = function (id) {
        var _this = this;
        this.idEtudiant = id;
        this.etudiantService.getClass(id).subscribe(function (etudClass) {
            var etudiantClass;
            etudiantClass = etudClass;
            _this.classService.getSection(etudiantClass.id).subscribe(function (section) {
                var etudSection;
                etudSection = section;
                _this.idSection = etudSection.id;
            });
        });
        this.absenceComponent.show();
    };
    EtudiantComponent.prototype.pickedDate = function (date) {
        var _this = this;
        console.log(date);
        this.matiereService.getMatiereBySectionId(this.idSection).subscribe(function (matieres) {
            var mat;
            mat = matieres;
            _this.etudiantMatieres = mat._embedded.matieres;
            _this.matiereAbsence = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
            _this.selectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(date, "yyyy-MM-dd", "en-GB");
            var _loop_2 = function (i) {
                var status_1 = "null";
                var idAbsence = "null";
                var test = true;
                _this.absencesService.getAbsenceByDateAbsenceAndEtudiantIdAndMatiereId(_this.selectedDate, _this.idEtudiant, _this.etudiantMatieres[i].id).subscribe(function (absence) {
                    test = false;
                    console.log("matiereAbsence!!!", absence);
                    var abs;
                    abs = absence;
                    if (abs._embedded.absences.length != 0) {
                        status_1 = abs._embedded.absences[0].etat;
                        idAbsence = abs._embedded.absences[0].id;
                        console.log(_this.matiereAbsence);
                    }
                    _this.matiereAbsence.push(_this.createMatiereAbsence(_this.etudiantMatieres[i].id, status_1, idAbsence));
                    _this.etudiantMatieres[i]["status"] = status_1;
                }, function (error) { console.log("error", error); }, function () {
                    if (test == true) {
                        console.log(1);
                        _this.matiereAbsence.push(_this.createMatiereAbsence(_this.etudiantMatieres[i].id, status_1, idAbsence));
                        _this.etudiantMatieres[i]["status"] = status_1;
                    }
                });
            };
            for (var i = 0; i < _this.etudiantMatieres.length; i++) {
                _loop_2(i);
            }
            console.log("matiereAbsence", _this.matiereAbsence);
            console.log(_this.etudiantMatieres);
        });
    };
    EtudiantComponent.prototype.matiereAbsenceSubmit = function () {
        var _this = this;
        var e_2, _a;
        var _loop_3 = function (matAbsen) {
            if (matAbsen.id == "null") {
                this_1.absencesService.ajouteAbsence({
                    etat: matAbsen.status,
                    dateAbsence: this_1.selectedDate,
                    idEtudiant: this_1.idEtudiant
                }).subscribe(function (matiereAbsence) {
                    _this.absencesService.ajouteEtudiant(matiereAbsence.id, _this.idEtudiant).subscribe(function () {
                        _this.absencesService.ajouteMatiere(matiereAbsence.id, matAbsen.matiere).subscribe(function () {
                            _this.absenceHide();
                        });
                    });
                });
            }
            else {
                this_1.absencesService.updateAbsence({
                    etat: matAbsen.status,
                    id: matAbsen.id,
                    dateAbsence: this_1.selectedDate,
                    idEtudiant: this_1.idEtudiant
                }).subscribe(function (matiereAbsence) {
                    _this.absenceHide();
                });
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.matiereAbsence.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var matAbsen = _c.value;
                _loop_3(matAbsen);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    EtudiantComponent.prototype.resultChanged = function (result, idEtudiant) {
        var _this = this;
        this.etudiantService.getEtudiantById(idEtudiant).subscribe(function (etudiant) {
            etudiant.resultat = result;
            _this.etudiantService.updateResultat(etudiant).subscribe(function (updated) {
                _this.setEtudiants();
            });
        });
    };
    EtudiantComponent.prototype.absenceHide = function () {
        this.absenceComponent.hide();
    };
    EtudiantComponent.prototype.supprimer = function (id) {
        var _this = this;
        this.absencesService.getAllAbsencesByIdEtudiant(id).subscribe(function (absences) {
            var e_3, _a;
            var abs;
            abs = absences;
            var index = 0;
            if (abs._embedded.absences.length == 0) {
                _this.etudiantService.deleteEtudiant(id).subscribe(function (del) {
                    _this.setEtudiants();
                });
            }
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](abs._embedded.absences), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var a = _c.value;
                    _this.absencesService.deleteAbsence(a.id).subscribe(function () {
                        index++;
                        if (index == abs._embedded.absences.length) {
                            _this.etudiantService.deleteEtudiant(id).subscribe(function (del) {
                                _this.setEtudiants();
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
    };
    EtudiantComponent.prototype.modifier = function (id) {
        var _this = this;
        this.etudiantService.getEtudiantById(id).subscribe(function (etudiant) {
            _this.etudiantService.getSession(id).subscribe(function (session) {
                _this.etudiantService.getClass(id).subscribe(function (classe) {
                    var cla;
                    cla = classe;
                    var se;
                    se = session;
                    _this.etudiant = _this.formBuilder.group({
                        id: [etudiant.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        nom: [etudiant.nom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        prenom: [etudiant.prenom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        adresse: [etudiant.adresse, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        telephone: [etudiant.telephone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        idClass: [cla.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        idSession: [se.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        resultat: [etudiant.resultat, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                });
            });
        });
    };
    EtudiantComponent.ctorParameters = function () { return [
        { type: _services_etudiant_service__WEBPACK_IMPORTED_MODULE_6__["EtudiantService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"] },
        { type: _services_section_service__WEBPACK_IMPORTED_MODULE_9__["SectionService"] },
        { type: _services_absences_service__WEBPACK_IMPORTED_MODULE_10__["AbsencesService"] },
        { type: _services_matiere_service__WEBPACK_IMPORTED_MODULE_11__["MatiereService"] },
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("absenceC", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EtudiantComponent.prototype, "absenceComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], EtudiantComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], EtudiantComponent.prototype, "sort", void 0);
    EtudiantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-etudiant',
            template: __webpack_require__(/*! raw-loader!./etudiant.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/etudiant/etudiant.component.html"),
            styles: [__webpack_require__(/*! ./etudiant.component.scss */ "./src/app/demo/etudiant/etudiant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_etudiant_service__WEBPACK_IMPORTED_MODULE_6__["EtudiantService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"],
            _services_section_service__WEBPACK_IMPORTED_MODULE_9__["SectionService"],
            _services_absences_service__WEBPACK_IMPORTED_MODULE_10__["AbsencesService"],
            _services_matiere_service__WEBPACK_IMPORTED_MODULE_11__["MatiereService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"]])
    ], EtudiantComponent);
    return EtudiantComponent;
}());



/***/ }),

/***/ "./src/app/demo/etudiant/etudiant.module.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/etudiant/etudiant.module.ts ***!
  \**************************************************/
/*! exports provided: EtudiantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudiantModule", function() { return EtudiantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _etudiant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etudiant-routing.module */ "./src/app/demo/etudiant/etudiant-routing.module.ts");
/* harmony import */ var _etudiant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./etudiant.component */ "./src/app/demo/etudiant/etudiant.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");













var EtudiantModule = /** @class */ (function () {
    function EtudiantModule() {
    }
    EtudiantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_etudiant_component__WEBPACK_IMPORTED_MODULE_4__["EtudiantComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _etudiant_routing_module__WEBPACK_IMPORTED_MODULE_3__["EtudiantRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]
            ]
        })
    ], EtudiantModule);
    return EtudiantModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-etudiant-etudiant-module-es5.js.map