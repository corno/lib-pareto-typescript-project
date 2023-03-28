import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as bindings_definition } from "./bindings/moduledefintion.data"
import { $ as main } from "./main/module.data"
import { $ as algorithm_ } from "./submodules/algorithm/module.data"
import { $ as pareto2typescript } from "./submodules/pareto2typescript/module.data"
import { $ as project } from "./submodules/project/module.data"
import { $ as glossary_serialize } from "./submodules/glossary_serialize/module.data"
import { $ as glossary } from "./submodules/glossary/module.data"
import { $ as parameters } from "./submodules/parameters/module.data"
import { $ as parametersparser } from "./submodules/parametersparser/module.data"

const d = pd.d

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
        "res-pareto-collation": null,
        "lib-pareto-filesystem": null,
        "res-pareto-main": null,
        "res-typescript": null,
        "res-pareto-foreach": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "algorithm": algorithm_,
            "glossary": glossary,
            "parameters": parameters,
            "parametersparser": parametersparser,
            "glossary_serialize": glossary_serialize,
            "project": project,
            "pareto2typescript": pareto2typescript,
        }),
        'bindings': [true, {
            'definition': bindings_definition,
            'implementation': ['typescript', null],

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": null,
                "res-typescript": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },

                    },
                    'imports': d({}),
                },
                'api': {
                    'imports': d({}),
                    'root': {
                        'algorithms': d({}),
                    },
                }

            },
            'imports': d({}),
        },

    }],
}