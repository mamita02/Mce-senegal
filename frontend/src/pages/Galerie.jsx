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
import partageSavoirGofar from '../assets/networking/partage-savoir-gofar.jpg';
import sessionTravailMce from '../assets/networking/session-travail-mce.jpg';
import remisePrixStayup from '../assets/networking/remise-prix-stayup.png';

// Inspiration / Gala / Portraits
import inspi1 from '../assets/networking/inspi1.jpeg';
import inspi2 from '../assets/networking/inspi2.jpeg';
import inspi3 from '../assets/networking/inspi3.jpeg';
import inspi6 from '../assets/networking/inspi6.jpeg';
import inspi7 from '../assets/networking/inspi7.jpeg';
import inspi8 from '../assets/networking/inspi8.jpeg';
import inspi10 from '../assets/networking/inspi10.jpeg';
import inspi11 from '../assets/networking/inspi11.jpeg';
import inspi12 from '../assets/networking/inspi12.jpeg';
import inspi13 from '../assets/networking/inspi13.jpeg';

// Volet social & solidarité
import social2 from '../assets/networking/social2.jpeg';
import social3 from '../assets/networking/social3.jpeg';
import kebaSignature from '../assets/networking/keba-signature.jpg';

// Sport & team building
import sport1 from '../assets/networking/sport1.jpeg';
import sport2 from '../assets/networking/sport2.jpeg';
import sport3 from '../assets/networking/sport3.jpeg';
import sportEffort from '../assets/networking/sport-effort.png';
import sportPartage from '../assets/networking/sport-partage.png';

// Forum Stayup 2025
import stayip1 from '../assets/networking/stayip1.jpeg';
import stayup2 from '../assets/networking/stayup2.jpeg';
import afterworkGofar from '../assets/networking/afterwork-gofar.jpg';

// Femmes leaders & entrepreneuriat féminin
import women1 from '../assets/networking/women1.jpg';
import women2 from '../assets/networking/women2.jpg';
import socialEnfantImpact from '../assets/networking/social-enfant-impact.png';

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

const PARTNERS = ['Tous les partenaires', 'GoFar Holding', 'Keba Consulting', 'Sparks Project'];

// ============================================================
// ITEMS DE LA GALERIE — 29 photos uniques
// 📌 id unique, title unique, image unique → pas de collisions React
// 📐 sizes alternées (wide / tall / standard) pour un beau masonry
// 💡 Ordre pensé pour un rendu équilibré en mode "Tous"
// ============================================================
const ITEMS = [
  // ============ ÉVÉNEMENTS (7) ============
  { id: 'ev-01', title: 'Assise des Bâtisseurs avec IDRISS ABERKANE', subtitle: 'FORUM DE L’ÉCONOMIE RÉELLE & DE LA CRÉATION DE VALEUR', description: 'Au Grand Théâtre National de Dakar en avril 2026', category: 'Événements', partner: 'Sparks Project', image: event1, size: 'wide' },
  { id: 'ev-02', title: 'Queen Buffet Mai 2026',       subtitle: 'Soirée de Gala',                  category: 'Événements',  image: event2,   size: 'wide' },
  { id: 'ev-03', title: 'Queen Buffet Mai 2026',       subtitle: 'Soirée de Gala',                  category: 'Événements',  image: inspi6,   size: 'tall' },
  { id: 'ev-04', title: 'Salon Stayup — Panel',       subtitle: 'Paysages & Numérique',            category: 'Événements', partner: 'GoFar Holding', image: stayup2, size: 'standard' },
  { id: 'ev-05', title: 'Stay-Up 2025',                subtitle: 'Cérémonie de remise de prix',      category: 'Événements', partner: 'GoFar Holding', image: stayip1, size: 'tall' },
  { id: 'ev-06', title: 'Atelier autour du Pardon', description: 'Développement Personnel & Confiance', category: 'Événements', partner: 'Keba Consulting', image: inspi1, size: 'tall' },
  { id: 'ev-07', title: 'Mme AMANE Mounia au Forum des Bâtisseurs avec IDRISS ABERKANE', category: 'Événements', partner: 'Sparks Project', image: inspi7, size: 'tall' },
  { id: 'ev-08', title: 'Collaboration entre MCE Sénégal & GoFar Holding', description: 'Entretien autour de la Femme Africaine', category: 'Événements', partner: 'GoFar Holding', image: afterworkGofar, size: 'tall' },
  { id: 'ev-09', title: 'Un moment de partage de savoir', subtitle: 'Chaque apprentissage est une pierre posée sur le chemin de l’excellence.', description: 'Avec la Directrice de MCE', category: 'Événements', partner: 'GoFar Holding', image: partageSavoirGofar, size: 'tall' },
  { id: 'ev-10', title: 'Session de travail avec l’équipe de MCE', description: 'Des esprits engagés, une vision commune, des résultats à construire.', category: 'Événements', image: sessionTravailMce, size: 'tall' },
  { id: 'ev-11', title: 'Honneur aux performances, hommage aux parcours', description: 'Remise de prix lors d’une cérémonie organisée par StayUp', category: 'Événements', partner: 'GoFar Holding', image: remisePrixStayup, size: 'standard' },

  // ============ PARTENAIRES (4) ============
  { id: 'pa-01', title: 'Ensemble pour transformer les ambitions en résultats.', subtitle: 'Wellness Family International X MCE Sénégal', category: 'Partenaires', image: inspi3, size: 'tall' },
  { id: 'pa-02', title: 'Deux expertises. Une ambition commune.', subtitle: 'Un partenariat stratégique au service de votre réussite', description: 'Keba Consulting X MCE Sénégal', category: 'Partenaires', partner: 'Keba Consulting', image: kebaSignature, size: 'tall' },
  { id: 'pa-03', title: 'Mor DIOP - Directeur de Sparks Projet', subtitle: 'Au Queen Buffet - Mai 2026', category: 'Événements', partner: 'Sparks Project', image: inspi8, size: 'tall' },
  { id: 'pa-04', title: 'Équipe de MCE Sénégal', subtitle: 'Au Queen Buffet - Mai 2026', category: 'Événements', partner: 'Sparks Project', image: inspi13, size: 'tall' },

  // ============ SOCIAL (5) ============
  { id: 'so-02', title: 'Directrice MCE au contact de la population', subtitle: 'MCE au Cœur de la Communauté', category: 'Social', image: social2, size: 'standard' },
  { id: 'so-03', title: 'Une journée avec Empire des Enfants', subtitle: 'MCE - La Solidarité en Action', category: 'Social', image: social3, size: 'standard' },
  { id: 'so-04', title: 'Chef de Projet MCE', subtitle: 'Quand l’équipe participe, chaque activité devient une opportunité de grandir ensemble.', category: 'Événements', partner: 'GoFar Holding', image: women1, size: 'tall' },
  { id: 'so-05', title: 'Un partenariat qui crée de la valeur.', subtitle: 'MCE Sénégal X GoFar Holding : un partenariat pour accompagner les entreprises, les talents et les territoires.', category: 'Événements', partner: 'GoFar Holding', image: women2, size: 'standard' },

  // ============ SPORT (3) ============
  { id: 'sp-01', title: 'Cohésion par le sport',       subtitle: 'Équipe & fair-play',             category: 'Sport', image: sport1, size: 'wide' },
  { id: 'sp-02', title: 'Dépassement collectif',       subtitle: 'Endurance & ambition',           category: 'Sport', image: sport2, size: 'standard' },
  { id: 'sp-03', title: 'L\'énergie du terrain',       subtitle: 'Team building actif',            category: 'Sport', image: sport3, size: 'wide' },
  { id: 'sp-04', title: 'Unis par le sport, renforcés par l’effort', subtitle: 'Une occasion de se dépasser, de s’amuser et de construire un esprit d’équipe solide.', category: 'Sport', image: sportEffort, size: 'tall' },
  { id: 'sp-05', title: 'Pause, partage et bonne humeur', subtitle: 'Au-delà des missions, ce sont les liens humains qui font la force d’une équipe.', category: 'Sport', image: sportPartage, size: 'wide' },

  // ============ NOUVELLE ACTION SOCIALE ============
  { id: 'so-06', title: 'Un geste, un sourire, un impact', subtitle: 'Parce que chaque enfant mérite d’être valorisé, écouté et accompagné.', category: 'Social', image: socialEnfantImpact, size: 'tall' },

  // ============ FORMATIONS (4) ============
  { id: 'fo-01', title: 'Atelier autour du Pardon', subtitle: 'MCE X Keba Consulting : Main dans la Main', category: 'Formations', partner: 'Keba Consulting', image: inspi2, size: 'tall' },
  { id: 'fo-02', title: 'Réflexion autour de la jeunesse', subtitle: 'À l’Université Cheikh Anta Diop (UCAD) de Dakar', category: 'Formations', image: inspi10, size: 'standard' },
  { id: 'fo-03', title: 'Au-delà du partenariat, c’est une transmission de savoir.', description: 'MCE X Keba Consulting : Main dans la Main', category: 'Formations', partner: 'Keba Consulting', image: inspi11, size: 'standard' },
  { id: 'fo-04', title: 'La Directrice de MCE avec l’équipe de Keba Consulting', subtitle: 'Atelier sur le Pardon.', description: 'Une période pour apprendre, une étape pour se révéler.', category: 'Formations', partner: 'Keba Consulting', image: inspi12, size: 'standard' },
];

const GALLERY_COPY = {
  'ev-01': ['Les bâtisseurs en mouvement', 'Forum avec Idriss Aberkane', 'À Dakar, les idées deviennent des leviers de valeur.'],
  'ev-02': ['L’élégance en partage', 'Queen Buffet 2026', 'Une soirée pensée pour célébrer et connecter.'],
  'ev-03': ['Une scène, mille émotions', 'Gala Queen Buffet', 'Des rencontres fortes dans un cadre d’exception.'],
  'ev-04': ['Le numérique en débat', 'Panel Stay-Up', 'Regards croisés sur les paysages de demain.'],
  'ev-05': ['L’excellence récompensée', 'Stay-Up 2025', 'Des talents mis en lumière et des parcours célébrés.'],
  'ev-06': ['Choisir de se libérer', 'Atelier autour du pardon', 'Un temps fort pour grandir et retrouver confiance.'],
  'ev-07': ['Au cœur des bâtisseurs', 'Leadership en action', 'Mounia Amane porte la vision MCE sur la scène du forum.'],
  'ev-08': ['Des voix qui rassemblent', 'MCE × GoFar Holding', 'Un échange inspirant autour de la femme africaine.'],
  'ev-09': ['Partager pour progresser', 'Transmission de savoir', 'Chaque apprentissage nous rapproche de l’excellence.'],
  'ev-10': ['Une vision, une équipe', 'Session de travail MCE', 'Des idées alignées pour construire des résultats durables.'],
  'ev-11': ['Célébrer les parcours', 'Remise de prix Stay-Up', 'L’engagement et la performance placés sous les projecteurs.'],
  'pa-01': ['Unis pour réussir', 'Wellness Family × MCE', 'Une alliance qui transforme les ambitions en résultats.'],
  'pa-02': ['Deux expertises, un cap', 'Keba Consulting × MCE', 'Un partenariat stratégique au service de votre réussite.'],
  'pa-03': ['Les partenaires du succès', 'Sparks Project', 'Mor Diop partage une vision ambitieuse de l’événementiel.'],
  'pa-04': ['L’équipe derrière l’impact', 'MCE Sénégal', 'Des talents engagés pour faire vivre chaque expérience.'],
  'so-02': ['Au plus près des communautés', 'MCE sur le terrain', 'Écouter, comprendre et agir là où l’impact compte.'],
  'so-03': ['Des sourires qui comptent', 'Empire des Enfants', 'Une journée solidaire placée sous le signe du partage.'],
  'so-04': ['Grandir ensemble', 'L’équipe en action', 'Chaque expérience collective renforce nos talents.'],
  'so-05': ['Créer plus de valeur', 'MCE × GoFar Holding', 'Une alliance au service des entreprises et des territoires.'],
  'sp-01': ['Plus forts ensemble', 'Cohésion par le sport', 'Le terrain révèle l’esprit d’équipe.'],
  'sp-02': ['Dépasser ses limites', 'Endurance collective', 'L’effort partagé transforme l’ambition en énergie.'],
  'sp-03': ['L’énergie du collectif', 'Team building actif', 'Bouger, coopérer et gagner en cohésion.'],
  'sp-04': ['Unis dans l’effort', 'Sport et dépassement', 'Une équipe soudée va toujours plus loin.'],
  'sp-05': ['La force des liens', 'Pause et partage', 'La convivialité nourrit aussi la performance.'],
  'so-06': ['Un geste, un impact', 'L’enfance au cœur', 'Valoriser chaque enfant pour ouvrir de nouveaux possibles.'],
  'fo-01': ['Apprendre à avancer', 'Atelier autour du pardon', 'MCE et Keba Consulting accompagnent la transformation.'],
  'fo-02': ['La jeunesse imagine demain', 'Rencontre à l’UCAD', 'Des échanges pour inspirer une génération d’acteurs.'],
  'fo-03': ['Transmettre pour élever', 'MCE × Keba Consulting', 'Le savoir partagé devient une force collective.'],
  'fo-04': ['Révéler les potentiels', 'Formation et transformation', 'Une expérience pour apprendre, évoluer et s’affirmer.'],
};

const GALLERY_ITEMS = ITEMS.map(item => {
  const [title, subtitle, description] = GALLERY_COPY[item.id];
  return { ...item, title, subtitle, description };
});

// ============================================================
// COMPOSANT
// ============================================================
export default function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const [partnerFilter, setPartnerFilter] = useState('Tous les partenaires');
  const [selected, setSelected] = useState(null);

  // ✅ Filtrage combiné : catégorie + sous-partenaire
  const visible = GALLERY_ITEMS.filter(item =>
    (filter === 'Tous' || item.category === filter || (filter === 'Partenaires' && item.partner)) &&
    (filter !== 'Partenaires' || partnerFilter === 'Tous les partenaires' || item.partner === partnerFilter)
  );

  // ✅ Navigation lightbox — utilise l'id (unique) au lieu du title
  const moveLightbox = (direction) => {
    const index = GALLERY_ITEMS.findIndex(item => item.id === selected.id);
    setSelected(GALLERY_ITEMS[(index + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length]);
  };

  const mobileSlides = [];
  const mobileItemsByFormat = ['wide', 'standard', 'tall'].flatMap(size => visible.filter(item => item.size === size));
  for (let index = 0; index < mobileItemsByFormat.length; index += 4) mobileSlides.push(mobileItemsByFormat.slice(index, index + 4));

  const renderCard = (item, index, mobile = false) => (
    <motion.figure
      key={`${item.id}${mobile ? '-mobile' : ''}`}
      data-gallery-id={item.id}
      className={`mce-gallery-card mce-gallery-${item.size}`}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: .5, delay: index * .045, ease: [.2, .8, .2, 1] }}
      whileHover={{ y: -7 }}
      onClick={() => setSelected(item)}
    >
      <img src={item.image} alt={item.title} loading="lazy" style={{objectPosition:item.size === 'tall' ? 'center 24%' : 'center'}} />
      <figcaption>
        <b className={item.title.length > 46 ? 'gallery-card-title-long' : ''}>{item.title}</b>
        <small>{item.subtitle}</small>
        <p className="gallery-card-description">{item.description}</p>
        <div className="gallery-card-tags">
          <span>#{item.category}</span>
          {item.partner && <span>#{item.partner}</span>}
        </div>
        <i><Maximize2 /></i>
      </figcaption>
    </motion.figure>
  );

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
              {visible.map((item, index) => renderCard(item, index))}
            </AnimatePresence>
          </div>

          <div className="mce-gallery-mobile-slider" aria-label="Galerie mobile">
            {mobileSlides.map((slide, slideIndex) => (
              <section className="mce-gallery-mobile-row" key={`slide-${slide[0].id}`}>
                <div className="mce-gallery-mobile-slide">
                  {slide.map((item, itemIndex) => renderCard(item, slideIndex * 4 + itemIndex, true))}
                </div>
              </section>
            ))}
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
                <div className="gallery-lightbox-tags">
                  <span>#{selected.category}</span>
                  {selected.partner && <span>#{selected.partner}</span>}
                </div>
                <h2>{selected.title}</h2>
                {selected.subtitle && <p className="gallery-lightbox-subtitle">{selected.subtitle}</p>}
                {selected.description && <p className="gallery-lightbox-description">{selected.description}</p>}
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
