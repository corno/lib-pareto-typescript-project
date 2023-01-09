import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mproject from "../../project"
import * as mapi from "../../api"
import * as mglossary from "../../glossary"
import * as mcoll from "res-pareto-collation"
import * as mexe from "lib-pareto-exe"

import { icreateProjectGenerator } from "./createProjectGenerator.p"

export const igenerateProject: api.CgenerateProject = ($) => {

    icreateProjectGenerator(
        {
            cbserializeProject: mproject.$a.createProjectSerializer(
                {
                    fcompare: mcoll.$a.localeIsABeforeB,
                    cbserializeModuleDefinition: mapi.$a.createModuleDefinitionSerializer(
                        {
                            fcompare: mcoll.$a.localeIsABeforeB,
                            cbserializeGlossary: mglossary.$a.createGlossarySerializer({
                                fcompare: mcoll.$a.localeIsABeforeB,
                            }),
                            cbserializeLeafType: mglossary.$a.serializeLeafType,
                        }
                    ),
                    cbserializeLeafType: mglossary.$a.serializeLeafType,
                }
            ),
            cbserializeTemplate: mproject.$a.createTemplateSerializer(
                {
                    fcompare: mcoll.$a.localeIsABeforeB,
                }
            ),
            fgetSingleArgument: () => { pl.panic(`SSDFSFSF`)},
            //cbgetSingleArgument: mexe.p_getSingleArgument,
        }
    )($)
}
