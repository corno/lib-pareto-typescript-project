import * as pd from 'pareto-core-data'

import {
    typeReference,
    string,
    taggedUnion,
    glossaryParameter,
    group,
    member,
    array,
    type,
    ref,
    aInterfaceMethod,
    streamconsumer,
    aInterface,
} from "../../../../../../pub/dist/submodules/glossary/shorthands"

import * as g_glossary from "../../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({}),

    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "AnnotatedToken": type(group({
                "token": member(ref(typeReference("Token"))),
                "annotation": member(ref(glossaryParameter("Annotation")))
            })),
            "MultilineStringData": type(group({
                "lines": member(array(string()))
            })),
            "SimpleStringData": type(group({
                "wrapping": member(ref(typeReference("Wrapping"))),
                "value": member(string()),
            })),
            "StructuralTokenData": type(group({
                "type": member(ref(typeReference("StructuralTokenType")))
            })),
            "StructuralTokenType": type(taggedUnion({
                "tagged union start": group({}),
                "open shorthand group": group({}),
                "close shorthand group": group({}),
                "open verbose group": group({}),
                "close verbose group": group({}),
                "open dictionary": group({}),
                "close dictionary": group({}),
                "open list": group({}),
                "close list": group({}),
            })),
            "Token": type(taggedUnion({
                "header start": group({}),
                "structural": ref(typeReference("StructuralTokenData")),
                "simple string": ref(typeReference("SimpleStringData")),
                "multiline string": ref(typeReference("MultilineStringData")),
            })),
            "Wrapping": type(taggedUnion({
                "quote": group({}),
                "apostrophe": group({}),
                "none": group({}),
            })),
        }),
        'namespaces': d({}),
    },
    'asynchronous': {
        'interfaces': d({
            "TokenConsumer": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("AnnotatedToken")),
                aInterfaceMethod(typeReference("Annotation")), //should be a parameter reference
            ))
        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}