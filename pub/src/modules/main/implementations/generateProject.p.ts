import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mpareto2typescript from "../../pareto2typescript"

import * as mtemp from "../../temp"
import * as mcoll from "res-pareto-collation"
import * as mmain from "lib-pareto-main"

import { $a } from "../index"

export const $$: api.CgenerateProject = ($) => {
    const a = mtemp.$a.createArrayForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const d = mtemp.$a.createDictionaryForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const ea = mtemp.$a.createEnrichedArrayForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })
    const ed = mtemp.$a.createEnrichedDictionaryForEach({
        sf_compare: mcoll.$a.localeIsABeforeB,
    })

    $a.createProjectGenerator(
        {
            cb_serializeProject: mpareto2typescript.$a.createProjectSerializer(
                {
                    cb_dictionaryForEach: d,
                    cb_serializeModuleDefinition: mpareto2typescript.$a.createModuleDefinitionSerializer(
                        {
                            cb_dictionaryForEach: d,
                            cb_serializeGlossary: mpareto2typescript.$a.createGlossarySerializer({
                                cb_enrichedDictionaryForEach: ed,
                                cb_dictionaryForEach: d,
                            }),
                        }
                    ),
                    cb_serializeImplementation: mpareto2typescript.$a.createImplementationSerializer(
                        {
                            cb_arrayForEach: a,
                            cb_dictionaryForEach: d,
                            cb_enrichedArrayForEach: ea,
                            cb_enrichedDictionaryForEach: ed,
                        }
                    ),
                }
            ),
            cb_serializeTemplate: mpareto2typescript.$a.createTemplateSerializer(
                {
                    cb_dictionaryForEach: d,
                }
            ),
            pr_logError: mmain.$a.logError,
            af_getSingleArgument: () => { pl.panic(`SSDFSFSF`) },
            sf_addKeysToDictionary: mtemp.$a.addKeysToDictionary,
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
