(() => {
var exports = {};
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 6161:
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncAll"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncAll"},"arguments":[],"directives":[]}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncFruitCategory"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncFruitCategory"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncPresentationCategory"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncPresentationCategory"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncFruit"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncFruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncFruitVariety"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncFruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncPresentation"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncPresentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncProduct"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncProduct"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"added"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleted"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncPricesData"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncPricesData"},"arguments":[],"directives":[]}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncHarvestsData"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncHarvestsData"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":742}};
    doc.loc.source = {"body":"mutation syncAll{\n    syncAll\n}\n\nmutation syncFruitCategory{\n    syncFruitCategory{\n        added\n        updated\n        deleted\n    }\n}\n\nmutation syncPresentationCategory{\n    syncPresentationCategory{\n        added\n        updated\n        deleted\n    }\n}\n\nmutation syncFruit{\n    syncFruit{\n        added\n        updated\n        deleted\n    }\n}\nmutation syncFruitVariety{\n    syncFruitVariety{\n        added\n        updated\n        deleted\n    }\n}\nmutation syncPresentation{\n    syncPresentation{\n        added\n        updated\n        deleted\n    }\n}\nmutation syncProduct{\n    syncProduct{\n        added\n        updated\n        deleted\n    }\n}\nmutation syncPricesData{\n    syncPricesData\n}\nmutation syncHarvestsData{\n    syncHarvestsData\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }
    
    module.exports = doc;
    
        module.exports.syncAll = oneQuery(doc, "syncAll");
        
        module.exports.syncFruitCategory = oneQuery(doc, "syncFruitCategory");
        
        module.exports.syncPresentationCategory = oneQuery(doc, "syncPresentationCategory");
        
        module.exports.syncFruit = oneQuery(doc, "syncFruit");
        
        module.exports.syncFruitVariety = oneQuery(doc, "syncFruitVariety");
        
        module.exports.syncPresentation = oneQuery(doc, "syncPresentation");
        
        module.exports.syncProduct = oneQuery(doc, "syncProduct");
        
        module.exports.syncPricesData = oneQuery(doc, "syncPricesData");
        
        module.exports.syncHarvestsData = oneQuery(doc, "syncHarvestsData");
        


/***/ }),

/***/ 7191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SyncView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(3349);
// EXTERNAL MODULE: ./components/Session/index.jsx + 7 modules
var Session = __webpack_require__(3381);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Queries/sync.graphql
var sync_graphql = __webpack_require__(6161);
;// CONCATENATED MODULE: ./components/Sync/useSync.jsx




function useSync() {
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    /**
     * Despliega error apollo
     * @param {ApolloError} error 
     */ const onError = (error)=>{
        enqueueSnackbar(error.message, {
            variant: "error"
        });
    };
    const [allMutation, { loading: allLoading  }] = (0,client_.useMutation)(sync_graphql.syncAll, {
        onError
    });
    const [fruitCategoryMutation, { loading: fruitCategoryLoading  }] = (0,client_.useMutation)(sync_graphql.syncFruitCategory, {
        onError
    });
    const [presentationCategoryMutation, { loading: presentationCategoryLoading  }] = (0,client_.useMutation)(sync_graphql.syncPresentationCategory, {
        onError
    });
    const [fruitMutation, { loading: fruitLoading  }] = (0,client_.useMutation)(sync_graphql.syncFruit, {
        onError
    });
    const [fruitVarietyMutation, { loading: fruitVarietyLoading  }] = (0,client_.useMutation)(sync_graphql.syncFruitVariety, {
        onError
    });
    const [presentationMutation, { loading: presentationLoading  }] = (0,client_.useMutation)(sync_graphql.syncPresentation, {
        onError
    });
    const [productMutation, { loading: productLoading  }] = (0,client_.useMutation)(sync_graphql.syncProduct, {
        onError
    });
    const [priceMutation, { loading: priceLoading  }] = (0,client_.useMutation)(sync_graphql.syncPricesData, {
        onError
    });
    const [harvestMutation, { loading: harvestLoading  }] = (0,client_.useMutation)(sync_graphql.syncHarvestsData, {
        onError
    });
    /**
     * @type {Boolean}
     */ const loading = (0,external_react_.useMemo)(()=>allLoading || fruitCategoryLoading || presentationCategoryLoading || fruitLoading || fruitVarietyLoading || presentationLoading || productLoading || priceLoading || harvestLoading, [
        allLoading,
        fruitCategoryLoading,
        presentationCategoryLoading,
        fruitLoading,
        fruitVarietyLoading,
        presentationLoading,
        productLoading,
        priceLoading,
        harvestLoading
    ]);
    return {
        allMutation,
        fruitCategoryMutation,
        presentationCategoryMutation,
        fruitMutation,
        fruitVarietyMutation,
        presentationMutation,
        productMutation,
        priceMutation,
        harvestMutation,
        loading
    };
}

;// CONCATENATED MODULE: ./pages/sync.jsx





const useStyles = (0,styles_.makeStyles)((theme)=>({
        button: {
            marginBottom: theme.spacing(2),
            padding: theme.spacing(2, 2),
            fontSize: "1.5rem",
            fontWeight: "700"
        }
    }));
function SyncView() {
    const classes = useStyles();
    const { allMutation , fruitCategoryMutation , presentationCategoryMutation , fruitMutation , fruitVarietyMutation , presentationMutation , productMutation , priceMutation , harvestMutation , loading  } = useSync();
    return /*#__PURE__*/ jsx_runtime_.jsx(Session/* default.SessionPanel */.ZP.SessionPanel, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
            display: "flex",
            flexDirection: "column",
            margin: 2,
            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: allMutation,
                disabled: loading,
                children: "Sincronizar todo"
            })
        })
    });
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 2705:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 2105:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ 4176:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 4116:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/lab");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5623:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,102,910,381], () => (__webpack_exec__(7191)));
module.exports = __webpack_exports__;

})();