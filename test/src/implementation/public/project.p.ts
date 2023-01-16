import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    null_,
    string as str,
    reference,
    reference as ref,
    typeReference,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group, externalTypeReference
} from "../../../../pub/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "../../../../pub/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'namespace': {
            'templates': d({
                "AnnotatedError": {
                    'parameters': d({
                        "Error": null,
                    }),
                    'type': grp({
                        "path": member(str()),
                        "error": member(['parameter', "Error"])
                    }),
                },
                "Result": {
                    'parameters': d({
                        "Error": null,
                        "Success": null,
                    }),
                    'type': taggedUnion({
                        "error": ['parameter', "Error"],
                        "success": ['parameter', "Success"],
                    }),
                },
            }),
            'types': types({
                "AnnotatedReadDirError": template("AnnotatedError", {
                    "Error": ref("ReadDirError"),
                }),
                "AnnotatedReadFileError": template("AnnotatedError", {
                    "Error": ref("ReadFileError"),
                }),
                "AnnotatedMkdirError": template("AnnotatedError", {
                    "Error": ref("MkdirError"),
                }),
                "AnnotatedUnlinkError": template("AnnotatedError", {
                    "Error": ref("UnlinkError"),
                }),
                "AnnotatedWriteFileError": template("AnnotatedError", {
                    "Error": ref("WriteFileError"),
                }),
                "CreateWriteStreamData": group({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
                }),
                // "AnnotatedReadFileError": group({
                //     "path": member(str()),
                //     "error": member(taggedUnion({
                //         "no entity": null_(),
                //         "is directory": null_(),
                //         "unknown": type(group({
                //             "message": member(str())
                //         })),
                //     }))
                // }),
                "DirNodeData": grp({
                    "path": member(str()),
                    "type": member(taggedUnion({
                        "directory": null_(),
                        "file": null_(),
                        "unknown": null_(),
                    })),
                }),
                "MkdirError": taggedUnion({
                    "no entity": null_(),
                    "exists": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "Mkdir_Data": grp({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
                }),
                "Mkdir_Result": template("Result", {
                    "Error": ref("AnnotatedMkdirError"),
                    "Success": null_(),
                }),
                "ReadDirectory_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "ReadDirectory_Result": template("Result", {
                    "Error": ref("AnnotatedReadDirError"),
                    "Success": dictionary(ref("DirNodeData")),
                }),

                "ReadDirectory_Success": grp({}),
                "ReadDirError": taggedUnion({
                    "no entity": null_(),
                    "is not directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "ReadFile_Data": template("Result", {
                    "Error": ref("AnnotatedReadFileError"),
                    "Success": str(),
                }),

                "ReadFile_Result": grp({}),
                "ReadFileError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "RmdirError": taggedUnion({
                    "no entity": null_(),
                    "not empty": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "UnlinkError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "Unlink_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "Unlink_Result": template("Result", {
                    "Error": ref("AnnotatedUnlinkError"),
                    "Success": null_(),
                }),

                "WriteFile_Result": template("Result", {
                    "Error": ref("AnnotatedWriteFileError"),
                    "Success": null_(),
                }),

                "WriteFileData": grp({
                    "path": member(er("common", "Path")),
                    "data": member(str()),
                    "createContainingDirectories": member(bln()),
                }),
                "WriteFileError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
            }),
            'interfaces': d({
                "WriteString": ['method', {
                    'data': externalTypeReference("common", "String"),
                    'interface': ['null', null]

                }],
                "CreateWriteStream": ['method', {
                    'data': typeReference("CreateWriteStreamData"),
                    'interface': ['set', {
                        'interface': "WriteString"
                    }]
                }],
                "StreamConsumer": ['group', {
                    'members': d({
                        "onData": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['null', null],
                        }],
                        "onEnd": ['method', {
                            'data': null,
                            'interface': ['null', null],
                        }],
                    }),
                }],
                "Reader": ['group', {
                    'members': d({
                        "init": ['method', {
                            'data': null,
                            'interface': ['set', {
                                'interface': "StreamConsumer"
                            }],
                        }],
                        "onError": ['method', {
                            'data': typeReference("AnnotatedReadFileError"),
                            'interface': ['null', null],
                        }],
                    })
                }]
            }),

        },
        'functions': d({
            "MakeDirectory": _function(typeReference("Mkdir_Data"), typeReference("Mkdir_Result"), true),
            "ReadDirectory": _function(typeReference("ReadDirectory_Data"), typeReference("ReadDirectory_Result"), true),
            "Unlink": _function(typeReference("Unlink_Data"), typeReference("Unlink_Result"), true),
        }),
        'callbacks': d({
            "GetFile": {
                'data': externalTypeReference("common", "Path"),
                'interface': "Reader"
            }
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "createWriteStream": {
                'definition': ['interface', {
                    'interface': "CreateWriteStream"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    // 'configuration data': ['type', group({
                    //     'context path': member(er("common", "Path")),
                    // })],
                    'dependencies': d({
                        "onError": ['procedure', typeReference("AnnotatedWriteFileError")],
                    }),
                }]
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
}