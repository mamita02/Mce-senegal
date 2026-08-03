import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, GraduationCap, Sparkles, UsersRound } from 'lucide-react';
import { IMG } from '../mock';

const doors=[
  ['01','MCE Academy','Développer les compétences par des formations actives, pratiques et certifiantes.','Formation · Pratique · Mise en situation · Certificat','/talents-rh/academy',GraduationCap,IMG.meeting],
  ['02','Recrutement & sourcing','Identifier, évaluer et recommander les profils adaptés aux besoins des entreprises et organisations.','Besoin · Sourcing · Entretiens · Intégration','/talents-rh/recrutement',BriefcaseBusiness,IMG.team1],
  ['03','Accompagnement RH','Structurer les équipes, les pratiques managériales et le développement des compétences.','Organisation · Management · Performance · Coaching','/talents-rh/accompagnement-rh',UsersRound,IMG.team2],
];
export default function TalentsRH(){return <main className="pt-[72px] rh-hub">
 <section className="rh-hub-hero rh-hub-hero-photo"><picture className="hero-responsive-media"><source media="(max-width: 760px)" srcSet="/assets/talents-rh-hero-mobile.jpg"/><img src="/assets/talents-rh-hero.png" alt="Entretien professionnel entre collaborateurs"/></picture><div/><div className="max-w-[1200px] mx-auto px-6"><h1>Révélez le potentiel<br/>de vos <em>équipes</em> et accélérez<br/>leur développement.</h1><p>Recrutement, sourcing, formations pratiques et accompagnement RH : MCE développe et connecte les talents dont votre organisation a besoin.</p><a href="#portes">Développer vos talents <ArrowRight/></a></div></section>
 <section id="portes" className="rh-doors rh-programs"><div className="max-w-[1200px] mx-auto px-6"><header><span>NOS PROGRAMMES PHARES</span><h2>Trois expertises pour faire progresser les talents et les organisations</h2><p>Former, recruter ou mieux organiser : choisissez le parcours qui correspond à votre situation actuelle.</p></header><div>{doors.map(([n,t,d,tags,to,I,img],index)=><article key={t} className={`rh-program-${index+1}`}><div className="rh-door-image"><img src={img} alt={t}/><span>{n}</span></div><div><I/><h3>{t}</h3><p>{d}</p><small>{tags}</small><Link to={to}>Découvrir ce parcours <ArrowRight/></Link></div></article>)}</div></div></section>
 <section className="rh-hub-flow"><div className="max-w-[1050px] mx-auto px-6"><span>UNE LOGIQUE COMPLÉMENTAIRE</span><h2>Les bonnes personnes, les bonnes compétences et une organisation qui les fait progresser.</h2><div><b>RECRUTER</b><i/><b>FORMER</b><i/><b>STRUCTURER</b></div></div></section>
</main>}
