(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-admin-page-admin-tokens-admin-tokens-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLogInAdminPageAdminTokensAdminTokensPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n</ion-header>\n\n<ion-content color=\"background\">\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-tokens/admin-tokens-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-tokens/admin-tokens-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AdminTokensPageRoutingModule */

    /***/
    function srcAppLogInAdminPageAdminTokensAdminTokensRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminTokensPageRoutingModule", function () {
        return AdminTokensPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _admin_tokens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-tokens.page */
      "./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.ts");

      var routes = [{
        path: '',
        component: _admin_tokens_page__WEBPACK_IMPORTED_MODULE_3__["AdminTokensPage"]
      }];

      var AdminTokensPageRoutingModule = function AdminTokensPageRoutingModule() {
        _classCallCheck(this, AdminTokensPageRoutingModule);
      };

      AdminTokensPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminTokensPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-tokens/admin-tokens.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-tokens/admin-tokens.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminTokensPageModule */

    /***/
    function srcAppLogInAdminPageAdminTokensAdminTokensModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminTokensPageModule", function () {
        return AdminTokensPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _admin_tokens_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-tokens-routing.module */
      "./src/app/log-in/admin-page/admin-tokens/admin-tokens-routing.module.ts");
      /* harmony import */


      var _admin_tokens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-tokens.page */
      "./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.ts");

      var AdminTokensPageModule = function AdminTokensPageModule() {
        _classCallCheck(this, AdminTokensPageModule);
      };

      AdminTokensPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_tokens_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminTokensPageRoutingModule"]],
        declarations: [_admin_tokens_page__WEBPACK_IMPORTED_MODULE_6__["AdminTokensPage"]]
      })], AdminTokensPageModule);
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLogInAdminPageAdminTokensAdminTokensPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".width160 {\n  max-width: 160;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2FkbWluLXBhZ2UvYWRtaW4tdG9rZW5zL2FkbWluLXRva2Vucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2ctaW4vYWRtaW4tcGFnZS9hZG1pbi10b2tlbnMvYWRtaW4tdG9rZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aDE2MCB7XHJcbiAgICBtYXgtd2lkdGg6IDE2MDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.ts ***!
      \*********************************************************************/

    /*! exports provided: AdminTokensPage */

    /***/
    function srcAppLogInAdminPageAdminTokensAdminTokensPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminTokensPage", function () {
        return AdminTokensPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdminTokensPage = /*#__PURE__*/function () {
        function AdminTokensPage() {
          _classCallCheck(this, AdminTokensPage);
        }

        _createClass(AdminTokensPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /*this.text = this.config.get_content('admin-tokens');
                  this.activatedRoute.paramMap.subscribe(paramMap => {
              this.adminUrl = paramMap.get('AdminName');
            });
            this.getTokens();
                  this.adminsService.update.subscribe(() => this.getTokens());
            */
          }
        }]);

        return AdminTokensPage;
      }();

      AdminTokensPage.ctorParameters = function () {
        return [];
      };

      AdminTokensPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-tokens',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-tokens.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-tokens.page.scss */
        "./src/app/log-in/admin-page/admin-tokens/admin-tokens.page.scss"))["default"]]
      })], AdminTokensPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=log-in-admin-page-admin-tokens-admin-tokens-module-es5.js.map