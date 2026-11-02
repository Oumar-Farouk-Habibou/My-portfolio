// Tout le contenu du site est ici (FR + EN). Modifie les textes ici, pas dans les composants.

export const links = {
  email: 'habiboufaroukoumar@gmail.com',
  phone: '+227 91 91 25 99',
  tel: '+22791912599',
  whatsapp: 'https://wa.me/22791912599',
  linkedin: 'https://www.linkedin.com/in/oumar-farouk-habibou-784a08259',
  github: 'https://github.com/Oumar-Farouk-Habibou',
  cv: '/CV_Oumar_Farouk.pdf'
}

const fr = {
  ui: { menu: 'Menu', dark: 'Sombre', light: 'Clair', lang: 'EN', skip: 'Aller au contenu', cv: 'Télécharger mon CV', top: 'Retour en haut' },
  nav: [
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Expertises' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Parcours' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ],
  hero: {
    status: 'Disponible pour de nouvelles opportunités',
    hi: 'Bonjour, je suis',
    name: ['Oumar Farouk', 'Mahaman Habibou'],
    title: 'Responsable Technique',
    subtitle: 'Systèmes, réseaux & solutions ERP',
    lead: "Je prends en charge les serveurs, les réseaux et les solutions ERP Sage des entreprises, et je développe les applications web dont elles ont besoin. Basé à Niamey, j'interviens sur site comme à distance.",
    primary: 'Me contacter',
    secondary: 'Voir mes projets',
    chips: ['Sage 100 · Paie · Gescom · Immo', 'Windows Server · Linux · Active Directory', 'Laravel · Vue.js · SQL Server'],
    portrait: 'Photo de profil'
  },
  
  about: {
    eyebrow: 'À propos',
    title: "Un profil à la croisée de l'infrastructure, de l'ERP et du développement.",
    paras: [
      "Diplômé en Informatique et Technologies de l'Information, je suis passionné par les systèmes d'information, les bases de données et la fiabilité des infrastructures.",
      "J'ai commencé par un stage de support en 2024, puis évolué vers l'administration systèmes et réseaux, et aujourd'hui vers la responsabilité technique : serveurs Windows et Linux, Active Directory, sécurité, sauvegardes, support utilisateurs, et installation et paramétrage des logiciels Sage avec SQL Server.",
      "En parallèle, je conçois des applications web complètes avec Laravel et Vue.js. Ce double profil, exploitation et développement, me permet de comprendre les besoins réels du terrain avant d'écrire une ligne de code."
    ],
    valuesTitle: 'Ce sur quoi on peut compter',
    values: ['Rigueur et respect des procédures', 'Sens du service et communication', 'Organisation et gestion du temps', "Esprit d'équipe", 'Capacité à travailler sous pression']
  },
  services: {
    eyebrow: 'Expertises',
    title: 'Ce que je peux prendre en charge pour vous.',
    items: [
      { title: 'Serveurs & systèmes', text: "Installation, administration et supervision des serveurs et des postes de travail.", points: ['Windows Server, Linux (Ubuntu, Debian)', 'Active Directory, comptes et droits d\'accès', 'Virtualisation : VMware, VirtualBox'] },
      { title: 'Réseaux & sécurité', text: 'Un réseau fiable et protégé, des données sauvegardées.', points: ['Configuration TCP/IP, imprimantes réseau', 'Pare-feu, antivirus, mises à jour de sécurité', 'Sauvegarde et restauration des données'] },
      { title: 'ERP Sage & bases de données', text: "Mise en place et maintien des solutions de gestion de l'entreprise.", points: ['Sage Comptabilité, Paie & RH, Gescom, Immo', 'SQL Server, SSMS, MySQL', 'Installation, paramétrage, formation des utilisateurs'] },
      { title: 'Développement web', text: 'Des applications métier sur mesure, pensées pour les utilisateurs.', points: ['Laravel (PHP), Vue.js, JavaScript', 'Python (Flask), Java', 'Modélisation UML, bases de données'] },
      { title: 'Support & maintenance', text: 'Une assistance rapide pour que le travail ne s\'arrête pas.', points: ['Sur site et à distance (AnyDesk, TeamViewer)', 'Diagnostic matériel et logiciel', 'Maintenance préventive et corrective'] }
    ]
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Outils et technologies que je pratique.',
    tabs: [
      { id: 'all', label: 'Tout' },
      { id: 'infra', label: 'Systèmes & réseaux' },
      { id: 'erp', label: 'ERP & données' },
      { id: 'dev', label: 'Développement' },
      { id: 'tools', label: 'Outils' }
    ],
    items: [
      { n: 'Windows Server', c: 'infra' }, { n: 'Linux (Ubuntu, Debian)', c: 'infra' }, { n: 'Windows 10/11', c: 'infra' },
      { n: 'Active Directory', c: 'infra' }, { n: 'TCP/IP', c: 'infra' }, { n: 'Pare-feu', c: 'infra' },
      { n: 'Antivirus & mises à jour', c: 'infra' }, { n: 'Imprimantes réseau', c: 'infra' }, { n: 'VMware', c: 'infra' },
      { n: 'VirtualBox', c: 'infra' }, { n: 'Maintenance préventive / corrective', c: 'infra' },
      { n: 'Sage Comptabilité', c: 'erp' }, { n: 'Sage Paie & RH', c: 'erp' }, { n: 'Sage Gescom', c: 'erp' }, { n: 'Sage Immo', c: 'erp' },
      { n: 'SQL Server', c: 'erp' }, { n: 'SSMS', c: 'erp' }, { n: 'MySQL', c: 'erp' }, { n: 'SQL', c: 'erp' },
      { n: 'Sauvegarde & restauration', c: 'erp' },
      { n: 'PHP / Laravel', c: 'dev' }, { n: 'Vue.js', c: 'dev' }, { n: 'JavaScript', c: 'dev' }, { n: 'Python (Flask)', c: 'dev' }, { n: 'Java', c: 'dev' },
      { n: 'AnyDesk', c: 'tools' }, { n: 'TeamViewer', c: 'tools' }, { n: 'Microsoft Office', c: 'tools' }, { n: 'StarUML', c: 'tools' },
      { n: 'ArgoUML', c: 'tools' }, { n: 'NetBeans', c: 'tools' }
    ]
  },
  experience: {
    eyebrow: 'Parcours',
    title: 'De stagiaire à Responsable Technique.',
    now: "aujourd'hui",
    items: [
      { period: '03/2026', end: true, role: 'Responsable Technique — Administrateur systèmes, réseaux & solutions ERP', org: "Entreprise d'ingénierie & services IT · Niamey",
        points: ['Administration des serveurs Windows et Linux, des comptes utilisateurs, des droits d\'accès et d\'Active Directory.', 'Configuration réseau TCP/IP, pare-feu, antivirus et mises à jour de sécurité ; sauvegarde et restauration des données.', 'Installation, paramétrage et support des logiciels Sage ; installation de SQL Server pour les solutions Sage.', "Assistance technique sur site et à distance, diagnostic et résolution d'incidents."] },
      { period: '03/2025 → 02/2026', role: 'Assistant administrateur systèmes & réseaux', org: "Entreprise d'ingénierie & services IT · Niamey",
        points: ['Déploiement de postes de travail et configuration de l\'environnement Windows.', 'Support aux utilisateurs et aux solutions ERP ; sauvegarde et restauration de bases de données.', 'Appui aux tâches réseau, maintenance informatique et traitement des incidents.'] },
      { period: '07 – 08/2024', role: 'Stagiaire — support & maintenance informatique', org: 'Stage pratique de 2 mois', points: ['Participation aux activités de support et de maintenance informatique.'] },
      { period: '04 – 07/2023', role: 'Agent de guichet', org: "Zeyna Transfert d'Argent", points: ['Opérations financières pour les clients, accueil et satisfaction client.'] },
      { period: '03/2022', role: 'Stage pratique — DDCI', org: 'Assemblée Nationale du Niger', points: ["Conception et automatisation d'une base de données.", 'Maintenance de postes informatiques, installation et mise à jour de logiciels.'] }
    ]
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Des applications concrètes, de la conception au déploiement.',
    note: "Aperçus de l'interface des applications.",
    labels: { role: 'Contexte', stack: 'Technologies', points: 'Points clés' },
    items: [
      { kind: 'joblink', title: 'JobLink Niger', tag: "Projet de fin d'études", context: "Projet de fin d'études réalisé en équipe, à l'Université Islamique au Niger.",
        text: "Plateforme de mise en réseau et de mise en correspondance professionnelle pour le marché de l'emploi nigérien.",
        stack: ['Laravel', 'Vue.js', 'MySQL'], points: ['Mise en relation entre candidats et employeurs', 'Interface web moderne en Vue.js', 'API et base de données avec Laravel / MySQL'] },
      { kind: 'interventions', title: 'Gestion des interventions', tag: 'Application métier', context: 'Application web conçue pour le suivi des interventions sur le terrain.',
        text: 'Application web multi-acteurs pour organiser et suivre les interventions, avec des espaces adaptés à chaque rôle.',
        stack: ['Laravel', 'Vue.js'], points: ['Gestion des rôles et des accès', 'Suivi des interventions et de leur état', 'Interface claire pour les utilisateurs terrain'] },
      { kind: 'resto', title: "Gestion d'un restaurant", tag: 'Application de bureau', context: 'Application de bureau réalisée en Java.',
        text: "Application de gestion d'un restaurant : commandes, tables et facturation.",
        stack: ['Java', 'NetBeans', 'UML'], points: ['Modélisation UML avant développement', 'Gestion des commandes et des tables', 'Interface de bureau en Java'] }
    ],
    more: 'Plus de code sur',
    github: 'mon GitHub'
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation, certifications et langues.',
    studies: [
      { t: "Bachelor (Bac+4) en Informatique et Technologies de l'Information", o: 'Université Islamique au Niger (UIN) · Faculté des Sciences et Techniques' },
      { t: 'BTS en Informatique de Gestion', o: '' },
      { t: 'Baccalauréat Professionnel en Informatique de Gestion', o: 'LEP Issa Beri' },
      { t: "BEP en Informatique de Gestion", o: 'LEP Issa Beri' }
    ],
    certsTitle: 'Certifications',
    certs: ['Cisco · Networking Basics', 'Cisco · JavaScript Essentials 1'],
    langsTitle: 'Langues',
    langs: [{ n: 'Français', l: 'Très bien', v: 95 }, { n: 'Haoussa', l: 'Très bien', v: 95 }, { n: 'Zarma', l: 'Très bien', v: 95 }, { n: 'Anglais', l: 'Passable', v: 55 }]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Un projet, une mission, une opportunité ? Parlons-en.',
    lead: "Écrivez-moi : je réponds en général sous 24 h.",
    labels: { email: 'E-mail', phone: 'Téléphone', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub', place: 'Localisation' },
    place: 'Niamey, Niger',
    form: { name: 'Nom', email: 'E-mail', message: 'Message', send: 'Envoyer le message', sending: 'Envoi en cours…', ok: 'Merci ! Votre message a bien été envoyé, je vous réponds rapidement.', err: "L'envoi a échoué. Écrivez-moi directement par e-mail ou WhatsApp." }
  },
  footer: { made: 'Conçu et développé à Niamey' }
}

const en = {
  ui: { menu: 'Menu', dark: 'Dark', light: 'Light', lang: 'FR', skip: 'Skip to content', cv: 'Download my CV', top: 'Back to top' },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Expertise' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ],
  hero: {
    status: 'Open to new opportunities',
    hi: "Hello, I'm",
    name: ['Oumar Farouk', 'Mahaman Habibou'],
    title: 'Technical Lead',
    subtitle: 'Systems, networks & ERP solutions',
    lead: 'I look after the servers, networks and Sage ERP solutions of companies, and build the web applications they need. Based in Niamey, I work on site and remotely.',
    primary: 'Get in touch',
    secondary: 'View my projects',
    chips: ['Sage 100 · Payroll · Sales · Assets', 'Windows Server · Linux · Active Directory', 'Laravel · Vue.js · SQL Server'],
    portrait: 'Profile photo'
  },
  stats: [
    { n: 2, plus: true, label: 'years of professional experience' },
    { n: 4, plus: false, label: 'Sage modules mastered' },
    { n: 3, plus: false, label: 'projects delivered' },
    { n: 4, plus: false, label: 'languages spoken' }
  ],
  about: {
    eyebrow: 'About',
    title: 'A profile at the crossroads of infrastructure, ERP and development.',
    paras: [
      'Graduated in Computer Science and Information Technology, I am passionate about information systems, databases and infrastructure reliability.',
      'I started with a support internship in 2024, grew into systems and network administration, and today into technical leadership: Windows and Linux servers, Active Directory, security, backups, user support, and installation and configuration of Sage software with SQL Server.',
      'In parallel, I build full web applications with Laravel and Vue.js. This dual profile, operations and development, lets me understand real-world needs before writing a single line of code.'
    ],
    valuesTitle: 'What you can count on',
    values: ['Rigor and respect for procedures', 'Service mindset and communication', 'Organization and time management', 'Team spirit', 'Ability to work under pressure']
  },
  services: {
    eyebrow: 'Expertise',
    title: 'What I can take care of for you.',
    items: [
      { title: 'Servers & systems', text: 'Installation, administration and monitoring of servers and workstations.', points: ['Windows Server, Linux (Ubuntu, Debian)', 'Active Directory, accounts and access rights', 'Virtualization: VMware, VirtualBox'] },
      { title: 'Networks & security', text: 'A reliable, protected network and backed-up data.', points: ['TCP/IP configuration, network printers', 'Firewall, antivirus, security updates', 'Data backup and restore'] },
      { title: 'Sage ERP & databases', text: "Setting up and maintaining the company's management solutions.", points: ['Sage Accounting, Payroll & HR, Sales, Assets', 'SQL Server, SSMS, MySQL', 'Installation, configuration, user training'] },
      { title: 'Web development', text: 'Custom business applications designed around their users.', points: ['Laravel (PHP), Vue.js, JavaScript', 'Python (Flask), Java', 'UML modeling, databases'] },
      { title: 'Support & maintenance', text: 'Fast assistance so that work never stops.', points: ['On site and remote (AnyDesk, TeamViewer)', 'Hardware and software diagnostics', 'Preventive and corrective maintenance'] }
    ]
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools and technologies I work with.',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'infra', label: 'Systems & networks' },
      { id: 'erp', label: 'ERP & data' },
      { id: 'dev', label: 'Development' },
      { id: 'tools', label: 'Tools' }
    ],
    items: [
      { n: 'Windows Server', c: 'infra' }, { n: 'Linux (Ubuntu, Debian)', c: 'infra' }, { n: 'Windows 10/11', c: 'infra' },
      { n: 'Active Directory', c: 'infra' }, { n: 'TCP/IP', c: 'infra' }, { n: 'Firewall', c: 'infra' },
      { n: 'Antivirus & updates', c: 'infra' }, { n: 'Network printers', c: 'infra' }, { n: 'VMware', c: 'infra' },
      { n: 'VirtualBox', c: 'infra' }, { n: 'Preventive / corrective maintenance', c: 'infra' },
      { n: 'Sage Accounting', c: 'erp' }, { n: 'Sage Payroll & HR', c: 'erp' }, { n: 'Sage Sales', c: 'erp' }, { n: 'Sage Assets', c: 'erp' },
      { n: 'SQL Server', c: 'erp' }, { n: 'SSMS', c: 'erp' }, { n: 'MySQL', c: 'erp' }, { n: 'SQL', c: 'erp' },
      { n: 'Backup & restore', c: 'erp' },
      { n: 'PHP / Laravel', c: 'dev' }, { n: 'Vue.js', c: 'dev' }, { n: 'JavaScript', c: 'dev' }, { n: 'Python (Flask)', c: 'dev' }, { n: 'Java', c: 'dev' },
      { n: 'AnyDesk', c: 'tools' }, { n: 'TeamViewer', c: 'tools' }, { n: 'Microsoft Office', c: 'tools' }, { n: 'StarUML', c: 'tools' },
      { n: 'ArgoUML', c: 'tools' }, { n: 'NetBeans', c: 'tools' }
    ]
  },
  experience: {
    eyebrow: 'Experience',
    title: 'From intern to Technical Lead.',
    now: 'present',
    items: [
      { period: '03/2026', end: true, role: 'Technical Lead — Systems, network & ERP administrator', org: 'Engineering & IT services company · Niamey',
        points: ['Administration of Windows and Linux servers, user accounts, access rights and Active Directory.', 'TCP/IP network configuration, firewall, antivirus and security updates; data backup and restore.', 'Installation, configuration and support of Sage software; SQL Server setup for Sage solutions.', 'On-site and remote technical assistance, incident diagnosis and resolution.'] },
      { period: '03/2025 → 02/2026', role: 'Assistant systems & network administrator', org: 'Engineering & IT services company · Niamey',
        points: ['Workstation deployment and Windows environment configuration.', 'User support and ERP solutions support; database backup and restore.', 'Network task support, IT maintenance and incident handling.'] },
      { period: '07 – 08/2024', role: 'Intern — IT support & maintenance', org: '2-month practical internship', points: ['Took part in IT support and maintenance activities.'] },
      { period: '04 – 07/2023', role: 'Counter agent', org: "Zeyna Transfert d'Argent", points: ['Financial transactions for customers, reception and customer satisfaction.'] },
      { period: '03/2022', role: 'Practical internship — DDCI', org: 'National Assembly of Niger', points: ['Design and automation of a database.', 'Workstation maintenance, software installation and updates.'] }
    ]
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Real applications, from design to deployment.',
    note: 'Screenshots of the applications.',
    labels: { role: 'Context', stack: 'Technologies', points: 'Key points' },
    items: [
      { kind: 'joblink', title: 'JobLink Niger', tag: 'Final-year project', context: 'Team final-year project at the Islamic University of Niger.',
        text: 'Networking and professional matching platform for the Nigerien job market.',
        stack: ['Laravel', 'Vue.js', 'MySQL'], points: ['Connects candidates and employers', 'Modern web interface in Vue.js', 'API and database with Laravel / MySQL'] },
      { kind: 'interventions', title: 'Interventions management', tag: 'Business application', context: 'Web application designed to track field interventions.',
        text: 'Multi-role web application to organize and track interventions, with spaces adapted to each role.',
        stack: ['Laravel', 'Vue.js'], points: ['Role and access management', 'Intervention and status tracking', 'Clear interface for field users'] },
      { kind: 'resto', title: 'Restaurant management', tag: 'Desktop application', context: 'Desktop application built in Java.',
        text: 'Restaurant management application: orders, tables and billing.',
        stack: ['Java', 'NetBeans', 'UML'], points: ['UML modeling before development', 'Order and table management', 'Java desktop interface'] }
    ],
    more: 'More code on',
    github: 'my GitHub'
  },
  education: {
    eyebrow: 'Education',
    title: 'Education, certifications and languages.',
    studies: [
      { t: "Bachelor's degree (4 years) in Computer Science and Information Technology", o: 'Islamic University of Niger (UIN) · Faculty of Science and Technology' },
      { t: 'Higher Technician Diploma (BTS) in Business Computing', o: '' },
      { t: 'Professional Baccalaureate in Business Computing', o: 'LEP Issa Beri' },
      { t: 'Vocational Certificate (BEP) in Business Computing', o: 'LEP Issa Beri' }
    ],
    certsTitle: 'Certifications',
    certs: ['Cisco · Networking Basics', 'Cisco · JavaScript Essentials 1'],
    langsTitle: 'Languages',
    langs: [{ n: 'French', l: 'Very good', v: 95 }, { n: 'Hausa', l: 'Very good', v: 95 }, { n: 'Zarma', l: 'Very good', v: 95 }, { n: 'English', l: 'Fair', v: 55 }]
  },
  contact: {
    eyebrow: 'Contact',
    title: "A project, a mission, an opportunity? Let's talk.",
    lead: 'Write to me: I usually reply within 24 hours.',
    labels: { email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub', place: 'Location' },
    place: 'Niamey, Niger',
    form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send message', sending: 'Sending…', ok: "Thank you! Your message has been sent, I'll reply shortly.", err: 'Sending failed. Please write to me directly by email or WhatsApp.' }
  },
  footer: { made: 'Designed and built in Niamey' }
}

export default { fr, en }
