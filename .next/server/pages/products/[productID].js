"use strict";
(() => {
var exports = {};
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 2824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3107);
/* harmony import */ var _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8765);
/* harmony import */ var _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7102);










const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)((theme)=>({
        root: {
            maxWidth: "none",
            minHeight: "20vh",
            [theme.breakpoints.up("lg")]: {
                paddingTop: "64px"
            },
            backgroundColor: theme.palette.background.main
        },
        container: {
            paddingBlock: "32px",
            maxWidth: theme.breakpoints.values.lg,
            marginInline: "auto"
        },
        emptyBox: {
            paddingBlock: theme.spacing(3)
        }
    }));
function SearchView() {
    const { 0: pageType , 1: setPageType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION);
    const { 0: product , 1: setProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "Fruta / Presentaci\xf3n",
        picture: "",
        description: ""
    });
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(10).fill({}));
    const { 0: dataLength , 1: setDataLength  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.length);
    const { 0: itemsPerPage , 1: setItemsPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: sort , 1: setSort  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("A-Z");
    const scroll = react_scroll__WEBPACK_IMPORTED_MODULE_4__.scroller;
    const classes = useStyles();
    const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const isLg = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.up("lg"));
    const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useApolloClient)();
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_6__.useSnackbar)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { productID  } = router.query;
    const itemsPerPageOptions = [
        12,
        24,
        48
    ];
    const { agent , dictionary , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_App__WEBPACK_IMPORTED_MODULE_9__/* .Context */ ._y);
    const getProducts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__.products,
                variables: {
                    pag: page - 1,
                    num: itemsPerPageOptions[itemsPerPage],
                    asc: sort == "A-Z" ? true : false,
                    filter: {
                        query: productID
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.products;
        };
        const response = await submit();
        if (!response || response.totalCount === 0) {
            enqueueSnackbar(dictionary.search.productsError, {
                variant: "info"
            });
            setData([]);
            setDataLength(0);
        } else {
            const type = response.edges[0].node.fruitVariety.id == productID ? _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION : _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRODUCTS */ .q5.PRODUCTS;
            const productInfo = response.edges[0].node[type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? "fruitVariety" : "presentation"];
            setProduct({
                title: productInfo[type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? "fullName" : "name"],
                picture: type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? productInfo.picture || productInfo.fruit.picture : productInfo.picture,
                description: type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? productInfo.description || productInfo.fruit.description : productInfo.description
            });
            const data = response.edges.map((item)=>{
                const itemInfo = item.node[type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? "presentation" : "fruitVariety"];
                return {
                    id: itemInfo.id,
                    picture: type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? itemInfo.picture : itemInfo.picture || itemInfo.fruit.picture,
                    name: itemInfo[type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? "name" : "fullName"],
                    description: type === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRESENTATION */ .q5.PRESENTATION ? itemInfo.description : itemInfo.description || itemInfo.fruit.description
                };
            });
            setPageType(type);
            setDataLength(response.totalCount);
            setData(data);
        }
    }, [
        productID,
        itemsPerPage,
        page,
        sort,
        agent
    ]);
    const handleChangePageNumber = (event, newValue)=>{
        scroll.scrollTo("scrollPagination", {
            duration: 1500,
            delay: 0,
            smooth: true,
            offset: -64
        });
        setPage(newValue);
    };
    const handleChangeItemsPerPage = (event, newValue)=>{
        setItemsPerPage(newValue);
    };
    const handleChangeSort = (event)=>{
        setPage(1);
        setSort(event.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            setData(new Array(10).fill({}));
            setLoading(true);
            try {
                await getProducts();
            } catch (error) {
                enqueueSnackbar(error.toString(), {
                    variant: "error"
                });
            }
            setLoading(false);
        }
        fetchData();
    }, [
        itemsPerPage,
        page,
        sort,
        agent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLg) {
            setItemsPerPage(2);
            setPage(1);
        } else {
            setItemsPerPage(0);
            setPage(1);
        }
    }, [
        isLg
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
            className: classes.root,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_7__/* ["default"].ProductTitle */ .ZP.ProductTitle, {
                        ...product
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_7__/* ["default"].FiltersBar */ .ZP.FiltersBar, {
                        pageType: pageType,
                        page: page,
                        dataLength: dataLength,
                        labelShow: dictionary.formatString(dictionary.search.showResultsFruits, pageType === _components_Search__WEBPACK_IMPORTED_MODULE_7__/* .PAGES.PRODUCTS */ .q5.PRODUCTS ? dictionary.search.fruits : dictionary.search.presentations),
                        itemsPerPage: itemsPerPage,
                        itemsPerPageOptions: itemsPerPageOptions,
                        handleChangeItemsPerPage: handleChangeItemsPerPage,
                        sort: sort,
                        handleChangeSort: handleChangeSort
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_7__/* ["default"].ResultsGrid */ .ZP.ResultsGrid, {
                        pageType: pageType,
                        data: data,
                        productID: productID
                    }),
                    Math.ceil(dataLength / itemsPerPageOptions[itemsPerPage]) > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_7__/* ["default"].PaginationBar */ .ZP.PaginationBar, {
                        count: Math.ceil(dataLength / itemsPerPageOptions[itemsPerPage]),
                        page: page,
                        handleChangePageNumber: handleChangePageNumber
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        className: classes.emptyBox
                    })
                ]
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

/***/ 5001:
/***/ ((module) => {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 916:
/***/ ((module) => {

module.exports = require("react-horizontal-scrolling-menu");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,102,790,107], () => (__webpack_exec__(2824)));
module.exports = __webpack_exports__;

})();