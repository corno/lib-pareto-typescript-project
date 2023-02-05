import * as pr from 'pareto-core-raw'

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
    func,
    member,
    reference,
    array,
    method,
} from "../../../../../../pub/dist/submodules/glossary/shorthands.p"

import * as mglossary from "../../../../../../pub/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({}),
    'parameters': d({
        "Annotation": {},
    }),
    'templates': d({
    }),
    'types': types({
        "Annotation": glossaryParameter("Annotation"),
        "AnnotatedToken": group({
            "token": member(reference("Token")),
            "annotation": member(glossaryParameter("Annotation"))
        }),
        "MultilineStringData": group({
            "lines": member(array(string()))
        }),
        "SimpleStringData": group({
            "wrapping": member(reference("Wrapping")),
            "value": member(string()),
        }),
        "StructuralTokenData": group({
            "type": member(reference("StructuralTokenType"))
        }),
        "StructuralTokenType": taggedUnion({
            "tagged union start": group({}),
            "open shorthand group": group({}),
            "close shorthand group": group({}),
            "open verbose group": group({}),
            "close verbose group": group({}),
            "open dictionary": group({}),
            "close dictionary": group({}),
            "open list": group({}),
            "close list": group({}),
        }),
        "Token": taggedUnion({
            "header start": group({}),
            "structural": reference("StructuralTokenData"),
            "simple string": reference("SimpleStringData"),
            "multiline string": reference("MultilineStringData"),
        }),
        "Wrapping": taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        }),

    }),
    'interfaces': d({
        "TokenConsumer": ['group', {
            'members': d({
                "onToken": method(typeReference("AnnotatedToken")),
                "onEnd": method(typeReference("Annotation")), //should be a parameter reference
            })
        }]
    }),
    'functions': d({
    }),
}