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

            const sar = mapi.$a.createAlgorithmReferenceSerializer(
                {
                    serializeLeafType: mglossary.$a.serializeLeafType,
                }
            )

            mproject.$a.createProjectSerializer(
                {
                    compare: mcoll.$a.localeIsABeforeB,
                    serializeModuleDefinition: mapi.$a.createModuleDefinitionSerializer(
                        {
                            compare: mcoll.$a.localeIsABeforeB,
                            serializeGlossary: mglossary.$a.createGlossarySerializer({
                                compare: mcoll.$a.localeIsABeforeB,
                            }),
                            serializeConstructor: mapi.$a.createConstructorSerializer({
                                compare: mcoll.$a.localeIsABeforeB,
                                serializeAlgorithmReference: sar,
                                serializeLeafType: mglossary.$a.serializeLeafType,
                            }),
                            serializeAlgorithmReference: sar,

                        }
                    ),
                    serializeLeafType: mglossary.$a.serializeLeafType,
                }
            )(
                project,
                $i,
            )
            mproject.$a.createTemplateSerializer(
                {
                    compare: mcoll.$a.localeIsABeforeB,
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
