"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Home/index.jsx + 5 modules
var Home = __webpack_require__(8239);
// EXTERNAL MODULE: ./components/Products/index.jsx + 10 modules
var Products = __webpack_require__(41);
// EXTERNAL MODULE: ./components/Queries/products.graphql
var products_graphql = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
;// CONCATENATED MODULE: external "react-bootstrap/Button"
const Button_namespaceObject = require("react-bootstrap/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./components/Modals/Modals.jsx








const useStyles = (0,styles_.makeStyles)((theme)=>({
        img: {
            width: "100%",
            maxWidth: "450px",
            margin: "auto",
            textAlign: "center"
        },
        center: {
            textAlign: "center",
            background: "#225D38",
            color: "#ffffff",
            border: "none",
            "&:hover": {
                textAlign: "center",
                border: "none",
                background: "#225D38"
            },
            "&:active": {
                textAlign: "center",
                background: "#225D38",
                border: "none"
            }
        }
    }));
function Modals() {
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(true);
    const router = (0,router_.useRouter)();
    const handleClose = ()=>setShow(false);
    const handleContactButton = async ()=>{
        router.push("/contact");
    };
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
            show: show,
            onHide: handleClose,
            centered: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                    className: classes.img,
                    children: [
                        "       ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "images/Jasu-Popup-optimizado.jpg",
                            className: classes.img
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Footer, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        className: classes.center,
                        onClick: handleContactButton,
                        children: dictionary.nav.modal
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Modals_Modals = (Modals);

;// CONCATENATED MODULE: ./pages/index.jsx











function Index() {
    const { 0: data , 1: setData  } = (0,external_react_.useState)(new Array(8).fill({}));
    const { 0: contactForm , 1: setContactForm  } = (0,external_react_.useState)({
        topic: "",
        message: ""
    });
    const { 0: contactInfo , 1: setContactInfo  } = (0,external_react_.useState)({
        name: "Jasu",
        id: "2322"
    });
    const { 0: viewDialog , 1: setViewDialog  } = (0,external_react_.useState)(false);
    const apolloClient = (0,client_.useApolloClient)();
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const { agent , session , setLoading , dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const router = (0,router_.useRouter)();
    const loggedIn = session ? true : false;
    const getFruits = async ()=>{
        const submit = async ()=>{
            const { data: dataCategories  } = await apolloClient.query({
                query: products_graphql.fruitCategories,
                fetchPolicy: "no-cache"
            });
            if (!dataCategories?.fruitCategories?.length) throw new Error("Apollo Error");
            const fruitFilter = dataCategories.fruitCategories.find((item)=>item.name === dictionary.home.citrus);
            const { errors , data  } = await apolloClient.query({
                query: products_graphql.fruitVarieties,
                variables: {
                    num: 8,
                    asc: false,
                    ord: "fullName",
                    filter: {
                        category: fruitFilter?.id || ""
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.fruitVarieties;
        };
        const response = await submit();
        const data = response.edges.filter((item)=>item.node?.image !== null).map((item)=>({
                id: item.node.id,
                img: item.node.picture || item.node.fruit.picture,
                title: item.node.fullName,
                url: `/products/${item.node.id}`
            }));
        setData(data);
    };
    const handleChangeContactForm = (event)=>{
        setContactForm((state)=>({
                ...state,
                [event.target.name]: event.target.value
            }));
    };
    const handleOpenDialog = (event)=>{
        event.preventDefault();
        if (!loggedIn) {
            router.push(`/contact?email=${contactForm.message}`, "/contact");
        } else {
            setViewDialog(true);
        }
    };
    const handleCloseDialog = ()=>{
        setViewDialog(false);
    };
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            setData(new Array(10).fill({}));
            setLoading(true);
            try {
                await getFruits();
            } catch (error) {
                enqueueSnackbar(error.toString(), {
                    variant: "error"
                });
            }
            setLoading(false);
        }
        fetchData();
    }, [
        agent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Modals_Modals, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home/* default.Banner */.ZP.Banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home/* default.Products */.ZP.Products, {
                data: data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Home/* default.Video */.ZP.Video, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Home/* default.Services */.ZP.Services, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Products/* default.Contact */.ZP.Contact, {
                form: contactForm,
                onFormChange: handleChangeContactForm,
                loggedIn: loggedIn,
                contactName: contactInfo?.name,
                handleOpenDialog: handleOpenDialog
            }),
            loggedIn && /*#__PURE__*/ jsx_runtime_.jsx(Products/* default.ContactDialog */.ZP.ContactDialog, {
                form: contactForm,
                onFormChange: handleChangeContactForm,
                open: viewDialog,
                onClose: handleCloseDialog
            })
        ]
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

/***/ 1541:
/***/ ((module) => {

module.exports = require("@nivo/line");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("accounting");

/***/ }),

/***/ 2125:
/***/ ((module) => {

module.exports = require("country-iso-to-coordinates");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 5001:
/***/ ((module) => {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 4190:
/***/ ((module) => {

module.exports = require("react-simple-maps");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,152,102,910,790,721,41,239], () => (__webpack_exec__(5658)));
module.exports = __webpack_exports__;

})();