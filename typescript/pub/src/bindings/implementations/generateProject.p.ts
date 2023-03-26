import * as a_pareto2typescript from "../../submodules/pareto2typescript"
import * as a_parametersparser from "../../submodules/parametersparser"
import * as a_foreach from "res-pareto-foreach"
import * as a_coll from "res-pareto-collation"
import * as a_mainlib from "res-pareto-main"
import * as a_ts from "res-typescript"
import * as a_fp from "lib-fountain-pen"
import * as a_main from "../../main"
import * as a_fse from "lib-pareto-filesystem/dist/submodules/errorhandlers"

import { A } from "../api.generated"

export const $$: A.generateProject = () => {

    return ($) => {
        const el = a_mainlib.$r.createErrorLogger()()
        const log = a_mainlib.$r.createLogger()()

        $c(() => {

            a_main.$a.generateProjectAndReport(
                {
                    'createParametersParser': a_parametersparser.$a.createParametersParser(),
                    'validateFiles': a_pareto2typescript.$a.validateFiles,
                    'serializeProject': a_pareto2typescript.$a.serializeProject(
                        {
                            'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                                'compare': a_coll.$r.localeIsABeforeB(),
                            }),
                            'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                                'compare': a_coll.$r.localeIsABeforeB(),
                            }),
                            'serializeGlossary': a_pareto2typescript.$a.serializeGlossary({
                                'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                                    'compare': a_coll.$r.localeIsABeforeB(),
                                }),
                                'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                                    'compare': a_coll.$r.localeIsABeforeB(),
                                }),
                                'createIdentifier': a_ts.$r.createIdentifier(),
                                'createApostrophedString': a_ts.$r.createApostrophedString(),
                                'createBacktickedString': a_ts.$r.createBacktickedString(),
                                'createQuotedString': a_ts.$r.createQuotedString(),
                            }),
                            'serializeImplementation': a_pareto2typescript.$a.serializeImplementation(
                                {
                                    'arrayForEach': a_foreach.$r.arrayForEach(),
                                    'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                                        'compare': a_coll.$r.localeIsABeforeB(),
                                    }),
                                    'dictionaryForEach_Implementations': a_foreach.$r.createDictionaryForEach({
                                        'compare': a_coll.$r.localeIsABeforeB(),
                                    }),
                                    'dictionaryForEach_InnerFunctions': a_foreach.$r.createDictionaryForEach({
                                        'compare': a_coll.$r.localeIsABeforeB(),
                                    }),
                                    'enrichedArrayForEach': a_foreach.$r.enrichedArrayForEach(),
                                    'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                                        'compare': a_coll.$r.localeIsABeforeB(),
                                    }),
                                    'createIdentifier': a_ts.$r.createIdentifier(),
                                    'createApostrophedString': a_ts.$r.createApostrophedString(),
                                    'createBacktickedString': a_ts.$r.createBacktickedString(),
                                    'createQuotedString': a_ts.$r.createQuotedString(),
                                }
                            ),
                            'createIdentifier': a_ts.$r.createIdentifier(),
                            'createApostrophedString': a_ts.$r.createApostrophedString(),
                            'createBacktickedString': a_ts.$r.createBacktickedString(),
                            'createQuotedString': a_ts.$r.createQuotedString(),
                        }
                    ),
                    'serializeTemplate': a_pareto2typescript.$a.serializeTemplate(
                        {
                            'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                                'compare': a_coll.$r.localeIsABeforeB(),
                            }),
                            'createIdentifier': a_ts.$r.createIdentifier(),
                            'createApostrophedString': a_ts.$r.createApostrophedString(),
                            'createBacktickedString': a_ts.$r.createBacktickedString(),
                            'createQuotedString': a_ts.$r.createQuotedString(),
                        }
                    ),
                    // 'logWriteFileError': ($) => {
                    //     a_main.$r.logError(`FIXME WRITEFILEERROR`)
                    // },
                    // 'reportSuperfluousNode': ($) => {
                    // },
                    'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey(),
                },
            )(
                $,
                {
                    'nodes': {

                        'manualNode': ($) => {
                            // a_mainlib.$r.(($i) => {
                            //     a_fp.$a.createAllowedNodeMessage($)
                            // })
                        },
                        'superfluousNode': ($) => {
                            a_mainlib.$r.logError(($i) => {
                                a_fp.$a.createSuperfluousNodeMessage($)
                            })
                        },
                    },
                    'onWriteFileError': ($) => {
                        el.data(($i) => {
                            a_fse.$a.writeFile($, $i)
                        })
                    },
                    'onReadDirError': ($) => {
                        a_fse.$a.readDir()({
                            'handler': ($) => {

                            }
                        })
                       el.data(($i) => {
                        })
                    },
                }
            )

        })
    }
}