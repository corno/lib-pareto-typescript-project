import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GAlgorithmImplementation {}
export type GAlgorithmImplementation = {}
export type UAlgorithmImplementation = GAlgorithmImplementation

export namespace GImplementation {}
export type GImplementation = pt.Dictionary<UAlgorithmImplementation>
export type UImplementation = GImplementation

export namespace GModule {}
export type GModule = {
    readonly 'definition': mmoduleDefinition.TModuleDefinition
    readonly 'implementation'?: malgorithm.TImplementation
    readonly 'states'?: malgorithm.TStates
}
export type UModule = GModule

export namespace GProject {
    
    export namespace Pmodules {}
    export type Pmodules = pt.Dictionary<UModule>
    
    export namespace Ppubdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Ppubdependencies = pt.Dictionary<Ppubdependencies.D>
    
    export namespace Ptestdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Ptestdependencies = pt.Dictionary<Ptestdependencies.D>
    
    export namespace Ptype {
        
        export namespace Oglossary {}
        export type Oglossary = {}
        
        export namespace Olibrary {}
        export type Olibrary = {}
        
        export namespace Oresource {
            
            export namespace PdevDependencies {
                
                export namespace D {}
                export type D = {}
            }
            export type PdevDependencies = pt.Dictionary<PdevDependencies.D>
        }
        export type Oresource = {
            readonly 'devDependencies': Oresource.PdevDependencies
        }
    }
    export type Ptype = 
        | ['glossary', Ptype.Oglossary]
        | ['library', Ptype.Olibrary]
        | ['resource', Ptype.Oresource]
}
export type GProject = {
    readonly 'author': string
    readonly 'description': string
    readonly 'license': string
    readonly 'main': string
    readonly 'modules': GProject.Pmodules
    readonly 'name': string
    readonly 'pubdependencies': GProject.Ppubdependencies
    readonly 'testdependencies': GProject.Ptestdependencies
    readonly 'type': GProject.Ptype
}
export type UProject = GProject