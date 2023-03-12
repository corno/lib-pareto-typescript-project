import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createGlossarySerializer": algorithm(functionReference("this", {}, "SerializeGlossary"), constructor(null, {
            "dictionaryIsEmpty": functionReference("dictionary", {}, "IsEmpty"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
            "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
        })),
        "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
            "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
        })),
        "validateFiles": algorithm(functionReference("this", {}, "ValidateFiles")),
        "createProjectSerializer": algorithm(functionReference("this", {}, "ProjectToDirectory"), constructor(null, {
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "serializeGlossary": functionReference("this", {}, "SerializeGlossary"),
            "serializeImplementation": functionReference("this", {}, "SerializeImplementation"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
            "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
        })),
        "createStatesSerializer": algorithm(functionReference("this", {}, "SerializeStates"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
        })),
        "createTemplateSerializer": algorithm(functionReference("this", {}, "ProjectToDirectory"), constructor(null, {
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
            "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
            "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
        })),
    })
}