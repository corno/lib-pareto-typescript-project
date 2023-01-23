import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Inkopen: string,
    Regels: string,
    //////
    Omschrijving: string,
    Bedrag: string,
    operation: string,
    Bedrag_Bekend_Bedrag inclusief BTW: string,
    Bedrag_Bekend_BTW: string,
    Bedrag_Nog niet bekend_Aantekeningen: string,
    Type: string,
    operation: string,
    Type_Kosten_Grootboekrekening: string,
    Type_Balans_Balans item: string,
) {
    return {
        'Omschrijving': FIXSTRING,
        'Bedrag': pl.cc(Bedrag, ($) => {
            switch ($) {
                case "Bekend": {
                    return ['Bekend', {
                        'Bedrag inclusief BTW': FIXSTRING,
                        'BTW': FIXSTRING,
                    }]
                }
                case "Nog niet bekend": {
                    return ['Nog niet bekend', {
                        'Aantekeningen': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Bedrag}`)
            }
        }),
        'Type': pl.cc(Type, ($) => {
            switch ($) {
                case "Kosten": {
                    return ['Kosten', {
                        'Grootboekrekening': FIXSTRING,
                    }]
                }
                case "Balans": {
                    return ['Balans', {
                        'Balans item': FIXSTRING,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Type}`)
            }
        }),
    }
}