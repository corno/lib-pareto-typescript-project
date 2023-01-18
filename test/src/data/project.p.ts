// import * as pr from 'pareto-core-raw'
// import {
//     externalReference as er,
//     null_,
//     string as str,
//     reference,
//     reference as ref,
//     typeReference,
//     boolean as bln,
//     number as nr,
//     nested,
//     template,
//     dictionary, group as grp, member, taggedUnion, types, _function, group, externalTypeReference
// } from "../../../../pub/dist/modules/glossary/api/shorthands.p"

// import * as mproject from "../../../../pub/dist/modules/project"

// import * as mglossary from "../../../../pub/dist/modules/glossary"

// type GRP = {
//     type: mglossary.TType
//     optional?: boolean
// }

// const d = pr.wrapRawDictionary
// const a = pr.wrapRawArray

// export const $: mproject.TModule = {
//     'definition': {
//         'glossary': {
//             'imports': d({
//                 "fp": "lib-fountain-pen",
//             }),
//             'parameters': d({
//                 "Annotation": null,
//             }),
//             'namespace': {
//                 'namespaces': d({
//                     "resolved": {
//                         'namespaces': d({
//                             "types": {
//                                 'namespaces': d({}),
//                                 'templates': d({}),
//                                 'types': d({
//                                     "Context": <mglossary.TType>['taggedUnion', d({
//                                         "import": <mglossary.TType>['group', d({})],
//                                         "local": <mglossary.TType>['group', d({})],
//                                     })],
//                                     "Glossary": <mglossary.TType>['group', d({
//                                         "callbacks": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "context": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Context",
//                                                     }],
//                                                 },
//                                                 "data": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "OptionalTypeReference",
//                                                     }],
//                                                 },
//                                                 "interface": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['template', {
//                                                         'arguments': d({
//                                                             "RererencedType": <mglossary.TType>['reference', {
//                                                                 'context': <mglossary.TContext>['local', null],
//                                                                 'namespaces': a([]),
//                                                                 'type': "Interface",
//                                                             }],
//                                                         }),
//                                                         'template': "Reference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "functions": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "async": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['boolean', null],
//                                                 },
//                                                 "data": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "TypeReference",
//                                                     }],
//                                                 },
//                                                 "return value": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "TypeReference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "imports": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                         },
//                                         "namespace": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Namespace",
//                                             }],
//                                         },
//                                         "parameters": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                         },
//                                         "pipes": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "in": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "InterfaceReference",
//                                                     }],
//                                                 },
//                                                 "out": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "InterfaceReference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                     })],
//                                     "Interface": <mglossary.TType>['group', d({
//                                         "group": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['group', d({
//                                                 "members": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Interface",
//                                                     }]],
//                                                 },
//                                             })],
//                                         },
//                                         "method": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['group', d({
//                                                 "data": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "OptionalTypeReference",
//                                                     }],
//                                                 },
//                                                 "interface": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['taggedUnion', d({
//                                                         "null": <mglossary.TType>['group', d({})],
//                                                         "set": <mglossary.TType>['group', d({
//                                                             "interface": {
//                                                                 'optional': false,
//                                                                 'type': <mglossary.TType>['template', {
//                                                                     'arguments': d({
//                                                                         "RererencedType": <mglossary.TType>['reference', {
//                                                                             'context': <mglossary.TContext>['local', null],
//                                                                             'namespaces': a([]),
//                                                                             'type': "Interface",
//                                                                         }],
//                                                                     }),
//                                                                     'template': "Reference",
//                                                                 }],
//                                                             },
//                                                         })],
//                                                     })],
//                                                 },
//                                             })],
//                                         },
//                                         "reference": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "InterfaceReference",
//                                             }],
//                                         },
//                                     })],
//                                     "InterfaceReference": <mglossary.TType>['group', d({
//                                         "context": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Context",
//                                             }],
//                                         },
//                                         "interface": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Interface",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }],
//                                         },
//                                     })],
//                                     "Namespace": <mglossary.TType>['group', d({
//                                         "interfaces": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Interface",
//                                             }]],
//                                         },
//                                         "namespaces": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Namespace",
//                                             }]],
//                                         },
//                                         "templates": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "parameters": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                                 },
//                                                 "type": {
//                                                     'optional': false,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Type",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "types": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Type",
//                                             }]],
//                                         },
//                                     })],
//                                     "OptionalTypeReference": <mglossary.TType>['taggedUnion', d({
//                                         "not set": <mglossary.TType>['group', d({})],
//                                         "set": <mglossary.TType>['reference', {
//                                             'context': <mglossary.TContext>['local', null],
//                                             'namespaces': a([]),
//                                             'type': "TypeReference",
//                                         }],
//                                     })],
//                                     "Type": <mglossary.TType>['group', d({})],
//                                     "TypeReference": <mglossary.TType>['group', d({
//                                         "context": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Context",
//                                             }],
//                                         },
//                                         "namespaces": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['array', <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Namespace",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }]],
//                                         },
//                                         "type": {
//                                             'optional': false,
//                                             'type': <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Type",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }],
//                                         },
//                                     })],
//                                 }),
//                                 'interfaces': d({}),
//                             },
//                         }),
//                         'templates': d({}),
//                         'types': d({
//                             "Root": <mglossary.TType>['reference', {
//                                 'context': <mglossary.TContext>['local', null],
//                                 'namespaces': a(["types"]),
//                                 'type': "Glossary",
//                             }],
//                         }),
//                         'interfaces': d({}),
//                     },
//                     "unresolved": {
//                         'namespaces': d({
//                             "types": {
//                                 'namespaces': d({}),
//                                 'templates': d({}),
//                                 'types': d({
//                                     "Context": <mglossary.TType>['taggedUnion', d({
//                                         "import": <mglossary.TType>['group', d({})],
//                                         "local": <mglossary.TType>['group', d({})],
//                                     })],
//                                     "Glossary": <mglossary.TType>['group', d({
//                                         "callbacks": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "context": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Context",
//                                                     }],
//                                                 },
//                                                 "data": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "OptionalTypeReference",
//                                                     }],
//                                                 },
//                                                 "interface": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['template', {
//                                                         'arguments': d({
//                                                             "RererencedType": <mglossary.TType>['reference', {
//                                                                 'context': <mglossary.TContext>['local', null],
//                                                                 'namespaces': a([]),
//                                                                 'type': "Interface",
//                                                             }],
//                                                         }),
//                                                         'template': "Reference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "functions": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "async": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['boolean', null],
//                                                 },
//                                                 "data": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "TypeReference",
//                                                     }],
//                                                 },
//                                                 "return value": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "TypeReference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "imports": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                         },
//                                         "namespace": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Namespace",
//                                             }],
//                                         },
//                                         "parameters": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                         },
//                                         "pipes": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "in": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "InterfaceReference",
//                                                     }],
//                                                 },
//                                                 "out": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "InterfaceReference",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                     })],
//                                     "Interface": <mglossary.TType>['group', d({
//                                         "group": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['group', d({
//                                                 "members": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Interface",
//                                                     }]],
//                                                 },
//                                             })],
//                                         },
//                                         "method": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['group', d({
//                                                 "data": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "OptionalTypeReference",
//                                                     }],
//                                                 },
//                                                 "interface": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['taggedUnion', d({
//                                                         "null": <mglossary.TType>['group', d({})],
//                                                         "set": <mglossary.TType>['group', d({
//                                                             "interface": {
//                                                                 'optional': true,
//                                                                 'type': <mglossary.TType>['template', {
//                                                                     'arguments': d({
//                                                                         "RererencedType": <mglossary.TType>['reference', {
//                                                                             'context': <mglossary.TContext>['local', null],
//                                                                             'namespaces': a([]),
//                                                                             'type': "Interface",
//                                                                         }],
//                                                                     }),
//                                                                     'template': "Reference",
//                                                                 }],
//                                                             },
//                                                         })],
//                                                     })],
//                                                 },
//                                             })],
//                                         },
//                                         "reference": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "InterfaceReference",
//                                             }],
//                                         },
//                                     })],
//                                     "InterfaceReference": <mglossary.TType>['group', d({
//                                         "context": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Context",
//                                             }],
//                                         },
//                                         "interface": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Interface",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }],
//                                         },
//                                     })],
//                                     "Namespace": <mglossary.TType>['group', d({
//                                         "interfaces": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Interface",
//                                             }]],
//                                         },
//                                         "namespaces": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Namespace",
//                                             }]],
//                                         },
//                                         "templates": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
//                                                 "parameters": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
//                                                 },
//                                                 "type": {
//                                                     'optional': true,
//                                                     'type': <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Type",
//                                                     }],
//                                                 },
//                                             })]],
//                                         },
//                                         "types": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Type",
//                                             }]],
//                                         },
//                                     })],
//                                     "OptionalTypeReference": <mglossary.TType>['taggedUnion', d({
//                                         "not set": <mglossary.TType>['group', d({})],
//                                         "set": <mglossary.TType>['reference', {
//                                             'context': <mglossary.TContext>['local', null],
//                                             'namespaces': a([]),
//                                             'type': "TypeReference",
//                                         }],
//                                     })],
//                                     "Type": <mglossary.TType>['group', d({})],
//                                     "TypeReference": <mglossary.TType>['group', d({
//                                         "context": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['reference', {
//                                                 'context': <mglossary.TContext>['local', null],
//                                                 'namespaces': a([]),
//                                                 'type': "Context",
//                                             }],
//                                         },
//                                         "namespaces": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['array', <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Namespace",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }]],
//                                         },
//                                         "type": {
//                                             'optional': true,
//                                             'type': <mglossary.TType>['template', {
//                                                 'arguments': d({
//                                                     "RererencedType": <mglossary.TType>['reference', {
//                                                         'context': <mglossary.TContext>['local', null],
//                                                         'namespaces': a([]),
//                                                         'type': "Type",
//                                                     }],
//                                                 }),
//                                                 'template': "Reference",
//                                             }],
//                                         },
//                                     })],
//                                 }),
//                                 'interfaces': d({}),
//                             },
//                         }),
//                         'templates': d({}),
//                         'types': d({
//                             "Root": <mglossary.TType>['reference', {
//                                 'context': <mglossary.TContext>['local', null],
//                                 'namespaces': a(["types"]),
//                                 'type': "Glossary",
//                             }],
//                         }),
//                         'interfaces': d({}),
//                     },
//                 }),
//                 'templates': d({
//                     "Reference": {
//                         'parameters': d({
//                             "ReferencedType": null,
//                         }),
//                         'type': <mglossary.TType>['group', d({
//                             "annotation": {
//                                 'optional': true,
//                                 'type': <mglossary.TType>['parameter', "Annotation"],
//                             },
//                             "referenced": {
//                                 'optional': true,
//                                 'type': <mglossary.TType>['parameter', "ReferencedType"],
//                             },
//                             "value": {
//                                 'type': <mglossary.TType>['string', null],
//                             },
//                         })],
//                     },
//                 }),
//                 'types': d({}),
//                 'interfaces': d({}),
//             },
//             'functions': d({}),
//             'callbacks': d({
//                 "Serialize": {
//                     'data': {
//                         'context': <mglossary.TContext>['local', null],
//                         'namespaces': a([]),
//                         'type': "Root",
//                     },
//                     'context': <mglossary.TContext>['import', "fp"],
//                     'interface': "Line",
//                 },
//             }),
//             'pipes': d({}),
//         },
//         'api': {
//             'imports': d({
//                 'common': "glo-pareto-common"
//             }),
//             'algorithms': d({
//                 'createSerializer': {
//                     'definition': ['callback', {
//                         'callback': "Serialize",
//                     }],
//                     'type': ['constructor', {
//                         'configuration data': {
//                             'context': ['import', "common"],
//                             'namespaces': a([]),
//                             'type': "Null",
//                         },
//                         'dependencies': d({}),
//                     }],
//                 },
//             }),
//         },
//     },
//     'implementation': {
//         'implementations': d({
//             "createSerializer": {
//                 'constructor': true,
//                 'type': ['function', {
//                     'block': {
//                         'innerFunctions': d({
//                             "Context": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['switch', {
//                                         'cases': d({
//                                             "import": {
//                                                 'innerFunctions': d({}),
//                                                 'returnExpression': ['groupInitializer', {
//                                                     'properties': d({})
//                                                 }],
//                                             },
//                                             "local": {
//                                                 'innerFunctions': d({}),
//                                                 'returnExpression': ['groupInitializer', {
//                                                     'properties': d({})
//                                                 }],
//                                             },
//                                         })
//                                     }],
//                                 },
//                             },
//                             "Glossary": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({
//                                             "callbacks": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({
//                                                             "context": ['call', {
//                                                                 'function': "Context",
//                                                             }],
//                                                             "data": ['call', {
//                                                                 'function': "OptionalTypeReference",
//                                                             }],
//                                                             "interface": ['implementMe', "liana2Pareto"],
//                                                         })
//                                                     }],
//                                                 },
//                                             }],
//                                             "functions": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({
//                                                             "async": ['implementMe', "liana2Pareto"],
//                                                             "data": ['call', {
//                                                                 'function': "TypeReference",
//                                                             }],
//                                                             "return value": ['call', {
//                                                                 'function': "TypeReference",
//                                                             }],
//                                                         })
//                                                     }],
//                                                 },
//                                             }],
//                                             "imports": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({})
//                                                     }],
//                                                 },
//                                             }],
//                                             "namespace": ['call', {
//                                                 'function': "Namespace",
//                                             }],
//                                             "parameters": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({})
//                                                     }],
//                                                 },
//                                             }],
//                                             "pipes": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({
//                                                             "in": ['call', {
//                                                                 'function': "InterfaceReference",
//                                                             }],
//                                                             "out": ['call', {
//                                                                 'function': "InterfaceReference",
//                                                             }],
//                                                         })
//                                                     }],
//                                                 },
//                                             }],
//                                         })
//                                     }],
//                                 },
//                             },
//                             "Interface": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({
//                                             "group": ['groupInitializer', {
//                                                 'properties': d({
//                                                     "members": ['mapDictionary', {
//                                                         'block': {
//                                                             'innerFunctions': d({}),
//                                                             'returnExpression': ['call', {
//                                                                 'function': "Interface",
//                                                             }],
//                                                         },
//                                                     }],
//                                                 })
//                                             }],
//                                             "method": ['groupInitializer', {
//                                                 'properties': d({
//                                                     "data": ['call', {
//                                                         'function': "OptionalTypeReference",
//                                                     }],
//                                                     "interface": ['switch', {
//                                                         'cases': d({
//                                                             "null": {
//                                                                 'innerFunctions': d({}),
//                                                                 'returnExpression': ['groupInitializer', {
//                                                                     'properties': d({})
//                                                                 }],
//                                                             },
//                                                             "set": {
//                                                                 'innerFunctions': d({}),
//                                                                 'returnExpression': ['groupInitializer', {
//                                                                     'properties': d({
//                                                                         "interface": ['implementMe', "liana2Pareto"],
//                                                                     })
//                                                                 }],
//                                                             },
//                                                         })
//                                                     }],
//                                                 })
//                                             }],
//                                             "reference": ['call', {
//                                                 'function': "InterfaceReference",
//                                             }],
//                                         })
//                                     }],
//                                 },
//                             },
//                             "InterfaceReference": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({
//                                             "context": ['call', {
//                                                 'function': "Context",
//                                             }],
//                                             "interface": ['implementMe', "liana2Pareto"],
//                                         })
//                                     }],
//                                 },
//                             },
//                             "Namespace": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({
//                                             "interfaces": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['call', {
//                                                         'function': "Interface",
//                                                     }],
//                                                 },
//                                             }],
//                                             "namespaces": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['call', {
//                                                         'function': "Namespace",
//                                                     }],
//                                                 },
//                                             }],
//                                             "templates": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['groupInitializer', {
//                                                         'properties': d({
//                                                             "parameters": ['mapDictionary', {
//                                                                 'block': {
//                                                                     'innerFunctions': d({}),
//                                                                     'returnExpression': ['groupInitializer', {
//                                                                         'properties': d({})
//                                                                     }],
//                                                                 },
//                                                             }],
//                                                             "type": ['call', {
//                                                                 'function': "Type",
//                                                             }],
//                                                         })
//                                                     }],
//                                                 },
//                                             }],
//                                             "types": ['mapDictionary', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['call', {
//                                                         'function': "Type",
//                                                     }],
//                                                 },
//                                             }],
//                                         })
//                                     }],
//                                 },
//                             },
//                             "OptionalTypeReference": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['switch', {
//                                         'cases': d({
//                                             "not set": {
//                                                 'innerFunctions': d({}),
//                                                 'returnExpression': ['groupInitializer', {
//                                                     'properties': d({})
//                                                 }],
//                                             },
//                                             "set": {
//                                                 'innerFunctions': d({}),
//                                                 'returnExpression': ['call', {
//                                                     'function': "TypeReference",
//                                                 }],
//                                             },
//                                         })
//                                     }],
//                                 },
//                             },
//                             "Type": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({})
//                                     }],
//                                 },
//                             },
//                             "TypeReference": {
//                                 'block': {
//                                     'innerFunctions': d({}),
//                                     'returnExpression': ['groupInitializer', {
//                                         'properties': d({
//                                             "context": ['call', {
//                                                 'function': "Context",
//                                             }],
//                                             "namespaces": ['mapArray', {
//                                                 'block': {
//                                                     'innerFunctions': d({}),
//                                                     'returnExpression': ['implementMe', "liana2Pareto"],
//                                                 },
//                                             }],
//                                             "type": ['implementMe', "liana2Pareto"],
//                                         })
//                                     }],
//                                 },
//                             },
//                         }),
//                         'returnExpression': ['switch', {
//                             'cases': d({})
//                         }],
//                     },
//                 }],
//             },
//         }),
//     },
// }