import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Check, ClipboardList, Network, Target, UserRoundCog, UsersRound } from 'lucide-react';
import { IMG } from '../mock';

const issues = [
  ['Les missions ne sont pas clairement réparties', 'Plusieurs personnes font la même chose, certaines tâches sont oubliées, et les responsabilités deviennent difficiles à suivre.', ClipboardList],
  ['L’équipe manque de cadre ou de suivi', 'Les collaborateurs avancent sans méthode commune, sans rythme de contrôle et sans indicateurs simples pour mesurer la progression.', UsersRound],
  ['Le recrutement n’est pas relié à une vraie organisation', 'Recruter sans fiche de poste, sans objectifs et sans parcours d’intégration crée des erreurs coûteuses pour l’entreprise.', BarChart3],
];
const interventions = [
  ['ORGANISATION', 'Structuration des rôles et missions', 'Clarifier qui fait quoi, quelles sont les priorités et comment l’équipe doit fonctionner.', ['Répartition des responsabilités', 'Clarification des missions', 'Organisation par pôles', 'Lecture simple des besoins humains']],
  ['POSTES', 'Fiches de poste et parcours d’intégration', 'Formaliser les attentes pour mieux recruter, intégrer et suivre les collaborateurs.', ['Fiches de poste claires', 'Objectifs de prise de poste', 'Plan d’intégration', 'Suivi des premières semaines']],
  ['PILOTAGE', 'Suivi d’équipe et montée en compétence', 'Installer des habitudes de suivi simples pour aider les équipes à progresser.', ['Rythme de points d’équipe', 'Suivi des objectifs', 'Feedback constructif', 'Besoins en formation']],
];
const questions = [
  ['Qui est responsable de quoi ?', 'Identifier les responsabilités principales, les zones de flou et les tâches sans propriétaire clair.'],
  ['Quels sont les objectifs attendus ?', 'Définir les résultats attendus par poste, par mission ou par période de suivi.'],
  ['Quel profil faut-il recruter ?', 'Relier le recrutement à un besoin réel, une fiche de poste et un environnement concret.'],
  ['Comment suivre la progression ?', 'Mettre en place des points simples, des retours réguliers et des indicateurs lisibles.'],
];
const method = [
  ['Diagnostic de l’organisation actuelle', 'Analyse des rôles, des difficultés, des doublons, des tâches oubliées et des besoins prioritaires.'],
  ['Clarification des responsabilités', 'Répartition des missions, clarification des pôles et définition des responsabilités par personne ou par poste.'],
  ['Création des supports RH utiles', 'Fiches de poste, tableau de répartition, plan d’intégration, grille de suivi ou recommandations RH.'],
  ['Accompagnement à la mise en place', 'Présentation des recommandations, ajustements avec la direction et transmission des outils.'],
  ['Suivi et amélioration', 'Ajustements après utilisation, retours d’expérience et accompagnement de la montée en compétence.'],
];

export default function AccompagnementRH() {
  return <main className="pt-[72px] rh-service rh-support-page">
    <section className="rh-service-hero"><div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"><div><span>ACCOMPAGNEMENT RH</span><h1>Remettre de la clarté dans l’organisation et faire progresser les équipes.</h1><p>MCE aide les structures en croissance à clarifier les rôles, formaliser leurs pratiques RH et installer un cadre de travail simple, opérationnel et durable.</p><Link to="/contact">Évaluer mon organisation RH</Link></div><img src={IMG.team2} alt="Accompagnement des équipes et managers" /></div></section>

    <section className="rh-diagnostic"><div className="max-w-[1180px] mx-auto px-6"><div className="rh-diagnostic-lead"><span>DIAGNOSTIC</span><h2>Quand l’organisation interne devient floue, l’activité ralentit.</h2><p>Le rôle de MCE est d’aider à remettre de la clarté : qui fait quoi, avec quels objectifs, selon quelles priorités et avec quel suivi.</p>{['Clarifier les responsabilités', 'Réduire les incompréhensions', 'Structurer les postes', 'Accompagner la montée en compétence'].map(x => <b key={x}><Check />{x}</b>)}</div><div className="rh-diagnostic-issues">{issues.map(([t,d,I]) => <article key={t}><I/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

    <section className="rh-interventions"><div className="max-w-[1180px] mx-auto px-6"><RHHead tag="NOS INTERVENTIONS" title="Un accompagnement RH simple, opérationnel et adapté aux structures en croissance" text="L’objectif n’est pas d’alourdir votre organisation. L’objectif est de poser un cadre clair, compréhensible et applicable au quotidien."/><div>{interventions.map(([tag,t,d,l]) => <article key={t}><span>{tag}</span><h3>{t}</h3><p>{d}</p><ul>{l.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></div></section>

    <section className="rh-questions"><div className="max-w-[1120px] mx-auto px-6"><RHHead tag="CE QUE MCE CLARIFIE" title="Les 4 questions RH qui structurent une équipe" text="Une organisation efficace repose souvent sur des réponses simples. Le problème vient rarement du manque de volonté, mais du manque de cadre."/><div>{questions.map(([t,d],i) => <article key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="rh-method-list"><div className="max-w-[1050px] mx-auto px-6"><RHHead tag="MÉTHODE" title="Une méthode en 5 temps pour remettre de la clarté" text="MCE intervient avec une logique progressive : comprendre, clarifier, formaliser, transmettre et suivre."/><div>{method.map(([t,d],i) => <article key={t}><span>ÉTAPE {String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

    <section className="rh-final-cta"><div><Network/><h2>Votre équipe a besoin de plus de clarté, de cadre ou de méthode ?</h2><p>Présentez-nous votre organisation, vos difficultés et vos besoins prioritaires. MCE vous aide à structurer une base RH simple, utile et exploitable.</p><div><Link to="/contact">Demander un diagnostic RH</Link><a href="https://wa.me/221771234567" target="_blank" rel="noreferrer" className="whatsapp-btn">Contacter MCE sur WhatsApp</a></div></div></section>
  </main>;
}

function RHHead({tag,title,text}) { return <header className="rh-head"><span>{tag}</span><h2>{title}</h2>{text && <p>{text}</p>}</header>; }
