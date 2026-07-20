// All content data mocked here.
export const IMG = {
  heroHome: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHx8fDE3ODQ1NDI2MjR8MA&ixlib=rb-4.1.0&q=85&w=1400',
  heroDigital: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBjb2Rpbmd8ZW58MHx8fHwxNzg0NTQyNjgwfDA&ixlib=rb-4.1.0&q=85&w=1400',
  heroTalents: 'https://images.pexels.com/photos/9489091/pexels-photo-9489091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1400',
  heroEvents: 'https://images.unsplash.com/photo-1550305080-4e029753abcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBBZnJpY2F8ZW58MHx8fHwxNzg0NTQyNjgwfDA&ixlib=rb-4.1.0&q=85&w=1400',
  heroPartners: 'https://images.unsplash.com/photo-1573166953836-06864dc70a21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxBZnJpY2FuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHx8fDE3ODQ1NDI2MjR8MA&ixlib=rb-4.1.0&q=85&w=1400',
  team1: 'https://images.pexels.com/photos/9487235/pexels-photo-9487235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  team2: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  team3: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  meeting: 'https://images.pexels.com/photos/30688593/pexels-photo-30688593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  women1: 'https://images.unsplash.com/photo-1612365245810-0d73ad771b2d?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  women2: 'https://images.unsplash.com/photo-1515657834497-26509e295154?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  event1: 'https://images.unsplash.com/photo-1744973149087-179e3ed54eae?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  event2: 'https://images.pexels.com/photos/32315949/pexels-photo-32315949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  event3: 'https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  founder: 'https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
  coding: 'https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
};

export const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Solutions digitales', to: '/solutions-digitales' },
  { label: 'Talents & RH', to: '/talents-rh' },
  { label: 'Accompagnement & Événements', to: '/accompagnement-evenements' },
  { label: 'MCE & Partenaires', to: '/mce-partenaires' },
  { label: 'Contact', to: '/contact' },
];

export const HOME_STATS = [
  { value: '20+', label: "Années d'expérience", sub: 'à vos côtés', color: 'teal' },
  { value: '200+', label: 'Entreprises & organisations', sub: 'accompagnées', color: 'purple' },
  { value: '50+', label: 'Formations réalisées', sub: 'chaque année', color: 'gold' },
  { value: '1000+', label: 'Talents recrutés', sub: 'et placés', color: 'red' },
  { value: '98%', label: 'De clients satisfaits', sub: 'et fidèles', color: 'blue' },
];

export const HOME_SOLUTIONS = [
  { title: 'SOLUTIONS DIGITALES', desc: 'Sites web, applications, logiciels métiers, SaaS, plateformes sur mesure.', color: 'teal', to: '/solutions-digitales', img: 'coding' },
  { title: 'TALENTS & RH', desc: 'Recrutement, placement, accompagnement RH, gestion des talents.', color: 'purple', to: '/talents-rh', img: 'team1' },
  { title: 'FORMATIONS & ACADEMY', desc: 'Formations certifiantes, développement personnel, leadership, vente, finance…', color: 'gold', to: '/talents-rh', img: 'meeting' },
  { title: 'ACCOMPAGNEMENT STRATÉGIQUE', desc: 'Conseil, structuration, transformation, croissance et performance.', color: 'red', to: '/accompagnement-evenements', img: 'team2' },
  { title: 'ÉVÉNEMENTS & IMPACT', desc: 'Événements à fort impact, networking, emplois jeunes, entrepreneuriat féminin.', color: 'blue', to: '/accompagnement-evenements', img: 'event1' },
];

export const PARTNERS = [
  { name: 'KEBA CONSULTING', tagline: "L'humain au coeur\nde la performance" },
  { name: 'WOMEN BUILD AFRICA', tagline: "Promouvoir l'entrepreneuriat\nféminin en Afrique" },
  { name: 'SPARCK PROJECT', tagline: 'Innovation, digital et\ndéveloppement de projets' },
  { name: 'STAY UP', tagline: 'Networking\nprofessionnel' },
  { name: 'GOFAR', tagline: 'Global Organisation\nFor Africa' },
  { name: 'Queen Buffet', tagline: 'Restauration\net événementiel' },
  { name: 'PAN AFRICA', tagline: 'Créperie africaine\ncontemporaine' },
  { name: 'OSHUN SPA', tagline: 'Bien-être\net esthétique' },
];

export const EVENTS = [
  { title: 'Afterwork Stay Up', tag: 'NETWORKING', tagColor: 'purple', desc: "Un moment d'échanges et de connexions entre professionnels et entrepreneurs.", img: 'event2' },
  { title: 'Women Build Africa', tag: 'ENTREPRENEURIAT FÉMININ', tagColor: 'red', desc: "Valoriser et accompagner les femmes qui bâtissent l'Afrique de demain.", img: 'women1' },
  { title: 'Queen Buffet', tag: 'LEADERSHIP FÉMININ', tagColor: 'purple', desc: 'Inspirer, motiver et connecter les femmes leaders et entrepreneures.', img: 'women2' },
  { title: 'Emploi Jeunes Talents', tag: 'EMPLOI & INSERTION', tagColor: 'blue', desc: 'Mettre en relation les jeunes talents et les entreprises qui recrutent.', img: 'team3' },
];

export const DIGITAL_EXPERTISES = [
  { title: 'SaaS & Plateformes sur mesure', desc: 'Des plateformes web robustes et évolutives adaptées à vos processus et à vos utilisateurs.', icon: 'Monitor' },
  { title: 'Logiciels métiers & CRM', desc: 'Gestion commerciale, CRM, ERP, outils métiers : centralisez et automatisez vos opérations.', icon: 'FileSpreadsheet' },
  { title: 'Applications web & mobiles', desc: 'Applications intuitives et performantes pour web, iOS et Android.', icon: 'Smartphone' },
  { title: 'Sites web & e-commerce', desc: 'Sites vitrines, e-commerce, landing pages : design moderne et expérience utilisateur optimale.', icon: 'ShoppingCart' },
  { title: 'Hébergement & infrastructure', desc: 'Hébergement performant, sauvegardes, emails professionnels et haute disponibilité.', icon: 'Cloud' },
  { title: 'Sécurité & maintenance', desc: 'Sécurité avancée, mises à jour, surveillance et maintenance continue de vos solutions.', icon: 'ShieldCheck' },
];

export const DIGITAL_BENEFITS = [
  { title: 'Sur mesure', desc: 'Chaque solution est conçue selon vos besoins, vos objectifs et votre secteur.', icon: 'Ruler' },
  { title: 'Scalables', desc: 'Des outils évolutifs qui accompagnent votre croissance sans limite.', icon: 'TrendingUp' },
  { title: 'Intégrées', desc: "Connexion avec vos outils existants pour un écosystème digital cohérent.", icon: 'Puzzle' },
  { title: 'Orientées résultats', desc: 'Des solutions qui automatisent, optimisent et améliorent vos performances.', icon: 'Target' },
];

export const DIGITAL_PROCESS = [
  { step: '01', title: 'Analyse & Stratégie', desc: 'Nous analysons vos besoins et définissons la meilleure stratégie digitale.', icon: 'ClipboardList', color: 'teal' },
  { step: '02', title: 'Conception & Prototype', desc: "Nous concevons l'architecture et les maquettes pour valider l'expérience utilisateur.", icon: 'PenTool', color: 'purple' },
  { step: '03', title: 'Développement & Intégration', desc: 'Développement sécurisé, intégration des fonctionnalités et tests rigoureux.', icon: 'Code2', color: 'blue' },
  { step: '04', title: 'Déploiement & Formation', desc: 'Mise en production, formation des équipes et accompagnement.', icon: 'Rocket', color: 'orange' },
  { step: '05', title: 'Suivi & Évolution', desc: 'Maintenance, support et évolutions pour rester toujours à la pointe.', icon: 'LineChart', color: 'teal' },
];

export const HOSTING_OFFERS = [
  { name: 'STARTER', color: 'teal', tagline: 'Idéal pour les projets légers', items: ['Hébergement web performant', '1 nom de domaine offert*', 'Emails professionnels', 'Sauvegardes automatiques'] },
  { name: 'BUSINESS', color: 'purple', tagline: 'Pour les sites et applications pro', items: ['Hébergement premium', 'SSL inclus', 'Emails professionnels', 'Support technique'] },
  { name: 'PERFORMANCE', color: 'blue', tagline: 'Pour les plateformes et SaaS', items: ['Serveurs haute performance', 'Scalabilité garantie', 'Sécurité avancée', 'Monitoring 24/7'] },
  { name: 'ACCOMPAGNEMENT', color: 'orange', tagline: 'Services complémentaires', items: ['Maintenance & mises à jour', 'Sécurité & sauvegardes', 'Support & évolutions', 'Audit & optimisation'] },
];

export const TECHS = ['React','Next.js','Node.js','Laravel','Python','Flutter','AWS','Supabase','Docker','Odoo'];
export const TECH_PARTNERS = ['OVHcloud','AWS','Cloudflare','Stripe'];

export const RH_SERVICES = [
  { title: 'Recrutement & Placement', desc: 'Sourcing et placement de talents qualifiés pour vos besoins.', icon: 'UserSearch', color: 'purple' },
  { title: 'Accompagnement RH', desc: 'Structuration RH, politique de rémunération, évaluation.', icon: 'Users', color: 'blue' },
  { title: 'Formations professionnelles', desc: 'Certifiantes, techniques et métiers pour vos équipes.', icon: 'GraduationCap', color: 'orange' },
  { title: 'Leadership & Management', desc: 'Développer les compétences de vos leaders et managers.', icon: 'Trophy', color: 'red' },
  { title: 'Communication & Vente', desc: 'Renforcez la performance commerciale et relationnelle.', icon: 'MessagesSquare', color: 'teal' },
  { title: 'Coaching individuel', desc: 'Accompagnement personnalisé pour dirigeants et cadres.', icon: 'HeartHandshake', color: 'gold' },
];

export const RH_PROGRAMS = [
  { title: 'MCE ACADEMY', desc: 'Un catalogue de formations certifiantes en présentiel et en ligne pour développer les compétences clés.', color: 'purple' },
  { title: 'JEUNES TALENTS', desc: 'Programme dédié à l\'insertion et au placement de jeunes talents dans les entreprises.', color: 'orange' },
  { title: 'LEADERSHIP CIRCLE', desc: 'Un cercle de dirigeants pour développer leadership, réseau et impact.', color: 'gold' },
];

export const EVENT_DOMAINS = [
  { num: '1', title: 'ACCOMPAGNEMENT STRATÉGIQUE', subtitle: 'Structurer. Développer. Performer.', desc: "Nous accompagnons les dirigeants, entrepreneurs et organisations dans la définition et la mise en œuvre de stratégies gagnantes.", items: ["Stratégie d'entreprise & plan d'action",'Développement commercial','Méthodes de vente & performance','Partenariats & développement international','Pilotage de projets'], color: 'navy', cta: "DÉCOUVRIR L'ACCOMPAGNEMENT", img: 'team2' },
  { num: '2', title: 'ÉVÉNEMENTS PROFESSIONNELS & NETWORKING', subtitle: 'Rencontrer. Échanger. Se développer.', desc: 'Nous organisons des événements à forte valeur ajoutée pour connecter les talents, les entreprises et les opportunités.', items: ['Networking entrepreneurial','Rencontres entreprises – jeunes talents','Événements emploi & recrutement en direct','Entrepreneuriat féminin & inclusion','Conférences, ateliers & séminaires'], color: 'gold', cta: 'VOIR NOS ÉVÉNEMENTS', img: 'event1' },
  { num: '3', title: 'ÉVÉNEMENTIEL INTERNATIONAL & CONCIERGERIE', subtitle: 'Organiser. Sublimer. Inoubliable.', desc: "Mariages, séminaires, voyages, réceptions… Nous créons des expériences sur mesure, partout dans le monde.", items: ['Événements privés (mariages, réceptions)','Séminaires & conférences internationales','Voyages & incentives','Conciergerie haut de gamme','Coordination & logistique complète'], color: 'purple', cta: 'DÉCOUVRIR NOS PRESTATIONS', img: 'event2' },
];

export const VALUES = [
  { title: 'NOTRE MISSION', desc: 'Créer des solutions concrètes qui génèrent des résultats durables.', icon: 'Target' },
  { title: 'NOTRE VISION', desc: 'Être le partenaire de référence en Afrique, en Europe et au-delà.', icon: 'Eye' },
  { title: 'NOS VALEURS', desc: 'Excellence, intégrité, engagement, innovation, impact humain.', icon: 'Gem' },
  { title: 'NOTRE ADN', desc: 'Écoute, compréhension, personnalisation et accompagnement.', icon: 'Users' },
];

export const REASONS = [
  { title: 'UNE EXPERTISE RECONNUE', desc: "Plus de 20 ans d'expérience dans des secteurs variés.", icon: 'ShieldCheck' },
  { title: 'UNE APPROCHE HUMAINE', desc: "L'humain est au cœur de chaque solution.", icon: 'Heart' },
  { title: 'DES SOLUTIONS SUR MESURE', desc: 'Adaptées à vos objectifs, vos équipes et votre réalité.', icon: 'Puzzle' },
  { title: 'DES RÉSULTATS CONCRETS', desc: 'Mesurables, durables et générateurs de valeur.', icon: 'BarChart3' },
  { title: 'UNE PRÉSENCE INTERNATIONALE', desc: 'Une vision globale, une exécution locale.', icon: 'Globe' },
];

export const FOOTER_LINKS = {
  solutions: ['SaaS & Plateformes','Logiciels métiers & CRM','Applications web & mobiles','Sites web & e-commerce','Hébergement & Infrastructure','Sécurité & Maintenance'],
  talents: ['MCE Academy','Recrutement & Placement','Accompagnement RH','Coaching individuel'],
  accompagnement: ['Conseil & Stratégie','Transformation & Changement','Management & Performance','Impact & Jeunes talents'],
  rapides: ['À propos de MCE','Nos réalisations','Blog','Contact'],
};
