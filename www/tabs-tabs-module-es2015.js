(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css\"\n  />\n</head>\n<ion-tabs *ngIf=\"!isDesktop\">\n\n  <ion-tab-bar color=\"menu\" slot=\"bottom\">\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Einstellungen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\" routerDirection=\"root\">\n      <ion-icon name=\"document\"></ion-icon>\n      <ion-label>Impressum</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\">\n      <ion-icon name=\"Home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button routerLink=\"/{{ eventName }}/{{ projectsNoun }}\" routerDirection=\"root\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>{{ projectsNoun }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"!auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"log-in\"></ion-icon>\n      <ion-label>Anmeldung</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button *ngIf=\"auth.isLoggedIn\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<div *ngIf=\"isDesktop\" class=\"desktop\">\n  <ion-header id=\"navbar\">\n    <ion-toolbar color=\"menu\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"2\">\n          <img class=\"logo ion-text-left\" routerLink=\"/{{ eventName }}/Home\" src=\"../../assets/logo/Logo_light.svg\">\n        </ion-col>\n        <ion-col>\n          <div class=\"navbar\" class=\"ion-text-right\">\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Home\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Home\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/{{ projectsNoun }}\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              {{ projectsNoun }}\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"!auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Anmeldung\n            </ion-button>\n            <ion-button color=\"buttons\" *ngIf=\"auth.isLoggedIn\" fill=\"clear\" routerLink=\"/{{ eventName }}/Anmeldung\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Account\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Help\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              Hilfe\n            </ion-button>\n            <ion-button color=\"buttons\" fill=\"clear\" routerLink=\"/{{ eventName }}/Einstellungen\" routerDirection=\"root\" routerLinkActive=\"active-link\"\n              class=\"link\">\n              <ion-icon name=\"settings\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-router-outlet class=\"desktop-wrapper\"></ion-router-outlet>\n\n  <ion-item [id]=\"error.id\" class=\"animate__animated animate__fadeInDown\" *ngFor=\"let error of errors\" (click)=\"fadeOutError(error.id)\" button=\"true\" color=\"danger\">\n    <ion-label class=\"ion-text-center\" color=\"light\">\n      {{ error.desrc }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item [id]=\"alert.id\" class=\"animate__animated animate__fadeInDown\" *ngFor=\"let alert of alerts\" (click)=\"fadeOutAlert(alert.id)\" button=\"true\" color=\"success\">\n    <ion-label class=\"ion-text-center\" color=\"light\">\n      {{ alert.desrc }}\n    </ion-label>\n  </ion-item>\n\n  <!-- <ion-card color=\"danger\" *ngFor=\"let error of errors\">\n    <ion-card-header>\n      <ion-card-title>\n        <ion-fab horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n        {{ error.header }} <ion-badge (click)=\"delete_error(error.id)\" color=\"primary\">x</ion-badge>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{ error.desrc }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"success\" *ngFor=\"let alert of alerts\">\n    <ion-label (click)=\"delete_alert(alert.id)\" class=\"ion-no-margin\" slot=\"end\" color=\"text\">x</ion-label>\n    <ion-card-header>\n      <ion-card-title>\n        {{ alert.header }}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{ alert.desrc }}\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-footer color=\"menu\" class=\"footer\">\n    <span>© Paul Maier | <a routerLink=\"/{{ eventName }}/Impressum und Datenschutzerklärung\">Impressum und Datenschutz</a><br></span>\n  </ion-footer>\n</div>\n");

/***/ }),

/***/ "./src/app/authentication.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





let AuthenticationGuard = class AuthenticationGuard {
    constructor(auth, router, config) {
        this.auth = auth;
        this.router = router;
        this.config = config;
        this.isLoggedIn = false;
        this.eventName = this.config.app_config.event_name;
        this.redirectUrl = this.eventName + '/Anmeldung';
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url) {
        if (this.auth.isLoggedIn) {
            return true;
        }
        this.router.navigate([this.eventName + '/Anmeldung']);
        return false;
    }
};
AuthenticationGuard.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
];
AuthenticationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desktop ion-router-outlet {\n  margin-top: 56px;\n  margin-bottom: 56px;\n}\n.desktop .logo {\n  max-height: 40px;\n}\n.desktop ion-toolbar {\n  --background: var(--color-background);\n}\n.desktop .link {\n  --color: var(--ion-color-light);\n}\n.desktop .active-link {\n  --color: var(--ion-color-primary);\n}\n.footer {\n  width: 100%;\n  color: var(--color-text);\n  background: var(--color-background);\n  height: 56px;\n  line-height: 56px;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n}\n#navbar {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUlFO0VBQ0UscUNBQUE7QUFGSjtBQUtFO0VBQ0UsK0JBQUE7QUFISjtBQU1FO0VBQ0UsaUNBQUE7QUFKSjtBQVFBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUxKO0FBUUE7RUFDSSx5QkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wIHtcbiAgaW9uLXJvdXRlci1vdXRsZXQge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgfVxuIFxuICAubG9nbyB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxuIFxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgfVxuIFxuICAubGluayB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuIFxuICAuYWN0aXZlLWxpbmsge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xufVxuXG4jbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _screensize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screensize.service */ "./src/app/screensize.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");






let TabsPage = class TabsPage {
    constructor(screensizeService, auth, alert, config) {
        this.screensizeService = screensizeService;
        this.auth = auth;
        this.alert = alert;
        this.config = config;
        this.errors = [];
        this.alerts = [];
        this.projectsNoun = this.config.app_config.projects_noun;
        this.eventName = this.config.app_config.event_name;
        this.screensizeService.isDesktopView().subscribe(isDesktop => {
            if (this.isDesktop && !isDesktop) {
                // Reload because our routing is out of place
                window.location.reload();
            }
            this.isDesktop = isDesktop;
        });
        this.alert.update.subscribe(() => this.getAlertsAndErrors());
    }
    getAlertsAndErrors() {
        this.alerts = this.alert.alerts;
        this.errors = this.alert.errors;
    }
    fadeOutAlert(errorID) {
        const element = document.getElementById(errorID.toString());
        element.classList.add('animate__fadeOutLeft');
        element.onanimationend = () => {
            this.delete_alert(errorID);
        };
    }
    delete_alert(alertID) {
        this.alert.delete_alert(alertID);
    }
    fadeOutError(errorID) {
        const element = document.getElementById(errorID.toString());
        element.classList.add('animate__fadeOutLeft');
        element.onanimationend = () => {
            this.delete_error(errorID);
        };
    }
    delete_error(errorID) {
        this.alert.delete_error(errorID);
    }
};
TabsPage.ctorParameters = () => [
    { type: _screensize_service__WEBPACK_IMPORTED_MODULE_3__["ScreensizeService"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.guard */ "./src/app/authentication.guard.ts");
/* harmony import */ var src_config_app_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/config/app.config.json */ "./src/config/app.config.json");
var src_config_app_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/config/app.config.json */ "./src/config/app.config.json", 1);






const projectNoun = src_config_app_config_json__WEBPACK_IMPORTED_MODULE_5__.project_noun;
const projectsNoun = src_config_app_config_json__WEBPACK_IMPORTED_MODULE_5__.projects_noun;
const eventName = src_config_app_config_json__WEBPACK_IMPORTED_MODULE_5__.event_name;
const routes = [
    {
        path: eventName,
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'Help',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | help-help-module */ "help-help-module").then(__webpack_require__.bind(null, /*! ../help/help.module */ "./src/app/help/help.module.ts")).then(m => m.HelpPageModule)
                    }
                ]
            },
            {
                path: 'Einstellungen',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'Impressum und Datenschutzerklärung',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | imprint-data-protection-imprint-data-protection-module */ "imprint-data-protection-imprint-data-protection-module").then(__webpack_require__.bind(null, /*! ../imprint-data-protection/imprint-data-protection.module */ "./src/app/imprint-data-protection/imprint-data-protection.module.ts")).then(m => m.ImprintDataProtectionPageModule)
                    }
                ]
            },
            {
                path: 'Home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: projectsNoun,
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | projects-projects-module */[__webpack_require__.e("common"), __webpack_require__.e("projects-projects-module")]).then(__webpack_require__.bind(null, /*! ../projects/projects.module */ "./src/app/projects/projects.module.ts")).then(m => m.ProjectsPageModule)
                    }
                ]
            },
            {
                path: projectsNoun + '/:ProjectID',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | projects-project-detail-project-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("projects-project-detail-project-detail-module")]).then(__webpack_require__.bind(null, /*! ../projects/project-detail/project-detail.module */ "./src/app/projects/project-detail/project-detail.module.ts")).then(m => m.ProjectDetailPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-log-in-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-log-in-module")]).then(__webpack_require__.bind(null, /*! ../log-in/log-in.module */ "./src/app/log-in/log-in.module.ts")).then(m => m.LogInPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Passwort vergessen',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ../log-in/forgot-password/forgot-password.module */ "./src/app/log-in/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Passwort zurücksetzen/:ResetToken',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-reset-password-reset-password-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ../log-in/reset-password/reset-password.module */ "./src/app/log-in/reset-password/reset-password.module.ts")).then(m => m.ResetPasswordPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Admin Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-generation-admin-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-generation-admin-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-generation/admin-generation.module */ "./src/app/log-in/admin-generation/admin-generation.module.ts")).then(m => m.AdminGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/' + projectNoun + 'leiter Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-generation-leader-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-generation-leader-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-generation/leader-generation.module */ "./src/app/log-in/leader-generation/leader-generation.module.ts")).then(m => m.LeaderGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Schüler Registration/:SignUpToken',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-generation-user-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-generation-user-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-generation/user-generation.module */ "./src/app/log-in/user-generation/user-generation.module.ts")).then(m => m.UserGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Anmeldung/Schüler Registration',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-generation-user-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-generation-user-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-generation/user-generation.module */ "./src/app/log-in/user-generation/user-generation.module.ts")).then(m => m.UserGenerationPageModule)
                    }
                ]
            },
            {
                path: projectNoun + 'leiter/:LeaderName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-leader-page-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-leader-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/leader-page.module */ "./src/app/log-in/leader-page/leader-page.module.ts")).then(m => m.LeaderPagePageModule)
                    }
                ]
            },
            {
                path: projectNoun + 'leiter/:LeaderName/' + projectNoun + ' erstellen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-leader-page-project-generation-project-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-project-generation-project-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/project-generation/project-generation.module */ "./src/app/log-in/leader-page/project-generation/project-generation.module.ts")).then(m => m.ProjectGenerationPageModule)
                    }
                ]
            },
            {
                path: projectNoun + 'leiter/:LeaderName/' + projectNoun + ' verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-leader-page-project-administration-project-administration-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-project-administration-project-administration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/project-administration/project-administration.module */ "./src/app/log-in/leader-page/project-administration/project-administration.module.ts")).then(m => m.ProjectAdministrationPageModule)
                    }
                ]
            },
            {
                path: projectNoun + 'leiter/:LeaderName/' + projectNoun + ' verwalten/' + projectNoun + ' bearbeiten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-leader-page-project-administration-project-edit-project-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-project-administration-project-edit-project-edit-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/project-administration/project-edit/project-edit.module */ "./src/app/log-in/leader-page/project-administration/project-edit/project-edit.module.ts")).then(m => m.ProjectEditPageModule)
                    }
                ]
            },
            {
                path: projectNoun + 'leiter/:LeaderName/Nachricht senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-leader-page-messages-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-leader-page-messages-messages-module")]).then(__webpack_require__.bind(null, /*! ../log-in/leader-page/messages/messages.module */ "./src/app/log-in/leader-page/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-user-page-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-user-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/user-page.module */ "./src/app/log-in/user-page/user-page.module.ts")).then(m => m.UserPagePageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Anmeldung',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-registration-registration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/registration/registration.module */ "./src/app/log-in/user-page/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Tauschanfrage senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-exchange-request-exchange-request-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-exchange-request-exchange-request-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/exchange-request/exchange-request.module */ "./src/app/log-in/user-page/exchange-request/exchange-request.module.ts")).then(m => m.ExchangeRequestPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Tauschanfrage bestätigen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-exchange-confirm-exchange-confirm-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-exchange-confirm-exchange-confirm-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/exchange-confirm/exchange-confirm.module */ "./src/app/log-in/user-page/exchange-confirm/exchange-confirm.module.ts")).then(m => m.ExchangeConfirmPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/' + projectNoun,
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-project-project-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-project-project-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/project/project.module */ "./src/app/log-in/user-page/project/project.module.ts")).then(m => m.ProjectPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/' + projectNoun + ' erstellen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-project-generation-project-generation-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-project-generation-project-generation-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/project-generation/project-generation.module */ "./src/app/log-in/user-page/project-generation/project-generation.module.ts")).then(m => m.ProjectGenerationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Assistenten verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-user-page-promote-students-promote-students-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-promote-students-promote-students-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/promote-students/promote-students.module */ "./src/app/log-in/user-page/promote-students/promote-students.module.ts")).then(m => m.PromoteStudentsPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/' + projectNoun + ' verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-user-page-project-administration-project-administration-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-project-administration-project-administration-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/project-administration/project-administration.module */ "./src/app/log-in/user-page/project-administration/project-administration.module.ts")).then(m => m.ProjectAdministrationPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/' + projectNoun + ' verwalten/' + projectNoun + ' bearbeiten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-user-page-project-administration-project-edit-project-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-project-administration-project-edit-project-edit-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/project-administration/project-edit/project-edit.module */ "./src/app/log-in/user-page/project-administration/project-edit/project-edit.module.ts")).then(m => m.ProjectEditPageModule)
                    }
                ]
            },
            {
                path: 'Schüler/:ParticipantName/Nachricht senden',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-user-page-messages-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-user-page-messages-messages-module")]).then(__webpack_require__.bind(null, /*! ../log-in/user-page/messages/messages.module */ "./src/app/log-in/user-page/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-page-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-page-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-page.module */ "./src/app/log-in/admin-page/admin-page.module.ts")).then(m => m.AdminPagePageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/' + projectsNoun,
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-projects-admin-projects-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-projects-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-projects/admin-projects.module */ "./src/app/log-in/admin-page/admin-projects/admin-projects.module.ts")).then(m => m.AdminProjectsPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Tauschanfragen',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-exchanges-admin-exchanges-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchanges-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-exchanges/admin-exchanges.module */ "./src/app/log-in/admin-page/admin-exchanges/admin-exchanges.module.ts")).then(m => m.AdminExchangesPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/' + projectsNoun + '/:ProjectID',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-projects-admin-project-detail-admin-project-detail-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module */ "./src/app/log-in/admin-page/admin-projects/admin-project-detail/admin-project-detail.module.ts")).then(m => m.AdminProjectDetailPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Tauschanfragen/:ExchangeID',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-exchanges-admin-exchange-detail-admin-exchange-detail-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module */ "./src/app/log-in/admin-page/admin-exchanges/admin-exchange-detail/admin-exchange-detail.module.ts")).then(m => m.AdminExchangeDetailPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Zeitplan verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-schedule-admin-schedule-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-schedule-admin-schedule-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-schedule/admin-schedule.module */ "./src/app/log-in/admin-page/admin-schedule/admin-schedule.module.ts")).then(m => m.AdminSchedulePageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/Schüler und ' + projectNoun + 'leiter verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => 
                        // tslint:disable-next-line: max-line-length
                        Promise.all(/*! import() | log-in-admin-page-admin-students-leaders-admin-students-leaders-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-students-leaders-admin-students-leaders-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-students-leaders/admin-students-leaders.module */ "./src/app/log-in/admin-page/admin-students-leaders/admin-students-leaders.module.ts")).then(m => m.AdminStudentsLeadersPageModule)
                    }
                ]
            },
            {
                path: 'Admin/:AdminName/App verwalten',
                canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | log-in-admin-page-admin-logs-admin-logs-module */[__webpack_require__.e("common"), __webpack_require__.e("log-in-admin-page-admin-logs-admin-logs-module")]).then(__webpack_require__.bind(null, /*! ../log-in/admin-page/admin-logs/admin-logs.module */ "./src/app/log-in/admin-page/admin-logs/admin-logs.module.ts")).then(m => m.AdminLogsPageModule)
                    }
                ]
            },
            {
                path: 'E-Mail verifizieren/:Status',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | log-in-verify-email-verify-email-module */ "log-in-verify-email-verify-email-module").then(__webpack_require__.bind(null, /*! ../log-in/verify-email/verify-email.module */ "./src/app/log-in/verify-email/verify-email.module.ts")).then(m => m.VerifyEmailPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/' + eventName + '/Home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/' + eventName + '/Home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map