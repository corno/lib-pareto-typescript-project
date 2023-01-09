import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-raw"

import * as tst from "lib-pareto-test"

import * as api from "../../interface"
// import * as us from "res-pareto-ugly-stuff"

import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
} from "../../../../pub/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "../../../../pub/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "../../../../pub/dist/modules/api/api/shorthands.p"
import * as NProject from "../../../../pub/dist/modules/project"
const wd = pr.wrapRawDictionary


import * as pub from "../../../../pub"
// import * as pubTypes from "../../../../pub/dist/modules/public"
// import * as pubPrivate from "../../../../pub/dist/modules/private"

export const createGetTestset: api.FCreateGetTestset = ($, $f) => {

    return ($) => {
        pl.logDebugMessage(`HIERO: ${$.testDirectory}`)
        pub.$a.generateProject({
            'mainData': {
                'arguments': pr.wrapRawArray(["FOOOOOOOOOOOOOO"]),
            },
            'project': {
                'type': ["glossary", null],
                'modules': wd({
                    "main": {
                        'definition': {
                            "glossary": {
                                'imports': wd({
                                    "common": "glo-pareto-common"
                                }),
                                'types': types({
                                    "Configuration": group({
                                        "indentation": member(str()),
                                        "newline": member(str()),
                                    })
                                    // "Path": nested(str()),
                                    // "String": str(),
                                    // "Number": nr(),
                                    // "Boolean": bln(),
                                }),
                                'functions': wd({}),
                                // 'interfaces': wd({

                                // }),
                                'interfaces': wd({
                                    "Block": ['group', {
                                        'members': wd({
                                            "line": ['method', {
                                                'data': ['null', null],
                                                'interface': ['set', {
                                                    'interface': "Line"
                                                }]
                                            }],
                                            "literal": ['method', {
                                                'data': ['type', string()],
                                                'interface': ['null', null]
                                            }],
                                        })
                                    }],
                                    "CreateWriteStream": ['method', {
                                        'data': ['type', externalReference("common", "Path")],
                                        'interface': ['set', {
                                            'interface': "WriteString"
                                        }]
                                    }],
                                    "CreateWriter": ['method', {
                                        'data': ['type', externalReference("common", "Path")],
                                        'interface': ['set', {
                                            'interface': "Writer"
                                        }]
                                    }],
                                    "Line": ['group', {
                                        'members': wd({
                                            "indent": ['method', {
                                                'data': ['null', null],
                                                'interface': ['set', {
                                                    'interface': "Block"
                                                }]
                                            }],
                                            "snippet": ['method', {
                                                'data': ['type', string()],
                                                'interface': ['null', null]
                                            }],
                                        })
                                    }],
                                    "Writer": ['group', {
                                        'members': wd({
                                            "createFile": ['method', {
                                                'data': ['type', string()],
                                                'interface': ['set', {
                                                    'interface': "Block"
                                                }]
                                            }],
                                            "createDirectory": ['method', {
                                                'data': ['type', string()],
                                                'interface': ['set', {
                                                    'interface': "Writer"
                                                }]
                                            }],
                                        })
                                    }],
                                    "WriteString": ['method', {
                                        'data': ['type', string()],
                                        'interface': ['null', null]

                                    }],
                                }),
                                'callbacks': wd({

                                    "XXXSerializeGlossary": {
                                        'data': ['type', reference("Glossary")],
                                        'context': ['import', "fp"],
                                        'interface': "Block",
                                    },
                                }),
                                'pipes': wd({
                                    "FountainPen": {
                                        'in': {
                                            'interface': "XXX",
                                        },
                                        'out': {
                                            'interface': "XXX",
                                        }
                                    }
                                }),
                            },
                            "api": {
                                'imports': wd({}),
                                'algorithms': wd({})
                            },
                        },
                        'implementation': {}

                    },
                }),
                'main': "main"
            }
        })
        // pub.$a.createTestProgram(null, {
        //     getTestSet: () => {
        //         pl.panic("@@@")
        //     },
        //     log: () => {

        //     },
        //     logError: () => {

        //     },
        //     onTestErrors: () => {

        //     },
        // })

        // pub.$b.createTestProgram(
        //     {
        //         getTestSet: ($) => {
        //             return pl.asyncValue({
        //                 elements: pr.wrapRawDictionary({})
        //             })
        //         },
        //         log: ($) => {
        //             pl.logDebugMessage($)
        //         }
        //     }
        // )(
        //     pr.wrapRawArray(["foo"])
        // )

        const builder = pm.createUnsafeDictionaryBuilder<tst.TTestElement>()
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ['test', {
                    type: ['short string', {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }


        //test that a failing test indeed fails!!! now it will make the program exit with an error code
        pl.logDebugMessage("FIXME: TEST THE LIB")
        createTest(
            "TODO: ACTUALLY TEST THE LIB",
            "TODO: ACTUALLY TEST THE LIB",
            "TODO: ACTUALLY TEST THE LIB",
        )

        return pl.asyncValue(null).map(() => {
            return pl.asyncValue({
                elements: builder.getDictionary()
            })
        })
    }
}
