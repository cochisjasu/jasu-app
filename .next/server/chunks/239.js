"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 8239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xx": () => (/* reexport */ WhatsAppButton),
  "ZP": () => (/* binding */ Home)
});

// UNUSED EXPORTS: Banner, Products, Services, Video

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
// EXTERNAL MODULE: ./components/StyledComponents/index.jsx + 2 modules
var StyledComponents = __webpack_require__(2910);
;// CONCATENATED MODULE: ./components/Home/Banner.jsx







const useStyles = (0,styles_.makeStyles)((theme)=>({
        backgroundBanner: {
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(180deg, #FFF 0%, #EDEDED 100%)",
            position: "relative",
            padding: theme.spacing(0, 0, 15, 0),
            "&::before": {
                zIndex: 2,
                backgroundColor: theme.palette.background.main,
                content: '""',
                position: "absolute",
                width: "100%",
                height: theme.spacing(15),
                bottom: 0,
                left: 0,
                borderRadius: "50% 50% 0 0"
            },
            [theme.breakpoints.up("lg")]: {
                marginTop: 64
            }
        },
        leftCorner: {
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            height: 100,
            [theme.breakpoints.up("md")]: {
                height: 350
            }
        },
        rightCorner: {
            position: "absolute",
            zIndex: 1,
            bottom: 70,
            right: 0,
            height: 150,
            [theme.breakpoints.up("md")]: {
                height: 300,
                bottom: 0
            }
        },
        leftSide: {
            position: "absolute",
            left: 0,
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block"
            }
        },
        rightSide: {
            position: "absolute",
            right: 0
        },
        contentBanner: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 500,
            textAlign: "center",
            paddingInline: theme.spacing(1)
        },
        bannerTitle: {
            fontSize: 32,
            fontWeight: 800,
            color: theme.palette.secondary.main,
            paddingBottom: "30px",
            letterSpacing: "0.05em",
            [theme.breakpoints.up("lg")]: {
                fontSize: 60,
                fontWeight: 800
            }
        },
        bannerDescription: {
            color: "#202422",
            paddingBottom: "30px",
            width: "70%",
            margin: "0 auto",
            letterSpacing: "0.05em",
            maxWidth: 700,
            [theme.breakpoints.up("lg")]: {
                width: "100%"
            }
        }
    }));
const Banner = ()=>{
    const classes = useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        maxWidth: false,
        className: classes.backgroundBanner,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/decorations/home/banner-top.png",
                className: classes.leftCorner
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/decorations/home/banner-bottom.png",
                className: classes.rightCorner
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/svg/decorations/home/banner-left.svg",
                className: classes.leftSide
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/svg/decorations/home/banner-right.svg",
                className: classes.rightSide
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.contentBanner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        variant: "h1",
                        component: "h1",
                        className: classes.bannerTitle,
                        children: dictionary.home.bannerTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        className: classes.bannerDescription,
                        children: dictionary.home.bannerDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/products",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                            label: dictionary.general.showProducts
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Banner = (Banner);

// EXTERNAL MODULE: ./components/Cards/index.jsx + 3 modules
var Cards = __webpack_require__(3790);
;// CONCATENATED MODULE: ./components/Home/Products.jsx








const Products_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            backgroundColor: theme.palette.background.main,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            marginBottom: theme.spacing(8),
            lineHeight: "1.25rem",
            [theme.breakpoints.up("lg")]: {
                fontSize: "2rem",
                lineHeight: "2.5rem"
            }
        },
        carousel: {
            width: "100%",
            marginBottom: theme.spacing(4),
            [theme.breakpoints.up("lg")]: {
                maxWidth: 1200,
                marginBottom: theme.spacing(8)
            }
        },
        button: {
            marginBottom: theme.spacing(8),
            marginInline: theme.spacing(1),
            textAlign: "center"
        }
    }));
function Products({ data  }) {
    const classes = Products_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const showCards = {
        max: 4,
        lg: 4,
        md: 2.5,
        sm: 1.5
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        maxWidth: false,
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "h2",
                component: "h3",
                className: classes.title,
                children: dictionary.home.productsTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.carousel,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default.Carousel */.ZP.Carousel, {
                    type: "fruit",
                    data: data,
                    show: showCards
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/products",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                    className: classes.button,
                    label: dictionary.general.showProducts
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
;// CONCATENATED MODULE: ./components/Home/Video.jsx






const Video_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            background: `linear-gradient(180deg, ${theme.palette.background.main} 0%, #EDEDED 100%)`,
            position: "relative",
            padding: theme.spacing(0, 0, 15, 0),
            "&::before": {
                zIndex: 2,
                backgroundColor: theme.palette.background.main,
                content: '""',
                position: "absolute",
                width: "100%",
                height: theme.spacing(15),
                bottom: 0,
                left: 0,
                borderRadius: "50% 50% 0 0"
            }
        },
        leftCorner: {
            position: "absolute",
            zIndex: 1,
            bottom: 70,
            left: 0,
            height: 100,
            [theme.breakpoints.up("md")]: {
                height: 350,
                bottom: 0
            }
        },
        rightCorner: {
            position: "absolute",
            zIndex: 1,
            bottom: 70,
            right: 0,
            height: 100,
            [theme.breakpoints.up("md")]: {
                height: 300,
                bottom: 0
            }
        },
        leftSide: {
            position: "absolute",
            left: 0,
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block"
            }
        },
        rightSide: {
            position: "absolute",
            right: 0
        },
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: 500,
            paddingInline: theme.spacing(1)
        },
        title: {
            paddingBottom: theme.spacing(4),
            [theme.breakpoints.up("lg")]: {
                fontSize: 32,
                paddingBottom: theme.spacing(5)
            }
        },
        description: {
            color: theme.palette.gray.main,
            fontSize: 18,
            lineHeight: "1.5rem",
            paddingBottom: theme.spacing(4),
            maxWidth: 600
        },
        video: {
            width: "100%",
            [theme.breakpoints.up("md")]: {
                maxWidth: 430
            },
            zIndex: 1
        }
    }));
function Video() {
    const classes = Video_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        maxWidth: false,
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/decorations/home/video-left.png",
                className: classes.leftCorner
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/decorations/home/video-right.png",
                className: classes.rightCorner
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/svg/decorations/home/video-left.svg",
                className: classes.leftSide
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/svg/decorations/home/video-right.svg",
                className: classes.rightSide
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        variant: "h2",
                        component: "h2",
                        className: classes.title,
                        children: dictionary.home.howItWorksTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        className: classes.description,
                        children: dictionary.home.howItWorksDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        className: classes.video,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                            className: classes.video,
                            url: dictionary.home.howItWorksVideo,
                            width: "100%",
                            height: "100%",
                            controls: true,
                            playing: true
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Home/Services.jsx





const Services_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            paddingInline: theme.spacing(1),
            paddingBottom: theme.spacing(10),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            paddingBottom: theme.spacing(10),
            lineHeight: "1.25rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "2rem",
                lineHeight: "2.5rem"
            }
        },
        servicesBox: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                maxWidth: 1100
            }
        },
        serviceCard: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
            "&:last-child": {
                marginBottom: 0
            },
            [theme.breakpoints.up("lg")]: {
                marginRight: theme.spacing(4),
                "&:last-child": {
                    marginRight: 0
                }
            }
        },
        pictureBack: {
            width: "100%",
            aspectRatio: 1,
            background: "url(/svg/decorations/home/service-back.svg)",
            backgroundSize: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        cardPicture: {
            width: "70%"
        },
        cardTitle: {
            marginBlock: theme.spacing(4)
        },
        cardDescription: {
            color: theme.palette.gray.main
        }
    }));
function Services() {
    const classes = Services_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const services = [
        {
            title: dictionary.home.customerTitle,
            description: dictionary.home.customerDescription,
            image: "/images/decorations/home/services-1.png"
        },
        {
            title: dictionary.home.shippingTitle,
            description: dictionary.home.shippingDescription,
            image: "/images/decorations/home/services-2.png"
        },
        {
            title: dictionary.home.financialTitle,
            description: dictionary.home.financialDescription,
            image: "/images/decorations/home/services-3.png"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        maxWidth: false,
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "h2",
                component: "h3",
                className: classes.title,
                children: dictionary.home.serviceTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.servicesBox,
                children: services.map(({ title , description , image  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.serviceCard,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                className: classes.pictureBack,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: image,
                                    alt: title,
                                    className: classes.cardPicture
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "h2",
                                component: "h3",
                                className: classes.cardTitle,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.cardDescription,
                                children: description
                            })
                        ]
                    }, index))
            })
        ]
    });
}

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
;// CONCATENATED MODULE: ./components/Home/WhatsAppButton.jsx



const WhatsAppButton_useStyles = (0,core_.makeStyles)((theme)=>({
        whatsAppButton: {
            position: "fixed",
            right: 20,
            bottom: 20,
            zIndex: 2,
            backgroundColor: "#F4F4F4",
            color: "#225D38"
        }
    }));
function WhatsAppButton() {
    const classes = WhatsAppButton_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Fab, {
        className: classes.whatsAppButton,
        href: "https://wa.me/+13056992843",
        target: "_blank",
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.WhatsApp, {
            fontSize: "large"
        })
    });
}

;// CONCATENATED MODULE: ./components/Home/index.jsx





/* harmony default export */ const Home = ({
    Banner: Home_Banner,
    Products: Products,
    Video: Video,
    Services: Services,
    WhatsAppButton: WhatsAppButton
});



/***/ })

};
;