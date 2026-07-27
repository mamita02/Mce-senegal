import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileCarouselControls from '../components/MobileCarouselControls';
import {
  ArrowRight, ArrowRightLeft, BarChart3, Bell, Building2, Calendar,
  CheckCircle2, Cloud, Database, Download, FileSpreadsheet, FileText,
  FolderOpen, HeartHandshake, Layers3, LayoutDashboard, Lock,
  MessageCircle, RefreshCcw, Server, Settings2, Sparkles, Stethoscope,
  Store, Users, XCircle,
} from 'lucide-react';

const softwareFeatures = [
  ['Comptes utilisateurs', 'Connexion, rôles, profils, droits d’accès et espaces privés.', Users, '#0787ce'],
  ['Interface admin', 'Gestion des contenus, utilisateurs, demandes, dossiers ou opérations.', Settings2, '#20cbd2'],
  ['Formulaires intelligents', 'Collecte de données, demandes clients, inscriptions et qualification.', FileText, '#7561ff'],
  ['Base de données', 'Organisation claire des clients, documents, transactions ou historiques.', Database, '#ff8643'],
  ['Documents & fichiers', 'Ajout, consultation, stockage et suivi des fichiers importants.', FolderOpen, '#18b997'],
  ['Notifications', 'Emails, alertes internes, rappels, confirmation et suivi automatique.', Bell, '#0787ce'],
  ['Statistiques', 'Indicateurs, graphiques, tableaux de bord et suivi d’activité.', BarChart3, '#20cbd2'],
  ['Exports', 'Génération de fichiers, rapports, listes ou données exploitables.', Download, '#7561ff'],
];
const projectMethod = [
  ['Diagnostic métier', 'Nous analysons votre activité, vos processus, vos contraintes et vos objectifs.'],
  ['Cahier des charges', 'Nous définissons les fonctionnalités, les rôles, les données et les priorités.'],
  ['Architecture', 'Nous préparons la structure de l’outil : pages, base de données, accès et parcours.'],
  ['Prototype ou maquette', 'Nous validons l’expérience utilisateur avant le développement complet.'],
  ['Développement', 'Nous créons l’outil, les interfaces, les formulaires, la logique et les accès.'],
  ['Tests & évolution', 'Nous testons, corrigeons, formons les utilisateurs et préparons les évolutions.'],
];
const technicalChoices = [
  ['FRONTEND', 'Interfaces claires', 'Création de pages, tableaux de bord, espaces utilisateurs, formulaires et parcours responsive.', LayoutDashboard],
  ['BACKEND', 'Logique métier', 'Gestion des données, règles, traitements, accès, automatisations et connexions entre modules.', Server],
  ['BASE DE DONNÉES', 'Données structurées', 'Organisation fiable des utilisateurs, dossiers, contenus, fichiers, suivis ou transactions.', Database],
  ['SÉCURITÉ', 'Accès protégés', 'Gestion des rôles, droits, sauvegardes, confidentialité, séparation des comptes et bonnes pratiques.', Lock],
  ['DÉPLOIEMENT', 'Mise en ligne', 'Hébergement, nom de domaine, configuration, tests, mise en production et accompagnement.', Cloud],
  ['MAINTENANCE', 'Évolution continue', 'Corrections, améliorations, nouveaux modules, suivi technique et adaptation selon les usages.', RefreshCcw],
];
const businessUses = [
  ['Santé', 'Gestion de rendez-vous, dossiers, documents, patients et organisation de cabinet.', Stethoscope],
  ['PME', 'Suivi client, gestion interne, CRM simple, reporting, équipe et opérations.', Building2],
  ['ONG', 'Suivi de bénéficiaires, formulaires, projets, rapports, équipes terrain et documents.', HeartHandshake],
  ['Commerce', 'Catalogue, commandes, fournisseurs, clients, suivi de demandes et gestion d’activité.', Store],
];
const businessProblems = ['Vous gérez encore vos clients sur plusieurs fichiers Excel qui se contredisent.','Vos commerciaux perdent du temps à chercher les bonnes informations.','Vous n’avez pas de vraie visibilité sur vos ventes ou vos stocks en temps réel.','Vos équipes ressaisissent les mêmes données dans 3 outils différents.','Un logiciel du marché ne colle pas exactement à votre métier.','Vos tableaux de bord sont bricolés et personne ne les consulte.'];
const saasServices = [['saas','SaaS / logiciel métier','Une plateforme évolutive conçue autour de votre activité.',Layers3],['application-web','Application web','Une interface professionnelle accessible depuis tous vos appareils.',LayoutDashboard],['crm','CRM / outil interne','Clients, opérations, équipes et indicateurs réunis au même endroit.',Users],['automatisation','Automatisation','Des tâches répétitives transformées en flux simples et fiables.',RefreshCcw]];

function SaaSHeading({ eyebrow, title, text }) {
  return <div className="saas-section-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>;
}

export default function SaaSLogiciels() {
  const [problemIndex,setProblemIndex]=useState(0);
  useEffect(()=>{const timer=setInterval(()=>setProblemIndex(x=>(x+1)%businessProblems.length),4300);return()=>clearInterval(timer)},[]);
  return <main className="pt-[72px]">
    <section className="saas-hero relative overflow-hidden text-white" style={{ background: 'radial-gradient(1200px 500px at 80% 20%, rgba(15,134,177,0.35) 0%, transparent 60%), linear-gradient(135deg, #07182D 0%, #082747 60%, #16486E 100%)' }}>
      <div className="absolute inset-0 opacity-30 world-dots-bg" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7"><h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05]">Vos processus méritent<br />mieux qu’un <span className="line-through decoration-mce-gold decoration-[3px]">fichier Excel</span>.<br /><span className="text-mce-teal">Ils méritent un vrai outil.</span></h1><p className="mt-6 text-white/80 text-[15px] leading-relaxed max-w-2xl">CRM, ERP léger, outils métiers, automatisation, tableaux de bord… MCE conçoit les logiciels et plateformes SaaS qui font gagner du temps à vos équipes.</p><div className="flex flex-wrap gap-3 mt-8"><Link to="/contact?service=saas#formulaire-devis" className="btn-primary"><Calendar className="w-4 h-4" /> DEMANDER UN DEVIS</Link></div></div>
        <div className="lg:col-span-5"><div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5 shadow-2xl"><div className="flex items-center gap-2 mb-4"><i className="w-2 h-2 rounded-full bg-red-400"/><i className="w-2 h-2 rounded-full bg-amber-400"/><i className="w-2 h-2 rounded-full bg-green-400"/><span className="ml-auto text-[11px] text-white/60">app.mce.sn</span></div><div className="grid grid-cols-3 gap-3">{[['Clients','1 248'],['Opérations','76'],['Suivi','Temps réel']].map(([a,b])=><div key={a} className="rounded-lg bg-white/5 p-3 border border-white/10"><small className="text-white/55">{a}</small><b className="block mt-1">{b}</b></div>)}</div><div className="mt-4 rounded-lg bg-white/5 p-4 border border-white/10"><svg viewBox="0 0 300 80" className="w-full h-20"><polyline points="0,65 45,52 85,57 125,35 165,42 205,21 250,27 300,9" stroke="#22d3ee" strokeWidth="3" fill="none"/><polyline points="0,65 45,52 85,57 125,35 165,42 205,21 250,27 300,9 300,80 0,80" fill="rgba(34,211,238,.13)"/></svg></div></div></div>
      </div>
    </section>

    <section className="saas-problem-slider"><div className="max-w-[1100px] mx-auto px-6"><SaaSHeading eyebrow="VOUS VOUS RECONNAISSEZ ?" title="Les signes que votre entreprise a besoin d’un outil sur mesure" text="Quelques situations fréquentes à découvrir au fil du carrousel."/><div className="saas-problem-stage"><button type="button" onClick={()=>setProblemIndex((problemIndex-1+businessProblems.length)%businessProblems.length)}>←</button><article><span>{String(problemIndex+1).padStart(2,'0')} / {String(businessProblems.length).padStart(2,'0')}</span><XCircle/><p>{businessProblems[problemIndex]}</p></article><button type="button" onClick={()=>setProblemIndex((problemIndex+1)%businessProblems.length)}>→</button></div><div className="saas-problem-dots">{businessProblems.map((x,i)=><button type="button" key={x} className={i===problemIndex?'active':''} onClick={()=>setProblemIndex(i)} aria-label={`Afficher le point ${i+1}`}/>)}</div><aside><Sparkles/><div><b>MCE peut concevoir un CRM ou un logiciel métier adapté à votre organisation.</b><p>Un outil pensé pour vos processus, pas l’inverse.</p></div><Link to="/contact?service=crm#formulaire-devis">Demander un devis <ArrowRight/></Link></aside></div></section>

    <section className="saas-services-offered"><div className="max-w-[1120px] mx-auto px-6"><SaaSHeading eyebrow="SERVICES OFFERTS" title="Choisissez le type de solution à étudier" text="Chaque prestation est proposée sur devis après clarification du besoin, des utilisateurs et des fonctionnalités."/><div>{saasServices.map(([value,title,text,Icon])=><article key={value}><Icon/><div><h3>{title}</h3><p>{text}</p><span>Sur devis</span></div><Link to={`/contact?service=${value}#formulaire-devis`}>Demander un devis <ArrowRight/></Link></article>)}</div></div></section>

    <section className="saas-transform-section py-20"><div className="mx-auto max-w-[1200px] px-6"><div className="saas-transform-grid"><div className="saas-transform-copy"><span className="saas-pill">LE DÉCLIC</span><h2>Passer d’une organisation dispersée à un outil qui travaille avec vous.</h2><p>Fichiers éparpillés, messages isolés et tâches répétées deviennent une seule base claire, des processus automatisés et une visibilité immédiate sur l’activité.</p><div className="saas-result-list"><span><CheckCircle2/> Une donnée saisie une seule fois</span><span><CheckCircle2/> Des équipes alignées</span><span><CheckCircle2/> Un pilotage plus rapide</span></div></div><div className="saas-3d-scene"><div className="legacy-stack"><div className="legacy-card legacy-excel"><FileSpreadsheet/> Excel</div><div className="legacy-card legacy-message"><MessageCircle/> Messages</div><div className="legacy-card legacy-paper"><FileText/> Formulaires</div></div><div className="saas-flow"><i/><i/><i/><ArrowRightLeft/></div><div className="optimized-system"><div className="optimized-top"><Layers3/><b>Outil métier MCE</b><span>En ligne</span></div><div className="optimized-kpis"><i/><i/><i/></div><div className="optimized-chart"><span/><span/><span/><span/><span/></div><div className="optimized-status"><CheckCircle2/> Données centralisées et à jour</div></div></div></div></div></section>

    <section className="saas-content-section saas-features-section py-20 bg-white"><div className="mx-auto max-w-[1200px] px-6"><SaaSHeading eyebrow="FONCTIONNALITÉS POSSIBLES" title="Un outil métier peut intégrer exactement ce dont vous avez besoin" text="Chaque projet est différent. MCE vous aide à définir les fonctionnalités essentielles pour créer une première version utile, claire et évolutive."/><div id="saas-features-carousel" className="saas-feature-grid">{softwareFeatures.map(([title,text,Icon,color])=><article className="saas-info-card" style={{'--card-accent':color}} key={title}><span className="saas-card-dot"/><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div><MobileCarouselControls targetId="saas-features-carousel" /></div></section>
    <section id="docmanya" className="saas-platforms"><div className="max-w-[1200px] mx-auto px-6"><div className="docmanya-showcase"><div><span>PLATEFORME MCE</span><h2>DocManya</h2><h3>La gestion documentaire pensée pour vos équipes.</h3><p>Centralisation des documents, accès par rôles, circuits de validation, recherche, traçabilité et suivi : DocManya illustre la capacité de MCE à transformer un processus métier en plateforme claire et exploitable.</p><Link to="/contact?service=saas#formulaire-devis">Demander une démonstration <ArrowRight/></Link></div><div className="docmanya-ui"><header><b>D</b><span>DocManya</span><i>En ligne</i></header>{['Contrats & dossiers','Validations en attente','Documents partagés','Journal d’activité'].map((x,i)=><article key={x}><FileText/><span>{x}</span><b>{[24,7,18,42][i]}</b></article>)}</div></div><div className="future-platforms"><p>FUTURES PLATEFORMES MCE</p>{[['MCE Talents','Recrutement & suivi'],['MCE Sales','CRM commercial'],['MCE Learn','Formation & progression']].map(([t,d])=><article key={t}><span>{t}</span><small>{d}</small></article>)}</div></div></section>
    <section className="saas-method-section py-20"><div className="mx-auto max-w-[1200px] px-6"><SaaSHeading eyebrow="MÉTHODE DE PROJET" title="Une construction progressive, maîtrisée et réaliste" text="Pour éviter les projets trop lourds, MCE privilégie une méthode claire : cadrer, prioriser, livrer une première version utile, puis faire évoluer l’outil."/><div className="saas-method-grid">{projectMethod.map(([title,text],index)=><article className="saas-method-card" key={title}><span>{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="saas-content-section py-20 bg-white"><div className="mx-auto max-w-[1200px] px-6"><SaaSHeading eyebrow="APPROCHE TECHNIQUE" title="Des choix techniques adaptés à votre budget et à votre ambition" text="MCE ne propose pas une technologie unique pour tous. Le choix dépend du projet : complexité, données, sécurité, évolutivité, budget et niveau de maintenance souhaité."/><div className="saas-technical-grid">{technicalChoices.map(([tag,title,text,Icon])=><article className="saas-technical-card" key={tag}><span>{tag}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="saas-uses-section py-20"><div className="mx-auto max-w-[1200px] px-6"><SaaSHeading eyebrow="POUR QUELS USAGES ?" title="Des logiciels métiers pour plusieurs secteurs" text="Les solutions MCE peuvent être adaptées aux professionnels de santé, aux PME, ONG, écoles, cabinets, commerces, agences, équipes terrain ou plateformes internes."/><div className="saas-use-grid">{businessUses.map(([title,text,Icon],index)=><article className="saas-use-card" key={title}><span>0{index+1}</span><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  </main>;
}
