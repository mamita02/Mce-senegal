import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle2, Cloud, Code2, Database, FileText,
  Gauge, LayoutTemplate, Monitor, Rocket, Server, ShieldCheck,
  Workflow,
} from 'lucide-react';
import { IMG } from '../mock';
import MobileCarouselControls from '../components/MobileCarouselControls';

const pillars = [
  {
    number: '01', icon: Monitor, route: '/solutions-digitales/saas-logiciels',
    title: 'SaaS & logiciels métiers', kicker: 'Organiser et automatiser',
    text: 'CRM, logiciels métiers, applications, automatisation, outils internes, tableaux de bord et solutions sur mesure.',
    items: ['Centraliser les données', 'Réduire les tâches manuelles', 'Piloter l’activité en temps réel'],
    accent: 'teal',
  },
  {
    number: '02', icon: LayoutTemplate, route: '/solutions-digitales/sites-plateformes',
    title: 'Sites & plateformes', kicker: 'Présenter et convertir',
    text: 'Sites vitrines, e-commerce, Landing Pages, plateformes web et interfaces professionnelles.',
    items: ['Présenter une activité clairement', 'Créer des parcours utiles', 'Transformer une visite en contact'],
    accent: 'blue',
  },
  {
    number: '03', icon: ShieldCheck, route: '/solutions-digitales/hebergement-securite',
    title: 'Hébergement & sécurité', kicker: 'Protéger et faire évoluer',
    text: 'Hébergement, maintenance, sauvegardes, sécurité et suivi technique dans la durée.',
    items: ['Maintenir les services disponibles', 'Sécuriser les données et les accès', 'Accompagner les évolutions'],
    accent: 'gold',
  },
];

const technologies = [
  ['React','#61dafb'],['Next.js','#0a1e3a'],['Node.js','#3c873a'],['Laravel','#ff2d20'],
  ['Python','#3776ab'],['Flutter','#02569b'],['AWS','#ff9900'],['Supabase','#3ecf8e'],
  ['Docker','#2496ed'],['Odoo','#875a7b'],['OVHcloud','#123f6d'],['Cloudflare','#f38020'],['Stripe','#635bff'],
];

export default function SolutionsDigitales() {
  return <main className="digital-hub pt-[72px]">
    <section className="digital-hub-hero">
      <img src="/assets/solutions-digitales-hero.jpg" alt="Écosystème technologique professionnel sur ordinateur, tablette et mobile" />
      <div className="digital-hub-overlay" />
      <div className="digital-hero-centered relative mx-auto max-w-[1200px] px-6 py-24 lg:py-32">
        <h1>Des solutions tech<br />pour des entreprises <em>performantes.</em></h1>
        <div className="digital-hero-actions"><a href="#expertises" className="btn-primary rounded-full">Découvrir nos solutions <ArrowRight /></a><Link to="/contact#formulaire-devis" className="btn-outline-light rounded-full"><FileText /> Demander un devis</Link></div>
      </div>
    </section>

    <section id="expertises" className="digital-pillars-section">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="digital-section-head"><span>NOS 3 EXPERTISES</span><h2>Un parcours digital complet, sans offres dispersées</h2><p>Choisissez le point d’entrée qui correspond à votre besoin actuel. MCE peut ensuite connecter les autres briques lorsque le projet évolue.</p></header>
        <div className="digital-pillars">{pillars.map(({number,icon:Icon,route,title,kicker,text,items,accent})=><article key={title} className={`digital-pillar digital-pillar-${accent}`}><div className="digital-pillar-top"><span>{number}</span><Icon /></div><small>{kicker}</small><h3>{title}</h3><p>{text}</p><ul>{items.map(x=><li key={x}><Check />{x}</li>)}</ul><Link to={route}>Découvrir cette expertise <ArrowRight /></Link></article>)}</div>
      </div>
    </section>

    <section className="digital-ecosystem">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2">
        <div><h2>Votre activité ne s’arrête pas à la mise en ligne.</h2><p>Un outil métier peut alimenter une plateforme web. Une plateforme doit être rapide, sécurisée et maintenue. L’hébergement et le suivi technique permettent ensuite de faire évoluer l’ensemble sans repartir de zéro.</p><ul>{['Une architecture adaptée au besoin réel','Des interfaces cohérentes pour les équipes et les clients','Une base technique suivie dans la durée'].map(x=><li key={x}><CheckCircle2 />{x}</li>)}</ul></div>
        <div className="digital-orbit" aria-hidden="true"><div className="orbit-core"><Workflow /><b>ÉCOSYSTÈME MCE</b></div><span className="orbit-saas"><Monitor /> SaaS</span><span className="orbit-web"><LayoutTemplate /> Web</span><span className="orbit-cloud"><Cloud /> Cloud</span><i/><i/><i/></div>
      </div>
    </section>

    <section className="digital-choice">
      <div className="mx-auto max-w-[1100px] px-6"><header className="digital-section-head"><span>PAR OÙ COMMENCER ?</span><h2>Le bon choix dépend du problème à résoudre</h2></header><div className="digital-choice-list"><article><Monitor/><div><h3>Vos équipes perdent du temps avec des fichiers et des tâches manuelles ?</h3><p>Commencez par un logiciel métier, un CRM ou une automatisation.</p></div><Link to="/solutions-digitales/saas-logiciels"><ArrowRight/></Link></article><article><LayoutTemplate/><div><h3>Votre activité doit être mieux comprise, présentée ou accessible en ligne ?</h3><p>Commencez par un site, une Landing Page ou une plateforme professionnelle.</p></div><Link to="/solutions-digitales/sites-plateformes"><ArrowRight/></Link></article><article><Server/><div><h3>Votre solution existe déjà mais doit rester disponible, sûre et performante ?</h3><p>Commencez par l’hébergement, la maintenance et la sécurité.</p></div><Link to="/solutions-digitales/hebergement-securite"><ArrowRight/></Link></article></div></div>
    </section>

    <section className="digital-method">
      <div className="mx-auto max-w-[1200px] px-6"><header className="digital-section-head"><span>MÉTHODE MCE</span><h2>De la compréhension du besoin au suivi technique</h2></header><div id="digital-method-carousel">{[['Cadrer','Comprendre les objectifs, les utilisateurs et les contraintes.',Gauge],['Concevoir','Définir la structure, les parcours et les priorités.',LayoutTemplate],['Construire','Développer une première version utile et testable.',Code2],['Déployer','Mettre en ligne, former et sécuriser les accès.',Rocket],['Faire évoluer','Mesurer, maintenir et améliorer selon les usages.',ShieldCheck]].map(([t,d,I])=><article key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div><MobileCarouselControls targetId="digital-method-carousel"/></div>
    </section>

    <section className="py-14 bg-white digital-tech-slider">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-6"><div className="flex items-center justify-between flex-wrap gap-3"><p className="text-[11px] tracking-[0.35em] font-bold text-mce-navy">NOS TECHNOLOGIES</p><p className="text-[11px] tracking-[0.35em] font-bold text-mce-navy/70">PARTENAIRES TECHNOLOGIQUES</p></div></div>
      <div className="marquee-mask overflow-hidden"><div className="marquee-track">{[...technologies,...technologies].map(([name,color],i)=><div key={`${name}-${i}`} className="flex items-center gap-3 shrink-0 px-2"><div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm"><Code2 className="w-5 h-5" style={{color}}/></div><span className="text-[16px] font-bold" style={{color}}>{name}</span></div>)}</div></div>
    </section>

  </main>;
}
