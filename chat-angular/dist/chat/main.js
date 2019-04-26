(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    background: rgb(1, 29, 51);\n    border-color: transparent;\n    color: #fff;\n    cursor: pointer;\n}\n \nh1 {\n  font-size: 2em;\n  color: #999;\n  margin-bottom: 0;\n}\n \nh3{\n  font-size: 1.5em;\n  margin-top: 0;\n  padding-top: 0;\n}\n \nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n \nnav a:visited, a:link {\n  color: #607d8b;\n}\n \nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n \nnav a.active {\n  color: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMSwgMjksIDUxKTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiBcbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDN7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome Admin!\n  </h1>\n  <p>\n    <button (click)=\"logout()\">\n      Logout\n    </button>\n  </p>\n \n <nav>\n  <a (click)=\"toggleEditor('user')\">User Details</a>\n  <a (click)=\"toggleEditor('groups')\">Group Details</a>\n  <a (click)=\"toggleEditor('message')\">Message Details</a>\n  <a (click)=\"toggleEditor('chatkit')\">Chat</a>\n </nav>\n<app-user *ngIf=\"showUser\"></app-user>\n<app-groups *ngIf=\"showGroups\"></app-groups>\n<app-message *ngIf=\"showMessage\"></app-message>\n<app-message *ngIf=\"showChatkit\"></app-message>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
        this.editor = 'user';
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.login = function () {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/users');
        this.router.navigateByUrl('/groups');
        this.router.navigateByUrl('/message');
    };
    AdminComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    Object.defineProperty(AdminComponent.prototype, "showUser", {
        get: function () {
            return this.editor === 'user';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "showGroups", {
        get: function () {
            return this.editor === 'groups';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "showMessage", {
        get: function () {
            return this.editor === 'message';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "showChatkit", {
        get: function () {
            return this.editor === 'chatkit';
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.toggleEditor = function (type) {
        this.editor = type;
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");









// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login'},
//    { path: 'login', component: LoginComponent },
//    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
// //    { path: 'allusers', component: UserComponent, canActivate: [AuthGuard] },
// //    { path: 'allgroups', component: GroupsComponent, canActivate: [AuthGuard] },
// //    { path: 'allmessages', component: MessageComponent, canActivate: [AuthGuard] },
// ];
var routes = [
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            // { path: 'admin', component: AdminComponent },
            { path: 'allusers', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
            { path: 'allgroups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"] },
            { path: 'allmessages', component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"] },
        ]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] // {5}
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*/* AppComponent's private CSS styles \nh1 {\n  font-size: 2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh3{\n  font-size: 1.5em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.active {\n  color: #039be5;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE0QkUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzIFxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oM3tcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59Ki8iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n\n<!--  <nav>\n  <a (click)=\"toggleEditor('user')\">User Details</a>\n  <a (click)=\"toggleEditor('groups')\">Group Details</a>\n  <a (click)=\"toggleEditor('message')\">Message Details</a>\n </nav>\n </div>\n <app-login></app-login>\n <app-user *ngIf=\"showUser\"></app-user>\n<app-groups *ngIf=\"showGroups\"></app-groups>\n<app-message *ngIf=\"showMessage\"></app-message> --> \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//export type EditorType = 'user'|'groups'|'message';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat';
        // editor: EditorType = 'user';
        // get showUser() {
        //   return this.editor === 'user';
        // }
        // get showGroups() {
        //   return this.editor === 'groups';
        // }
        // get showMessage() {
        //   return this.editor === 'message';
        // }
        // toggleEditor(type: EditorType) {
        //   this.editor = type;
        // }
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _chatkit_chatkit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chatkit/chatkit.component */ "./src/app/chatkit/chatkit.component.ts");







//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _chatkit_chatkit_component__WEBPACK_IMPORTED_MODULE_12__["ChatkitComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // // Remove it when a real server is ready to receive requests.
                // HttpClientInMemoryWebApiModule.forRoot(
                // InMemoryDataService, { dataEncapsulation: false }
                // )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (userInfo) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('ACCESS_TOKEN');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chatkit/chatkit.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatkit/chatkit.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .App {\n      width: 100%;\n      height: 100vh;\n      overflow: hidden;\n      display: flex;\n      border: 1px solid #ccc;\n      color: #333;\n      font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n      margin: 0;\n    }\n\n    h4 {\n      margin-bottom: 10px;\n    }\n\n    ul {\n      list-style: none;\n    }\n\n    form {\n      margin-bottom: 0;\n    }\n\n    input[type=\"text\"] {\n      color: #333;\n      border-radius: 0;\n    }\n\n    .sidebar {\n      flex-basis: 15%;\n      flex-shrink: 0;\n      flex-grow: 0;\n      background-color: #300d4f;\n      color: #fff;\n      padding: 10px 10px;\n    }\n\n    .left-sidebar section {\n      margin-bottom: 20px;\n    }\n\n    .left-sidebar {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .room-members {\n      flex-grow: 1;\n    }\n\n    .right-sidebar .room {\n      display: flex;\n    }\n\n    .newUser-input {\n      margin-bottom: 0;\n    }\n\n    .right-sidebar {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      padding-left: 0;\n      padding-right: 0;\n    }\n\n    .room {\n      padding: 5px 10px;\n      cursor: pointer;\n    }\n\n    .room:hover {\n      background-color: goldenrod;\n      color: #333;\n    }\n\n    .room.active {\n      background-color: #11D771;\n      color: #333;\n    }\n\n    .room-name {\n      display: inline-block;\n      margin-left: 10px;\n    }\n\n    .user-list li {\n      margin-bottom: 10px;\n      font-size: 16px;\n      display: flex;\n      align-items: center;\n    }\n\n    .presence {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      background-color: #fff;\n      margin-right: 10px;\n      border-radius: 50%;\n    }\n\n    .presence.online {\n      background-color: green;\n    }\n\n    .chat-window {\n      display: flex;\n      flex-grow: 1;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    .chat-header, .chat-footer {\n      display: flex;\n      align-items: center;\n      flex-shrink: 0;\n    }\n\n    .chat-header {\n      border-bottom: 1px solid #ccc;\n      padding: 10px 20px;\n      height: 40px;\n    }\n\n    .chat-header h4 {\n      margin-bottom: 0;\n    }\n\n    .chat-session {\n      flex-grow: 1;\n      padding: 10px 20px;\n      overflow-y: auto;\n    }\n\n    .message-list {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    .user-message {\n      margin-top: 10px;\n    }\n\n    .user-message span {\n      display: block;\n    }\n\n    .user-id {\n      font-weight: bold;\n    }\n\n    .chat-footer {\n      padding: 0;\n      border-top: 1px solid #ccc;\n      height: 50px;\n    }\n\n    .message-form {\n      width: 100%;\n      height: 100%;\n    }\n\n    .message-input {\n      width: 100%;\n      border: none;\n      margin-bottom: 0;\n      height: 100%;\n    }\n\n    .message-input:focus {\n      border: none;\n    }\n\n    .send-message {\n      background-color: #300d4f;\n      color: #fff;\n      border: 1px solid #300d4f;\n      padding: 10px;\n    }\n\n    .create-room {\n      padding: 0 10px;\n    }\n\n    .create-room button {\n      display: block;\n    }\n\n    input[type=\"checkbox\"] {\n      margin-bottom: 0;\n      display: inline-block;\n      margin-right: 5px;\n    }\n\n    .is-private {\n      display: flex;\n      align-items: center;\n    }\n\n    .user-rooms h4, .joinable-rooms h4 {\n      padding-left: 10px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGtpdC9jaGF0a2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7TUFDSyxXQUFXO01BQ1gsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCx3SEFBd0g7TUFDeEgsU0FBUztJQUNYOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsV0FBVztNQUNYLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCO01BQzlCLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLDJCQUEyQjtNQUMzQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztJQUNiOztJQUVBO01BQ0UscUJBQXFCO01BQ3JCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsYUFBYTtNQUNiLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UsYUFBYTtNQUNiLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsOEJBQThCO0lBQ2hDOztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsNkJBQTZCO01BQzdCLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7TUFDMUIsWUFBWTtJQUNkOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFlBQVk7SUFDZDs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdGtpdC9jaGF0a2l0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLkFwcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgZmxleC1iYXNpczogMTUlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAwZDRmO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgLmxlZnQtc2lkZWJhciBzZWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmxlZnQtc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucm9vbS1tZW1iZXJzIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAucmlnaHQtc2lkZWJhciAucm9vbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5uZXdVc2VyLWlucHV0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnJpZ2h0LXNpZGViYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5yb29tIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5yb29tOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5yb29tLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFENzcxO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLnJvb20tbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAudXNlci1saXN0IGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJlc2VuY2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC5wcmVzZW5jZS5vbmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgLmNoYXQtd2luZG93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5jaGF0LWhlYWRlciwgLmNoYXQtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuXG4gICAgLmNoYXQtaGVhZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIC5jaGF0LWhlYWRlciBoNCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5jaGF0LXNlc3Npb24ge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAubWVzc2FnZS1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAudXNlci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLnVzZXItbWVzc2FnZSBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC51c2VyLWlkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jaGF0LWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtaW5wdXQ6Zm9jdXMge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5zZW5kLW1lc3NhZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMGQ0ZjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwMGQ0ZjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1yb29tIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG5cbiAgICAuY3JlYXRlLXJvb20gYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLmlzLXByaXZhdGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItcm9vbXMgaDQsIC5qb2luYWJsZS1yb29tcyBoNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/chatkit/chatkit.component.html":
/*!************************************************!*\
  !*** ./src/app/chatkit/chatkit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\n  <aside class=\"sidebar left-sidebar\">\n    <section *ngIf=\"!currentUser.id\" class=\"join-chat\">\n      <h4>Join Chat</h4>\n      <form (ngSubmit)=\"addUser()\">\n        <input placeholder=\"Enter your username\" type=\"text\" name=\"userid\" [(ngModel)]=\"userId\" />\n      </form>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"room-members\">\n      <h4>Room Users</h4>\n      <ul class=\"user-list\">\n        <li *ngFor=\"let user of roomUsers\">\n          <span class=\"presence {{ user.presence.state }}\"></span>\n          <span>{{ user.name }}</span>\n        </li>\n      </ul>\n    </section>\n    <form *ngIf=\"currentRoom.isPrivate\" (ngSubmit)=\"addUserToRoom()\">\n      <label for=\"user-name\">Add user to {{ currentRoom.name }}</label>\n      <input type=\"text\" class=\"newUser-input\" [(ngModel)]=\"newUser\" name=\"user-name\" id=\"user-name\" placeholder=\"Enter username\">\n    </form>\n  </aside>\n\n  <main class=\"chat-window\">\n    <header class=\"chat-header\">\n      <h4 *ngIf=\"!currentRoom.name; else roomName\">Chat</h4>\n      <ng-template #roomName>\n        <h4>{{ currentRoom.name }}</h4>\n      </ng-template>\n      <span class=\"participants\"></span>\n    </header>\n    <section class=\"chat-session\">\n      <ul class=\"message-list\">\n        <li class=\"user-message\" *ngFor=\"let message of messages\">\n          <span class=\"user-id\">{{ message.senderId }}</span>\n          <span>{{ message.text }}</span>\n        </li>\n      </ul>\n    </section>\n    <footer *ngIf=\"currentUser.id\" class=\"chat-footer\">\n      <form class=\"message-form\" (ngSubmit)='sendMessage()'>\n        <input class=\"message-input\" placeholder=\"Type a message. Hit Enter to send\" type=\"text\" name=\"message\" [(ngModel)]=\"newMessage\" />\n      </form>\n    </footer>\n  </main>\n\n  <aside class=\"sidebar right-sidebar\">\n    <section class=\"room-section\">\n      <section *ngIf=\"currentUser.id\" class=\"user-rooms\">\n          <h4>Rooms</h4>\n          <ul class=\"room-list\">\n            <li *ngFor=\"let room of userRooms\">\n              <div [class.active]=\"room.id==currentRoom.id\" (click)=\"connectToRoom(room.id)\" class=\"room\">\n                <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                <ng-template #publicRoom>\n                  <span>🌐</span>\n                </ng-template>\n                <span class=\"room-name\">{{ room.name }}</span>\n              </div>\n            </li>\n          </ul>\n        </section>\n        <section *ngIf=\"joinableRooms.length > 0\" class=\"joinable-rooms\">\n            <h4>Joinable rooms</h4>\n            <ul class=\"room-list\">\n                <li *ngFor=\"let room of joinableRooms\">\n                  <div class=\"room\" (click)=\"joinRoom(room.id)\">\n                    <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                    <ng-template #publicRoom>\n                      <span>🌐</span>\n                    </ng-template>\n                    <span class=\"room-name\">{{ room.name }}</span>\n                  </div>\n                </li>\n              </ul>\n        </section>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"create-room\">\n      <form (ngSubmit)=\"createRoom()\">\n        <input type=\"text\" [(ngModel)]=\"newRoom.name\" name=\"room-name\" id=\"room-name\" placeholder=\"Create a room\">\n        <label for=\"is-private\">\n            <input type=\"checkbox\" [(ngModel)]=\"newRoom.isPrivate\" name=\"is-private\" id=\"is-private\">\n            <span>Is this room private?</span>\n        </label>\n      </form>\n    </section>\n  </aside>\n</div>"

/***/ }),

/***/ "./src/app/chatkit/chatkit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatkit/chatkit.component.ts ***!
  \**********************************************/
/*! exports provided: ChatkitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatkitComponent", function() { return ChatkitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var ChatkitComponent = /** @class */ (function () {
    function ChatkitComponent() {
        this.userId = '';
        this.currentUser = {};
        this.messages = [];
        this.currentRoom = {};
        this.roomUsers = [];
        this.userRooms = [];
        this.newMessage = '';
        this.newRoom = {
            name: '',
            isPrivate: false
        };
        this.joinableRooms = [];
        this.newUser = '';
    }
    ChatkitComponent.prototype.addUserToRoom = function () {
        var _this = this;
        var _a = this, newUser = _a.newUser, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        currentUser.addUserToRoom({
            userId: newUser,
            roomId: currentRoom.id
        })
            .then(function (currentRoom) {
            _this.roomUsers = currentRoom.users;
        })
            .catch(function (err) {
            console.log("Error adding user: " + err);
        });
        this.newUser = '';
    };
    ChatkitComponent.prototype.createRoom = function () {
        var _this = this;
        var _a = this, _b = _a.newRoom, name = _b.name, isPrivate = _b.isPrivate, currentUser = _a.currentUser;
        if (name.trim() === '')
            return;
        currentUser.createRoom({
            name: name,
            private: isPrivate,
        }).then(function (room) {
            _this.connectToRoom(room.id);
            _this.newRoom = {
                name: '',
                isPrivate: false,
            };
        })
            .catch(function (err) {
            console.log("Error creating room " + err);
        });
    };
    ChatkitComponent.prototype.getJoinableRooms = function () {
        var _this = this;
        var currentUser = this.currentUser;
        currentUser.getJoinableRooms()
            .then(function (rooms) {
            _this.joinableRooms = rooms;
        })
            .catch(function (err) {
            console.log("Error getting joinable rooms: " + err);
        });
    };
    ChatkitComponent.prototype.joinRoom = function (id) {
        var currentUser = this.currentUser;
        currentUser.joinRoom({ roomId: id })
            .catch(function (err) {
            console.log("Error joining room " + id + ": " + err);
        });
    };
    ChatkitComponent.prototype.connectToRoom = function (id) {
        var _this = this;
        this.messages = [];
        var currentUser = this.currentUser;
        currentUser.subscribeToRoom({
            roomId: "" + id,
            messageLimit: 100,
            hooks: {
                onMessage: function (message) {
                    _this.messages.push(message);
                },
                onPresenceChanged: function () {
                    _this.roomUsers = _this.currentRoom.users.sort(function (a) {
                        if (a.presence.state === 'online')
                            return -1;
                        return 1;
                    });
                },
            },
        })
            .then(function (currentRoom) {
            _this.currentRoom = currentRoom;
            _this.roomUsers = currentRoom.users;
            _this.userRooms = currentUser.rooms;
        });
    };
    ChatkitComponent.prototype.sendMessage = function () {
        var _a = this, newMessage = _a.newMessage, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        if (newMessage.trim() === '')
            return;
        currentUser.sendMessage({
            text: newMessage,
            roomId: "" + currentRoom.id,
        });
        this.newMessage = '';
    };
    ChatkitComponent.prototype.addUser = function () {
        var _this = this;
        var userId = this.userId;
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:5200/users', { userId: userId })
            .then(function () {
            var tokenProvider = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.TokenProvider({
                url: 'http://localhost:5200/authenticate'
            });
            var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.ChatManager({
                instanceLocator: '<your chatkit instance locator>',
                userId: userId,
                tokenProvider: tokenProvider
            });
            return chatManager
                .connect({
                onAddedToRoom: function (room) {
                    console.log("Added to room " + room.name);
                    _this.userRooms.push(room);
                    _this.getJoinableRooms();
                },
            })
                .then(function (currentUser) {
                _this.currentUser = currentUser;
                _this.connectToRoom('<your chatkit room id>');
                _this.getJoinableRooms();
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    ChatkitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatkit',
            template: __webpack_require__(/*! ./chatkit.component.html */ "./src/app/chatkit/chatkit.component.html"),
            styles: [__webpack_require__(/*! ./chatkit.component.css */ "./src/app/chatkit/chatkit.component.css")]
        })
    ], ChatkitComponent);
    return ChatkitComponent;
}());



/***/ }),

/***/ "./src/app/groups.service.ts":
/*!***********************************!*\
  !*** ./src/app/groups.service.ts ***!
  \***********************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var GroupsService = /** @class */ (function () {
    function GroupsService(http) {
        this.http = http;
        this.groupsUrl = 'http://localhost:8080';
    }
    GroupsService.prototype.getGroups = function () {
        return this.http.get(this.groupsUrl + '/allgroups');
    };
    GroupsService.prototype.addGroups = function (group) {
        return this.http.post(this.groupsUrl + '/addgroup', group, httpOptions);
    };
    GroupsService.prototype.deleteGroups = function (group) {
        var groupid = typeof group === 'number' ? group : group.groupid;
        var url = this.groupsUrl + '/deletegroup' + "/" + groupid;
        return this.http.delete(url, httpOptions);
    };
    GroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupsService);
    return GroupsService;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.user {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\nh2{\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10;\n  padding-top: 10;\n}\n.userli {\n  cursor: pointer;\n  position: relative;\n  left: 10;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.user li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.user li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.user .text {\n  position: relative;\n  top: -3px;\n}\n.user .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG59XG5oMntcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi10b3A6IDEwO1xuICBwYWRkaW5nLXRvcDogMTA7XG59XG4udXNlcmxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnVzZXIgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi51c2VyIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG4udXNlciAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLnVzZXIgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Groups</h2>\n\n<ul>\n <li *ngFor=\"let group of groups\"\n   [class.selected]=\"group === selectedGroups\"\n  (click)=\"onSelect(group)\">\n   <a routerLink=\"/groups\"></a>\n   <span class=\"badge\">User ID: {{group.userid}} </span> <span>Group ID: {{group.groupid}}</span>Group Name: {{group.groupname}}\n   <button (click)=\"delete(group)\">Delete Group</button>\n </li>\n</ul>\n \n<div>\n  <label>\n    User ID:\n    <input #groupUserid />\n    Group ID:\n    <input #groupGroupid />\n    Name:\n    <input #groupGroupname />\n  </label>\n\n    \n  <button (click)=\"add(groupUserid.value,groupGroupid.value,groupGroupname.value);\">\n        Add Group</button>\n  </div>\n\n<div *ngIf=\"selectedGroups\">\n\n  <div>\n    <label> user id:\n      <input [(ngModel)]=\"selectedGroups.userid\" placeholder=\"userid\"/>\n      \n    </label>\n  </div>\n\n\n  <div>\n    <label>group id:\n      <input [(ngModel)]=\"selectedGroups.groupid\" placeholder=\"groupid\"/>\n    </label>\n  </div>\n\n\n <div>\n    <label>group name:\n      <input [(ngModel)]=\"selectedGroups.groupname\" placeholder=\"groupname\"/>\n    </label>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groups.service */ "./src/app/groups.service.ts");



var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(groupsService) {
        this.groupsService = groupsService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getGroups();
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupsService.getGroups()
            .subscribe(function (groups) { return _this.groups = groups; });
    };
    GroupsComponent.prototype.add = function (userid, groupid, groupname) {
        var _this = this;
        groupname = groupname.trim();
        if (!groupname) {
            return;
        }
        this.groupsService.addGroups({ userid: userid, groupid: groupid, groupname: groupname })
            .subscribe(function (group) {
            _this.groups.push(group);
        });
    };
    GroupsComponent.prototype.delete = function (group) {
        this.groups = this.groups.filter(function (g) { return g !== group; });
        this.groupsService.deleteGroups(group).subscribe;
    };
    GroupsComponent.prototype.onSelect = function (group) {
        this.selectedGroups = group;
    };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n\n\n.login {\n  width: 400px;\n  margin: 16px auto;\n  font-size: 16px;\n}\n\n\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: rgb(15, 66, 107);\n}\n\n\n.login-header {\n  background: rgb(12, 77, 129);\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n\n.login-container {\n  background: #ebebeb;\n  padding: 12px;\n}\n\n\n.login p {\n  padding: 12px;\n}\n\n\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n\n\n.login input[type=\"email\"],\n.login input[type=\"password\"] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n\n\n.login input[type=\"email\"]:focus,\n.login input[type=\"password\"]:focus {\n  border-color: #888;\n}\n\n\n.login input[type=\"submit\"] {\n  background: rgb(1, 29, 51);\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n}\n\n\n.login input[type=\"submit\"]:hover {\n  background: #17c;\n}\n\n\n.login input[type=\"submit\"]:focus {\n  border-color: #05a;\n}\n\n\n.has-error input[type=\"email\"],\n.has-error input[type=\"password\"] {\n    border-color: rgb(216, 12, 12);\n    color: rgb(230, 14, 14);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBc0U7OztBQUd0RTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7OztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBOztJQUVJLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcblxuXG4ubG9naW4ge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sb2dpbi1oZWFkZXIsXG4ubG9naW4gcCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sb2dpbi10cmlhbmdsZSB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigxNSwgNjYsIDEwNyk7XG59XG5cbi5sb2dpbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTIsIDc3LCAxMjkpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmxvZ2luIHAge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ubG9naW4gaW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdXRsaW5lOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM4ODg7XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZDogcmdiKDEsIDI5LCA1MSk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE3Yztcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwNWE7XG59XG5cbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNiwgMTIsIDEyKTtcbiAgICBjb2xvcjogcmdiKDIzMCwgMTQsIDE0KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center\">\n  Chat Login\n</h1>\n<div class=\"login\">\n  <h2 class=\"login-header\">Log in</h2>\n  <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n\n    <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.email.errors }\">\n      <input type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n    </p>\n\n    <div *ngIf=\"isSubmitted && formControls.email.errors\" class=\"help-block\">\n      <div *ngIf=\"formControls.email.errors.required\">Email is required</div>\n    </div>\n\n    <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\n      <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n    </p>\n\n    <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\n      <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n    </div>\n\n    <p>\n      <input type=\"submit\" value=\"Log in\">\n    </p>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['admin@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['1234', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/admin');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.messagesUrl = 'http://localhost:8080';
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get(this.messagesUrl + '/allmessages');
    };
    MessageService.prototype.addMessage = function (message) {
        return this.http.post(this.messagesUrl + '/addmessage', message, httpOptions);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.user {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\nh2{\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10;\n  padding-top: 10;\n}\n.userli {\n  cursor: pointer;\n  position: relative;\n  left: 10;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.user li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.user li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.user .text {\n  position: relative;\n  top: -3px;\n}\n.user .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlciB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuaDJ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiAxMDtcbiAgcGFkZGluZy10b3A6IDEwO1xufVxuLnVzZXJsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51c2VyIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlciBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLnVzZXIgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi51c2VyIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Messages</h2>\n\n<ul>\n <li *ngFor=\"let message of messages\"\n   [class.selected]=\"message === selectedMessage\"\n  (click)=\"onSelect(message)\">\n   <a routerLink=\"/messages\"></a>\n   <span class=\"badge\">User ID: {{message.userid}} </span> <span>Message ID: {{message.messageid}}</span>Text: {{message.messagetext}}\n   <!-- <button (click)=\"delete(message)\">Delete Message</button> -->\n </li>\n</ul>\n \n<div>\n  <label>\n    User ID:\n    <input #messageUserid />\n    Message ID:\n    <input #messageMessageid />\n    Text:\n    <input #messageMessagetext />\n  </label>\n\n    \n  <button (click)=\"add(messageUserid.value,messageMessageid.value,messageMessagetext.value);\">\n        Add Message</button>\n  </div>\n\n<div *ngIf=\"selectedMessage\">\n\n  <div>\n    <label> user id:\n      <input [(ngModel)]=\"selectedMessage.userid\" placeholder=\"userid\"/>\n      \n    </label>\n  </div>\n\n\n  <div>\n    <label>message id:\n      <input [(ngModel)]=\"selectedMessage.messageid\" placeholder=\"messageid\"/>\n    </label>\n  </div>\n\n\n <div>\n    <label>text:\n      <input [(ngModel)]=\"selectedMessage.messagetext\" placeholder=\"messagetext\"/>\n    </label>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; });
    };
    MessageComponent.prototype.add = function (userid, messageid, messagetext) {
        var _this = this;
        messagetext = messagetext.trim();
        if (!messagetext) {
            return;
        }
        this.messageService.addMessage({ userid: userid, messageid: messageid, messagetext: messagetext })
            .subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    // delete(message: Message ): void{
    // 	this.messages = this.messages.filter(m => m !== message);
    // 	this.messageService.deleteMessage(message).subscribe;
    // }
    MessageComponent.prototype.onSelect = function (message) {
        this.selectedMessage = message;
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:8080';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl + '/allusers');
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.usersUrl + '/adduser', user, httpOptions);
    };
    UserService.prototype.deleteUser = function (user) {
        var userid = typeof user === 'number' ? user : user.userid;
        var url = this.usersUrl + '/deleteuser' + "/" + userid;
        return this.http.delete(url, httpOptions);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.user {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\nh2{\n  font-size: 1.5em;\n  color: #999;\n  margin-top: 10;\n  padding-top: 10;\n}\n.userli {\n  cursor: pointer;\n  position: relative;\n  left: 10;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.user li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.user li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.user .text {\n  position: relative;\n  top: -3px;\n}\n.user .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlciB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuaDJ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiAxMDtcbiAgcGFkZGluZy10b3A6IDEwO1xufVxuLnVzZXJsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51c2VyIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlciBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLnVzZXIgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi51c2VyIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n\n<ul>\n <li *ngFor=\"let user of users\"\n   [class.selected]=\"user === selectedUser\"\n  (click)=\"onSelect(user)\">\n   <a routerLink=\"/users\"></a>\n   <span class=\"badge\">User ID: {{user.userid}} </span> <span>User Name: {{user.name}} </span> <span>Email: {{user.email}}</span> <span>Password: {{user.password}}</span> Group: {{user.groupname}}\n   <button (click)=\"delete(user)\">Delete</button>\n </li>\n</ul>\n \n<div>\n  <label>\n    User ID:\n    <input #userUserid />\n    Name:\n    <input #userName />\n    Email:\n    <input #userEmail />\n    Password:\n    <input #userPassword />\n    Group:\n    <input #userGroup />\n    \n  </label>\n\n    \n  <button (click)=\"add(userUserid.value,userName.value,userEmail.value,userPassword.value,userGroup.value);\">\n        Add </button>\n  </div>\n\n<div *ngIf=\"selectedUser\">\n\n  <h2>{{selectedUser.name | uppercase}} Details</h2>\n   \n   <div>\n    <label>id:\n      <input [(ngModel)]=\"selectedUser.userid\" placeholder=\"userid\"/>\n      \n    </label>\n  </div>\n\n\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"selectedUser.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n\n\n <div>\n    <label>email:\n      <input [(ngModel)]=\"selectedUser.email\" placeholder=\"email\"/>\n    </label>\n  </div>\n\n\n  <div>\n    <label>password:\n      <input [(ngModel)]=\"selectedUser.password\" placeholder=\"password\"/>\n    </label>\n  </div>\n\n\n <div>\n    <label>group:\n      <input [(ngModel)]=\"selectedUser.groupname\" placeholder=\"groupname\"/>\n    </label>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    //constructor(private authService: AuthService, private router: Router) { }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.add = function (userid, name, email, password, groupname) {
        var _this = this;
        name = name.trim();
        email = email.trim();
        password = password.trim();
        groupname = groupname.trim();
        if (!name && !email && !password && !groupname) {
            return;
        }
        this.userService.addUser({ userid: userid, name: name, email: email, password: password, groupname: groupname })
            .subscribe(function (user) {
            _this.users.push(user);
        });
    };
    UserComponent.prototype.delete = function (user) {
        this.users = this.users.filter(function (u) { return u !== user; });
        this.userService.deleteUser(user).subscribe;
    };
    UserComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/costrategix/AngularJS/chat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map