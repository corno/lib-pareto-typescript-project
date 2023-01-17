import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { $ as api } from "./api.p"
import { $ as glossary } from "./modules/glossary.p"
import { $ as liana } from "./modules/liana.p"
import { $ as liana2Pareto } from "./modules/liana2Pareto.p"
import { $ as moduleDefinition } from "./modules/moduleDefinition.p"
import { $ as project } from "./modules/project.p"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'type': ['library', null],
    'modules': d({
        'glossary': {
            'definition': glossary,
            'implementation': {}
        },
        "liana": {
            'definition': liana,
            'implemenation': {}
        },
        "liana2Pareto": {
            'definition': liana2Pareto,
            'implemenation': {}
        },
        "main": {
            'definition': api,
            'implementation': {}
        },
        "moduleDefinition": {
            'definition': moduleDefinition,
            'implementation': {}
        },
        "project": {
            'definition': project,
            'implemenation': {}
        },
        // "temp": {
        //     'definition': def({
        //         'glossary': {
        //             'imports': d({}),
        //             'types': types({
        //                 "Dictionary": dictionary(str()),
        //                 "B": group({
        //                     "key": member(str()),
        //                     "value": member(str()),
        //                     "isFirst": member(bln()),
        //                 }),
        //             }),
        //             'functions': d({}),
        //             'interfaces': d({
        //                 "X": ['group', {
        //                     'members': d({
        //                         "onEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['null', null],

        //                         }],
        //                         "onNotEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['set', {
        //                                 'interface': "Y"
        //                             }],
        //                         }],
        //                     })
        //                 }],
        //                 "Y": ['method', {
        //                     'data': ['null', null],
        //                     'interface': ['set', {
        //                         'interface': "Y"
        //                     }],
        //                 }],
        //             }),
        //             'callbacks': d({
        //                 "EnrichedDictionaryForEach": {
        //                     'data': ['type', reference("Dictionary")],
        //                     'interface': "X",
        //                 },
        //             }),
        //             'pipes': d({}),
        //         },
        //         'api': {
        //             'imports': d({}),
        //             'algorithms': d({})
        //         },
        //     }),
        //     'implementation': {}

        // },
    }),
    'main': "main"
}