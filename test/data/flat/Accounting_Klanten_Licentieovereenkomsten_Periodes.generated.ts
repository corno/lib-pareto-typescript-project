import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Klanten: string,
    parent_Licentieovereenkomsten: string,
    id: string,
    item_operation: string,
    //////
    prop_Bedrag: null | string,
) {
    return  {
        'parents': {
            'Klanten': parent_Klanten,
            'Licentieovereenkomsten': parent_Licentieovereenkomsten,
        },
        'id': id,
        'data': {
            'Bedrag': parseInt(assertNotNull(prop_Bedrag)),
        }
    }
}