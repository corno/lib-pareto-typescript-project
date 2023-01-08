import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mproject from "../../project"
import * as mapi from "../../api"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"
import * as mcoll from "res-pareto-collation"
import * as mexe from "lib-pareto-exe"

export function igenerateProject($: api.TProjectSettings): void {
    const project = $.project
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
            mproject.$a.createProjectSerializer(
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
            )(
                project,
                $i,
            )
            mproject.$a.createTemplateSerializer(
                {
                    fcompare: mcoll.$a.localeIsABeforeB,
                }
            )(
                project,
                $i,
            )
        },
        error: () => {
            pl.implementMe("@@@@")
        }
    })

}
