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
                    f: {
                        compare: mcoll.$a.localeIsABeforeB
                    },
                    cb: {
                        serializeModuleDefinition: mapi.$a.createModuleDefinitionSerializer(
                            {
                                f: {
                                    compare: mcoll.$a.localeIsABeforeB,
                                },
                                cb: {
                                    serializeGlossary: mglossary.$a.createGlossarySerializer({
                                        f: {
                                            compare: mcoll.$a.localeIsABeforeB,

                                        },
                                        cb: {},
                                        se: {}
                                    }),
                                    serializeLeafType: mglossary.$a.serializeLeafType,
                                },
                                se: {}
                            }
                        ),
                        serializeLeafType: mglossary.$a.serializeLeafType,
                    },
                    se: {}
                }
            )(
                project,
                $i,
            )
            mproject.$a.createTemplateSerializer(
                {
                    f: {
                        compare: mcoll.$a.localeIsABeforeB,
                    },
                    se: {},
                    cb: {},
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
