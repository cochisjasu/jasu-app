"use strict";
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Products)
});

// UNUSED EXPORTS: Contact, ContactDialog, Information, OtherProcess, OtherProducts, PriceCharts, Stastistics

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/App/index.jsx + 4 modules
var App = __webpack_require__(7102);
// EXTERNAL MODULE: ./components/Cards/index.jsx + 3 modules
var Cards = __webpack_require__(3790);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Products/Information.jsx








const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                marginTop: theme.spacing(8)
            }
        },
        returnLink: {
            marginRight: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            color: theme.palette.gray.main,
            marginBlock: theme.spacing(4),
            [theme.breakpoints.up("md")]: {
                marginBlock: theme.spacing(8)
            }
        },
        infoDisplay: {
            display: "flex",
            marginBottom: theme.spacing(8),
            flexDirection: "column",
            width: "100%",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                maxWidth: 940,
                marginInline: "auto",
                alignItems: "center"
            }
        },
        cardDisplay: {
            flex: 1,
            [theme.breakpoints.up("md")]: {
                height: "fit-content"
            }
        },
        textInfoDisplay: {
            flex: 1,
            [theme.breakpoints.up("md")]: {
                marginInline: theme.spacing(5)
            }
        },
        title: {
            fontSize: "2.5rem",
            lineHeight: "3.75rem",
            color: theme.palette.primary.main,
            marginTop: theme.spacing(3),
            [theme.breakpoints.up("md")]: {
                marginTop: 0
            }
        },
        subtitle: {
            fontSize: 24,
            marginBlock: theme.spacing(3)
        },
        downloadList: {
            padding: 0,
            display: "flex",
            flexDirection: "column"
        },
        downloadItem: {
            backgroundColor: theme.palette.white.main,
            border: "1px solid #EFEFEC",
            borderRadius: theme.spacing(1),
            marginBlock: theme.spacing(1),
            padding: theme.spacing(1.5),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1
        },
        downloadItemName: {
            color: "rgba(64, 64, 64, 0.8)"
        },
        blankSpace: {
            flex: 0,
            [theme.breakpoints.up("md")]: {
                flex: 1
            }
        },
        contactDisplay: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "38px",
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            padding: "18px",
            marginInline: "auto",
            marginBottom: "40px"
        },
        contactLabel: {
            color: theme.palette.white.main,
            marginRight: "8px"
        },
        contactButton: {
            borderRadius: "60px",
            backgroundColor: theme.palette.white.main,
            color: theme.palette.green.dark,
            "&:hover": {
                backgroundColor: theme.palette.white.main
            }
        }
    }));
function Information({ loggedIn , productInfo , handleOpenDialog  }) {
    const classes = useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const { back  } = (0,router_.useRouter)();
    const onBack = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Link, {
                className: classes.returnLink,
                onClick: back,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronLeftRounded, {}),
                    dictionary.general.goBack
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.infoDisplay,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default.FruitCard */.ZP.FruitCard, {
                        img: productInfo?.img,
                        className: classes.cardDisplay
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.textInfoDisplay,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                component: "h1",
                                variant: "h1",
                                className: classes.title,
                                children: productInfo?.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "h2",
                                component: "h3",
                                className: classes.subtitle,
                                children: productInfo?.description ? dictionary.productInfo.description : ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.infoDescription,
                                children: productInfo?.description
                            }),
                            productInfo?.files?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        variant: "h2",
                                        component: "h3",
                                        className: classes.subtitle,
                                        children: dictionary.productInfo.info
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.List, {
                                        className: classes.downloadList,
                                        children: productInfo.files.map((file)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                                                className: classes.downloadItem,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                        className: classes.downloadItemName,
                                                        children: file.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        href: file.url,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/download-icon.svg",
                                                            alt: "download"
                                                        })
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            loggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.contactDisplay,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        className: classes.contactLabel,
                        children: dictionary.productInfo.contactLabel
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        className: classes.contactButton,
                        onClick: handleOpenDialog,
                        children: dictionary.general.contactUs
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/StyledComponents/index.jsx + 2 modules
var StyledComponents = __webpack_require__(2910);
;// CONCATENATED MODULE: ./components/Products/OtherProducts.jsx








const OtherProducts_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            marginBottom: theme.spacing(8),
            display: "flex",
            flexDirection: "column"
        },
        title: {
            textAlign: "center",
            fontSize: 32,
            lineHeight: "40px",
            marginBottom: theme.spacing(5)
        },
        button: {
            marginTop: theme.spacing(5),
            width: "fit-content",
            marginInline: "auto"
        }
    }));
function OtherProducts({ process , relatedProducts  }) {
    const classes = OtherProducts_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const showCards = {
        max: 4,
        lg: 4,
        md: 3,
        sm: 1.5
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "h1",
                component: "h2",
                className: classes.title,
                children: dictionary.productInfo.otherFruits
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cards/* default.Carousel */.ZP.Carousel, {
                type: "fruit",
                data: relatedProducts,
                show: showCards,
                arrows: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/products/${process}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                    className: classes.button,
                    label: dictionary.general.showMore
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Products/PriceTable.jsx





//TODO: Checar diseño responsivo
const PriceTable_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            backgroundColor: "#FFF",
            borderRadius: theme.spacing(1),
            border: "1px solid #EFEFEC",
            padding: theme.spacing(2)
        },
        title: {
            fontSize: 24,
            marginBottom: theme.spacing(2)
        },
        evenRow: {
            "&:nth-of-type(even)": {
                backgroundColor: theme.palette.background.card
            }
        },
        headerCell: {
            backgroundColor: theme.palette.white.main,
            borderTop: "1px solid #EFEFEC",
            fontWeight: 600,
            color: theme.palette.gray.main,
            fontSize: "1rem"
        },
        bodyCell: {
            fontWeight: "500",
            color: "#404040CC",
            fontSize: "1rem",
            lineHeight: "1.219rem"
        },
        priceLabel: {
            color: theme.palette.primary.main,
            fontWeight: "600"
        },
        priceLink: {
            textDecoration: "underline"
        }
    }));
function PriceTable({ titles , data , className =""  }) {
    const classes = PriceTable_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: `${classes.root} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "subtitle1",
                component: "h3",
                className: classes.title,
                children: dictionary.productInfo.presentations
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.TableContainer, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Table, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TableHead, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TableRow, {
                                children: titles.map((title)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.TableCell, {
                                        align: "center",
                                        className: classes.headerCell,
                                        children: title.label
                                    }, title.key))
                            }, "header")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TableBody, {
                            children: data.map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.TableRow, {
                                    className: classes.evenRow,
                                    children: titles.map((title)=>{
                                        if (title.key != "price") return /*#__PURE__*/ jsx_runtime_.jsx(core_.TableCell, {
                                            className: classes.bodyCell,
                                            align: "center",
                                            children: row[title.key]
                                        }, title.key);
                                        else {
                                            if (row["price"] !== null) return /*#__PURE__*/ jsx_runtime_.jsx(core_.TableCell, {
                                                className: classes.bodyCell,
                                                align: "center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: classes.priceLabel,
                                                    children: row[title.key]
                                                })
                                            }, title.key);
                                            else return /*#__PURE__*/ jsx_runtime_.jsx(core_.TableCell, {
                                                className: classes.bodyCell,
                                                align: "center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Link, {
                                                    href: "/signup",
                                                    className: classes.priceLink,
                                                    children: dictionary.productInfo.requestPrice
                                                })
                                            }, title.key);
                                        }
                                    })
                                }, row.presentation))
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-simple-maps"
var external_react_simple_maps_ = __webpack_require__(4190);
// EXTERNAL MODULE: external "country-iso-to-coordinates"
var external_country_iso_to_coordinates_ = __webpack_require__(2125);
var external_country_iso_to_coordinates_default = /*#__PURE__*/__webpack_require__.n(external_country_iso_to_coordinates_);
;// CONCATENATED MODULE: ./components/Products/WorldMap.jsx






// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const WorldMap_useStyles = (0,core_.makeStyles)((theme)=>({
        root: {
            backgroundColor: "#DCE7E7",
            flex: 1,
            borderRadius: 8
        },
        buttonBox: {
            position: "absolute",
            left: theme.spacing(3),
            bottom: theme.spacing(3),
            display: "flex",
            flexDirection: "column"
        },
        button: {
            backgroundColor: theme.palette.white.main,
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            marginBottom: theme.spacing(1),
            "&:last-child": {
                marginBottom: 0
            }
        }
    }));
function WorldMap({ markers  }) {
    const { 0: position , 1: setPosition  } = (0,external_react_.useState)({
        coordinates: [
            -100,
            20
        ],
        zoom: 1.5
    });
    const { 0: scaleFactor , 1: setScaleFactor  } = (0,external_react_.useState)(1.5);
    const classes = WorldMap_useStyles();
    function handleZoomIn() {
        if (position.zoom >= 4) return;
        const newZoom = position.zoom * 2;
        setPosition((pos)=>({
                ...pos,
                zoom: newZoom
            }));
        setScaleFactor(newZoom);
    }
    function handleZoomOut() {
        if (position.zoom <= 1) return;
        const newZoom = position.zoom / 2;
        setPosition((pos)=>({
                ...pos,
                zoom: newZoom
            }));
        setScaleFactor(newZoom);
    }
    function handleOnMove(pos) {
        setScaleFactor(pos.k);
    }
    function handleMoveEnd(pos) {
        setPosition(pos);
    }
    (0,external_react_.useEffect)(()=>{
        if (markers.length > 0) {
            setPosition((pos)=>({
                    ...pos,
                    coordinates: (external_country_iso_to_coordinates_default())[markers[0]].coordinate.slice().reverse()
                }));
        }
    }, [
        markers
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_maps_.ComposableMap, {
                width: 400,
                projection: "geoMercator",
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_simple_maps_.ZoomableGroup, {
                    minZoom: 1,
                    zoom: position.zoom,
                    center: position.coordinates,
                    onMove: handleOnMove,
                    onMoveEnd: handleMoveEnd,
                    translateExtent: [
                        [
                            -250,
                            30
                        ],
                        [
                            700,
                            550
                        ]
                    ],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_maps_.Geographies, {
                            geography: geoUrl,
                            children: ({ geographies  })=>geographies.map((geo)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_maps_.Geography, {
                                        geography: geo,
                                        fill: "#F7F7F4",
                                        stroke: "#CBCAC8",
                                        style: {
                                            default: {
                                                outline: "none"
                                            },
                                            hover: {
                                                outline: "none"
                                            },
                                            pressed: {
                                                outline: "none"
                                            }
                                        }
                                    }, geo.rsmKey))
                        }),
                        markers.map((countryCode)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_simple_maps_.Marker, {
                                coordinates: (external_country_iso_to_coordinates_default())[countryCode].coordinate.slice().reverse(),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    transform: `scale(${1 / scaleFactor})`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "0",
                                            cy: "-6",
                                            r: 12,
                                            fill: "#FD4A5C"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "0",
                                            cy: "-6",
                                            r: 11.5,
                                            stroke: "white"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "0",
                                            cy: "-6",
                                            r: 29,
                                            fill: "#FD4A5C",
                                            opacity: "0.3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M 0 -6.3 C -0.3789 -6.3 -0.7422 -6.458 -1.0102 -6.7393 C -1.2781 -7.0206 -1.4286 -7.4022 -1.4286 -7.8 C -1.4286 -8.1978 -1.2781 -8.5794 -1.0102 -8.8607 C -0.7422 -9.142 -0.3789 -9.3 0 -9.3 C 0.3789 -9.3 0.7422 -9.142 1.0102 -8.8607 C 1.2781 -8.5794 1.4286 -8.1978 1.4286 -7.8 C 1.4286 -7.603 1.3916 -7.408 1.3198 -7.226 C 1.248 -7.044 1.1428 -6.8786 1.0102 -6.7393 C 0.8775 -6.6001 0.72 -6.4896 0.5467 -6.4142 C 0.3734 -6.3388 0.1876 -6.3 0 -6.3 V -6.3 Z M 0 -12 C -1.0609 -12 -2.0783 -11.5575 -2.8284 -10.7698 C -3.5786 -9.9822 -4 -8.9139 -4 -7.8 C -4 -4.65 0 0 0 0 C 0 0 4 -4.65 4 -7.8 C 4 -8.9139 3.5786 -9.9822 2.8284 -10.7698 C 2.0783 -11.5575 1.0609 -12 0 -12 V -12 Z",
                                            fill: "white"
                                        })
                                    ]
                                }, countryCode)
                            }, countryCode))
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.buttonBox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Add, {}),
                        className: classes.button,
                        size: "small",
                        onClick: handleZoomIn
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Remove, {}),
                        className: classes.button,
                        size: "small",
                        onClick: handleZoomOut
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/Products/HarvestChart.jsx






const Chart = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Products/HarvestChart.jsx -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
const HarvestChart_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            backgroundColor: "#FFF",
            borderRadius: theme.spacing(1),
            border: "1px solid #EFEFEC",
            padding: theme.spacing(2)
        },
        title: {
            fontSize: 24,
            marginTop: theme.spacing(2)
        },
        buttonList: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        button: {
            marginTop: theme.spacing(1),
            padding: theme.spacing(.8),
            borderRadius: 8,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.card,
            "&:disabled": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            },
            "&:hover.Mui-disabled": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            }
        }
    }));
function HarvestChart({ data , variety , varieties , handleVarietyChange , className =""  }) {
    const { agent , dictionary  } = (0,external_react_.useContext)(App/* default.Context */.ZP.Context);
    const classes = HarvestChart_useStyles();
    const options = {
        chart: {
            type: "rangeBar",
            defaultLocale: agent?.locale?.id || "es",
            locales: [
                {
                    name: "es",
                    options: {
                        months: [
                            "Enero",
                            "Febrero",
                            "Marzo",
                            "Abril",
                            "Mayo",
                            "Junio",
                            "Julio",
                            "Agosto",
                            "Septiembre",
                            "Octubre",
                            "Noviembre",
                            "Diciembre"
                        ],
                        shortMonths: [
                            "Ene",
                            "Feb",
                            "Mar",
                            "Abr",
                            "May",
                            "Jun",
                            "Jul",
                            "Ago",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        days: [
                            "Domingo",
                            "Lunes",
                            "Martes",
                            "Miercoles",
                            "Jueves",
                            "Viernes",
                            "Sabado"
                        ],
                        shortDays: [
                            "Dom",
                            "Lun",
                            "Mar",
                            "Mie",
                            "Jue",
                            "Vie",
                            "Sab"
                        ],
                        toolbar: {
                            download: "Descargar SVG",
                            selection: "Selecci\xf3n",
                            selectionZoom: "Selecci\xf3n Zoom",
                            zoomIn: "Aumentar",
                            zoomOut: "Alejar",
                            pan: "Mover gr\xe1fica",
                            reset: "Reiniciar Vista"
                        }
                    }
                },
                {
                    name: "en",
                    options: {
                        months: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        shortMonths: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        days: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        shortDays: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat"
                        ],
                        toolbar: {
                            download: "Download SVG",
                            selection: "Selection",
                            selectionZoom: "Selection Zoom",
                            zoomIn: "Zoom In",
                            zoomOut: "Zoom Out",
                            pan: "Panning",
                            reset: "Reset Zoom"
                        }
                    }
                }
            ]
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 8
            }
        },
        xaxis: {
            type: "datetime",
            labels: {
                datetimeFormatter: {
                    year: "MMM",
                    month: "MMM"
                }
            }
        },
        tooltip: {
            x: {
                format: "MMMMM"
            }
        },
        fill: {
            colors: [
                "#F7BE00"
            ]
        }
    };
    const series = [
        {
            data
        }
    ];
    const style = {};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: `${classes.root} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "subtitle1",
                component: "h3",
                className: classes.title,
                children: dictionary.productInfo.harvest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Chart, {
                options: options,
                series: series,
                type: "rangeBar",
                style: style
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.RadioGroup, {
                className: classes.buttonList,
                value: variety,
                children: varieties.map((key)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        className: classes.button,
                        disabled: variety === key,
                        children: key === "all" ? dictionary.productInfo.all : key,
                        onClick: ()=>handleVarietyChange(key)
                    }, key))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Products/Stastistics.jsx








const Stastistics_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            marginBottom: theme.spacing(5)
        },
        mapTitle: {
            fontSize: 28,
            lineHeight: "48px",
            marginBottom: theme.spacing(2)
        },
        horizontalBox: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row"
            }
        },
        mapDisplay: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginBottom: theme.spacing(5),
            maxHeight: 400,
            position: "relative",
            [theme.breakpoints.up("md")]: {
                marginBottom: 0,
                maxHeight: "none",
                marginRight: theme.spacing(3)
            }
        },
        stastisticsDisplay: {
            flex: 1,
            display: "flex",
            flexDirection: "column"
        },
        chartDisplay: {
            marginBottom: theme.spacing(4)
        },
        tableDisplay: {}
    }));
function Stastistics({ varietyData , pricesTableData  }) {
    const { 0: variety , 1: setVariety  } = (0,external_react_.useState)("all");
    const classes = Stastistics_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const handleVarietyChange = (option)=>{
        setVariety(option);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "subtitle1",
                component: "h3",
                className: classes.mapTitle,
                children: dictionary.productInfo.map
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.horizontalBox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        className: classes.mapDisplay,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(WorldMap, {
                            markers: varietyData[variety].map
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.stastisticsDisplay,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HarvestChart, {
                                className: classes.chartDisplay,
                                data: varietyData[variety].harvest,
                                variety: variety,
                                varieties: Object.keys(varietyData),
                                handleVarietyChange: handleVarietyChange
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PriceTable, {
                                className: classes.tableDisplay,
                                ...pricesTableData,
                                rowId: "country"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                className: classes.tableDisplay
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "@nivo/line"
var line_ = __webpack_require__(1541);
// EXTERNAL MODULE: external "accounting"
var external_accounting_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ./components/Products/PriceCharts.jsx









const PriceCharts_useStyles = (props)=>(0,styles_.makeStyles)((theme)=>({
            root: {
                display: "flex",
                flexDirection: "column",
                marginBottom: "40px"
            },
            title: {
                fontSize: 24,
                marginBottom: "32px"
            },
            chartFrame: {
                position: "relative",
                backgroundColor: theme.palette.white.mpacain,
                border: "1px solid #EFEFEC",
                borderRadius: "20px"
            },
            blockBox: {
                display: props.loggedIn ? "none" : "flex",
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            blockButton: {
                marginTop: theme.spacing(2)
            },
            container: {
                paddingBlock: 16,
                paddingInline: 8,
                [theme.breakpoints.up("md")]: {
                    paddingInline: 90,
                    paddingBlock: 40
                },
                filter: props.loggedIn ? 0 : "blur(5px)"
            },
            yearButtons: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start"
            },
            button: {
                borderRadius: 8,
                padding: "10px 12px",
                color: theme.palette.primary.main,
                backgroundColor: "#EFEFEC",
                marginRight: 12,
                "&:last-child": {
                    marginRight: 0
                }
            },
            buttonSelected: {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:disabled": {
                    color: theme.palette.primary.contrastText
                }
            },
            chart: {
                minWidth: "0",
                height: 500
            },
            tooltip: {
                backgroundColor: theme.palette.white.main,
                border: "1px solid #225D38",
                boxShadow: "0px 4px 17px rgba(97, 121, 174, 0.15)",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: theme.spacing(1)
            },
            tooltipTitle: {
                color: theme.palette.gray.main,
                fontSize: 14,
                fontWeight: 400
            },
            tooltipSubtitle: {
                color: theme.palette.primary.main,
                fontSize: 18,
                fontWeight: 700
            },
            tickLabel: {
                padding: theme.spacing(1.25, 1.75),
                border: "1px solid #E3E3E3",
                borderRadius: theme.spacing(1),
                fontFamily: "Montserrat",
                fill: theme.palette.primary.main
            }
        }));
function PriceCharts({ loggedIn , priceTendenciesData  }) {
    const { 0: year , 1: setYear  } = (0,external_react_.useState)("");
    const classes = PriceCharts_useStyles({
        loggedIn
    })();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const getYearData = ()=>{
        for (const item of priceTendenciesData){
            if (item.id === year) return [
                item
            ];
        }
        return [];
    };
    const handleChangeYear = (event)=>{
        setYear(event.target.innerText);
    };
    (0,external_react_.useEffect)(()=>{
        setYear(priceTendenciesData.length > 0 ? priceTendenciesData.at(-1).id : "");
    }, [
        priceTendenciesData
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
            className: classes.chartFrame,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.blockBox,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            variant: "h2",
                            children: dictionary.productInfo.signUpPrices
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/signup`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                                className: classes.blockButton,
                                label: dictionary.productInfo.signUpPricesButton
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            className: classes.title,
                            variant: "h2",
                            component: "h2",
                            children: dictionary.productInfo.prices
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                            className: classes.yearButtons,
                            children: priceTendenciesData.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    onClick: handleChangeYear,
                                    disabled: year === item.id,
                                    children: item.id,
                                    className: `${classes.button} ${year === item.id ? classes.buttonSelected : ""}`
                                }, item.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                            className: classes.chart,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(line_.ResponsiveLine, {
                                data: getYearData(),
                                margin: {
                                    top: 50,
                                    right: 30,
                                    bottom: 50,
                                    left: 50
                                },
                                xScale: {
                                    format: "%Y-%m-%d",
                                    type: "time",
                                    useUTC: false,
                                    precision: "day"
                                },
                                yScale: {
                                    type: "linear",
                                    min: 0,
                                    max: "auto",
                                    stacked: true,
                                    reverse: false
                                },
                                xFormat: "time:%Y-%m-%d",
                                yFormat: " >-$.2f",
                                axisTop: null,
                                axisRight: null,
                                axisBottom: {
                                    format: (value)=>/*#__PURE__*/ jsx_runtime_.jsx("tspan", {
                                            className: classes.tickLabel,
                                            children: dictionary.date.shortMonth[value.getMonth()]
                                        }),
                                    orient: "bottom",
                                    tickSize: 5,
                                    tickPadding: 9,
                                    tickRotation: 0,
                                    legendOffset: 36,
                                    legendPosition: "middle",
                                    tickValues: "every month"
                                },
                                axisLeft: {
                                    format: (value)=>/*#__PURE__*/ jsx_runtime_.jsx("tspan", {
                                            className: classes.tickLabel,
                                            children: (0,external_accounting_.formatMoney)(value)
                                        }),
                                    orient: "left",
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legendOffset: -40,
                                    legendPosition: "middle"
                                },
                                enableGridX: false,
                                colors: [
                                    "#225D38"
                                ],
                                colorBy: "index",
                                pointSize: 5,
                                pointColor: {
                                    from: "color",
                                    modifiers: []
                                },
                                pointBorderWidth: 2,
                                pointBorderColor: {
                                    from: "serieColor"
                                },
                                pointLabelYOffset: -12,
                                enableArea: true,
                                crosshairType: "x",
                                useMesh: true,
                                legends: [],
                                tooltip: (input)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                        className: classes.tooltip,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                                className: classes.tooltipTitle,
                                                children: [
                                                    input.point.data.xFormatted,
                                                    ", ",
                                                    year
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                className: classes.tooltipSubtitle,
                                                children: input.point.data.yFormatted
                                            })
                                        ]
                                    })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Products/Contact.jsx






const Contact_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            marginBottom: theme.spacing(11),
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end"
        },
        imageLayer: {
            paddingInline: theme.spacing(3),
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                paddingInline: theme.spacing(10)
            }
        },
        formLayer: {
            paddingTop: 200,
            paddingBottom: theme.spacing(3.5),
            paddingInline: theme.spacing(3),
            borderRadius: 16,
            background: "url(/svg/decorations/home/contact-back.svg)",
            backgroundColor: "#95BE7C",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                paddingTop: theme.spacing(3.5),
                paddingInline: theme.spacing(10),
                flexDirection: "row",
                borderRadius: 120
            },
            position: "absolute",
            left: 24,
            right: 24
        },
        imageBox: {
            flex: 1,
            position: "relative",
            zIndex: 1
        },
        imageEmpty: {
            flex: 2,
            minHeight: 200,
            [theme.breakpoints.up("md")]: {
                minHeight: 0
            }
        },
        imageBackground: {
            maxWidth: "100%",
            [theme.breakpoints.up("md")]: {
                width: "100%"
            }
        },
        avatar: {
            width: "55%",
            height: "55%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -25%)"
        },
        formBox: {
            flex: 2,
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                marginLeft: theme.spacing(10)
            }
        },
        formTitle: {
            paddingBottom: theme.spacing(1),
            fontWeight: 700,
            fontSize: 18,
            lineHeight: "140%",
            color: theme.palette.white.main,
            letterSpacing: "0.05em",
            textAlign: "center",
            [theme.breakpoints.up("md")]: {
                textAlign: "left"
            }
        },
        form: {
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                alignItems: "center"
            }
        },
        input: {
            flex: 1,
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                marginRight: 15,
                marginBottom: 0
            },
            "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.white.main,
                borderRadius: 8
            }
        },
        submit: {}
    }));
function Contact({ form , onFormChange , loggedIn , contactName ="" , handleOpenDialog  }) {
    const classes = Contact_useStyles();
    const theme = (0,styles_.useTheme)();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.imageLayer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.imageBox,
                        children: [
                            loggedIn && /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                                className: classes.avatar,
                                src: "/images/decorations/session/avatar.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: classes.imageBackground,
                                src: "/images/decorations/session/contact-back.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        className: classes.imageEmpty
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.formLayer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        flex: 1
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.formBox,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.formTitle,
                                variant: "h3",
                                component: "h3",
                                children: loggedIn ? dictionary.formatString(dictionary.productInfo.contactBarUserTitle, contactName) : dictionary.productInfo.contactBarGuestTitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                className: classes.form,
                                onSubmit: handleOpenDialog,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                        value: form.message,
                                        onChange: onFormChange,
                                        name: "message",
                                        variant: "outlined",
                                        className: classes.input,
                                        placeholder: loggedIn ? dictionary.productInfo.contactBarUserDescription : dictionary.productInfo.contactBarGuestDescription,
                                        multiline: loggedIn,
                                        minRows: loggedIn ? 2 : undefined,
                                        maxRows: loggedIn ? 2 : undefined,
                                        type: loggedIn ? "text" : "email",
                                        required: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                                        type: "submit",
                                        className: classes.submit,
                                        label: loggedIn ? dictionary.productInfo.contactBarUserButton : dictionary.productInfo.contactBarGuestButton
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

;// CONCATENATED MODULE: ./components/Products/OtherProcess.jsx








const OtherProcess_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            paddingBottom: theme.spacing(8),
            display: "flex",
            flexDirection: "column"
        },
        title: {
            fontSize: 32,
            textAlign: "center",
            marginBottom: theme.spacing(5)
        },
        button: {
            marginTop: theme.spacing(3),
            width: "fit-content",
            marginInline: "auto"
        }
    }));
function OtherProcess({ product , relatedProcesses  }) {
    const classes = OtherProcess_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const showCards = {
        max: 3,
        lg: 3,
        md: 2,
        sm: 1
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                variant: "h2",
                component: "h2",
                className: classes.title,
                children: dictionary.productInfo.otherPresentations
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cards/* Carousel */.lr, {
                type: "presentation",
                data: relatedProcesses,
                show: showCards,
                arrows: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/products/${product}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                    className: classes.button,
                    label: dictionary.general.showMore
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./components/Queries/contact.graphql
var contact_graphql = __webpack_require__(721);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./components/Products/ContactDialog.jsx











const ContactDialog_useStyles = (0,styles_.makeStyles)((theme)=>({
        dialogBack: {
            backgroundColor: "rgba(0, 0, 0, 0.8)"
        },
        dialogPaper: {
            borderRadius: "24px",
            border: "1px solid #AFC4F1",
            width: "100%",
            maxWidth: "980px",
            padding: theme.spacing(2),
            [theme.breakpoints.up("lg")]: {
                padding: theme.spacing(4)
            }
        },
        closeDialogButtonDisplay: {
            display: "flex",
            justifyContent: "flex-end"
        },
        dialogContent: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row"
            },
            alignItems: "center",
            flexDirection: "column-reverse",
            justifyContent: "center"
        },
        dialogForm: {
            flex: 3,
            display: "flex",
            flexDirection: "column"
        },
        dialogTitle: {
            fontSize: 32,
            paddingBottom: theme.spacing(1.5)
        },
        dialogDescription: {
            color: theme.palette.gray.main
        },
        messageInput: {
            marginTop: "20px"
        },
        dialogImage: {
            flex: 2,
            position: "relative"
        },
        dialogBackground: {
            maxWidth: "100%",
            [theme.breakpoints.up("md")]: {
                width: "100%"
            }
        },
        dialogAvatar: {
            width: "60%",
            height: "60%",
            position: "absolute",
            zIndex: 1,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -30%)"
        }
    }));
function ContactDialog({ form , onFormChange , open , onClose  }) {
    const classes = ContactDialog_useStyles();
    const { dictionary  } = (0,external_react_.useContext)(App/* Context */._y);
    const { 0: terms , 1: setTerms  } = (0,external_react_.useState)(false);
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const [sendCommentMutation] = (0,client_.useMutation)(contact_graphql.sendUserComment);
    const onSubmit = async (event)=>{
        event.preventDefault();
        try {
            const response = await sendCommentMutation({
                variables: {
                    input: form
                }
            });
            if (response.data?.sendUserComment) onClose();
        } catch (error) {
            enqueueSnackbar(error.message, {
                variant: "error"
            });
        }
    };
    const handleTermsAccepted = (event)=>{
        setTerms(event.target.checked);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Dialog, {
        open: open,
        onClose: onClose,
        classes: {
            root: classes.dialogBack,
            paper: classes.dialogPaper
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.closeDialogButtonDisplay,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                    onClick: onClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Close, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                className: classes.dialogContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: classes.dialogForm,
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: "h2",
                                component: "h2",
                                className: classes.dialogTitle,
                                children: dictionary.productInfo.contactTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.DialogContentText, {
                                className: classes.dialogDescription,
                                children: dictionary.productInfo.contactDescription
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledTextField */.tH, {
                                value: form.topic,
                                onChange: onFormChange,
                                name: "topic",
                                autoFocus: true,
                                label: dictionary.productInfo.contactSubject,
                                fullWidth: true,
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledTextField */.tH, {
                                value: form.message,
                                onChange: onFormChange,
                                name: "message",
                                label: dictionary.productInfo.contactMessage,
                                fullWidth: true,
                                multiline: true,
                                rows: 8,
                                className: classes.messageInput,
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Checkbox, {
                                        value: terms,
                                        onChange: handleTermsAccepted
                                    }),
                                    dictionary.productInfo.acceptTerms
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledComponents/* StyledButton */.Sn, {
                                label: dictionary.productInfo.contactSend,
                                type: "submit",
                                disabled: !terms
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: classes.dialogImage,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                                className: classes.dialogAvatar,
                                src: "/images/decorations/session/avatar.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: classes.dialogBackground,
                                src: "/images/decorations/session/contact-back.png"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Products/index.jsx







/* harmony default export */ const Products = ({
    Information: Information,
    OtherProducts: OtherProducts,
    Stastistics: Stastistics,
    PriceCharts: PriceCharts,
    Contact: Contact,
    OtherProcess: OtherProcess,
    ContactDialog: ContactDialog
});



/***/ })

};
;