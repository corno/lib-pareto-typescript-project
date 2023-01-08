import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mproject from "../../project"
import * as mapi from "../../api"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"
import * as mcoll from "res-pareto-collation"
import * as mexe from "lib-pareto-exe"
import { icreateProjectGenerator } from "./createProjectGenerator.p"

export const igenerateProject: api.CgenerateProject = ($) => {
    const project = $.project

    icreateProjectGenerator(
        {}
    )

    function xxx(
        $d: {
            serializeProject: mproject.XSerializeProject
            serializeTemplate: mproject.XSerializeProject
        },
        $i: mfp.IWriter
    ) {
        $d.serializeProject(
            project,
            $i,
        )
        $d.serializeTemplate(
            project,
            $i,
        )
    }
    mexe.p_getSingleArgument($.mainData.arguments, {
        callback: ($) => {

            const $i = mfp.$a.createWriter(
                {
                    path: $,
                    configuration: mfp._defaultSettings,
                },
                {
                    onError: ($) => {
                        pl.logDebugMessage("ERROR!!!")
                    }
                },
            )
            xxx(
                {
                    serializeProject: mproject.$a.createProjectSerializer(
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
                    serializeTemplate: mproject.$a.createTemplateSerializer(
                        {
                            fcompare: mcoll.$a.localeIsABeforeB,
                        }
                    )
                },
                $i,
            )
        },
        error: () => {
            pl.implementMe("@@@@")
        }
    })

}
