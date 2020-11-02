(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-user-page-user-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/user-page.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/user-page.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-title>Schüler</ion-title>\n    <ion-button color=\"buttons\" slot=\"end\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"background\">\n  <ion-card color=\"background\"class=\"content\">\n    <ion-card-header>\n      <ion-item color=\"items\" lines=\"none\">\n        <ion-card-title><ion-label color=\"buttons\">Wilkommen {{ loadedUser.user_name }}</ion-label></ion-card-title>\n        <ion-button (click)=\"refresh()\" slot=\"end\" color=\"buttons\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"text\">\n      <ion-label color=\"text\">\n        {{ text }}\n      </ion-label>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"loadedUser.email_verified_at == null && !buttonPressed\">\n      <ion-label color=\"text\">\n        Sie heaben ihre E-Mail noch nicht verifiziert. Bitte holen sie dies nach bevor sie fortfahren.\n      </ion-label>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"sendVerificationEmail()\">E-Mail senden</ion-button>\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-list>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.registration && currentDate <= schedule.sort_students\" [routerLink]=\"['./Anmeldung']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"log-in\"></ion-icon>Anmeldedaten eingeben\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"loadedUser.role === 1 && loadedUser.project_id != 0 && currentDate > schedule.exchange && currentDate <= schedule.projects\" [routerLink]=\"['./Tauschanfrage senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Tauschanfragen senden\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"loadedUser.role === 1 && loadedUser.exchange_requests.length > 0 && loadedUser.project_id != 0 && loadedUser.exchange_id == 0 && currentDate > schedule.exchange && currentDate <= schedule.projects\" [routerLink]=\"['./Tauschanfrage bestätigen']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"swap-horizontal\"></ion-icon>Tauschanfrage bestätigen\n          <ion-badge color=\"buttons\" slot=\"end\">{{ loadedUser.exchange_requests.length }}</ion-badge>\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"loadedUser.role === 1 && loadedUser.project_id != 0\" routerLink='./{{ projectNoun }}'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"people\"></ion-icon>{{ projectNoun }} einsehen\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedUser.project_id == 0 && loadedUser.role === 1 && studentsCanCreateProjects\" routerLink='./{{ projectNoun }} erstellen'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"create\"></ion-icon>{{ projectNoun }} erstellen\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"loadedUser.role === 2 && loadedUser.project_id != 0 && studentsCanCreateProjects\" routerLink='./{{ projectNoun }} verwalten'>\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>{{ projectNoun }} verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"currentDate > schedule.begin && currentDate <= schedule.control && loadedUser.role === 2 && loadedUser.project_id != 0 && studentsCanCreateProjects\" [routerLink]=\"['./Assistenten verwalten']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"construct\"></ion-icon>Assistenten verwalten\n        </ion-item>\n        <ion-item [disabled]=\"loadedUser.email_verified_at == null\" color=\"items\" *ngIf=\"loadedUser.role === 2 && loadedUser.project_id != 0 && studentsCanCreateProjects\" [routerLink]=\"['./Nachricht senden']\">\n          <ion-icon color=\"text\" slot=\"start\" name=\"send\"></ion-icon>Nachricht senden\n        </ion-item>\n      </ion-list>\n      <div class=\"ion-padding\">\n        <ion-button color=\"buttons\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logout()\">Abmelden</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/log-in/user-page/user-page.module.ts":
/*!******************************************************!*\
  !*** ./src/app/log-in/user-page/user-page.module.ts ***!
  \******************************************************/
/*! exports provided: UserPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePageModule", function() { return UserPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-page.page */ "./src/app/log-in/user-page/user-page.page.ts");







const routes = [
    {
        path: '',
        component: _user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]
    }
];
let UserPagePageModule = class UserPagePageModule {
};
UserPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]]
    })
], UserPagePageModule);



/***/ }),

/***/ "./src/app/log-in/user-page/user-page.page.scss":
/*!******************************************************!*\
  !*** ./src/app/log-in/user-page/user-page.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi91c2VyLXBhZ2UvdXNlci1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/log-in/user-page/user-page.page.ts":
/*!****************************************************!*\
  !*** ./src/app/log-in/user-page/user-page.page.ts ***!
  \****************************************************/
/*! exports provided: UserPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePage", function() { return UserPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_participants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/participants.service */ "./src/app/participants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/exchanges.service */ "./src/app/exchanges.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/schedule.service */ "./src/app/schedule.service.ts");
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var src_app_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/alert.service */ "./src/app/alert.service.ts");











let UserPagePage = class UserPagePage {
    constructor(activatedRoute, router, exchangesService, participantsService, projectsService, scheduleService, config, alert) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.exchangesService = exchangesService;
        this.participantsService = participantsService;
        this.projectsService = projectsService;
        this.scheduleService = scheduleService;
        this.config = config;
        this.alert = alert;
        this.loadedUser = {
            id: 0,
            user_name: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            grade: 0,
            letter: '',
            exchange_id: 0,
            exchange_requests: [],
            first_friend: 0,
            second_friend: 0,
            third_friend: 0,
            first_wish: 0,
            second_wish: 0,
            third_wish: 0,
            project_id: 0,
            role: 1
        };
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
        this.buttonPressed = true;
        this.projectNoun = this.config.app_config.project_noun;
        this.studentsCanCreateProjects = this.config.app_config.students_can_create_projects;
    }
    ngOnInit() {
        this.text = this.config.get_content('user-page');
        this.currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('ParticipantName')) {
                this.router.navigate(['']);
                return;
            }
        });
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
        this.getStudent();
        this.participantsService.update.subscribe(() => this.getStudent());
        this.projectsService.update.subscribe(() => this.getStudent());
    }
    getStudent() {
        this.participantsService.getSelfParticipant().subscribe(data => {
            this.loadedUser = data.data;
            this.loadedUser.exchange_requests = [];
            if (this.currentDate > this.schedule.exchange && this.currentDate <= this.schedule.projects) {
                this.exchangesService.getAllExchangesForParticipant().subscribe(requestData => {
                    this.loadedUser.exchange_requests = requestData.data;
                });
            }
            if (this.loadedUser.email_verified_at == null) {
                this.buttonPressed = false;
            }
        });
    }
    refresh() {
        this.getStudent();
        this.scheduleService.getSchedule().subscribe(data => {
            this.schedule = data.data;
        });
    }
    logout() {
        this.participantsService.logOutParticipant();
    }
    sendVerificationEmail() {
        this.participantsService.sendAuthentificationEmailSubscribe().subscribe(data => {
            this.alert.alert(data.message);
            this.buttonPressed = true;
        }, error => {
            this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
        });
    }
};
UserPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_exchanges_service__WEBPACK_IMPORTED_MODULE_4__["ExchangesService"] },
    { type: src_app_participants_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantsService"] },
    { type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"] },
    { type: src_app_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"] },
    { type: src_app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: src_app_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
UserPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/user-page/user-page.page.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-page.page.scss */ "./src/app/log-in/user-page/user-page.page.scss")).default]
    })
], UserPagePage);



/***/ })

}]);
//# sourceMappingURL=log-in-user-page-user-page-module-es2015.js.map