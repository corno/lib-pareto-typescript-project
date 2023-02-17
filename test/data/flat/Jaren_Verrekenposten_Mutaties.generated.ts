import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    FIX PARENT PATH
    id: string,
    item_operation: string,
    //////
    prop_Bedrag: null | string,
) {
    return  {
        'parents': {
            FIX PARENT PATH
        },
        'id': id,
        'data': {
            'Bedrag': parseInt(assertNotNull(prop_Bedrag)),
            'Afhandeling': FIXCOMPONENT,
        }
    }
}