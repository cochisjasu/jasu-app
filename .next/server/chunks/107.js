"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 3107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q5": () => (/* binding */ PAGES),
  "ZP": () => (/* binding */ Search)
});

// UNUSED EXPORTS: FiltersBar, OptionNavbar, PaginationBar, ProductTitle, ResultsGrid

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
// EXTERNAL MODULE: ./components/Cards/index.jsx + 3 modules
var Cards = __webpack_require__(3790);
;// CONCATENATED MODULE: ./components/Search/ProductTitle.jsx







const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        },
        link: {
            color: theme.palette.primary.main
        },
        title: {
            color: "#245130",
            marginBlock: theme.spacing(2),
            lineHeight: "60px",
            fontSize: "28px",
            [theme.breakpoints.up("lg")]: {
                fontSize: "40px"
            }
        },
        descriptionBox: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row",
                alignItems: "center"
            }
        },
        picture: {
            maxWidth: 300,
            alignSelf: "center",
            [theme.breakpoints.up("md")]: {}
        },
        descriptionContent: {
            display: "flex",
            flexDirection: "column",
            marginTop: theme.spacing(5),
            [theme.breakpoints.up("lg")]: {
                marginInline: theme.spacing(5),
                marginTop: 0
            }
        },
        subtitle: {
            fontSize: 24,
            marginBottom: theme.spacing(3)
        },
        description: {}
    }));
function ProductTitle({ title , picture , description  }) {
    const classes = useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: "/products",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Link, {
                    className: classes.link,
                    children: [
                        "<",
                        dictionary.general.goBack
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                component: "h1",
                variant: "h1",
                className: classes.title,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.descriptionBox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Cards/* FruitCard */.O9, {
                        img: picture,
                        className: classes.picture
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.descriptionContent,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "h2",
                                component: "h3",
                                className: classes.subtitle,
                                children: dictionary.productInfo.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                children: description,
                                className: classes.description
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Search/OptionNavbar.jsx




const OptionNavbar_useStyles = (0,core_.makeStyles)((theme)=>({
        root: {
            backgroundColor: theme.palette.background.main,
            boxShadow: "none"
        },
        tab: {
            maxWidth: "50%",
            textTransform: "capitalize",
            color: theme.palette.gray.main,
            fontWeight: "500",
            lineHeight: "1.25rem",
            fontSize: "1.25rem",
            [theme.breakpoints.up("sm")]: {
                fontSize: "2.5rem",
                lineHeight: "3.75rem"
            }
        },
        selectedTab: {
            color: theme.palette.green.dark,
            fontWeight: "700"
        }
    }));
function OptionNavbar({ pageType , handleChange  }) {
    const classes = OptionNavbar_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.AppBar, {
        position: "static",
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Tabs, {
            indicatorColor: "secondary",
            value: pageType,
            onChange: handleChange,
            "aria-label": "simple tabs example",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Tab, {
                    label: dictionary.search.products,
                    className: classes.tab,
                    classes: {
                        selected: classes.selectedTab
                    }
                }, "products"),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Tab, {
                    label: dictionary.search.presentation,
                    className: classes.tab,
                    classes: {
                        selected: classes.selectedTab
                    }
                }, "presentation")
            ]
        })
    });
}

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "react-horizontal-scrolling-menu"
var external_react_horizontal_scrolling_menu_ = __webpack_require__(916);
;// CONCATENATED MODULE: ./components/Search/FiltersBar.jsx







const FiltersBar_useStyles = (0,core_.makeStyles)((theme)=>({
        tabShown: {
            lineHeight: "1.067rem",
            fontSize: "0.875rem",
            color: "#BDBEBF",
            minWidth: "0",
            paddingInline: theme.spacing(1)
        },
        selectedTabShown: {
            color: theme.palette.gray.main,
            fontWeight: "600"
        },
        boxPresentationFilters: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            marginBottom: theme.spacing(3),
            paddingLeft: theme.spacing(2)
        },
        presentationOptions: {
            backgroundColor: theme.palette.white.main,
            border: "1px solid #8A9C4C",
            borderRadius: "50px",
            color: theme.palette.primary.main,
            whiteSpace: "nowrap",
            padding: "6px 12px"
        },
        presentationOptionsSelected: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50px",
            color: theme.palette.primary.contrastText,
            whiteSpace: "nowrap",
            padding: "6px 12px"
        },
        boxProductsFilter: {
            alignItems: "center",
            paddingLeft: theme.spacing(2)
        },
        filterProduct: {
            backgroundColor: theme.palette.white.main,
            border: "1px solid #8A9C4C",
            borderRadius: "50px",
            color: theme.palette.primary.main,
            paddingInline: "10px",
            marginBottom: theme.spacing(1)
        },
        filterProductChecked: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50px",
            color: theme.palette.primary.contrastText,
            paddingInline: "10px",
            marginBottom: theme.spacing(1)
        },
        productCheckbox: {
            color: theme.palette.primary.main
        },
        productCheckboxSelected: {
            color: theme.palette.white.main
        },
        boxcontainercheck: {
            display: "flex",
            alignItems: "stretch",
            marginBlock: "2rem",
            justifyContent: "space-between",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row",
                alignItems: "center"
            }
        },
        shownText: {
            color: theme.palette.gray.main
        },
        boxShownMobile: {
            display: "flex",
            alignItems: "center"
        },
        shownTextMobile: {
            color: theme.palette.gray.main,
            fontSize: "0.875rem",
            lineHeight: "1.067"
        },
        select: {
            color: theme.palette.gray.main,
            boxShadow: "none",
            backgroundColor: theme.palette.white.main,
            borderRadius: "40px",
            border: "1px solid #C0C2B7",
            minWidth: "180px",
            [theme.breakpoints.up("lg")]: {
                marginLeft: "16px"
            },
            "& .MuiSelect-select:focus": {
                borderRadius: "40px"
            }
        },
        selectIcon: {
            color: theme.palette.primary.main
        },
        containercheckbox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row"
            }
        }
    }));
function FiltersBar({ pageType , page , dataLength , labelShow , itemsPerPage , itemsPerPageOptions , handleChangeItemsPerPage , sort , handleChangeSort , showFilters =false , filters =[] , handleChangeFilters =null ,  }) {
    const classes = FiltersBar_useStyles();
    const theme = (0,core_.useTheme)();
    const isLg = (0,core_.useMediaQuery)(theme.breakpoints.up("lg"));
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const getPresentationValue = ()=>{
        let value = "";
        let notAll = false;
        for (const option of filters){
            if (option.checked) {
                value = option.id;
            } else {
                notAll = true;
            }
        }
        if (notAll) return value;
        return "all";
    };
    const allPresentations = {
        id: "all",
        name: "Todo"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: classes.boxcontainercheck,
        children: [
            isLg && /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                className: classes.shownText,
                children: labelShow
            }),
            pageType == PAGES.PRODUCTS && showFilters && /*#__PURE__*/ jsx_runtime_.jsx(external_react_horizontal_scrolling_menu_.ScrollMenu, {
                scrollContainerClassName: classes.boxProductsFilter,
                children: filters.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.FormControlLabel, {
                        className: !isLg ? option.checked ? classes.filterProductChecked : classes.filterProduct : "",
                        control: /*#__PURE__*/ jsx_runtime_.jsx(core_.Checkbox, {
                            checked: option.checked,
                            onChange: handleChangeFilters,
                            color: "default",
                            inputProps: {
                                "aria-label": "checkbox with default color"
                            },
                            name: option.id,
                            className: !isLg ? option.checked ? classes.productCheckboxSelected : classes.productCheckbox : ""
                        }),
                        label: option.name
                    }, option.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                id: "scrollPagination",
                className: classes.containercheckbox,
                children: [
                    pageType == PAGES.PRESENTATION && showFilters && (isLg ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Select, {
                        onChange: handleChangeFilters,
                        variant: "outlined",
                        value: getPresentationValue(),
                        native: true,
                        inputProps: {
                            name: "filterPresentation",
                            id: "filterPresentation"
                        },
                        IconComponent: icons_.ExpandMoreRounded,
                        className: classes.select,
                        classes: {
                            icon: classes.selectIcon
                        },
                        children: [
                            allPresentations,
                            ...filters
                        ].map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: option.id,
                                children: option.name
                            }, option.id))
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_horizontal_scrolling_menu_.ScrollMenu, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.RadioGroup, {
                            value: getPresentationValue(),
                            name: "filterPresentation",
                            onChange: handleChangeFilters,
                            className: classes.boxPresentationFilters,
                            children: [
                                allPresentations,
                                ...filters
                            ].map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.FormControlLabel, {
                                    value: option.id,
                                    control: /*#__PURE__*/ jsx_runtime_.jsx(core_.Radio, {
                                        style: {
                                            display: "none"
                                        }
                                    }),
                                    label: option.name,
                                    className: getPresentationValue() == option.id ? classes.presentationOptionsSelected : classes.presentationOptions
                                }, option.id))
                        })
                    })),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        style: {
                            display: "flex"
                        },
                        children: [
                            !isLg && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                className: classes.boxShownMobile,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        className: classes.shownTextMobile,
                                        children: dictionary.search.show
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Tabs, {
                                        indicatorColor: "secondary",
                                        value: itemsPerPage,
                                        onChange: handleChangeItemsPerPage,
                                        children: itemsPerPageOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Tab, {
                                                label: option,
                                                className: classes.tabShown,
                                                classes: {
                                                    selected: classes.selectedTabShown
                                                }
                                            }, option))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Select, {
                                onChange: handleChangeSort,
                                variant: "outlined",
                                value: sort,
                                native: true,
                                inputProps: {
                                    name: "sort",
                                    id: "sort"
                                },
                                IconComponent: icons_.ExpandMoreRounded,
                                className: classes.select,
                                classes: {
                                    icon: classes.selectIcon
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                        value: "A-Z",
                                        children: [
                                            " ",
                                            dictionary.search.az,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                        value: "Z-A",
                                        children: [
                                            " ",
                                            dictionary.search.za,
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Search/ResultsGrid.jsx




const ResultsGrid_useStyles = (0,core_.makeStyles)((theme)=>({
        boxFruit: {
            display: "flex",
            flexWrap: "wrap"
        }
    }));
function ResultsGrid({ pageType , data , productID ="" ,  }) {
    const classes = ResultsGrid_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
        className: classes.boxFruit,
        spacing: 2,
        container: true,
        children: data ? data.map((card)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                item: true,
                xs: pageType == PAGES.PRESENTATION ? 12 : 6,
                sm: 6,
                md: 4,
                lg: pageType == PAGES.PRESENTATION ? 4 : 2,
                children: pageType == PAGES.PRODUCTS ? /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default.FruitCard */.ZP.FruitCard, {
                    img: card.picture,
                    title: card.name,
                    url: `/products/${productID ? `${card.id}/${productID}` : card.id}`
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default.CardPresentation */.ZP.CardPresentation, {
                    className: classes.fruit,
                    img: card.picture,
                    name: card.name,
                    description: card.description,
                    url: `/products/${productID ? `${productID}/${card.id}` : card.id}`
                })
            }, card.id)) : null
    });
}

// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(4116);
;// CONCATENATED MODULE: ./components/Search/PaginationBar.jsx



const PaginationBar_useStyles = (0,core_.makeStyles)((theme)=>({
        boxPagination: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBlock: "70px"
        },
        list: {
            "& li button": {
                backgroundColor: (0,core_.alpha)(theme.palette.gray.main, .1),
                marginInline: 6
            },
            "& li:first-child button": {
                backgroundColor: theme.palette.gray.main,
                color: theme.palette.white.main
            },
            "& li:last-child button": {
                backgroundColor: theme.palette.gray.main,
                color: theme.palette.white.main
            },
            [theme.breakpoints.up("md")]: {
                "& li:last-child": {
                    marginLeft: theme.spacing(4)
                },
                "& li:first-child": {
                    marginRight: theme.spacing(4)
                }
            }
        }
    }));
function PaginationBar({ count , page , handleChangePageNumber ,  }) {
    const classes = PaginationBar_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(lab_.Pagination, {
        count: count,
        page: page,
        onChange: handleChangePageNumber,
        color: "primary",
        className: classes.boxPagination,
        classes: {
            ul: classes.list
        }
    });
}

;// CONCATENATED MODULE: ./components/Search/index.jsx





const PAGES = {
    PRODUCTS: 0,
    PRESENTATION: 1
};
/* harmony default export */ const Search = ({
    ProductTitle: ProductTitle,
    OptionNavbar: OptionNavbar,
    FiltersBar: FiltersBar,
    ResultsGrid: ResultsGrid,
    PaginationBar: PaginationBar
});



/***/ })

};
;