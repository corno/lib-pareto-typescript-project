import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as foo from "../index"

import * as mtemp from "../../temp"
import * as mcoll from "res-pareto-collation"

import { icreateProjectGenerator } from "./createProjectGenerator.p"

export const igenerateProject: api.CgenerateProject = ($) => {

    icreateProjectGenerator(
        {
            cb_serializeProject: foo.$a.createProjectSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                    cb_serializeModuleDefinition: foo.$a.createModuleDefinitionSerializer(
                        {
                            sf_compare: mcoll.$a.localeIsABeforeB,
                            cb_serializeGlossary: foo.$a.createGlossarySerializer({
                                sf_compare: mcoll.$a.localeIsABeforeB,
                                cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                                    sf_compare: mcoll.$a.localeIsABeforeB,
                                })
                            }),
                        }
                    ),
                }
            ),
            cb_serializeTemplate: foo.$a.createTemplateSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                }
            ),
            af_getSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
