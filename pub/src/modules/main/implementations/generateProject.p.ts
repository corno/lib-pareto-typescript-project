import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mtemp from "../../temp"
import * as mproject from "../../project"
import * as mapi from "../../api"
import * as mglossary from "../../glossary"
import * as mcoll from "res-pareto-collation"

import { icreateProjectGenerator } from "./createProjectGenerator.p"

export const igenerateProject: api.CgenerateProject = ($) => {

    icreateProjectGenerator(
        {
            cb_serializeProject: mproject.$a.createProjectSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                    cb_serializeModuleDefinition: mapi.$a.createModuleDefinitionSerializer(
                        {
                            sf_compare: mcoll.$a.localeIsABeforeB,
                            cb_serializeGlossary: mglossary.$a.createGlossarySerializer({
                                sf_compare: mcoll.$a.localeIsABeforeB,
                                cb_enrichedDictionaryForEach: mtemp.$a.createEnrichedDictionaryForEach({
                                    sf_compare: mcoll.$a.localeIsABeforeB,
                                })
                            }),
                            cb_serializeLeafType: mglossary.$a.serializeLeafType,
                        }
                    ),
                    cb_serializeLeafType: mglossary.$a.serializeLeafType,
                }
            ),
            cb_serializeTemplate: mproject.$a.createTemplateSerializer(
                {
                    sf_compare: mcoll.$a.localeIsABeforeB,
                }
            ),
            af_getSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
