import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CalendarDays, GraduationCap, Grid3X3, Handshake, Heart, Maximize2, Trophy, X } from 'lucide-react';
import { IMG } from '../mock';

const FILTERS = [
  ['Tous', Grid3X3], ['Social', Heart], ['Sport', Trophy], ['Partenaires', Handshake],
  ['Événements', CalendarDays], ['Formations', GraduationCap],
];
const PARTNERS = ['Tous les partenaires', 'GoFar Holding', 'Keba Consulting', 'Sparck Project'];
const ITEMS = [
  { title:'Rencontres qui comptent', subtitle:'Communauté & engagement', category:'Social', image:IMG.women1, size:'wide' },
  { title:'L’énergie du collectif', subtitle:'Dépassement & cohésion', category:'Sport', image:'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'tall' },
  { title:'Construire ensemble', subtitle:'Vision & synergies', category:'Partenaires', partner:'GoFar Holding', image:IMG.team2, size:'standard' },
  { title:'Une scène, des idées', subtitle:'Conférences & inspiration', category:'Événements', image:'/assets/mce-about/hero-conference.jpg', size:'wide' },
  { title:'Apprendre par la pratique', subtitle:'Compétences & transmission', category:'Formations', image:IMG.meeting, size:'standard' },
  { title:'Leadership au féminin', subtitle:'Audace & impact', category:'Social', image:IMG.women2, size:'standard' },
  { title:'Connexions professionnelles', subtitle:'Réseaux & opportunités', category:'Partenaires', partner:'Keba Consulting', image:IMG.event2, size:'tall' },
  { title:'Talents en mouvement', subtitle:'Performance & confiance', category:'Sport', image:'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Partager, transmettre, grandir', subtitle:'Savoirs & progression', category:'Formations', image:IMG.team3, size:'wide' },
  { title:'Créer des souvenirs utiles', subtitle:'Rencontres & expériences', category:'Événements', image:IMG.event1, size:'standard' },
  { title:'Alliance pour l’impact', subtitle:'Stratégie & développement', category:'Partenaires', partner:'Sparck Project', image:IMG.coding, size:'wide' },
  { title:'Le jeu comme langage commun', subtitle:'Équipe & fair-play', category:'Sport', image:'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Projets qui rapprochent', subtitle:'Inclusion & proximité', category:'Social', image:'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'tall' },
  { title:'Atelier en action', subtitle:'Pratique & collaboration', category:'Formations', image:'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Célébrer les réussites', subtitle:'Moments & émotions', category:'Événements', image:IMG.event3, size:'wide' },
  { title:'Cap commun', subtitle:'Partenariat panafricain', category:'Partenaires', partner:'GoFar Holding', image:IMG.heroPartners, size:'standard' },
  { title:'Conseil en mouvement', subtitle:'Performance organisationnelle', category:'Partenaires', partner:'Keba Consulting', image:IMG.founder, size:'standard' },
  { title:'Innovation utile', subtitle:'Digital & création', category:'Partenaires', partner:'Sparck Project', image:IMG.heroDigital, size:'tall' },
  { title:'Courir vers l’objectif', subtitle:'Endurance & ambition', category:'Sport', image:'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'wide' },
  { title:'Une communauté engagée', subtitle:'Écoute & solidarité', category:'Social', image:'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Transmettre avec impact', subtitle:'Pédagogie & confiance', category:'Formations', image:'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'tall' },
  { title:'Forum des opportunités', subtitle:'Publics & connexions', category:'Événements', image:'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Passerelles internationales', subtitle:'Expansion & coopération', category:'Partenaires', partner:'GoFar Holding', image:'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'wide' },
  { title:'Structurer pour grandir', subtitle:'Conseil & leadership', category:'Partenaires', partner:'Keba Consulting', image:'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
  { title:'Imaginer demain', subtitle:'Technologie & impact', category:'Partenaires', partner:'Sparck Project', image:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400', size:'standard' },
];

export default function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const [partnerFilter, setPartnerFilter] = useState('Tous les partenaires');
  const [selected, setSelected] = useState(null);
  const visible = ITEMS.filter(item =>
    (filter === 'Tous' || item.category === filter) &&
    (filter !== 'Partenaires' || partnerFilter === 'Tous les partenaires' || item.partner === partnerFilter)
  );

  const moveLightbox = (direction) => {
    const index = ITEMS.findIndex(item => item.title === selected.title);
    setSelected(ITEMS[(index + direction + ITEMS.length) % ITEMS.length]);
  };

  useEffect(() => {
    const onKey = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <main className="gallery-page pt-[72px]">
      <section id="galerie" className="mce-gallery gallery-library">
        <div className="mce-gallery-orb mce-gallery-orb-one" aria-hidden="true" />
        <div className="mce-gallery-orb mce-gallery-orb-two" aria-hidden="true" />
        <div className="mce-about-container">
          <header className="gallery-library-head">
            <div><h2>Explorez les moments forts de MCE.</h2><p>Choisissez une catégorie et découvrez les projets, les rencontres et les énergies qui font vivre notre écosystème.</p></div>
          </header>
          <div className="gallery-filter-row">
            <nav className="mce-gallery-filters gallery-sticky-filters" aria-label="Filtrer la galerie">
              {FILTERS.map(([item,Icon]) => <button key={item} type="button" className={filter===item?'active':''} onClick={()=>{setFilter(item);if(item!=='Partenaires')setPartnerFilter('Tous les partenaires')}} aria-pressed={filter===item}><Icon />{item}</button>)}
              <AnimatePresence>
                {(filter !== 'Tous' || partnerFilter !== 'Tous les partenaires') && (
                  <motion.button type="button" className="gallery-reset-filter" initial={{opacity:0,scale:.75,width:0}} animate={{opacity:1,scale:1,width:'auto'}} exit={{opacity:0,scale:.75,width:0}} onClick={()=>{setFilter('Tous');setPartnerFilter('Tous les partenaires')}}>
                    <X /> Réinitialiser
                  </motion.button>
                )}
              </AnimatePresence>
            </nav>
            <p className="gallery-image-count"><b>{visible.length}</b> image{visible.length > 1 ? 's' : ''} à découvrir</p>
          </div>
          <AnimatePresence>
            {filter === 'Partenaires' && (
              <motion.nav className="gallery-partner-filters" aria-label="Filtrer par partenaire" initial={{opacity:0,y:-12,height:0}} animate={{opacity:1,y:0,height:'auto'}} exit={{opacity:0,y:-8,height:0}}>
                <span>Sous-partenaire</span>
                {PARTNERS.map(partner => <button key={partner} type="button" className={partnerFilter===partner?'active':''} onClick={()=>setPartnerFilter(partner)}>{partner}</button>)}
              </motion.nav>
            )}
          </AnimatePresence>
          <div className="mce-gallery-grid">
            <AnimatePresence initial={false}>
              {visible.map((item,index) => (
                <motion.figure
                  key={item.title}
                  className={`mce-gallery-card mce-gallery-${item.size}`}
                  initial={index%4===0?{opacity:0,x:-45,rotate:-2}:index%4===1?{opacity:0,y:48,scale:.82}:index%4===2?{opacity:0,x:45,rotate:2}:{opacity:0,scale:.72,rotate:3}}
                  animate={{opacity:1,scale:1,y:0,rotate:0}}
                  exit={{opacity:0,scale:.8,y:-20}}
                  transition={{duration:.5,delay:index*.045,ease:[.2,.8,.2,1]}}
                  whileHover={{y:-7,scale:1.008}}
                  onClick={()=>setSelected(item)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <figcaption><span>#{item.partner || item.category}</span><b>{item.title}</b><small>{item.subtitle}</small><i><Maximize2 /></i></figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
            <button className="gallery-lightbox-close" type="button" onClick={()=>setSelected(null)} aria-label="Fermer"><X /></button>
            <button className="gallery-lightbox-prev" type="button" onClick={(e)=>{e.stopPropagation();moveLightbox(-1)}} aria-label="Image précédente"><ArrowLeft /></button>
            <motion.figure key={selected.title} initial={{scale:.88,y:25}} animate={{scale:1,y:0}} exit={{scale:.9}} onClick={e=>e.stopPropagation()}>
              <img src={selected.image} alt={selected.title} />
              <figcaption><span>#{selected.partner || selected.category}</span><h2>{selected.title}</h2><p>{selected.subtitle}</p></figcaption>
            </motion.figure>
            <button className="gallery-lightbox-next" type="button" onClick={(e)=>{e.stopPropagation();moveLightbox(1)}} aria-label="Image suivante"><ArrowRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
