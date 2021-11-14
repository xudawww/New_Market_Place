(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    80192: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishFieldComponent": function FishFieldComponent() {
          return (
            /* binding */
            _FishFieldComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fish-field.component.html */
      38023);
      /* harmony import */


      var _fish_field_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fish-field.component.css */
      94296);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FishFieldComponent = /*#__PURE__*/function () {
        function FishFieldComponent(type, title) {
          _classCallCheck(this, FishFieldComponent);

          this.type = type;
          this.title = title;
          this.inputType = type;
          this.inputTitle = title;
        }

        _createClass(FishFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FishFieldComponent;
      }();

      _FishFieldComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['type']
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['title']
          }]
        }];
      };

      _FishFieldComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'finput',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_field_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fish_field_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _FishFieldComponent);
      /***/
    },

    /***/
    68390: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishModalFrameComponent": function FishModalFrameComponent() {
          return (
            /* binding */
            _FishModalFrameComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_modal_frame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fish-modal-frame.component.html */
      1861);
      /* harmony import */


      var _fish_modal_frame_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fish-modal-frame.component.css */
      85807);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FishModalFrameComponent = /*#__PURE__*/function () {
        function FishModalFrameComponent(title, elem) {
          _classCallCheck(this, FishModalFrameComponent);

          this.title = title;
          this.elem = elem;
          this.modalTitle = title;
        }

        _createClass(FishModalFrameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FishModalFrameComponent;
      }();

      _FishModalFrameComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['title']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      _FishModalFrameComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'fmmodal',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fish_modal_frame_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fish_modal_frame_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _FishModalFrameComponent);
      /***/
    },

    /***/
    46490: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishRoutingModule": function FishRoutingModule() {
          return (
            /* binding */
            _FishRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app/fish-router-setup.service */
      92379);

      var _FishRoutingModule = function FishRoutingModule() {
        _classCallCheck(this, FishRoutingModule);
      };

      _FishRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_0__.Routing_Directive[0]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FishRoutingModule);
      /***/
    },

    /***/
    44814: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishModule": function FishModule() {
          return (
            /* binding */
            _FishModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fishBtn/fishbtn.directive */
      40674);
      /* harmony import */


      var _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fishcard/fishcard.component */
      37733);
      /* harmony import */


      var _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fish-routing.module */
      46490);
      /* harmony import */


      var _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fishcard/fishcard-header.directive */
      77234);
      /* harmony import */


      var _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fishmenu/fishmenu.component */
      71991);
      /* harmony import */


      var _fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fishModalOpener/fish-opener.service */
      94034);
      /* harmony import */


      var _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fish-modal-frame/fish-modal-frame.component */
      68390);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      53894);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/material/tree */
      75473);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      45129);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./fish-field/fish-field.component */
      80192);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);

      var _FishModule = function FishModule() {
        _classCallCheck(this, FishModule);
      };

      _FishModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__.FishbtnDirective, _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__.FishcardComponent, _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__.FishcardHeaderDirective, _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__.FishmenuComponent, _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__.FishModalFrameComponent, _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__.FishFieldComponent],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__.FishRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.BidiModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_39__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_45__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__.MatTreeModule],
        exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _fishBtn_fishbtn_directive__WEBPACK_IMPORTED_MODULE_0__.FishbtnDirective, _fishcard_fishcard_component__WEBPACK_IMPORTED_MODULE_1__.FishcardComponent, _fishcard_fishcard_header_directive__WEBPACK_IMPORTED_MODULE_3__.FishcardHeaderDirective, _fish_routing_module__WEBPACK_IMPORTED_MODULE_2__.FishRoutingModule, _fishmenu_fishmenu_component__WEBPACK_IMPORTED_MODULE_4__.FishmenuComponent, _fish_modal_frame_fish_modal_frame_component__WEBPACK_IMPORTED_MODULE_6__.FishModalFrameComponent, _fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_5__.FishOpenerService, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule, _fish_field_fish_field_component__WEBPACK_IMPORTED_MODULE_7__.FishFieldComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule]
      })], _FishModule);
      /***/
    },

    /***/
    40674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishbtnDirective": function FishbtnDirective() {
          return (
            /* binding */
            _FishbtnDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FishbtnDirective = /*#__PURE__*/function () {
        function FishbtnDirective(el) {
          _classCallCheck(this, FishbtnDirective);

          this.el = el;
          el.nativeElement.style.textAlign = 'center';
          el.nativeElement.style.padding = '10px 20px';
          el.nativeElement.style.borderRadius = '5px';
          el.nativeElement.style.border = 'none';
          el.nativeElement.style.cursor = 'pointer';
          el.nativeElement.style.fontSize = '26px';
          el.nativeElement.style.filter = 'brightness(1)';
          el.nativeElement.style.marginRight = '10px';
          var disabled = el.nativeElement.getAttribute('disabled');
          var primary = el.nativeElement.getAttribute('primary');
          var secondary = el.nativeElement.getAttribute('secondary');
          var warn = el.nativeElement.getAttribute('warn');
          var raise = el.nativeElement.getAttribute('raise');
          var flat = el.nativeElement.getAttribute('flat');
          var fab = el.nativeElement.getAttribute('fab');
          var minifab = el.nativeElement.getAttribute('minifab');
          var outline = el.nativeElement.getAttribute('outline');
          var backgroundOrColor = raise === '' || flat === '' || fab === '' || minifab === '' ? 'background' : 'color';
          primary === '' ? el.nativeElement.style[backgroundOrColor] = '#77a6f7' : null;
          secondary === '' ? el.nativeElement.style[backgroundOrColor] = '#f7931e' : null;
          warn === '' ? el.nativeElement.style[backgroundOrColor] = '#f44336' : null;

          if (backgroundOrColor === 'background') {
            el.nativeElement.style.color = primary === null && secondary === null && warn === null ? 'grey' : 'white';
          } else {
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

        _createClass(FishbtnDirective, [{
          key: "onMouseOver",
          value: function onMouseOver() {
            this.el.nativeElement.style.filter = 'brightness(0.9)';
          }
        }, {
          key: "onMouseOut",
          value: function onMouseOut() {
            this.el.nativeElement.style.filter = 'brightness(1)';
          }
        }]);

        return FishbtnDirective;
      }();

      _FishbtnDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _FishbtnDirective.propDecorators = {
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseover']
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseout']
        }]
      };
      _FishbtnDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[fbtn]'
      })], _FishbtnDirective);
      /***/
    },

    /***/
    94034: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishOpenerService": function FishOpenerService() {
          return (
            /* binding */
            _FishOpenerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _FishOpenerService = /*#__PURE__*/function () {
        function FishOpenerService(dialog) {
          _classCallCheck(this, FishOpenerService);

          this.dialog = dialog;
        }

        _createClass(FishOpenerService, [{
          key: "open",
          value: function open(component, data, size) {
            this.dialog.open(component, {
              width: size.width,
              data: {},
              disableClose: true
            });
          }
        }, {
          key: "close",
          value: function close() {}
        }]);

        return FishOpenerService;
      }();

      _FishOpenerService.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialog
        }];
      };

      _FishOpenerService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _FishOpenerService);
      /***/
    },

    /***/
    77234: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishcardHeaderDirective": function FishcardHeaderDirective() {
          return (
            /* binding */
            _FishcardHeaderDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FishcardHeaderDirective = function FishcardHeaderDirective() {
        _classCallCheck(this, FishcardHeaderDirective);

        console.log('123');
      };

      _FishcardHeaderDirective.ctorParameters = function () {
        return [];
      };

      _FishcardHeaderDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: 'fc-header'
      })], _FishcardHeaderDirective);
      /***/
    },

    /***/
    37733: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishcardComponent": function FishcardComponent() {
          return (
            /* binding */
            _FishcardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishcard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fishcard.component.html */
      65118);
      /* harmony import */


      var _fishcard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fishcard.component.css */
      63329);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FishcardComponent = /*#__PURE__*/function () {
        function FishcardComponent(elem) {
          _classCallCheck(this, FishcardComponent);

          this.elem = elem;
          console.log(this.elem.nativeElement.innerHTML);
        }

        _createClass(FishcardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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

              var _iterator = _createForOfIteratorHelper(allHeaderChildren),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var ele = _step.value;
                  console.log(ele.tagName);

                  if (ele.tagName != 'IMG') {
                    ele.style.margin = '0.8rem';
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
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
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            console.log(this.elem.nativeElement.querySelector('fc-header > img'));

            if (this.elem.nativeElement.querySelector('fc-header')) {
              if (this.elem.nativeElement.querySelector('fc-header > img')) this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
              if (this.elem.nativeElement.querySelector('fc-header > p')) this.elem.nativeElement.querySelector('fc-header > img').style.width = '100%';
              this.elem.nativeElement.querySelector('fc-header').innerHTML += '<hr class="solid">';
            }

            if (this.elem.nativeElement.querySelector('fc-body')) {}
          }
        }]);

        return FishcardComponent;
      }();

      _FishcardComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      _FishcardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'fishcard',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishcard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fishcard_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _FishcardComponent);
      /***/
    },

    /***/
    71991: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FishmenuComponent": function FishmenuComponent() {
          return (
            /* binding */
            _FishmenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishmenu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fishmenu.component.html */
      85570);
      /* harmony import */


      var _fishmenu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fishmenu.component.css */
      86557);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_fish_router_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../app/fish-router-setup.service */
      92379);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);

      var _FishmenuComponent = /*#__PURE__*/function () {
        function FishmenuComponent(elem, sanitizer) {
          _classCallCheck(this, FishmenuComponent);

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

        _createClass(FishmenuComponent, [{
          key: "getScreenSize",
          value: function getScreenSize(event) {
            console.log(window.innerWidth);
            this.ifBurger = window.innerWidth < 700 ? true : false;
            this.ifBurgerButton = window.innerWidth > 700 ? true : false;

            if (window.innerWidth > 700) {
              if (this.elem.nativeElement.getElementsByTagName('li')) {
                var _iterator2 = _createForOfIteratorHelper(this.elem.nativeElement.getElementsByTagName('li')),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var ele = _step2.value;
                    ele.style.display = 'inline-block';
                    ele.style.margin = '5px';
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          }
        }, {
          key: "style",
          get: function get() {
            return this.sanitizer.bypassSecurityTrustStyle("--color: ".concat(this.initColor, ";--background:").concat(this.initBackgroundcolor));
          } //Toggle the buguer menu button

        }, {
          key: "toggleBuguerMenu",
          value: function toggleBuguerMenu(event) {
            this.ifBurger = !this.ifBurger;

            if (!this.ifBurger && window.screen.width < 700) {
              if (this.elem.nativeElement.getElementsByTagName('li')) {
                var _iterator3 = _createForOfIteratorHelper(this.elem.nativeElement.getElementsByTagName('li')),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var ele = _step3.value;
                    ele.style.display = 'block';
                    ele.style.margin = 'auto';
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.getScreenSize();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.elem.nativeElement.querySelector('fc-header > img'));
            var primary = this.elem.nativeElement.getAttribute('primary');
            var secondary = this.elem.nativeElement.getAttribute('secondary');
            var warn = this.elem.nativeElement.getAttribute('warn');

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
            var menu = this.menu.nativeElement;
            var list = menu.querySelectorAll('.menuItem');
            list[0].style.background = this.backgroundcolor;
            list[0].style.color = this.color;
            var color = this.color;
            var background = this.backgroundcolor;

            var _iterator4 = _createForOfIteratorHelper(list),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var ele = _step4.value;
                ele.addEventListener('click', function () {
                  var _iterator6 = _createForOfIteratorHelper(list),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var menuEle = _step6.value;
                      menuEle.style.background = 'white';
                      menuEle.style.color = 'black';
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  console.log(this.backgroundcolor);
                  this.style.background = background;
                  this.style.color = color;
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.elem.nativeElement.querySelector('fmnbtns').style.position = 'absolute';
            this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
            this.elem.nativeElement.querySelector('fmnbtns').style.right = '10px';
            this.elem.nativeElement.querySelector('fmnbtns').style.display = 'inline-block';

            var _iterator5 = _createForOfIteratorHelper(this.elem.nativeElement.querySelectorAll('button')),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var btnEle = _step5.value;
                btnEle.style.padding = '10px';
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.ifLoaded = true;
          }
        }]);

        return FishmenuComponent;
      }();

      _FishmenuComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
        }];
      };

      _FishmenuComponent.propDecorators = {
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['menu']
        }],
        bugerMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['bugerMenu']
        }],
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['window:load', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
          args: ['window:resize', ['$event']]
        }]
      };
      _FishmenuComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'fishmenu',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fishmenu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_fishmenu_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _FishmenuComponent);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      6849);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _FishFramwork_fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../FishFramwork/fishModalOpener/fish-opener.service */
      94034);
      /* harmony import */


      var _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-signup-modal/login-signup-modal.component */
      39499);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var THUMBUP_ICON = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-." + "44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5" + "1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z\"/>\n  </svg>\n";

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(modalOpener, dialog) {
          _classCallCheck(this, AppComponent);

          this.modalOpener = modalOpener;
          this.dialog = dialog;
        }

        _createClass(AppComponent, [{
          key: "myCallbackFunction",
          value: function myCallbackFunction() {
            this.modalOpener.open(_login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__.LoginSignupModalComponent, null, {
              width: '400px',
              height: '530px'
            });
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _FishFramwork_fishModalOpener_fish_opener_service__WEBPACK_IMPORTED_MODULE_2__.FishOpenerService
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'my-app',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _FishFramwork_fish_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../FishFramwork/fish.module */
      44814);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _hello_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hello.component */
      78324);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products/products.component */
      44532);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-signup-modal/login-signup-modal.component */
      39499);
      /* harmony import */


      var _login_modal_component_login_modal_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-modal-component/login-modal-component.component */
      12337);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _FishFramwork_fish_module__WEBPACK_IMPORTED_MODULE_0__.FishModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _hello_component__WEBPACK_IMPORTED_MODULE_2__.HelloComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _login_signup_modal_login_signup_modal_component__WEBPACK_IMPORTED_MODULE_5__.LoginSignupModalComponent, _login_modal_component_login_modal_component_component__WEBPACK_IMPORTED_MODULE_6__.LoginModalComponentComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NO_ERRORS_SCHEMA]
      })], _AppModule);
      /***/
    },

    /***/
    92379: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Routing_Directive": function Routing_Directive() {
          return (
            /* binding */
            _Routing_Directive
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products/products.component */
      44532);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      45067);

      var routes = [{
        path: '',
        title: 'Home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
      }, {
        path: 'product',
        title: 'Product',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
      }];

      var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes);

      var _Routing_Directive = [routing, routes];
      /***/
    },

    /***/
    78324: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelloComponent": function HelloComponent() {
          return (
            /* binding */
            _HelloComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts_css_C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg_C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/app/hello.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg!./src/app/hello.component.ts */
      46188);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HelloComponent = function HelloComponent() {
        _classCallCheck(this, HelloComponent);
      };

      _HelloComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }]
      };
      _HelloComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'hello',
        template: "\n    <h1>Hello {{ name }}!</h1>\n  ",
        styles: [C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts_css_C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIGgxIHsKICAgICAgICBmb250LWZhbWlseTogTGF0bzsKICAgICAgfQogICAg_C_Users_xudawww_Desktop_marketplaceNewest_frontend_src_app_hello_component_ts__WEBPACK_IMPORTED_MODULE_0__]
      })], _HelloComponent);
      /***/
    },

    /***/
    45067: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */
      91659);
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component.css */
      92698);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      _HomeComponent.ctorParameters = function () {
        return [];
      };

      _HomeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomeComponent);
      /***/
    },

    /***/
    12337: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginModalComponentComponent": function LoginModalComponentComponent() {
          return (
            /* binding */
            _LoginModalComponentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_modal_component_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-modal-component.component.html */
      24391);
      /* harmony import */


      var _login_modal_component_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-modal-component.component.css */
      65713);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LoginModalComponentComponent = /*#__PURE__*/function () {
        function LoginModalComponentComponent() {
          _classCallCheck(this, LoginModalComponentComponent);
        }

        _createClass(LoginModalComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginModalComponentComponent;
      }();

      _LoginModalComponentComponent.ctorParameters = function () {
        return [];
      };

      _LoginModalComponentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-modal-component',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_modal_component_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_modal_component_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _LoginModalComponentComponent);
      /***/
    },

    /***/
    39499: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginSignupModalComponent": function LoginSignupModalComponent() {
          return (
            /* binding */
            _LoginSignupModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-signup-modal.component.html */
      21681);
      /* harmony import */


      var _login_signup_modal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-signup-modal.component.css */
      91035);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LoginSignupModalComponent = /*#__PURE__*/function () {
        function LoginSignupModalComponent() {
          _classCallCheck(this, LoginSignupModalComponent);
        }

        _createClass(LoginSignupModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginSignupModalComponent;
      }();

      _LoginSignupModalComponent.ctorParameters = function () {
        return [];
      };

      _LoginSignupModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-signup-modal',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_signup_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_signup_modal_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _LoginSignupModalComponent);
      /***/
    },

    /***/
    44532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsComponent": function ProductsComponent() {
          return (
            /* binding */
            _ProductsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.component.html */
      8822);
      /* harmony import */


      var _products_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.component.css */
      84834);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent() {
          _classCallCheck(this, ProductsComponent);
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsComponent;
      }();

      _ProductsComponent.ctorParameters = function () {
        return [];
      };

      _ProductsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-products',
        template: _C_Users_xudawww_Desktop_marketplaceNewest_frontend_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProductsComponent);
      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      7435);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    7435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js */
      47761);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
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

      /***/

    },

    /***/
    38023: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <mat-form-field color='primary' appearance=\"legacy\" class='fishFormField' [style.fontSize.px]=24>\n    <mat-label>{{inputTitle}}</mat-label>\n    <input matInput />\n   \n  </mat-form-field>\n";
      /***/
    },

    /***/
    1861: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<mat-dialog-content class=\"mat-typography\"  >\n  \n<button style='float: right;'  mat-icon-button mat-dialog-close>\n    <mat-icon>close</mat-icon>\n  </button>\n   <ng-content select='fmcontent'></ng-content>\n</mat-dialog-content>\n<mat-dialog-actions align=\"start\" [style.paddingBottom.px]=30>\n  <ng-content select='fmaction'></ng-content>\n  <!-- <button color='primary' style='width: 140px;height: 40px;;font-size: 20px;' mat-flat-button >登录</button>\n  <button color='primary' mat-button>还未注册？点击注册</button> -->\n  <!-- <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n</mat-dialog-actions>\n\n";
      /***/
    },

    /***/
    65118: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <ng-content></ng-content>\n    <!-- <img src=\"{{topSrc}}\" alt=\"Avatar\" style=\"width:100%\">\n    <div class=\"container\">\n      <h4><b>Jane Doe</b></h4> \n      <hr class=\"solid\">\n      <p>Interior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior DesignerInterior Designer</p> \n    </div> -->\n  </div>\n";
      /***/
    },

    /***/
    85570: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div #menu [innerHTML]=\"theHtmlMenuSanitizer\"></div> -->\n<div #menu id=\"cssmenu\" [style.visibility]=\"'ifLoaded'\">\n    <div [hidden]=\"ifBurgerButton\" #bugerMenu  [ngClass]=\"!ifBurger ? 'change' : ''\" class=\"BugerContainer\" (click)=\"toggleBuguerMenu($event)\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n       \n    </div>\n    \n    <ul [hidden]=\"ifBurger\" class='fishNormalMenu' >\n        <li *ngFor=\"let menuItem of menuItems\"  >\n            <div  class='menuItem' [style]=\"style\" routerLink='{{menuItem.path}}'>{{menuItem.title}}</div>\n        </li>\n        <ng-content select='fmnbtns'></ng-content>    \n    </ul>\n    \n</div>     \n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    75158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n<b>Fish Button</b>\n<p>basic:</p>\n<button  fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>flat:</p>\n<button flat primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button flat secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button flat warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>raise:</p>\n<button raise primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button raise secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button raise warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>outline:</p>\n<button outline primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button outline secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button outline warn fbtn (click)=\"myCallbackFunction()\">warn</button>\n<br>\n<p>fab:</p>\n<button fab primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button fab secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button fab  warn fbtn (click)=\"myCallbackFunction()\">warn </button>\n<br>\n<p>minifab:</p>\n<button minifab primary fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button minifab secondary fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button minifab  warn fbtn (click)=\"myCallbackFunction()\">warn </button>\n<br>\n<p>disabled:</p>\n<button disabled primary fab fbtn (click)=\"myCallbackFunction()\">primary</button>\n<button disabled secondary fab fbtn (click)=\"myCallbackFunction()\">secondary</button>\n<button disabled primary  class='lastBtn' fab fbtn (click)=\"myCallbackFunction()\">warn </button>\n\n<br>\n<br>\n<b>Card:</b>\n<br>\n<br>\n<fishcard width='100%' >\n    <fc-header>\n        <img topImg id='asd' src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'/>\n        <p title>123123</p>\n    </fc-header>\n    <fc-body>\n        <p>asdadasdasdasdasdadsadasd</p>\n    </fc-body>\n    \n</fishcard> -->\n\n<fishmenu primary>\n    <fmnbtns>\n        <button primary fbtn style='padding:0' (click)=\"myCallbackFunction()\">\n            <mat-icon style='width: 38px;height: 38px;line-height: 38px;font-size: 38px;'>perm_identity </mat-icon>\n        </button>\n        <button primary fbtn style='padding:0' (click)=\"myCallbackFunction()\">\n            <mat-icon style='width: 38px;height: 38px;line-height: 38px;font-size: 38px;'>search </mat-icon>\n        </button>\n    </fmnbtns>\n</fishmenu>\n\n";
      /***/
    },

    /***/
    91659: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>home works!</p>\n";
      /***/
    },

    /***/
    24391: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>login-modal-component works!</p>\n";
      /***/
    },

    /***/
    21681: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<fmmodal title='Login/Signup'>\n    <fmcontent>\n        <finput type='text' title='email'></finput>\n        <finput type='password' title='password'></finput>\n    </fmcontent>\n    <fmaction>\n        <button fbtn flat primary>登录</button>\n        <button fbtn>注册</button>\n    </fmaction>\n</fmmodal>";
      /***/
    },

    /***/
    8822: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>products works!</p>\n";
      /***/
    },

    /***/
    46188: function _(module) {
      "use strict";

      module.exports = "\n      h1 {\n        font-family: Lato;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxpQkFBaUI7TUFDbkIiLCJmaWxlIjoiaGVsbG8uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuICAgICJdfQ== */";
      /***/
    },

    /***/
    94296: function _(module) {
      "use strict";

      module.exports = ".fishFormField {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2gtZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJmaXNoLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlzaEZvcm1GaWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    85807: function _(module) {
      "use strict";

      module.exports = "mat-dialog-container {\r\n  background: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2gtbW9kYWwtZnJhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJmaXNoLW1vZGFsLWZyYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    63329: function _(module) {
      "use strict";

      module.exports = ".card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  width: 300px;\r\n  min-width: 200px !important;\r\n  border-radius: 5px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card > img {\r\n  border-radius: 5px 5px 0 0;\r\n  max-height: 300px;\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\nhr.solid {\r\n  border-top: 1px solid #bbb;\r\n  width: 80% !important;\r\n  margin: auto;\r\n}\r\n\r\n.container > h4 {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2hjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZpc2hjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5jYXJkID4gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuaHIuc29saWQge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiO1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lciA+IGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    86557: function _(module) {
      "use strict";

      module.exports = "#cssmenu {\r\n  display: block;\r\n  text-align: center;\r\n  font-family: \"Pathway Gothic One\", Helvetica, Arial, sans-serif;\r\n  line-height: 1.2;\r\n  margin-top: 20px;\r\n}\r\n#cssmenu > ul {\r\n}\r\n#cssmenu ul {\r\n  max-width: 90vw;\r\n  display: block;\r\n  font-size: 0;\r\n  text-align: center;\r\n  color: #000000;\r\n  background-color: #ffffff;\r\n  border: transparent;\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n\r\n  border-radius: 3px;\r\n  margin-top: 20px;\r\n}\r\n#cssmenu li {\r\n  position: relative;\r\n  font-size: 0;\r\n  margin: 5px;\r\n  padding: 0;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n}\r\n/*Top level items\r\n  ---------------------------------------*/\r\n#cssmenu > ul > li > span,\r\n#cssmenu > ul > li > div {\r\n  font-size: 22px;\r\n  text-decoration: none;\r\n  padding: 20px 20px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  display: block;\r\n  position: relative;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n#cssmenu > ul > li > div:hover {\r\n  color: var(--color) !important;\r\n  background: var(--background) !important;\r\n}\r\n.bugerContainer {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n.bar1,\r\n.bar2,\r\n.bar3 {\r\n  width: 35px;\r\n  height: 5px;\r\n  background-color: #333;\r\n  margin: 6px 0;\r\n  transition: 0.4s;\r\n}\r\n.change .bar1 {\r\n  transform: rotate(-45deg) translate(-9px, 6px);\r\n}\r\n.change .bar2 {\r\n  opacity: 0;\r\n}\r\n.change .bar3 {\r\n  transform: rotate(45deg) translate(-8px, -8px);\r\n}\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n.menuDisplayBlock {\r\n  display: inline-block;\r\n}\r\n.fishNormalMenu {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpc2htZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7MENBQzBDO0FBRTFDOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTtFQUVFLDhDQUE4QztBQUNoRDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFFRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6ImZpc2htZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3NzbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBhdGh3YXkgR290aGljIE9uZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4jY3NzbWVudSA+IHVsIHtcclxufVxyXG4jY3NzbWVudSB1bCB7XHJcbiAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Nzc21lbnUgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKlRvcCBsZXZlbCBpdGVtc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4jY3NzbWVudSA+IHVsID4gbGkgPiBzcGFuLFxyXG4jY3NzbWVudSA+IHVsID4gbGkgPiBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jY3NzbWVudSA+IHVsID4gbGkgPiBkaXY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG59XHJcbi5idWdlckNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJhcjEsXHJcbi5iYXIyLFxyXG4uYmFyMyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBtYXJnaW46IDZweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5jaGFuZ2UgLmJhcjEge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xyXG59XHJcblxyXG4uY2hhbmdlIC5iYXIyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2hhbmdlIC5iYXIzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxufVxyXG5baGlkZGVuXSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tZW51RGlzcGxheUJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmZpc2hOb3JtYWxNZW51IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    6849: function _(module) {
      "use strict";

      module.exports = "a {\n  color: blue !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    92698: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    65713: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tb2RhbC1jb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    91035: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1zaWdudXAtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    84834: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map