exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 8765:
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fruitCategories"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fruitCategories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fruits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FruitPresentationFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fruits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fruitVarieties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FruitVarietyFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fruitVarieties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"presentationCategories"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presentationCategories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"presentations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FruitPresentationFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presentations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"num"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"asc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilter"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pag"}}},{"kind":"Argument","name":{"kind":"Name","value":"num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"num"}}},{"kind":"Argument","name":{"kind":"Name","value":"ord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ord"}}},{"kind":"Argument","name":{"kind":"Name","value":"asc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"asc"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalEdges"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasMore"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pag"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"presentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruitVariety"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fruit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"presentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"productFiles"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":3199}};
    doc.loc.source = {"body":"query fruitCategories\n{\n    fruitCategories{\n        id\n        name\n    }\n}\n\nquery fruits($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: FruitPresentationFilter)\n{\n    fruits(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                name\n                picture\n                description\n            }\n        }\n    }\n}\n\nquery fruitVarieties($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: FruitVarietyFilter)\n{\n    fruitVarieties(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                name\n                fullName\n                picture\n                description\n                fruit{\n                    id\n                    name\n                    picture\n                    description\n                }\n            }\n        }\n    }\n}\n\nquery presentationCategories\n{\n    presentationCategories {\n        id\n        name\n    }\n}\n\nquery presentations($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: FruitPresentationFilter)\n{\n    presentations(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                name\n                picture\n                description\n            }\n        }\n    }\n}\n\nquery products($pag: Int, $num: Int, $ord: String, $asc:Boolean, $filter: ProductFilter)\n{\n    products(\n        pag: $pag\n        num: $num\n        ord: $ord\n        asc: $asc\n        filter: $filter\n    ) {\n        totalCount\n        totalEdges\n        hasMore\n        pag\n        edges {\n            node {\n                id\n                picture\n                description\n                fruitVariety{\n                    id\n                    name\n                    fullName\n                    picture\n                    description\n                    fruit{\n                        id\n                        name\n                        picture\n                        description\n                    }\n                }\n                presentation{\n                    id\n                    name\n                    picture\n                    description\n                }\n            }\n        }\n    }\n}\n\nquery product($input: ProductInput!)\n{\n    product(\n        input: $input\n    ) {\n        id\n        description\n        picture\n        fruitVariety{\n            id\n            name\n            fullName\n            picture\n            description\n            fruit{\n                id\n                name\n                picture\n                description\n            }\n        }\n        presentation{\n            id\n            name\n            picture\n            description\n        }\n        productFiles{\n            id\n            name\n            url\n        }\n    }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports.fruitCategories = oneQuery(doc, "fruitCategories");
        
        module.exports.fruits = oneQuery(doc, "fruits");
        
        module.exports.fruitVarieties = oneQuery(doc, "fruitVarieties");
        
        module.exports.presentationCategories = oneQuery(doc, "presentationCategories");
        
        module.exports.presentations = oneQuery(doc, "presentations");
        
        module.exports.products = oneQuery(doc, "products");
        
        module.exports.product = oneQuery(doc, "product");
        


/***/ }),

/***/ 3632:
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAgent"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agent"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isMobile"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isTablet"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isDesktop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"remoteSession"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"remoteAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"defaultLocale"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isDst"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"session"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyWebsite"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timezone"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gmtOffset"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"locales"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setLocale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setLocale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getNonce"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"data"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nonce"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"nonce"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nonce"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyWebsite"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[],"directives":[]}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUp"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateRecovery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateRecovery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"gre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gre"}}}],"directives":[]}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"redeemRecovery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recovery"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemRecovery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recovery"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recovery"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"session"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"agentId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"loggedOutAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyWebsite"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"loggedIn"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggedIn"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"companyWebsite"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"agentId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"loggedOutAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"loggedOut"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggedOut"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forced"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"changedLocale"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changedLocale"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nativeName"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":2779}};
    doc.loc.source = {"body":"query getAgent {\n    agent {\n        id\n        isMobile\n        isTablet\n        isDesktop\n        locale{\n            id\n            nativeName\n        }\n        remoteSession {\n            id\n            remoteAddress {\n                id\n                type\n                country{\n                    id\n                    name\n                    defaultLocale{\n                        id\n                        nativeName\n                    }\n                }\n            }\n            isDst\n        }\n        session {\n            id\n            user {\n                id\n                firstName\n                lastName\n                fullName\n                email\n                companyName\n                companyWebsite\n            }\n        }\n        timezone {\n            id\n            name\n            gmtOffset\n        }\n    }\n}\n\nquery locales {\n    locales {\n        id\n        nativeName\n    }\n}\n\nmutation setLocale($locale: ID!) {\n    setLocale(\n        locale: $locale\n    ) {\n        id\n        nativeName\n    }\n}\n\nmutation getNonce {\n    nonce {\n        id\n        data\n    }\n}\n\nmutation login($email: String!, $password: String!, $nonce: ID!) {\n    login(\n        email: $email\n        password: $password\n        nonce: $nonce\n    ) {\n        id\n        createdAt\n        user {\n            id\n            firstName\n            lastName\n            fullName\n            email\n            companyName\n            companyWebsite\n        }\n    }\n}\n\nmutation logout {\n    logout\n}\n\nmutation signUp($input: SignUp!) {\n    signUp(\n        input: $input\n    ) {\n        status\n        user{\n            id\n            firstName\n            fullName\n        }\n    }\n}\n\n\nmutation generateRecovery($email: String!, $gre: String!) {\n    generateRecovery(\n        email: $email\n        gre: $gre\n    )\n}\n\nmutation redeemRecovery($recovery: String!, $password: String!) {\n    redeemRecovery(\n        recovery: $recovery\n        password: $password\n    ) {\n        status\n        session\n        {\n            id\n            agentId\n            createdAt\n            loggedOutAt\n            user{\n                id\n                firstName\n                lastName\n                fullName\n                email\n                companyName\n                companyWebsite\n            }\n        }\n    }\n}\n\nsubscription loggedIn {\n    loggedIn {\n        id\n        user {\n            id\n            firstName\n            lastName\n            fullName\n            email\n            companyName\n            companyWebsite\n        }\n        agentId\n        createdAt\n        loggedOutAt\n    }\n}\n\nsubscription loggedOut {\n    loggedOut{\n        forced\n        logout\n    }\n}\n\nsubscription changedLocale {\n    changedLocale{\n        id\n        nativeName\n    }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports.getAgent = oneQuery(doc, "getAgent");
        
        module.exports.locales = oneQuery(doc, "locales");
        
        module.exports.setLocale = oneQuery(doc, "setLocale");
        
        module.exports.getNonce = oneQuery(doc, "getNonce");
        
        module.exports.login = oneQuery(doc, "login");
        
        module.exports.logout = oneQuery(doc, "logout");
        
        module.exports.signUp = oneQuery(doc, "signUp");
        
        module.exports.generateRecovery = oneQuery(doc, "generateRecovery");
        
        module.exports.redeemRecovery = oneQuery(doc, "redeemRecovery");
        
        module.exports.loggedIn = oneQuery(doc, "loggedIn");
        
        module.exports.loggedOut = oneQuery(doc, "loggedOut");
        
        module.exports.changedLocale = oneQuery(doc, "changedLocale");
        


/***/ }),

/***/ 7102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_y": () => (/* reexport */ App_Context),
  "$_": () => (/* reexport */ Footer),
  "JL": () => (/* reexport */ ButtonAppBar),
  "Q2": () => (/* reexport */ App_Theme),
  "ZP": () => (/* binding */ App)
});

// UNUSED EXPORTS: useDebounce

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./components/App/Theme.jsx

const Theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#225D38",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#225D38",
            contrastText: "#ffffff"
        },
        background: {
            main: "#FFFFFF",
            card: "#FFFFFF"
        },
        gray: {
            main: "#404040"
        },
        white: {
            main: "#ffffff"
        },
        text: {
            black: "#323232"
        },
        green: {
            green40: "#DDF391",
            green70: "#8A9C4C",
            green90: "#556228",
            green100: "#3B451A",
            dark: "#225D38"
        },
        logo: {
            main: "#859E3D"
        }
    },
    typography: {
        h1: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "1.375rem",
            lineHeight: "1.625rem"
        },
        h2: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            color: "#202422",
            fontSize: "1.25rem",
            lineHeight: "1.625rem"
        },
        subtitle1: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: "1.375rem"
        },
        subtitle2: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "3.75rem"
        },
        subtitle3: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.375rem"
        },
        body1: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "1.219rem"
        },
        body2: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "1rem",
            lineHeight: "1.219rem"
        },
        button: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.219rem",
            textTransform: "none"
        },
        caption: {
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem"
        }
    },
    zIndex: {
        drawer: 1000
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1167,
            xl: 1920
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "white",
                    overflowX: "hidden"
                },
                "#__next": {
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column"
                }
            }
        },
        MUIRichTextEditor: {
            container: {
                minHeight: "480px"
            },
            inlineToolbar: {
                marginTop: "80px",
                maxWidth: "240px"
            }
        },
        MuiTypography: {
            root: {
                whiteSpace: "pre-wrap"
            }
        }
    }
});
/* harmony default export */ const App_Theme = (Theme);

;// CONCATENATED MODULE: ./components/App/Context.jsx

const Context = /*#__PURE__*/ (0,external_react_.createContext)({
    agent: null,
    session: null,
    timezone: null,
    dictionary: null,
    loading: false,
    setLoading: (value = false)=>{},
    setSession: (session = {})=>{}
});
/* harmony default export */ const App_Context = (Context);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(4116);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(4176);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
// EXTERNAL MODULE: ./components/Queries/session.graphql
var session_graphql = __webpack_require__(3632);
// EXTERNAL MODULE: ./components/Queries/products.graphql
var products_graphql = __webpack_require__(8765);
;// CONCATENATED MODULE: ./components/App/Nav.jsx















const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            backgroundColor: theme.palette.primary.white,
            boxShadow: "0px 0px 20px rgba(0,0,0,0.25)"
        },
        container: {
            width: "100%",
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between"
        },
        error: {
            backgroundColor: "#E35F5F",
            color: theme.palette.white.main,
            textAlign: "center",
            paddingBlock: theme.spacing(1)
        },
        menuBtn: {
            color: theme.palette.green.dark
        },
        searchIcon: {
            color: theme.palette.primary.main
        },
        logo: {
            color: theme.palette.logo.main,
            cursor: "pointer"
        },
        searchInput: {
            borderRadius: 20,
            backgroundColor: "rgba(199,199,199,.2)",
            padding: theme.spacing(2, 3),
            height: 40,
            [theme.breakpoints.up("lg")]: {
                width: 248
            }
        },
        buttonsList: {
            padding: 0,
            [theme.breakpoints.up("lg")]: {
                display: "flex",
                alignItems: "center"
            }
        },
        buttonsItem: {
            color: "rgb(64, 64, 64, 0.9)",
            borderBottom: "1px solid #EDECE9",
            height: 48,
            "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgba(0,0,0,0.2)"
            },
            [theme.breakpoints.up("lg")]: {
                borderBottom: 0,
                whiteSpace: "nowrap",
                "&:hover": {
                    backgroundColor: "#FFF"
                }
            }
        },
        drawer: {
            width: "100%",
            paddingTop: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                paddingTop: theme.spacing(8)
            }
        },
        paper: {
            width: "100%",
            paddingTop: theme.spacing(8)
        },
        modal: {
            position: "fixed",
            zIndex: 3,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        loginButton: {
            backgroundColor: "#E3EEDC",
            borderRadius: 30,
            color: "#225D38",
            padding: theme.spacing(1.8, 2.8),
            textTransform: "none",
            "&:hover": {
                backgroundColor: "#E3EEDC"
            },
            height: "fit-content",
            alignSelf: "center",
            marginLeft: theme.spacing(2)
        },
        userButton: {
            display: "flex",
            borderRadius: 20,
            textTransform: "none",
            "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0)"
            },
            height: "fit-content",
            alignSelf: "center"
        },
        userDisplay: {
            display: "flex",
            alignItems: "center",
            flex: 1
        },
        userAvatar: {
            width: 20,
            height: 20,
            color: theme.palette.gray.main
        },
        userName: {
            marginLeft: "5px",
            flex: 1,
            whiteSpace: "nowrap"
        },
        languageDisplay: {
            border: "1.4px solid #71A850",
            backgroundColor: theme.palette.white.main,
            borderRadius: 30,
            color: "#71A850",
            padding: theme.spacing(0, 2),
            marginLeft: theme.spacing(2)
        },
        languageLabel: {
            flex: 1,
            textAlign: "left",
            textTransform: "uppercase"
        },
        languageMobile: {
            textTransform: "none",
            flex: 1,
            justifyContent: "left"
        },
        upper: {
            textTransform: "uppercase"
        }
    }));
const MOBILEMENUS = {
    NONE: 0,
    OPTIONS: 1,
    USER: 2,
    LANGUAGE: 3
};
function HideOnScroll(props) {
    const { children , window: window1  } = props;
    const trigger = (0,core_.useScrollTrigger)({
        target: window1 ? window1() : undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Slide, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children
    });
}
HideOnScroll.propTypes = {
    children: (external_prop_types_default()).element.isRequired,
    window: (external_prop_types_default()).func
};
function ButtonAppBar(props) {
    const classes = useStyles(), theme = (0,styles_.useTheme)(), isLg = (0,core_.useMediaQuery)(theme.breakpoints.up("lg")), isMd = (0,core_.useMediaQuery)(theme.breakpoints.up("md")), { 0: openMenu , 1: setOpenMenu  } = (0,external_react_.useState)(MOBILEMENUS.NONE), { 0: searchField , 1: setSearchField  } = (0,external_react_.useState)(false), { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)(""), { 0: searchResults , 1: setSearchResults  } = (0,external_react_.useState)([]), { 0: languages , 1: setLanguages  } = (0,external_react_.useState)([]), { session , agent , dictionary  } = (0,external_react_.useContext)(App_Context), router = (0,router_.useRouter)(), apolloClient = (0,client_.useApolloClient)(), { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)(), error = props?.error?.networkError?.statusCode == 502 ? true : false, path = router.pathname, loggedIn = session ? true : false;
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const divRef = (0,external_react_.useRef)();
    const submitSetLanguage = async (localeId)=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.mutate({
                mutation: session_graphql.setLocale,
                variables: {
                    locale: localeId
                }
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.setLocale;
        };
        const response = await submit();
    };
    const submitLogout = async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.mutate({
                mutation: session_graphql.logout
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.logout;
        };
        const response = await submit();
        if (!response) enqueueSnackbar(dictionary.nav.logoutError, {
            variant: "error"
        });
        else {
            router.push("/");
        }
    };
    const getLocales = async ()=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: session_graphql.locales,
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.locales;
        };
        const response = await submit();
        if (!response || response.totalCount === 0) return enqueueSnackbar(dictionary.nav.localesError, {
            variant: "info"
        });
        setLanguages(response);
    };
    const getSearchResults = (0,external_react_.useCallback)(async (value)=>{
        const submit = async ()=>{
            const { errors , data  } = await apolloClient.query({
                query: products_graphql.products,
                variables: {
                    num: 5,
                    filter: {
                        search: value
                    }
                },
                fetchPolicy: "no-cache"
            });
            if (errors) {
                if (errors.length > 0) throw new Error(errors[0].message);
            }
            return data.products;
        };
        try {
            const response = await submit();
            const data = response.edges.map((item)=>item.node);
            setSearchResults(data);
        } catch (error) {
            enqueueSnackbar(error.toString(), {
                variant: "error"
            });
        }
    }, [
        searchQuery
    ]);
    const handleOpenCloseMenu = ()=>{
        if (searchField) {
            setSearchField(false);
        } else {
            setOpenMenu((status)=>status !== MOBILEMENUS.NONE ? MOBILEMENUS.NONE : MOBILEMENUS.OPTIONS);
        }
    };
    const handleStartSearch = ()=>{
        setSearchField((status)=>{
            if (!status && openMenu) {
                setOpenMenu(MOBILEMENUS.NONE);
            }
            return !status;
        });
    };
    const handleSearch = async (event, value)=>{
        setSearchQuery(value);
        if (value) await getSearchResults(value);
        else setSearchResults([]);
    };
    const handleClearSearch = async ()=>{
        setSearchQuery("");
        setSearchResults([]);
    };
    const handleLoginButton = async ()=>{
        if (loggedIn) {
            if (window.confirm(dictionary.nav.logoutMessage)) {
                await submitLogout();
            }
        /*if(isLg){
                //Show menú
            }
            else{
                //Show mobile
            }*/ } else {
            setOpenMenu(MOBILEMENUS.NONE);
            router.push("/login");
        }
    };
    const handleLanguajeButton = ()=>{
        if (isLg) {
            setAnchorEl(divRef.current);
        } else {
            setOpenMenu(MOBILEMENUS.LANGUAGE);
        }
    };
    const handleSelectLanguage = async (language)=>{
        try {
            await submitSetLanguage(language);
            if (isLg) setAnchorEl(null);
            else setOpenMenu(MOBILEMENUS.NONE);
        } catch (error) {
            enqueueSnackbar(error.toString(), {
                variant: "error"
            });
        }
    };
    const handleCloseLanguageDesktop = ()=>{
        setAnchorEl(null);
    };
    (0,external_react_.useEffect)(()=>{
        async function fetchData() {
            try {
                await getLocales();
            } catch (error) {
                enqueueSnackbar(error.toString(), {
                    variant: "error"
                });
            }
        }
        fetchData();
    }, []);
    (0,external_react_.useEffect)(()=>{
        setOpenMenu(MOBILEMENUS.NONE);
        setSearchField(isLg);
    }, [
        isLg
    ]);
    const navButtons = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.List, {
        className: classes.buttonsList,
        children: [
            (isLg || openMenu === MOBILEMENUS.OPTIONS) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                            onClick: ()=>setOpenMenu(MOBILEMENUS.NONE),
                            className: classes.buttonsItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: path == "/" ? "body2" : "body1",
                                children: dictionary.nav.home
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/products",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                            onClick: ()=>setOpenMenu(MOBILEMENUS.NONE),
                            className: classes.buttonsItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: path.substring(0, 9) == "/products" ? "body2" : "body1",
                                children: dictionary.nav.products
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                            onClick: ()=>setOpenMenu(MOBILEMENUS.NONE),
                            className: classes.buttonsItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                variant: path == "/contact" ? "body2" : "body1",
                                children: dictionary.nav.contact
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                        button: true,
                        onClick: handleLoginButton,
                        className: `${classes.buttonsItem} ${isLg ? loggedIn ? classes.userButton : classes.loginButton : ""}`,
                        children: loggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                            className: classes.userDisplay,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                                    className: classes.userAvatar
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                    className: classes.userName,
                                    children: [
                                        session.user.firstName,
                                        " ",
                                        session.user.lastName[0],
                                        "."
                                    ]
                                }),
                                isLg ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.KeyboardArrowDown, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.KeyboardArrowRight, {})
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            variant: path == "/login" ? "body2" : "body1",
                            style: {
                                whiteSpace: "nowrap"
                            },
                            children: dictionary.nav.login
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                        ref: divRef,
                        button: true,
                        onClick: handleLanguajeButton,
                        className: `${classes.buttonsItem} ${isLg ? classes.languageDisplay : classes.languageMobile}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                className: classes.languageLabel,
                                children: agent?.locale?.id || "es"
                            }),
                            isLg ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.KeyboardArrowDown, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.KeyboardArrowRight, {})
                        ]
                    }),
                    isLg && /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu, {
                        anchorEl: anchorEl,
                        keepMounted: true,
                        open: Boolean(anchorEl),
                        onClose: handleCloseLanguageDesktop,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "center"
                        },
                        children: languages.map((language)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.MenuItem, {
                                className: classes.upper,
                                onClick: ()=>handleSelectLanguage(language.id),
                                children: language.id
                            }, language.id))
                    })
                ]
            }),
            openMenu === MOBILEMENUS.LANGUAGE && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: languages.map((language)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                        onClick: ()=>handleSelectLanguage(language.id),
                        className: classes.buttonsItem,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            className: classes.upper,
                            variant: agent.locale.id === language.id ? "body2" : "body1",
                            children: language.id
                        })
                    }, language.id))
            })
        ]
    });
    const appBar = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.AppBar, {
        className: classes.root,
        style: openMenu ? {
            boxShadow: "0"
        } : {},
        color: "inherit",
        elevation: 0,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.error,
                style: {
                    display: error ? "block" : "none"
                },
                children: dictionary.nav.serverError
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Toolbar, {
                className: classes.container,
                style: {
                    zIndex: "3"
                },
                children: [
                    !isLg && /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        onClick: handleOpenCloseMenu,
                        className: classes.menuBtn,
                        children: openMenu ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.Close, {}) : searchField ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.Close, {}) : /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                    }),
                    (isLg || !searchField) && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/svg/jasu-logo.svg",
                            alt: "Jasu",
                            width: "88px",
                            height: "31px",
                            className: classes.logo
                        })
                    }),
                    !isLg && !searchField && /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        onClick: handleStartSearch,
                        className: classes.menuBtn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Search, {})
                    }),
                    (isLg || searchField) && /*#__PURE__*/ jsx_runtime_.jsx(lab_.Autocomplete, {
                        inputValue: searchQuery,
                        onInputChange: handleSearch,
                        freeSolo: true,
                        options: searchResults,
                        getOptionLabel: (item)=>`${item.presentation.name} - ${item.fruitVariety.fullName}`,
                        fullWidth: !isLg,
                        renderInput: (params)=>{
                            const { InputLabelProps , InputProps , ...rest } = params;
                            return /*#__PURE__*/ jsx_runtime_.jsx(core_.InputBase, {
                                ...params.InputProps,
                                ...rest,
                                placeholder: dictionary.nav.search,
                                className: classes.searchInput,
                                endAdornment: searchQuery.length ? /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                    onClick: handleClearSearch,
                                    size: "small",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Close, {
                                        className: classes.searchIcon
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.Search, {
                                    className: classes.searchIcon
                                }),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") {
                                        e.stopPropagation();
                                    }
                                }
                            });
                        },
                        renderOption: (option)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                passHref: true,
                                href: `/products/${option.fruitVariety.id}/${option.presentation.id}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: handleClearSearch,
                                    children: `${option.presentation.name} - ${option.fruitVariety.fullName}`
                                })
                            })
                    }),
                    isLg && navButtons
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.modal,
                onClick: handleOpenCloseMenu,
                style: {
                    display: openMenu ? "block" : "none"
                }
            }),
            !isMd && /*#__PURE__*/ jsx_runtime_.jsx(HideOnScroll, {
                ...props,
                children: appBar
            }),
            isMd && appBar,
            !isLg && /*#__PURE__*/ jsx_runtime_.jsx(core_.Drawer, {
                open: openMenu !== MOBILEMENUS.NONE,
                onClose: ()=>setOpenMenu(MOBILEMENUS.NONE),
                className: classes.drawer,
                classes: {
                    paper: classes.paper
                },
                anchor: "top",
                variant: "persistent",
                children: navButtons
            })
        ]
    });
}

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(2705);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/App/Footer.jsx










const Footer_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            padding: 0
        },
        sectionContact: {
            backgroundColor: "#F4F4F4",
            background: "url(/svg/leaf.svg)"
        },
        contactContent: {
            display: "flex",
            flexDirection: "column-reverse",
            padding: theme.spacing(5, 0),
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row-reverse",
                maxWidth: 1180,
                margin: "0 auto",
                padding: theme.spacing(10, 0)
            }
        },
        sectionCopyright: {
            background: "#71A850"
        },
        logoJasu: {
            width: 161,
            height: 56,
            paddingBottom: theme.spacing(2),
            [theme.breakpoints.up("lg")]: {
                height: 100
            }
        },
        description: {
            color: "#585B59",
            fontWeight: 400,
            fontSize: 14
        },
        cardsDisplay: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row"
            }
        },
        contactCard: {
            alignSelf: "center",
            maxWidth: 340,
            marginBottom: 40,
            [theme.breakpoints.up("lg")]: {
                marginRight: theme.spacing(2)
            }
        },
        contactData: {
            display: "flex",
            paddingBottom: theme.spacing(2),
            fontWeight: "600",
            letterSpacing: "0.05em"
        },
        whiteText: {
            color: theme.palette.white.main,
            letterSpacing: "0.05em"
        },
        logo: {
            marginLeft: theme.spacing(2)
        },
        logosDisplay: {
            textAlign: "center",
            paddingTop: theme.spacing(2),
            [theme.breakpoints.up("lg")]: {
                textAlign: "right"
            }
        },
        copyContent: {
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                maxWidth: 1180,
                margin: "0 auto",
                flexDirection: "row",
                justifyContent: "space-between"
            }
        },
        text: {
            color: (0,core_.alpha)(theme.palette.white.main, .8),
            letterSpacing: "0.05em",
            padding: theme.spacing(.5, 0),
            [theme.breakpoints.up("lg")]: {
                padding: 0
            }
        },
        buttonsItem: {
            color: (0,core_.alpha)(theme.palette.white.main, .8),
            textDecoration: "underline",
            height: 48,
            "&:hover": {
                cursor: "pointer"
            },
            [theme.breakpoints.up("lg")]: {
                borderBottom: 0,
                whiteSpace: "nowrap",
                "&:hover": {}
            }
        }
    }));
function Footer() {
    const classes = Footer_useStyles(), theme = (0,styles_.useTheme)(), isMd = (0,core_.useMediaQuery)(theme.breakpoints.up("md"));
    const { dictionary  } = (0,external_react_.useContext)(App_Context);
    const ContactCard = ({ name , phone , address  })=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
            className: classes.contactCard,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    variant: "subtitle1",
                    className: `${classes.contactData}`,
                    children: name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.contactData,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/svg/phone-icon.svg",
                            alt: "Tel\xe9fono",
                            width: "20",
                            height: "20"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            variant: "body1",
                            style: {
                                paddingLeft: "10px",
                                fontWeight: 400
                            },
                            children: phone
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.contactData,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/svg/address-icon.svg",
                            alt: "Direcci\xf3n",
                            width: "20",
                            height: "20"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            variant: "body1",
                            style: {
                                paddingLeft: "10px",
                                fontWeight: 400
                            },
                            children: address
                        })
                    ]
                })
            ]
        });
    };
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: false,
        component: "footer",
        className: classes.root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.sectionContact,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.contactContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                            className: classes.cardsDisplay,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactCard, {
                                    name: dictionary.footer.USOffice,
                                    phone: "+1 305-699-4113",
                                    address: "2665 S. Bayshore Dr. Suite 220 Miami, FL 33133"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactCard, {
                                    name: dictionary.footer.EUROffice,
                                    phone: "+34 91 076 2755",
                                    address: "Paseo de la Castellana 77 Madrid, Espa\xf1a 28046"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ContactCard, {
                                    name: dictionary.footer.MXOffice,
                                    phone: "+52 55 8526-6118",
                                    address: "Avenida Oaxaca 86-205 CDMX, M\xe9xico 06700"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                            className: classes.contactCard,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/svg/jasu-logo.svg",
                                alt: "Jasu",
                                className: classes.logoJasu
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: classes.sectionCopyright,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                    className: classes.copyContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            className: classes.buttonsItem,
                            onClick: ()=>router.push("/notice"),
                            children: dictionary.nav.notice
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            className: classes.text,
                            children: dictionary.footer.emailUs
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            className: classes.text,
                            children: dictionary.footer.copyright
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/App/index.jsx





const useDebounce = (value, delay)=>{
    const { 0: debouncedValue , 1: setDebouncedValue  } = useState(value);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value
    ]);
    return debouncedValue;
};
/* harmony default export */ const App = ({
    Context: App_Context,
    Theme: App_Theme,
    Nav: ButtonAppBar,
    Footer: Footer
});



/***/ })

};
;