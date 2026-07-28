import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, BadgeCheck, Check, ClipboardList, Code2, Eye, FileText, Gauge,
  LayoutTemplate, MessageCircle, Palette, Rocket, Search, ShieldCheck,
  ShoppingBag, Smartphone, Sparkles, Target,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/221771234567';

const serviceChips = [
  'Landing Page', 'Site vitrine', 'E-commerce', 'Refonte de site', 'Responsive mobile',
];

const approachCards = [
  { icon: LayoutTemplate, title: 'Structure claire', text: 'Une page pensée pour guider le visiteur vers les informations importantes et l’action attendue.' },
  { icon: BadgeCheck, title: 'Crédibilité', text: 'Une présentation professionnelle pour rassurer vos prospects, partenaires et futurs clients.' },
  { icon: Target, title: 'Conversion', text: 'Des appels à l’action visibles pour encourager une prise de contact ou une demande de devis.' },
];

const projectCards = [
  {
    title: 'Site vitrine',
    text: 'Pour les entreprises, cabinets, ONG, institutions ou professionnels qui veulent présenter leur activité de manière complète et crédible.',
    items: ['Nombre de pages à définir', 'Présentation services, équipe, références', 'Formulaire, WhatsApp, contact', 'Optimisation mobile'],
    button: 'Commander un site vitrine',
  },
  {
    title: 'Site e-commerce',
    text: 'Pour les structures qui souhaitent vendre des produits ou services en ligne, avec catalogue, fiches produits, commandes ou paiement selon le besoin.',
    items: ['Catalogue produits', 'Pages produits et catégories', 'Parcours commande', 'Options de paiement ou demande'],
    button: 'Commander un site e-commerce',
  },
  {
    title: 'Refonte de site',
    text: "Pour moderniser un site existant, améliorer son image, corriger l'expérience mobile ou repositionner la communication.",
    items: ["Audit rapide de l'existant", 'Nouvelle structure de pages', 'Amélioration design et contenu', "Optimisation de l'expérience utilisateur"],
    button: 'Commander une refonte',
  },
];

const features = [
  { icon: FileText, title: 'Formulaire de contact', text: 'Collecte de demandes, devis, inscriptions ou messages clients.' },
  { icon: MessageCircle, title: 'WhatsApp direct', text: 'Boutons visibles pour faciliter la prise de contact rapide.' },
  { icon: ShoppingBag, title: 'Catalogue', text: 'Présentation de produits, services, offres ou réalisations.' },
  { icon: Search, title: 'SEO de base', text: 'Structure claire, titres, textes et organisation adaptée au référencement.' },
  { icon: Smartphone, title: 'Responsive mobile', text: 'Affichage adapté aux smartphones, tablettes et ordinateurs.' },
  { icon: LayoutTemplate, title: 'Pages services', text: 'Création de pages détaillées pour chaque service ou activité.' },
  { icon: ShieldCheck, title: 'Maintenance', text: 'Suivi, corrections, mises à jour et accompagnement technique.' },
  { icon: Gauge, title: 'Hébergement', text: 'Accompagnement sur nom de domaine, hébergement et mise en ligne.' },
];

const processSteps = [
  { icon: ClipboardList, title: 'Brief', text: "Nous clarifions l'objectif, la cible, l'offre, les contenus disponibles et le niveau de besoin." },
  { icon: LayoutTemplate, title: 'Structure', text: "Nous organisons les sections, les messages clés, les appels à l'action et le parcours utilisateur." },
  { icon: Palette, title: 'Design', text: 'Nous créons une interface claire, professionnelle, responsive et cohérente avec votre image.' },
  { icon: Code2, title: 'Intégration', text: 'Nous intégrons les textes, images, boutons, formulaires, liens et éléments nécessaires.' },
  { icon: Eye, title: 'Tests', text: "Nous vérifions l'affichage mobile, les liens, les boutons, les formulaires et les performances visibles." },
  { icon: Rocket, title: 'Mise en ligne', text: 'Nous accompagnons la publication, les derniers ajustements et la prise en main si nécessaire.' },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="web-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-2xl font-black tracking-tight text-mce-navy md:text-[32px]">{title}</h2>
      {description && <p className="mt-3 text-[13px] leading-6 text-mce-navy/60">{description}</p>}
    </div>
  );
}

function QuoteButton({ children, className = '' }) {
  return <Link to="/contact?service=site-vitrine#formulaire-devis" className={`btn-primary rounded-full ${className}`}>{children}</Link>;
}

export default function SitesPlateformes() {
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = projectCards[activeProject];
  return (
    <main className="overflow-hidden bg-white pt-[72px]">
      <section className="web-landing-hero relative min-h-[700px]">
        <div className="web-grid absolute inset-0" />
        <div className="web-orb web-orb-one" />
        <div className="web-orb web-orb-two" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-20 lg:min-h-[700px] lg:grid-cols-2 lg:px-10">
          <div className="web-enter">
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-.04em] text-mce-navy md:text-5xl xl:text-[62px]">
              Une présence digitale <span className="text-mce-teal">claire</span>, crédible et conçue pour convertir.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-mce-navy/70 md:text-base">
              MCE conçoit des Landing Pages, sites vitrines, boutiques e-commerce et pages professionnelles qui présentent votre activité, rassurent vos visiteurs et transforment leur attention en contacts et opportunités commerciales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton><FileText className="h-4 w-4" /> Demander une étude de projet</QuoteButton>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="web-secondary-button">
                <MessageCircle className="h-4 w-4" /> WhatsApp MCE
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {serviceChips.map((service) => <a key={service} href="#offres" className="web-service-chip">{service}</a>)}
            </div>
          </div>

          <div className="web-scene web-photo-scene relative hidden h-[480px] md:block" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=88" alt="" />
            <div className="web-photo-caption"><LayoutTemplate/><span><b>Sites & plateformes</b><small>Design professionnel · Expérience fluide</small></span></div>
          </div>
        </div>
      </section>

      <section className="approach-section py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="NOTRE APPROCHE" title="Un site ne doit pas seulement être beau. Il doit être utile." description="Un bon support web explique rapidement qui vous êtes, ce que vous proposez, pourquoi vous êtes crédible et comment vous contacter." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {approachCards.map(({ icon: Icon, title, text }) => <article key={title} className="web-card p-6"><span className="web-icon"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-extrabold text-mce-navy">{title}</h3><p className="mt-2 text-[13px] leading-6 text-mce-navy/60">{text}</p></article>)}
          </div>
        </div>
      </section>

      <motion.section
        id="offres"
        className="landing-offer-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
      >
        <div className="landing-offer-shell">
          <motion.div
            className="landing-offer-copy"
            variants={{ hidden: { opacity: 0, x: -36, rotateY: 8 }, visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          >
            <h2>Landing Page<br />professionnelle</h2>
            <p>
              Une page unique, claire et efficace pour présenter rapidement votre activité, vos services,
              vos informations essentielles et permettre aux visiteurs de vous contacter. C'est l'offre idéale
              pour les TPE, artisans, commerçants, indépendants et porteurs de projets qui veulent une présence
              digitale rapide et professionnelle.
            </p>
            <motion.ul variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } }}>
              {[
                'Présentation claire de votre activité, service ou offre.',
                'Design responsive adapté ordinateur, tablette et mobile.',
                'Boutons de contact, WhatsApp, email ou formulaire selon le besoin.',
                'Structure professionnelle orientée visibilité et conversion.',
                "Possibilité d'intégration à l'écosystème AMANYA selon le projet.",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -18, z: -30 }, visible: { opacity: 1, x: 0, z: 0, transition: { duration: 0.42 } } }}
                >
                  <motion.span whileHover={{ rotateY: 180, scale: 1.08 }} transition={{ duration: 0.45 }}><Check /></motion.span>
                  <strong>{item}</strong>
                </motion.li>
              ))}
            </motion.ul>
            <Link to="/contact?service=landing-page#formulaire-devis" className="landing-order-button">Commander une Landing Page</Link>
          </motion.div>

          <motion.aside
            className="landing-price-card"
            variants={{ hidden: { opacity: 0, x: 42, rotateY: -18, scale: 0.92 }, visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ rotateY: -4, rotateX: 2, y: -7, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <span className="landing-price-label">PRIX FIXE</span>
            <motion.div className="landing-price" initial={{ scale: 0.92 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.45, type: 'spring', stiffness: 220 }}><strong>65 000 <small>FCFA</small></strong></motion.div>
            <p>Pack Landing Page pour une présence digitale simple, rapide et professionnelle.</p>
            <div className="landing-price-highlight" aria-label="Tarif exceptionnel">
              <span>OFFRE EXCEPTIONNELLE</span>
              <i aria-hidden="true" />
              <b>Un tarif clair, sans surprise</b>
            </div>
          </motion.aside>
        </div>
      </motion.section>

      <section className="projects-section py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeading
            eyebrow="PROJETS SUR DEVIS"
            title="Sites vitrines, e-commerce et refontes : chaque projet est étudié selon le besoin"
            description="MCE ne propose plus de prix fixes pour les sites vitrines, sites e-commerce et refontes. Chaque demande est analysée selon le volume de contenu, les fonctionnalités, le niveau de design, les intégrations et l'accompagnement attendu."
          />
          <div className="web-project-selector">
            <div className="web-project-tabs" role="tablist" aria-label="Choisir un type de projet">{projectCards.map((project,index)=><button key={project.title} type="button" role="tab" aria-selected={activeProject===index} className={activeProject===index?'active':''} onClick={()=>setActiveProject(index)}><span>{[<LayoutTemplate/>,<ShoppingBag/>,<Palette/>][index]}</span><span><b>{project.title}</b><small>{index===0?'Une présence claire et crédible.':index===1?'Vendre en ligne avec fluidité.':'Moderniser votre présence digitale.'}</small></span><i>→</i></button>)}</div>
            <article className="web-project-detail" role="tabpanel"><h3>{selectedProject.title}</h3><p>{selectedProject.text}</p><ul>{selectedProject.items.map(item=><li key={item}><Check/>{item}</li>)}</ul><div><p>Un projet en tête ? Définissons ensemble le périmètre idéal.</p><Link to={`/contact?service=${['site-vitrine','e-commerce','refonte-site'][activeProject]}#formulaire-devis`}>Demander une étude <ArrowRight/></Link></div></article>
          </div>
        </div>
      </section>

      <section className="features-section bg-[#f4fbfc] py-20"><div className="mx-auto max-w-[1200px] px-6"><SectionHeading eyebrow="OPTIONS POSSIBLES" title="Des fonctionnalités adaptées selon le niveau du projet" description="Les projets sur devis peuvent intégrer différentes options selon les objectifs : visibilité, vente, collecte de prospects, présentation institutionnelle ou intégration à un outil existant." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ title, text }) => <article key={title} className="web-card p-6"><h3 className="text-lg font-extrabold leading-tight text-mce-navy">{title}</h3><p className="mt-4 text-[13px] leading-6 text-mce-navy/60">{text}</p></article>)}</div></div></section>

      <section className="method-section py-20"><div className="mx-auto max-w-[1200px] px-6"><SectionHeading eyebrow="MÉTHODE MCE" title="Une création structurée, étape par étape" description="Que ce soit pour une Landing Page ou un projet plus complet sur devis, MCE suit une méthode claire pour cadrer, concevoir et livrer un support exploitable." /><div className="method-flow mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{processSteps.map(({ icon: Icon, title, text }) => <article key={title} className="web-card method-card flex gap-4 p-5"><span className="web-step"><Icon className="h-4 w-4" /></span><div><h3 className="text-sm font-extrabold text-mce-navy">{title}</h3><p className="mt-2 text-xs leading-5 text-mce-navy/55">{text}</p></div></article>)}</div></div></section>

      <aside className="web-complementary"><span>En complément, MCE peut accompagner certains projets sur les réseaux sociaux ou la publicité digitale, uniquement sur devis.</span></aside>

      <section className="web-footer-transition" aria-hidden="true"><div className="transition-orbit transition-orbit-one" /><div className="transition-orbit transition-orbit-two" /><div className="transition-line"><span /></div></section>
    </main>
  );
}
