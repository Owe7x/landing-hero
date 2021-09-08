/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n\r\n\r\n\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n     $('#block-1').hover(\r\n        function(){\r\n            $(this).animate({height:370});\r\n            $('#block-3').animate({height:306});\r\n            $('#block-1-text').animate({ opacity: 1 });\r\n        },\r\n        function(){    \t\t\r\n                $(this).animate({height:326});\r\n                $('#block-3').animate({height:326});\r\n                $('#block-1-text').animate({ opacity: 0 });\r\n    });\r\n} else {\r\n    $('#block-1').hover(\r\n        function(){\r\n            $(this).animate({height:370});\r\n            $('#block-4').animate({height:306});\r\n            $('#block-1-text').animate({ opacity: 1 });\r\n        },\r\n        function(){    \t\t\r\n                $(this).animate({height:350});\r\n                $('#block-4').animate({height:350});\r\n                $('#block-1-text').animate({ opacity: 0 });\r\n    });\r\n}\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n    $('#block-2').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-4').animate({height:306});\r\n           $('#block-2-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-4').animate({height:350});\r\n               $('#block-2-text').animate({ opacity: 0 });\r\n   });\r\n} else {\r\n   $('#block-2').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-5').animate({height:306});\r\n           $('#block-2-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-5').animate({height:350});\r\n               $('#block-2-text').animate({ opacity: 0 });\r\n   });\r\n}\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n    $('#block-3').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-5').animate({height:306});\r\n           $('#block-3-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-5').animate({height:350});\r\n               $('#block-3-text').animate({ opacity: 0 });\r\n   });\r\n} else {\r\n   $('#block-3').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-6').animate({height:306});\r\n           $('#block-3-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-6').animate({height:350});\r\n               $('#block-3-text').animate({ opacity: 0 });\r\n   });\r\n}\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n    $('#block-4').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-2').animate({height:306});\r\n           $('#block-4-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-2').animate({height:350});\r\n               $('#block-4-text').animate({ opacity: 0 });\r\n   });\r\n} else {\r\n   $('#block-4').hover(\r\n       function(){\r\n           $(this).animate({height:370});\r\n           $('#block-1').animate({height:306});\r\n           $('#block-4-text').animate({ opacity: 1 });\r\n       },\r\n       function(){    \t\t\r\n               $(this).animate({height:350});\r\n               $('#block-1').animate({height:350});\r\n               $('#block-4-text').animate({ opacity: 0 });\r\n   });\r\n}\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n   $('#block-5').hover(\r\n      function(){\r\n          $(this).animate({height:370});\r\n          $('#block-3').animate({height:306});\r\n          $('#block-5-text').animate({ opacity: 1 });\r\n      },\r\n      function(){    \t\t\r\n              $(this).animate({height:350});\r\n              $('#block-3').animate({height:350});\r\n              $('#block-5-text').animate({ opacity: 0 });\r\n  });\r\n} else {\r\n  $('#block-5').hover(\r\n      function(){\r\n          $(this).animate({height:370});\r\n          $('#block-2').animate({height:306});\r\n          $('#block-5-text').animate({ opacity: 1 });\r\n      },\r\n      function(){    \t\t\r\n              $(this).animate({height:350});\r\n              $('#block-2').animate({height:350});\r\n              $('#block-5-text').animate({ opacity: 0 });\r\n  });\r\n}\r\nif (window.matchMedia('(max-width: 1400px)').matches)  {\r\n   $('#block-6').hover(\r\n      function(){\r\n          $(this).animate({height:370});\r\n          $('#block-4').animate({height:306});\r\n          $('#block-6-text').animate({ opacity: 1 });\r\n      },\r\n      function(){    \t\t\r\n              $(this).animate({height:350});\r\n              $('#block-4').animate({height:350});\r\n              $('#block-6-text').animate({ opacity: 0 });\r\n  });\r\n} else {\r\n  $('#block-6').hover(\r\n      function(){\r\n          $(this).animate({height:370});\r\n          $('#block-3').animate({height:306});\r\n          $('#block-6-text').animate({ opacity: 1 });\r\n      },\r\n      function(){    \t\t\r\n              $(this).animate({height:350});\r\n              $('#block-3').animate({height:350});\r\n              $('#block-6-text').animate({ opacity: 0 });\r\n  });\r\n}\r\n\r\n$('.stage').scroll(function() {\r\n\r\n\tvar target = $(this).scrollTop();\r\n\r\n\tif(target == 0) {\r\n        $('#stage-block-1').addClass('stages-flex')\r\n        $('#stage-block-1').removeClass('stages-none')\r\n        $('#stage-block-2').removeClass('stages-flex')\r\n\t}\r\n    if(target >= 100) {\r\n        $('#stage-block-2').addClass('stages-flex')\r\n        $('#stage-block-1').addClass('stages-none')\r\n        $('#stage-block-2').removeClass('stages-none')\r\n        $('#stage-block-3').addClass('stages-none')\r\n    }\r\n    if(target >= 200) {\r\n        $('#stage-block-3').addClass('stages-flex')\r\n        $('#stage-block-2').addClass('stages-none')\r\n        $('#stage-block-4').removeClass('stages-flex')\r\n        $('#stage-block-3').removeClass('stages-none')\r\n    } \r\n    if(target >= 300) {\r\n        $('#stage-block-4').addClass('stages-flex')\r\n        $('#stage-block-3').addClass('stages-none')\r\n        \r\n    } \r\n    console.log(target);\r\n\r\n});\r\n\r\n$(document).ready(function() {\r\n\t$('.menu-burger__header').click(function(){\r\n        $('.menu-burger__header').toggleClass('open-menu');\r\n        $('.header-content__mobile').toggleClass('open-menu');\r\n\t});\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\landing-hero\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\landing-hero\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });