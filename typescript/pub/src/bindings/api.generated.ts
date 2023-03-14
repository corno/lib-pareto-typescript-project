import * as pt from 'pareto-core-types'

import * as g_this from "../main/glossary"

export type generateProject = <Annotation>($c: g_this.C.GenerateProject<Annotation>) => void

export type API = {
    generateProject: generateProject
}