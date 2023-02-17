import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Omschrijving: null | string,
    prop_Status: null | string,
    operation_Status: null | string,
    prop_Status_$Aangegeven_$Bedrag: null | string,
    prop_Status_$Aangegeven_$Afronding: null | string,
    prop_Status_$Aangegeven_$Datum: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Omschrijving': assertNotNull(prop_Omschrijving),
            'Status': pl.cc(prop_Status, ($) => {
                switch ($) {
                    case "Aangegeven": {
                        return ['Aangegeven', {
                            'Bedrag': parseInt(assertNotNull(prop_Status_$Aangegeven_$Bedrag)),
                            'Afronding': parseInt(assertNotNull(prop_Status_$Aangegeven_$Afronding)),
                            'Datum': parseInt(assertNotNull(prop_Status_$Aangegeven_$Datum)),
                        }]
                    }
                    case "Openstaand": {
                        return ['Openstaand', {}]
                    }
                    default: pl.panic(`UNEXPECTED VALUE: '${prop_Status}'`)
                }
            }),
            '1. BTW-categorieen': {},
            'Documenten': {},
        }
    }
}