// Mobile guide to the Quebec joint accident report (Constat amiable, GAA 2023
// form). French labels are the wording printed on the official form.
export const constat = {
  title: '事故聯合報告單 · 手機對照表',
  description: '魁北克車禍事故聯合報告單（Constat amiable）逐欄中文對照：手裡拿著法語表格，用手機查每一欄的意思，以及事故現場該做什麼。',
  heroSubtitle: 'Constat amiable d’accident automobile · 逐欄中文對照',
  emergency: '如有人員受傷，即使傷勢輕微，也請先撥打 911。',
  notice: '本頁是官方表格的中文參考對照，幫助您看懂每一欄。請在官方法語或英語表格上填寫；如中文與法語原文有出入，以法語官方原文為準。',
  nav: { scene: '現場步驟', form: '逐欄對照', noForm: '沒帶表格', print: '打印備用' },

  sceneTitle: '事故現場怎麼做',
  scene: [
    { title: '確保安全', text: '檢查有無人員受傷。如有，立即撥打 911。' },
    { title: '拍照取證', text: '在移動車輛前，對車輛的相對位置、碰撞點、車牌、現場環境拍照。' },
    { title: '移至安全區', text: '將車輛移至路邊等安全位置，避免阻礙交通。' },
    { title: '交換信息', text: '與對方司機交換駕照、車輛登記證明和保險證明的信息，並記錄對方電話。' },
    { title: '填寫事故聯合報告單', text: '與對方共同填寫。即使有爭議，也各自填寫自己的部分。除非有人受傷或有嚴重爭議，一般無需等待警察。' },
    { title: '聯絡保險公司', text: '儘快向您的保險公司或經紀人報案，並把填好的表格發給他們。' }
  ],

  flowTitle: '表格怎麼交換著填',
  flowIntro: '一張官方表格上下兩半內容相同，中間有一條裁剪線（COUPEZ ICI）。官方步驟如下：',
  flow: [
    '其中一位司機將報告單下半部分撕下，交給事故對方司機。',
    '每位司機各自填寫自己那份表格中的「A. 事故信息」部分。',
    '每位司機把自己的表格交給對方，請對方填寫「B. 對方車輛信息」部分。',
    '之後各自取回自己的表格，留存對方車輛的信息。',
    '隨後儘快通知自己的保險公司或經紀人，並將填好的表格發送給他們。'
  ],
  flowNote: '也就是說：B 部分寫的是對方的信息。您在對方的表格上填寫您自己的信息，對方在您的表格上填寫他的信息。',

  formTitle: '逐欄中文對照',
  formIntro: '下面按官方表格的順序排列。粗體是表格上印的法語原文，藍色是中文意思。',
  purpose: {
    fr: 'Ce formulaire sert uniquement à identifier les parties en cause en vue d’accélérer le règlement du sinistre.',
    local: '表格上印的說明：本表格僅用於確認事故各方身份，以便加快理賠處理。'
  },
  sections: [
    {
      fr: 'A. INFORMATIONS SUR L’ACCIDENT',
      local: 'A. 事故信息',
      note: '由您自己填寫。',
      blocks: [
        {
          fields: [
            { fr: 'Date de l’accident', local: '事故日期' },
            { fr: 'Heure', local: '時間' },
            { fr: 'Lieu de l’accident (exemple : adresse / intersection / ville)', local: '事故地點（例如：地址／路口／城市）' },
            { fr: 'Brève description de l’accident et des dommages', local: '事故及損壞情況簡述' },
            { fr: 'Témoin(s) s’il y a lieu : nom et téléphone', local: '目擊證人（如有）：姓名和電話' }
          ]
        }
      ]
    },
    {
      fr: 'B. INFORMATIONS SUR L’AUTRE VÉHICULE IMPLIQUÉ',
      local: 'B. 對方車輛信息',
      note: 'Faire remplir cette partie par L’AUTRE conducteur et la conserver pour vous. 這部分請對方駕駛員填寫，並自己保留。',
      blocks: [
        {
          fr: 'Conducteur du véhicule',
          local: '駕駛員',
          fields: [
            { fr: 'Permis de conduire', local: '駕照號碼', hint: '印在駕照上。' },
            { fr: 'Prénom', local: '名' },
            { fr: 'Nom', local: '姓' },
            { fr: 'Adresse', local: '地址' },
            { fr: 'Ville', local: '城市' },
            { fr: 'Code postal', local: '郵編' },
            { fr: 'Courriel', local: '電郵' },
            { fr: 'Téléphone', local: '電話' }
          ]
        },
        {
          fr: 'Propriétaire du véhicule (ou locataire pour plus d’un an)',
          local: '車主（或租期超過一年的承租人）',
          fields: [
            { fr: 'Informations identiques au conducteur. Sinon compléter :', local: '信息與駕駛員相同（打勾即可）。否則請填寫以下各欄：' },
            { fr: 'Prénom', local: '名' },
            { fr: 'Nom', local: '姓' },
            { fr: 'Adresse', local: '地址' },
            { fr: 'Ville', local: '城市' },
            { fr: 'Code postal', local: '郵編' },
            { fr: 'Courriel', local: '電郵' },
            { fr: 'Téléphone', local: '電話' }
          ]
        },
        {
          fr: 'Certificat d’immatriculation',
          local: '車輛登記證明',
          fields: [
            { fr: 'No de plaque', local: '車牌號' },
            { fr: 'Marque du véhicule', local: '車輛品牌' },
            { fr: 'Année', local: '年份' }
          ]
        },
        {
          fr: 'Attestation d’assurance',
          local: '保險證明',
          fields: [
            { fr: 'Compagnie d’assurance', local: '保險公司' },
            { fr: 'No de police', local: '保單號' }
          ]
        }
      ]
    }
  ],

  noFormTitle: '手邊沒有紙質表格？',
  noFormText: '可以用手機在線填寫官方表格，或者先把下面這些信息拍照、記錄下來。',
  onlineFr: '在線填寫（法語版）',
  onlineEn: '在線填寫（英語版）',
  checklistTitle: '至少拍下或記下這些',
  checklist: [
    '事故現場、車輛位置和損壞情況',
    '對方的駕照',
    '對方的車輛登記證明',
    '對方的保險證明',
    '對方的車牌和電話',
    '目擊者的姓名和電話（如有）'
  ],

  tipsTitle: '阿波羅保險公司溫馨提示',
  tips: [
    '每輛涉事車輛需要各自填寫一份報告單，雙方表格上的信息應保持一致。',
    '填寫並簽署本表格，僅用於確認事故雙方身份，並不代表承認事故責任。',
    '如果對方拒絕填寫，您仍然可以自行填寫您這一份，並如實記錄當時情況。',
    '填寫完成後，請儘快將表格拍照或掃描發給我們，方便我們從旁協助您跟進與保險公司理賠專員的溝通。',
    '如果事故發生在非工作時間，請儘快通過微信或短信聯絡我們，並發送報告單副本。'
  ],
  tipsNote: '以上為阿波羅保險公司提供的協助性建議，具體理賠的判斷與決定仍由保險公司理賠專員負責。',

  printTitle: '提前打印，放在車上更好',
  printText: '出事故時不一定有信號，手機也可能沒電。建議現在就把官方空白表格和中文參考翻譯各打印一份，和保險證明一起放在車裡。',
  printCn: '下載中文參考翻譯（PDF，可打印）',
  printFr: '下載官方法語空白表格（PDF）',

  contactTitle: '需要協助？',
  contactText: '填表或與保險公司溝通時遇到語言困難，可以聯絡我們。',
  callJacques: '致電曹夢陽 Jacques',
  wechat: '電話 / 微信：514-601-5585',
  claimsLink: '查看完整報險流程',

  disclaimer: '本頁中文內容僅供參考，如與法語原文有出入，以法語官方原文為準。內容參考自魁北克機動車保險聯合會（Groupement des assureurs automobiles，GAA）2023 版官方《Constat amiable d’accident automobile》表格，官方表格版權歸 GAA 所有。'
};
