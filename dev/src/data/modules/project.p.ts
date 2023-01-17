import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "moduleDefinition": "../../moduleDefinition",
        }),
        'namespace': {
            'types': types({
                "AlgorithmImplementation": group({}),
                "Implementation": dictionary(ref("AlgorithmImplementation")),
                "Project": group({
                    "type": member(taggedUnion({
                        "resource": null_(),
                        "glossary": null_(),
                        "library": null_(),
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
            'interfaces': d({}),

        },
        'functions': d({}),
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