import React from 'react';
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Check, Eye, FileText, Gem, Globe, GraduationCap, Heart,
  Mic2, Monitor, Network, Puzzle, Rocket, ShieldCheck, Target,
  Users,
} from 'lucide-react';
import { IMG, REASONS } from '../mock';
import CTASection from '../components/CTASection';

const ICONS = { Target, Eye, Gem, Users, ShieldCheck, Heart, Puzzle, BarChart3, Globe };

const FOUNDER_POINTS = [
  'Après plus de 20 ans entre management, développement commercial, recrutement et leadership stratégique en France et au Maroc, Mounia Amane a créé MCE avec une conviction claire : les organisations grandissent mieux lorsqu’elles investissent dans l’humain, dans la structuration et dans l’innovation.',
  'MCE développe des passerelles entre la France, le Sénégal, le Maroc et l’Afrique de l’Ouest pour structurer les compétences, professionnaliser les organisations, accompagner l’emploi, l’entrepreneuriat et la transformation digitale.',
  'MCE ne propose pas des solutions génériques : elle crée des parcours concrets et sur mesure : formation, accompagnement RH, recrutement, coaching, outils digitaux, mise en réseau, entrepreneuriat féminin, employabilité des jeunes et initiatives diasporas.',
];

const FOUNDATIONS = [
  ['votre VISION', 'Devenir le connecteur de référence entre l’Europe, le Maroc et l’Afrique de l’Ouest pour les talents et la transformation des organisations.', Eye],
  ['NOTRE MISSION', 'Apporter des solutions concrètes aux entreprises, institutions, ONG, écoles, universités et entrepreneurs pour structurer, former, recruter, digitaliser et accélérer leur croissance.', Target],
  ['NOS VALEURS', 'Excellence, transmission, proximité, innovation, inclusion et impact mesurable.', Gem],
];

const SOLUTIONS = [
  ['FORMATION & MCE ACADEMY', 'Des parcours de formation certifiants et sur mesure pour monter en compétences, structurer et faire évoluer les organisations.', GraduationCap],
  ['TALENTS & RH', 'Recrutement, évaluation, formation continue et développement des compétences pour libérer le potentiel humain.', Users],
  ['ACCOMPAGNEMENT STRATÉGIQUE', 'Conseil et appui stratégique pour structurer, piloter et transformer durablement les organisations.', Target],
  ['SOLUTIONS DIGITALES', 'Outils et solutions digitales pour optimiser les processus, améliorer la performance et accélérer la transformation.', Monitor],
  ['ÉVÉNEMENTS & IMPACT', 'Conférences, forums, ateliers et campagnes à fort impact pour inspirer, connecter et mobiliser les écosystèmes.', Mic2],
];

const COUNTRIES = [
  {
    name: 'FRANCE',
    role: 'Siège & Direction\nStratégie, partenariats internationaux',
    flag: '/assets/mce-about/flag-france-v2.jpg',
    accent: '#146B99',
    items: ['Conseil stratégique & accompagnement des entreprises', 'Solutions digitales & communication', 'Formations & développement des talents', 'Mise en réseau & partenariats'],
  },
  {
    name: 'SÉNÉGAL',
    role: 'Hub Afrique de l’Ouest\nOpérations & Impact',
    flag: '/assets/mce-about/flag-senegal-v2.jpg',
    accent: '#0F8B83',
    items: ['Accompagnement des PME & start-up', 'Développement des compétences et formations', 'Événements, networking & impact social', 'Recrutement & placement de talents'],
  },
  {
    name: 'MAROC',
    role: 'Partenariats &\nDéveloppement Régional',
    flag: '/assets/mce-about/flag-maroc-v2.jpg',
    accent: '#E45B2E',
    items: ['Conseil & accompagnement stratégique', 'Transformation digitale & communication', 'Partenariats institutionnels & privés', 'Programmes de formation & RH'],
  },
];

export default function MCEPartenaires() {
  return (
    <main className="pt-[72px] mce-about-page">
      <section className="founder-section">
        <div className="founder-shell">
          <figure>
            <img src="/assets/mce-about/mounia-amane-v2.jpg" alt="Mounia Amane, Fondatrice et Directrice Générale de MCE Group" />
            <figcaption><strong>Mounia Amane</strong><span>Fondatrice & Directrice Générale – MCE Group</span></figcaption>
          </figure>
          <div className="founder-copy">
            <span className="mce-section-pill">LE MOT DE LA FONDATRICE</span>
            <h2>Le capital humain <em>au cœur d’une</em> croissance durable.</h2>
            <div className="founder-points">
              {FOUNDER_POINTS.map((text, index) => <article key={text}><i>{index + 1}</i><p>{text}</p></article>)}
            </div>
          </div>
          <blockquote>« Notre rôle est de révéler les potentiels, de créer des passerelles et de transformer les ambitions en leviers de performance et d’impact. »</blockquote>
          <div className="founder-foundations">
            {FOUNDATIONS.map(([title, text, Icon]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mce-presentation">
        <div className="mce-about-container">
          <header>
            <h2>MCE, un partenaire de structuration, de <em>transformation</em> et d’<em>impact.</em></h2>
            <p>Depuis plus de 20 ans, MCE accompagne entreprises, PME, institutions, ONG, écoles, universités, entrepreneurs, jeunes et femmes porteuses de projet avec des solutions concrètes pour développer les talents, renforcer les organisations et accélérer une croissance durable et inclusive.</p>
          </header>
          <div className="mce-solutions-title"><span>UN ÉCOSYSTÈME DE SOLUTIONS</span><b>AU SERVICE DE LA CROISSANCE</b></div>
          <div className="mce-solutions-grid">
            {SOLUTIONS.map(([title, text, Icon], index) => <article key={title} style={{ '--solution-index': index }}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mce-upcoming-project">
        <div className="mce-about-container">
          <div className="mce-upcoming-copy">
            <span className="mce-section-pill mce-pill-upcoming">UN PROJET MCE EN PRÉPARATION</span>
            <h2>DocManya, une plateforme documentaire bientôt disponible.</h2>
            <p>
              Pensée et développée par MCE, DocManya permettra aux équipes de centraliser leurs
              documents, d’organiser les accès, de suivre les validations et de retrouver
              rapidement les informations utiles. Ce futur outil illustre la volonté de MCE de
              transformer des besoins métiers concrets en solutions numériques simples et
              exploitables.
            </p>
            <div className="mce-upcoming-tags">
              <span>Gestion documentaire</span>
              <span>Accès par rôles</span>
              <span>Circuits de validation</span>
              <span>Traçabilité</span>
            </div>
          </div>
          <div className="mce-upcoming-ui" aria-label="Aperçu conceptuel de DocManya">
            <header><b>D</b><span>DocManya</span><i>Bientôt disponible</i></header>
            {['Contrats & dossiers', 'Validations à suivre', 'Documents partagés', 'Journal d’activité'].map((item, index) => (
              <article key={item}><FileText /><span>{item}</span><b>{['24', '07', '18', '42'][index]}</b></article>
            ))}
          </div>
        </div>
      </section>

      <section className="presence-section">
        <div className="mce-about-container">
          <div className="presence-header-grid">
            <header>
              <h2>NOTRE PRÉSENCE<br /><span>INTERNATIONALE</span></h2>
              <b>Trois régions clés. Une vision globale.<br />Un impact local.</b>
              <i />
              <p>MCE intervient en France, au Sénégal et au Maroc pour accompagner les entreprises, institutions et talents dans leurs projets de développement.</p>
            </header>
            <figure className="presence-flags">
              <img src="/assets/mce-about/international-flags-v2.png" alt="Drapeaux de la France, du Sénégal et du Maroc" />
            </figure>
          </div>

          <div className="presence-map-row">
            <figure className="presence-map">
              <img src="/assets/mce-about/international-map-v2.jpg" alt="Carte de la présence internationale de MCE" />
              <span className="presence-map-point point-france" aria-label="France" />
              <span className="presence-map-point point-senegal" aria-label="Sénégal" />
              <span className="presence-map-point point-maroc" aria-label="Maroc" />
            </figure>
            <aside className="presence-expertise">
              <Globe />
              <p>Une expertise locale,<br />une vision globale,<br />des solutions adaptées<br />à chaque marché.</p>
            </aside>
          </div>

          <div className="presence-country-grid">
            {COUNTRIES.map(country => (
              <article key={country.name} style={{ '--country-accent': country.accent }}>
                <div className="presence-country-title">
                  <img src={country.flag} alt={`Drapeau ${country.name}`} />
                  <div><h3>{country.name}</h3><p>{country.role}</p></div>
                </div>
                <ul>{country.items.map(item => <li key={item}><Check />{item}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="presence-principles">
            <article><Globe /><b>UNE APPROCHE MULTICULTURELLE</b><p>Comprendre chaque contexte pour agir efficacement.</p></article>
            <article><Target /><b>DES SOLUTIONS SUR-MESURE</b><p>Adaptées aux réalités locales et aux ambitions internationales.</p></article>
            <article><Network /><b>UN RÉSEAU SOLIDE</b><p>Entreprises, institutions, experts et talents partout où nous sommes.</p></article>
            <article><BarChart3 /><b>UN IMPACT DURABLE</b><p>Créer de la valeur, générer des opportunités et bâtir des relations de confiance.</p></article>
          </div>

          <div className="presence-stats">
            <div className="presence-stats-intro">MCE, votre partenaire<br />de proximité pour des<br />projets à portée mondiale.<i /></div>
            <article><Globe /><b>3</b><span>PAYS<br />D’IMPLANTATION</span></article>
            <article><Users /><b>+200</b><span>CLIENTS<br />ACCOMPAGNÉS</span></article>
            <article><BriefcaseBusiness /><b>+50</b><span>PARTENAIRES<br />STRATÉGIQUES</span></article>
            <article><BarChart3 /><b>100%</b><span>ENGAGEMENT POUR<br />VOS SUCCÈS</span></article>
            <div className="presence-mobile-landmarks" aria-label="Présence de MCE en France, au Sénégal et au Maroc">
              <figure><img src="/assets/mce-about/mobile-france.jpg" alt="Tour Eiffel, France" /><figcaption>FRANCE</figcaption></figure>
              <figure><img src="/assets/mce-about/mobile-senegal.jpg" alt="Monument de la Renaissance africaine, Sénégal" /><figcaption>SÉNÉGAL</figcaption></figure>
              <figure><img src="/assets/mce-about/mobile-maroc.jpg" alt="Mosquée Hassan II, Maroc" /><figcaption>MAROC</figcaption></figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-12">NOS <span className="text-mce-gold">PARTENAIRES</span> CLÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'KEBA CONSULTING', desc: 'Conseil en management, leadership et transformation organisationnelle.', img: IMG.team2 },
              { name: 'WOMEN BUILD AFRICA', desc: 'Promouvoir l’entrepreneuriat féminin, l’inclusion et l’impact social à travers des actions concrètes.', img: IMG.women1 },
              { name: 'SPARCK PROJECT', desc: 'Innovation, digital et développement de projets à fort impact pour un avenir durable.', img: IMG.coding },
            ].map((partner) => (
              <article key={partner.name} className="mce-partner-card">
                <img src={partner.img} alt={partner.name} />
                <div><h3>{partner.name}</h3><p>{partner.desc}</p><button>DÉCOUVRIR LE PARTENARIAT <ArrowRight /></button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mce-reasons">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <header className="mce-reasons-heading"><b>POURQUOI CHOISIR MCE ?</b><span>PLUS QU’UN PRESTATAIRE, UN VRAI PARTENAIRE.</span></header>
          <div className="mce-reasons-grid">
            {REASONS.map((reason) => {
              const Icon = ICONS[reason.icon];
              return <article key={reason.title}><Icon /><b>{reason.title}</b><p>{reason.desc}</p></article>;
            })}
          </div>
        </div>
      </section>

      <CTASection title="ENSEMBLE, CRÉONS L’AVENIR" subtitle="DE VOTRE ORGANISATION." />
    </main>
  );
}
