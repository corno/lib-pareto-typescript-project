import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    id: string,
    item_operation: string,
    //////
) {
    return  {
        'parents': {},
        'id': id,
        'data': {}
    }
}