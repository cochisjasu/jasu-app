"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 4835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignupView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var sha256__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sha256__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7102);
/* harmony import */ var _components_Session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3381);
/* harmony import */ var _components_Queries_session_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3632);
/* harmony import */ var _components_Queries_session_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Queries_session_graphql__WEBPACK_IMPORTED_MODULE_8__);









function SignupView() {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: signupData , 1: setSignupData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        recaptcha: (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        companyWebsite: ""
    });
    const { 0: shownMessage , 1: setShownMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)();
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)();
    const { session , dictionary  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_App__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Context */ .ZP.Context);
    if (session) router.push("/");
    const submitSignupRequest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (greValue)=>{
        const submit = async (input)=>{
            const { errors , data  } = await apolloClient.mutate({
                mutation: _components_Queries_session_graphql__WEBPACK_IMPORTED_MODULE_8__.signUp,
                variables: {
                    input
                }
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.signUp;
        };
        const input = {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            email: signupData.email,
            password: sha256__WEBPACK_IMPORTED_MODULE_5___default()(signupData.password),
            companyName: signupData.companyName,
            companyWebsite: signupData.companyWebsite,
            gre: greValue
        };
        const response = await submit(input);
        if (!response) enqueueSnackbar(dictionary.session.signUpError, {
            variant: "error"
        });
        else {
            switch(response.status){
                case 1:
                    enqueueSnackbar(dictionary.session.mailUnavailable, {
                        variant: "warning"
                    });
                    break;
                case 2:
                    enqueueSnackbar(dictionary.session.captchaError, {
                        variant: "error"
                    });
                    break;
                case 3:
                    setShownMessage(true);
                    break;
                default:
                    break;
            }
        }
    }, [
        signupData
    ]);
    const onSubmit = async (event)=>{
        setLoading(true);
        event.preventDefault();
        const greValue = signupData.recaptcha.current.getValue();
        const matchPasswords = signupData.password === signupData.confirmPassword;
        if (!greValue) enqueueSnackbar(dictionary.session.emptyCaptcha, {
            variant: "error"
        });
        else if (!matchPasswords) enqueueSnackbar(dictionary.session.passMismatch, {
            variant: "error"
        });
        else {
            try {
                await submitSignupRequest(greValue);
            } catch (error) {
                enqueueSnackbar(error.toString(), {
                    variant: "error"
                });
            }
        }
        signupData.recaptcha?.current?.reset();
        setLoading(false);
    };
    const handleInputChange = (event)=>{
        setSignupData((state)=>({
                ...state,
                [event.target.name]: event.target.value
            }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Session__WEBPACK_IMPORTED_MODULE_7__/* ["default"].SessionPanel */ .ZP.SessionPanel, {
            children: shownMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Session__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Message */ .ZP.Message, {
                message: dictionary.session.signUpMessage
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Session__WEBPACK_IMPORTED_MODULE_7__/* ["default"].SignupForm */ .ZP.SignupForm, {
                onSubmit: onSubmit,
                handleInputChange: handleInputChange,
                formData: signupData,
                loading: loading
            })
        })
    });
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 2705:
/***/ ((module) => {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 2105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 4176:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 4116:
/***/ ((module) => {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("sha256");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,102,910,381], () => (__webpack_exec__(4835)));
module.exports = __webpack_exports__;

})();