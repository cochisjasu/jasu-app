(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 1771:
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"prices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PriceFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"date"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"drums"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"volume"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"presentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"price"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PriceInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"date"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"drums"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"volume"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"presentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"harvests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HarvestFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"harvests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"month"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"harvest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HarvestInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"harvest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"month"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":2434}};
    doc.loc.source = {"body":"query prices($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: PriceFilter)\n{\n    prices(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                date\n                price\n                drums\n                volume\n                product{\n                    id\n                    presentation{\n                        id\n                        name\n                    }\n                    fruitVariety{\n                        id\n                        name\n                        fruit{\n                            id\n                            name\n                        }\n                    }\n                }\n                country{\n                    id\n                    name\n                }\n            }\n        }\n    }\n}\n\nquery price($input: PriceInput!)\n{\n    price(\n        input: $input\n    ) {\n        id\n        date\n        price\n        drums\n        volume\n        product{\n            id\n            presentation{\n                id\n                name\n            }\n            fruitVariety{\n                id\n                name\n                fruit{\n                    id\n                    name\n                }\n            }\n        }\n        country{\n            id\n            name\n        }\n    }\n}\n\nquery harvests($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: HarvestFilter)\n{\n    harvests(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                month\n                country{\n                    id\n                    name\n                }\n                fruitVariety{\n                    id\n                    name\n                    fruit{\n                        id\n                        name\n                    }\n                }\n            }\n        }\n    }\n}\n\nquery harvest($input: HarvestInput!)\n{\n    harvest(\n        input: $input\n    ) {\n        id\n        month\n        country{\n            id\n            name\n        }\n        fruitVariety{\n            id\n            name\n            fruit{\n                id\n                name\n            }\n        }\n    }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports.prices = oneQuery(doc, "prices");
        
        module.exports.price = oneQuery(doc, "price");
        
        module.exports.harvests = oneQuery(doc, "harvests");
        
        module.exports.harvest = oneQuery(doc, "harvest");
        


/***/ }),

/***/ 7914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3126);
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7102);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8765);
/* harmony import */ var _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Queries_prices_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1771);
/* harmony import */ var _components_Queries_prices_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_Queries_prices_graphql__WEBPACK_IMPORTED_MODULE_9__);










// import useAnalyticsEventTracker from '../../../components/Analytics/useAnalyticsEventTracker';
const tableTitles = [
    {
        key: "presentation",
        label: "Presentation"
    },
    {
        key: "country",
        label: "Country"
    },
    {
        key: "drums",
        label: "Drums"
    },
    {
        key: "volume",
        label: "Available volume(MT)"
    },
    {
        key: "price",
        label: "Price (USD/Kg)"
    }, 
];
const TEST_DATA_CONTACT = {
    name: "Jasu",
    id: "2322"
};
const PRICE_DATA_TEMPLATE = [
    {
        id: "2019",
        data: [
            {
                x: "2022-01-01",
                y: "83"
            }
        ]
    },
    {
        id: "2020",
        data: [
            {
                x: "2022-01-01",
                y: "83"
            }
        ]
    },
    {
        id: "2021",
        data: [
            {
                x: "2022-01-01",
                y: "83"
            }
        ]
    },
    {
        id: "2022",
        data: [
            {
                x: "2022-01-01",
                y: "83"
            },
            {
                x: "2022-02-01",
                y: "70"
            },
            {
                x: "2022-03-01",
                y: "62"
            },
            {
                x: "2022-04-01",
                y: "50"
            },
            {
                x: "2022-05-01",
                y: "44"
            },
            {
                x: "2022-06-01",
                y: "44"
            },
            {
                x: "2022-07-01",
                y: "55"
            },
            {
                x: "2022-08-01",
                y: "72"
            }, 
        ]
    }
];
function ProductDetails() {
    const { agent , session , dictionary , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_App__WEBPACK_IMPORTED_MODULE_6__/* .Context */ ._y);
    const { 0: viewDialog , 1: setViewDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productInfo , 1: setProductInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: dictionary.productInfo.loading
    });
    const { 0: relatedProducts , 1: setRelatedProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(4).fill({}));
    const { 0: varietyData , 1: setVarietyData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        all: {
            map: [],
            harvest: []
        }
    });
    const { 0: priceTableData , 1: setPriceTableData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        titles: tableTitles,
        data: []
    });
    const { 0: priceTendenciesData , 1: setPriceTendenciesData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PRICE_DATA_TEMPLATE);
    const { 0: contactInfo , 1: setContactInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: contactForm , 1: setContactForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        topic: "",
        message: ""
    });
    const { 0: relatedProcesses , 1: setRelatedProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(6).fill({}));
    const { 0: productKey , 1: setProductKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: fruitID , 1: setFruitID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useApolloClient)();
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)();
    const { productID , processID  } = router.query;
    const loggedIn = session ? true : false;
    const getProductInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__.product,
                variables: {
                    input: {
                        fruitVariety: productID,
                        presentation: processID
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.product;
        };
        const response = await submit();
        if (!response) return enqueueSnackbar(dictionary.productInfo.productError, {
            variant: "warning"
        });
        setProductInfo((state)=>({
                ...state,
                title: `${response.presentation.name} - ${response.fruitVariety.fullName}`,
                description: response.description,
                img: response.picture,
                files: response?.productFiles ? response.productFiles : []
            }));
        setProductKey(response.id);
        setFruitID(response.fruitVariety.fruit.id);
    }, [
        productID,
        processID,
        agent
    ]);
    const getRelated = async (type)=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: _components_Queries_products_graphql__WEBPACK_IMPORTED_MODULE_8__.products,
                variables: {
                    num: type == "fruitVariety" ? 7 : 5,
                    asc: true,
                    filter: {
                        [type]: type == "fruitVariety" ? productID : processID
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
        if (!response) return enqueueSnackbar(dictionary.formatString(dictionary.productInfo.fruitError, type == "fruitVariety" ? "frutas" : "presentaciones"), {
            variant: "warning"
        });
        if (type == "fruitVariety") {
            const newProcess = response.edges.filter((item)=>!(item.node.presentation.id == processID)).map((item)=>({
                    id: item.node.presentation.id,
                    img: item.node.presentation.picture,
                    name: item.node.presentation.name,
                    url: `/products/${productID}/${item.node.presentation.id}`,
                    description: item.node.presentation.description
                }));
            if (newProcess.length > 6) newProcess.pop();
            setRelatedProcesses(newProcess);
        } else {
            const newFruits = response.edges.filter((item)=>!(item.node.fruitVariety.id == productID)).map((item)=>({
                    id: item.node.fruitVariety.id,
                    img: item.node.fruitVariety.picture || item.node.fruitVariety.fruit.picture,
                    title: item.node.fruitVariety.fullName,
                    url: `/products/${item.node.fruitVariety.id}/${processID}`
                }));
            if (newFruits.length > 4) newFruits.pop();
            setRelatedProducts(newFruits);
        }
    };
    const getHarvestData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: _components_Queries_prices_graphql__WEBPACK_IMPORTED_MODULE_9__.harvests,
                variables: {
                    num: -1,
                    ord: "countryId",
                    asc: true,
                    filter: {
                        fruit: [
                            fruitID
                        ]
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.harvests;
        };
        const getVarietyData = (data, initial = false)=>{
            const countries = [];
            const newData = [];
            const varieties = [];
            let tmp = {};
            let lastMonth = -1;
            let newCountry = false;
            for (const item of data){
                if (initial && item.month === lastMonth) continue;
                const country = item.country.id;
                if (!countries.includes(country)) {
                    countries.push(country);
                    newCountry = true;
                }
                const variety = item.fruitVariety.name;
                if (!varieties.includes(variety)) varieties.push(variety);
                if (item.month - 1 !== lastMonth || newCountry) {
                    if (Object.keys(tmp).length > 0) {
                        tmp.y.push(new Date(lastMonth === 12 ? 2023 : 2022, lastMonth === 12 ? 0 : lastMonth, 0).getTime());
                        newData.push(tmp);
                        tmp = {};
                    }
                    tmp.x = item.country.name;
                    tmp.y = [
                        new Date(2022, item.month - 1, 1).getTime()
                    ];
                }
                lastMonth = item.month;
                newCountry = false;
            }
            if (Object.keys(tmp).length > 0) {
                tmp.y.push(new Date(lastMonth === 12 ? 2023 : 2022, lastMonth === 12 ? 1 : lastMonth, 0).getTime());
                newData.push(tmp);
            }
            if (initial === true) return [
                countries,
                varieties,
                newData
            ];
            return [
                countries,
                newData
            ];
        };
        const response = await submit();
        if (!response) return enqueueSnackbar(dictionary.productInfo.harvestError, {
            variant: "warning"
        });
        const data = response.edges.map((item)=>item.node);
        const [countries, varieties, allData] = getVarietyData(data, true);
        const newHarvestState = {
            all: {
                harvest: allData,
                map: countries
            }
        };
        varieties.forEach((variety)=>{
            const [varCountries, varHarvest] = getVarietyData(data.filter((item)=>item.fruitVariety.name === variety));
            newHarvestState[variety] = {
                harvest: varHarvest,
                map: varCountries
            };
        });
        setVarietyData(newHarvestState);
    }, [
        fruitID,
        agent
    ]);
    const getPriceData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: _components_Queries_prices_graphql__WEBPACK_IMPORTED_MODULE_9__.prices,
                variables: {
                    ord: "date",
                    asc: false,
                    num: -1,
                    filter: {
                        query: productID
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            // console.log(data);
            return data.prices;
        };
        const response = await submit();
        if (!response) return enqueueSnackbar(dictionary.productInfo.priceError, {
            variant: "warning"
        });
        //Obtener datos de tabla
        const data = response.edges.map((item)=>item.node);
        const presentations = [];
        const newTableData = data.filter((item)=>{
            const presentation = item.product.presentation.id;
            if (presentations.includes(presentation)) return false;
            presentations.push(presentation);
            return true;
        }).map((item)=>({
                ...item,
                country: item.country ? item.country.name : "",
                countryCode: item.country ? item.country.id : "",
                presentation: item.product.presentation.name,
                price: item.price ? (0,accounting__WEBPACK_IMPORTED_MODULE_5__.formatMoney)(item.price) : null
            }));
        setPriceTableData((state)=>({
                ...state,
                data: newTableData
            }));
        if (!loggedIn) return;
        const productPrices = data.filter((item)=>item.product.presentation.id === processID).reverse();
        let newTendenciesData = [];
        let years = [];
        for (const item of productPrices){
            const year = item.date.slice(0, 4);
            if (!years.includes(year)) {
                years.push(year);
                newTendenciesData.push({
                    id: year,
                    data: []
                });
            }
            const index = years.indexOf(year);
            newTendenciesData[index].data.push({
                x: item.date,
                y: item.price
            });
        }
        // const gaEventTracker = useAnalyticsEventTracker('Chart Price');
        // gaEventTracker('Get Price', 'Price for ' + productID);
        // console.log('TENDENCIES');
        // console.log(newTendenciesData);
        setPriceTendenciesData(newTendenciesData);
    }, [
        productKey,
        loggedIn,
        agent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        async function fetchData() {
            await Promise.all([
                getProductInfo(),
                getRelated("fruitVariety"),
                getRelated("presentation"), 
            ]);
        }
        fetchData();
        //TODO: Eliminar al implementar
        if (loggedIn) {
            setContactInfo(TEST_DATA_CONTACT);
        }
        setLoading(false);
    }, [
        loggedIn,
        productID,
        processID,
        agent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            await getPriceData();
        }
        if (productKey) fetchData();
    }, [
        productKey,
        loggedIn,
        agent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            await getHarvestData();
        }
        if (fruitID) fetchData();
    }, [
        agent,
        fruitID
    ]);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Information */ .ZP.Information, {
                loggedIn: loggedIn,
                productInfo: productInfo,
                handleOpenDialog: handleOpenDialog
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].OtherProducts */ .ZP.OtherProducts, {
                process: processID,
                relatedProducts: relatedProducts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].OtherProcess */ .ZP.OtherProcess, {
                product: productID,
                relatedProcesses: relatedProcesses
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Stastistics */ .ZP.Stastistics, {
                varietyData: varietyData,
                pricesTableData: priceTableData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].PriceCharts */ .ZP.PriceCharts, {
                loggedIn: loggedIn,
                priceTendenciesData: priceTendenciesData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Contact */ .ZP.Contact, {
                form: contactForm,
                onFormChange: handleChangeContactForm,
                loggedIn: loggedIn,
                contactName: contactInfo?.name,
                handleOpenDialog: handleOpenDialog
            }),
            loggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products__WEBPACK_IMPORTED_MODULE_7__/* ["default"].ContactDialog */ .ZP.ContactDialog, {
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

/***/ 1541:
/***/ ((module) => {

"use strict";
module.exports = require("@nivo/line");

/***/ }),

/***/ 3126:
/***/ ((module) => {

"use strict";
module.exports = require("accounting");

/***/ }),

/***/ 2125:
/***/ ((module) => {

"use strict";
module.exports = require("country-iso-to-coordinates");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 5001:
/***/ ((module) => {

"use strict";
module.exports = require("pure-react-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4190:
/***/ ((module) => {

"use strict";
module.exports = require("react-simple-maps");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,152,102,910,790,721,41], () => (__webpack_exec__(7914)));
module.exports = __webpack_exports__;

})();