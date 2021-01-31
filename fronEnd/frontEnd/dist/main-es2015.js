(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\z12dr\Desktop\Project 2\P2_the-pretzelmen\fronEnd\frontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "0Ddd":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-top: 60px;\r\n    padding: 10px;\r\n    max-width: 50% ;\r\n    background-color:#D4F1F4;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXdCOztBQUU1QiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1heC13aWR0aDogNTAlIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Q0RjFGNDtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "NP/T");
/* harmony import */ var _user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.css */ "hEVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "R7Hv");







let UserComponent = class UserComponent {
    constructor(userService, router, dataService) {
        this.userService = userService;
        this.router = router;
        this.dataService = dataService;
        this.ActivateAddEdit = false;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
        });
    }
    deleteClick(user) {
        console.log('call delet @ user');
        this.users = this.users.filter(u => u !== user);
        this.userService.deleteUser(user).subscribe();
    }
    setData(user) {
        console.log("set data is called");
        this.dataService.sharedData = user;
    }
};
UserComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
], UserComponent);



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */





let HomeComponent = class HomeComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.resourceServerExamples = [
            {
                label: 'Node/Express Resource Server Example',
                url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
            },
            {
                label: 'Java/Spring MVC Resource Server Example',
                url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
            },
        ];
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAuthenticated = yield this.oktaAuth.isAuthenticated();
            if (this.isAuthenticated) {
                const userClaims = yield this.oktaAuth.getUser();
                this.userName = userClaims.name;
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]])
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\r\n    position: relative;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #6AABD2;\r\n  }\r\n  \r\n  li {\r\n    float: left;\r\n  }\r\n  \r\n  li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .glyphicon{\r\n    float: right;\r\n}\r\n  \r\n  li a:hover:not(.active) {\r\n    background-color: #111;\r\n  }\r\n  \r\n  .active {\r\n    background-color: #4CAF50;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBQ0Y7SUFDSSxZQUFZO0FBQ2hCOztFQUVFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUFCRDI7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuLmdseXBoaWNvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4gIFxyXG4gIGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICB9Il19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "DQXo":
/*!**********************************************************!*\
  !*** ./src/app/add-edit-user/add-edit-user.component.ts ***!
  \**********************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_edit_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-edit-user.component.html */ "kOIy");
/* harmony import */ var _add_edit_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-user.component.css */ "FcP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fullplayerview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fullplayerview */ "XhuD");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.service */ "R7Hv");









let AddEditUserComponent = class AddEditUserComponent {
    constructor(userService, route, location, dataService) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.dataService = dataService;
        //user: fullplayerview = new fullplayerview();
        this.user = {
            userName: "nnn",
            password: 123,
            wins: 0,
            losses: 0,
            tokens: 0,
            login: false,
            playerId: "ddd",
            collection: {},
        };
    }
    ngOnInit() {
        this.getUser();
    }
    /*//
    *
    * get user from shared data at data service
    *
    */ //
    getUser() {
        // console.log("incoming user " + this.incomingUser);
        // console.log("get user data : " + history.state.data);
        //const id = +this.route.snapshot.paramMap.get('user');
        // console.log("get from snap shot : "  + id);
        this.user = this.dataService.sharedData;
        //console.log("data service give me : " + this.user)
        //const id = +this.route.snapshot.paramMap.get('id');
    }
    /*
    * submit changed data to store in server
    */
    submit() {
        this.userService.updateUser(this.user).subscribe(() => this.goBack());
    }
    /* got back to previous page */
    goBack() {
        this.location.back();
    }
};
AddEditUserComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }
];
AddEditUserComponent.propDecorators = {
    incomingUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AddEditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-edit-user',
        template: _raw_loader_add_edit_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_edit_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]])
], AddEditUserComponent);



/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "rt/O");
/* harmony import */ var _messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component.css */ "Okie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message.service */ "OdHV");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */








let MessagesComponent = class MessagesComponent {
    constructor(oktaAuth, http, messageService) {
        this.oktaAuth = oktaAuth;
        this.http = http;
        this.messageService = messageService;
        this.messages = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const accessToken = this.oktaAuth.getAccessToken();
            this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_6__["default"].resourceServer.messagesUrl, {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                }
            }).subscribe((data) => {
                let index = 1;
                const messages = data.messages.map((message) => {
                    const date = new Date(message.date);
                    const day = date.toLocaleDateString();
                    const time = date.toLocaleTimeString();
                    return {
                        date: `${day} ${time}`,
                        text: message.text,
                        index: index++
                    };
                });
                [].push.apply(this.messages, messages);
            }, (err) => {
                console.error(err);
                this.failed = true;
            });
        });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
];
MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
], MessagesComponent);



/***/ }),

/***/ "FcP7":
/*!***********************************************************!*\
  !*** ./src/app/add-edit-user/add-edit-user.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-top: 20px;\r\n    font-size: 1.3em;\r\n    font-weight: 200;\r\n    background-color: #6AABD2;\r\n}\r\n\r\ntd{\r\n    color: black;\r\n    background-color: #B7CFDC;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWVkaXQtdXNlci9hZGQtZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCOztBQUU3QiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lZGl0LXVzZXIvYWRkLWVkaXQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUFCRDI7XHJcbn1cclxuXHJcbnRke1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I3Q0ZEQztcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div *ngIf=\"isAuthenticated && userName\">\r\n  <p>Welcome back, {{ userName }}!</p>\r\n<div></div>");

/***/ }),

/***/ "NP/T":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n\r\n <!-- Modal -->\r\n <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ModalTitle}}</h5>\r\n        <button type=\"button\" class=\"close\" \r\n        data-dismiss=\"modal\" aria-label=\"Close\"\r\n        (click)=\"closeClick()\" >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <app-add-edit-user [emp]=\"emp\" *ngIf=\"ActivateAddEdit\">\r\n          </app-add-edit-user>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n      <tr>\r\n          <th>Player Id</th>\r\n          <th>User Name</th>\r\n          <th>First Name</th>\r\n          <th>Last Name</th>\r\n          <th>Email</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n          <td>{{user.playerId}}</td>\r\n          <td>{{user.userName}}</td>\r\n          <td>{{user.password}}</td>\r\n          <td>{{user.tokens}}</td>\r\n          <td>asscociate@revature.net</td>\r\n\r\n          <td>\r\n             <a routerLink=\"/editUser/{data: {1,1}} \" (click)=\"setData(user)\">\r\n              <button type=\"button\" class=\"btn btn-light mr-1\"\r\n              data-toggle=\"modal\" data-target=\"#exampleModal\"\r\n            \r\n        data-backdrop=\"static\" data-keyboard=\"false\"\r\n              >\r\n              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-pencil-square\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\r\n                <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\r\n              </svg>\r\n              </button>\r\n             </a> \r\n              <button type=\"button\" class=\"btn btn-light mr-1\"\r\n              (click)=\"deleteClick(user)\"\r\n              >\r\n                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\r\n                </svg>\r\n              </button>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>\r\n\r\n</section>\r\n\r\n");

/***/ }),

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ "Okie":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DataService = class DataService {
    constructor() { }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */





let AppComponent = class AppComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.title = 'app';
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAuthenticated = yield this.oktaAuth.isAuthenticated();
        });
    }
    logout() {
        this.oktaAuth.signOut();
    }
};
AppComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.\r\n\r\n<div class=\"ui inverted top fixed menu\">\r\n  <div class=\"ui container\">\r\n    <a routerLink=\"/\" class=\"header item\">\r\n      <img class=\"ui mini image\" src=\"/assets/angular.svg\">\r\n      &nbsp;\r\n      Okta-Angular Sample Project\r\n    </a>\r\n    <a class=\"item\" *ngIf=\"!isAuthenticated\" routerLink=\"/login\">Login</a>\r\n    <a id=\"messages-button\" class=\"item\" *ngIf=\"isAuthenticated\" routerLink=\"/messages\"><i aria-hidden=\"true\" class=\"mail outline icon\"></i>Messages</a>\r\n    <a id=\"profile-button\" class=\"item\" *ngIf=\"isAuthenticated\" routerLink=\"/profile\">Profile</a>\r\n    <a id=\"logout-button\" class=\"item\" *ngIf=\"isAuthenticated\" (click)=\"logout()\">Logout</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui text container\" style=\"margin-top: 7em;\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n-->\r\n\r\n<ul>\r\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\r\n  <li><a routerLink=\"/players\">Players</a></li>\r\n  <li><a routerLink=\"/matchHistory\"> Match History</a></li> <!-- link works -->\r\n  <li><a href=\"#contact\">Contact</a></li>\r\n  <li><a href=\"#about\">About</a></li>\r\n  <li *ngIf=\"isAuthenticated\" (click)=\"logout()\" style=\"float:right\"><a><span class=\"glyphicon glyphicon-log-out\"></span> Logout </a></li>\r\n  <li *ngIf=\"!isAuthenticated\" style=\"float:right\"><a routerLink =\"/signup\"> <span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n  <li *ngIf=\"!isAuthenticated\" style=\"float:right\"> <a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n</ul>\r\n\r\n\r\n\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "fMGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */





let ProfileComponent = class ProfileComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userClaims = yield this.oktaAuth.getUser();
            this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]])
], ProfileComponent);



/***/ }),

/***/ "XhuD":
/*!***********************************!*\
  !*** ./src/app/fullplayerview.ts ***!
  \***********************************/
/*! exports provided: fullplayerview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullplayerview", function() { return fullplayerview; });
class fullplayerview {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "aR35");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "DQXo");
/* harmony import */ var _memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./memory-game/memory-game.component */ "q28R");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */







 // <-- NgModel lives here
const oktaConfig = Object.assign({
    onAuthRequired: (oktaAuth, injector) => {
        const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]);
        // Redirect the user to your custom login page
        router.navigate(['/login']);
    }
}, _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc);













const appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
    },
    {
        path: 'login/callback',
        component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaCallbackComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        canActivate: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthGuard"]],
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
        canActivate: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthGuard"]],
    },
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
            _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_17__["AddEditUserComponent"],
            _memory_game_memory_game_component__WEBPACK_IMPORTED_MODULE_18__["MemoryGameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
            _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_19__["NbThemeModule"].forRoot(),
        ],
        providers: [
            { provide: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OKTA_CONFIG"], useValue: oktaConfig },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aR35":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;
/* harmony default export */ __webpack_exports__["default"] = ({
    oidc: {
        clientId: `${CLIENT_ID}`,
        issuer: `${ISSUER}`,
        redirectUri: 'http://localhost:8080/login/callback',
        scopes: ['openid', 'profile', 'email'],
        testing: {
            disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
        }
    },
    resourceServer: {
        messagesUrl: 'http://localhost:8000/api/messages',
    },
});


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fIUf":
/*!*******************************************************!*\
  !*** ./src/app/memory-game/memory-game.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yeS1nYW1lL21lbW9yeS1nYW1lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "fMGI":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "hEVk":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin-top: 20px;\r\n    font-size: 1.3em;\r\n    font-weight: 200;\r\n    background-color: #6AABD2;\r\n}\r\n\r\ntd{\r\n    color: black;\r\n    background-color: #B7CFDC;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCOztBQUU3QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUFCRDI7XHJcbn1cclxuXHJcbnRke1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I3Q0ZEQztcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sign-in-widget\"></div>");

/***/ }),

/***/ "kOIy":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-edit-user/add-edit-user.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container\">\r\n    <h2>Edit User Information Form</h2>\r\n    <form class=\"form-horizontal\" action=\"/action_page.php\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"userName\">User name:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input [(ngModel)]=\"user.userName\" type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"user.userName\" name=\"userName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n        <div class=\"col-sm-10\">          \r\n          <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"wins\">Wins: </label>\r\n        <div class=\"col-sm-10\">          \r\n          <input  [(ngModel)]=\"user.wins\" type=\"number\" class=\"form-control\" id=\"wins\" placeholder=\"user.wins\" name=\"wins\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"losses\">Losses: </label>\r\n        <div class=\"col-sm-10\">          \r\n          <input [(ngModel)]=\"user.losses\" type=\"number\" class=\"form-control\" id=\"losses\" placeholder=\"user.losses\" name=\"losses\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"tokens\">Tokens: </label>\r\n        <div class=\"col-sm-10\">          \r\n          <input [(ngModel)]=\"user.tokens\" type=\"number\" class=\"form-control\" id=\"tokens\" placeholder=\"user.tokens\" name=\"tokens\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" name=\"remember\"> Remember me</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button type=\"submit\" (click)=\"submit()\"  class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  ");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "q28R":
/*!******************************************************!*\
  !*** ./src/app/memory-game/memory-game.component.ts ***!
  \******************************************************/
/*! exports provided: MemoryGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryGameComponent", function() { return MemoryGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_memory_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./memory-game.component.html */ "tPsp");
/* harmony import */ var _memory_game_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory-game.component.css */ "fIUf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");






let MemoryGameComponent = class MemoryGameComponent {
    constructor(usrService) {
        this.usrService = usrService;
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    ngOnInit() {
    }
    onSelectCard() {
        console.log("clicked card number:  " + 2);
    }
};
MemoryGameComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
MemoryGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-memory-game',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        template: _raw_loader_memory_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_memory_game_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], MemoryGameComponent);



/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "zwQV");
/* harmony import */ var _signup_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.css */ "0Ddd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let SignupComponent = class SignupComponent {
    constructor(userService, location) {
        this.userService = userService;
        this.location = location;
        this.user = {
            firstName: "jim",
            lastName: "lake",
            email: "t@hotmail.com",
            password: "888888",
        };
    }
    ngOnInit() {
        this.userService.getUsers();
    }
    onSubmit() {
        //console.log("firstName: " + this.user.firstName.trim());
        //console.log("last Name: " + this.user.lastName.trim());
        // console.log("Passwored: " + this.user.password.trim());
        // console.log("email: " +this.user.email.trim());
        let aUser = {
            username: this.user.firstName,
            password: this.user.password,
            playerId: "000"
        };
        if (!this.user.firstName) {
            return;
        }
        //add user to database by calling user service
        console.log("ADDED PLAYER:  " + this.userService.addUser(aUser));
        this.gotBack();
    }
    gotBack() {
        this.location.back();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], SignupComponent);



/***/ }),

/***/ "rt/O":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"ui header\">\r\n  <i aria-hidden=\"true\" class=\"mail outline icon\"></i> My Messages\r\n</h1>\r\n<div *ngIf=\"failed\" class=\"ui error message\">\r\n  <div class=\"content\">\r\n    <div class=\"header\">Failed to fetch messages. Please verify the following:</div>\r\n    <ul class=\"list\">\r\n      <li class=\"content\">You've downloaded one of our resource server examples, and it's running on port 8000.</li>\r\n      <li class=\"content\">Your resource server example is using the same Okta authorization server (issuer) that you have configured this Angular\r\n        application to use.</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"messages.length\">\r\n  <p>This component makes a GET request to the resource server example, which must be running at\r\n    <code>localhost:8000/api/messages</code>\r\n  </p>\r\n  <p>It attaches your current access token in the\r\n    <code>Authorization</code> header on the request, and the resource server will attempt to authenticate this access token. If the token is valid\r\n    the server will return a list of messages. If the token is not valid or the resource server is incorrectly configured,\r\n    you will see a 401\r\n    <code>Unauthorized response</code>.</p>\r\n  <p>This route is protected with the\r\n    <code>OktaAuthGuard</code> component, which will ensure that this page cannot be accessed until you have authenticated and have an access token\r\n    in local storage.</p>\r\n  <table class=\"ui table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Date</th>\r\n        <th>Message</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let message of messages\" id=\"message-{{message.index}}\">\r\n        <td>{{message.date}}</td>\r\n        <td>{{message.text}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "tPsp":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/memory-game/memory-game.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <br>\r\n  \r\n    <h1> Memory Game</h1>\r\n    <br>\r\n    \r\n      <div class=\"row\">\r\n          <div class=\"cardSection\"  *ngFor=\"let card of cards\" style=\"background-color:white;\" (click) =\"onSelectCard()\">\r\n            <div class=\"cardColumn\">\r\n                <img  src=\"./../assets/images/magic.png\" alt=\"carss\" width=\"\" height=\"\">\r\n\r\n            </div>\r\n            \r\n          </div>    \r\n      </div>\r\n  </div>\r\n  \r\n  <nb-flip-card>\r\n    <nb-card-front>\r\n      <nb-card accent=\"danger\">\r\n        <nb-card-body>\r\n          A nebula is an interstellar cloud of dust, hydrogen,\r\n          helium and other ionized gases.\r\n          Originally, nebula was a name for\r\n          any diffuse astronomical object,\r\n          including galaxies beyond the Milky Way.\r\n        </nb-card-body>\r\n      </nb-card>\r\n    </nb-card-front>\r\n    <nb-card-back>\r\n      <nb-card>\r\n        <nb-card-body>\r\n          A nebula is an interstellar cloud of dust, hydrogen,\r\n          helium and other ionized gases.\r\n          Originally, nebula was a name for\r\n          any diffuse astronomical object,\r\n          including galaxies beyond the Milky Way.\r\n        </nb-card-body>\r\n      </nb-card>\r\n    </nb-card-back>\r\n  </nb-flip-card>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "DQXo");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "3nXK");






const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'editUser/:user', component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["AddEditUserComponent"] },
    { path: 'players', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @okta/okta-angular */ "51h4");
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @okta/okta-signin-widget */ "TWom");
/* harmony import */ var _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "aR35");







const DEFAULT_ORIGINAL_URI = window.location.origin;
let LoginComponent = class LoginComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.signIn = new _okta_okta_signin_widget__WEBPACK_IMPORTED_MODULE_5__({
            /**
             * Note: when using the Sign-In Widget for an OIDC flow, it still
             * needs to be configured with the base URL for your Okta Org. Here
             * we derive it from the given issuer for convenience.
             */
            baseUrl: _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc.issuer.split('/oauth2')[0],
            clientId: _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc.clientId,
            redirectUri: _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc.redirectUri,
            logo: '/assets/angular.svg',
            i18n: {
                en: {
                    'primaryauth.title': 'Sign in to Angular & Company',
                },
            },
            authParams: {
                issuer: _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc.issuer
            }
        });
    }
    ngOnInit() {
        this.signIn.showSignInToGetTokens({
            el: '#sign-in-widget',
            scopes: _app_config__WEBPACK_IMPORTED_MODULE_6__["default"].oidc.scopes
        }).then(tokens => {
            // When navigating to a protected route, the route path will be saved as the `originalUri`
            // If no `originalUri` has been saved, then redirect back to the app root
            const originalUri = this.oktaAuth.getOriginalUri();
            if (originalUri === DEFAULT_ORIGINAL_URI) {
                this.oktaAuth.setOriginalUri('/');
            }
            // Remove the widget
            this.signIn.remove();
            // In this flow the redirect to Okta occurs in a hidden iframe
            this.oktaAuth.handleLoginRedirect(tokens);
        }).catch(err => {
            // Typically due to misconfiguration
            throw err;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_4__["OktaAuthService"]])
], LoginComponent);



/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "OdHV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fullplayerview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullplayerview */ "XhuD");







let UserService = class UserService {
    constructor(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.playerview = new _fullplayerview__WEBPACK_IMPORTED_MODULE_6__["fullplayerview"]();
        //private userUrl = "https://magic-match-api.azurewebsites.net/api/player/"
        this.userUrl = "https://localhost:44301/api/player/";
        //private userUrl = "https://magic-match-api.azurewebsites.net/api/player/";
        //private jsonUlr = "https://jsonplaceholder.typicode.com/posts";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            })
        };
    }
    /* Get users from the server */
    getUsers() {
        //console.log("get player:   " + this.http.get<any[]>(this.userUrl));
        return this.http.get(this.userUrl + "GetPlayers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log('get users')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getUsers', [])));
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - get user by id
   * @param result - return a user
   */
    getUserById(id) {
        const url = `${this.userUrl}/{id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`etched hero id={id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`getuser id ={id}`)));
    }
    /** PUT: update the hero on the server */
    updateUser(user) {
        const body = JSON.stringify(user);
        console.log("Send over server to save:  " + body);
        return this.http.put('https://magic-match-api.azurewebsites.net/api/player/CreatePlayer/EditPlayer', body, this.httpOptions).pipe(
        //tap(_ => this.log(`updated user id=${user.id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateUser')));
    }
    /** POST: add a new hero to the server */
    addUser(user) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(user);
        console.log(body);
        this.http.post(this.userUrl + 'CreatePlayer', body, this.httpOptions).subscribe(x => this.playerview = x);
        console.log(this.playerview);
        //.pipe(
        //tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
        //     catchError(this.handleError<any>('add user'))
        // );
    }
    /** DELETE: delete the hero from the server */
    deleteUser(user) {
        const body = JSON.stringify(user);
        const url = `${this.userUrl + "DeletePlayer"}/${body}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteHero')));
    }
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        //this.messageService.add(`HeroService: ${message}`);
    }
};
UserService.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], UserService);



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"ui header\">\r\n  <i aria-hidden=\"true\" class=\"drivers license outline icon\"></i> My User Profile (ID Token Claims)\r\n</h1>\r\n<p>\r\n  Below is the information from your ID Token which was obtained during the\r\n  <a href=\"https://developer.okta.com/docs/guides/implement-auth-code-pkce\">PKCE Flow</a>\r\n  and is now stored in local storage.\r\n</p>\r\n<p>\r\n  This route is protected with the <code>OktaAuthGuard</code> component, which will ensure that this page cannot be accessed until you have authenticated.\r\n</p>\r\n<table class=\"ui table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Claim</th>\r\n      <th>Value</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let claim of claims\">\r\n      <td>{{claim.claim}}</td>\r\n      <td id=\"claim-{{claim.claim}}\">{{claim.value}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zwQV":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n    <h2>User Information Form</h2>\r\n    <form class=\"form-horizontal\" action=\"/action_page.php\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n        <div class=\"col-sm-10\">          \r\n          <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"firstName\">First Name: </label>\r\n        <div class=\"col-sm-10\">          \r\n          <input  [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter First Name\" name=\"firstName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"lastName\">Last Name: </label>\r\n        <div class=\"col-sm-10\">          \r\n          <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Last Name\" name=\"lastName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" name=\"remember\"> Remember me</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">        \r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button type=\"submit\" (click)=\"onSubmit()\"  class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  ");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map