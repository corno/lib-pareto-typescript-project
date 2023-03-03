import * as pt from 'pareto-core-types'

import * as galgorithm from "../../../algorithm"
import * as gapi from "../../../api"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation<GPAnnotation> = null
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Implementation {
        
        export namespace pareto {}
        
        export type pareto<GPAnnotation> = null
        
        export namespace typescript {}
        
        export type typescript<GPAnnotation> = null
    }
    
    export type Implementation<GPAnnotation> = 
        | ['pareto', null]
        | ['typescript', null]
    
    export namespace Project {
        
        export type author<GPAnnotation> = string
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GPAnnotation> = null
        }
        
        export type dependencies<GPAnnotation> = pt.Dictionary<null>
        
        export type description<GPAnnotation> = string
        
        export type license<GPAnnotation> = string
        
        export namespace _ltype {
            
            export namespace glossary {
                
                export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                
                export namespace imports {
                    
                    export type D<GPAnnotation> = string
                }
                
                export type imports<GPAnnotation> = pt.Dictionary<string>
            }
            
            export type glossary<GPAnnotation> = {
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                readonly 'imports': pt.Dictionary<string>
            }
            
            export namespace library {
                
                export namespace executables {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = null
                }
                
                export type executables<GPAnnotation> = pt.Dictionary<null>
                
                export namespace main {
                    
                    export namespace definition {
                        
                        export namespace api {
                            
                            export namespace imports {
                                
                                export namespace D {
                                    
                                    export type external<GPAnnotation> = string
                                    
                                    export type submodule<GPAnnotation> = string
                                }
                                
                                export type D<GPAnnotation> = 
                                    | ['external', string]
                                    | ['submodule', string]
                            }
                            
                            export type imports<GPAnnotation> = pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            
                            export type root<GPAnnotation> = gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        
                        export type api<GPAnnotation> = {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        
                        export namespace glossary {
                            
                            export namespace imports {
                                
                                export namespace D {
                                    
                                    export type external<GPAnnotation> = string
                                    
                                    export type temp__submodule<GPAnnotation> = string
                                }
                                
                                export type D<GPAnnotation> = 
                                    | ['external', string]
                                    | ['temp submodule', string]
                            }
                            
                            export type imports<GPAnnotation> = pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            
                            export type root<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                        
                        export type glossary<GPAnnotation> = {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    
                    export type definition<GPAnnotation> = {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    
                    export type implementation<GPAnnotation> = T.Implementation<GPAnnotation>
                }
                
                export type main<GPAnnotation> = {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }
                
                export namespace submodules {
                    
                    export namespace D {
                        
                        export namespace definition {
                            
                            export namespace api {
                                
                                export namespace imports {
                                    
                                    export namespace D {
                                        
                                        export type external<GPAnnotation> = string
                                        
                                        export type sibling<GPAnnotation> = string
                                    }
                                    
                                    export type D<GPAnnotation> = 
                                        | ['external', string]
                                        | ['sibling', string]
                                }
                                
                                export type imports<GPAnnotation> = pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                >
                                
                                export type root<GPAnnotation> = gapi.T.API<T.Annotation<GPAnnotation>>
                            }
                            
                            export type api<GPAnnotation> = {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                >
                                readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                            }
                            
                            export namespace glossary {
                                
                                export namespace imports {
                                    
                                    export namespace D {
                                        
                                        export type external<GPAnnotation> = string
                                        
                                        export namespace main {}
                                        
                                        export type main<GPAnnotation> = null
                                        
                                        export type sibling<GPAnnotation> = string
                                    }
                                    
                                    export type D<GPAnnotation> = 
                                        | ['external', string]
                                        | ['main', null]
                                        | ['sibling', string]
                                }
                                
                                export type imports<GPAnnotation> = pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                
                                export type root<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                            }
                            
                            export type glossary<GPAnnotation> = {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                            }
                        }
                        
                        export type definition<GPAnnotation> = {
                            readonly 'api': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                >
                                readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                            }
                            readonly 'glossary': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                            }
                        }
                        
                        export type implementation<GPAnnotation> = T.Implementation<GPAnnotation>
                    }
                    
                    export type D<GPAnnotation> = {
                        readonly 'definition': {
                            readonly 'api': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                >
                                readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                            }
                            readonly 'glossary': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                            }
                        }
                        readonly 'implementation': T.Implementation<GPAnnotation>
                    }
                }
                
                export type submodules<GPAnnotation> = pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }>
                
                export type test<GPAnnotation> = T.Test<GPAnnotation>
            }
            
            export type library<GPAnnotation> = {
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }>
                readonly 'test': T.Test<GPAnnotation>
            }
            
            export namespace resource {
                
                export namespace definition {
                    
                    export namespace api {
                        
                        export namespace imports {
                            
                            export type D<GPAnnotation> = string
                        }
                        
                        export type imports<GPAnnotation> = pt.Dictionary<string>
                        
                        export type root<GPAnnotation> = gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    
                    export type api<GPAnnotation> = {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    
                    export namespace glossary {
                        
                        export namespace imports {
                            
                            export type D<GPAnnotation> = string
                        }
                        
                        export type imports<GPAnnotation> = pt.Dictionary<string>
                        
                        export type root<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                    
                    export type glossary<GPAnnotation> = {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                }
                
                export type definition<GPAnnotation> = {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                }
                
                export namespace devDependencies {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = null
                }
                
                export type devDependencies<GPAnnotation> = pt.Dictionary<null>
                
                export namespace nativeDependencies {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = null
                }
                
                export type nativeDependencies<GPAnnotation> = pt.Dictionary<null>
                
                export type test<GPAnnotation> = T.Test<GPAnnotation>
            }
            
            export type resource<GPAnnotation> = {
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
                readonly 'test': T.Test<GPAnnotation>
            }
        }
        
        export type _ltype<GPAnnotation> = 
            | ['glossary', {
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                readonly 'imports': pt.Dictionary<string>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
                readonly 'test': T.Test<GPAnnotation>
            }]
    }
    
    export type Project<GPAnnotation> = {
        readonly 'author': string
        readonly 'dependencies': pt.Dictionary<null>
        readonly 'description': string
        readonly 'license': string
        readonly 'type': 
            | ['glossary', {
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                readonly 'imports': pt.Dictionary<string>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                            >
                            readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GPAnnotation>
                }>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gapi.T.API<T.Annotation<GPAnnotation>>
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<string>
                        readonly 'root': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
                readonly 'test': T.Test<GPAnnotation>
            }]
    }
    
    export namespace Test {
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GPAnnotation> = null
        }
        
        export type dependencies<GPAnnotation> = pt.Dictionary<null>
        
        export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
        
        export namespace imports {
            
            export type D<GPAnnotation> = string
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<string>
    }
    
    export type Test<GPAnnotation> = {
        readonly 'dependencies': pt.Dictionary<null>
        readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
        readonly 'imports': pt.Dictionary<string>
    }
}