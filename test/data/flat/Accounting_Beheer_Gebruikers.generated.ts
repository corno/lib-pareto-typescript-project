import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    id: string,
    item_operation: string,
    //////
    prop_Volledige__naam: null | string,
) {
    return  {
        'parents': {},
        'id': id,
        'data': {
            'Volledige naam': assertNotNull(prop_Volledige__naam),
        }
    }
}