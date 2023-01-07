import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mproject from "../../project"
import * as mapi from "../../api"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"
import * as mcoll from "res-pareto-collation"




export function igenerateProject($: api.TProjectSettings): void {
    const $i = mfp.$a.createWriter(
        {
            path: $.path,
            configuration: mfp._defaultSettings,
        },
        {
            onError: ($) => {
                pl.logDebugMessage("ERROR!!!")
            }
        },
    )

    const sar = mapi.$a.createAlgorithmReferenceSerializer(
        null,
        {
            serializeLeafType: mglossary.$a.serializeLeafType,
        }
    )

    mproject.$a.createProjectSerializer(
        null,
        {
            compare: mcoll.$a.localeIsABeforeB,
            serializeModuleDefinition: mapi.$a.createModuleDefinitionSerializer(
                null,
                {
                    compare: mcoll.$a.localeIsABeforeB,
                    serializeGlossary:  mglossary.$a.createGlossarySerializer(null, {
                        compare: mcoll.$a.localeIsABeforeB,
                    }),
                    serializeConstructor: mapi.$a.createConstructorSerializer(null, {
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
        $.project,
        $i,
    )
    mproject.$a.createTemplateSerializer(
        null,
        {
            compare: mcoll.$a.localeIsABeforeB,
        }
    )(
        $.project,
        $i,
    )
}
