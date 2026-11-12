export interface LegalSection {
  id: string
  title: string
  items: string[]
}

export interface LegalDoc {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
  closing: string
}
