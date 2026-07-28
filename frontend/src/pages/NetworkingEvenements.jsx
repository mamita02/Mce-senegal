import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Handshake,
  Heart,
  Lightbulb,
  Mic2,
  Network,
  Users,
} from 'lucide-react';
import { EVENTS, IMG } from '../mock';
import MobileCarouselControls from '../components/MobileCarouselControls';

const formats = [
  ['Networking entrepreneurial', 'Créer des connexions utiles entre entrepreneurs, dirigeants, experts, investisseurs et partenaires.', Network],
  ['Rencontres entreprises–jeunes talents', 'Faciliter les échanges directs entre les organisations qui recrutent et les talents qui veulent contribuer.', Users],
  ['Événements emploi', 'Donner accès aux opportunités, aux métiers, aux entreprises et aux conseils qui accélèrent l’insertion.', BriefcaseBusiness],
  ['Entrepreneuriat féminin', 'Valoriser les femmes qui entreprennent, créent des emplois et construisent des solutions durables.', Heart],
  ['Conférences', 'Partager des expériences concrètes, des méthodes et des visions capables de faire avancer les participants.', Mic2],
  ['Ateliers & séminaires', 'Apprendre, travailler en groupe, structurer une idée et repartir avec des outils directement applicables.', Lightbulb],
  ['Événements partenaires', 'Co-construire des rencontres cohérentes avec les objectifs, les publics et les engagements de nos partenaires.', Handshake],
  ['Transmission & orientation', 'Relier l’apprentissage, les rencontres professionnelles et les perspectives de développement.', GraduationCap],
];

export default function NetworkingEvenements() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveEvent((index) => (index + 1) % EVENTS.length), 5200);
    return () => clearInterval(timer);
  }, []);

  const event = EVENTS[activeEvent];

  return (
    <main className="pt-[72px] networking-page">
      <section
        className="networking-hero"
        style={{
          backgroundImage: "linear-gradient(90deg,rgba(5,15,34,.42),rgba(10,30,58,.06)),url('/assets/mce-about/hero-conference.jpg')",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h1>
            Rencontrer. Échanger.
            <br />
            <em>Créer des opportunités.</em>
          </h1>
          <p>
            MCE conçoit des événements professionnels et à impact pour connecter les entreprises,
            les entrepreneurs, les jeunes talents, les femmes leaders et les partenaires autour
            d’expériences utiles.
          </p>
          <Link to="/contact" className="btn-gold rounded-full mt-7">
            Construire un événement <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="networking-intro">
        <div className="max-w-[1150px] mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="mce-section-pill mce-pill-intention">NOTRE INTENTION</span>
            <h2>Des rencontres qui ne s’arrêtent pas à l’échange de cartes de visite.</h2>
            <p>
              Chaque format est pensé pour provoquer des connexions pertinentes, faire circuler
              l’information, révéler des talents et transformer une rencontre en collaboration,
              recrutement, apprentissage ou projet.
            </p>
          </div>
          <div className="networking-photo-stack">
            <img src={IMG.event1} alt="Rencontre professionnelle" />
            <img src={IMG.event2} alt="Événement de networking" />
            <img src={IMG.women1} alt="Entrepreneuriat féminin" />
          </div>
        </div>
      </section>

      <section className="networking-formats">
        <div className="max-w-[1200px] mx-auto px-6">
          <header>
            <span className="mce-section-pill mce-pill-formats">FORMATS & IMPACT</span>
            <h2>Des événements adaptés aux communautés et aux objectifs</h2>
          </header>
          <div id="networking-formats-carousel">
            {formats.map(([title, description, Icon]) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <MobileCarouselControls targetId="networking-formats-carousel" />
        </div>
      </section>

      <section className="networking-showcase">
        <div className="max-w-[1120px] mx-auto px-6">
          <header>
            <span className="mce-section-pill mce-pill-showcase">RENCONTRES À VALORISER</span>
            <h2>Des événements qui connectent et créent des opportunités</h2>
            <p>
              Networking, emploi, entrepreneuriat féminin et rencontres partenaires : chaque
              format est conçu autour d’un public, d’un objectif et d’un impact attendu.
            </p>
          </header>
          <div
            className="event-feature-slide"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(4,15,29,.92),rgba(4,15,29,.35)),url('${IMG[event.img]}')`,
            }}
          >
            <button
              type="button"
              aria-label="Événement précédent"
              onClick={() => setActiveEvent((activeEvent - 1 + EVENTS.length) % EVENTS.length)}
            >
              <ArrowLeft />
            </button>
            <div>
              <small>
                ÉVÉNEMENT {String(activeEvent + 1).padStart(2, '0')} / {String(EVENTS.length).padStart(2, '0')}
              </small>
              <span>{event.tag}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
            <button
              type="button"
              aria-label="Événement suivant"
              onClick={() => setActiveEvent((activeEvent + 1) % EVENTS.length)}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="event-slide-progress">
            {EVENTS.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={index === activeEvent ? 'active' : ''}
                aria-label={`Afficher ${item.title}`}
                onClick={() => setActiveEvent(index)}
              />
            ))}
          </div>
          <nav className="event-slide-titles">
            {EVENTS.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={index === activeEvent ? 'active' : ''}
                onClick={() => setActiveEvent(index)}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="networking-partners">
        <div className="max-w-[1100px] mx-auto px-6">
          <CalendarDays />
          <div>
            <h2>Un événement à imaginer avec MCE ?</h2>
            <p>Définissons le public, le format, les partenaires, le programme et l’expérience attendue.</p>
          </div>
          <Link to="/contact">
            Parler de l’événement <ArrowRight />
          </Link>
        </div>
      </section>
      <div className="networking-footer-space" aria-hidden="true" />
    </main>
  );
}
