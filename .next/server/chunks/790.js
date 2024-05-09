"use strict";
exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 3790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lr": () => (/* reexport */ Carousel),
  "O9": () => (/* reexport */ FruitCard),
  "ZP": () => (/* binding */ Cards)
});

// UNUSED EXPORTS: CardPresentation

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "pure-react-carousel"
var external_pure_react_carousel_ = __webpack_require__(5001);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(4116);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
;// CONCATENATED MODULE: ./components/Cards/FruitCard.jsx







const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            border: "1px solid #EFEFEC",
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            background: "linear-gradient(#EFF0EF 50%, #FFFFFF 50%)",
            position: "relative",
            aspectRatio: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        decoration: {
            position: "absolute",
            top: "50%",
            width: "100%",
            transform: "translateY(-95%)"
        },
        img: {
            maxHeight: "50%",
            marginInline: "auto",
            zIndex: 1
        },
        imgSkeleton: {
            height: "100%",
            maxHeight: "50%",
            marginInline: "auto",
            aspectRatio: 1,
            zIndex: 1
        },
        title: {
            textAlign: "center",
            marginTop: "10%",
            zIndex: 1,
            color: theme.palette.gray.main
        },
        titleSkeleton: {
            textAlign: "center",
            marginTop: "10%",
            zIndex: 1,
            width: "70%"
        }
    }));
function FruitCard({ img ="" , title ="" , url ="#" , className =""  }) {
    const classes = useStyles();
    const { loading  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
            className: `${classes.root} ${className}`,
            elevation: 0,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/svg/decoration-light.svg",
                    className: classes.decoration
                }),
                loading ? /*#__PURE__*/ jsx_runtime_.jsx(lab_.Skeleton, {
                    variant: "circle",
                    className: classes.imgSkeleton
                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: img,
                    alt: title,
                    className: classes.img,
                    style: title.length > 0 ? {} : {
                        maxHeight: "70%",
                        maxWidth: "70%"
                    }
                }),
                loading ? /*#__PURE__*/ jsx_runtime_.jsx(lab_.Skeleton, {
                    variant: "text",
                    className: classes.titleSkeleton
                }) : title.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    variant: "h2",
                    className: classes.title,
                    children: title
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Cards/CardPresentation.jsx







const CardPresentation_useStyles = (0,core_.makeStyles)((theme)=>({
        boxcontainer: {
            cursor: "pointer",
            width: "100%",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            border: "1px solid #EFEFEC",
            padding: "0.75rem",
            ["@media (max-width:960px)"]: {
                justifyContent: "space-between",
                textAlign: "start"
            }
        },
        boxcontainerSelectedFruit: {
            cursor: "pointer",
            width: "100%",
            height: "6.5625rem",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            boxShadow: "5px 5px 8px 0px #B8B8B8",
            padding: "0.75rem",
            ["@media (max-width:960px)"]: {
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "fit-content"
            }
        },
        containerTextSelectedFruit: {
            display: "flex",
            flexDirection: "column",
            marginLeft: "1rem",
            ["@media (max-width:960px)"]: {
                margin: "0",
                textAlign: "center"
            }
        },
        containerText: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginLeft: "1rem",
            ["@media (max-width:960px)"]: {
                textAlign: "start"
            }
        },
        conteinerimg: {
            backgroundColor: "#EFEFEC",
            height: 56,
            minWidth: 56,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
            padding: 5,
            ["@media (max-width:960px)"]: {
                marginBottom: "0.5rem"
            },
            "& img": {
                height: "100%"
            }
        },
        imgSkeleton: {
            width: 56,
            height: 56,
            padding: 10,
            borderRadius: "0.5rem",
            ["@media (max-width:960px)"]: {
                marginBottom: "0.5rem"
            }
        },
        name: {
            fontSize: "1rem",
            color: "#404040",
            fontWeight: "bold",
            marginBottom: "0.25rem",
            ["@media (max-width:960px)"]: {
                marginBottom: "0.5rem"
            }
        },
        description: {
            fontSize: "1rem",
            color: "rgba(64, 64, 64, 0.8)",
            overflow: "hidden",
            ["@media (max-width:960px)"]: {
                marginBottom: theme.spacing(2),
                width: "100%",
                overflow: "hidden"
            }
        }
    }));
const CardPresentation = ({ name , url ="#" , img ="" , description ="" , type  })=>{
    const classes = CardPresentation_useStyles();
    const { loading  } = (0,external_react_.useContext)(App/* Context */._y);
    const truncate = (text)=>{
        return text.length > 45 ? `${text.substring(0, 45)}...` : text;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
            className: type === "selectedFruit" ? classes.boxcontainerSelectedFruit : classes.boxcontainer,
            children: [
                loading || img == null ? /*#__PURE__*/ jsx_runtime_.jsx(lab_.Skeleton, {
                    variant: "square",
                    className: classes.imgSkeleton
                }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                    className: classes.conteinerimg,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: img,
                        alt: name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                    className: type === "selectedFruit" ? classes.containerTextSelectedFruit : classes.containerText,
                    children: loading || img == null ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lab_.Skeleton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(lab_.Skeleton, {
                                style: {
                                    flex: 1
                                }
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.name,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.description,
                                children: truncate(description)
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Cards_CardPresentation = (CardPresentation);

;// CONCATENATED MODULE: ./components/Cards/Carousel.jsx








/* Dot
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 8px;
    border: 0;
    background-color: black;
*/ const Carousel_useStyles = (0,styles_.makeStyles)((theme)=>({
        carousel: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row"
            }
        },
        slider: {
            flex: 1,
            width: "100%"
        },
        multipleSliders: {
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column"
        },
        slide: {
            "& .carousel__inner-slide": {
                width: "calc(100% - 20px)",
                height: "calc(100% - 20px)",
                left: 10,
                top: 10
            }
        },
        slideMultiple: {
            "& .carousel__inner-slide": {
                width: "calc(100% - 20px)",
                left: 10
            }
        },
        button: {
            border: 0,
            backgroundColor: theme.palette.gray.main,
            color: "#FFF",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            aspectRatio: 1,
            "&:first-child": {
                marginRight: theme.spacing(3)
            },
            "&:last-child": {
                marginLeft: theme.spacing(3)
            }
        },
        dots: {
            "& .carousel__dot": {
                aspectRatio: 1,
                borderRadius: "50%",
                marginRight: theme.spacing(1),
                border: 0,
                backgroundColor: (0,core_.alpha)(theme.palette.gray.main, .3)
            },
            "& .carousel__dot--selected": {
                backgroundColor: theme.palette.gray.main
            }
        }
    }));
function Carousel({ type , data , show , arrows =true  }) {
    const classes = Carousel_useStyles();
    const theme = (0,styles_.useTheme)();
    const isLg = (0,core_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMd = (0,core_.useMediaQuery)(theme.breakpoints.up("md"));
    const isSm = (0,core_.useMediaQuery)(theme.breakpoints.up("sm"));
    const getSlidesToShow = ()=>{
        if (isLg) return show.max;
        if (isMd) return show.lg;
        if (isSm) return show.md;
        return show.sm;
    };
    const dataLength = type === "fruit" ? data.length : Math.ceil(data.length / 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_pure_react_carousel_.CarouselProvider, {
        naturalSlideHeight: type === "fruit" ? 100 : 140,
        naturalSlideWidth: type === "fruit" ? 100 : 380,
        totalSlides: dataLength,
        visibleSlides: getSlidesToShow(),
        step: 1,
        infinite: true,
        className: classes.carousel,
        isPlaying: true,
        children: [
            isLg && arrows && /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.ButtonBack, {
                className: classes.button,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronLeftRounded, {
                    fontSize: "large"
                })
            }),
            type === "fruit" ? /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slider, {
                className: classes.slider,
                children: data.map((card, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                        index: index,
                        className: classes.slide,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FruitCard, {
                            ...card
                        })
                    }, index))
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.multipleSliders,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slider, {
                        className: classes.slider,
                        children: data.slice(0, dataLength).map((card, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                index: index,
                                className: classes.slideMultiple,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Cards_CardPresentation, {
                                    ...card
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slider, {
                        className: classes.slider,
                        children: data.slice(-dataLength).map((card, index)=>/*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.Slide, {
                                index: index,
                                className: classes.slideMultiple,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Cards_CardPresentation, {
                                    ...card
                                })
                            }, index))
                    })
                ]
            }),
            isLg && arrows && /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.ButtonNext, {
                className: classes.button,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronRightRounded, {
                    fontSize: "large"
                })
            }),
            !isLg && /*#__PURE__*/ jsx_runtime_.jsx(external_pure_react_carousel_.DotGroup, {
                className: classes.dots
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Cards/index.jsx




/* harmony default export */ const Cards = ({
    Carousel: Carousel,
    FruitCard: FruitCard,
    CardPresentation: Cards_CardPresentation
});


/***/ })

};
;