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
                                    "AnnotatedReadFileError": group({
                                        "path": member(str()),
                                        "error": member(taggedUnion({
                                            "no entity": nullType(),
                                            "is directory": nullType(),
                                            "unknown": type(group({
                                                "message": member(str())
                                            })),
                                        }))
                                    }),
                                    "Mkdir_Data": group({
                                        // readonly path: TPath
                                        // readonly createContainingDirectories: boolean
                                    }),
                                    "Mkdir_Result": taggedUnion({
                                        "error": type(group({
                                            "path": member(str()),
                                        //     "error": member(taggedUnion({

                                        //                               // | ["no entity", null]
                                        // // | ["exists", null]
                                        // // //| ["is directory", null]
                                        // // | ["unknown", {
                                        // //     readonly "message": string
                                        // // }]
                                        //     }))
                                        })),
                                        // | ["error", Error]
                                        // | ["success", Success]

                                        // export type TMkdirError =
                                        // | ["no entity", null]
                                        // | ["exists", null]
                                        // //| ["is directory", null]
                                        // | ["unknown", {
                                        //     readonly "message": string
                                        // }]

                                    }),
                                    "ReadDirectory_Data": group({

                                    }),
                                    "ReadDirectory_Result": group({

                                    }),
                                    "Unlink_Data": group({

                                    }),
                                    "Unlink_Result": group({

                                    }),
                                }),
                                'functions': wd({
                                    "MakeDirectory": _function(reference("Mkdir_Data"), reference("Mkdir_Result"), true),
                                    "ReadDirectory": _function(reference("ReadDirectory_Data"), reference("ReadDirectory_Result"), true),
                                    "Unlink": _function(reference("Unlink_Data"), reference("Unlink_Result"), true),
                                }),
                                'interfaces': wd({
                                    "StreamConsumer": ['group', {
                                        'members': wd({
                                            "onData": ['method', {
                                                'data': ['type', string()],
                                                'interface': ['null', null],
                                            }],
                                            "onEnd": ['method', {
                                                'data': ['null', null],
                                                'interface': ['null', null],
                                            }],
                                        }),
                                    }],
                                    "Reader": ['group', {
                                        'members': wd({
                                            "init": ['method', {
                                                'data': ['null', null],
                                                'interface': ['set', {
                                                    'interface': "StreamConsumer"
                                                }],
                                            }],
                                            "onError": ['method', {
                                                'data': ['type', reference("AnnotatedReadFileError")],
                                                'interface': ['null', null],
                                            }],
                                        })
                                    }]
                                }),
                                'callbacks': wd({
                                    "GetFile": {
                                        'data': ['type', externalReference("common", "Path")],
                                        'interface': "Reader"
                                    }
                                }),
                                'pipes': wd({
                                }),
                            },
                            "api": {
                                'imports': wd({
                                }),
                                'algorithms': wd({
                                    "createWriteStream": {
                                        'definition': ['callback', {
                                            'callback': "GetFile"
                                        }],
                                        'type': ['reference', null]
                                    },
                                    "getFile": {
                                        'definition': ['callback', {
                                            'callback': "GetFile"
                                        }],
                                        'type': ['reference', null]
                                    },
                                    "makeDirectory": {
                                        'definition': ['function', {
                                            'function': "MakeDirectory",
                                            'async': true,
                                        }],
                                        'type': ['reference', null]
                                    },
                                    "readDirectory": {
                                        'definition': ['function', {
                                            'function': "ReadDirectory",
                                            'async': true,
                                        }],
                                        'type': ['reference', null]
                                    },
                                    "unlink": {
                                        'definition': ['function', {
                                            'function': "Unlink",
                                            'async': true,
                                        }],
                                        'type': ['reference', null]
                                    }
                                })
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
