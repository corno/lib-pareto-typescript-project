import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace VReference {}
export type VReference<AReferencedType> = {}

export type MReference<AReferencedType> = VReference<AReferencedType>

export namespace GAccounting {
    
    export namespace PBankrekeningen {
        
        export namespace D {}
        export type D = {}
    }
    export type PBankrekeningen = pt.Dictionary<PBankrekeningen.D>
    
    export namespace PBeheer {
        
        export namespace PBalans {
            
            export namespace PGrootboekrekeningen {
                
                export namespace D {
                    
                    export namespace PHoofdcategorie {}
                    export type PHoofdcategorie = MReference<null>
                    
                    export namespace PSubcategorie {}
                    export type PSubcategorie = MReference<null>
                    
                    export namespace PZijde {
                        
                        export namespace OActiva {}
                        export type OActiva = {}
                        
                        export namespace OPassiva {}
                        export type OPassiva = {}
                    }
                    export type PZijde = 
                        | ['Activa', PZijde.OActiva]
                        | ['Passiva', PZijde.OPassiva]
                }
                export type D = {
                    readonly 'Hoofdcategorie': D.PHoofdcategorie
                    readonly 'Subcategorie': D.PSubcategorie
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PGrootboekrekeningen = pt.Dictionary<PGrootboekrekeningen.D>
            
            export namespace PHoofdcategorieen {
                
                export namespace D {
                    
                    export namespace PSubcategorieen {
                        
                        export namespace D {
                            
                            export namespace PHoofdcategorie__fiscus {}
                            export type PHoofdcategorie__fiscus = MReference<null>
                            
                            export namespace PSubcategorie__fiscus {}
                            export type PSubcategorie__fiscus = MReference<null>
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': D.PHoofdcategorie__fiscus
                            readonly 'Subcategorie fiscus': D.PSubcategorie__fiscus
                        }
                    }
                    export type PSubcategorieen = pt.Dictionary<PSubcategorieen.D>
                    
                    export namespace PZijde {
                        
                        export namespace OActiva {}
                        export type OActiva = {}
                        
                        export namespace OPassiva {}
                        export type OPassiva = {}
                    }
                    export type PZijde = 
                        | ['Activa', PZijde.OActiva]
                        | ['Passiva', PZijde.OPassiva]
                }
                export type D = {
                    readonly 'Subcategorieen': D.PSubcategorieen
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PHoofdcategorieen = pt.Dictionary<PHoofdcategorieen.D>
            
            export namespace PHoofdcategorieen__fiscus {
                
                export namespace D {
                    
                    export namespace PSubcategorieen {
                        
                        export namespace D {}
                        export type D = {}
                    }
                    export type PSubcategorieen = pt.Dictionary<PSubcategorieen.D>
                    
                    export namespace PZijde {
                        
                        export namespace OActiva {}
                        export type OActiva = {}
                        
                        export namespace OPassiva {}
                        export type OPassiva = {}
                    }
                    export type PZijde = 
                        | ['Activa', PZijde.OActiva]
                        | ['Passiva', PZijde.OPassiva]
                }
                export type D = {
                    readonly 'Subcategorieen': D.PSubcategorieen
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PHoofdcategorieen__fiscus = pt.Dictionary<PHoofdcategorieen__fiscus.D>
        }
        export type PBalans = {
            readonly 'Grootboekrekeningen': PBalans.PGrootboekrekeningen
            readonly 'Hoofdcategorieen': PBalans.PHoofdcategorieen
            readonly 'Hoofdcategorieen fiscus': PBalans.PHoofdcategorieen__fiscus
        }
        
        export namespace PBTW_micategorieen {
            
            export namespace D {
                
                export namespace PBTW_miheffing {
                    
                    export namespace OJa {}
                    export type OJa = {
                        readonly 'BTW-promillage': number
                    }
                    
                    export namespace ONee {}
                    export type ONee = {}
                }
                export type PBTW_miheffing = 
                    | ['Ja', PBTW_miheffing.OJa]
                    | ['Nee', PBTW_miheffing.ONee]
            }
            export type D = {
                readonly 'BTW-heffing': D.PBTW_miheffing
            }
        }
        export type PBTW_micategorieen = pt.Dictionary<PBTW_micategorieen.D>
        
        export namespace PGebruikers {
            
            export namespace D {}
            export type D = {
                readonly 'Volledige naam': string
            }
        }
        export type PGebruikers = pt.Dictionary<PGebruikers.D>
        
        export namespace PResultaat {
            
            export namespace PCorrectietypes__vennootschapsbelasting {
                
                export namespace D {}
                export type D = {}
            }
            export type PCorrectietypes__vennootschapsbelasting = pt.Dictionary<PCorrectietypes__vennootschapsbelasting.D>
            
            export namespace PGrootboekrekeningen {
                
                export namespace D {
                    
                    export namespace PHoofdcategorie {}
                    export type PHoofdcategorie = MReference<null>
                    
                    export namespace PSubcategorie {}
                    export type PSubcategorie = MReference<null>
                    
                    export namespace PZijde {
                        
                        export namespace OKosten {
                            
                            export namespace PCorrectie__op__vennootschapsbelasting {
                                
                                export namespace OJa {
                                    
                                    export namespace PCorrectietype {}
                                    export type PCorrectietype = MReference<null>
                                }
                                export type OJa = {
                                    readonly 'Correctietype': OJa.PCorrectietype
                                }
                                
                                export namespace ONee {}
                                export type ONee = {}
                            }
                            export type PCorrectie__op__vennootschapsbelasting = 
                                | ['Ja', PCorrectie__op__vennootschapsbelasting.OJa]
                                | ['Nee', PCorrectie__op__vennootschapsbelasting.ONee]
                        }
                        export type OKosten = {
                            readonly 'Correctie op vennootschapsbelasting': OKosten.PCorrectie__op__vennootschapsbelasting
                        }
                        
                        export namespace OOpbrengsten {}
                        export type OOpbrengsten = {}
                    }
                    export type PZijde = 
                        | ['Kosten', PZijde.OKosten]
                        | ['Opbrengsten', PZijde.OOpbrengsten]
                }
                export type D = {
                    readonly 'Hoofdcategorie': D.PHoofdcategorie
                    readonly 'Subcategorie': D.PSubcategorie
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PGrootboekrekeningen = pt.Dictionary<PGrootboekrekeningen.D>
            
            export namespace PHoofdcategorieen {
                
                export namespace D {
                    
                    export namespace PSubcategorieen {
                        
                        export namespace D {
                            
                            export namespace PHoofdcategorie__fiscus {}
                            export type PHoofdcategorie__fiscus = MReference<null>
                            
                            export namespace PSubcategorie__fiscus {}
                            export type PSubcategorie__fiscus = MReference<null>
                        }
                        export type D = {
                            readonly 'Hoofdcategorie fiscus': D.PHoofdcategorie__fiscus
                            readonly 'Subcategorie fiscus': D.PSubcategorie__fiscus
                        }
                    }
                    export type PSubcategorieen = pt.Dictionary<PSubcategorieen.D>
                    
                    export namespace PZijde {
                        
                        export namespace OKosten {}
                        export type OKosten = {}
                        
                        export namespace OOpbrengsten {}
                        export type OOpbrengsten = {}
                    }
                    export type PZijde = 
                        | ['Kosten', PZijde.OKosten]
                        | ['Opbrengsten', PZijde.OOpbrengsten]
                }
                export type D = {
                    readonly 'Subcategorieen': D.PSubcategorieen
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PHoofdcategorieen = pt.Dictionary<PHoofdcategorieen.D>
            
            export namespace PHoofdcategorieen__fiscus {
                
                export namespace D {
                    
                    export namespace PSubcategorieen {
                        
                        export namespace D {}
                        export type D = {}
                    }
                    export type PSubcategorieen = pt.Dictionary<PSubcategorieen.D>
                    
                    export namespace PZijde {
                        
                        export namespace OKosten {}
                        export type OKosten = {}
                        
                        export namespace OOpbrengsten {}
                        export type OOpbrengsten = {}
                    }
                    export type PZijde = 
                        | ['Kosten', PZijde.OKosten]
                        | ['Opbrengsten', PZijde.OOpbrengsten]
                }
                export type D = {
                    readonly 'Subcategorieen': D.PSubcategorieen
                    readonly 'Zijde': D.PZijde
                }
            }
            export type PHoofdcategorieen__fiscus = pt.Dictionary<PHoofdcategorieen__fiscus.D>
        }
        export type PResultaat = {
            readonly 'Correctietypes vennootschapsbelasting': PResultaat.PCorrectietypes__vennootschapsbelasting
            readonly 'Grootboekrekeningen': PResultaat.PGrootboekrekeningen
            readonly 'Hoofdcategorieen': PResultaat.PHoofdcategorieen
            readonly 'Hoofdcategorieen fiscus': PResultaat.PHoofdcategorieen__fiscus
        }
    }
    export type PBeheer = {
        readonly 'Balans': PBeheer.PBalans
        readonly 'BTW-categorieen': PBeheer.PBTW_micategorieen
        readonly 'Gebruikers': PBeheer.PGebruikers
        readonly 'Resultaat': PBeheer.PResultaat
    }
    
    export namespace PInformele__rekeningen {
        
        export namespace D {}
        export type D = {}
    }
    export type PInformele__rekeningen = pt.Dictionary<PInformele__rekeningen.D>
    
    export namespace PKlanten {
        
        export namespace D {
            
            export namespace PLicentieovereenkomsten {
                
                export namespace D {
                    
                    export namespace PPeriodes {
                        
                        export namespace D {}
                        export type D = {
                            readonly 'Bedrag': number
                        }
                    }
                    export type PPeriodes = pt.Dictionary<PPeriodes.D>
                }
                export type D = {
                    readonly 'Periodes': D.PPeriodes
                }
            }
            export type PLicentieovereenkomsten = pt.Dictionary<PLicentieovereenkomsten.D>
            
            export namespace PProjecten {
                
                export namespace D {
                    
                    export namespace POffertes {
                        
                        export namespace D {
                            
                            export namespace POpbrengsten {
                                
                                export namespace D {
                                    
                                    export namespace PType {
                                        
                                        export namespace OProject {}
                                        export type OProject = {
                                            readonly 'Bedrag': number
                                            readonly 'Betaaldatum': number
                                        }
                                    }
                                    export type PType = 
                                        | ['Project', PType.OProject]
                                }
                                export type D = {
                                    readonly 'Type': D.PType
                                }
                            }
                            export type POpbrengsten = pt.Dictionary<POpbrengsten.D>
                        }
                        export type D = {
                            readonly 'Opbrengsten': D.POpbrengsten
                        }
                    }
                    export type POffertes = pt.Dictionary<POffertes.D>
                }
                export type D = {
                    readonly 'Offertes': D.POffertes
                }
            }
            export type PProjecten = pt.Dictionary<PProjecten.D>
        }
        export type D = {
            readonly 'Licentieovereenkomsten': D.PLicentieovereenkomsten
            readonly 'Projecten': D.PProjecten
        }
    }
    export type PKlanten = pt.Dictionary<PKlanten.D>
    
    export namespace PLeveranciers {
        
        export namespace D {}
        export type D = {}
    }
    export type PLeveranciers = pt.Dictionary<PLeveranciers.D>
    
    export namespace PMedewerkers {
        
        export namespace D {}
        export type D = {}
    }
    export type PMedewerkers = pt.Dictionary<PMedewerkers.D>
}
export type GAccounting = {
    readonly 'Bankrekeningen': GAccounting.PBankrekeningen
    readonly 'Beheer': GAccounting.PBeheer
    readonly 'Informele rekeningen': GAccounting.PInformele__rekeningen
    readonly 'Jaren': UJaren
    readonly 'Klanten': GAccounting.PKlanten
    readonly 'Leveranciers': GAccounting.PLeveranciers
    readonly 'Medewerkers': GAccounting.PMedewerkers
}
export type UAccounting = GAccounting

export namespace GAfhandeling {
    
    export namespace OBTW_miperiode {
        
        export namespace PBTW_miperiode {}
        export type PBTW_miperiode = MReference<null>
        
        export namespace PJaar {}
        export type PJaar = MReference<null>
    }
    export type OBTW_miperiode = {
        readonly 'BTW-periode': OBTW_miperiode.PBTW_miperiode
        readonly 'Jaar': OBTW_miperiode.PJaar
    }
    
    export namespace OInformele__rekening {
        
        export namespace PInformele__rekening {}
        export type PInformele__rekening = MReference<null>
    }
    export type OInformele__rekening = {
        readonly 'Informele rekening': OInformele__rekening.PInformele__rekening
    }
    
    export namespace OInkoop {
        
        export namespace PInkoop {}
        export type PInkoop = MReference<null>
        
        export namespace PJaar {}
        export type PJaar = MReference<null>
    }
    export type OInkoop = {
        readonly 'Inkoop': OInkoop.PInkoop
        readonly 'Jaar': OInkoop.PJaar
    }
    
    export namespace OVerkoop {
        
        export namespace PInkoop {}
        export type PInkoop = MReference<null>
        
        export namespace PJaar {}
        export type PJaar = MReference<null>
    }
    export type OVerkoop = {
        readonly 'Inkoop': OVerkoop.PInkoop
        readonly 'Jaar': OVerkoop.PJaar
    }
    
    export namespace OVerrekenpost {
        
        export namespace PVerrekenpost {}
        export type PVerrekenpost = MReference<null>
    }
    export type OVerrekenpost = {
        readonly 'Verrekenpost': OVerrekenpost.PVerrekenpost
    }
}
export type GAfhandeling = 
    | ['BTW-periode', GAfhandeling.OBTW_miperiode]
    | ['Informele rekening', GAfhandeling.OInformele__rekening]
    | ['Inkoop', GAfhandeling.OInkoop]
    | ['Verkoop', GAfhandeling.OVerkoop]
    | ['Verrekenpost', GAfhandeling.OVerrekenpost]
export type UAfhandeling = GAfhandeling

export namespace GInformele__Rekeningen {
    
    export namespace D {
        
        export namespace PGrootboekrekening {}
        export type PGrootboekrekening = MReference<null>
        
        export namespace PNieuw {
            
            export namespace OJa {}
            export type OJa = {}
            
            export namespace ONee {
                
                export namespace PJaar {}
                export type PJaar = MReference<null>
                
                export namespace PRekening {}
                export type PRekening = MReference<null>
            }
            export type ONee = {
                readonly 'Jaar': ONee.PJaar
                readonly 'Rekening': ONee.PRekening
            }
        }
        export type PNieuw = 
            | ['Ja', PNieuw.OJa]
            | ['Nee', PNieuw.ONee]
    }
    export type D = {
        readonly 'Beginsaldo': number
        readonly 'Grootboekrekening': D.PGrootboekrekening
        readonly 'Nieuw': D.PNieuw
    }
}
export type GInformele__Rekeningen = pt.Dictionary<GInformele__Rekeningen.D>
export type UInformele__Rekeningen = GInformele__Rekeningen

export namespace GJaren {
    
    export namespace D {
        
        export namespace PAfgesloten {
            
            export namespace OJa {}
            export type OJa = {}
            
            export namespace ONee {}
            export type ONee = {}
        }
        export type PAfgesloten = 
            | ['Ja', PAfgesloten.OJa]
            | ['Nee', PAfgesloten.ONee]
        
        export namespace PBalans__grootboekrekeningen {
            
            export namespace D {
                
                export namespace PType {
                    
                    export namespace OBankrekening {}
                    export type OBankrekening = {}
                    
                    export namespace OInformele__rekening {}
                    export type OInformele__rekening = {}
                    
                    export namespace OOverig {}
                    export type OOverig = {}
                }
                export type PType = 
                    | ['Bankrekening', PType.OBankrekening]
                    | ['Informele rekening', PType.OInformele__rekening]
                    | ['Overig', PType.OOverig]
            }
            export type D = {
                readonly 'Type': D.PType
            }
        }
        export type PBalans__grootboekrekeningen = pt.Dictionary<PBalans__grootboekrekeningen.D>
        
        export namespace PBankrekeningen {
            
            export namespace D {
                
                export namespace PGrootboekrekening {}
                export type PGrootboekrekening = MReference<null>
                
                export namespace PMutaties {
                    
                    export namespace D {
                        
                        export namespace PStatus {
                            
                            export namespace ONog__te__verwerken {}
                            export type ONog__te__verwerken = {}
                            
                            export namespace OVerwerkt {}
                            export type OVerwerkt = {
                                readonly 'Afhandeling': UAfhandeling
                            }
                        }
                        export type PStatus = 
                            | ['Nog te verwerken', PStatus.ONog__te__verwerken]
                            | ['Verwerkt', PStatus.OVerwerkt]
                    }
                    export type D = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Omschrijving': string
                        readonly 'Status': D.PStatus
                    }
                }
                export type PMutaties = pt.Dictionary<PMutaties.D>
                
                export namespace PNieuw {
                    
                    export namespace OJa {}
                    export type OJa = {}
                    
                    export namespace ONee {
                        
                        export namespace PJaar {}
                        export type PJaar = MReference<null>
                        
                        export namespace PRekening {}
                        export type PRekening = MReference<null>
                    }
                    export type ONee = {
                        readonly 'Jaar': ONee.PJaar
                        readonly 'Rekening': ONee.PRekening
                    }
                }
                export type PNieuw = 
                    | ['Ja', PNieuw.OJa]
                    | ['Nee', PNieuw.ONee]
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': D.PGrootboekrekening
                readonly 'Mutaties': D.PMutaties
                readonly 'Nieuw': D.PNieuw
            }
        }
        export type PBankrekeningen = pt.Dictionary<PBankrekeningen.D>
        
        export namespace PBTW__periodes {
            
            export namespace D {
                
                export namespace P1_pe__BTW_micategorieen {
                    
                    export namespace D {}
                    export type D = {}
                }
                export type P1_pe__BTW_micategorieen = pt.Dictionary<P1_pe__BTW_micategorieen.D>
                
                export namespace PDocumenten {
                    
                    export namespace D {}
                    export type D = {
                        readonly 'Bestand': string
                    }
                }
                export type PDocumenten = pt.Dictionary<PDocumenten.D>
                
                export namespace PStatus {
                    
                    export namespace OAangegeven {}
                    export type OAangegeven = {
                        readonly 'Afronding': number
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                    }
                    
                    export namespace OOpenstaand {}
                    export type OOpenstaand = {}
                }
                export type PStatus = 
                    | ['Aangegeven', PStatus.OAangegeven]
                    | ['Openstaand', PStatus.OOpenstaand]
            }
            export type D = {
                readonly '1. BTW-categorieen': D.P1_pe__BTW_micategorieen
                readonly 'Documenten': D.PDocumenten
                readonly 'Omschrijving': string
                readonly 'Status': D.PStatus
            }
        }
        export type PBTW__periodes = pt.Dictionary<PBTW__periodes.D>
        
        export namespace PEerste__boekjaar {
            
            export namespace OJa {}
            export type OJa = {}
            
            export namespace ONee {
                
                export namespace PVorig__boekjaar {}
                export type PVorig__boekjaar = MReference<null>
            }
            export type ONee = {
                readonly 'Vorig boekjaar': ONee.PVorig__boekjaar
            }
        }
        export type PEerste__boekjaar = 
            | ['Ja', PEerste__boekjaar.OJa]
            | ['Nee', PEerste__boekjaar.ONee]
        
        export namespace PGrootboek__BTW__periode {}
        export type PGrootboek__BTW__periode = MReference<null>
        
        export namespace PGrootboek__inkoop__saldo {}
        export type PGrootboek__inkoop__saldo = MReference<null>
        
        export namespace PGrootboek__verkoop__saldo {}
        export type PGrootboek__verkoop__saldo = MReference<null>
        
        export namespace PGrootboekrekening__voor__BTW__afrondingen {}
        export type PGrootboekrekening__voor__BTW__afrondingen = MReference<null>
        
        export namespace PGrootboekrekening__voor__nog__aan__te__geven__BTW {}
        export type PGrootboekrekening__voor__nog__aan__te__geven__BTW = MReference<null>
        
        export namespace PGrootboekrekening__voor__resultaat__dit__jaar {}
        export type PGrootboekrekening__voor__resultaat__dit__jaar = MReference<null>
        
        export namespace PGrootboekrekening__voor__winstreserve {}
        export type PGrootboekrekening__voor__winstreserve = MReference<null>
        
        export namespace PInkopen {
            
            export namespace D {
                
                export namespace PAfhandeling {
                    
                    export namespace OMutaties {}
                    export type OMutaties = {}
                    
                    export namespace ONog__te__betalen {}
                    export type ONog__te__betalen = {
                        readonly 'Betalingstermijn': number
                    }
                    
                    export namespace ORekening__courant {
                        
                        export namespace PRekening__courant {}
                        export type PRekening__courant = MReference<null>
                    }
                    export type ORekening__courant = {
                        readonly 'Rekening courant': ORekening__courant.PRekening__courant
                    }
                }
                export type PAfhandeling = 
                    | ['Mutaties', PAfhandeling.OMutaties]
                    | ['Nog te betalen', PAfhandeling.ONog__te__betalen]
                    | ['Rekening courant', PAfhandeling.ORekening__courant]
                
                export namespace PBrondocument {
                    
                    export namespace ONiet__van__toepassing {}
                    export type ONiet__van__toepassing = {}
                    
                    export namespace ONog__toevoegen {}
                    export type ONog__toevoegen = {}
                    
                    export namespace OOntbreekt {}
                    export type OOntbreekt = {}
                    
                    export namespace OToegevoegd {}
                    export type OToegevoegd = {
                        readonly 'Document': string
                    }
                }
                export type PBrondocument = 
                    | ['Niet van toepassing', PBrondocument.ONiet__van__toepassing]
                    | ['Nog toevoegen', PBrondocument.ONog__toevoegen]
                    | ['Ontbreekt', PBrondocument.OOntbreekt]
                    | ['Toegevoegd', PBrondocument.OToegevoegd]
                
                export namespace PBTW_miregime {
                    
                    export namespace OBinnenland__heffing__verlegd {
                        
                        export namespace PBTW_miperiode {}
                        export type PBTW_miperiode = MReference<null>
                    }
                    export type OBinnenland__heffing__verlegd = {
                        readonly 'BTW-periode': OBinnenland__heffing__verlegd.PBTW_miperiode
                    }
                    
                    export namespace OGeen__BTW__van__toepassing {
                        
                        export namespace PBTW_miperiode {}
                        export type PBTW_miperiode = MReference<null>
                    }
                    export type OGeen__BTW__van__toepassing = {
                        readonly 'BTW-periode': OGeen__BTW__van__toepassing.PBTW_miperiode
                    }
                    
                    export namespace OImport__van__buiten__de__EU {
                        
                        export namespace PBTW_miperiode {}
                        export type PBTW_miperiode = MReference<null>
                    }
                    export type OImport__van__buiten__de__EU = {
                        readonly 'BTW-periode': OImport__van__buiten__de__EU.PBTW_miperiode
                    }
                    
                    export namespace OIntracommunautair {
                        
                        export namespace PBTW_miperiode {}
                        export type PBTW_miperiode = MReference<null>
                    }
                    export type OIntracommunautair = {
                        readonly 'BTW-periode': OIntracommunautair.PBTW_miperiode
                    }
                    
                    export namespace OStandaard {
                        
                        export namespace PBTW_miperiode {}
                        export type PBTW_miperiode = MReference<null>
                    }
                    export type OStandaard = {
                        readonly 'BTW-periode': OStandaard.PBTW_miperiode
                    }
                }
                export type PBTW_miregime = 
                    | ['Binnenland heffing verlegd', PBTW_miregime.OBinnenland__heffing__verlegd]
                    | ['Geen BTW van toepassing', PBTW_miregime.OGeen__BTW__van__toepassing]
                    | ['Import van buiten de EU', PBTW_miregime.OImport__van__buiten__de__EU]
                    | ['Intracommunautair', PBTW_miregime.OIntracommunautair]
                    | ['Standaard', PBTW_miregime.OStandaard]
                
                export namespace PRegels {
                    
                    export namespace D {
                        
                        export namespace PBedrag {
                            
                            export namespace OBekend {}
                            export type OBekend = {
                                readonly 'Bedrag inclusief BTW': number
                                readonly 'BTW': number
                            }
                            
                            export namespace ONog__niet__bekend {}
                            export type ONog__niet__bekend = {
                                readonly 'Aantekeningen': string
                            }
                        }
                        export type PBedrag = 
                            | ['Bekend', PBedrag.OBekend]
                            | ['Nog niet bekend', PBedrag.ONog__niet__bekend]
                        
                        export namespace PType {
                            
                            export namespace OBalans {
                                
                                export namespace PBalans__item {}
                                export type PBalans__item = MReference<null>
                            }
                            export type OBalans = {
                                readonly 'Balans item': OBalans.PBalans__item
                            }
                            
                            export namespace OKosten {
                                
                                export namespace PGrootboekrekening {}
                                export type PGrootboekrekening = MReference<null>
                            }
                            export type OKosten = {
                                readonly 'Grootboekrekening': OKosten.PGrootboekrekening
                            }
                        }
                        export type PType = 
                            | ['Balans', PType.OBalans]
                            | ['Kosten', PType.OKosten]
                    }
                    export type D = {
                        readonly 'Bedrag': D.PBedrag
                        readonly 'Omschrijving': string
                        readonly 'Type': D.PType
                    }
                }
                export type PRegels = pt.Dictionary<PRegels.D>
                
                export namespace PType {
                    
                    export namespace OBonnetje {}
                    export type OBonnetje = {}
                    
                    export namespace OInkoop___pomet__crediteur_pc {
                        
                        export namespace PCrediteur {}
                        export type PCrediteur = MReference<null>
                    }
                    export type OInkoop___pomet__crediteur_pc = {
                        readonly 'Crediteur': OInkoop___pomet__crediteur_pc.PCrediteur
                        readonly 'Factuurnummer': string
                    }
                    
                    export namespace OLoonheffing {
                        
                        export namespace PRonde {}
                        export type PRonde = MReference<null>
                    }
                    export type OLoonheffing = {
                        readonly 'Ronde': OLoonheffing.PRonde
                    }
                    
                    export namespace OSalaris {
                        
                        export namespace PMedewerker {}
                        export type PMedewerker = MReference<null>
                        
                        export namespace PRonde {}
                        export type PRonde = MReference<null>
                    }
                    export type OSalaris = {
                        readonly 'Medewerker': OSalaris.PMedewerker
                        readonly 'Ronde': OSalaris.PRonde
                    }
                    
                    export namespace OWBSO {
                        
                        export namespace PRonde {}
                        export type PRonde = MReference<null>
                    }
                    export type OWBSO = {
                        readonly 'Ronde': OWBSO.PRonde
                    }
                }
                export type PType = 
                    | ['Bonnetje', PType.OBonnetje]
                    | ['Inkoop (met crediteur)', PType.OInkoop___pomet__crediteur_pc]
                    | ['Loonheffing', PType.OLoonheffing]
                    | ['Salaris', PType.OSalaris]
                    | ['WBSO', PType.OWBSO]
            }
            export type D = {
                readonly 'Afhandeling': D.PAfhandeling
                readonly 'Brondocument': D.PBrondocument
                readonly 'BTW-regime': D.PBTW_miregime
                readonly 'Datum': number
                readonly 'Regels': D.PRegels
                readonly 'Type': D.PType
            }
        }
        export type PInkopen = pt.Dictionary<PInkopen.D>
        
        export namespace POverige__balans__items {
            
            export namespace D {
                
                export namespace PGrootboekrekening {}
                export type PGrootboekrekening = MReference<null>
                
                export namespace PMemoriaal__boekingen {
                    
                    export namespace D {
                        
                        export namespace PGrootboekrekening {}
                        export type PGrootboekrekening = MReference<null>
                    }
                    export type D = {
                        readonly 'Bedrag': number
                        readonly 'Datum': number
                        readonly 'Grootboekrekening': D.PGrootboekrekening
                        readonly 'Omschrijving': string
                    }
                }
                export type PMemoriaal__boekingen = pt.Dictionary<PMemoriaal__boekingen.D>
                
                export namespace PNieuw {
                    
                    export namespace OJa {}
                    export type OJa = {}
                    
                    export namespace ONee {
                        
                        export namespace PBalans__item {}
                        export type PBalans__item = MReference<null>
                        
                        export namespace PJaar {}
                        export type PJaar = MReference<null>
                    }
                    export type ONee = {
                        readonly 'Balans item': ONee.PBalans__item
                        readonly 'Jaar': ONee.PJaar
                    }
                }
                export type PNieuw = 
                    | ['Ja', PNieuw.OJa]
                    | ['Nee', PNieuw.ONee]
            }
            export type D = {
                readonly 'Beginsaldo': number
                readonly 'Grootboekrekening': D.PGrootboekrekening
                readonly 'Memoriaal boekingen': D.PMemoriaal__boekingen
                readonly 'Nieuw': D.PNieuw
            }
        }
        export type POverige__balans__items = pt.Dictionary<POverige__balans__items.D>
        
        export namespace PResultaat__grootboekrekeningen {
            
            export namespace D {}
            export type D = {}
        }
        export type PResultaat__grootboekrekeningen = pt.Dictionary<PResultaat__grootboekrekeningen.D>
        
        export namespace PSalarisrondes {
            
            export namespace D {}
            export type D = {}
        }
        export type PSalarisrondes = pt.Dictionary<PSalarisrondes.D>
        
        export namespace PVerkopen {
            
            export namespace D {
                
                export namespace PAfhandeling {
                    
                    export namespace OMutaties {}
                    export type OMutaties = {}
                    
                    export namespace ORekening__courant {
                        
                        export namespace PRekening__courant {}
                        export type PRekening__courant = MReference<null>
                    }
                    export type ORekening__courant = {
                        readonly 'Rekening courant': ORekening__courant.PRekening__courant
                    }
                }
                export type PAfhandeling = 
                    | ['Mutaties', PAfhandeling.OMutaties]
                    | ['Rekening courant', PAfhandeling.ORekening__courant]
                
                export namespace PBrondocument {
                    
                    export namespace ONog__toevoegen {}
                    export type ONog__toevoegen = {}
                    
                    export namespace OToegevoegd {}
                    export type OToegevoegd = {
                        readonly 'Document': string
                    }
                }
                export type PBrondocument = 
                    | ['Nog toevoegen', PBrondocument.ONog__toevoegen]
                    | ['Toegevoegd', PBrondocument.OToegevoegd]
                
                export namespace PBTW_miperiode {}
                export type PBTW_miperiode = MReference<null>
                
                export namespace PContracttype {
                    
                    export namespace OLicentieovereenkomst {
                        
                        export namespace POvereenkomst {}
                        export type POvereenkomst = MReference<null>
                    }
                    export type OLicentieovereenkomst = {
                        readonly 'Overeenkomst': OLicentieovereenkomst.POvereenkomst
                    }
                    
                    export namespace OProject {
                        
                        export namespace POfferte {}
                        export type POfferte = MReference<null>
                        
                        export namespace PProject {}
                        export type PProject = MReference<null>
                    }
                    export type OProject = {
                        readonly 'Offerte': OProject.POfferte
                        readonly 'Project': OProject.PProject
                    }
                }
                export type PContracttype = 
                    | ['Licentieovereenkomst', PContracttype.OLicentieovereenkomst]
                    | ['Project', PContracttype.OProject]
                
                export namespace PDebiteur {}
                export type PDebiteur = MReference<null>
                
                export namespace PRegels {
                    
                    export namespace D {
                        
                        export namespace PBTW_miregime {
                            
                            export namespace OBinnenland__heffing__verlegd {}
                            export type OBinnenland__heffing__verlegd = {}
                            
                            export namespace OExport__buiten__de__EU {}
                            export type OExport__buiten__de__EU = {}
                            
                            export namespace OInstallatie__of__afstandsverkopen__binnen__de__EU {}
                            export type OInstallatie__of__afstandsverkopen__binnen__de__EU = {}
                            
                            export namespace OIntracommunautair {}
                            export type OIntracommunautair = {}
                            
                            export namespace OStandaard {
                                
                                export namespace PBTW_micateogrie {}
                                export type PBTW_micateogrie = MReference<null>
                            }
                            export type OStandaard = {
                                readonly 'BTW-cateogrie': OStandaard.PBTW_micateogrie
                            }
                        }
                        export type PBTW_miregime = 
                            | ['Binnenland heffing verlegd', PBTW_miregime.OBinnenland__heffing__verlegd]
                            | ['Export buiten de EU', PBTW_miregime.OExport__buiten__de__EU]
                            | ['Installatie of afstandsverkopen binnen de EU', PBTW_miregime.OInstallatie__of__afstandsverkopen__binnen__de__EU]
                            | ['Intracommunautair', PBTW_miregime.OIntracommunautair]
                            | ['Standaard', PBTW_miregime.OStandaard]
                        
                        export namespace PContracttype {
                            
                            export namespace OLicentieovereenkomst {
                                
                                export namespace PPeriode {}
                                export type PPeriode = MReference<null>
                            }
                            export type OLicentieovereenkomst = {
                                readonly 'Periode': OLicentieovereenkomst.PPeriode
                            }
                            
                            export namespace OLos {}
                            export type OLos = {}
                            
                            export namespace OProject {
                                
                                export namespace POpbrengst {}
                                export type POpbrengst = MReference<null>
                            }
                            export type OProject = {
                                readonly 'Opbrengst': OProject.POpbrengst
                            }
                        }
                        export type PContracttype = 
                            | ['Licentieovereenkomst', PContracttype.OLicentieovereenkomst]
                            | ['Los', PContracttype.OLos]
                            | ['Project', PContracttype.OProject]
                        
                        export namespace PType {
                            
                            export namespace OBalans {
                                
                                export namespace PBalans__item {}
                                export type PBalans__item = MReference<null>
                            }
                            export type OBalans = {
                                readonly 'Balans item': OBalans.PBalans__item
                            }
                            
                            export namespace OOpbrengsten {
                                
                                export namespace PGrootboekrekening {}
                                export type PGrootboekrekening = MReference<null>
                            }
                            export type OOpbrengsten = {
                                readonly 'Grootboekrekening': OOpbrengsten.PGrootboekrekening
                            }
                        }
                        export type PType = 
                            | ['Balans', PType.OBalans]
                            | ['Opbrengsten', PType.OOpbrengsten]
                    }
                    export type D = {
                        readonly 'Bedrag exclusief BTW': number
                        readonly 'BTW-regime': D.PBTW_miregime
                        readonly 'Contracttype': D.PContracttype
                        readonly 'Omschrijving': string
                        readonly 'Type': D.PType
                    }
                }
                export type PRegels = pt.Dictionary<PRegels.D>
            }
            export type D = {
                readonly 'Afhandeling': D.PAfhandeling
                readonly 'Betalingstermijn': number
                readonly 'Brondocument': D.PBrondocument
                readonly 'BTW-periode': D.PBTW_miperiode
                readonly 'Contracttype': D.PContracttype
                readonly 'Debiteur': D.PDebiteur
                readonly 'Regels': D.PRegels
            }
        }
        export type PVerkopen = pt.Dictionary<PVerkopen.D>
        
        export namespace PVerrekenposten {
            
            export namespace D {
                
                export namespace PMutaties {
                    
                    export namespace D {}
                    export type D = {
                        readonly 'Afhandeling': UAfhandeling
                        readonly 'Bedrag': number
                    }
                }
                export type PMutaties = pt.Dictionary<PMutaties.D>
            }
            export type D = {
                readonly 'Mutaties': D.PMutaties
            }
        }
        export type PVerrekenposten = pt.Dictionary<PVerrekenposten.D>
    }
    export type D = {
        readonly 'Afgesloten': D.PAfgesloten
        readonly 'Balans grootboekrekeningen': D.PBalans__grootboekrekeningen
        readonly 'Bankrekeningen': D.PBankrekeningen
        readonly 'Beginsaldo nog aan te geven BTW': number
        readonly 'Beginsaldo Winstreserve': number
        readonly 'BTW periodes': D.PBTW__periodes
        readonly 'Eerste boekjaar': D.PEerste__boekjaar
        readonly 'Grootboek BTW periode': D.PGrootboek__BTW__periode
        readonly 'Grootboek inkoop saldo': D.PGrootboek__inkoop__saldo
        readonly 'Grootboek verkoop saldo': D.PGrootboek__verkoop__saldo
        readonly 'Grootboekrekening voor BTW afrondingen': D.PGrootboekrekening__voor__BTW__afrondingen
        readonly 'Grootboekrekening voor nog aan te geven BTW': D.PGrootboekrekening__voor__nog__aan__te__geven__BTW
        readonly 'Grootboekrekening voor resultaat dit jaar': D.PGrootboekrekening__voor__resultaat__dit__jaar
        readonly 'Grootboekrekening voor winstreserve': D.PGrootboekrekening__voor__winstreserve
        readonly 'Informele rekeningen': UInformele__Rekeningen
        readonly 'Inkopen': D.PInkopen
        readonly 'Overige balans items': D.POverige__balans__items
        readonly 'Resultaat grootboekrekeningen': D.PResultaat__grootboekrekeningen
        readonly 'Salarisrondes': D.PSalarisrondes
        readonly 'Startdatum boekjaar': number
        readonly 'Verkopen': D.PVerkopen
        readonly 'Verrekenposten': D.PVerrekenposten
    }
}
export type GJaren = pt.Dictionary<GJaren.D>
export type UJaren = GJaren