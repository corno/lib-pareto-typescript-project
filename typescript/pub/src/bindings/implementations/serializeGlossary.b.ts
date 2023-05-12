import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as a_glossary_serialize from "../../submodules/glossary_serialize"
import * as a_foreach from "res-pareto-foreach"
import * as a_collation from "res-pareto-collation"

import { A } from "../api.generated"

export const $$: A.serializeGlossary = () => {
    return a_glossary_serialize.$a.serialize({
        'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
            'compare': a_collation.$r.localeIsABeforeB(),
        }),
        'serializeAnnotation': ($, $i) => $i.snippet(`null`),
        'serializeAnnotationType': ($, $i) => $i.snippet(`null`),
    })
}