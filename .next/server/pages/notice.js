"use strict";
(() => {
var exports = {};
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 5233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const useAnalyticsEventTracker = (category)=>{
    const eventTracker = (action, label)=>{
        react_ga__WEBPACK_IMPORTED_MODULE_0___default().event({
            category,
            action,
            label
        });
    };
    return eventTracker;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnalyticsEventTracker);


/***/ }),

/***/ 6267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
// EXTERNAL MODULE: ./components/Session/index.jsx + 7 modules
var Session = __webpack_require__(3381);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./components/StyledComponents/index.jsx + 2 modules
var StyledComponents = __webpack_require__(2910);
;// CONCATENATED MODULE: ./components/Notice/Notice.jsx





const useStyles = (0,core_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            paddingInline: theme.spacing(2),
            marginBlock: theme.spacing(10),
            alignItems: "stretch",
            width: "100%",
            [theme.breakpoints.up("md")]: {
                maxWidth: 600
            },
            [theme.breakpoints.up("lg")]: {
                maxWidth: 800
            }
        },
        title: {
            color: theme.palette.secondary.main,
            fontSize: 30,
            lineHeight: "60px",
            textAlign: "center",
            [theme.breakpoints.up("sm")]: {
                fontSize: 35
            }
        }
    }));
function Notice({ children  }) {
    console.log("children", children);
    const classes = useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "h1",
                component: "h1",
                className: classes.title,
                children: dictionary.nav.notice
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: dictionary.nav.notice == "Privacy Notice" ? /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                    src: "/pdf/Jasu - Privacy Policy.pdf",
                    type: "application/pdf",
                    width: "100%",
                    height: "600"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("embed", {
                    src: "/pdf/Jasu - Aviso de privacidad.pdf",
                    type: "application/pdf",
                    width: "100%",
                    height: "600"
                })
            })
        ]
    });
}
;

// EXTERNAL MODULE: ./components/Queries/contact.graphql
var contact_graphql = __webpack_require__(721);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Analytics/useAnalyticsEventTracker.jsx
var useAnalyticsEventTracker = __webpack_require__(5233);
;// CONCATENATED MODULE: ./pages/notice.jsx












function Contact() {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: contactData , 1: setContactData  } = (0,external_react_.useState)({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        message: ""
    });
    const { 0: shownMessage , 1: setShownMessage  } = (0,external_react_.useState)(false);
    const apolloClient = (0,client_.useApolloClient)();
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const router = (0,router_.useRouter)();
    const submitMessage = (0,external_react_.useCallback)(async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.mutate({
                mutation: contact_graphql.sendComment,
                variables: {
                    input: contactData
                }
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.sendComment;
        };
        const response = await submit();
        if (!response) return enqueueSnackbar(dictionary.session.contactError, {
            variant: "error"
        });
        setShownMessage(true);
    }, [
        contactData
    ]);
    const onSubmit = async (event)=>{
        setLoading(true);
        event.preventDefault();
        try {
            await submitMessage();
            const gaEventTracker = (0,useAnalyticsEventTracker/* default */.Z)("Contact");
            gaEventTracker(contactData.name, contactData.message);
        } catch (error) {
            enqueueSnackbar(error.toString(), {
                variant: "error"
            });
        }
        setLoading(false);
    };
    const handleInputChange = (event)=>{
        setContactData((state)=>({
                ...state,
                [event.target.name]: event.target.value
            }));
    };
    (0,external_react_.useEffect)(()=>{
        if (router.query.email) {
            setContactData((state)=>({
                    ...state,
                    email: router.query.email
                }));
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Session/* default.SessionPanel */.ZP.SessionPanel, {
            children: shownMessage ? /*#__PURE__*/ jsx_runtime_.jsx(Session/* default.Message */.ZP.Message, {
                message: dictionary.session.signUpMessage
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Notice, {
                children: dictionary.nav.notice
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

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,102,910,381,721], () => (__webpack_exec__(6267)));
module.exports = __webpack_exports__;

})();