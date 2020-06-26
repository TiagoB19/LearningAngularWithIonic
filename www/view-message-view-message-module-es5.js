function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-message-view-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewMessageViewMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"message\">\n  <ion-item>\n    <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\">\n      <h2>\n        {{ message.fromName }}\n        <span class=\"date\">\n          <ion-note>{{ message.date }}</ion-note>\n        </span>\n      </h2>\n      <h3>To: <ion-note>Me</ion-note></h3>\n    </ion-label>\n  </ion-item>\n  \n  <div class=\"ion-padding\">\n    <h1>{{ message.subject }}</h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/view-message/view-message-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/view-message/view-message-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewMessagePageRoutingModule */

  /***/
  function srcAppViewMessageViewMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewMessagePageRoutingModule", function () {
      return ViewMessagePageRoutingModule;
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


    var _view_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-message.page */
    "./src/app/view-message/view-message.page.ts");

    var routes = [{
      path: '',
      component: _view_message_page__WEBPACK_IMPORTED_MODULE_3__["ViewMessagePage"]
    }];

    var ViewMessagePageRoutingModule = function ViewMessagePageRoutingModule() {
      _classCallCheck(this, ViewMessagePageRoutingModule);
    };

    ViewMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewMessagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-message/view-message.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-message/view-message.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewMessagePageModule */

  /***/
  function srcAppViewMessageViewMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewMessagePageModule", function () {
      return ViewMessagePageModule;
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


    var _view_message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./view-message.page */
    "./src/app/view-message/view-message.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-message-routing.module */
    "./src/app/view-message/view-message-routing.module.ts");

    var ViewMessagePageModule = function ViewMessagePageModule() {
      _classCallCheck(this, ViewMessagePageModule);
    };

    ViewMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewMessagePageRoutingModule"]],
      declarations: [_view_message_page__WEBPACK_IMPORTED_MODULE_4__["ViewMessagePage"]]
    })], ViewMessagePageModule);
    /***/
  },

  /***/
  "./src/app/view-message/view-message.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/view-message/view-message.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewMessageViewMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  font-size: 42px;\n  margin-right: 8px;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 12px;\n  font-weight: normal;\n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 22px;\n}\n\np {\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NheW15bmFtZS9EZXNrdG9wL2lvbmljMy9zcmMvYXBwL3ZpZXctbWVzc2FnZS92aWV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LW1lc3NhZ2Uvdmlldy1tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlldy1tZXNzYWdlL3ZpZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWl0ZW0gLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMjJweDtcbn0iLCJpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWl0ZW0gLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-message/view-message.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/view-message/view-message.page.ts ***!
    \***************************************************/

  /*! exports provided: ViewMessagePage */

  /***/
  function srcAppViewMessageViewMessagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewMessagePage", function () {
      return ViewMessagePage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var ViewMessagePage = /*#__PURE__*/function () {
      function ViewMessagePage(data, activatedRoute) {
        _classCallCheck(this, ViewMessagePage);

        this.data = data;
        this.activatedRoute = activatedRoute;
      }

      _createClass(ViewMessagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.message = this.data.getMessageById(parseInt(id, 10));
        }
      }, {
        key: "getBackButtonText",
        value: function getBackButtonText() {
          var win = window;
          var mode = win && win.Ionic && win.Ionic.mode;
          return mode === 'ios' ? 'Inbox' : '';
        }
      }]);

      return ViewMessagePage;
    }();

    ViewMessagePage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ViewMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-message.page.scss */
      "./src/app/view-message/view-message.page.scss"))["default"]]
    })], ViewMessagePage);
    /***/
  }
}]);
//# sourceMappingURL=view-message-view-message-module-es5.js.map