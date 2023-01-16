import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mapi from "lib-pareto-typescript-project/dist/modules/api"


const d = pr.wrapRawDictionary

export const $: mapi.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "moduleDefinition": "../../moduleDefinition",
        }),
        'types': types({
            "AlgorithmImplementation": group({}),
            "Implementation": dictionary(ref("AlgorithmImplementation")),
            "Project": group({
                "type": member(taggedUnion({
                    "resource": nullType(),
                    "glossary": nullType(),
                    "library": nullType(),
                }), true),
                "modules": member(dictionary(group({
                    "definition": member(er("moduleDefinition", "ModuleDefinition")),
                    // "type": member(taggedUnion({
                    //     "binding": nll(),
                    //     "resource": nll(),
                    //     "logic": nll(),

                    // }))
                }))),
                "main": member(str()),
            }),
        }),
        'functions': d({}),
        'interfaces': d({}),
        'callbacks': d({
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
        })
    },
}