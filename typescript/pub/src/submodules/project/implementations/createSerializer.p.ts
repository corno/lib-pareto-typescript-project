import * as pl from 'pareto-core-lib'
// import * as pd from 'pareto-core-dev'

// import { createSerializer } from "../api.generated"

// export const $$: createSerializer = ($d) => {
//     return ($, $i) => {
//         $i.snippet(`{`)
//         $i.indent(($i) => {
//             $i.nestedLine(($i) => {
//                 $i.snippet(`'definition': {`)
//                 $i.indent(($i) => {
//                     $i.nestedLine(($i) => {
//                         $i.snippet(`'api': `)
//                         $d.serializeAPI($.definition.api, $i)
//                         $i.snippet(`,`)
//                     })
//                     $i.nestedLine(($i) => {
//                         $i.snippet(`'glossary': `)
//                         $d.serializeGlossary($.definition.glossary, $i)
//                         $i.snippet(`,`)
//                     })
//                 })
        
//                 $i.snippet(`},`)
//             })
//             $i.nestedLine(($i) => {
//                 $i.snippet(`'implementation': `)
//                 switch ($.implementation[0]) {
//                     case 'pareto':
//                         pl.ss($.implementation, ($) => {
//                             pd.implementMe("HIEROS")
//                             //$d.serializeImplementation($, $i)
//                         })
//                         break
//                     case 'typescript':
//                         pl.ss($.implementation, ($) => {
//                             $i.snippet(`['typescript', null]`)
//                         })
//                         break
//                     default: pl.au($.implementation[0])
//                 }
//                 $i.snippet(`,`)
//             })
//             if ($.implementation !== undefined) {
//                 pl.cc($.implementation, ($) => {
//                 })
//             }
//         })
//         $i.snippet(`}`)
//     }
// }

