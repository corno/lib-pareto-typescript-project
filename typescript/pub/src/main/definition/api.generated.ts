import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gforeach from "res-pareto-foreach"
import * as gfp from "lib-fountain-pen"
import * as gfs from "res-pareto-filesystem"
import * as gpareto2typescript from "../../submodules/pareto2typescript"
import * as gthis from "./glossary"

export type CcreateParametersParser = ($d: {
    readonly 'onError': gthis.FHandleArgumentError
}) => gthis.FParseArguments2

export type CcreateProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'logWriteFileError': gfs.FHandleWriteFileError
    readonly 'reportSuperfluousNode': gfp.FReportSuperfluousNode
    readonly 'serializeProject': gpareto2typescript.FProjectToDirectory
    readonly 'serializeTemplate': gpareto2typescript.FProjectToDirectory
    readonly 'validateFiles': gpareto2typescript.FProjectToDirectory
}) => gthis.FGenerateProject

export type CgenerateProject = gthis.FGenerateProject

export type API = {
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}