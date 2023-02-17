import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Omschrijving: null | string,
    prop_Bedrag: null | string,
    operation_Bedrag: null | string,
    prop_Bedrag_$Bekend_$Bedrag__inclusief__BTW: null | string,
    prop_Bedrag_$Bekend_$BTW: null | string,
    prop_Bedrag_$Nog__niet__bekend_$Aantekeningen: null | string,
    prop_Type: null | string,
    operation_Type: null | string,
    prop_Type_$Kosten_$Grootboekrekening: null | string,
    prop_Type_$Balans_$Balans__item: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Omschrijving': assertNotNull(prop_Omschrijving),
            'Bedrag': pl.cc(prop_Bedrag, ($) => {
                switch ($) {
                    case "Bekend": {
                        return ['Bekend', {
                            'Bedrag inclusief BTW': parseInt(assertNotNull(prop_Bedrag_$Bekend_$Bedrag__inclusief__BTW)),
                            'BTW': parseInt(assertNotNull(prop_Bedrag_$Bekend_$BTW)),
                        }]
                    }
                    case "Nog niet bekend": {
                        return ['Nog niet bekend', {
                            'Aantekeningen': assertNotNull(prop_Bedrag_$Nog__niet__bekend_$Aantekeningen),
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Bedrag}'`)
                }
            }),
            'Type': pl.cc(prop_Type, ($) => {
                switch ($) {
                    case "Kosten": {
                        return ['Kosten', {
                            'Grootboekrekening': prop_Type_$Kosten_$Grootboekrekening,
                        }]
                    }
                    case "Balans": {
                        return ['Balans', {
                            'Balans item': prop_Type_$Balans_$Balans__item,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Type}'`)
                }
            }),
        }
    }
}