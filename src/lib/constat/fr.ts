// Mobile guide to the Quebec joint accident report (Constat amiable, GAA 2023
// form). The French page needs no translation of the fields, so `local` is
// left out on them and only the printed wording is shown.
export const constat = {
  title: 'Guide du constat amiable',
  description: 'Un guide pour téléphone du constat amiable d’accident automobile au Québec : quoi faire sur les lieux et comment remplir le formulaire.',
  heroSubtitle: 'Constat amiable d’accident automobile · guide pratique',
  emergency: 'Si quelqu’un est blessé, même légèrement, appelez d’abord le 911.',
  notice: 'Cette page est un guide de référence pour vous aider à remplir le formulaire officiel. En cas de divergence, le texte du formulaire officiel prévaut.',
  nav: { scene: 'Sur les lieux', form: 'Le formulaire', noForm: 'Pas de formulaire?', print: 'À imprimer' },

  sceneTitle: 'Quoi faire sur les lieux',
  scene: [
    { title: 'Assurez la sécurité', text: 'Vérifiez si quelqu’un est blessé. Si c’est le cas, appelez immédiatement le 911.' },
    { title: 'Prenez des photos', text: 'Avant de déplacer les véhicules, photographiez leur position, les points d’impact, les plaques et les lieux.' },
    { title: 'Mettez-vous en lieu sûr', text: 'Déplacez les véhicules sur l’accotement ou dans un endroit sûr pour ne pas nuire à la circulation.' },
    { title: 'Échangez vos renseignements', text: 'Échangez les renseignements du permis de conduire, du certificat d’immatriculation et de l’attestation d’assurance, et notez le téléphone de l’autre conducteur.' },
    { title: 'Remplissez le constat amiable', text: 'Remplissez-le avec l’autre conducteur. Même en cas de désaccord, chacun remplit sa partie. Sauf en cas de blessure ou de désaccord sérieux, il n’est généralement pas nécessaire d’attendre la police.' },
    { title: 'Communiquez avec votre assureur', text: 'Avisez votre assureur ou votre courtier dès que possible et faites-lui parvenir le formulaire rempli.' }
  ],

  flowTitle: 'Comment échanger le formulaire',
  flowIntro: 'Le formulaire officiel comporte deux moitiés identiques séparées par une ligne de coupe (COUPEZ ICI). Marche à suivre officielle :',
  flow: [
    'L’un des automobilistes détache la partie inférieure du Constat amiable et la remet à l’autre conducteur impliqué dans l’accident.',
    'Chaque automobiliste remplit la section A. Informations sur l’accident de son formulaire.',
    'Chaque automobiliste remet son formulaire à l’autre conducteur impliqué dans l’accident et lui demande de remplir la section B. Informations sur l’autre véhicule impliqué.',
    'Par la suite, chaque automobiliste récupère son formulaire afin de conserver les informations sur l’autre véhicule impliqué.',
    'Les automobilistes doivent ensuite aviser leur assureur ou leur courtier et leur faire parvenir sans délai le formulaire dûment rempli.'
  ],
  flowNote: 'Autrement dit, la section B contient les renseignements de l’autre partie : vous inscrivez les vôtres sur son formulaire, et elle inscrit les siens sur le vôtre.',

  formTitle: 'Les champs du formulaire',
  formIntro: 'Les champs sont présentés dans l’ordre du formulaire officiel.',
  purpose: {
    fr: 'Ce formulaire sert uniquement à identifier les parties en cause en vue d’accélérer le règlement du sinistre.',
    local: ''
  },
  sections: [
    {
      fr: 'A. INFORMATIONS SUR L’ACCIDENT',
      local: '',
      note: 'À remplir par vous-même.',
      blocks: [
        {
          fields: [
            { fr: 'Date de l’accident' },
            { fr: 'Heure' },
            { fr: 'Lieu de l’accident (exemple : adresse / intersection / ville)' },
            { fr: 'Brève description de l’accident et des dommages' },
            { fr: 'Témoin(s) s’il y a lieu : nom et téléphone' }
          ]
        }
      ]
    },
    {
      fr: 'B. INFORMATIONS SUR L’AUTRE VÉHICULE IMPLIQUÉ',
      local: '',
      note: 'Faire remplir cette partie par L’AUTRE conducteur et la conserver pour vous.',
      blocks: [
        {
          fr: 'Conducteur du véhicule',
          fields: [
            { fr: 'Permis de conduire', hint: 'Numéro inscrit sur le permis de conduire.' },
            { fr: 'Prénom' }, { fr: 'Nom' }, { fr: 'Adresse' }, { fr: 'Ville' },
            { fr: 'Code postal' }, { fr: 'Courriel' }, { fr: 'Téléphone' }
          ]
        },
        {
          fr: 'Propriétaire du véhicule (ou locataire pour plus d’un an)',
          fields: [
            { fr: 'Informations identiques au conducteur. Sinon compléter :' },
            { fr: 'Prénom' }, { fr: 'Nom' }, { fr: 'Adresse' }, { fr: 'Ville' },
            { fr: 'Code postal' }, { fr: 'Courriel' }, { fr: 'Téléphone' }
          ]
        },
        {
          fr: 'Certificat d’immatriculation',
          fields: [{ fr: 'No de plaque' }, { fr: 'Marque du véhicule' }, { fr: 'Année' }]
        },
        {
          fr: 'Attestation d’assurance',
          fields: [{ fr: 'Compagnie d’assurance' }, { fr: 'No de police' }]
        }
      ]
    }
  ],

  noFormTitle: 'Pas de formulaire papier sous la main?',
  noFormText: 'Vous pouvez remplir le formulaire officiel en ligne sur votre téléphone, ou commencer par photographier et noter les renseignements ci-dessous.',
  onlineFr: 'Remplir en ligne (français)',
  onlineEn: 'Remplir en ligne (anglais)',
  checklistTitle: 'À photographier ou à noter au minimum',
  checklist: [
    'Les lieux, la position des véhicules et les dommages',
    'Le permis de conduire de l’autre conducteur',
    'Le certificat d’immatriculation de l’autre véhicule',
    'L’attestation d’assurance de l’autre conducteur',
    'La plaque de l’autre véhicule et le téléphone du conducteur',
    'Le nom et le téléphone des témoins, s’il y a lieu'
  ],

  tipsTitle: 'Conseils d’Assurance Apollo',
  tips: [
    'Chaque véhicule impliqué doit avoir son propre constat, et les renseignements des deux formulaires doivent concorder.',
    'Remplir et signer le formulaire sert uniquement à identifier les parties en cause; ce n’est pas une reconnaissance de responsabilité.',
    'Si l’autre conducteur refuse de le remplir, vous pouvez tout de même remplir votre exemplaire et y consigner les faits tels qu’ils se sont produits.',
    'Une fois le formulaire rempli, envoyez-nous-en une photo ou une copie numérisée dès que possible, afin que nous puissions vous aider dans le suivi auprès de l’expert en sinistre de l’assureur.',
    'Si l’accident survient en dehors des heures d’ouverture, communiquez avec nous par texto ou WeChat dès que possible et envoyez une copie du constat.'
  ],
  tipsNote: 'Ces suggestions sont offertes par Assurance Apollo à titre d’assistance. L’évaluation et les décisions relatives au sinistre relèvent de l’expert en sinistre de l’assureur.',

  printTitle: 'Encore mieux : imprimez-le et gardez-le dans la voiture',
  printText: 'Au moment d’un accident, il se peut que vous n’ayez pas de réseau ou que votre téléphone soit déchargé. Nous vous suggérons d’imprimer dès maintenant un formulaire officiel vierge et de le garder dans la voiture avec votre attestation d’assurance.',
  printCn: 'Traduction de référence en chinois (PDF)',
  printFr: 'Formulaire officiel vierge (PDF)',

  contactTitle: 'Besoin d’aide?',
  contactText: 'Si la langue est un obstacle pour remplir le formulaire ou communiquer avec l’assureur, contactez-nous.',
  callJacques: 'Appeler Jacques Cao',
  wechat: 'Téléphone / WeChat : 514-601-5585',
  claimsLink: 'Voir le processus de réclamation complet',

  disclaimer: 'Ce guide est fourni à titre de référence seulement; en cas de divergence, le texte du formulaire officiel prévaut. D’après le formulaire officiel « Constat amiable d’accident automobile » 2023 du Groupement des assureurs automobiles (GAA), titulaire des droits d’auteur sur le formulaire officiel.'
};
