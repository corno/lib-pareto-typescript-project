import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as algorithm } from "./modules/algorithm.data"
import { $ as liana } from "./modules/liana.data"
import { $ as liana_resolved } from "./modules/liana_resolved.data"
import { $ as liana_flat } from "./modules/liana_flat.data"
import { $ as liana2Pareto } from "./modules/liana2Pareto.data"
import { $ as moduleDefinition } from "./modules/moduleDefinition.data"
import { $ as pareto2typescript } from "./modules/pareto2typescript.data"
import { $ as project } from "./modules/project.data"

import { $ as glossary_temp } from "./modules/glossary_temp.data"
import { $ as glossary } from "./glossary/unresolved/module.generated"

const d = pd.d

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "ISC",


    'dependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-collation": {},
        "res-pareto-filesystem": {},
        "res-pareto-main": {},
        "res-typescript": {},
        "res-pareto-foreach": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
            "algorithm": {
                'definition': algorithm,
            },
            "glossary": glossary,
            "glossary_temp": {
                'definition': glossary_temp,
            },
            "liana": {
                'definition': liana,
            },
            "liana_resolved": {
                'definition': liana_resolved,
            },
            "liana_flat": {
                'definition': liana_flat,
            },
            "liana2Pareto": {
                'definition': liana2Pareto,
            },
            "moduleDefinition": {
                'definition': moduleDefinition,
            },
            "project": {
                'definition': project,
            },
            "pareto2typescript": {
                'definition': pareto2typescript,
            },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": {},
                "res-typescript": {},

            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        },

    }],
}