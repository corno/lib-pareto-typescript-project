import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Bankrekeningen: string,
    Mutaties: string,
    //////
    Omschrijving: string,
    Bedrag: string,
    Datum: string,
    Status: string,
    operation: string,
) {
    return {
        'Omschrijving': FIXSTRING,
        'Bedrag': FIXSTRING,
        'Datum': FIXSTRING,
        'Status': pl.cc(Status, ($) => {
            switch ($) {
                case "Nog te verwerken": {
                    return ['Nog te verwerken', {}]
                }
                case "Verwerkt": {
                    return ['Verwerkt', {
                        'Afhandeling': FIXCOMPONENT,
                    }]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Status}`)
            }
        }),
    }
}