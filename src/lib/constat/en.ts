// Mobile guide to the Quebec joint accident report (Constat amiable, GAA 2023
// form). French labels are the wording printed on the official form; the
// English is our own plain translation, not the wording of the official
// English form.
export const constat = {
  title: 'Joint Report Field Guide',
  description: 'A phone-friendly guide to the Quebec joint accident report (Constat amiable): what each field of the French form means and what to do at the scene.',
  heroSubtitle: 'Constat amiable d’accident automobile · field-by-field guide',
  emergency: 'If anyone is injured, even slightly, call 911 first.',
  notice: 'This page is a reference guide to help you read the official form. Fill in the official French or English form; if this guide differs from the French original, the official French text prevails.',
  nav: { scene: 'At the scene', form: 'Field guide', noForm: 'No form?', print: 'Print ahead' },

  sceneTitle: 'What to do at the scene',
  scene: [
    { title: 'Make sure everyone is safe', text: 'Check whether anyone is injured. If so, call 911 immediately.' },
    { title: 'Take photos', text: 'Before moving the vehicles, photograph their relative positions, the points of impact, the licence plates and the surroundings.' },
    { title: 'Move to a safe spot', text: 'Move the vehicles to the roadside or another safe place so they do not block traffic.' },
    { title: 'Exchange information', text: 'Exchange driver’s licence, vehicle registration and proof of insurance details with the other driver, and note their phone number.' },
    { title: 'Fill in the joint report', text: 'Complete it together with the other driver. Even if you disagree, each of you fills in your own part. Unless someone is injured or there is a serious dispute, you generally do not need to wait for the police.' },
    { title: 'Contact your insurer', text: 'Report the accident to your insurer or broker as soon as possible and send them the completed form.' }
  ],

  flowTitle: 'How the form is exchanged',
  flowIntro: 'One official form has two identical halves separated by a cut line (COUPEZ ICI). The official steps are:',
  flow: [
    'One of the drivers detaches the lower part of the joint report and gives it to the other driver involved in the accident.',
    'Each driver fills in section A, “Informations sur l’accident”, on their own form.',
    'Each driver hands their form to the other driver and asks them to fill in section B, “Informations sur l’autre véhicule impliqué”.',
    'Each driver then takes their own form back, keeping the information about the other vehicle.',
    'The drivers then notify their insurer or broker and send them the completed form without delay.'
  ],
  flowNote: 'In other words, section B holds the other party’s details: you write your details on their form, and they write theirs on yours.',

  formTitle: 'Field-by-field guide',
  formIntro: 'Fields are listed in the order of the official form. Bold text is the French printed on the form; blue text is its meaning.',
  purpose: {
    fr: 'Ce formulaire sert uniquement à identifier les parties en cause en vue d’accélérer le règlement du sinistre.',
    local: 'Printed on the form: this form serves only to identify the parties involved, in order to speed up the settlement of the claim.'
  },
  sections: [
    {
      fr: 'A. INFORMATIONS SUR L’ACCIDENT',
      local: 'A. Information about the accident',
      note: 'You fill this in yourself.',
      blocks: [
        {
          fields: [
            { fr: 'Date de l’accident', local: 'Date of the accident' },
            { fr: 'Heure', local: 'Time' },
            { fr: 'Lieu de l’accident (exemple : adresse / intersection / ville)', local: 'Place of the accident (e.g. address / intersection / city)' },
            { fr: 'Brève description de l’accident et des dommages', local: 'Brief description of the accident and the damage' },
            { fr: 'Témoin(s) s’il y a lieu : nom et téléphone', local: 'Witness(es), if any: name and phone number' }
          ]
        }
      ]
    },
    {
      fr: 'B. INFORMATIONS SUR L’AUTRE VÉHICULE IMPLIQUÉ',
      local: 'B. Information about the other vehicle involved',
      note: 'Faire remplir cette partie par L’AUTRE conducteur et la conserver pour vous. Have the OTHER driver fill in this part, and keep it.',
      blocks: [
        {
          fr: 'Conducteur du véhicule',
          local: 'Driver of the vehicle',
          fields: [
            { fr: 'Permis de conduire', local: 'Driver’s licence number', hint: 'Printed on the driver’s licence.' },
            { fr: 'Prénom', local: 'First name' },
            { fr: 'Nom', local: 'Last name' },
            { fr: 'Adresse', local: 'Address' },
            { fr: 'Ville', local: 'City' },
            { fr: 'Code postal', local: 'Postal code' },
            { fr: 'Courriel', local: 'Email' },
            { fr: 'Téléphone', local: 'Phone' }
          ]
        },
        {
          fr: 'Propriétaire du véhicule (ou locataire pour plus d’un an)',
          local: 'Owner of the vehicle (or lessee for more than one year)',
          fields: [
            { fr: 'Informations identiques au conducteur. Sinon compléter :', local: 'Same information as the driver (tick the box). Otherwise complete the fields below:' },
            { fr: 'Prénom', local: 'First name' },
            { fr: 'Nom', local: 'Last name' },
            { fr: 'Adresse', local: 'Address' },
            { fr: 'Ville', local: 'City' },
            { fr: 'Code postal', local: 'Postal code' },
            { fr: 'Courriel', local: 'Email' },
            { fr: 'Téléphone', local: 'Phone' }
          ]
        },
        {
          fr: 'Certificat d’immatriculation',
          local: 'Registration certificate',
          fields: [
            { fr: 'No de plaque', local: 'Licence plate number' },
            { fr: 'Marque du véhicule', local: 'Vehicle make' },
            { fr: 'Année', local: 'Year' }
          ]
        },
        {
          fr: 'Attestation d’assurance',
          local: 'Proof of insurance',
          fields: [
            { fr: 'Compagnie d’assurance', local: 'Insurance company' },
            { fr: 'No de police', local: 'Policy number' }
          ]
        }
      ]
    }
  ],

  noFormTitle: 'No paper form at hand?',
  noFormText: 'You can complete the official form online on your phone, or start by photographing and noting the information below.',
  onlineFr: 'Fill in online (French)',
  onlineEn: 'Fill in online (English)',
  checklistTitle: 'Photograph or note at least',
  checklist: [
    'The scene, the position of the vehicles and the damage',
    'The other driver’s licence',
    'The other vehicle’s registration certificate',
    'The other driver’s proof of insurance',
    'The other vehicle’s plate and the driver’s phone number',
    'Names and phone numbers of any witnesses'
  ],

  tipsTitle: 'Tips from Apollo Insurance',
  tips: [
    'Each vehicle involved needs its own report, and the information on both forms should match.',
    'Completing and signing the form only identifies the parties involved; it is not an admission of liability.',
    'If the other driver refuses to fill it in, you can still complete your own copy and record what happened truthfully.',
    'Once completed, send us a photo or scan of the form as soon as you can, so we can help you follow up with the insurer’s claims adjuster.',
    'If the accident happens outside business hours, contact us by text message or WeChat as soon as possible and send a copy of the report.'
  ],
  tipsNote: 'These are suggestions offered by Apollo Insurance as assistance. Claims are assessed and decided by the insurer’s claims adjuster.',

  printTitle: 'Better still: print it and keep it in the car',
  printText: 'You may have no signal or a dead battery when an accident happens. We suggest printing a blank official form now and keeping it in the car with your proof of insurance.',
  printCn: 'Chinese reference translation (PDF)',
  printFr: 'Official blank form in French (PDF)',

  contactTitle: 'Need help?',
  contactText: 'If language is a barrier when filling in the form or dealing with the insurer, contact us.',
  callJacques: 'Call Jacques Cao',
  wechat: 'Phone / WeChat: 514-601-5585',
  claimsLink: 'See the full claims process',

  disclaimer: 'This guide is for reference only; if it differs from the French original, the official French text prevails. Based on the official 2023 “Constat amiable d’accident automobile” form of the Groupement des assureurs automobiles (GAA), which holds the copyright to the official form.'
};
