"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.jsx":
/*!****************************!*\
  !*** ./pages/register.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coponents_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coponents/Jumbotron */ \"./coponents/Jumbotron.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Register = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSumbit = (e)=>{\n        e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coponents_Jumbotron__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Register\",\n                subTitle: \"Please register with your details\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSumbit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-3\",\n                            value: name,\n                            required: true,\n                            placeholder: \"Enter your name\",\n                            onChange: (e)=>setName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-3\",\n                            value: email,\n                            required: true,\n                            placeholder: \"Enter your email\",\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-3\",\n                            value: password,\n                            required: true,\n                            placeholder: \"Enter your password\",\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Users\\\\ymw03\\\\Desktop\\\\mern-nextjs-elearning-marketplace\\\\client\\\\pages\\\\register.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Register, \"uXd/WfIuOwRTvqpeFZHBEPtcoac=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWlDO0FBQ2M7QUFHL0MsTUFBTUUsV0FBVyxJQUNqQjs7SUFDRSxNQUFNLENBQUVDLE1BQU1DLFFBQVMsR0FBR0osK0NBQVFBLENBQUU7SUFDcEMsTUFBTSxDQUFFSyxPQUFPQyxTQUFVLEdBQUdOLCtDQUFRQSxDQUFFO0lBQ3RDLE1BQU0sQ0FBRU8sVUFBVUMsWUFBYSxHQUFHUiwrQ0FBUUEsQ0FBRTtJQUU1QyxNQUFNUyxlQUFlQyxDQUFBQSxJQUNyQjtRQUNFQSxFQUFFQyxjQUFjO0lBSWxCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDViw0REFBU0E7Z0JBQ1JXLE9BQVE7Z0JBQ1JDLFVBQVc7Ozs7OzswQkFHYiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNDO29CQUFLQyxVQUFXUjs7c0NBQ2YsOERBQUNTOzRCQUNDQyxNQUFLOzRCQUNMSixXQUFVOzRCQUNWSyxPQUFRakI7NEJBQ1JrQixRQUFROzRCQUNSQyxhQUFZOzRCQUNaQyxVQUFXLENBQUViLElBQU9OLFFBQVNNLEVBQUVjLE1BQU0sQ0FBQ0osS0FBSzs7Ozs7O3NDQUk3Qyw4REFBQ0Y7NEJBQ0NDLE1BQUs7NEJBQ0xKLFdBQVU7NEJBQ1ZLLE9BQVFmOzRCQUNSZ0IsUUFBUTs0QkFDUkMsYUFBWTs0QkFDWkMsVUFBVyxDQUFFYixJQUFPSixTQUFVSSxFQUFFYyxNQUFNLENBQUNKLEtBQUs7Ozs7OztzQ0FLOUMsOERBQUNGOzRCQUNDQyxNQUFLOzRCQUNMSixXQUFVOzRCQUNWSyxPQUFRYjs0QkFDUmMsUUFBUTs0QkFDUkMsYUFBWTs0QkFDWkMsVUFBVyxDQUFFYixJQUFPRixZQUFhRSxFQUFFYyxNQUFNLENBQUNKLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjM0Q7R0FqRU1sQjtLQUFBQTtBQW1FTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qc3g/ZTgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuLi9jb3BvbmVudHMvSnVtYm90cm9uJztcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+XHJcbntcclxuICBjb25zdCBbIG5hbWUsIHNldE5hbWUgXSA9IHVzZVN0YXRlKCBcIlwiICk7XHJcbiAgY29uc3QgWyBlbWFpbCwgc2V0RW1haWwgXSA9IHVzZVN0YXRlKCBcIlwiICk7XHJcbiAgY29uc3QgWyBwYXNzd29yZCwgc2V0UGFzc3dvcmQgXSA9IHVzZVN0YXRlKCBcIlwiICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1bWJpdCA9IGUgPT5cclxuICB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuXHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SnVtYm90cm9uXHJcbiAgICAgICAgdGl0bGU9eyBcIlJlZ2lzdGVyXCIgfVxyXG4gICAgICAgIHN1YlRpdGxlPXsgXCJQbGVhc2UgcmVnaXN0ZXIgd2l0aCB5b3VyIGRldGFpbHNcIiB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTUnPlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGhhbmRsZVN1bWJpdCB9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0zXCJcclxuICAgICAgICAgICAgdmFsdWU9eyBuYW1lIH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgbmFtZSdcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoIGUgKSA9PiBzZXROYW1lKCBlLnRhcmdldC52YWx1ZSApIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0zXCJcclxuICAgICAgICAgICAgdmFsdWU9eyBlbWFpbCB9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsJ1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17ICggZSApID0+IHNldEVtYWlsKCBlLnRhcmdldC52YWx1ZSApIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvaW5wdXQ+XHJcblxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtM1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXsgcGFzc3dvcmQgfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBwYXNzd29yZCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoIGUgKSA9PiBzZXRQYXNzd29yZCggZS50YXJnZXQudmFsdWUgKSB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L2lucHV0PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkp1bWJvdHJvbiIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1bWJpdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwic3ViVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.jsx\n"));

/***/ })

});