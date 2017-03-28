/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/bundles/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./webServer/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _server = __webpack_require__(/*! ./server */ 2);\n\n(0, _server.start)().then(function () {\n  return console.log('Server running at http://localhost:' + \"8080\" + '/');\n}).catch(function (err) {\n  console.error(err);\n  process.exit(1);\n});\n\nvar shutdown = function shutdown() {\n  return (0, _server.stop)().then(function () {\n    return console.log('Server at  http://localhost:' + \"8080\" + '/ closed');\n  }).then(process.exit);\n};\n\nprocess.on('SIGINT', shutdown);\nprocess.on('SIGTERM', shutdown);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJTZXJ2ZXIvaW5kZXguanM/NGE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGFydCwgc3RvcCB9IGZyb20gJy4vc2VydmVyJztcblxuc3RhcnQoKVxuLnRoZW4oKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfS9gKSlcbi5jYXRjaCgoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmNvbnN0IHNodXRkb3duID0gKCkgPT4gc3RvcCgpXG4gIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgYXQgIGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfS8gY2xvc2VkYCkpXG4gIC50aGVuKHByb2Nlc3MuZXhpdCk7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsIHNodXRkb3duKTtcbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCBzaHV0ZG93bik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2ViU2VydmVyL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCI/ZDBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./webServer/server.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.start = start;\nexports.stop = stop;\n\nvar _http = __webpack_require__(/*! http */ 6);\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _path = __webpack_require__(/*! path */ 7);\n\nvar _express = __webpack_require__(/*! express */ 5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _denodeify = __webpack_require__(/*! denodeify */ 4);\n\nvar _denodeify2 = _interopRequireDefault(_denodeify);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (true) {\n  /* eslint-disable import/no-extraneous-dependencies, global-require */\n  global.Promise = __webpack_require__(/*! bluebird */ 3);\n  /* eslint-enable import/no-extraneous-dependencies, global-require */\n\n  Promise.config({\n    longStackTraces: true,\n    warnings: true });\n}\n\nvar absPath = function absPath(relPath) {\n  return (0, _path.join)(\"/home/satyam/preact-async\", relPath);\n};\n\nvar app = (0, _express2.default)();\nvar server = _http2.default.createServer(app);\n\nvar listen = (0, _denodeify2.default)(server.listen.bind(server));\nvar close = (0, _denodeify2.default)(server.close.bind(server));\n\napp.use('/bundles', _express2.default.static(absPath('bundles')));\n\napp.use(_express2.default.static(absPath('webServer/public')));\n\napp.get('/kill', function (req, res) {\n  res.send('I am dead');\n  close();\n  process.exit();\n});\n\napp.get('*', function (req, res) {\n  return res.sendFile(absPath('webServer/index.html'));\n});\n\nfunction start() {\n  return listen(\"8080\");\n}\nfunction stop() {\n  return close();\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJTZXJ2ZXIvc2VydmVyLmpzPzIxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IGRlbm9kZWlmeSBmcm9tICdkZW5vZGVpZnknO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMsIGdsb2JhbC1yZXF1aXJlICovXG4gIGdsb2JhbC5Qcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMsIGdsb2JhbC1yZXF1aXJlICovXG5cbiAgUHJvbWlzZS5jb25maWcoe1xuICAgIGxvbmdTdGFja1RyYWNlczogdHJ1ZSxcbiAgICB3YXJuaW5nczogdHJ1ZSwgLy8gbm90ZSwgcnVuIG5vZGUgd2l0aCAtLXRyYWNlLXdhcm5pbmdzIHRvIHNlZSBmdWxsIHN0YWNrIHRyYWNlcyBmb3Igd2FybmluZ3NcbiAgfSk7XG59XG5cbmNvbnN0IGFic1BhdGggPSByZWxQYXRoID0+IGpvaW4oUk9PVF9ESVIsIHJlbFBhdGgpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG5jb25zdCBsaXN0ZW4gPSBkZW5vZGVpZnkoc2VydmVyLmxpc3Rlbi5iaW5kKHNlcnZlcikpO1xuY29uc3QgY2xvc2UgPSBkZW5vZGVpZnkoc2VydmVyLmNsb3NlLmJpbmQoc2VydmVyKSk7XG5cbmFwcC51c2UoJy9idW5kbGVzJywgZXhwcmVzcy5zdGF0aWMoYWJzUGF0aCgnYnVuZGxlcycpKSk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYWJzUGF0aCgnd2ViU2VydmVyL3B1YmxpYycpKSk7XG5cbmFwcC5nZXQoJy9raWxsJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdJIGFtIGRlYWQnKTtcbiAgY2xvc2UoKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG59KTtcblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4gcmVzLnNlbmRGaWxlKGFic1BhdGgoJ3dlYlNlcnZlci9pbmRleC5odG1sJykpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICByZXR1cm4gbGlzdGVuKFBPUlQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIHJldHVybiBjbG9zZSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYlNlcnZlci9zZXJ2ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBcUNBO0FBR0E7QUFDQTtBQXpDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJsdWViaXJkXCI/ZmIzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJsdWViaXJkXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** external "denodeify" ***!
  \****************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"denodeify\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImRlbm9kZWlmeVwiP2EyMmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVub2RlaWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGVub2RlaWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** multi babel-polyfill ./webServer/index.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */1);
module.exports = __webpack_require__(/*! /home/satyam/preact-async/webServer/index.js */0);


/***/ })
/******/ ]);