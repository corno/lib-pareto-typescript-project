import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
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
    
    export namespace Ppubdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Ppubdependencies = pt.Dictionary<Ppubdependencies.D>
    
    export namespace Ptype {
        
        export namespace Oglossary {}
        export type Oglossary = {
            readonly 'glossary': mglossary.TGlossary
        }
        
        export namespace Olibrary {
            
            export namespace Psubmodules {}
            export type Psubmodules = pt.Dictionary<UModule>
        }
        export type Olibrary = {
            readonly 'main': UModule
            readonly 'submodules': Olibrary.Psubmodules
            readonly 'test': UTest
        }
        
        export namespace Oresource {
            
            export namespace PdevDependencies {
                
                export namespace D {}
                export type D = {}
            }
            export type PdevDependencies = pt.Dictionary<PdevDependencies.D>
        }
        export type Oresource = {
            readonly 'definition': mmoduleDefinition.TModuleDefinition
            readonly 'devDependencies': Oresource.PdevDependencies
            readonly 'test': UTest
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
    readonly 'pubdependencies': GProject.Ppubdependencies
    readonly 'type': GProject.Ptype
}
export type UProject = GProject

export namespace GTest {
    
    export namespace Pdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Pdependencies = pt.Dictionary<Pdependencies.D>
}
export type GTest = {
    readonly 'dependencies': GTest.Pdependencies
}
export type UTest = GTest