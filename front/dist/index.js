/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./app/styles/style.css\");\n// import \"./styles/index.scss\";\r\n\r\n\r\nconst shortbtn = document.getElementById(\"submit\")\r\nshortbtn.addEventListener(\"click\", shortApi);\r\n\r\nconst divShort = document.getElementById(\"shorturl\");\r\nconst divLoader = document.getElementById(\"loader\");\r\n\r\nasync function shortApi(){\r\n    const longUrl = document.getElementById(\"url_input\");\r\n    divShort.style.display = \"block\";\r\n\r\n    try{\r\n        let response = await axios.post(\"/api\",{\r\n            \"longUrl\":longUrl.value\r\n        })\r\n\r\n        newURL(response.data);\r\n        longUrl.value = \"\";\r\n    }\r\n    catch(error){\r\n        longUrl.value = \"\";\r\n        // removeAllChildNodes(divShort);\r\n        errormessage(error)\r\n    }\r\n}\r\n\r\n// error fun \r\nfunction newURL(response) {\r\n\r\n    const newURL = document.createElement('div');\r\n    const url = document.createElement(\"span\");\r\n\r\n    divShort.style.paddingBottom = \"1em\";\r\n    newURL.setAttribute(\"id\", \"newurl\");\r\n    newURL.classList.add(\"message\");\r\n\r\n    url.textContent = `${response}`;\r\n    url.setAttribute(\"id\", \"url\");\r\n    newURL.appendChild(url);\r\n    divShort.appendChild(newURL)\r\n    \r\n    const buttons = document.createElement(\"span\");\r\n    buttons.setAttribute(\"class\" ,\"buttons\");\r\n\r\n    // copy\r\n    const copyBtn = document.createElement(\"button\");\r\n    copyBtn.classList.add('close-loader-btn');\r\n    copyBtn.textContent = \"copy\";\r\n    copyBtn.addEventListener(\"click\", ()=>{\r\n        const copyText = document.getElementById(\"newurl\").textContent; // text\r\n        const url = copyText.split('copy')[0];\r\n        navigator.clipboard.writeText(url);                             // copy url\r\n    });\r\n    buttons.appendChild(copyBtn);\r\n\r\n    // show \r\n    const sticBtn = document.createElement(\"button\");\r\n    sticBtn.classList.add('close-loader-btn');\r\n    sticBtn.textContent = \"show statics\";\r\n    sticBtn.addEventListener(\"click\", showData);\r\n    buttons.appendChild(sticBtn);\r\n\r\n    newURL.appendChild(buttons)\r\n}\r\n\r\n// error fun \r\nfunction errormessage(error) {\r\n\r\n    divShort.style.paddingBottom = \"1em\";\r\n    const errorMessage = document.createElement('div')\r\n    errorMessage.classList.add(\"message\");\r\n\r\n    const errspan = document.createElement(\"span\");\r\n    errspan.textContent = error.response.data.error;\r\n    errspan.setAttribute(\"id\", \"errspan\");\r\n    \r\n    errorMessage.appendChild(errspan);\r\n    divShort.appendChild(errorMessage);\r\n    \r\n    const closeBtn = document.createElement(\"button\");\r\n    closeBtn.classList.add('close-loader-btn')\r\n    closeBtn.textContent = \"close\";\r\n    closeBtn.addEventListener(\"click\", ()=> {\r\n        document.querySelector(\".message\").remove()\r\n    });\r\n    errorMessage.appendChild(closeBtn);\r\n    \r\n    setTimeout(()=>{\r\n        divShort.removeChild(errorMessage)\r\n    },4000)\r\n    \r\n}\r\n\r\n// show my stic\r\nasync function showData(){\r\n    const idEl = document.getElementById(\"url\");\r\n    const id = idEl.textContent.split(\"api/\")[1];\r\n\r\n    // if (document.getElementsByClassName(\"divstatics\")){\r\n    //     document.getElementsByClassName(\"divstatics\").remove();\r\n    // }\r\n\r\n    const divNewUrl = document.getElementById(\"newurl\")\r\n    // removeAllChildNodes(div)\r\n    try {\r\n        const response = await axios.get(`/api/statistic/${id}`)\r\n        const data = (response.data);\r\n        const div = document.createElement(\"div\");\r\n        div.setAttribute(\"class\",\"divstatics\")\r\n    \r\n        div.innerText=(`Creation Date: ${data.date}  \r\n        Redirect Count: ${data.redirectCount}`);\r\n        divNewUrl.appendChild(div);\r\n        \r\n    } catch (error) {\r\n        console.log('err to show');\r\n    }\r\n}\r\n// remove childs\r\nfunction removeAllChildNodes(parent) {\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ \"data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\\r\\n  font-size: 16px;\\r\\n  color: #222;\\r\\n  background-color: #fff;\\r\\n  text-align: center;\\r\\n  line-height: 1.4em;\\r\\n  /* background-color:gray; */\\r\\n  background-color: rgb(177, 214, 206);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding: 0;\\r\\n  margin-top: 40px;\\r\\n  background-color: rgb(75, 117, 156);\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  margin-top: 1em;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  width: 220px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* ----navbar---- */\\r\\n#log{\\r\\n  display: flex;\\r\\n}\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  background-color: rgb(75, 117, 156);\\r\\n}\\r\\nli {\\r\\n  float: left;\\r\\n  border-right: 1px solid lightblue ;\\r\\n}\\r\\nli a {\\r\\n  font-family:'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\\r\\n  display: block;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  padding: 14px 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli a:hover:not(#log) {\\r\\n  background-color: rgb(67, 95, 156);\\r\\n}\\r\\n.active {\\r\\n  border-left: 1px solid lightblue ;\\r\\n  float: right;\\r\\n  color: #ffffff;\\r\\n}\\r\\n/* ----navbar---- */\\r\\n\\r\\n/* url */\\r\\n#longurl{\\r\\n  padding: 1em;\\r\\n  font-size: 1.5em;\\r\\n  border-bottom: 3px solid #111;\\r\\n}\\r\\n#shorturl{\\r\\n  margin: 1em;\\r\\n}\\r\\n#url{\\r\\n  font-size: 1.3em;\\r\\n  font-style: normal;\\r\\n  font-family: Georgia, Times, 'Times New Roman', serif;\\r\\n}\\r\\n#newurl{\\r\\n  padding: 1em;\\r\\n  text-align: left;\\r\\n}\\r\\n.divstatics{\\r\\n  font-style: normal;\\r\\n  font-family: Verdana, Tahoma, sans-serif;\\r\\n  font-size: 0.9em;\\r\\n  padding: 0.5em;\\r\\n}\\r\\n\\r\\n#url_input{\\r\\n  border: 0.1em solid;\\r\\n  border-radius: 1em;\\r\\n\\r\\n  text-align: center;\\r\\n  font-size: 0.7em;\\r\\n  font-style: italic;\\r\\n  letter-spacing: 0.05em;\\r\\n\\r\\n  transition: all .5s ease-in-out;\\r\\n  /* background-color: #b3ecf0; */\\r\\n  min-width: 300px;\\r\\n}\\r\\n\\r\\n/* -----copy------ */\\r\\n.tooltip {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.tooltip .tooltiptext {\\r\\n  visibility: hidden;\\r\\n  width: 140px;\\r\\n  background-color: #555;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  border-radius: 6px;\\r\\n  padding: 5px;\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  bottom: 150%;\\r\\n  left: 50%;\\r\\n  margin-left: -75px;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.3s;\\r\\n}\\r\\n\\r\\n.tooltip .tooltiptext::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 100%;\\r\\n  left: 50%;\\r\\n  margin-left: -5px;\\r\\n  border-width: 5px;\\r\\n  border-style: solid;\\r\\n  border-color: #555 transparent transparent transparent;\\r\\n}\\r\\n\\r\\n.tooltip:hover .tooltiptext {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\\r\\n/* -----copy------ */\\r\\n\\r\\n\\r\\n/* ---- message---- */\\r\\n.message{\\r\\n  padding-top: 0.5em;\\r\\n  padding-bottom: 0.5em;\\r\\n  background: rgba(175, 218, 233, 0.5);\\r\\n  border: 0.1em solid;\\r\\n  border-radius: 1em;\\r\\n  font-size: 1em;\\r\\n  flex:auto;\\r\\n  margin-left:5%;\\r\\n  margin-right:5%;\\r\\n}\\r\\n.buttons{\\r\\n  float:right\\r\\n}\\r\\n.close-loader-btn{\\r\\n  /* float: right; */\\r\\n  margin-left: 0.5em;\\r\\n  margin-right: 0.5em;\\r\\n  text-transform: uppercase;\\r\\n  text-decoration: none;\\r\\n  background: #f7e78f;\\r\\n  border-radius: 5px;\\r\\n  display: inline-block;\\r\\n  border: none;\\r\\n  transition: all 0.4s ease 0s;\\r\\n}\\r\\n.close-loader-btn:hover{\\r\\n  background: #b0b658;\\r\\n  /* letter-spacing: 1px;\\r\\n  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\\r\\n  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\\r\\n  box-shadow: 5px 40px -10px rgba(0,0,0,0.57); */\\r\\n  transition: all 0.4s ease 0s;\\r\\n}\\r\\n\\r\\n#errspan{\\r\\n  font-size: 1.3em;\\r\\n  font-style: normal;\\r\\n  font-family: Georgia, Times, 'Times New Roman', serif;\\r\\n}\\r\\n/* ----err message---- */\\r\\n\\r\\n\\r\\n/* ------button------ */\\r\\n.center-content {\\r\\n  display: grid;\\r\\n  place-content: center;\\r\\n}\\r\\n.container {\\r\\n  height: 100vh;\\r\\n}\\r\\n.submit-feedback {\\r\\n  margin-left: 0.5em;\\r\\n  margin-right: 0.5em;\\r\\n\\tpadding: 5px;\\r\\n  font-size: 24px;\\r\\n  cursor: pointer;\\r\\n  \\r\\n\\tborder-radius: 7px;\\r\\n\\tborder-bottom-left-radius: 0;\\r\\n\\r\\n\\tbackground-color: #ffe5e5;\\r\\n\\tcolor:#53488d;\\r\\n\\r\\n\\ttransition: all 0.3s;\\r\\n  \\r\\n}\\r\\n.submit-feedback:hover {\\r\\n  letter-spacing: 0.5px;\\r\\n  transition: all 0.4s ease 0s;\\r\\n  border-radius: 6px;\\r\\n\\r\\n  color: #53488d;\\r\\n  background-color: #ffe5e5;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n\\r\\n  animation: animatedBackground 5s linear infinite alternate;\\r\\n}\\r\\n@keyframes animatedBackground {\\r\\n\\tfrom {\\r\\n\\t\\tbackground-position: 0 0;\\r\\n\\t}\\r\\n\\tto {\\r\\n\\t\\tbackground-position: 100% 0;\\r\\n\\t}\\r\\n}\\r\\n/* -----button----- */\\r\\n\\r\\n\\r\\n/* ------icons------ */\\r\\nfooter {\\r\\n  background-color: rgb(75, 117, 156);\\r\\n  color:#fff;\\r\\n  width: 100%;\\r\\n  padding: 0.8em;\\r\\n  position: fixed;\\r\\n  top: 80%;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n#by{\\r\\n  /* color: rgb(177, 214, 206); */\\r\\n  color: #fff;\\r\\n  font-style: italic;\\r\\n  text-decoration:none;\\r\\n}\\r\\n#by:hover{\\r\\n  color: #111;\\r\\n}\\r\\n*:focus,\\r\\n*:active {\\r\\n  outline: none !important;\\r\\n  -webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n.wrapper {\\r\\n  display: inline-flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.wrapper .icon {\\r\\n  position: relative;\\r\\n  background-color: #ffffff;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n  margin-top: 5px;\\r\\n  margin-left: 25px;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  font-size: 18px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n  color: #222;\\r\\n}\\r\\n.wrapper .tooltip {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  font-size: 14px;\\r\\n  background-color: #ffffff;\\r\\n  color: #ffffff;\\r\\n  padding: 5px 8px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\r\\n  opacity: 0;\\r\\n  pointer-events: none;\\r\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n}\\r\\n.wrapper .tooltip::before {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  height: 8px;\\r\\n  width: 8px;\\r\\n  background-color: #ffffff;\\r\\n  bottom: -3px;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%) rotate(45deg);\\r\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n}\\r\\n.wrapper .icon:hover .tooltip {\\r\\n  top: -45px;\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n.wrapper .icon:hover span,\\r\\n.wrapper .icon:hover .tooltip {\\r\\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n.wrapper .facebook:hover,\\r\\n.wrapper .facebook:hover .tooltip,\\r\\n.wrapper .facebook:hover .tooltip::before {\\r\\n  background-color: #3b5999;\\r\\n  color: #ffffff;\\r\\n}\\r\\n.wrapper .instagram:hover,\\r\\n.wrapper .instagram:hover .tooltip,\\r\\n.wrapper .instagram:hover .tooltip::before {\\r\\n  background-color: #e1306c;\\r\\n  color: #ffffff;\\r\\n}\\r\\n.wrapper .github:hover,\\r\\n.wrapper .github:hover .tooltip,\\r\\n.wrapper .github:hover .tooltip::before {\\r\\n  background-color: #333333;\\r\\n  color: #ffffff;\\r\\n}\\r\\n/* ------icons------ */\\r\\n\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n/* --------------------------------------- media --------------------------------- */\\r\\n\\r\\n/*  */\\r\\n@media (max-width: 1100px) {\\r\\n  body{\\r\\n    font-size: 30px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  main {\\r\\n    padding: 0;\\r\\n    margin-top: 40px;\\r\\n    background-color: rgb(75, 117, 156);\\r\\n  }\\r\\n  \\r\\n  h1 {\\r\\n    margin-top: 1em;\\r\\n    font-size: 3em;\\r\\n  }\\r\\n  h2 {\\r\\n    padding: 0.8em;\\r\\n    margin-top: 4em;\\r\\n    font-size: 2em;\\r\\n  }\\r\\n  input {\\r\\n    padding: 5px;\\r\\n  }\\r\\n  \\r\\n  input[type='text'] {\\r\\n    width: 220px;\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  /* ----navbar---- */\\r\\n  #navbar{\\r\\n    /* text-align: center; */\\r\\n    \\r\\n    padding: auto;\\r\\n    margin: auto;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    height: 4em;\\r\\n  }\\r\\n  li a{\\r\\n    font-size: 1.4em;\\r\\n    border-right: 1px solid lightblue ;\\r\\n    /* width: 100%;\\r\\n    height: 100%; */\\r\\n  }\\r\\n  .active {\\r\\n    float: none;\\r\\n    border: none;\\r\\n  }\\r\\n\\r\\n  \\r\\n  /* url */\\r\\n  #longurl{\\r\\n    padding: 0.8em;\\r\\n    font-size: 1.9em;\\r\\n    border-bottom: 3px solid #111;\\r\\n  }\\r\\n  #shorturl{\\r\\n    margin: 3em;\\r\\n  }\\r\\n  #url{\\r\\n    font-size: 1.7em;\\r\\n    font-style: normal;\\r\\n    font-family: Georgia, Times, 'Times New Roman', serif;\\r\\n  }\\r\\n  #newurl{\\r\\n    padding: 1em;\\r\\n    text-align: left;\\r\\n  }\\r\\n  .divstatics{\\r\\n    font-style: normal;\\r\\n    font-family: Verdana, Tahoma, sans-serif;\\r\\n    font-size: 0.9em;\\r\\n    padding: 0.5em;\\r\\n  }\\r\\n  \\r\\n  #url_input{\\r\\n    min-width: 12em;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  /* ------button------ */\\r\\n  #submit{\\r\\n    margin-top: 1em;\\r\\n  }\\r\\n  .submit-feedback {\\r\\n    margin: 10em;\\r\\n    /* margin-left: 0.5em;\\r\\n    margin-right: 0.5em; */\\r\\n    padding: 10px;\\r\\n    font-size: 30px;\\r\\n    cursor: pointer;\\r\\n    \\r\\n    border-radius: 10px;\\r\\n    border-bottom-left-radius: 0;\\r\\n  \\r\\n    background-color: #ffe5e5;\\r\\n    color:#53488d;\\r\\n  \\r\\n    transition: all 0.3s;\\r\\n    \\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles/style.css":
/*!******************************!*\
  !*** ./app/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://calc/data:image/svg+xml,%253Csvg_width=%252752%2527_height=%252726%2527_viewBox=%25270_0_52_26%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Cg_fill=%2527none%2527_fill-rule=%2527evenodd%2527%253E%253Cg_fill=%2527%2523ffacac%2527_fill-opacity=%25270.4%2527%253E%253Cpath_d=%2527M10_10c0-2.21-1.79-4-4-4-3.314_0-6-2.686-6-6h2c0_2.21_1.79_4_4_4_3.314_0_6_2.686_6_6_0_2.21_1.79_4_4_4_3.314_0_6_2.686_6_6_0_2.21_1.79_4_4_4v2c-3.314_0-6-2.686-6-6_0-2.21-1.79-4-4-4-3.314_0-6-2.686-6-6zm25.464-1.95l8.486_8.486-1.414_1.414-8.486-8.486_1.414-1.414z%2527_/%253E%253C/g%253E%253C/g%253E%253C/svg%253E?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;