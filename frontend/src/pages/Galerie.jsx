import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarDays, GraduationCap, Grid3X3, Handshake, Heart, Maximize2, Trophy, X } from 'lucide-react';

// ============================================================
// ⚠️ IMPORT DE TOUTES LES PHOTOS DU DOSSIER /assets/networking/
// Chaque photo est utilisée UNE SEULE FOIS dans la galerie.
// ============================================================

// Événements MCE
import event1 from '../assets/networking/event1.jpeg';
import event2 from '../assets/networking/event2.jpeg';

// Inspiration / Gala / Portraits
import inspi1 from '../assets/networking/inspi1.jpeg';
import inspi2 from '../assets/networking/inspi2.jpeg';
import inspi3 from '../assets/networking/inspi3.jpeg';
import inspi4 from '../assets/networking/inspi4.jpeg';
import inspi6 from '../assets/networking/inspi6.jpeg';
import inspi7 from '../assets/networking/inspi7.jpeg';
import inspi8 from '../assets/networking/inspi8.jpeg';
import inspi10 from '../assets/networking/inspi10.jpeg';
import inspi11 from '../assets/networking/inspi11.jpeg';
import inspi12 from '../assets/networking/inspi12.jpeg';
import inspi13 from '../assets/networking/inspi13.jpeg';

// Volet social & solidarité
import social1 from '../assets/networking/social1.jpeg';
import social2 from '../assets/networking/social2.jpeg';
import social3 from '../assets/networking/social3.jpeg';

// Sport & team building
import sport1 from '../assets/networking/sport1.jpeg';
import sport2 from '../assets/networking/sport2.jpeg';
import sport3 from '../assets/networking/sport3.jpeg';

// Forum Stayup 2025
import stayip1 from '../assets/networking/stayip1.jpeg';
import stayup2 from '../assets/networking/stayup2.jpeg';

// Femmes leaders & entrepreneuriat féminin
import women1 from '../assets/networking/women1.jpg';
import women2 from '../assets/networking/women2.jpg';

// ============================================================
// FILTRES
// ============================================================
const FILTERS = [
  ['Tous', Grid3X3],
  ['Événements', CalendarDays],
  ['Partenaires', Handshake],
  ['Social', Heart],
  ['Sport', Trophy],
  ['Formations', GraduationCap],
];

const PARTNERS = ['Tous les partenaires', 'GoFar Holding', 'Keba Consulting', 'Sparck Project'];

// ============================================================
// ITEMS DE LA GALERIE — 23 photos uniques
// 📌 id unique, title unique, image unique → pas de collisions React
// 📐 sizes alternées (wide / tall / standard) pour un beau masonry
// 💡 Ordre pensé pour un rendu équilibré en mode "Tous"
// ============================================================
const ITEMS = [
  // ============ ÉVÉNEMENTS (7) ============
  { id: 'ev-01', title: 'Forum Bâtisseurs',           subtitle: 'Dakar · Avril 2026',              category: 'Événements',  image: event1,   size: 'wide' },
  { id: 'ev-02', title: 'Soirée networking MCE',      subtitle: 'Rencontres & partenariats',       category: 'Événements',  image: event2,   size: 'standard' },
  { id: 'ev-03', title: 'Forum Stayup 2025',          subtitle: 'Rencontres institutionnelles',    category: 'Événements',  image: inspi6,   size: 'tall' },
  { id: 'ev-04', title: 'Salon Stayup — Panel',       subtitle: 'Paysages & Numérique',            category: 'Événements',  image: stayup2,  size: 'standard' },
  { id: 'ev-05', title: 'Stayup 2025 — Ouverture',    subtitle: 'Forum international',             category: 'Événements',  image: stayip1,  size: 'wide' },
  { id: 'ev-06', title: 'Une soirée d\'exception',    subtitle: 'Gala MCE',                        category: 'Événements',  image: inspi1,   size: 'tall' },
  { id: 'ev-07', title: 'Instants partagés',          subtitle: 'Événement de fin d\'année',       category: 'Événements',  image: inspi7,   size: 'standard' },

  // ============ PARTENAIRES (4) ============
  { id: 'pa-01', title: 'Partenariat KEBA Consulting', subtitle: 'Un allié stratégique',           category: 'Partenaires', partner: 'Keba Consulting', image: inspi3,  size: 'tall' },
  { id: 'pa-02', title: 'Signature d\'accord KEBA',    subtitle: 'Formalisation des engagements',  category: 'Partenaires', partner: 'Keba Consulting', image: inspi4,  size: 'wide' },
  { id: 'pa-03', title: 'Alliance panafricaine',       subtitle: 'GoFar Holding — Vision commune', category: 'Partenaires', partner: 'GoFar Holding',   image: inspi8,  size: 'standard' },
  { id: 'pa-04', title: 'Innovation & impact',         subtitle: 'Sparck Project — Digital',       category: 'Partenaires', partner: 'Sparck Project',  image: inspi13, size: 'standard' },

  // ============ SOCIAL (5) ============
  { id: 'so-01', title: 'Engagement communautaire',    subtitle: 'Écoute & solidarité',            category: 'Social', image: social1, size: 'standard' },
  { id: 'so-02', title: 'Projets à impact',            subtitle: 'Inclusion & proximité',          category: 'Social', image: social2, size: 'wide' },
  { id: 'so-03', title: 'Une communauté engagée',      subtitle: 'Actions terrain',                category: 'Social', image: social3, size: 'standard' },
  { id: 'so-04', title: 'Femmes qui inspirent',        subtitle: 'Portraits de leaders',           category: 'Social', image: women1,  size: 'tall' },
  { id: 'so-05', title: 'Sororité & engagement',       subtitle: 'Force du collectif féminin',     category: 'Social', image: women2,  size: 'standard' },

  // ============ SPORT (3) ============
  { id: 'sp-01', title: 'Cohésion par le sport',       subtitle: 'Équipe & fair-play',             category: 'Sport', image: sport1, size: 'tall' },
  { id: 'sp-02', title: 'Dépassement collectif',       subtitle: 'Endurance & ambition',           category: 'Sport', image: sport2, size: 'wide' },
  { id: 'sp-03', title: 'L\'énergie du terrain',       subtitle: 'Team building actif',            category: 'Sport', image: sport3, size: 'standard' },

  // ============ FORMATIONS (4) ============
  { id: 'fo-01', title: 'Coaching stratégique',        subtitle: 'Accompagnement personnalisé',    category: 'Formations', image: inspi2,  size: 'standard' },
  { id: 'fo-02', title: 'Atelier en action',           subtitle: 'Pratique & collaboration',       category: 'Formations', image: inspi10, size: 'wide' },
  { id: 'fo-03', title: 'Transmettre les savoirs',     subtitle: 'Pédagogie & confiance',          category: 'Formations', image: inspi11, size: 'tall' },
  { id: 'fo-04', title: 'Formations sur-mesure',       subtitle: 'Montée en compétences',          category: 'Formations', image: inspi12, size: 'standard' },
];

// ============================================================
// COMPOSANT
// ============================================================
export default function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const [partnerFilter, setPartnerFilter] = useState('Tous les partenaires');
  const [selected, setSelected] = useState(null);

  // ✅ Filtrage combiné : catégorie + sous-partenaire
  const visible = ITEMS.filter(item =>
    (filter === 'Tous' || item.category === filter) &&
    (filter !== 'Partenaires' || partnerFilter === 'Tous les partenaires' || item.partner === partnerFilter)
  );

  // ✅ Navigation lightbox — utilise l'id (unique) au lieu du title
  const moveLightbox = (direction) => {
    const index = ITEMS.findIndex(item => item.id === selected.id);
    setSelected(ITEMS[(index + direction + ITEMS.length) % ITEMS.length]);
  };

  // ✅ Correction : dependency array pour éviter les recréations d'event listener
  useEffect(() => {
    const onKey = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <main className="gallery-page pt-[72px]">
      <section id="galerie" className="mce-gallery gallery-library">
        <div className="mce-gallery-orb mce-gallery-orb-one" aria-hidden="true" />
        <div className="mce-gallery-orb mce-gallery-orb-two" aria-hidden="true" />
        <div className="mce-about-container">
          <header className="gallery-library-head">
            <div>
              <h2>Explorez les moments forts de MCE.</h2>
              <p>Choisissez une catégorie et découvrez les projets, les rencontres et les énergies qui font vivre notre écosystème.</p>
            </div>
          </header>

          <div className="gallery-filter-row">
            <nav className="mce-gallery-filters gallery-sticky-filters" aria-label="Filtrer la galerie">
              {FILTERS.map(([item, Icon]) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? 'active' : ''}
                  onClick={() => {
                    setFilter(item);
                    if (item !== 'Partenaires') setPartnerFilter('Tous les partenaires');
                  }}
                  aria-pressed={filter === item}
                >
                  <Icon />{item}
                </button>
              ))}
              <AnimatePresence>
                {(filter !== 'Tous' || partnerFilter !== 'Tous les partenaires') && (
                  <motion.button
                    type="button"
                    className="gallery-reset-filter"
                    initial={{ opacity: 0, scale: .75, width: 0 }}
                    animate={{ opacity: 1, scale: 1, width: 'auto' }}
                    exit={{ opacity: 0, scale: .75, width: 0 }}
                    onClick={() => { setFilter('Tous'); setPartnerFilter('Tous les partenaires'); }}
                  >
                    <X /> Réinitialiser
                  </motion.button>
                )}
              </AnimatePresence>
            </nav>
            <p className="gallery-image-count">
              <b>{visible.length}</b> image{visible.length > 1 ? 's' : ''} à découvrir
            </p>
          </div>

          <AnimatePresence>
            {filter === 'Partenaires' && (
              <motion.nav
                className="gallery-partner-filters"
                aria-label="Filtrer par partenaire"
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -8, height: 0 }}
              >
                <span>Sous-partenaire</span>
                {PARTNERS.map(partner => (
                  <button
                    key={partner}
                    type="button"
                    className={partnerFilter === partner ? 'active' : ''}
                    onClick={() => setPartnerFilter(partner)}
                  >
                    {partner}
                  </button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="mce-gallery-grid">
            <AnimatePresence initial={false}>
              {visible.map((item, index) => (
                <motion.figure
                  key={item.id}
                  className={`mce-gallery-card mce-gallery-${item.size}`}
                  initial={
                    index % 4 === 0 ? { opacity: 0, x: -45, rotate: -2 }
                    : index % 4 === 1 ? { opacity: 0, y: 48, scale: .82 }
                    : index % 4 === 2 ? { opacity: 0, x: 45, rotate: 2 }
                    : { opacity: 0, scale: .72, rotate: 3 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: .8, y: -20 }}
                  transition={{ duration: .5, delay: index * .045, ease: [.2, .8, .2, 1] }}
                  whileHover={{ y: -7, scale: 1.008 }}
                  onClick={() => setSelected(item)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <figcaption>
                    <span>#{item.partner || item.category}</span>
                    <b>{item.title}</b>
                    <small>{item.subtitle}</small>
                    <i><Maximize2 /></i>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========== LIGHTBOX ========== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="gallery-lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Fermer">
              <X />
            </button>
            <button className="gallery-lightbox-prev" type="button" onClick={(e) => { e.stopPropagation(); moveLightbox(-1); }} aria-label="Image précédente">
              <ArrowLeft />
            </button>
            <motion.figure
              key={selected.id}
              initial={{ scale: .88, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: .9 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} />
              <figcaption>
                <span>#{selected.partner || selected.category}</span>
                <h2>{selected.title}</h2>
                <p>{selected.subtitle}</p>
              </figcaption>
            </motion.figure>
            <button className="gallery-lightbox-next" type="button" onClick={(e) => { e.stopPropagation(); moveLightbox(1); }} aria-label="Image suivante">
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}