import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    BTW periodes: string,
    //////
    Omschrijving: string,
    Status: string,
    operation: string,
    Status_Aangegeven_Bedrag: string,
    Status_Aangegeven_Afronding: string,
    Status_Aangegeven_Datum: string,
) {
    return {
        'Omschrijving': FIXSTRING,
        'Status': pl.cc(Status, ($) => {
            switch ($) {
                case "Aangegeven": {
                    return ['Aangegeven', {
                        'Bedrag': FIXSTRING,
                        'Afronding': FIXSTRING,
                        'Datum': FIXSTRING,
                    }]
                }
                case "Openstaand": {
                    return ['Openstaand', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Status}`)
            }
        }),
        '1. BTW-categorieen': {},
        'Documenten': {},
    }
}