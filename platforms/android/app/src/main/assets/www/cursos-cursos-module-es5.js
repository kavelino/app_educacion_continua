(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cursos-cursos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCursosCursosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"toolhead\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mis Cursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/cursos/cursos-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/cursos/cursos-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: CursosPageRoutingModule */

    /***/
    function srcAppCursosCursosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPageRoutingModule", function () {
        return CursosPageRoutingModule;
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


      var _cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cursos.page */
      "./src/app/cursos/cursos.page.ts");

      var routes = [{
        path: '',
        component: _cursos_page__WEBPACK_IMPORTED_MODULE_3__["CursosPage"]
      }];

      var CursosPageRoutingModule = function CursosPageRoutingModule() {
        _classCallCheck(this, CursosPageRoutingModule);
      };

      CursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CursosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/cursos/cursos.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/cursos/cursos.module.ts ***!
      \*****************************************/

    /*! exports provided: CursosPageModule */

    /***/
    function srcAppCursosCursosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPageModule", function () {
        return CursosPageModule;
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


      var _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cursos-routing.module */
      "./src/app/cursos/cursos-routing.module.ts");
      /* harmony import */


      var _cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cursos.page */
      "./src/app/cursos/cursos.page.ts");

      var CursosPageModule = function CursosPageModule() {
        _classCallCheck(this, CursosPageModule);
      };

      CursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosPageRoutingModule"]],
        declarations: [_cursos_page__WEBPACK_IMPORTED_MODULE_6__["CursosPage"]]
      })], CursosPageModule);
      /***/
    },

    /***/
    "./src/app/cursos/cursos.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/cursos/cursos.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppCursosCursosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/cursos/cursos.page.ts":
    /*!***************************************!*\
      !*** ./src/app/cursos/cursos.page.ts ***!
      \***************************************/

    /*! exports provided: CursosPage */

    /***/
    function srcAppCursosCursosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPage", function () {
        return CursosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CursosPage = /*#__PURE__*/function () {
        function CursosPage() {
          _classCallCheck(this, CursosPage);
        }

        _createClass(CursosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CursosPage;
      }();

      CursosPage.ctorParameters = function () {
        return [];
      };

      CursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cursos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cursos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cursos/cursos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cursos.page.scss */
        "./src/app/cursos/cursos.page.scss"))["default"]]
      })], CursosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cursos-cursos-module-es5.js.map