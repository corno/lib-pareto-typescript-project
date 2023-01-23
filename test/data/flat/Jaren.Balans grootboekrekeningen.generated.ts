import * as pl from 'pareto-core-lib'
export function $$(
    Jaren: string,
    Balans grootboekrekeningen: string,
    //////
    Type: string,
    operation: string,
) {
    return {
        'Type': pl.cc(Type, ($) => {
            switch ($) {
                case "Bankrekening": {
                    return ['Bankrekening', {}]
                }
                case "Informele rekening": {
                    return ['Informele rekening', {}]
                }
                case "Overig": {
                    return ['Overig', {}]
                }
                default: pl.panic(`UNEXPECTED VALUE: ${Type}`)
            }
        }),
    }
}