import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mpareto2typescript from "../../pareto2typescript"

import * as mtemp from "../../temp"
import * as mcoll from "res-pareto-collation"
import * as mmain from "lib-pareto-main"

import { $a } from "../index"

export const $$: api.CgenerateProject = ($) => {

    $a.createProjectGenerator(
        {
            cb_serializeProject: mpareto2typescript.$a.createProjectSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                    cb_serializeModuleDefinition: mpareto2typescript.$a.createModuleDefinitionSerializer(
                        {
                            sf_compare: mcoll.$a.localeIsABeforeB,
                            cb_serializeGlossary: mpareto2typescript.$a.createGlossarySerializer({
                                sf_compare: mcoll.$a.localeIsABeforeB,
                                cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                                    sf_compare: mcoll.$a.localeIsABeforeB,
                                })
                            }),
                        }
                    ),
                    cb_serializeImplementation: mpareto2typescript.$a.createImplementationSerializer(
                        {
                            sf_compare: mcoll.$a.localeIsABeforeB,
                            cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                                sf_compare: mcoll.$a.localeIsABeforeB,
                            })
                        }
                    ),
                }
            ),
            cb_serializeTemplate: mpareto2typescript.$a.createTemplateSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                }
            ),
            pr_logError: mmain.$a.logError,
            af_getSingleArgument: () => { pl.panic(`SSDFSFSF`) },
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
