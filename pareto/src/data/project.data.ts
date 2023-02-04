import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as algorithm } from "./modules/algorithm.data"
import { $ as liana } from "./modules/liana.data"
import { $ as liana_flat } from "./modules/liana_flat.data"
import { $ as liana2Pareto } from "./modules/liana2Pareto.data"
import { $ as moduleDefinition } from "./modules/moduleDefinition.data"
import { $ as pareto2typescript } from "./modules/pareto2typescript.data"
import { $ as project } from "./modules/project.data"

import { $ as glossary } from "../data/glossary/unresolved/module.generated"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "A library to generate a typescript project environment for Pareto",
    'license': "ISC",


    'pubdependencies': d({
        "glo-pareto-common": {},
        "lib-fountain-pen": {},
        "res-pareto-collation": {},
        "res-pareto-filesystem": {},
        "res-pareto-main": {},
        "res-typescript": {},
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
            "liana": {
                'definition': liana,
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
        'test': {
            'dependencies': d({
                "lib-fountain-pen": {},
                "res-typescript": {},

            }),
        },

    }],
}