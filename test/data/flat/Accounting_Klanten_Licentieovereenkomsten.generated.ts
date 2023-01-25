import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Klanten: string,
    id: string,
    item_operation: string,
    //////
) {
    return  {
        'parents': {
            'Klanten': parent_Klanten,
        },
        'id': id,
        'data': {
            'Periodes': {},
        }
    }
}