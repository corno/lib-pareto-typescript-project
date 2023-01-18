import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export namespace Nresolved {
    
    export namespace Ntypes {
        
        export type TContext = 
            | ['import', {}]
            | ['local', {}]
        
        export type TGlossary = {
            readonly 'callbacks': pt.Dictionary<{
                readonly 'context': TContext
                readonly 'data': TOptionalTypeReference
                readonly 'interface': MReference<TInterface>
            }>
            readonly 'functions': pt.Dictionary<{
                readonly 'async': boolean
                readonly 'data': TTypeReference
                readonly 'return value': TTypeReference
            }>
            readonly 'imports': pt.Dictionary<{}>
            readonly 'namespace': TNamespace
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'pipes': pt.Dictionary<{
                readonly 'in': TInterfaceReference
                readonly 'out': TInterfaceReference
            }>
        }
        
        export type TInterface = {
            readonly 'group': {
                readonly 'members': pt.Dictionary<TInterface>
            }
            readonly 'method': {
                readonly 'data': TOptionalTypeReference
                readonly 'interface': 
                    | ['null', {}]
                    | ['set', {
                        readonly 'interface': MReference<TInterface>
                    }]
            }
            readonly 'reference': TInterfaceReference
        }
        
        export type TInterfaceReference = {
            readonly 'context': TContext
            readonly 'interface': MReference<TInterface>
        }
        
        export type TNamespace = {
            readonly 'interfaces': pt.Dictionary<TInterface>
            readonly 'namespaces': pt.Dictionary<TNamespace>
            readonly 'templates': pt.Dictionary<{
                readonly 'parameters': pt.Dictionary<{}>
                readonly 'type': TType
            }>
            readonly 'types': pt.Dictionary<TType>
        }
        
        export type TOptionalTypeReference = 
            | ['not set', {}]
            | ['set', TTypeReference]
        
        export type TType = {}
        
        export type TTypeReference = {
            readonly 'context': TContext
            readonly 'namespaces': pt.Array<MReference<TNamespace>>
            readonly 'type': MReference<TType>
        }
    }
    
    export type TRoot = Ntypes.TGlossary
}

export namespace Nunresolved {
    
    export namespace Ntypes {
        
        export type TContext = 
            | ['import', {}]
            | ['local', {}]
        
        export type TGlossary = {
            readonly 'callbacks'?: pt.Dictionary<{
                readonly 'context'?: TContext
                readonly 'data'?: TOptionalTypeReference
                readonly 'interface'?: MReference<TInterface>
            }>
            readonly 'functions'?: pt.Dictionary<{
                readonly 'async'?: boolean
                readonly 'data'?: TTypeReference
                readonly 'return value'?: TTypeReference
            }>
            readonly 'imports'?: pt.Dictionary<{}>
            readonly 'namespace'?: TNamespace
            readonly 'parameters'?: pt.Dictionary<{}>
            readonly 'pipes'?: pt.Dictionary<{
                readonly 'in'?: TInterfaceReference
                readonly 'out'?: TInterfaceReference
            }>
        }
        
        export type TInterface = {
            readonly 'group'?: {
                readonly 'members'?: pt.Dictionary<TInterface>
            }
            readonly 'method'?: {
                readonly 'data'?: TOptionalTypeReference
                readonly 'interface'?: 
                    | ['null', {}]
                    | ['set', {
                        readonly 'interface'?: MReference<TInterface>
                    }]
            }
            readonly 'reference'?: TInterfaceReference
        }
        
        export type TInterfaceReference = {
            readonly 'context'?: TContext
            readonly 'interface'?: MReference<TInterface>
        }
        
        export type TNamespace = {
            readonly 'interfaces'?: pt.Dictionary<TInterface>
            readonly 'namespaces'?: pt.Dictionary<TNamespace>
            readonly 'templates'?: pt.Dictionary<{
                readonly 'parameters'?: pt.Dictionary<{}>
                readonly 'type'?: TType
            }>
            readonly 'types'?: pt.Dictionary<TType>
        }
        
        export type TOptionalTypeReference = 
            | ['not set', {}]
            | ['set', TTypeReference]
        
        export type TType = {}
        
        export type TTypeReference = {
            readonly 'context'?: TContext
            readonly 'namespaces'?: pt.Array<MReference<TNamespace>>
            readonly 'type'?: MReference<TType>
        }
    }
    
    export type TRoot = Ntypes.TGlossary
}

export type MReference<AReferencedType> = {
    readonly 'annotation'?: AAnnotation
    readonly 'referenced'?: AReferencedType
    readonly 'value': string
}

export type XSerialize = ($: TRoot, $i: mfp.ILine) => void