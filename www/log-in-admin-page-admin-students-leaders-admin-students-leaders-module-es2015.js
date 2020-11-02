(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-students-leaders-admin-students-leaders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-button color=\"buttons\" slot=\"start\">\n      <ion-back-button icon=\"arrow-back\" defaultHref=\"{{ eventName }}/Admin/{{ adminUrl }}\"></ion-back-button>\n    </ion-button>\n    <ion-title>Schüler und {{ projectNoun }}leiter verwalten</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Schüler\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text1\">\n      <ion-label color=\"text\">\n        {{ text1 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-button slot=\"start\" color=\"buttons\" (click)=\"refresh()\"><ion-icon color=\"text\" name=\"refresh\"></ion-icon></ion-button>\n        <ion-button slot=\"start\" color=\"buttons\" (click)=\"search()\"><ion-icon color=\"text\" name=\"search\"></ion-icon></ion-button>\n        <ion-input color=\"text\" (keypress)=\"eventHandler($event.keyCode)\" placeholder=\"Vorname Nachname Klasse\" type=\"text\" [(ngModel)]=\"searchValue\" name=\"Serch\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n    <ion-card-content color=\"background\">\n      <ion-grid *ngIf=\"searchStudents\">\n        <ion-row>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"background\" *ngFor=\"let participant of searchStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\">(Leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid *ngIf=\"!searchStudents\">\n        <ion-row>\n          <ion-col><h2>Schüler</h2></ion-col>\n          <ion-col><h2>Wünsche</h2></ion-col>\n          <ion-col><h2>Freunde</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"background\" *ngFor=\"let participant of loadedStudents\" id=\"participant.ID\">\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}\n            </ion-label>\n            <ion-label color=\"text\" *ngIf=\"participant.role == 2\"> ({{ projectNoun }}leiter)</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label color=\"text\">\n              {{ participant.first_wish_title }}<br>\n              {{ participant.second_wish_title }}<br>\n              {{ participant.third_wish_title }}\n            </ion-label>\n          </ion-col>\n          <ion-col color=\"text\">\n            <ion-label color=\"text\">\n              {{ participant.first_friend_name }}<br>\n              {{ participant.second_friend_name }}<br>\n              {{ participant.third_friend_name }}\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <a *ngIf=\"participant.project_id != 0 && participant.project_title != 'fehlerhaftes Projekt'\" routerLink='../../{{ projectsNoun }}/{{participant.project_id}}'>{{ participant.project_title }}</a>\n            <a *ngIf=\"participant.project_id == 0\">kein {{ projectNoun }}</a>\n            <a *ngIf=\"participant.project_title == 'fehlerhaftes Projekt'\">{{ projectNoun }} ist fehlerhaft</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngIf=\"page < lastPage && !searchStudents\" class=\"ion-padding\">\n        <ion-button color=\"buttons\" (click)=\"getMoreStudents()\" expand=\"block\" class=\"ion-no-margin\">Weiter Schüler laden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ projectNoun }}leiter\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text2\">\n      <ion-label color=\"text\">\n        {{ text2 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col><h2>{{ projectNoun }}leiter</h2></ion-col>\n          <ion-col><h2>Link zum {{ projectNoun }}</h2></ion-col>\n        </ion-row>\n        <ion-row color=\"items\" lines=\"none\" *ngFor=\"let leader of loadedLeaders\">\n          <ion-col>\n            <ion-label color=\"text\">{{ leader.user_name }}</ion-label>\n          </ion-col>\n          <ion-col>\n            <a color=\"buttons\" *ngIf=\"leader.project_id != 0\" routerLink='../../{{ projectsNoun }}/{{ leader.project_id }}'>{{ leader.project_title }}</a>\n            <ion-icon color=\"danger\" name=\"trash\" *ngIf=\"leader.project_id == 0\" (click)=\"deleteLeader(leader.id)\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-card-title>\n        Schüler sortieren\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text3\">\n      <ion-label color=\"text\">\n        {{ text3 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <!-- [disabled]=\"!(currentDate > schedule.sort_students && currentDate <= schedule.exchange)\" -->\n      <div class=\"ion-padding\" *ngIf=\"!sorted\">\n        <ion-button color=\"buttons\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"sorted\">\n        <ion-button color=\"buttons\" (click)=\"createSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Neuen Sortiervorschlag erstellen</ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" (click)=\"requestSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >aktuellen Sortiervorschlag ansehen</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"background\"class=\"content\" *ngIf=\"sortedProjects.length\">\n    <ion-card-header>\n      <ion-card-title>\n        Vorschlag für Einsortierung der Schüler\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text4\">\n      <ion-label color=\"text\">\n        {{ text4 }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-card color=\"background\" *ngFor=\"let project of sortedProjects\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-label *ngIf=\"project.participants.length < project.min_participants\" color=\"danger\">{{ project.title }} (Zu wenige Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length > project.max_participants\" color=\"danger\">{{ project.title }} (Zu viele Teilnehmer)</ion-label>\n            <ion-label *ngIf=\"project.participants.length >= project.min_participants && project.participants.length <= project.max_participants\">{{ project.title }}</ion-label>\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-label color=\"text\">{{ project.min_grade }}. bis {{ project.max_grade }}.Klasse | {{ project.min_participants }} bis {{ project.max_participants }} Teilnehmer | {{ project.leader_name }}</ion-label>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"project.leader && project.leader_type === 'App\\\\Student'\">\n            <ion-item color=\"items\">\n              <ion-text color=\"text\"><ion-icon name=\"star\"></ion-icon> {{ project.leader.first_name }} {{ project.leader.last_name }} {{ project.leader.grade }}{{ project.leader.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.assistant_student_leaders.length\">\n            <ion-item color=\"items\" *ngFor=\"let assistant of project.assistant_student_leaders\">\n              <ion-text color=\"text\"><ion-icon name=\"star-half\"></ion-icon> {{ assistant.first_name }} {{ assistant.last_name }} {{ assistant.grade }}{{ assistant.letter }}</ion-text>\n            </ion-item>\n          </div>\n          <div *ngIf=\"project.participants.length\">\n            <ion-item color=\"items\" *ngFor=\"let participant of project.participants\">\n              <ion-text color=\"text\">{{ participant.first_name }} {{ participant.last_name }} {{ participant.grade }}{{ participant.letter }}</ion-text>\n              <ion-select slot=\"end\" name=\"ParticipantProject\" okText=\"Auswählen\" cancelText=\"Abbrechen\" type=\"number\" (ionChange)=\"moveParticipant($event)\"> \n                <ion-select-option *ngFor=\"let newProject of sortedProjects\" [value]=\"[participant, project.id, newProject.id]\">{{ newProject.title }} ({{ newProject.min_grade }}. - {{ newProject.max_grade }}.Klasse)</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" (click)=\"editSortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Vorschlag ändern</ion-button>\n    </div>\n    <div class=\"ion-padding\">\n      <ion-button color=\"buttons\" [disabled]=\"!sorted\" (click)=\"applySortingProposal()\" expand=\"block\" class=\"ion-no-margin\" >Vorschlag anwenden</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AdminStudentsLeadersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPageRoutingModule", function() { return AdminStudentsLeadersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-students-leaders.page */ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts");




const routes = [
    {
        path: '',
        component: _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_3__["AdminStudentsLeadersPage"]
    }
];
let AdminStudentsLeadersPageRoutingModule = class AdminStudentsLeadersPageRoutingModule {
};
AdminStudentsLeadersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminStudentsLeadersPageRoutingModule);



/***/ }),

/***/ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AdminStudentsLeadersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPageModule", function() { return AdminStudentsLeadersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_students_leaders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-students-leaders-routing.module */ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders-routing.module.ts");
/* harmony import */ var _admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-students-leaders.page */ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts");







let AdminStudentsLeadersPageModule = class AdminStudentsLeadersPageModule {
};
AdminStudentsLeadersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_students_leaders_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminStudentsLeadersPageRoutingModule"]
        ],
        declarations: [_admin_students_leaders_page__WEBPACK_IMPORTED_MODULE_6__["AdminStudentsLeadersPage"]]
    })
], AdminStudentsLeadersPageModule);



/***/ }),

/***/ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".height {\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tc3R1ZGVudHMtbGVhZGVycy9hZG1pbi1zdHVkZW50cy1sZWFkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vYWRtaW4tcGFnZS9hZG1pbi1zdHVkZW50cy1sZWFkZXJzL2FkbWluLXN0dWRlbnRzLWxlYWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdminStudentsLeadersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsLeadersPage", function() { return AdminStudentsLeadersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/participants.service */ "./src/app/participants.service.ts");
/* harmony import */ var src_app_leaders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/leaders.service */ "./src/app/leaders.service.ts");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_admins_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admins.service */ "./src/app/admins.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");











let AdminStudentsLeadersPage = class AdminStudentsLeadersPage {
    constructor(participantsService, scheduleService, leadersService, projectsService, activatedRoute, alertCtrl, adminsService, alert, config) {
        this.participantsService = participantsService;
        this.scheduleService = scheduleService;
        this.leadersService = leadersService;
        this.projectsService = projectsService;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.adminsService = adminsService;
        this.alert = alert;
        this.config = config;
        this.loadedProjects = [];
        this.loadedParticipantsNames = [];
        this.sortedProjects = [];
        this.loadedStudents = [];
        this.loadedLeaders = [];
        this.sorted = false;
        this.schedule = {
            id: 1,
            begin: null,
            control: null,
            registration: null,
            sort_students: null,
            exchange: null,
            projects: null,
            end: null
        };
        this.page = 1;
        this.lastPage = 1;
        this.projectNoun = this.config.app_config.project_noun;
        this.projectsNoun = this.config.app_config.projects_noun;
        this.eventName = this.config.app_config.event_name;
    }
    ngOnInit() {
        this.text1 = this.config.get_content_by_index('admin-students-leaders', 0);
        this.text2 = this.config.get_content_by_index('admin-students-leaders', 1);
        this.text3 = this.config.get_content_by_index('admin-students-leaders', 2);
        this.text4 = this.config.get_content_by_index('admin-students-leaders', 3);
        this.alert.loading(2000);
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.adminUrl = paramMap.get('AdminName');
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getProjects();
        this.getParticipantsNames();
        if (this.currentDate > this.schedule.sort_students && this.currentDate <= this.schedule.exchange) {
            this.requestSortingProposal();
        }
        this.participantsService.update.subscribe(() => this.getStudents());
        this.leadersService.update.subscribe(() => this.getLeaders());
        this.projectsService.update.subscribe(() => this.getProjects());
    }
    ionViewWillEnter() {
        this.alert.loading(2000);
    }
    eventHandler(keyCode) {
        if (keyCode === 13) {
            this.search();
        }
    }
    search() {
        // tslint:disable-next-line: triple-equals
        if (this.searchValue == '') {
            this.searchStudents = null;
            return;
        }
        this.participantsService.getAllSearchedStudents(this.searchValue).subscribe(data => {
            this.searchStudents = [];
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    first_name: '',
                    last_name: '',
                    grade: 1,
                    letter: '',
                    first_friend: 0,
                    first_friend_name: '',
                    second_friend: 0,
                    second_friend_name: '',
                    third_friend: 0,
                    third_friend_name: '',
                    first_wish: 0,
                    first_wish_title: '',
                    second_wish: 0,
                    second_wish_title: '',
                    third_wish: 0,
                    third_wish_title: '',
                    project_id: 0,
                    project_title: 'kein Projekt',
                    role: 1
                };
                stu.id = student.id;
                stu.first_name = student.first_name;
                stu.last_name = student.last_name;
                stu.grade = student.grade;
                stu.letter = student.letter;
                stu.first_friend = student.first_friend;
                stu.second_friend = student.second_friend;
                stu.third_friend = student.third_friend;
                stu.first_wish = student.first_wish;
                stu.second_wish = student.second_wish;
                stu.third_wish = student.third_wish;
                stu.project_id = student.project_id;
                stu.role = student.role;
                stu.first_friend_name = this.getParticipantName(stu.first_friend);
                stu.second_friend_name = this.getParticipantName(stu.second_friend);
                stu.third_friend_name = this.getParticipantName(stu.third_friend);
                stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                stu.project_title = this.getProjectTitle(stu.project_id);
                this.searchStudents.push(stu);
            }));
        });
    }
    refresh() {
        this.page = 1;
        this.getProjects();
        this.getParticipantsNames();
        this.getStudents();
        this.getLeaders();
    }
    getProjects() {
        this.projectsService.getAllProjects().subscribe(data => {
            this.loadedProjects = data.data;
            this.getStudents();
            this.getLeaders();
        });
    }
    getParticipantsNames() {
        this.participantsService.getAllParticipantNames().subscribe(data => {
            this.loadedParticipantsNames = data.data;
        });
    }
    getStudents() {
        this.loadedStudents = [];
        this.participantsService.getAllStudents(this.page).subscribe(data => {
            this.lastPage = data.meta.last_page;
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    first_name: '',
                    last_name: '',
                    grade: 1,
                    letter: '',
                    first_friend: 0,
                    first_friend_name: '',
                    second_friend: 0,
                    second_friend_name: '',
                    third_friend: 0,
                    third_friend_name: '',
                    first_wish: 0,
                    first_wish_title: '',
                    second_wish: 0,
                    second_wish_title: '',
                    third_wish: 0,
                    third_wish_title: '',
                    project_id: 0,
                    project_title: 'kein Projekt',
                    role: 1
                };
                stu.id = student.id;
                stu.first_name = student.first_name;
                stu.last_name = student.last_name;
                stu.grade = student.grade;
                stu.letter = student.letter;
                stu.first_friend = student.first_friend;
                stu.second_friend = student.second_friend;
                stu.third_friend = student.third_friend;
                stu.first_wish = student.first_wish;
                stu.second_wish = student.second_wish;
                stu.third_wish = student.third_wish;
                stu.project_id = student.project_id;
                stu.role = student.role;
                stu.first_friend_name = this.getParticipantName(stu.first_friend);
                stu.second_friend_name = this.getParticipantName(stu.second_friend);
                stu.third_friend_name = this.getParticipantName(stu.third_friend);
                stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                stu.project_title = this.getProjectTitle(stu.project_id);
                // await this.getWishNames(stu.first_wish, stu.second_wish, stu.third_wish, stu);
                // await this.getFriendsNames(stu.first_friend, stu.second_friend, stu.third_friend, stu);
                this.loadedStudents.push(stu);
            }));
        });
    }
    getMoreStudents() {
        this.alert.loading(2000);
        this.page += 1;
        this.participantsService.getAllStudents(this.page).subscribe(data => {
            data.data.forEach((student) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const stu = {
                    id: 0,
                    first_name: '',
                    last_name: '',
                    grade: 1,
                    letter: '',
                    first_friend: 0,
                    first_friend_name: '',
                    second_friend: 0,
                    second_friend_name: '',
                    third_friend: 0,
                    third_friend_name: '',
                    first_wish: 0,
                    first_wish_title: '',
                    second_wish: 0,
                    second_wish_title: '',
                    third_wish: 0,
                    third_wish_title: '',
                    project_id: 0,
                    project_title: 'kein Projekt',
                    role: 1
                };
                stu.id = student.id;
                stu.first_name = student.first_name;
                stu.last_name = student.last_name;
                stu.grade = student.grade;
                stu.letter = student.letter;
                stu.first_friend = student.first_friend;
                stu.second_friend = student.second_friend;
                stu.third_friend = student.third_friend;
                stu.first_wish = student.first_wish;
                stu.second_wish = student.second_wish;
                stu.third_wish = student.third_wish;
                stu.project_id = student.project_id;
                stu.role = student.role;
                stu.first_friend_name = this.getParticipantName(stu.first_friend);
                stu.second_friend_name = this.getParticipantName(stu.second_friend);
                stu.third_friend_name = this.getParticipantName(stu.third_friend);
                stu.first_wish_title = this.getProjectTitle(stu.first_wish);
                stu.second_wish_title = this.getProjectTitle(stu.second_wish);
                stu.third_wish_title = this.getProjectTitle(stu.third_wish);
                stu.project_title = this.getProjectTitle(stu.project_id);
                this.loadedStudents.push(stu);
            }));
        });
    }
    getLeaders() {
        this.loadedLeaders = [];
        this.leadersService.getAllLeaders().subscribe(data => {
            data.data.forEach(leader => {
                const lea = {
                    id: 0,
                    user_name: '',
                    email: '',
                    project_id: 0,
                    project_title: 'kein Projekt'
                };
                lea.id = leader.id;
                lea.user_name = leader.user_name;
                lea.email = leader.email;
                lea.project_id = leader.project_id;
                lea.project_title = this.getProjectTitle(lea.project_id);
                this.loadedLeaders.push(lea);
            });
        });
    }
    getProjectTitle(projectID) {
        if (projectID !== 0 && this.loadedProjects) {
            const searchedProject = this.loadedProjects.filter(project => project.id === projectID);
            if (searchedProject[0] != null) {
                return searchedProject[0].title;
            }
            else {
                return 'fehlerhaftes Projekt';
            }
        }
        else {
            return 'kein Projekt';
        }
    }
    getParticipantName(participantID) {
        if (participantID !== 0 && this.loadedParticipantsNames) {
            const searchedParticipant = this.loadedParticipantsNames.filter(participant => participant.id === participantID);
            if (searchedParticipant[0] != null) {
                return searchedParticipant[0].first_name + ' ' + searchedParticipant[0].last_name;
            }
            else {
                return 'fehlerhafter Freund';
            }
        }
        else {
            return '';
        }
    }
    deleteLeader(leaderID) {
        this.alertCtrl.create({
            header: 'Sind sie sicher?',
            message: 'Wollen sie diesen Projektleiter wirklich unwiederruflich löschen?',
            buttons: [{
                    text: 'Abbrechen',
                    role: 'cancel',
                }, {
                    text: 'Löschen',
                    handler: () => {
                        this.leadersService.deleteLeader(leaderID);
                    }
                }]
        }).then(alertEl => {
            alertEl.present();
        });
    }
    createSortingProposal() {
        this.adminsService.createSortingProposal().subscribe(data => {
            this.alert.alert(data.message);
            this.sorted = true;
            this.sortedProjects = data.data;
            // tslint:disable-next-line: no-shadowed-variable
        }, error => {
            this.alert.error('Sortierung der Schüler fehlgeschlagen.', error.error);
        });
    }
    requestSortingProposal() {
        this.adminsService.requestSortingProposal().subscribe(data => {
            this.sortedProjects = data.data;
            this.sorted = true;
            // tslint:disable-next-line: no-shadowed-variable
        }, error => {
            this.alert.error('Es konnte kein Sortiervorschlag gefunden werden.', error.error);
        });
    }
    moveParticipant(event) {
        const participant = event.detail.value[0];
        const oldProjectId = event.detail.value[1];
        const newProjectId = event.detail.value[2];
        if (oldProjectId !== 0 && this.sortedProjects) {
            const searchedProject = this.sortedProjects.filter(project => project.id === oldProjectId);
            if (searchedProject[0] != null) {
                const oldProject = searchedProject[0];
                const index = oldProject.participants.indexOf(participant);
                if (index !== -1) {
                    oldProject.participants.splice(index, 1);
                }
            }
        }
        if (newProjectId !== 0 && this.sortedProjects) {
            const searchedProject = this.sortedProjects.filter(project => project.id === newProjectId);
            if (searchedProject[0] != null) {
                const newProject = searchedProject[0];
                if (participant) {
                    newProject.participants.push(participant);
                }
            }
        }
    }
    editSortingProposal() {
        const newProposal = {
            data: this.sortedProjects
        };
        this.adminsService.editSortingProposal(newProposal);
        // this.requestSortingProposal();
        this.sorted = true;
    }
    applySortingProposal() {
        if (this.sorted === true) {
            this.alertCtrl.create({
                header: 'Sind sie sicher?',
                message: 'Wollen sie die vorgeschlagene Konfiguration wirklich anwenden?',
                buttons: [{
                        text: 'Abbrechen',
                        role: 'cancel'
                    }, {
                        text: 'Anwenden',
                        handler: () => {
                            this.adminsService.applySortingProposal();
                            this.sorted = false;
                        }
                    }]
            }).then(alertEl => {
                alertEl.present();
            });
        }
    }
};
AdminStudentsLeadersPage.ctorParameters = () => [
    { type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_10__["ScheduleService"] },
    { type: src_app_leaders_service__WEBPACK_IMPORTED_MODULE_4__["LeadersService"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_admins_service__WEBPACK_IMPORTED_MODULE_7__["AdminsService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }
];
AdminStudentsLeadersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-students-leaders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-students-leaders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-students-leaders.page.scss */ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.page.scss")).default]
    })
], AdminStudentsLeadersPage);



/***/ })

}]);
//# sourceMappingURL=log-in-admin-page-admin-students-leaders-admin-students-leaders-module-es2015.js.map