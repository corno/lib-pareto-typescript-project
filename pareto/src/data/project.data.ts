import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as main } from "./main/module.data"
import { $ as algorithm_ } from "./submodules/algorithm/module.data"
import { $ as pareto2typescript } from "./submodules/pareto2typescript/module.data"
import { $ as project } from "./submodules/project/module.data"
import { $ as glossary_serialize } from "./submodules/glossary_serialize/module.data"
import { $ as glossary } from "./submodules/glossary/module.data"
import { algorithm, bldrRef, external, functionReference, submodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
        "res-pareto-collation": null,
        "res-pareto-dictionary": null,
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
            "glossary_serialize": glossary_serialize,
            "project": project,
            "pareto2typescript": pareto2typescript,
        }),
        'bindings': [true, {
            'api': {
                'root': {
                    'algorithms': d({
                        "generateProject": algorithm(bldrRef("this", {}, "GenerateProject")),
                    })
                },
                'imports': d({
                    "this": this_(),
                }),
            },
            'implementation': ['typescript', null],
    
        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": null,
                "res-typescript": null,
            }),
            'glossary': {
                'parameters': d({}),
                'imports': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],



            },
            'imports': d({}),

        },

    }],
}