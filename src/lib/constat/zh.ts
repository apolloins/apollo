// Mobile guide to the Quebec joint accident report (Constat amiable, GAA 2023
// form). French labels are the wording printed on the official form.
export const constat = {
  title: '事故联合报告单 · 手机对照表',
  description: '魁北克车祸事故联合报告单（Constat amiable）逐栏中文对照：手里拿着法语表格，用手机查每一栏的意思，以及事故现场该做什么。',
  heroSubtitle: 'Constat amiable d’accident automobile · 逐栏中文对照',
  emergency: '如有人员受伤，即使伤势轻微，也请先拨打 911。',
  notice: '本页是官方表格的中文参考对照，帮助您看懂每一栏。请在官方法语或英语表格上填写；如中文与法语原文有出入，以法语官方原文为准。',
  nav: { scene: '现场步骤', form: '逐栏对照', noForm: '没带表格', print: '打印备用' },

  sceneTitle: '事故现场怎么做',
  scene: [
    { title: '确保安全', text: '检查有无人员受伤。如有，立即拨打 911。' },
    { title: '拍照取证', text: '在移动车辆前，对车辆的相对位置、碰撞点、车牌、现场环境拍照。' },
    { title: '移至安全区', text: '将车辆移至路边等安全位置，避免阻碍交通。' },
    { title: '交换信息', text: '与对方司机交换驾照、车辆登记证明和保险证明的信息，并记录对方电话。' },
    { title: '填写事故联合报告单', text: '与对方共同填写。即使有争议，也各自填写自己的部分。除非有人受伤或有严重争议，一般无需等待警察。' },
    { title: '联系保险公司', text: '尽快向您的保险公司或经纪人报案，并把填好的表格发给他们。' }
  ],

  flowTitle: '表格怎么交换着填',
  flowIntro: '一张官方表格上下两半内容相同，中间有一条裁剪线（COUPEZ ICI）。官方步骤如下：',
  flow: [
    '其中一位司机将报告单下半部分撕下，交给事故对方司机。',
    '每位司机各自填写自己那份表格中的「A. 事故信息」部分。',
    '每位司机把自己的表格交给对方，请对方填写「B. 对方车辆信息」部分。',
    '之后各自取回自己的表格，留存对方车辆的信息。',
    '随后尽快通知自己的保险公司或经纪人，并将填好的表格发送给他们。'
  ],
  flowNote: '也就是说：B 部分写的是对方的信息。您在对方的表格上填写您自己的信息，对方在您的表格上填写他的信息。',

  formTitle: '逐栏中文对照',
  formIntro: '下面按官方表格的顺序排列。粗体是表格上印的法语原文，蓝色是中文意思。',
  purpose: {
    fr: 'Ce formulaire sert uniquement à identifier les parties en cause en vue d’accélérer le règlement du sinistre.',
    local: '表格上印的说明：本表格仅用于确认事故各方身份，以便加快理赔处理。'
  },
  sections: [
    {
      fr: 'A. INFORMATIONS SUR L’ACCIDENT',
      local: 'A. 事故信息',
      note: '由您自己填写。',
      blocks: [
        {
          fields: [
            { fr: 'Date de l’accident', local: '事故日期' },
            { fr: 'Heure', local: '时间' },
            { fr: 'Lieu de l’accident (exemple : adresse / intersection / ville)', local: '事故地点（例如：地址／路口／城市）' },
            { fr: 'Brève description de l’accident et des dommages', local: '事故及损坏情况简述' },
            { fr: 'Témoin(s) s’il y a lieu : nom et téléphone', local: '目击证人（如有）：姓名和电话' }
          ]
        }
      ]
    },
    {
      fr: 'B. INFORMATIONS SUR L’AUTRE VÉHICULE IMPLIQUÉ',
      local: 'B. 对方车辆信息',
      note: 'Faire remplir cette partie par L’AUTRE conducteur et la conserver pour vous. 这部分请对方驾驶员填写，并自己保留。',
      blocks: [
        {
          fr: 'Conducteur du véhicule',
          local: '驾驶员',
          fields: [
            { fr: 'Permis de conduire', local: '驾照号码', hint: '印在驾照上。' },
            { fr: 'Prénom', local: '名' },
            { fr: 'Nom', local: '姓' },
            { fr: 'Adresse', local: '地址' },
            { fr: 'Ville', local: '城市' },
            { fr: 'Code postal', local: '邮编' },
            { fr: 'Courriel', local: '电邮' },
            { fr: 'Téléphone', local: '电话' }
          ]
        },
        {
          fr: 'Propriétaire du véhicule (ou locataire pour plus d’un an)',
          local: '车主（或租期超过一年的承租人）',
          fields: [
            { fr: 'Informations identiques au conducteur. Sinon compléter :', local: '信息与驾驶员相同（打勾即可）。否则请填写以下各栏：' },
            { fr: 'Prénom', local: '名' },
            { fr: 'Nom', local: '姓' },
            { fr: 'Adresse', local: '地址' },
            { fr: 'Ville', local: '城市' },
            { fr: 'Code postal', local: '邮编' },
            { fr: 'Courriel', local: '电邮' },
            { fr: 'Téléphone', local: '电话' }
          ]
        },
        {
          fr: 'Certificat d’immatriculation',
          local: '车辆登记证明',
          fields: [
            { fr: 'No de plaque', local: '车牌号' },
            { fr: 'Marque du véhicule', local: '车辆品牌' },
            { fr: 'Année', local: '年份' }
          ]
        },
        {
          fr: 'Attestation d’assurance',
          local: '保险证明',
          fields: [
            { fr: 'Compagnie d’assurance', local: '保险公司' },
            { fr: 'No de police', local: '保单号' }
          ]
        }
      ]
    }
  ],

  noFormTitle: '手边没有纸质表格？',
  noFormText: '可以用手机在线填写官方表格，或者先把下面这些信息拍照、记录下来。',
  onlineFr: '在线填写（法语版）',
  onlineEn: '在线填写（英语版）',
  checklistTitle: '至少拍下或记下这些',
  checklist: [
    '事故现场、车辆位置和损坏情况',
    '对方的驾照',
    '对方的车辆登记证明',
    '对方的保险证明',
    '对方的车牌和电话',
    '目击者的姓名和电话（如有）'
  ],

  tipsTitle: '阿波罗保险公司温馨提示',
  tips: [
    '每辆涉事车辆需要各自填写一份报告单，双方表格上的信息应保持一致。',
    '填写并签署本表格，仅用于确认事故双方身份，并不代表承认事故责任。',
    '如果对方拒绝填写，您仍然可以自行填写您这一份，并如实记录当时情况。',
    '填写完成后，请尽快将表格拍照或扫描发给我们，方便我们从旁协助您跟进与保险公司理赔专员的沟通。',
    '如果事故发生在非工作时间，请尽快通过微信或短信联系我们，并发送报告单副本。'
  ],
  tipsNote: '以上为阿波罗保险公司提供的协助性建议，具体理赔的判断与决定仍由保险公司理赔专员负责。',

  printTitle: '提前打印，放在车上更好',
  printText: '出事故时不一定有信号，手机也可能没电。建议现在就把官方空白表格和中文参考翻译各打印一份，和保险证明一起放在车里。',
  printCn: '下载中文参考翻译（PDF，可打印）',
  printFr: '下载官方法语空白表格（PDF）',

  contactTitle: '需要协助？',
  contactText: '填表或与保险公司沟通时遇到语言困难，可以联系我们。',
  callJacques: '致电曹梦阳 Jacques',
  wechat: '电话 / 微信：514-601-5585',
  claimsLink: '查看完整报险流程',

  disclaimer: '本页中文内容仅供参考，如与法语原文有出入，以法语官方原文为准。内容参考自魁北克机动车保险联合会（Groupement des assureurs automobiles，GAA）2023 版官方《Constat amiable d’accident automobile》表格，官方表格版权归 GAA 所有。'
};
