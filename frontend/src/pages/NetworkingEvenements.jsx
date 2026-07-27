import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, Heart, Lightbulb, Network, Rocket, Target, Users } from 'lucide-react';
import { EVENTS, IMG } from '../mock';

const impactPillars=[
 ['ÉVÉNEMENTS PROFESSIONNELS','Conférences, forums, panels, séminaires et masterclass.',Users],
 ['JOB DATING & RENCONTRES EMPLOI','Mise en relation directe entre talents, recruteurs et entreprises.',BriefcaseBusiness],
 ['ENTREPRENEURIAT FÉMININ','Valorisation, accompagnement et mise en lumière des femmes leaders.',Heart],
 ['NETWORKING & COMMUNAUTÉS','Création de réseaux solides et d’alliances stratégiques.',Network],
 ['ATELIERS & MASTERCLASS','Apprentissage pratique, partage d’expertise et montée en compétences.',Rocket],
];

const impactBenefits=[
 ['CONNEXIONS','Créer des liens significatifs entre talents, entreprises et partenaires.',Users],
 ['OPPORTUNITÉS','Ouvrir des portes, favoriser l’emploi, les partenariats et la croissance.',Lightbulb],
 ['INSPIRATION','Partager des idées, des parcours et des solutions pour aller plus loin ensemble.',Target],
 ['IMPACT DURABLE','Contribuer au développement économique, social et humain de nos communautés.',BarChart3],
];
export default function NetworkingEvenements(){const [activeEvent,setActiveEvent]=useState(0);useEffect(()=>{const timer=setInterval(()=>setActiveEvent(x=>(x+1)%EVENTS.length),5200);return()=>clearInterval(timer)},[]);const event=EVENTS[activeEvent];return <main className="pt-[72px] networking-page">
 <section className="events-impact-intro">
  <div className="events-impact-shell">
   <div className="events-impact-copy">
    <h1>ÉVÉNEMENTS<br/><span>&amp; IMPACT</span></h1>
    <h2>Créer des connexions.<br/>Impulser le changement.</h2>
    <i/>
    <p>MCE conçoit et organise des événements à fort impact pour rassembler, inspirer et créer des opportunités durables pour les talents, les entreprises et les communautés.</p>
    <div className="events-impact-pillars">{impactPillars.map(([title,text,Icon])=><article key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    <Link to="/contact">Construire un événement <ArrowRight/></Link>
   </div>
   <div className="events-impact-collage">
    <figure><img src={IMG.event1} alt="Panel professionnel MCE"/></figure>
    <figure><img src={IMG.event2} alt="Rencontre de networking"/></figure>
    <figure><img src={IMG.women1} alt="Conférence et prise de parole"/></figure>
    <div><b>INSPIRER</b><b>CONNECTER</b><b>TRANSFORMER</b></div>
   </div>
   <div className="events-impact-benefits">{impactBenefits.map(([title,text,Icon])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div>
 </section>
 <section className="networking-showcase"><div className="max-w-[1120px] mx-auto px-6"><header><span>RENCONTRES À VALORISER</span><h2>Des événements qui connectent et créent des opportunités</h2><p>Networking, emploi, entrepreneuriat féminin et rencontres partenaires : chaque format est conçu autour d’un public, d’un objectif et d’un impact attendu.</p></header><div className="event-feature-slide" style={{backgroundImage:`linear-gradient(90deg,rgba(4,15,29,.92),rgba(4,15,29,.35)),url('${IMG[event.img]}')`}}><button type="button" aria-label="Événement précédent" onClick={()=>setActiveEvent((activeEvent-1+EVENTS.length)%EVENTS.length)}><ArrowLeft/></button><div><small>ÉVÉNEMENT {String(activeEvent+1).padStart(2,'0')} / {String(EVENTS.length).padStart(2,'0')}</small><span>{event.tag}</span><h3>{event.title}</h3><p>{event.desc}</p></div><button type="button" aria-label="Événement suivant" onClick={()=>setActiveEvent((activeEvent+1)%EVENTS.length)}><ArrowRight/></button></div><div className="event-slide-progress">{EVENTS.map((e,i)=><button type="button" key={e.title} className={i===activeEvent?'active':''} aria-label={`Afficher ${e.title}`} onClick={()=>setActiveEvent(i)}/>)}</div><nav className="event-slide-titles">{EVENTS.map((e,i)=><button type="button" key={e.title} className={i===activeEvent?'active':''} onClick={()=>setActiveEvent(i)}>{e.title}</button>)}</nav></div></section>
 <section className="networking-partners"><div className="max-w-[1100px] mx-auto px-6"><CalendarDays/><div><h2>Un événement à imaginer avec MCE ?</h2><p>Définissons le public, le format, les partenaires, le programme et l’expérience attendue.</p></div><Link to="/contact">Parler de l’événement <ArrowRight/></Link></div></section>
 <div className="networking-footer-space" aria-hidden="true" />
</main>}
