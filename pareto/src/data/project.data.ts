import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as d_bindings } from "./bindings/moduledefintion.data"
import { $ as d_main } from "./main/module.data"
import { $ as d_algorithm } from "./submodules/algorithm/module.data"
import { $ as d_pareto2typescript } from "./submodules/pareto2typescript/module.data"
import { $ as d_project } from "./submodules/project/module.data"

import { $ as d_glossary_serialize } from "./submodules/glossary_serialize/module.data"
import { $ as d_glossary } from "./submodules/glossary/module.data"
import { $ as d_glossary_resolve } from "./submodules/glossary_resolve/module.data"
import { $ as d_glossary_possiblyresolved } from "./submodules/glossary_possiblyresolved/module.data"

import { $ as d_parameters } from "./submodules/parameters/module.data"
import { $ as d_parametersparser } from "./submodules/parametersparser/module.data"

import { $ as d_lowlevel_typesystem } from "./submodules/lowlevel_typesystem/module.data"
import { $ as d_lowlevel_typesystem_possiblyresolved } from "./submodules/lowlevel_typesystem_possiblyresolved/module.data"
import { $ as d_lowlevel_typesystem_resolve } from "./submodules/lowlevel_typesystem_resolve/module.data"

import { $ as d_lowlevel_implementation } from "./submodules/lowlevel_implementation/module.data"
import { $ as d_lowlevel_implementation_possiblyresolved } from "./submodules/lowlevel_implementation_possiblyresolved/module.data"
import { $ as d_lowlevel_implementation_resolve } from "./submodules/lowlevel_implementation_resolve/module.data"



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
        "res-pareto-array": null,
        "res-pareto-main": null,
        "res-typescript": null,
        "res-pareto-foreach": null,
    }),
    'type': ['library', {
        'main': d_main,
        'submodules': d({
            "algorithm": d_algorithm,
            "glossary_serialize": d_glossary_serialize,
            "glossary": d_glossary,
            "glossary_possiblyresolved": d_glossary_possiblyresolved,
            "glossary_resolve": d_glossary_resolve,

            "lowlevel_typesystem": d_lowlevel_typesystem,
            "lowlevel_typesystem_resolve": d_lowlevel_typesystem_resolve,
            "lowlevel_typesystem_possiblyresolved": d_lowlevel_typesystem_possiblyresolved,
            "lowlevel_implementation": d_lowlevel_implementation,
            "lowlevel_implementation_resolve": d_lowlevel_implementation_resolve,
            "lowlevel_implementation_possiblyresolved": d_lowlevel_implementation_possiblyresolved,
            "parameters": d_parameters,
            "parametersparser": d_parametersparser,
            "pareto2typescript": d_pareto2typescript,
            "project": d_project,
        }),
        'bindings': [true, {
            'definition': d_bindings,
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
                        'imports': d({}),

                            'glossary parameters': d({}),
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