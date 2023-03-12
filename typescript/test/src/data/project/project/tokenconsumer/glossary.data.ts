import * as pd from 'pareto-core-data'

import {
    nested,
    null_,
    typeReference,
    boolean,
    string,
    number,
    types,
    taggedUnion,
    glossaryParameter,
    group,
    member,
    reference,
    array,
    interfaceMethod,
    builderMethod,
    type,
} from "../../../../../../pub/dist/submodules/glossary/shorthands"

import * as g_glossary from "../../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AnnotatedToken": type(group({
            "token": member(reference("Token")),
            "annotation": member(glossaryParameter("Annotation"))
        })),
        "MultilineStringData": type(group({
            "lines": member(array(string()))
        })),
        "SimpleStringData": type(group({
            "wrapping": member(reference("Wrapping")),
            "value": member(string()),
        })),
        "StructuralTokenData": type(group({
            "type": member(reference("StructuralTokenType"))
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
            "structural": reference("StructuralTokenData"),
            "simple string": reference("SimpleStringData"),
            "multiline string": reference("MultilineStringData"),
        })),
        "Wrapping": type(taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        })),

    }),
    'type': ['asynchronous', {
        'interfaces': d({
            "TokenConsumer": ['stream', {
                'data': interfaceMethod(typeReference("AnnotatedToken")),
                'end': interfaceMethod(typeReference("Annotation")), //should be a parameter reference
            }]
        }),
        'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({}),

    }],
}