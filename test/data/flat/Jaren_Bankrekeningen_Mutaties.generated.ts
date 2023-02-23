import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Omschrijving: null | string,
    prop_Bedrag: null | string,
    prop_Datum: null | string,
    prop_Status: null | string,
    operation_Status: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Omschrijving': assertNotNull(prop_Omschrijving),
            'Bedrag': parseInt(assertNotNull(prop_Bedrag)),
            'Datum': parseInt(assertNotNull(prop_Datum)),
            'Status': pl.cc(prop_Status, ($) => {
                switch ($) {
                    case 'Nog te verwerken': {
                        return ['Nog te verwerken', {}]
                    }
                    case 'Verwerkt': {
                        return ['Verwerkt', {
                            'Afhandeling': FIXCOMPONENT,
                        }]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Status}'`)
                }
            }),
        }
    }
}