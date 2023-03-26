import * as a_pareto2typescript from "../../submodules/pareto2typescript"
import * as a_parametersparser from "../../submodules/parametersparser"
import * as a_foreach from "res-pareto-foreach"
import * as a_fs from "lib-pareto-filesystem"
import * as a_fp from "lib-fountain-pen"
import * as a_coll from "res-pareto-collation"
import * as a_ts from "res-typescript"
import * as a_main from "../../main"
import * as a_mainLib from "res-pareto-main"

import { A } from "../api.generated"

export const $$: A.createProjectGeneratorAndReporter = () => {
    const el =  a_mainLib.$r.createErrorLogger()()
    const log =  a_mainLib.$r.createLogger()()

    return () => {
        return a_main.$a.createProjectGeneratorAndReporter(
            {
                'readDirectoryOrAbort': a_fs.$b.createReadDirectoryOrAbort({
                    'onError': ($) => {
                       el.data($)
                    },
                }),
                'createDirectory': a_fp.$b.createDirectory(),
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
                                // 'arrayForEach': a_foreach.$r.arrayForEach(),
                                'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                                    'compare': a_coll.$r.localeIsABeforeB(),
                                }),
    
                                // 'dictionaryForEach_InnerFunctions': a_foreach.$r.createDictionaryForEach({
                                //     'compare': a_coll.$r.localeIsABeforeB(),
                                // }),
                                //'enrichedArrayForEach': a_foreach.$r.enrichedArrayForEach(),
                                'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                                    'compare': a_coll.$r.localeIsABeforeB(),
                                }),
                                'createIdentifier': a_ts.$r.createIdentifier(),
                            }
                        ),
                        'createIdentifier': a_ts.$r.createIdentifier(),
                    }
                ),
                'serializeTemplate': a_pareto2typescript.$a.serializeTemplate(
                    {
                        'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                            'compare': a_coll.$r.localeIsABeforeB(),
                        }),
                        'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                            'compare': a_coll.$r.localeIsABeforeB(),
                        }),
                        'createIdentifier': a_ts.$r.createIdentifier(),
                    }
                ),
            },
        )({
            'log': ($) => {
                log.data($)
            },
            'logError': ($) => {

                el.data($)
            }
        })
    }
}