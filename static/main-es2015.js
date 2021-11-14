(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 192:
/*!*************************************************************!*\
  !*** ./src/FishFramwork/fish-field/fish-field.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishFieldComponent": function() { return /* binding */ FishFieldComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fish-field.component.html */ 8023);
/* harmony import */ var _fish_field_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-field.component.css */ 4296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let FishFieldComponent = class FishFieldComponent {
    constructor(type, title) {
        this.type = type;
        this.title = title;
        this.inputType = type;
        this.inputTitle = title;
    }
    ngOnInit() {
    }
};
FishFieldComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute, args: ['type',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute, args: ['title',] }] }
];
FishFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'finput',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_field_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fish_field_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FishFieldComponent);



/***/ }),

/***/ 8390:
/*!*************************************************************************!*\
  !*** ./src/FishFramwork/fish-modal-frame/fish-modal-frame.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishModalFrameComponent": function() { return /* binding */ FishModalFrameComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_modal_frame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fish-modal-frame.component.html */ 1861);
/* harmony import */ var _fish_modal_frame_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish-modal-frame.component.css */ 5807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let FishModalFrameComponent = class FishModalFrameComponent {
    constructor(title, elem) {
        this.title = title;
        this.elem = elem;
        this.modalTitle = title;
    }
    ngOnInit() {
    }
};
FishModalFrameComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute, args: ['title',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
FishModalFrameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'fmmodal',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_modal_frame_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fish_modal_frame_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FishModalFrameComponent);



/***/ }),

/***/ 6490:
/*!*************************************************!*\
  !*** ./src/FishFramwork/fish-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishRoutingModule": function() { return /* binding */ FishRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/fish-router-setup.service */ 2379);




let FishRoutingModule = class FishRoutingModule {
};
FishRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_0__.Routing_Directive[0]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FishRoutingModule);



/***/ }),

/***/ 4814:
/*!*****************************************!*\
  !*** ./src/FishFramwork/fish.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishModule": function() { return /* binding */ FishModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fishBtn/fishbtn.directive */ 674);
/* harmony import */ var _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fishcard/fishcard.component */ 7733);
/* harmony import */ var _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish-routing.module */ 6490);
/* harmony import */ var _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fishcard/fishcard-header.directive */ 7234);
/* harmony import */ var _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fishmenu/fishmenu.component */ 1991);
/* harmony import */ var _fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fishModalOpener/fish-opener.service */ 4034);
/* harmony import */ var _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fish-modal-frame/fish-modal-frame.component */ 8390);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/tree */ 5473);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fish-field/fish-field.component */ 192);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);


















































let FishModule = class FishModule {
};
FishModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__.FishbtnDirective, _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__.FishcardComponent, _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__.FishcardHeaderDirective, _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__.FishmenuComponent, _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__.FishModalFrameComponent, _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__.FishFieldComponent,],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__.FishRoutingModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.BidiModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_39__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_45__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__.MatTooltipModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__.MatTreeModule,
        ],
        exports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__.FishbtnDirective,
            _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__.FishcardComponent,
            _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__.FishcardHeaderDirective,
            _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__.FishRoutingModule,
            _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__.FishmenuComponent,
            _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__.FishModalFrameComponent,
            _fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_5__.FishOpenerService,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
            _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__.FishFieldComponent,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        ]
    })
], FishModule);



/***/ }),

/***/ 674:
/*!*******************************************************!*\
  !*** ./src/FishFramwork/fishBtn/fishbtn.directive.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishbtnDirective": function() { return /* binding */ FishbtnDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



let FishbtnDirective = class FishbtnDirective {
    constructor(el) {
        this.el = el;
        el.nativeElement.style.textAlign = 'center';
        el.nativeElement.style.padding = '10px 20px';
        el.nativeElement.style.borderRadius = '5px';
        el.nativeElement.style.border = 'none';
        el.nativeElement.style.cursor = 'pointer';
        el.nativeElement.style.fontSize = '26px';
        el.nativeElement.style.filter = 'brightness(1)';
        el.nativeElement.style.marginRight = '10px';
        const disabled = el.nativeElement.getAttribute('disabled');
        const primary = el.nativeElement.getAttribute('primary');
        const secondary = el.nativeElement.getAttribute('secondary');
        const warn = el.nativeElement.getAttribute('warn');
        const raise = el.nativeElement.getAttribute('raise');
        const flat = el.nativeElement.getAttribute('flat');
        const fab = el.nativeElement.getAttribute('fab');
        const minifab = el.nativeElement.getAttribute('minifab');
        const outline = el.nativeElement.getAttribute('outline');
        let backgroundOrColor = raise === '' || flat === '' || fab === '' || minifab === '' ? 'background' : 'color';
        primary === '' ? (el.nativeElement.style[backgroundOrColor] = '#77a6f7') : null;
        secondary === '' ? el.nativeElement.style[backgroundOrColor] = '#f7931e' : null;
        warn === '' ? el.nativeElement.style[backgroundOrColor] = '#f44336' : null;
        if (backgroundOrColor === 'background') {
            el.nativeElement.style.color = primary === null && secondary === null && warn === null ? 'grey' : 'white';
        }
        else {
            el.nativeElement.style.background = 'white';
        }
        if (outline === '') {
            el.nativeElement.style.border = '1px solid #E8E8E8';
        }
        if (fab === '' || minifab === "") {
            el.nativeElement.style.padding = '0px 0px';
            el.nativeElement.style.width = fab === '' ? '50px' : '40px';
            el.nativeElement.style.height = fab === '' ? '50px' : '40px';
            el.nativeElement.style.borderRadius = el.nativeElement.offsetWidth / 2 + 'px';
            el.nativeElement.style.overflow = 'hidden';
            el.nativeElement.style.boxShadow = '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)';
        }
        if (raise === '') {
            el.nativeElement.style.boxShadow = '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)';
        }
        if (disabled === '') {
            el.nativeElement.style.opacity = 0.5;
            el.nativeElement.style.cursor = 'not-allowed';
        }
    }
};
FishbtnDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
FishbtnDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[fbtn]',
    })
], FishbtnDirective);



/***/ }),

/***/ 4034:
/*!*****************************************************************!*\
  !*** ./src/FishFramwork/fishModalOpener/fish-opener.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishOpenerService": function() { return /* binding */ FishOpenerService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 2213);



let FishOpenerService = class FishOpenerService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(component, data, size) {
        this.dialog.open(component, {
            width: size.width,
            data: {},
            disableClose: true
        });
    }
    close() {
    }
};
FishOpenerService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialog }
];
FishOpenerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FishOpenerService);



/***/ }),

/***/ 7234:
/*!****************************************************************!*\
  !*** ./src/FishFramwork/fishcard/fishcard-header.directive.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishcardHeaderDirective": function() { return /* binding */ FishcardHeaderDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


let FishcardHeaderDirective = class FishcardHeaderDirective {
    constructor() {
        console.log('123');
    }
};
FishcardHeaderDirective.ctorParameters = () => [];
FishcardHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: 'fc-header'
    })
], FishcardHeaderDirective);



/***/ }),

/***/ 7733:
/*!*********************************************************!*\
  !*** ./src/FishFramwork/fishcard/fishcard.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishcardComponent": function() { return /* binding */ FishcardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishcard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fishcard.component.html */ 5118);
/* harmony import */ var _fishcard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fishcard.component.css */ 3329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let FishcardComponent = class FishcardComponent {
    constructor(elem) {
        this.elem = elem;
        console.log(this.elem.nativeElement.innerHTML);
    }
    ngOnInit() {
        console.log(this.elem.nativeElement.querySelector('fc-header > img'));
        if (this.elem.nativeElement.querySelector('fc-header')) {
            this.elem.nativeElement.querySelector('fc-header').style.display = 'block';
            if (this.elem.nativeElement.querySelector('fc-header > img')) {
                this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
                this.elem.nativeElement.querySelector('fc-header > img').style.borderTopRightRadius = '5px';
                this.elem.nativeElement.querySelector('fc-header > img').style.borderTopLeftRadius = '5px';
            }
            if (this.elem.nativeElement.querySelector('fc-header > p')) {
                this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
            }
            var allHeaderChildren = this.elem.nativeElement.querySelector("fc-header").children;
            for (const ele of allHeaderChildren) {
                console.log(ele.tagName);
                if (ele.tagName != 'IMG') {
                    ele.style.margin = '0.8rem';
                }
            }
        }
        this.elem.nativeElement.querySelector('fc-header').innerHTML += '<hr class="solid">';
        this.elem.nativeElement.querySelector('fc-header > .solid').style.width = '95%';
        this.elem.nativeElement.querySelector('fc-header > .solid').style.margin = '95%';
        if (this.elem.nativeElement.querySelector('fc-body')) {
            this.elem.nativeElement.querySelector('fc-body').style.display = 'block';
            this.elem.nativeElement.querySelector('fc-body').style.padding = '0.8rem';
            this.elem.nativeElement.querySelector('fc-body > *').style.margin = '0px';
        }
    }
    ngAfterContentInit() {
        console.log(this.elem.nativeElement.querySelector('fc-header > img'));
        if (this.elem.nativeElement.querySelector('fc-header')) {
            if (this.elem.nativeElement.querySelector('fc-header > img'))
                this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
            if (this.elem.nativeElement.querySelector('fc-header > p'))
                this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
            this.elem.nativeElement.querySelector('fc-header').innerHTML += '<hr class="solid">';
        }
        if (this.elem.nativeElement.querySelector('fc-body')) {
        }
    }
};
FishcardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
FishcardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'fishcard',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishcard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fishcard_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FishcardComponent);



/***/ }),

/***/ 1991:
/*!*********************************************************!*\
  !*** ./src/FishFramwork/fishmenu/fishmenu.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FishmenuComponent": function() { return /* binding */ FishmenuComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishmenu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fishmenu.component.html */ 5570);
/* harmony import */ var _fishmenu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fishmenu.component.css */ 6557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/fish-router-setup.service */ 2379);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);







let FishmenuComponent = class FishmenuComponent {
    constructor(elem, sanitizer) {
        this.elem = elem;
        this.sanitizer = sanitizer;
        this.color = 'black';
        this.backgroundcolor = 'white';
        this.initColor = 'black';
        this.ifBurger = false;
        this.ifBurgerButton = false;
        this.initBackgroundcolor = 'white';
        this.ifLoaded = false;
        this.menuItems = _app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_2__.Routing_Directive[1];
    }
    getScreenSize(event) {
        console.log(window.innerWidth);
        this.ifBurger = window.innerWidth < 700 ? true : false;
        this.ifBurgerButton = window.innerWidth > 700 ? true : false;
        if (window.innerWidth > 700) {
            if (this.elem.nativeElement.getElementsByTagName('li')) {
                for (const ele of this.elem.nativeElement.getElementsByTagName('li')) {
                    ele.style.display = 'inline-block';
                    ele.style.margin = '5px';
                }
            }
        }
        else {
            this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
        }
    }
    get style() {
        return this.sanitizer.bypassSecurityTrustStyle(`--color: ${this.initColor};--background:${this.initBackgroundcolor}`);
    }
    //Toggle the buguer menu button
    toggleBuguerMenu(event) {
        this.ifBurger = !this.ifBurger;
        if (!this.ifBurger && window.innerWidth < 700) {
            if (this.elem.nativeElement.getElementsByTagName('li')) {
                for (const ele of this.elem.nativeElement.getElementsByTagName('li')) {
                    ele.style.display = 'block';
                    ele.style.margin = 'auto';
                    this.elem.nativeElement.querySelector('fmnbtns').style.top = '-60px';
                    this.elem.nativeElement.querySelector('fmnbtns').style.right = '-10px';
                }
            }
        }
        else {
            this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
        }
    }
    ngAfterContentInit() {
        this.getScreenSize();
    }
    ngAfterViewInit() {
        console.log(this.elem.nativeElement.querySelector('fc-header > img'));
        const primary = this.elem.nativeElement.getAttribute('primary');
        const secondary = this.elem.nativeElement.getAttribute('secondary');
        const warn = this.elem.nativeElement.getAttribute('warn');
        if (primary == '') {
            this.color = 'white';
            this.backgroundcolor = '#77a6f7';
        }
        if (secondary == '') {
            this.color = 'white';
            this.backgroundcolor = '#f7931e';
        }
        if (warn == '') {
            this.color = 'white';
            this.backgroundcolor = '#f7931e';
        }
        this.initColor = this.color;
        this.initBackgroundcolor = this.backgroundcolor;
        let menu = this.menu.nativeElement;
        const list = menu.querySelectorAll('.menuItem');
        const fmnbtns = menu.querySelectorAll('fmnbtns > button');
        for (const btnEle of fmnbtns) {
            btnEle.addEventListener('click', function () {
                for (const menuEle of list) {
                    menuEle.style.background = 'white';
                    menuEle.style.color = 'black';
                }
                for (const btnEle2 of fmnbtns) {
                    btnEle2.style.background = 'white';
                    btnEle2.style.color = background;
                }
                this.style.background = background;
                this.style.color = color;
            });
        }
        list[0].style.background = this.backgroundcolor;
        list[0].style.color = this.color;
        const color = this.color;
        const background = this.backgroundcolor;
        for (const ele of list) {
            ele.addEventListener('click', function () {
                for (const btnEle2 of fmnbtns) {
                    btnEle2.style.background = 'white';
                    btnEle2.style.color = background;
                }
                for (const menuEle of list) {
                    menuEle.style.background = 'white';
                    menuEle.style.color = 'black';
                }
                console.log(this.backgroundcolor);
                this.style.background = background;
                this.style.color = color;
            });
        }
        this.elem.nativeElement.querySelector('fmnbtns').style.position = 'absolute';
        this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
        this.elem.nativeElement.querySelector('fmnbtns').style.right = '-10px';
        this.elem.nativeElement.querySelector('fmnbtns').style.display = 'inline-block';
        for (const btnEle of this.elem.nativeElement.querySelectorAll('button')) {
            btnEle.style.padding = '10px';
        }
        this.ifLoaded = true;
    }
};
FishmenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
];
FishmenuComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['menu',] }],
    bugerMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['bugerMenu',] }],
    getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['window:load', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['window:resize', ['$event'],] }]
};
FishmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'fishmenu',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishmenu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_fishmenu_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FishmenuComponent);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _FishFramwork_fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FishFramwork/fishModalOpener/fish-opener.service */ 4034);
/* harmony import */ var _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-signup-modal/login-signup-modal.component */ 9499);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/auth0-angular */ 751);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _rxjs_action_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rxjs/action/user.action */ 2098);











const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
    `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
    `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
let AppComponent = class AppComponent {
    constructor(router, modalOpener, route, dialog, auth, store) {
        this.router = router;
        this.modalOpener = modalOpener;
        this.route = route;
        this.dialog = dialog;
        this.auth = auth;
        this.store = store;
        this.users$ = this.store.select((store) => store.users);
    }
    ngOnInit() {
        this.auth.user$.subscribe((profile) => {
            if (profile != null) {
                this.profile = profile;
                localStorage.setItem('user_asduhu21askdh!@@!!@', JSON.stringify(profile));
            }
        });
        this.users$.subscribe((x) => {
            this.User = x.User;
            console.log(this.User);
        });
        const self = this;
        if (localStorage.getItem('user_asduhu21askdh!@@!!@') !== null) {
            const user = JSON.parse(localStorage.getItem('user_asduhu21askdh!@@!!@'));
            self.store.dispatch(_rxjs_action_user_action__WEBPACK_IMPORTED_MODULE_4__.SetUserAction({ payload: user }));
        }
    }
    loginModalTrigger() {
        const self = this;
        if (localStorage.getItem('user_asduhu21askdh!@@!!@')) {
            this.router.navigate(['profile']);
        }
        else {
            this.auth.loginWithRedirect();
        }
    }
    myCallbackFunction() {
        this.modalOpener.open(_login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__.LoginSignupModalComponent, null, { width: '400px', height: '530px' });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _FishFramwork_fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_2__.FishOpenerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog },
    { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'my-app',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _FishFramwork_fish_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FishFramwork/fish.module */ 4814);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello.component */ 8324);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ 4532);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-signup-modal/login-signup-modal.component */ 9499);
/* harmony import */ var _login_modal_component_login_modal_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-modal-component/login-modal-component.component */ 2337);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/auth0-angular */ 751);
/* harmony import */ var _rxjs_reducer_user_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rxjs/reducer/user.reducer */ 4746);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 7562);

















// import { ProfileComponent } from './app/profile/profile.component';
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _FishFramwork_fish_module__WEBPACK_IMPORTED_MODULE_0__.FishModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.StoreModule.forRoot({ users: _rxjs_reducer_user_reducer__WEBPACK_IMPORTED_MODULE_7__.UserReducer }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientXsrfModule,
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_16__.AuthModule.forRoot({
                domain: 'library123.auth0.com',
                clientId: 'IMGqmrKqpxLeWj8WYyjj8lhxsh4DecPw'
            }),],
        exports: [],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _hello_component__WEBPACK_IMPORTED_MODULE_2__.HelloComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_5__.LoginSignupModalComponent, _login_modal_component_login_modal_component_component__WEBPACK_IMPORTED_MODULE_6__.LoginModalComponentComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.CUSTOM_ELEMENTS_SCHEMA, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NO_ERRORS_SCHEMA]
    })
], AppModule);



/***/ }),

/***/ 2379:
/*!**********************************************!*\
  !*** ./src/app/fish-router-setup.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routing_Directive": function() { return /* binding */ Routing_Directive; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/products.component */ 4532);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 630);




const routes = [
    { path: '', title: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, ifMenu: false },
    { path: 'product', title: 'Product', component: _products_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent, ifMenu: false },
    { path: 'profile', title: 'Profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, ifMenu: true },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes);
var Routing_Directive = [routing, routes];


/***/ }),

/***/ 8324:
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloComponent": function() { return /* binding */ HelloComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts_css_C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg_C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg!./src/app/hello.component.ts */ 6188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
HelloComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'hello',
        template: `
    <h1>Hello {{ name }}!</h1>
  `,
        styles: [C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts_css_C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg_C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__]
    })
], HelloComponent);



/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 1659);
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 2337:
/*!**************************************************************************!*\
  !*** ./src/app/login-modal-component/login-modal-component.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModalComponentComponent": function() { return /* binding */ LoginModalComponentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_modal_component_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-modal-component.component.html */ 4391);
/* harmony import */ var _login_modal_component_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal-component.component.css */ 5713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let LoginModalComponentComponent = class LoginModalComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginModalComponentComponent.ctorParameters = () => [];
LoginModalComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-modal-component',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_modal_component_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_modal_component_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginModalComponentComponent);



/***/ }),

/***/ 9499:
/*!********************************************************************!*\
  !*** ./src/app/login-signup-modal/login-signup-modal.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSignupModalComponent": function() { return /* binding */ LoginSignupModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-signup-modal.component.html */ 1681);
/* harmony import */ var _login_signup_modal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-signup-modal.component.css */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let LoginSignupModalComponent = class LoginSignupModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginSignupModalComponent.ctorParameters = () => [];
LoginSignupModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-signup-modal',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_signup_modal_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginSignupModalComponent);



/***/ }),

/***/ 4532:
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": function() { return /* binding */ ProductsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.component.html */ 8822);
/* harmony import */ var _products_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.css */ 4834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent.ctorParameters = () => [];
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-products',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */ 612);
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.css */ 289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 7761);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 2098:
/*!****************************************!*\
  !*** ./src/rxjs/action/user.action.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserAction": function() { return /* binding */ GetUserAction; },
/* harmony export */   "CreateUserAction": function() { return /* binding */ CreateUserAction; },
/* harmony export */   "SetUserAction": function() { return /* binding */ SetUserAction; },
/* harmony export */   "ErrorUserAction": function() { return /* binding */ ErrorUserAction; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 7562);

//Starter
const GetUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User] - Get User');
const CreateUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User] - Cretaer User', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SetUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User] - Success Get User', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ErrorUserAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User] - Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 4746:
/*!******************************************!*\
  !*** ./src/rxjs/reducer/user.reducer.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intialState": function() { return /* binding */ intialState; },
/* harmony export */   "UserReducer": function() { return /* binding */ UserReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _action_user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/user.action */ 2098);
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/user.state */ 614);



const intialState = (0,_state_user_state__WEBPACK_IMPORTED_MODULE_1__.initializeState)();
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(intialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_action_user_action__WEBPACK_IMPORTED_MODULE_0__.GetUserAction, (state) => state), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_action_user_action__WEBPACK_IMPORTED_MODULE_0__.SetUserAction, (state, { payload }) => {
    return Object.assign(Object.assign({}, state), { User: payload });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_action_user_action__WEBPACK_IMPORTED_MODULE_0__.ErrorUserAction, (state, error) => {
    console.log(error);
    return Object.assign(Object.assign({}, state), { UserError: error });
}));
function UserReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 614:
/*!**************************************!*\
  !*** ./src/rxjs/state/user.state.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserState; },
/* harmony export */   "initializeState": function() { return /* binding */ initializeState; }
/* harmony export */ });
class UserState {
}
const initializeState = () => {
    return { User: null, UserErr: null, Loading: false };
};


/***/ }),

/***/ 8023:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/FishFramwork/fish-field/fish-field.component.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <mat-form-field color='primary' appearance=\"legacy\" class='fishFormField' [style.fontSize.px]=24>\n    <mat-label>{{inputTitle}}</mat-label>\n    <input matInput />\n   \n  </mat-form-field>\n");

/***/ }),

/***/ 1861:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/FishFramwork/fish-modal-frame/fish-modal-frame.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-dialog-content class=\"mat-typography\"  >\n  \n<button style='float: right;'  mat-icon-button mat-dialog-close>\n    <mat-icon>close</mat-icon>\n  </button>\n   <ng-content select='fmcontent'></ng-content>\n</mat-dialog-content>\n<mat-dialog-actions align=\"start\" [style.paddingBottom.px]=30>\n  <ng-content select='fmaction'></ng-content>\n  <!-- <button color='primary' style='width: 140px;height: 40px;;font-size: 20px;' mat-flat-button >登录</button>\n  <button color='primary' mat-button>还未注册？点击注册</button> -->\n  <!-- <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n</mat-dialog-actions>\n\n");

/***/ }),

/***/ 5118:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/FishFramwork/fishcard/fishcard.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <ng-content></ng-content>\n    <!-- <img src=\"{{topSrc}}\" alt=\"Avatar\" style=\"width:100%\">\n    <div class=\"container\">\n      <h4><b>Jane Doe</b></h4> \n      <hr class=\"solid\">\n      <p>Interior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior Designer</p> \n    </div> -->\n  </div>\n");

/***/ }),

/***/ 5570:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/FishFramwork/fishmenu/fishmenu.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div #menu [innerHTML]=\"theHtmlMenuSanitizer\"></div> -->\n<div #menu id=\"cssmenu\" [style.visibility]=\"'ifLoaded'\">\n    <div [hidden]=\"ifBurgerButton\" #bugerMenu  [ngClass]=\"!ifBurger ? 'change' : ''\" class=\"BugerContainer\" (click)=\"toggleBuguerMenu($event)\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n       \n    </div>\n    \n    <ul [hidden]=\"ifBurger\" class='fishNormalMenu' >\n        <li *ngFor=\"let menuItem of menuItems\"  >\n            <div *ngIf =\"!menuItem.ifMenu\"  class='menuItem' [style]=\"style\" routerLink='{{menuItem.path}}'>{{menuItem.title}}</div>\n        </li>\n        <ng-content select='fmnbtns'></ng-content>    \n    </ul>\n    \n</div>     \n<router-outlet></router-outlet>");

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<b>Fish Button</b>\n<p>basic:</p>\n<button  fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>flat:</p>\n<button flat primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button flat secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button flat warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>raise:</p>\n<button raise primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button raise secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button raise warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>outline:</p>\n<button outline primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button outline secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button outline warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>fab:</p>\n<button fab primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button fab secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button fab  warn fbtn (click)=\"myCallbackFunction()\">warn </button>\n<br>\n<p>minifab:</p>\n<button minifab primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button minifab secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button minifab  warn fbtn (click)=\"myCallbackFunction()\">warn </button>\n<br>\n<p>disabled:</p>\n<button disabled primary fab fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button disabled secondary fab fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button disabled primary  class='lastBtn' fab fbtn (click)=\"myCallbackFunction()\">warn </button>\n\n<br>\n<br>\n<b>Card:</b>\n<br>\n<br>\n<fishcard width='100%' >\n    <fc-header>\n        <img topImg id='asd' src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'/>\n        <p title>123123</p>\n    </fc-header>\n    <fc-body>\n        <p>asdadasdasdasdasdadsadasd</p>\n    </fc-body>\n    \n</fishcard> -->\n\n<fishmenu primary>\n    <fmnbtns>\n        <button primary fbtn style='padding:0'  (click)=\"loginModalTrigger()\">\n            <mat-icon style='width: 38px;height: 38px;line-height: 38px;font-size: 38px;'>perm_identity </mat-icon>\n        </button>\n        <button primary fbtn style='padding:0' (click)=\"myCallbackFunction()\">\n            <mat-icon style='width: 38px;height: 38px;line-height: 38px;font-size: 38px;'>search </mat-icon>\n        </button>\n    </fmnbtns>\n</fishmenu>\n\n");

/***/ }),

/***/ 1659:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");

/***/ }),

/***/ 4391:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login-modal-component/login-modal-component.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login-modal-component works!</p>\n");

/***/ }),

/***/ 1681:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login-signup-modal/login-signup-modal.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fmmodal title='Login/Signup'>\n    <fmcontent>\n        <finput type='text' title='email'></finput>\n        <finput type='password' title='password'></finput>\n    </fmcontent>\n    <fmaction>\n        <button fbtn flat primary>登录</button>\n        <button fbtn>注册</button>\n    </fmaction>\n</fmmodal>");

/***/ }),

/***/ 8822:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/products/products.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>products works!</p>\n");

/***/ }),

/***/ 612:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ 6188:
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg!./src/app/hello.component.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n      h1 {\n        font-family: Lato;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuICAgICJdfQ== */";

/***/ }),

/***/ 4296:
/*!**************************************************************!*\
  !*** ./src/FishFramwork/fish-field/fish-field.component.css ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".fishFormField {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2gtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJmaXNoLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlzaEZvcm1GaWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5807:
/*!**************************************************************************!*\
  !*** ./src/FishFramwork/fish-modal-frame/fish-modal-frame.component.css ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "mat-dialog-container {\r\n  background: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2gtbW9kYWwtZnJhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJmaXNoLW1vZGFsLWZyYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3329:
/*!**********************************************************!*\
  !*** ./src/FishFramwork/fishcard/fishcard.component.css ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  width: 300px;\r\n  min-width: 200px !important;\r\n  border-radius: 5px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card > img {\r\n  border-radius: 5px 5px 0 0;\r\n  max-height: 300px;\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\nhr.solid {\r\n  border-top: 1px solid #bbb;\r\n  width: 80% !important;\r\n  margin: auto;\r\n}\r\n\r\n.container > h4 {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2hjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZpc2hjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jYXJkID4gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuaHIuc29saWQge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiO1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lciA+IGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6557:
/*!**********************************************************!*\
  !*** ./src/FishFramwork/fishmenu/fishmenu.component.css ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "#cssmenu {\r\n  display: block;\r\n  text-align: center;\r\n  font-family: \"Pathway Gothic One\", Helvetica, Arial, sans-serif;\r\n  line-height: 1.2;\r\n  margin-top: 20px;\r\n}\r\n#cssmenu > ul {\r\n}\r\n#cssmenu ul {\r\n  max-width: 90vw;\r\n  display: block;\r\n  font-size: 0;\r\n  text-align: center;\r\n  color: #000000;\r\n  background-color: #ffffff;\r\n  border: transparent;\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n\r\n  border-radius: 3px;\r\n  margin-top: 20px;\r\n}\r\n#cssmenu li {\r\n  position: relative;\r\n  font-size: 0;\r\n  margin: 5px;\r\n  padding: 0;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n}\r\n/*Top level items\r\n  ---------------------------------------*/\r\n#cssmenu > ul > li > span,\r\n#cssmenu > ul > li > div {\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  padding: 20px 20px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  display: block;\r\n  position: relative;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n#cssmenu > ul > li > div:hover {\r\n  /* color: var(--color) !important;\r\n  background: var(--background) !important; */\r\n}\r\n.bugerContainer {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n.bar1,\r\n.bar2,\r\n.bar3 {\r\n  width: 35px;\r\n  height: 5px;\r\n  background-color: #333;\r\n  margin: 6px 0;\r\n  transition: 0.4s;\r\n}\r\n.change .bar1 {\r\n  transform: rotate(-45deg) translate(-9px, 6px);\r\n}\r\n.change .bar2 {\r\n  opacity: 0;\r\n}\r\n.change .bar3 {\r\n  transform: rotate(45deg) translate(-8px, -8px);\r\n}\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n.menuDisplayBlock {\r\n  display: inline-block;\r\n}\r\n.fishNormalMenu {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2htZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7MENBQzBDO0FBRTFDOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFOzZDQUMyQztBQUM3QztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBO0VBRUUsOENBQThDO0FBQ2hEO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUVFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoiZmlzaG1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjc3NtZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGF0aHdheSBHb3RoaWMgT25lXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiNjc3NtZW51ID4gdWwge1xyXG59XHJcbiNjc3NtZW51IHVsIHtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jY3NzbWVudSBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qVG9wIGxldmVsIGl0ZW1zXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiNjc3NtZW51ID4gdWwgPiBsaSA+IHNwYW4sXHJcbiNjc3NtZW51ID4gdWwgPiBsaSA+IGRpdiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiNjc3NtZW51ID4gdWwgPiBsaSA+IGRpdjpob3ZlciB7XHJcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmJ1Z2VyQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFyMSxcclxuLmJhcjIsXHJcbi5iYXIzIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbjogNnB4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmNoYW5nZSAuYmFyMSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XHJcbn1cclxuXHJcbi5jaGFuZ2UgLmJhcjIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jaGFuZ2UgLmJhcjMge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xyXG59XHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVEaXNwbGF5QmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZmlzaE5vcm1hbE1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = "a {\n  color: blue !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 2698:
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 5713:
/*!***************************************************************************!*\
  !*** ./src/app/login-modal-component/login-modal-component.component.css ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tb2RhbC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 1035:
/*!*********************************************************************!*\
  !*** ./src/app/login-signup-modal/login-signup-modal.component.css ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1zaWdudXAtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 4834:
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 289:
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map