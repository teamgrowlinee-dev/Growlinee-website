(() => {
  const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isEE = cleanPath === "/ee" || cleanPath.startsWith("/ee/");
  const isEN = cleanPath === "/en" || cleanPath.startsWith("/en/");
  const isBlogEE = cleanPath === "/blog";
  const isBlogEN = cleanPath === "/en/blog";

  if (!isEE && !isEN && !isBlogEE && !isBlogEN) return;

  const copy = isEE
    ? {
        navWork: "Tehtud tööd",
        navAbout: "Meist",
        heroLine:
          "Automatiseerime müügi-, suhtluse- ja tööprotsessid nii, et ettevõte säästab aega, hoiab kulusid ja kasvatab tulu.",
        heroBullets: [
          "AI ostuabiline soovitab tooted ja täidab ostukorvi vestluse käigus.",
          "Automaatsed järeltegevused: pakkumised, meeldetuletused ja follow-up ilma käsitööta.",
          "Piloot live'is 48 tunniga. Projektid algavad 100€-st."
        ],
        workTitle: "Tehtud tööd koos koostööpartneritega",
        workLead:
          "Päris projektid: mida tegime, kui kaua ülesseadistus läks ja milline tulemus tuli.",
        projectsLabel: "Projektid, mis on live'is",
        stackTitle: "Integratsioonid ja platvormid",
        stackLead:
          "Sobitub olemasolevate tööriistadega: e-pood, CRM, teenusprotsessid ja sisemised töövood.",
        stats: [
          { value: "6+", label: "projekti live'is" },
          { value: "48h", label: "keskmine ülesseadistus" },
          { value: "100€", label: "alates piloodist" }
        ],
        stackBullets: [
          "WooCommerce - ostukorv, tootekataloog, checkout loogika",
          "Shopify - müügiflow ja automaatsed järeltegevused",
          "WordPress / Wix - koduleht, vormid ja SEO baas",
          "CRM + email + andmetabelid - selge müügitoru ja järgmised sammud"
        ],
        budgetLabel: "Investeering",
        timeLabel: "Ülesseadistuse aeg",
        demoPeriodLabel: "Demoperiood",
        resultLabel: "Tulemus",
        ctaWork: "Teeme koostööd",
        pricingNote:
          "* Summad on indikatiivsed projektide suurusjärgud, mitte avalik hinnakiri.",
        pricingAnchor: "Projektid algavad 100€-st. Piloot live 48h–10 päeva. Makstad tulemuse eest.",
        bottomNote:
          "Iga lahendus on kohandatud äri loogikale: kiire vastus, selge järgmine samm ja suurem müük.",
        teamWarmIntro:
          "Kaks noort ettevõtjat Eestist, kes ehitavad müügiautomaatikast päris äri.",
        teamWhoTitle: "Kellega koos töötama hakkad",
        teamWhoLead:
          "Töötad otse asutajatega. Planeerime, ehitame ja viime lahenduse live'i ilma vahendajateta.",
        teamGroupAlt:
          "Growlinee asutajad Mattias Sal-Saller ja Robin Rukis ametlikul ühispildil",
        teamGroupCaption:
          "Mattias Sal-Saller ja Robin Rukis, Growlinee kaasasutajad.",
        aboutIntro:
          "Tutvume - kaks noorettevõtjat: Mattias ja Robin. Me alustasime nullist ilma tiimi, investorita ja kindla plaanita, ainult mõttega, et AI peab päriselt raha teenima.",
        storyTitle: "Meie teekond",
        storyBody:
          "Esimesed versioonid ei töötanud. Esimesed demod lagunesid. Esimesed kõned olid kohmakad. Aga me ei lõpetanud. Täna ehitame süsteeme, mis vastavad päringutele minutitega, automatiseerivad müügi, koostavad pakkumisi, tõstavad ostukorvi väärtust ja töötavad 24/7 ilma käsitööta.",
        clientsTitle: "Mida koostööpartnerid ütlevad",
        testimonials: [
          {
            initials: "LK",
            quote:
              "Saime vestlusaknast müüki juurde, sest kliendile tekib kohe selge soovitus ja ostukorv.",
            name: "Liisa Kask",
            role: "E-poe juht",
            company: "Põhjamaa Beauty"
          },
          {
            initials: "MR",
            quote:
              "Automaatika andis tiimile tagasi aja, mis enne kadus järeltegevuse peale.",
            name: "Martin Raud",
            role: "Müügi- ja operatsioonijuht",
            company: "Nordtek"
          },
          {
            initials: "SK",
            quote:
              "Süsteem ei ole must kast - näeme loogikat ja saame ise muuta.",
            name: "Sandra Kallas",
            role: "Asutaja",
            company: "Wellora"
          }
        ],
        quote1:
          "Saime vestlusaknast müüki juurde, sest kliendile tekib kohe selge soovitus ja ostukorv.",
        quote2:
          "Automaatika andis tiimile tagasi aja, mis enne kadus järeltegevuse peale.",
        quote3:
          "Süsteem ei ole must kast - näeme loogikat ja saame ise muuta.",
        blogCtaTitle: "Uus blogipostitus",
        blogCtaText:
          "Tutvume - kaks noorettevõtjat. Kuidas nullist alustada, katsetada ja ehitada AI-ga päris müügisüsteem.",
        blogCtaLink: "/blog/tutvume-kaks-noorettevotjat",
        blogCtaButton: "Loe blogi",
        blogFeatureTitle: "Uus: Tutvume - kaks noorettevõtjat",
        blogFeatureText:
          "Aus lugu sellest, kuidas nullist alustades ehitada AI süsteeme, mis toovad päriselt tulemusi.",
        blogListTitle: "Tutvume - kaks noorettevõtjat. Mattias ja Robin.",
        blogListExcerpt:
          "Alustasime nullist ja ehitasime AI süsteemid, mis vastavad kiiresti ning toovad päriselt müügitulemusi.",
        blogListDate: "21. veebruar 2026",
        blogListReadMore: "Loe edasi",
        blogListLink: "/blog/tutvume-kaks-noorettevotjat",
        faqTitle: "Korduma kippuvad küsimused",
        faqLead: "Kiired vastused enne, kui alustame piloodiga.",
        faqItems: [
          {
            q: "Kui kaua ülesseadistus aega võtab?",
            a: "Lihtsamad lahendused on live'is 48 tunni jooksul. Täielik piloot keskmiselt 5-10 päeva. Alustame lühikese konsultatsiooniga (15-25 min), kogume sisendid ja paigaldame lahenduse. Esimesed tulemused tulevad juba piloodifaasis."
          },
          {
            q: "Mis vahe on Growlineel ja tavalisel klienditoe chatbotil?",
            a: "Klienditoe chatbot vastab küsimustele. Growlinee toob lisatulu: täidab ostukorvi, tõstab keskmist ostusummat (AOV), saadab automaatsed järeltegevused ja kvalifitseerib müügivihjeid. Mõõdame konversiooni ja tulu, mitte ainult vastuseaega."
          },
          {
            q: "Kas pean ise tehniline olema?",
            a: "Ei. Growlinee tiim tegeleb kogu ülesseadistuse, integratsioonide ja testimisega. Sinult läheb vaja äriinfot: tooted, levinumad küsimused, reeglid. Tehniline pool on meie vastutusel."
          },
          {
            q: "Milliseid platvorme toetatakse?",
            a: "Shopify, WooCommerce, WordPress, Wix ja kohandatud lahendused. CRM integratsioonid: HubSpot, Pipedrive, Google Sheets. Kui kasutad mõnda teist platvormi — küsi, tõenäoliselt toetame."
          },
          {
            q: "Mis see maksab ja mis on hinna sees?",
            a: "Projektid algavad 100€-st. Hind sõltub platvormist, automatsioonide arvust ja integratsioonide mahust. Piloot on madala riskiga: valideerime tulemused enne täismahus investeerimist. Pärast pilooti läheme kuutasule."
          },
          {
            q: "Mis juhtub pärast paigaldust?",
            a: "Mõõdame tulemusi: konversioon, AOV, hüljatud ostukorvid. Esimene raport 1-2 nädala jooksul. Optimiseerime lahenduse vastavalt andmetele. Töötad otse asutajatega — vahendajaid ei ole."
          }
        ],
        contactServiceLabel: "Fookusteenus",
        contactServiceHint:
          "Vali peamine suund. Töötame nii e-poodide, teenusettevõtete kui ka B2B müügitiimidega.",
        contactWebsiteHint:
          "Lisa veebileht, et saaksime teha lühianalüüsi ja saata personaalse plaani.",
        contactStatusSending: "Saadame päringu...",
        contactStatusSuccess: "Aitäh! Saatsime personaalse ülevaate sinu meilile.",
        contactStatusFallback:
          "Päring saadetud. Vastame peagi detailidega e-maili teel.",
        contactStatusError:
          "Päringu saatmine ebaõnnestus. Proovi uuesti või kirjuta growlinee@gmail.com.",
        contactServiceOptions: [
          { value: "shopping_assistant", label: "E-poe ostukorvi abiline" },
          { value: "email_automation", label: "Email automatsioonid" },
          { value: "sales_automation", label: "Müügitöö automatsioon" },
          { value: "not_sure", label: "Ei ole veel kindel" }
        ],
        socialTitle: "Jälgi meie tööd",
        socialLead:
          "Näitame jooksvalt demosid, tulemusi ja uusi launch'e.",
        socialLinks: [
          {
            label: "Instagram",
            href: "https://www.instagram.com/growlinee.ai/"
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61583080750657"
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/robin-rukis-29a1b83a4/"
          }
        ],
        seoTitle: "Growlinee | E-poe müügiautomatsioon ja AI ostuabiline",
        seoDescription:
          "Growlinee müügiautomatsioon Eesti e-poodidele: AI ostuabiline soovitab tooteid ja täidab ostukorvi, email automatsioon saadab järeltegevused, müügitöö läheb kiiremaks. Piloot live 48h, alates 100€.",
        service3Title: "Veebilehe müügiassistent",
        service3Desc: "Kvalifitseerib külastajad, kogub kontaktid ja broneerib demo kõne — täisautomaatselt.",
        service3Greeting: "Tere! Kuidas saan aidata?",
        service3UserMsg: "Meil on vaja AI assistenti veebilehele",
        service3BotMsg: "Sobiv fit! Broneerin tasuta 30-min strateegia kõne?",
        service3Slot: "E 25 Mar · 14:00",
        service3Confirmed: "Broneeritud! 🎉 Kutse saadetud emailile.",
        service3Badge: "Kvalifitseeritud",
        service3Online: "Online",
        service3VideoLabel: "VIDEO TUTVUSTUS"
      }
    : {
        navWork: "Work Done",
        navAbout: "About",
        heroLine:
          "We automate sales, communication, and internal workflows so your company saves time, cuts costs, and grows revenue.",
        heroBullets: [
          "AI shopping assistant recommends products and fills the cart mid-conversation.",
          "Automated follow-ups: proposals, reminders, and sequences — no manual work.",
          "Pilot live in 48 hours. Projects start from €100."
        ],
        workTitle: "Delivered work with partners and outcomes",
        workLead:
          "Real projects: what we built, setup time, and measurable results.",
        projectsLabel: "Projects in production",
        stackTitle: "Integrations and platforms",
        stackLead:
          "Works with your existing stack: e-commerce, CRM, service operations, and internal workflows.",
        stats: [
          { value: "6+", label: "live projects" },
          { value: "48h", label: "average setup" },
          { value: "€100", label: "pilot from" }
        ],
        stackBullets: [
          "WooCommerce - cart, catalog, checkout logic",
          "Shopify - sales flow and automated follow-up",
          "WordPress / Wix - website, forms, and SEO baseline",
          "CRM + email + data tables - clear pipeline and next actions"
        ],
        budgetLabel: "Investment",
        timeLabel: "Setup time",
        demoPeriodLabel: "Demo period",
        resultLabel: "Result",
        ctaWork: "Let's work together",
        pricingNote:
          "* Amounts are indicative project ranges, not a public price list.",
        pricingAnchor: "Projects start from €100. Pilot live in 48h–10 days. You pay for results, not experiments.",
        bottomNote:
          "Each setup is tailored to business flow: faster responses, clear follow-up, higher conversion.",
        teamWarmIntro:
          "Two young entrepreneurs from Estonia building real sales automation.",
        teamWhoTitle: "Who you'll work with",
        teamWhoLead:
          "You work directly with the founders. We plan, build, and launch without middle layers.",
        teamGroupAlt:
          "Growlinee founders Mattias Sal-Saller and Robin Rukis in an official team photo",
        teamGroupCaption:
          "Mattias Sal-Saller and Robin Rukis, co-founders of Growlinee.",
        aboutIntro:
          "Meet us - two young founders, Mattias and Robin. We started from zero without a team, investors, or a perfect roadmap, with one belief: AI must generate real revenue.",
        storyTitle: "Our path",
        storyBody:
          "First versions failed. First demos broke. First calls were awkward. We kept building anyway. Today we deliver systems that answer leads in minutes, automate sales, generate offers, increase basket value, and run 24/7 without manual work.",
        clientsTitle: "What partners say",
        testimonials: [
          {
            initials: "LK",
            quote:
              "The shopping assistant started converting intent into actual carts almost immediately.",
            name: "Liisa Kask",
            role: "E-commerce Lead",
            company: "Pohjamaa Beauty"
          },
          {
            initials: "MR",
            quote: "Automation gave our team back hours every single week.",
            name: "Martin Raud",
            role: "Sales & Operations Lead",
            company: "Nordtek"
          },
          {
            initials: "SK",
            quote: "It is transparent and editable, not a black box.",
            name: "Sandra Kallas",
            role: "Founder",
            company: "Wellora"
          }
        ],
        quote1: "The chat assistant started converting intent into actual carts.",
        quote2: "Automation gave our team back hours every week.",
        quote3: "It is transparent and editable, not a black box.",
        blogCtaTitle: "New blog post",
        blogCtaText:
          "Meet two young founders: how we started from zero and built AI systems that drive sales.",
        blogCtaLink: "/en/blog/meet-two-young-founders",
        blogCtaButton: "Read article",
        blogFeatureTitle: "New: Meet two young founders",
        blogFeatureText:
          "An honest breakdown of starting from zero and building AI systems that produce real outcomes.",
        blogListTitle: "Meet two young founders: Mattias and Robin",
        blogListExcerpt:
          "We started from zero and built practical AI systems that respond faster and generate measurable sales outcomes.",
        blogListDate: "February 21, 2026",
        blogListReadMore: "Read more",
        blogListLink: "/en/blog/meet-two-young-founders",
        faqTitle: "Frequently asked questions",
        faqLead: "Quick answers before we launch your pilot.",
        faqItems: [
          {
            q: "How long does setup take?",
            a: "Simpler solutions go live in 48 hours. A full pilot typically takes 5-10 days. We start with a short call (15-25 min), gather inputs, and deploy. First measurable results arrive during the pilot phase."
          },
          {
            q: "What is the difference between Growlinee and a customer support chatbot?",
            a: "Support chatbots answer questions. Growlinee drives revenue: fills carts, raises average order value (AOV), automates follow-up sequences, and qualifies leads. We measure conversion and revenue, not just response time."
          },
          {
            q: "Do I need to be technical?",
            a: "No. Growlinee handles all setup, integrations, and testing. We need business inputs from you: products, common questions, rules. The technical side is entirely our responsibility."
          },
          {
            q: "Which platforms do you support?",
            a: "Shopify, WooCommerce, WordPress, Wix, and custom stacks. CRM integrations: HubSpot, Pipedrive, Google Sheets. If you use something else, ask us — we most likely support it."
          },
          {
            q: "What does it cost and what is included?",
            a: "Projects start from €100. Price depends on platform, number of automations, and integration scope. The pilot is low-risk: we validate results before full commitment. After the pilot, we move to a monthly model."
          },
          {
            q: "What happens after setup?",
            a: "We measure results: conversion rate, AOV, abandoned cart recovery. First report within 1-2 weeks. We optimize based on data. You work directly with the founders — no account managers, no layers."
          }
        ],
        contactServiceLabel: "Service Focus",
        contactServiceHint:
          "Choose the main direction. We work with e-commerce brands, service companies, and B2B sales teams.",
        contactWebsiteHint:
          "Add your website so we can include a quick AI analysis in the response.",
        contactStatusSending: "Sending your request...",
        contactStatusSuccess: "Thanks! We sent a personalized overview to your email.",
        contactStatusFallback:
          "Request sent. We will follow up with details by email shortly.",
        contactStatusError:
          "Sending failed. Please try again or email growlinee@gmail.com.",
        contactServiceOptions: [
          { value: "shopping_assistant", label: "E-commerce shopping assistant" },
          { value: "email_automation", label: "Email automations" },
          { value: "sales_automation", label: "Sales automation" },
          { value: "not_sure", label: "Not sure yet" }
        ],
        socialTitle: "Follow our work",
        socialLead:
          "We share demos, outcomes, and new launches regularly.",
        socialLinks: [
          {
            label: "Instagram",
            href: "https://www.instagram.com/growlinee.ai/"
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61583080750657"
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/robin-rukis-29a1b83a4/"
          }
        ],
        seoTitle: "Growlinee | E-commerce sales automation and AI shopping assistant",
        seoDescription:
          "Growlinee builds AI shopping assistants and sales automation for e-commerce: fills carts, automates follow-ups, recovers abandoned orders. Pilot live in 48 hours, from €100.",
        service3Title: "Website sales assistant",
        service3Desc: "Qualifies visitors, collects contacts, and books a demo call — fully automated.",
        service3Greeting: "Hi! How can I help you today?",
        service3UserMsg: "We need an AI assistant for our website",
        service3BotMsg: "Great fit! Want to book a free 30-min strategy call?",
        service3Slot: "Mon 25 Mar · 14:00",
        service3Confirmed: "Booked! \uD83C\uDF89 Invite sent to your email.",
        service3Badge: "Qualified",
        service3Online: "Online",
        service3VideoLabel: "VIDEO DEMO"
      };

  const projects = isEE
    ? [
        {
          url: "https://trenniekspert.ee/",
          name: "Trenniekspert.ee",
          desc: "Vestlusrobot lisab tooteid otse ostukorvi ja aitab tõsta müüki vestlusaknast.",
          budget: "400 \u20ac",
          time: "5 p\u00e4eva",
          result: "Kliendi k\u00fcsimus \u2192 soovitus \u2192 ostukorv samas vestluses"
        },
        {
          url: "https://www.karolindoeshair.ee/",
          name: "Karolindoeshair.ee",
          desc: "AI abil valminud veebileht 2 p\u00e4evaga koos SEO p\u00f5hja ja automaatika valmidusega.",
          budget: "100 \u20ac",
          time: "2 p\u00e4eva",
          result: "Kiire lansseerimine + SEO baas + valmis edasiseks automatiseerimiseks"
        },
        {
          url: "https://greenest.ee/",
          name: "Greenest.ee",
          desc: "Robot soovitab retsepti p\u00f5hjal puuduvaid tooteid, et ostukorv oleks t\u00e4ielik ja v\u00e4\u00e4rtus suurem.",
          isDemo: true,
          time: "10 p\u00e4eva",
          demoPeriod: "1\u20132 kuud",
          result: "Chatboti logide anal\u00fc\u00fctika n\u00e4itab, kas automatsioon on vajalik"
        },
        {
          url: "https://innomine.ee/",
          name: "Innomine.ee",
          desc: "Klient saadab p\u00e4ringu \u2192 AI kvalifitseerib ja koostab mustandi koos PDF-iga alla minuti.",
          budget: null,
          time: null,
          result: "Pakkumiste generaator automaatseks, vastus alla minuti"
        }
      ]
    : [
        {
          url: "https://trenniekspert.ee/",
          name: "Trenniekspert.ee",
          desc: "Chat assistant adds products directly to cart and drives sales from conversations.",
          budget: "\u20ac400",
          time: "5 days",
          result: "Question \u2192 recommendation \u2192 cart in a single chat flow"
        },
        {
          url: "https://www.karolindoeshair.ee/",
          name: "Karolindoeshair.ee",
          desc: "Website delivered in 2 days with AI support, SEO foundation, and automation readiness.",
          budget: "\u20ac100",
          time: "2 days",
          result: "Fast launch + SEO baseline + ready for automation expansion"
        },
        {
          url: "https://greenest.ee/",
          name: "Greenest.ee",
          desc: "Recipe-aware assistant recommends missing products to complete the basket and raise order value.",
          isDemo: true,
          time: "10 days",
          demoPeriod: "1\u20132 months",
          result: "Chatbot log analytics shows whether automation is needed"
        },
        {
          url: "https://innomine.ee/",
          name: "Innomine.ee",
          desc: "Client sends a request \u2192 AI qualifies and drafts a proposal with PDF in under a minute.",
          budget: null,
          time: null,
          result: "Quote generator automated, response under 1 minute"
        }
      ];

  const workRibbonLogos = [
    { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
    { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
    { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
    { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
    { src: "https://svgl.app/library/cursor_wordmark_light.svg", alt: "Cursor Logo" },
    { src: "https://cdn.simpleicons.org/googlesheets/white", alt: "Google Sheets Logo" },
    { src: "https://cdn.simpleicons.org/render/white", alt: "Render Logo" },
    { src: "https://cdn.simpleicons.org/shopify/white", alt: "Shopify Logo" },
    { src: "https://cdn.simpleicons.org/n8n/white", alt: "n8n Logo" }
  ];

  const partnerCloudLogos = [
    { src: "/pildid/logo-nomine-transparent.png", alt: "IN NOMINE" },
    { src: "/pildid/logo-greenest-transparent.png", alt: "greenest" },
    { src: "/pildid/logo-trenniekspert-transparent.png", alt: "Trenniekspert" }
  ];

  const LEAD_FUNCTION_ENDPOINT = "/.netlify/functions/lead-intake";
  const LEGACY_SCRIPT_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbxzsRYxesTq0Nu-GE5b4Z-2NVOtH0ASHmA4bqIcS0SJXUUXTodLJxWjM48_ZJ3wi4xL-w/exec";

  function ensureStyles() {
    if (document.getElementById("growlinee-override-style")) return;

    const style = document.createElement("style");
    style.id = "growlinee-override-style";
    style.textContent =
      "html,body{overflow-y:auto!important;overflow-x:hidden!important}" +
      "body{touch-action:pan-y}" +
      "@keyframes growlineeMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}" +
      "@keyframes growlineeRevealLeft{from{opacity:0;transform:translate3d(-34px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}" +
      "@keyframes growlineeRevealRight{from{opacity:0;transform:translate3d(34px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}" +
      ".growlinee-marquee{overflow:hidden;mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}" +
      ".growlinee-marquee-track{display:flex;width:max-content;animation:growlineeMarquee 80s linear infinite}" +
      ".growlinee-contact-col{min-width:0}" +
      ".growlinee-partner-cloud{overflow:hidden;padding:8px 0;mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}" +
      ".growlinee-partner-logo{display:block;height:28px!important;width:auto!important;max-width:210px;object-fit:contain;object-position:center}" +
      ".growlinee-contact-hint{margin-top:6px;font-size:11px;color:rgba(255,255,255,0.52);line-height:1.45}" +
      ".growlinee-contact-status{margin-top:6px;font-size:12px;line-height:1.4}" +
      ".growlinee-contact-status.is-loading{color:rgba(255,255,255,0.75)}" +
      ".growlinee-contact-status.is-success{color:rgba(110,231,183,0.95)}" +
      ".growlinee-contact-status.is-error{color:rgba(252,165,165,0.95)}" +
      ".growlinee-proof-section{border-top:0;border-bottom:0;background:transparent}" +
      ".growlinee-stats-strip{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}" +
      ".growlinee-stat-item{padding:14px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(255,255,255,.03)}" +
      ".growlinee-stat-value{font-size:20px;font-weight:600;color:#fff;line-height:1.1}" +
      ".growlinee-stat-label{margin-top:4px;font-size:12px;color:rgba(255,255,255,.68);text-transform:uppercase;letter-spacing:.18em}" +
      ".growlinee-team-intro{max-width:820px;font-size:15px;line-height:1.6;color:rgba(255,255,255,.82)}" +
      ".growlinee-team-collab{max-width:820px;display:grid;gap:6px}" +
      ".growlinee-team-collab-title{font-size:28px;line-height:1.15;font-weight:600;color:#fff}" +
      ".growlinee-team-collab-lead{font-size:15px;line-height:1.6;color:rgba(255,255,255,.74)}" +
      ".growlinee-team-layout{display:grid;gap:16px;align-items:start}" +
      ".growlinee-team-stack{display:grid;gap:16px;grid-template-columns:1fr!important}" +
      ".growlinee-team-photo-card{max-width:none;overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:rgba(255,255,255,.03);height:100%}" +
      ".growlinee-team-photo{display:block;width:100%;height:100%;min-height:520px;max-height:780px;object-fit:cover;object-position:center 18%}" +
      ".growlinee-reveal-left,.growlinee-reveal-right{opacity:0;will-change:transform,opacity}" +
      ".growlinee-reveal-left.is-visible{animation:growlineeRevealLeft .75s cubic-bezier(.22,.61,.36,1) both}" +
      ".growlinee-reveal-right.is-visible{animation:growlineeRevealRight .75s cubic-bezier(.22,.61,.36,1) both}" +
      ".growlinee-social-strip{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:12px 14px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.03)}" +
      ".growlinee-social-title{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.66);margin-right:2px}" +
      ".growlinee-social-lead{width:100%;font-size:13px;color:rgba(255,255,255,.7);margin-bottom:2px}" +
      ".growlinee-social-link{display:inline-flex;align-items:center;justify-content:center;padding:8px 14px;border-radius:9999px;border:1px solid rgba(255,255,255,.18);font-size:12px;font-weight:600;color:#fff;transition:all .2s ease;background:rgba(255,255,255,.02)}" +
      ".growlinee-social-link:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.35)}" +
      ".growlinee-testimonial-grid{display:grid;gap:12px}" +
      ".growlinee-testimonial-card{padding:14px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.04)}" +
      ".growlinee-testimonial-avatar{display:flex;height:42px;width:42px;align-items:center;justify-content:center;border-radius:9999px;border:1px solid rgba(255,255,255,.18);background:linear-gradient(135deg,rgba(255,255,255,.28),rgba(255,255,255,.08));font-size:12px;font-weight:700;color:#fff;letter-spacing:.08em}" +
      ".growlinee-testimonial-name{font-size:13px;font-weight:600;color:#fff}" +
      ".growlinee-testimonial-role{font-size:11px;color:rgba(255,255,255,.62);text-transform:uppercase;letter-spacing:.14em}" +
      ".growlinee-faq-item{border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.04);padding:0 14px}" +
      ".growlinee-faq-item summary{display:flex;cursor:pointer;list-style:none;align-items:center;justify-content:space-between;gap:12px;padding:14px 0;font-size:14px;font-weight:600;color:#fff}" +
      ".growlinee-faq-item summary::-webkit-details-marker{display:none}" +
      ".growlinee-faq-item summary::after{content:'+';font-size:18px;line-height:1;color:rgba(255,255,255,.74)}" +
      ".growlinee-faq-item[open] summary::after{content:'−'}" +
      ".growlinee-faq-answer{padding:0 0 14px 0;font-size:14px;line-height:1.65;color:rgba(255,255,255,.75)}" +
      ".growlinee-pricing-anchor{margin-top:10px;font-size:12px;line-height:1.5;color:rgba(167,243,208,.92)}" +
      "@media (min-width:1024px){.growlinee-team-layout{grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr)}}"+
      "@media (max-width:1023px){.growlinee-team-photo{min-height:380px;max-height:560px}}"+
      "@media (max-width:768px){.growlinee-partner-logo{height:22px!important;max-width:150px}.growlinee-stats-strip{grid-template-columns:1fr}.growlinee-stat-item{padding:12px}.growlinee-team-collab-title{font-size:24px}.growlinee-social-strip{padding:12px}.growlinee-team-photo{min-height:320px;max-height:460px}}" +
      "@keyframes glChat0{0%,4%,95%,100%{opacity:0}12%,55%{opacity:1}}" +
      "@keyframes glChat1{0%,18%,95%,100%{opacity:0}26%,55%{opacity:1}}" +
      "@keyframes glChat2{0%,25%,38%,95%,100%{opacity:0}30%,36%{opacity:1}}" +
      "@keyframes glChat3{0%,37%,95%,100%{opacity:0}44%,55%{opacity:1}}" +
      "@keyframes glChat4{0%,52%,66%,95%,100%{opacity:0}58%,64%{opacity:1}}" +
      "@keyframes glChat5{0%,65%,95%,100%{opacity:0}72%,90%{opacity:1}}" +
      "@keyframes glDot{0%,100%{opacity:.3}50%{opacity:1}}" +
      ".gl-chat-msg{opacity:0;animation-duration:10s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-fill-mode:both}" +
      ".gl-chat-typing span{display:inline-block;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.4);animation:glDot .8s ease-in-out infinite}" +
      ".gl-chat-typing span:nth-child(2){animation-delay:.15s}" +
      ".gl-chat-typing span:nth-child(3){animation-delay:.3s}";

    document.head.appendChild(style);
  }

  function updateNav() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const workLink = nav.querySelector('a[href="#pricing"]');
    if (workLink) workLink.textContent = copy.navWork;

    const aboutLink = nav.querySelector('a[href="#about"]');
    if (aboutLink) aboutLink.textContent = copy.navAbout;
  }

  function updateHero() {
    const heroLead = document.querySelector("#hero p.max-w-xl");
    if (heroLead) heroLead.textContent = copy.heroLine;

    const heroBullets = Array.from(
      document.querySelectorAll("#hero .grid.gap-3.text-sm.text-white\\/60 > div")
    );
    if (heroBullets.length && Array.isArray(copy.heroBullets)) {
      heroBullets.slice(0, copy.heroBullets.length).forEach((node, idx) => {
        node.innerHTML =
          '<span class="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>' +
          escapeHtml(copy.heroBullets[idx]);
      });
    }

    const ctaRow = document.querySelector("#hero div.flex.flex-wrap.gap-3");
    if (!ctaRow) return;

    const ctas = Array.from(ctaRow.querySelectorAll("a"));
    const primary = ctas[0];
    const secondary = ctas[1];

    if (primary) {
      primary.href = "https://ai.growlinee.com/";
      primary.target = "_blank";
      primary.rel = "noreferrer";
      primary.textContent = isEE ? "Proovi demo" : "Try demo";
      primary.className =
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60 bg-white text-neutral-900 hover:bg-neutral-200 focus-visible:ring-white h-12 px-6 text-base";
    }

    if (secondary) {
      secondary.href = "#contact";
      secondary.removeAttribute("target");
      secondary.removeAttribute("rel");
      secondary.textContent = isEE ? "Soovin pakkumist" : "Request proposal";
      secondary.className =
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/40 h-12 px-6 text-base";
    }

    if (ctas.length > 2) {
      ctas.slice(2).forEach((node) => node.remove());
    }
  }

  function renderProjectCard(item) {
    var badge = item.isDemo
      ? '<span class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[11px] text-white/70">Demo</span>'
      : '<span class="inline-flex items-center rounded-full border border-emerald-300/35 bg-emerald-300/10 px-2 py-0.5 text-[11px] text-emerald-200">Live</span>';

    var rows = "";
    if (item.isDemo) {
      rows +=
        '<div class="flex items-center gap-2 mt-1"><span class="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-200">Tasuta demoperiood</span></div>' +
        '<div class="flex items-center justify-between gap-3"><span class="text-white/60">' + copy.timeLabel + "</span>" +
        '<span class="text-white">' + item.time + "</span></div>" +
        '<div class="flex items-center justify-between gap-3"><span class="text-white/60">' + copy.demoPeriodLabel + "</span>" +
        '<span class="text-white">' + item.demoPeriod + "</span></div>";
    } else {
      if (item.budget) {
        rows += '<div class="flex items-center justify-between gap-3"><span class="text-white/60">' + copy.budgetLabel + "</span>" +
          '<span class="text-white">' + item.budget + "</span></div>";
      }
      if (item.time) {
        rows += '<div class="flex items-center justify-between gap-3"><span class="text-white/60">' + copy.timeLabel + "</span>" +
          '<span class="text-white">' + item.time + "</span></div>";
      }
    }
    rows += '<div class="flex items-start justify-between gap-3"><span class="text-white/60 shrink-0">' + copy.resultLabel + "</span>" +
      '<span class="text-white text-right">' + item.result + "</span></div>";

    return (
      '<article class="rounded-2xl border border-white/10 bg-neutral-950/60 p-4">' +
      '<div class="flex items-center justify-between gap-3">' +
      '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer" ' +
      'class="text-base font-semibold text-emerald-300 hover:text-emerald-200 underline underline-offset-4">' +
      item.name + "</a>" +
      badge +
      "</div>" +
      '<p class="mt-2 text-sm text-white/75">' + item.desc + "</p>" +
      '<div class="mt-3 grid gap-1 text-xs text-white/70">' + rows + "</div>" +
      "</article>"
    );
  }

  function renderLogoMarquee() {
    const items = workRibbonLogos.concat(workRibbonLogos);
    return (
      '<div class="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-6">' +
      '<div class="overflow-hidden">' +
      '<div class="growlinee-marquee-track" style="gap:42px;flex-direction:row;">' +
      items
        .map(
          (item) =>
            '<img alt="' +
            item.alt +
            '" class="pointer-events-none h-4 select-none brightness-0 invert md:h-5" height="auto" loading="lazy" src="' +
            item.src +
            '" width="auto"/>'
        )
        .join("") +
      "</div></div></div>"
    );
  }

  function removeHeroLogoRibbon() {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const wrappers = hero.querySelectorAll("div.relative.mx-auto.mt-16.w-full.max-w-6xl.px-6");
    if (wrappers.length > 0) {
      wrappers[0].remove();
    }
  }

  function renderStatsStrip() {
    return (
      '<div class="growlinee-stats-strip">' +
      copy.stats
        .map(
          (item) =>
            '<div class="growlinee-stat-item">' +
            '<div class="growlinee-stat-value">' +
            escapeHtml(item.value) +
            "</div>" +
            '<div class="growlinee-stat-label">' +
            escapeHtml(item.label) +
            "</div>" +
            "</div>"
        )
        .join("") +
      "</div>"
    );
  }

  function renderSocialStrip() {
    return (
      '<div class="growlinee-social-strip">' +
      '<p class="growlinee-social-title">' +
      escapeHtml(copy.socialTitle) +
      "</p>" +
      '<p class="growlinee-social-lead">' +
      escapeHtml(copy.socialLead) +
      "</p>" +
      copy.socialLinks
        .map(
          (item) =>
            '<a class="growlinee-social-link" href="' +
            escapeHtml(item.href) +
            '" target="_blank" rel="noreferrer">' +
            escapeHtml(item.label) +
            "</a>"
        )
        .join("") +
      "</div>"
    );
  }

  function insertProofSection() {
    const hero = document.querySelector("#hero");
    const services = document.querySelector("#services");
    if (!hero || !services) return;
    if (document.querySelector('[data-growlinee-proof="1"]')) return;

    const section = document.createElement("section");
    section.className = "relative py-10 growlinee-proof-section";
    section.setAttribute("data-growlinee-proof", "1");
    section.innerHTML =
      '<div class="mx-auto grid w-full max-w-6xl gap-7 px-6">' +
      '<div class="grid gap-3">' +
      '<p class="text-xs uppercase tracking-[0.35em] text-white/60">' +
      copy.stackTitle +
      "</p>" +
      '<p class="max-w-3xl text-sm text-white/70">' +
      copy.stackLead +
      "</p>" +
      "</div>" +
      renderLogoMarquee() +
      renderStatsStrip() +
      renderSocialStrip() +
      "</div>";

    services.insertAdjacentElement("beforebegin", section);
  }

  function ensurePricingAnchor() {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    if (contact.querySelector('[data-growlinee-pricing-anchor="1"]')) return;

    const description = contact.querySelector("p.max-w-3xl");
    if (!description) return;

    const note = document.createElement("p");
    note.className = "growlinee-pricing-anchor";
    note.setAttribute("data-growlinee-pricing-anchor", "1");
    note.textContent = copy.pricingAnchor;
    description.insertAdjacentElement("afterend", note);
  }

  function ensureTeamIntroAndPhotos() {
    const section = document.querySelector("#about");
    if (!section) return;

    const teamGrid =
      section.querySelector('[data-growlinee-team-grid="1"]') ||
      Array.from(
        section.querySelectorAll("div.grid.gap-6.md\\:grid-cols-2, div.grid.gap-6.growlinee-team-stack")
      ).find((grid) => grid.querySelector('img[src*="mattias"]') || grid.querySelector('img[src*="robin"]'));
    if (!teamGrid) return;
    teamGrid.setAttribute("data-growlinee-team-grid", "1");

    if (!section.querySelector('[data-growlinee-team-collab="1"]')) {
      const collab = document.createElement("div");
      collab.className = "growlinee-team-collab";
      collab.setAttribute("data-growlinee-team-collab", "1");
      collab.setAttribute("data-growlinee-reveal", "left");
      collab.innerHTML =
        '<h3 class="growlinee-team-collab-title">' +
        escapeHtml(copy.teamWhoTitle) +
        "</h3>" +
        '<p class="growlinee-team-collab-lead">' +
        escapeHtml(copy.teamWhoLead) +
        "</p>";
      teamGrid.insertAdjacentElement("beforebegin", collab);
    }

    if (!section.querySelector('[data-growlinee-team-group-photo="1"]')) {
      const groupPhoto = document.createElement("figure");
      groupPhoto.className = "growlinee-team-photo-card";
      groupPhoto.setAttribute("data-growlinee-team-group-photo", "1");
      groupPhoto.setAttribute("data-growlinee-reveal", "right");
      groupPhoto.innerHTML =
        '<img class="growlinee-team-photo" src="/pildid/team-growlinee-founders-01.jpg" alt="' +
        escapeHtml(copy.teamGroupAlt) +
        '" loading="lazy"/>';
      teamGrid.insertAdjacentElement("beforebegin", groupPhoto);
    }

    const groupPhotoNode = section.querySelector('[data-growlinee-team-group-photo="1"]');
    if (groupPhotoNode) {
      const oldCaption = groupPhotoNode.querySelector("figcaption");
      if (oldCaption) oldCaption.remove();
    }

    let teamLayout = section.querySelector('[data-growlinee-team-layout="1"]');
    if (!teamLayout) {
      teamLayout = document.createElement("div");
      teamLayout.className = "growlinee-team-layout";
      teamLayout.setAttribute("data-growlinee-team-layout", "1");
      teamGrid.insertAdjacentElement("beforebegin", teamLayout);
    }

    teamGrid.classList.remove("md:grid-cols-2");
    teamGrid.classList.add("growlinee-team-stack");
    if (teamGrid.parentElement !== teamLayout) {
      teamLayout.appendChild(teamGrid);
    }
    if (groupPhotoNode && groupPhotoNode.parentElement !== teamLayout) {
      teamLayout.appendChild(groupPhotoNode);
    }

    Array.from(teamGrid.children).forEach((card, index) => {
      card.setAttribute("data-growlinee-reveal", index % 2 === 0 ? "left" : "right");
    });

    const mattiasImg = teamGrid
      ? teamGrid.querySelector('img[src*="mattias-sal-saller"], img[alt*="Mattias Sal-Saller"]')
      : null;
    if (mattiasImg) {
      mattiasImg.src = "/pildid/mattias-sal-saller-01.jpg";
      mattiasImg.alt = isEE
        ? "Mattias Sal-Saller profiilipilt"
        : "Portrait of Mattias Sal-Saller";
      mattiasImg.className = "h-20 w-20 rounded-full object-cover";
    }

    const robinImg = teamGrid
      ? teamGrid.querySelector('img[src*="robin-rukis"], img[alt*="Robin Rukis"]')
      : null;
    if (robinImg) {
      robinImg.src = "/pildid/robin-rukis-01.jpeg";
      robinImg.alt = isEE ? "Robin Rukis profiilipilt" : "Portrait of Robin Rukis";
      robinImg.className = "h-20 w-20 rounded-full object-cover";
    }

    const groupImg = section.querySelector('img[src*="team-growlinee-founders-01.jpg"]');
    if (groupImg) {
      groupImg.alt = copy.teamGroupAlt;
    }
  }

  function ensureRevealAnimations() {
    const nodes = Array.from(document.querySelectorAll("[data-growlinee-reveal]"));
    if (!nodes.length) return;

    nodes.forEach((node) => {
      const dir = node.getAttribute("data-growlinee-reveal");
      node.classList.remove("growlinee-reveal-left", "growlinee-reveal-right");
      node.classList.add(dir === "right" ? "growlinee-reveal-right" : "growlinee-reveal-left");
    });

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    if (!window.__growlineeRevealObserver) {
      window.__growlineeRevealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );
    }

    nodes.forEach((node) => {
      if (node.getAttribute("data-growlinee-reveal-observed") === "1") return;
      window.__growlineeRevealObserver.observe(node);
      node.setAttribute("data-growlinee-reveal-observed", "1");
    });
  }

  function renderTestimonials() {
    return (
      '<div class="growlinee-testimonial-grid mt-4">' +
      copy.testimonials
        .map(
          (item) =>
            '<article class="growlinee-testimonial-card">' +
            '<div class="flex items-center gap-3">' +
            '<div class="growlinee-testimonial-avatar" aria-hidden="true">' +
            escapeHtml(item.initials) +
            "</div>" +
            '<div class="min-w-0">' +
            '<p class="growlinee-testimonial-name">' +
            escapeHtml(item.name) +
            "</p>" +
            '<p class="growlinee-testimonial-role">' +
            escapeHtml(item.role + " · " + item.company) +
            "</p>" +
            "</div>" +
            "</div>" +
            '<p class="mt-3 text-sm text-white/78">"' +
            escapeHtml(item.quote) +
            '"</p>' +
            "</article>"
        )
        .join("") +
      "</div>"
    );
  }

  function ensureFAQSection() {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    if (document.querySelector('[data-growlinee-faq="1"]')) return;

    const section = document.createElement("section");
    section.className = "relative py-16";
    section.setAttribute("data-growlinee-faq", "1");
    section.innerHTML =
      '<div class="mx-auto grid w-full max-w-6xl gap-8 px-6">' +
      '<div class="grid gap-3">' +
      '<p class="text-xs uppercase tracking-[0.35em] text-white/60">FAQ</p>' +
      '<h2 class="text-3xl font-semibold text-white md:text-4xl">' +
      copy.faqTitle +
      "</h2>" +
      '<p class="max-w-3xl text-sm text-white/70">' +
      copy.faqLead +
      "</p>" +
      "</div>" +
      '<div class="grid gap-3">' +
      copy.faqItems
        .map(
          (item, idx) =>
            '<details class="growlinee-faq-item"' +
            (idx === 0 ? " open" : "") +
            ">" +
            "<summary>" +
            escapeHtml(item.q) +
            "</summary>" +
            '<div class="growlinee-faq-answer">' +
            escapeHtml(item.a) +
            "</div>" +
            "</details>"
        )
        .join("") +
      "</div>" +
      "</div>";

    contact.insertAdjacentElement("beforebegin", section);
  }

  function ensureSeoMeta() {
    if (!isEE && !isEN) return;

    const canonicalUrl = isEE ? "https://growlinee.com/ee" : "https://growlinee.com/en";
    document.title = copy.seoTitle;

    const ensureMeta = (selector, attr, value) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attr, selector.includes("property=") ? selector.match(/property=\"([^\"]+)\"/)[1] : selector.match(/name=\"([^\"]+)\"/)[1]);
        document.head.appendChild(node);
      }
      node.setAttribute("content", value);
    };

    let description = document.head.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", copy.seoDescription);

    ensureMeta('meta[property="og:title"]', "property", copy.seoTitle);
    ensureMeta('meta[property="og:description"]', "property", copy.seoDescription);
    ensureMeta('meta[property="og:url"]', "property", canonicalUrl);
    ensureMeta('meta[name="twitter:title"]', "name", copy.seoTitle);
    ensureMeta('meta[name="twitter:description"]', "name", copy.seoDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const schemaId = "growlinee-structured-data";
    const previous = document.getElementById(schemaId);
    if (previous) previous.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: "Growlinee",
          url: canonicalUrl,
          image: "https://growlinee.com/pildid/growlinee-logo-01.png",
          email: "growlinee@gmail.com",
          areaServed: "EE",
          address: {
            "@type": "PostalAddress",
            addressCountry: "EE"
          },
          sameAs: [
            "https://www.instagram.com/growlinee.ai/",
            "https://www.facebook.com/profile.php?id=61583080750657"
          ]
        },
        {
          "@type": "Service",
          serviceType: isEE ? "E-poe müügiautomatsioon" : "E-commerce sales automation",
          provider: {
            "@type": "Organization",
            name: "Growlinee"
          },
          areaServed: "EE",
          availableLanguage: isEE ? ["et", "en"] : ["en", "et"],
          url: canonicalUrl
        },
        {
          "@type": "Service",
          serviceType: isEE ? "AI ostuabiline" : "AI shopping assistant",
          provider: {
            "@type": "Organization",
            name: "Growlinee"
          },
          areaServed: "EE",
          url: canonicalUrl
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function ensureImageAlts() {
    const heroRobot = document.querySelector('#hero img[src*="robot-clean.svg"]');
    if (heroRobot) {
      heroRobot.alt = isEE
        ? "Growlinee AI ostuabilise illustratsioon"
        : "Growlinee AI shopping assistant illustration";
    }

    const logo = document.querySelector('img[src*="growlinee-logo-01.png"]');
    if (logo) {
      logo.alt = isEE ? "Growlinee logo" : "Growlinee logo";
    }
  }

  function updateContactPartnerLogos() {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    const partnerLabel = Array.from(contact.querySelectorAll("p")).find((item) => {
      const text = (item.textContent || "").toLowerCase();
      return text.includes("koostööpartnerid") || text.includes("partners");
    });
    if (!partnerLabel) return;

    const partnerCard = partnerLabel.parentElement;
    if (!partnerCard) return;
    if (partnerCard.getAttribute("data-growlinee-partners-updated") === "1") return;
    partnerCard.style.minWidth = "0";

    const contactColumn = partnerCard.parentElement;
    if (contactColumn) {
      contactColumn.classList.add("growlinee-contact-col");
      contactColumn.style.minWidth = "0";
    }

    const existingGrid = partnerLabel.nextElementSibling;
    if (existingGrid) existingGrid.remove();

    const comingSoon = Array.from(partnerCard.querySelectorAll("p")).find((item) => {
      const text = (item.textContent || "").toLowerCase();
      return text.includes("rohkem tulekul") || text.includes("more coming");
    });
    if (comingSoon) comingSoon.remove();

    const items = partnerCloudLogos.concat(partnerCloudLogos);
    const cloud = document.createElement("div");
    cloud.className = "growlinee-partner-cloud";
    cloud.innerHTML =
      '<div class="overflow-hidden">' +
      '<div class="growlinee-marquee-track" style="gap:28px;flex-direction:row;animation-duration:68s;">' +
      items
        .map(
          (item) =>
            '<img alt="' +
            item.alt +
            '" class="pointer-events-none growlinee-partner-logo select-none" height="28" loading="lazy" style="height:28px;width:auto;max-width:210px;object-fit:contain;" src="' +
            item.src +
            '" width="210"/>'
        )
        .join("") +
      "</div></div>";

    partnerLabel.insertAdjacentElement("afterend", cloud);
    partnerCard.setAttribute("data-growlinee-partners-updated", "1");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeLeadField(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  function inferServiceFocus(selectedService, vision, website) {
    if (selectedService && selectedService !== "not_sure") {
      return selectedService;
    }

    const text = (vision + " " + website).toLowerCase();
    if (
      text.includes("ostukorv") ||
      text.includes("e-pood") ||
      text.includes("ecommerce") ||
      text.includes("shopify") ||
      text.includes("woocommerce") ||
      text.includes("checkout") ||
      text.includes("cart")
    ) {
      return "shopping_assistant";
    }
    if (
      text.includes("email") ||
      text.includes("follow-up") ||
      text.includes("newsletter") ||
      text.includes("järelkiri")
    ) {
      return "email_automation";
    }
    if (
      text.includes("crm") ||
      text.includes("kõne") ||
      text.includes("kone") ||
      text.includes("sales") ||
      text.includes("lead")
    ) {
      return "sales_automation";
    }
    return "not_sure";
  }

  function ensureContactServiceField(form) {
    if (!form || form.querySelector('[data-growlinee-service-field="1"]')) return;

    const visionTextarea = form.querySelector('textarea[name="vision"]');
    if (!visionTextarea) return;

    const visionGroup = visionTextarea.closest("div.grid.gap-2");
    if (!visionGroup || !visionGroup.parentElement) return;

    const selectHtml =
      '<div data-growlinee-service-field="1" class="grid gap-2">' +
      '<label for="service_focus" class="text-xs font-medium uppercase tracking-[0.2em] text-white/60">' +
      escapeHtml(copy.contactServiceLabel) +
      "</label>" +
      '<select id="service_focus" name="service_focus" class="h-11 w-full rounded-full border border-white/15 bg-neutral-950/40 px-4 text-sm text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">' +
      copy.contactServiceOptions
        .map((option) => {
          const selected = option.value === "shopping_assistant" ? ' selected="selected"' : "";
          return (
            '<option value="' +
            escapeHtml(option.value) +
            '"' +
            selected +
            ">" +
            escapeHtml(option.label) +
            "</option>"
          );
        })
        .join("") +
      "</select>" +
      '<p class="growlinee-contact-hint">' +
      escapeHtml(copy.contactServiceHint) +
      "</p>" +
      "</div>";

    visionGroup.insertAdjacentHTML("beforebegin", selectHtml);
  }

  function ensureWebsiteHint(form) {
    if (!form) return;
    const websiteInput = form.querySelector('input[name="website"]');
    if (!websiteInput) return;
    const websiteGroup = websiteInput.closest("div.grid.gap-2");
    if (!websiteGroup) return;
    if (websiteGroup.querySelector('[data-growlinee-website-hint="1"]')) return;

    const hint = document.createElement("p");
    hint.className = "growlinee-contact-hint";
    hint.setAttribute("data-growlinee-website-hint", "1");
    hint.textContent = copy.contactWebsiteHint;
    websiteGroup.appendChild(hint);
  }

  function ensureContactStatusNode(form) {
    if (!form) return null;

    const existing = form.querySelector('[data-growlinee-contact-status="1"]');
    if (existing) return existing;

    const actionsRow = form.querySelector("div.flex.flex-wrap.items-center.justify-between.gap-3");
    if (!actionsRow) return null;

    const status = document.createElement("p");
    status.className = "growlinee-contact-status";
    status.setAttribute("data-growlinee-contact-status", "1");
    status.textContent = "";
    actionsRow.insertAdjacentElement("afterend", status);
    return status;
  }

  function setContactStatus(form, state, message) {
    const status = ensureContactStatusNode(form);
    if (!status) return;

    status.className = "growlinee-contact-status";
    if (state === "loading") status.classList.add("is-loading");
    if (state === "success") status.classList.add("is-success");
    if (state === "error") status.classList.add("is-error");
    status.textContent = message || "";
  }

  function buildLeadPayload(form) {
    const formData = new FormData(form);

    const payload = {
      name: normalizeLeadField(formData.get("name")),
      email: normalizeLeadField(formData.get("email")),
      company: normalizeLeadField(formData.get("company")),
      website: normalizeLeadField(formData.get("website")),
      vision: normalizeLeadField(formData.get("vision")),
      budget: normalizeLeadField(formData.get("budget")),
      timeline: normalizeLeadField(formData.get("timeline")),
      company_site: normalizeLeadField(formData.get("company_site")),
      service_focus_selected: normalizeLeadField(formData.get("service_focus")),
      source: "growlinee.com",
      lang: isEE ? "ee" : "en",
      page_url: window.location.href,
      timestamp: new Date().toISOString()
    };

    payload.service_focus = inferServiceFocus(
      payload.service_focus_selected,
      payload.vision,
      payload.website
    );

    return payload;
  }

  async function submitLeadToFunction(payload) {
    const response = await fetch(LEAD_FUNCTION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("lead-function-error");
    }

    try {
      return await response.json();
    } catch (error) {
      return {};
    }
  }

  async function submitLeadToLegacyScript(payload) {
    const params = new URLSearchParams();
    Object.keys(payload).forEach((key) => {
      params.append(key, payload[key] || "");
    });

    params.append("ai_requested", "1");
    const response = await fetch(LEGACY_SCRIPT_ENDPOINT, {
      method: "POST",
      body: params
    });

    if (!response.ok) {
      throw new Error("legacy-script-error");
    }
  }

  async function handleEnhancedContactSubmit(event) {
    const form = event.currentTarget;
    if (!form) return;

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }

    if (form.getAttribute("data-growlinee-lead-submitting") === "1") return;
    const payload = buildLeadPayload(form);

    // Honeypot silently drops obvious bots.
    if (payload.company_site) return;

    if (!payload.name || !payload.email || !payload.vision) {
      setContactStatus(form, "error", copy.contactStatusError);
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : "";

    form.setAttribute("data-growlinee-lead-submitting", "1");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = isEE ? "Saadame..." : "Sending...";
    }
    setContactStatus(form, "loading", copy.contactStatusSending);

    let sent = false;
    let responseData = {};

    try {
      responseData = await submitLeadToFunction(payload);
      sent = true;
    } catch (error) {
      try {
        await submitLeadToLegacyScript(payload);
        sent = true;
      } catch (fallbackError) {
        sent = false;
      }
    }

    if (sent) {
      form.reset();
      const serviceSelect = form.querySelector('select[name="service_focus"]');
      if (serviceSelect) {
        serviceSelect.value = "shopping_assistant";
      }

      const clientEmailSent = responseData && responseData.clientEmailSent;
      setContactStatus(
        form,
        "success",
        clientEmailSent ? copy.contactStatusSuccess : copy.contactStatusFallback
      );
    } else {
      setContactStatus(form, "error", copy.contactStatusError);
    }

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
    form.setAttribute("data-growlinee-lead-submitting", "0");
  }

  function enhanceContactForm() {
    const contact = document.querySelector("#contact");
    if (!contact) return;

    const form = contact.querySelector("form");
    if (!form) return;

    ensureContactServiceField(form);
    ensureWebsiteHint(form);
    ensureContactStatusNode(form);

    if (form.getAttribute("data-growlinee-lead-hooked") === "1") return;

    // Capture phase prevents the legacy React handler from sending duplicate requests.
    form.addEventListener("submit", handleEnhancedContactSubmit, true);
    form.setAttribute("data-growlinee-lead-hooked", "1");
    form.setAttribute("data-growlinee-lead-submitting", "0");
  }

  function replaceWorkSection() {
    const section = document.querySelector("#pricing");
    if (!section) return;
    if (section.getAttribute("data-growlinee-work-updated") === "1") return;

    const inner = section.querySelector(".mx-auto.w-full.max-w-6xl");
    if (!inner) return;

    inner.innerHTML =
      // Header
      '<div class="grid gap-4 mb-10">' +
      '<p class="text-xs uppercase tracking-[0.4em] text-white/60">' + copy.projectsLabel + "</p>" +
      '<h2 class="text-3xl font-semibold text-white md:text-4xl">' + copy.workTitle + "</h2>" +
      '<p class="max-w-3xl text-sm text-white/70">' + copy.workLead + "</p>" +
      "</div>" +
      // 2x2 project cards grid
      '<div class="grid gap-6 sm:grid-cols-2">' +
      projects.map(renderProjectCard).join("") +
      "</div>" +
      // CTA
      '<div class="mt-10">' +
      '<a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 font-medium transition focus-visible:outline-none bg-white text-neutral-900 hover:bg-neutral-200 h-12 px-6 text-base">' +
      copy.ctaWork +
      "</a>" +
      '<p class="mt-3 text-xs text-white/60">' +
      copy.pricingAnchor +
      "</p>" +
      "</div>";

    section.setAttribute("data-growlinee-work-updated", "1");
  }

  function extendAbout() {
    const section = document.querySelector("#about");
    if (!section) return;

    const intro = section.querySelector("p.max-w-3xl");
    if (intro) intro.textContent = copy.aboutIntro;
    ensureTeamIntroAndPhotos();

    const wrapper = section.querySelector(".mx-auto.grid.w-full.max-w-6xl.gap-10.px-6");
    if (!wrapper || wrapper.querySelector("[data-extra-about='1']")) return;

    const extra = document.createElement("div");
    extra.setAttribute("data-extra-about", "1");
    extra.className = "grid gap-6 md:grid-cols-2";
    extra.innerHTML =
      '<div class="rounded-3xl border border-white/10 bg-white/5 p-6">' +
      '<h3 class="text-2xl font-semibold text-white">' +
      copy.storyTitle +
      "</h3>" +
      '<p class="mt-3 text-sm text-white/70">' +
      copy.storyBody +
      "</p>" +
      '<p class="mt-3 text-sm text-white/70">' +
      (isEE
        ? "See ei ole enesekiitus, vaid kutse neile, kes tahavad lõpuks alustada. Kui sa kardad alustada, keegi teine juba ehitab. Kui sa ootad õiget hetke, keegi teine juba võtab turu."
        : "This is not self-praise. It is a direct message to people who hesitate. If you wait for the perfect moment, someone else is already building and taking the market.") +
      "</p></div>" +
      '<div class="rounded-3xl border border-white/10 bg-neutral-950/60 p-6">' +
      '<h3 class="text-2xl font-semibold text-white">' +
      copy.clientsTitle +
      "</h3>" +
      renderTestimonials() +
      '<div class="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">' +
      '<p class="text-xs uppercase tracking-[0.3em] text-white/60">' +
      copy.blogCtaTitle +
      "</p>" +
      '<p class="mt-2 text-sm text-white/75">' +
      copy.blogCtaText +
      "</p>" +
      '<a href="' +
      copy.blogCtaLink +
      '" class="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200">' +
      copy.blogCtaButton +
      "</a></div></div>";

    wrapper.appendChild(extra);
  }

  function injectBlogFeature() {
    const section = document.querySelector("main section");
    if (!section || section.querySelector('[data-blog-feature="young-founders"]')) return;

    const container = section.querySelector(".mx-auto.grid.w-full.max-w-6xl.gap-10.px-6");
    if (!container || !container.children[0]) return;

    const feature = document.createElement("div");
    feature.setAttribute("data-blog-feature", "young-founders");
    feature.className = "rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5";
    feature.innerHTML =
      '<p class="text-xs uppercase tracking-[0.3em] text-emerald-200">New</p>' +
      '<h2 class="mt-2 text-2xl font-semibold text-white">' +
      copy.blogFeatureTitle +
      "</h2>" +
      '<p class="mt-2 text-sm text-white/80">' +
      copy.blogFeatureText +
      "</p>" +
      '<a href="' +
      copy.blogListLink +
      '" class="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200">' +
      copy.blogListReadMore +
      "</a>";

    container.insertBefore(feature, container.children[1] || null);
  }

  function injectBlogCard() {
    const grid = document.querySelector("div.grid.gap-6.md\\:grid-cols-2.lg\\:grid-cols-3");
    if (!grid || grid.querySelector('[data-added-post="young-founders"]')) return;

    const article = document.createElement("article");
    article.setAttribute("data-added-post", "young-founders");
    article.className =
      "flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10";
    article.innerHTML =
      '<div class="grid gap-3">' +
      '<div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">' +
      '<span>' +
      (isBlogEE ? "Strateegia" : "Strategy") +
      '</span><span class="text-white/40">•</span><span>' +
      copy.blogListDate +
      "</span></div>" +
      '<h3 class="text-lg font-semibold text-white">' +
      copy.blogListTitle +
      "</h3>" +
      '<p class="text-sm text-white/70">' +
      copy.blogListExcerpt +
      "</p></div>" +
      '<div class="mt-6"><a href="' +
      copy.blogListLink +
      '" class="text-sm font-semibold text-emerald-300 hover:text-emerald-200">' +
      copy.blogListReadMore +
      "</a></div>";

    grid.prepend(article);
  }

  function renderChatbotAnim() {
    var iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    var checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    return (
      '<div style="border-radius:16px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);padding:12px;">' +
        '<div style="display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:10px;margin-bottom:10px;">' +
          '<div style="display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:rgba(3,125,201,.25);color:#37b0f5;">' + iconSvg + '</div>' +
          '<span style="font-size:12px;font-weight:600;color:rgba(255,255,255,.85);">Growlinee</span>' +
          '<span style="margin-left:auto;display:flex;align-items:center;gap:4px;font-size:10px;color:#6ee7b7;">' +
            '<span style="width:6px;height:6px;border-radius:50%;background:#6ee7b7;display:inline-block;"></span>' +
            copy.service3Online +
          '</span>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:7px;">' +
          '<div class="gl-chat-msg" style="animation-name:glChat0;align-self:flex-start;max-width:82%;border-radius:14px 14px 14px 3px;background:rgba(38,38,38,.85);padding:7px 10px;font-size:11px;color:rgba(255,255,255,.8);">' + copy.service3Greeting + '</div>' +
          '<div class="gl-chat-msg" style="animation-name:glChat1;align-self:flex-end;max-width:82%;border-radius:14px 14px 3px 14px;background:rgba(3,125,201,.65);padding:7px 10px;font-size:11px;color:#fff;">' + copy.service3UserMsg + '</div>' +
          '<div class="gl-chat-msg gl-chat-typing" style="animation-name:glChat2;align-self:flex-start;border-radius:14px 14px 14px 3px;background:rgba(38,38,38,.85);padding:9px 12px;display:flex;gap:4px;">' +
            '<span></span><span></span><span></span>' +
          '</div>' +
          '<div class="gl-chat-msg" style="animation-name:glChat3;align-self:flex-start;max-width:82%;border-radius:14px 14px 14px 3px;background:rgba(38,38,38,.85);padding:7px 10px;font-size:11px;color:rgba(255,255,255,.8);">' + copy.service3BotMsg + '</div>' +
          '<div class="gl-chat-msg" style="animation-name:glChat4;align-self:flex-start;border-radius:9999px;border:1px solid rgba(3,125,201,.5);background:rgba(3,125,201,.15);padding:5px 12px;font-size:10px;color:#37b0f5;cursor:default;">' + copy.service3Slot + '</div>' +
          '<div class="gl-chat-msg" style="animation-name:glChat5;display:flex;align-items:center;gap:7px;border-radius:10px;border:1px solid rgba(110,231,183,.2);background:rgba(6,78,59,.25);padding:7px 10px;font-size:11px;color:#a7f3d0;">' +
            checkSvg +
            '<span style="flex:1;">' + copy.service3Confirmed + '</span>' +
            '<span style="border-radius:9999px;border:1px solid rgba(110,231,183,.3);background:rgba(110,231,183,.1);padding:2px 7px;font-size:9px;color:#6ee7b7;white-space:nowrap;">' + copy.service3Badge + '</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderServiceVideo(src, label) {
    var id = 'gl-vid-' + Math.random().toString(36).slice(2);
    // Use data attribute instead of inline onclick to avoid HTML attribute quote conflicts
    setTimeout(function() {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', function() {
          var video = document.createElement('video');
          video.style.cssText = 'width:100%;height:100%;object-fit:contain;background:#000';
          video.controls = true;
          video.autoplay = true;
          video.setAttribute('playsinline', '');
          video.src = el.getAttribute('data-gl-video-src');
          el.innerHTML = '';
          el.appendChild(video);
          video.play();
        });
      }
    }, 0);
    return (
      '<div style="border-radius:16px;border:1px solid rgba(255,255,255,.1);background:rgba(10,10,10,.6);padding:12px;margin-top:12px;">' +
        '<p style="font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.5);margin:0 0 10px;">' + label + '</p>' +
        '<div id="' + id + '" data-gl-video-src="' + src + '" style="position:relative;overflow:hidden;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#000;height:160px;cursor:pointer;">' +
          '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(0,0,0,.45);">' +
            '<span style="display:flex;width:40px;height:40px;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.1);font-size:14px;color:#fff;">▶</span>' +
            '<span style="font-size:12px;font-weight:600;color:#fff;">Play video</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function updateServicesCard2() {
    if (!isEN) return; // EN only for now — ET video coming soon
    var cards = document.querySelectorAll('#services .group.relative');
    var card = cards[1];
    if (!card || card.getAttribute('data-gl-card2') === '1') return;

    var animArea = card.querySelector('div.mt-5');
    if (animArea) {
      animArea.innerHTML = renderServiceVideo(
        '/videos/email-automation-en.mp4',
        'VIDEO DEMO'
      );
    }

    card.setAttribute('data-gl-card2', '1');
  }

  function updateServicesCard3() {
    var cards = document.querySelectorAll('#services .group.relative');
    var card = cards[2];
    if (!card || card.getAttribute('data-gl-card3') === '1') return;

    // Update icon to MessageSquare
    var iconBox = card.querySelector('.flex.h-12.w-12');
    if (iconBox) {
      iconBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    }

    // Update title and description
    var h3 = card.querySelector('h3');
    if (h3) h3.textContent = copy.service3Title;
    var desc = card.querySelector('p.mt-2');
    if (desc) desc.textContent = copy.service3Desc;

    // Replace animation area with chatbot anim + video
    var animArea = card.querySelector('div.mt-5');
    if (animArea) {
      animArea.innerHTML = renderChatbotAnim() + renderServiceVideo(
        isEE ? '/videos/salesbot-et.mp4' : '/videos/salesbot-en.mp4',
        copy.service3VideoLabel
      );
    }

    card.setAttribute('data-gl-card3', '1');
  }

  function run() {
    const applyAll = () => {
      ensureStyles();

      if (isEE || isEN) {
        ensureSeoMeta();
        updateNav();
        updateHero();
        ensureImageAlts();
        removeHeroLogoRibbon();
        insertProofSection();
        replaceWorkSection();
        extendAbout();
        ensureRevealAnimations();
        ensureFAQSection();
        ensurePricingAnchor();
        updateContactPartnerLogos();
        enhanceContactForm();
        updateServicesCard2();
        updateServicesCard3();
      }

      if (isBlogEE || isBlogEN) {
        injectBlogFeature();
        injectBlogCard();
      }
    };

    applyAll();
    window.setTimeout(applyAll, 700);
    window.setTimeout(applyAll, 1800);
    window.setTimeout(applyAll, 3200);
    window.setTimeout(applyAll, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
