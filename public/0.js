(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Welcome",
  components: {
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_0__["Slide"],
    owl_carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { attrs: { id: "hero" } },
      [
        _c(
          "carousel",
          {
            attrs: {
              "per-page": 1,
              "auto-play": true,
              loop: true,
              perPageCustom: [
                [480, 2],
                [768, 1]
              ]
            }
          },
          [
            _c("slide", [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: "./img/slide/slide-1.jpg" }
              })
            ]),
            _vm._v(" "),
            _c("slide", [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: "./img/slide/slide-2.jpg" }
              })
            ]),
            _vm._v(" "),
            _c("slide", [
              _c("img", {
                staticStyle: { "max-width": "100%" },
                attrs: { src: "./img/slide/slide-3.jpg" }
              })
            ])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("main", { attrs: { id: "main" } }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "recent-photos", attrs: { id: "recent-photos" } },
        [
          _c(
            "div",
            { staticClass: "container" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "owl_carousel",
                {
                  staticClass: "recent-photos-carousel",
                  attrs: { autoplay: true, nav: false }
                },
                [
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?1" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?2" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?3" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?4" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?5" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?6" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?7" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: "https://placeimg.com/218/163/any?8" }
                  })
                ]
              )
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "about", attrs: { id: "about" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "section-title" }, [
          _c("h2", [_vm._v("My & Family")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row content" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "assets/img/about.jpg", alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 pt-4 pt-lg-0" }, [
            _c("p", [
              _vm._v(
                "\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                        magna aliqua.\n                    "
              )
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("i", { staticClass: "ri-check-double-line" }),
                _vm._v(
                  " Ullamco laboris nisi ut aliquip ex ea commodo consequat"
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "ri-check-double-line" }),
                _vm._v(
                  " Duis aute irure dolor in reprehenderit in voluptate velit"
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "ri-check-double-line" }),
                _vm._v(
                  " Ullamco laboris nisi ut aliquip ex ea commodo consequat"
                )
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n                        culpa qui officia deserunt mollit anim id est laborum.\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn-learn-more",
                attrs: { href: "our-story.html" }
              },
              [_vm._v("Learn More")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "features", attrs: { id: "features" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-computer" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [_vm._v("Lorem Ipsum")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-chart-bar-graph" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [_vm._v("Dolor Sitema")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-earth" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [
                  _vm._v("Sed ut perspiciatis")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-image" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [_vm._v("Magni Dolores")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-settings" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [_vm._v("Nemo Enim")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4 col-md-6 icon-box" }, [
              _c("div", { staticClass: "icon" }, [
                _c("i", { staticClass: "icofont-tasks-alt" })
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "title" }, [
                _c("a", { attrs: { href: "" } }, [_vm._v("Eiusmod Tempor")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description" }, [
                _vm._v(
                  "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
                )
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title" }, [
      _c("h2", [_vm._v("Recent Photos")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& */ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/views/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ae8ae93",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);