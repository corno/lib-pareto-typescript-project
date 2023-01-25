import * as pl from 'pareto-core-lib'

function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }

export function $$(
    parent_Jaren: string,
    id: string,
    item_operation: string,
    //////
) {
    return  {
        'parents': {
            'Jaren': parent_Jaren,
        },
        'id': id,
        'data': {}
    }
}