"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Sn": () => (/* reexport */ StyledButton),
  "tH": () => (/* reexport */ StyledTextField)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
;// CONCATENATED MODULE: ./components/StyledComponents/StyledButton.jsx


const useStyles = (0,core_.makeStyles)((theme)=>({
        root: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 40,
            padding: theme.spacing(2, 3),
            "&:disabled": {
                backgroundColor: (0,core_.alpha)("#404040", 0)
            },
            "&:hover": {
                backgroundColor: "#32754b"
            }
        },
        label: {
            color: theme.palette.white.main,
            fontWeight: 600
        }
    }));
function StyledButton({ className ="" , loading =false , label ="" , ...props }) {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
        className: `${classes.root} ${className}`,
        variant: "contained",
        disableElevation: true,
        disabled: loading,
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(core_.CircularProgress, {
            size: 24
        }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
            className: classes.label,
            variant: "button",
            children: label
        }),
        ...props
    });
}

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
;// CONCATENATED MODULE: ./components/StyledComponents/StyledTextField.jsx



const StyledTextField_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column"
        },
        label: {
            fontSize: 14,
            lineHeight: "17px",
            color: "#110000",
            marginBottom: theme.spacing(1)
        },
        textField: {
            backgroundColor: theme.palette.white.main
        }
    }));
function StyledTextField({ className ="" , label ="" , ...TextFieldProps }) {
    const classes = StyledTextField_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: `${classes.root} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.FormLabel, {
                className: classes.label,
                required: TextFieldProps?.required ? TextFieldProps?.required : false,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                variant: "outlined",
                className: classes.textField,
                placeholder: label,
                ...TextFieldProps
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/StyledComponents/index.jsx


/* harmony default export */ const StyledComponents = ({
    StyledButton: StyledButton,
    StyledTextField: StyledTextField
});



/***/ })

};
;