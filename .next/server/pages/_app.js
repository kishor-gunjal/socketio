(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\components\\Layout\\HeadTags.js";


const HeadTags = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "UTF-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      href: "/favicon.png",
      sizes: "16*16",
      type: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/listMessages.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/styles.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/nprogress.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "Mini Social Media"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _SearchComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchComponent */ "./components/Layout/SearchComponent.js");


var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\components\\Layout\\Layout.js";









function Layout({
  children,
  user,
  notifications
}) {
  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_6___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeadTags__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginLeft: '1rem',
          marginRight: '1rem'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Ref, {
          innerRef: contextRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              floated: "left",
              width: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
                context: contextRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideMenu__WEBPACK_IMPORTED_MODULE_7__.default, {
                  user: user
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 22
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              width: 10,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Visibility, {
                context: contextRef,
                children: children
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              floated: "right",
              width: 4,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
                context: contextRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
                  basic: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchComponent__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 2
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
        text: true,
        style: {
          paddingTop: "1rem"
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 1
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\components\\Layout\\Navbar.js";





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    fluid: true,
    borderless: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
      text: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive("/login"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive("/signup"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), "Signup"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/SearchComponent.js":
/*!**********************************************!*\
  !*** ./components/Layout/SearchComponent.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\components\\Layout\\SearchComponent.js";





let cancel; //to cancel pending requests

const SearchComponent = () => {
  const [text, setText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [results, setResults] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');

  const handleChange = async e => {
    const {
      value
    } = e.target;

    if (value.lenght === 0) {
      results.length > 0 && setResults([]);
      return setText(value);
    }

    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_4___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get('token');
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/search/${value}`, {
        headers: {
          Authorization: token,
          cancelToken: new CancelToken(cancler => {
            cancel = cancler;
          })
        }
      });

      if (response.data.length > 0) {
        return setLoading(false);
      } else {
        setResults(response.data);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);

  const ResultRenderer = ({
    _id,
    profilePicUrl,
    name
  }) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profilePicUrl,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            header: name,
            as: "a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined)
      }, _id, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined)
    }, void 0, false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Search, {
      onBlur: () => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText('');
      },
      loading: loading,
      value: text,
      resultRenderer: ResultRenderer,
      results: results,
      onSearchChange: handleChange,
      minCharacters: 1,
      onResultSelect: (e, data) => Router.push(`/${data.result.username}`)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");


var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\components\\Layout\\SideMenu.js";






const SideMenu = ({
  notifications,
  unreadMessage,
  username,
  email,
  unreadNotification
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List, {
      style: {
        paddingTop: '1rem'
      },
      verticalAlign: "middle",
      selection: true,
      size: "large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
          active: isActive('/'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "home",
            size: "large",
            color: isActive('/') && 'teal'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Header, {
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/notifications",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
          active: isActive('/'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: notifications ? 'bail outline' : 'hand point right',
            size: "large",
            color: isActive('/notifications') && 'teal' || unreadNotification && 'red'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Header, {
              content: "notifications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/messages",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
          active: isActive('/messages'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: unreadMessage ? 'hand point right' : 'mail outline',
            size: "large",
            color: isActive('/messages') && 'teal' || unreadMessage && 'orange'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Header, {
              content: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
          active: router.query.username === username,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "user",
            size: "large",
            color: router.query.username == username && 'teal' || unreadMessage && 'orange'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Header, {
              content: "Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Item, {
        onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.logoutUser)(email),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          name: "sign out",
          size: "large",
          color: "red"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.List.Header, {
            content: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "C:\\Users\\KISHOR\\Downloads\\socketio\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
  let pageProps = {};
  const protectedRoute = ctx.pathname === '/';

  if (!token) {
    protectedRoute && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.reDirectUser)(ctx, '/login');
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowerStats
      } = response.data;

      if (user) {
        !protectedRoute && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.reDirectUser)(ctx, '/');
        pageProps.user = user;
        pageProps.userFollowerStats = userFollowerStats;
      }
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_5__.destroyCookie)(ctx, 'token');
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.reDirectUser)(ctx, '/login');
      console.log(error);
    }
  } // console.log(pageProps);


  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "reDirectUser": function() { return /* binding */ reDirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const reDirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};
const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('userEmail', email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_semantic-ui-css_semantic_min_css-node_modules_n-d06b18"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXEtJU0hPUlxcRG93bmxvYWRzXFxzb2NrZXRpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwibm90aWZpY2F0aW9ucyIsIlJvdXRlciIsIm5wcm9ncmVzcyIsImNvbnRleHRSZWYiLCJjcmVhdGVSZWYiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwiTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiY2FuY2VsIiwiU2VhcmNoQ29tcG9uZW50IiwidGV4dCIsInNldFRleHQiLCJSZWFjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5naHQiLCJsZW5ndGgiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwidG9rZW4iLCJjb29raWUiLCJyZXNwb25zZSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2xlciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJSZXN1bHRSZW5kZXJlciIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwicHVzaCIsInJlc3VsdCIsInVzZXJuYW1lIiwiU2lkZU1lbnUiLCJ1bnJlYWRNZXNzYWdlIiwiZW1haWwiLCJ1bnJlYWROb3RpZmljYXRpb24iLCJxdWVyeSIsImxvZ291dFVzZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsInByb3RlY3RlZFJvdXRlIiwicmVEaXJlY3RVc2VyIiwidXNlckZvbGxvd2VyU3RhdHMiLCJkZXN0cm95Q29va2llIiwicmVnaXN0ZXJVc2VyIiwic2V0RXJyb3IiLCJyZXMiLCJzZXRUb2tlbiIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLG1CQUNmO0FBQUEseUJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxhQUFPLEVBQUM7QUFB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QUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdqQyxLQUFLLENBQUNJLE9BQWpCO0FBRUFILFdBQU8sQ0FBQ0QsS0FBUixDQUFjaUMsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVDLFdBQWYsRTs7Ozs7Ozs7Ozs7QUN2QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5NaW5pIFNvY2lhbCBNZWRpYTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsVmlzaWJpbGl0eSxHcmlkLFN0aWNreSxSZWYsRGl2aWRlcixTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSBcIi4vU2lkZU1lbnVcIjtcclxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tIFwiLi9TZWFyY2hDb21wb25lbnRcIjtcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLHVzZXIsbm90aWZpY2F0aW9ucyB9KSB7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IG5wcm9ncmVzcy5zdGFydCgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuICBjb25zdCBjb250ZXh0UmVmID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuICAgICAge1xyXG4gICAgICAgIHVzZXIgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6JzFyZW0nLG1hcmdpblJpZ2h0OicxcmVtJ319PlxyXG4gICAgICAgICAgICA8UmVmIGlubmVyUmVmPXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdsZWZ0JyB3aWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaENvbXBvbmVudC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1JlZj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApOihcclxuICAgICAgICAgIDw+XHJcbiA8TmF2YmFyIC8+XHJcblxyXG48Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAge2NoaWxkcmVufVxyXG48L0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUsIENvbnRhaW5lciwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBmbHVpZCBib3JkZXJsZXNzPlxyXG4gICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9sb2dpblwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCx7IHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlYXJjaCxMaXN0LEltYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vLi4vdXRpbHMvYmFzZVVybCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuXHJcblxyXG5sZXQgY2FuY2VsOy8vdG8gY2FuY2VsIHBlbmRpbmcgcmVxdWVzdHNcclxuY29uc3QgIFNlYXJjaENvbXBvbmVudD0oKT0+IHtcclxuXHJcbiAgICBjb25zdCBbdGV4dCxzZXRUZXh0XT1SZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT1SZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVzdWx0cyxzZXRSZXN1bHRzXT1SZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09UmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9YXN5bmMoZSk9PntcclxuICAgICAgICAgICBjb25zdCB7dmFsdWV9PWUudGFyZ2V0O1xyXG4gICAgICAgICAgIGlmKHZhbHVlLmxlbmdodD09PTApIHtcclxuICAgICAgICAgICAgICAgcmVzdWx0cy5sZW5ndGg+MCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHNldFRleHQodmFsdWUpO31cclxuICAgICAgICAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCx7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2xlcj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw9Y2FuY2xlcjtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih0ZXh0Lmxlbmd0aD09PTAgJiYgbG9hZGluZylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sW3RleHRdKVxyXG5cclxuICAgIGNvbnN0IFJlc3VsdFJlbmRlcmVyID0oe19pZCxwcm9maWxlUGljVXJsLG5hbWV9KT0+e1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpc3Qga2V5PXtfaWR9PlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PScnLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9J2EnLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8U2VhcmNoIG9uQmx1cj17KCkgPT57cmVzdWx0cy5sZW5ndGg+MCAmJiBzZXRSZXN1bHRzKFtdKVxyXG4gICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0VGV4dCgnJyl9fVxyXG4gICAgICAgICBcclxuICAgICAgICAgbG9hZGluZz17bG9hZGluZ30gdmFsdWU9e3RleHR9IFxyXG4gICAgICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9XHJcbiAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XHJcbiAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2goYC8ke2RhdGEucmVzdWx0LnVzZXJuYW1lfWApXHJcbiAgICAgICAgIH0vPlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb21wb25lbnRcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpc3QsSWNvbixJdGVtfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoVXNlcic7XHJcblxyXG5jb25zdCBTaWRlTWVudSA9ICh7bm90aWZpY2F0aW9ucyx1bnJlYWRNZXNzYWdlLHVzZXJuYW1lLGVtYWlsLHVucmVhZE5vdGlmaWNhdGlvbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlPT5yb3V0ZXIucGF0aG5hbWU9PT1yb3V0ZTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TGlzdCBzdHlsZT17e3BhZGRpbmdUb3A6JzFyZW0nfX12ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgc2VsZWN0aW9uIHNpemU9XCJsYXJnZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnLycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17aXNBY3RpdmUoJy8nKSYmJ3RlYWwnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXI+SG9tZTwvTGlzdC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnLycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17bm90aWZpY2F0aW9ucz8nYmFpbCBvdXRsaW5lJzonaGFuZCBwb2ludCByaWdodCd9IHNpemU9XCJsYXJnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17KGlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpJiYndGVhbCcpfHwodW5yZWFkTm90aWZpY2F0aW9uJiYncmVkJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PSdub3RpZmljYXRpb25zJz48L0xpc3QuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvbWVzc2FnZXMnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e3VucmVhZE1lc3NhZ2U/J2hhbmQgcG9pbnQgcmlnaHQnOidtYWlsIG91dGxpbmUnfSBzaXplPVwibGFyZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyhpc0FjdGl2ZSgnL21lc3NhZ2VzJykmJid0ZWFsJyl8fCh1bnJlYWRNZXNzYWdlJiYnb3JhbmdlJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PSdNZXNzYWdlcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e3JvdXRlci5xdWVyeS51c2VybmFtZT09PXVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgc2l6ZT1cImxhcmdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsocm91dGVyLnF1ZXJ5LnVzZXJuYW1lPT11c2VybmFtZSYmJ3RlYWwnKXx8KHVucmVhZE1lc3NhZ2UmJidvcmFuZ2UnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9J0FjY291bnQnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gb25DbGljaz17KCk9PmxvZ291dFVzZXIoZW1haWwpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWduIG91dCcgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9J0xvZ291dCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnVcclxuIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXMsZGVzdHJveUNvb2tpZX0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgcmVEaXJlY3RVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtDb21wb25lbnQsIGN0eH0pID0+IHtcclxuICBjb25zdCB7dG9rZW59ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlID0gY3R4LnBhdGhuYW1lID09PSAnLyc7XHJcblxyXG4gIGlmKCF0b2tlbikge1xyXG4gICAgcHJvdGVjdGVkUm91dGUgJiYgIHJlRGlyZWN0VXNlcihjdHgsJy9sb2dpbicpXHJcbiAgfWVsc2Uge1xyXG4gICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7aGVhZGVyczoge0F1dGhvcml6YXRpb246dG9rZW59fSlcclxuXHJcbiAgICAgIGNvbnN0IHt1c2VyLHVzZXJGb2xsb3dlclN0YXRzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICBpZih1c2VyKXtcclxuICAgICAgICAhcHJvdGVjdGVkUm91dGUgJiYgIHJlRGlyZWN0VXNlcihjdHgsJy8nKVxyXG4gICAgICAgIHBhZ2VQcm9wcy51c2VyID0gdXNlcjtcclxuICAgICAgICBwYWdlUHJvcHMudXNlckZvbGxvd2VyU3RhdHMgPSB1c2VyRm9sbG93ZXJTdGF0cztcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGVzdHJveUNvb2tpZShjdHgsICd0b2tlbicpO1xyXG4gICAgICByZURpcmVjdFVzZXIoY3R4LCcvbG9naW4nKVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gXHJcbiAgLy8gY29uc29sZS5sb2cocGFnZVByb3BzKTtcclxuICAgcmV0dXJuIHtwYWdlUHJvcHN9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLCB7IHVzZXIsIHByb2ZpbGVQaWNVcmwgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKHVzZXIsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XHJcbiAgc2V0TG9hZGluZyh0cnVlKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHsgdXNlciB9KTtcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuXHJcbmNvbnN0IHNldFRva2VuID0gdG9rZW4gPT4ge1xyXG4gIGNvb2tpZS5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZURpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xyXG4gICAgIGlmKGN0eC5yZXEpe1xyXG4gICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7TG9jYXRpb246IGxvY2F0aW9ufSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICB9ZWxzZXtcclxuICAgICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICAgICB9XHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoZW1haWwpID0+IHtcclxuICBjb29raWUuc2V0KCd1c2VyRW1haWwnLCBlbWFpbCk7XHJcbiAgY29va2llLnJlbW92ZShcInRva2VuXCIpO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufSIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==