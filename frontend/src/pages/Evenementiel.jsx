import {
  Award,
  Bell,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Globe,
  Heart,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { IMG } from '../mock';
import expertiseMCE from '../assets/mce.jpeg'; // ⚠️ adapte le nom exact de ton fichier
// ⚠️ IMPORT DES DRAPEAUX
import flagFrance from '../assets/flags/france.webp';
import flagSenegal from '../assets/flags/senegal.webp';
import flagMaroc from '../assets/flags/maroc.webp';

// ⚠️ SLIDES DU HERO — DESKTOP (5 images)
import heroImg1 from '../assets/hero-evenementiel/maroc1.png';
import heroImg2 from '../assets/hero-evenementiel/maroc2.png';
import heroImg3 from '../assets/hero-evenementiel/maroc3.png';
import heroImg4 from '../assets/hero-evenementiel/maroc4.png';
import heroImg5 from '../assets/hero-evenementiel/maroc5.png';

// ⚠️ SLIDES DU HERO — MOBILE (4 images dédiées, format portrait)
// ✅ Corrigé pour matcher les vrais fichiers dans le dossier
import heroMobile1 from '../assets/hero-evenementiel/mobile4.png'; // Musiciens Marrakech (fichier: mobile4)
import heroMobile2 from '../assets/hero-evenementiel/mobile1.png'; // Cérémonie plage (fichier: mobile1)
import heroMobile3 from '../assets/hero-evenementiel/mobile2.png'; // Mariée traditionnelle (fichier: mobile2)
import heroMobile4 from '../assets/hero-evenementiel/mobile3.png'; // Lanternes (fichier: mobile3)

// ⚠️ GALERIE "Une source d'inspiration" — 8 photos
import inspi1 from '../assets/networking/inspi1.jpeg';
import inspi2 from '../assets/networking/inspi2.jpeg';
import inspi3 from '../assets/networking/inspi3.jpeg';
import inspi4 from '../assets/networking/inspi4.jpeg';
import inspi5 from '../assets/networking/inspi5.jpeg';
import inspi6 from '../assets/networking/inspi6.jpeg';
import inspi7 from '../assets/networking/inspi7.jpeg';
import inspi8 from '../assets/networking/inspi8.jpeg';

// ================== CONFIG DES SLIDES ==================
// Textes courts : titre = 1-2 mots + accent 2-3 mots, description = 2 lignes max
const HERO_SLIDES = [
  {
    desktopImg: heroImg1,
    mobileImg: null,
    colorDesktop: 'navy',
    colorMobile: 'navy',
    line1: 'Vivre la magie',
    line2: 'du désert.',
    desc: "Petits-déjeuners face à l'infini et expériences authentiques au cœur des dunes.",
  },
  {
    desktopImg: heroImg2,
    mobileImg: heroMobile4,      // Lanternes (fond noir/orange sombre)
    colorDesktop: 'white',
    colorMobile: 'white',        // ✅ blanc sur fond noir
    line1: 'Illuminer',
    line2: 'les instants.',
    desc: 'Cérémonies lumineuses et mises en scène qui marquent les esprits.',
  },
  {
    desktopImg: heroImg3,
    mobileImg: heroMobile3,      // Mariée traditionnelle (navy foncé)
    colorDesktop: 'white',
    colorMobile: 'white',        // ✅ blanc sur fond navy sombre
    line1: 'Célébrer',
    line2: 'avec grandeur.',
    desc: "Mariages traditionnels et modernes dans le respect des rites et de l'émotion.",
  },
  {
    desktopImg: heroImg4,
    mobileImg: heroMobile2,      // Cérémonie plage (beige/crème clair)
    colorDesktop: 'navy',
    colorMobile: 'navy',         // ✅ navy sur fond beige clair
    line1: 'Créer des décors',
    line2: 'de rêve.',
    desc: 'Scénographies florales et ambiances sur-mesure entre ciel, mer et lumière.',
  },
  {
    desktopImg: heroImg5,
    mobileImg: heroMobile1,      // Musiciens Marrakech (beige chaud/orange clair)
    colorDesktop: 'gold',
    colorMobile: 'navy',         // ✅ navy sur fond beige chaud (au lieu de gold peu lisible)
    line1: 'Faire rayonner',
    line2: 'le Maroc.',
    desc: 'Immersion culturelle et rencontres authentiques au fil des médinas.',
  },
];
// Palette par couleur
const COLOR_MAP = {
  navy: {
    main: 'text-mce-navy',
    accent: 'text-mce-navy/60',
    desc: 'text-mce-navy/75',
    label: 'text-mce-navy',
    iconBorder: 'border-mce-navy/30',
    iconFill: 'text-mce-navy',
    dotActive: 'bg-mce-navy',
    dotInactive: 'bg-mce-navy/25 hover:bg-mce-navy/50',
  },
  white: {
    main: 'text-white',
    accent: 'text-white/70',
    desc: 'text-white/80',
    label: 'text-white',
    iconBorder: 'border-white/40',
    iconFill: 'text-white',
    dotActive: 'bg-white',
    dotInactive: 'bg-white/40 hover:bg-white/70',
  },
  gold: {
    main: 'text-mce-gold',
    accent: 'text-mce-gold/70',
    desc: 'text-mce-gold/80',
    label: 'text-mce-gold',
    iconBorder: 'border-mce-gold/40',
    iconFill: 'text-mce-gold',
    dotActive: 'bg-mce-gold',
    dotInactive: 'bg-mce-gold/30 hover:bg-mce-gold/60',
  },
};

// ================== SLIDES MOBILE (filtrés) ==================
const MOBILE_SLIDES = HERO_SLIDES.filter((s) => s.mobileImg !== null);

export default function Evenementiel() {
  // ================== SLIDESHOW HERO ==================
  const [heroIdx, setHeroIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    if (heroPaused) return;
    const t = setInterval(() => {
      setHeroIdx((i) => (i + 1) % HERO_SLIDES.length);
      setMobileIdx((i) => (i + 1) % MOBILE_SLIDES.length);
    }, 4000);
    return () => clearInterval(t);
  }, [heroPaused]);

const desktopSlide = HERO_SLIDES[heroIdx];
const desktopColor = COLOR_MAP[desktopSlide.colorDesktop];

const mobileSlide = MOBILE_SLIDES[mobileIdx];
const mobileColor = COLOR_MAP[mobileSlide.colorMobile];

  // ================== CAROUSEL COVERFLOW (galerie) ==================
  // ✅ 8 photos importées depuis /assets/networking/
  const gallery = [
    inspi1,
    inspi2,
    inspi3,
    inspi4,
    inspi5,
    inspi6,
    inspi7,
    inspi8,
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % gallery.length), 4000);
    return () => clearInterval(t);
  }, [paused, gallery.length]);

  const next = () => setActiveIdx((i) => (i + 1) % gallery.length);
  const prev = () => setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);

  const getCardStyle = (i) => {
    const total = gallery.length;
    let offset = i - activeIdx;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const abs = Math.abs(offset);
    if (abs > 2) return { display: 'none' };

    const translate = offset * 220;
    const scale = 1 - abs * 0.15;
    const opacity = 1 - abs * 0.25;
    const rotate = offset * 3;

    return {
      transform: `translateX(${translate}px) scale(${scale}) rotate(${rotate}deg)`,
      zIndex: 30 - abs * 10,
      opacity,
      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s',
    };
  };

  return (
    <div className="pt-[72px]">
      {/* ========================================================= */}
      {/* ===================== HERO SLIDESHOW ==================== */}
      {/* ========================================================= */}

      {/* ================================================= */}
      {/* ============= VERSION DESKTOP (md+) ============== */}
      {/* ================================================= */}
      <section
        className="hidden md:block relative overflow-hidden h-[620px] lg:h-[680px]"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === heroIdx ? 1 : 0,
              backgroundImage: `url(${s.desktopImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center">
          <div className="max-w-2xl">
            <p
              key={`label-desktop-${heroIdx}`}
              className={`text-[11px] lg:text-[12px] tracking-[0.28em] font-bold transition-colors duration-500 ${desktopColor.label}`}
            >
              {desktopSlide.label}
            </p>

            {/* 🔑 CLÉ IMPORTANTE : key={heroIdx} force le remount du <h1> → pas de superposition */}
            <h1
              key={`title-desktop-${heroIdx}`}
              className={`mt-6 text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight transition-colors duration-500 ${desktopColor.main}`}
            >
              {desktopSlide.line1}
              <br />
              <span className={desktopColor.accent}>{desktopSlide.line2}</span>
            </h1>

            <p
              key={`desc-desktop-${heroIdx}`}
              className={`mt-6 text-[14px] lg:text-[15px] leading-relaxed max-w-lg transition-colors duration-500 ${desktopColor.desc}`}
            >
              {desktopSlide.desc}
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { icon: Sparkles, title: 'Créativité', sub: '& excellence' },
                { icon: Globe, title: 'Réseau local &', sub: 'international' },
                { icon: ShieldCheck, title: 'Gestion complète', sub: '& sur-mesure' },
                { icon: Heart, title: 'Impact humain', sub: '& durable' },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-500 ${desktopColor.iconBorder}`}
                  >
                    <f.icon className={`w-4 h-4 transition-colors duration-500 ${desktopColor.iconFill}`} />
                  </div>
                  <div className={`text-[11px] leading-tight transition-colors duration-500 ${desktopColor.main}`}>
                    <div className="font-semibold">{f.title}</div>
                    <div className={`transition-colors duration-500 ${desktopColor.accent}`}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === heroIdx ? `w-10 ${desktopColor.dotActive}` : `w-2 ${desktopColor.dotInactive}`
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* ============= VERSION MOBILE (<md) =============== */}
      {/* ================================================= */}
      <section className="md:hidden relative overflow-hidden h-[calc(100vh-72px)] min-h-[560px] max-h-[720px]">
        {/* Précharge invisible des images pour éviter les glitches */}
        <div className="hidden">
            {MOBILE_SLIDES.map((s, i) => (
            <img key={`preload-${i}`} src={s.mobileImg} alt="" />
            ))}
        </div>

        {/* Slides avec <img> réels (au lieu de background CSS) */}
        {MOBILE_SLIDES.map((s, i) => (
            <img
            key={i}
            src={s.mobileImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{
                opacity: i === mobileIdx ? 1 : 0,
                zIndex: i === mobileIdx ? 1 : 0,
            }}
            />
        ))}

        {/* Contenu texte + icônes empilés en haut, dots libres en bas */}
        <div className="relative z-10 h-full flex flex-col px-6 pt-8 pb-6">
          {/* ---------- HAUT : label + titre + description + icônes ---------- */}
          <div>
            {/* Label */}
            <p
              key={`label-mobile-${mobileIdx}`}
              className={`text-[10px] tracking-[0.28em] font-bold transition-colors duration-500 ${mobileColor.label}`}
            >
              {mobileSlide.label}
            </p>

            {/* 🔑 Titre — sur UNE ligne, avec key pour éviter les superpositions */}
            <h1
              key={`title-mobile-${mobileIdx}`}
              className={`mt-3 text-[26px] font-black leading-[1.15] tracking-tight ${mobileColor.main}`}
            >
              {mobileSlide.line1}{' '}
              <span className={mobileColor.accent}>{mobileSlide.line2}</span>
            </h1>

            {/* Description — 2 lignes max */}
            <p
            key={`desc-mobile-${mobileIdx}`}
            className={`mt-4 text-[13.5px] leading-relaxed max-w-[85%] ${mobileColor.desc}`}
            >
              {mobileSlide.desc}
            </p>

            {/* Icônes 2×2 — remontées juste après la description */}
           <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-w-[85%] mt-6">
            {[
                { icon: Sparkles, title: 'Créativité', sub: '& excellence' },
                { icon: Globe, title: 'Réseau local &', sub: 'international' },
                { icon: ShieldCheck, title: 'Gestion complète', sub: '& sur-mesure' },
                { icon: Heart, title: 'Impact humain', sub: '& durable' },
            ].map((f, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                <div
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors duration-500 ${mobileColor.iconBorder}`}
                >
                    <f.icon className={`w-5 h-5 transition-colors duration-500 ${mobileColor.iconFill}`} />
                </div>
                <div className={`text-[12px] leading-tight transition-colors duration-500 ${mobileColor.main}`}>
                    <div className="font-bold">{f.title}</div>
                    <div className={`transition-colors duration-500 ${mobileColor.accent}`}>{f.sub}</div>
                </div>
                </div>
            ))}
            </div>
          </div>

          {/* ---------- BAS : dots ---------- */}
          <div className="mt-auto pt-4 flex justify-center gap-2">
            {MOBILE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === mobileIdx ? `w-8 ${mobileColor.dotActive}` : `w-1.5 ${mobileColor.dotInactive}`
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ===================== 3 PAYS ============================ */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mt-3 text-center">
            Trois pays, <span className="text-mce-teal">une expertise locale</span>.
          </h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: 'FRANCE',
                flag: flagFrance,
                desc: 'Paris et toute la France',
                text: 'Événements corporatifs, conférences, séminaires et réceptions.',
                img: IMG.france || 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
              },
              {
                country: 'SÉNÉGAL',
                flag: flagSenegal,
                desc: 'Dakar et partout au Sénégal',
                text: 'Événements professionnels, programmes impact et développement.',
                img: IMG.senegal || 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
              },
              {
                country: 'MAROC',
                flag: flagMaroc,
                desc: 'Casablanca, Marrakech et tout le Maroc',
                text: "Événements, expériences et réceptions d'exception.",
                img: IMG.maroc || 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
              },
            ].map((c) => (
              <div
                key={c.country}
                className="relative rounded-2xl overflow-hidden shadow-md h-[280px] card-hover"
              >
                <img src={c.img} alt={c.country} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-mce-navy/85 via-mce-navy/50 to-mce-navy/10" />
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div className="w-14 h-14 rounded-full bg-white overflow-hidden shadow-lg ring-2 ring-white/80">
                    <img
                      src={c.flag}
                      alt={`Drapeau ${c.country}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{c.country}</h3>
                    <p className="text-[13px] text-white/85 mt-2 max-w-[240px]">{c.desc}</p>
                    <p className="text-[12.5px] text-white/75 mt-3 max-w-[260px] leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ===================== NOS PRESTATIONS =================== */}
      {/* ========================================================= */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mt-3 text-center">Nos prestations.</h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
            {[
              { icon: Users, title: "ÉVÉNEMENTS\nD'ENTREPRISE", text: 'Séminaires, conférences, ateliers, conventions, lancements de produits.' },
              { icon: Heart, title: 'ÉVÉNEMENTS\nPRIVÉS', text: 'Mariages, anniversaires, fiançailles, baby shower, événements familiaux.' },
              { icon: Briefcase, title: "VOYAGES\nD'AFFAIRES", text: 'Billetterie, hébergements, transferts, organisation de séjours sur-mesure.' },
              { icon: Bell, title: 'CONCIERGERIE\nPREMIUM', text: 'Réservations, accès VIP, services personnalisés, assistance 24/7.' },
              { icon: Globe, title: 'INCENTIVES &\nTEAM BUILDING', text: 'Activités, expériences uniques pour fédérer et motiver vos équipes.' },
              { icon: Calendar, title: 'GESTION\nCOMPLÈTE', text: 'Coordination, logistique, fournisseurs, suivi du budget et reporting.' },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-mce-teal/10 flex items-center justify-center mx-auto">
                  <p.icon className="w-7 h-7 text-mce-teal" />
                </div>
                <h3 className="mt-4 text-[13px] font-black text-mce-navy whitespace-pre-line leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[11.5px] text-mce-navy/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ============ POURQUOI CHOISIR + PROCESSUS ============== */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-2xl bg-mce-navy text-white overflow-hidden flex flex-col md:flex-row shadow-lg">
            <div className="md:w-1/2 relative min-h-[260px]">
              <img
                src={expertiseMCE}
                alt="Expertise MCE"
                className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-[15px] font-black text-mce-teal tracking-wide leading-tight">
                POURQUOI<br />CHOISIR MCE ?
              </h3>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Expertise internationale et multiculturelle',
                  'Réseau de partenaires fiables et qualifiés',
                  'Solutions créatives et sur-mesure',
                  'Respect des délais et du budget',
                  'Expérience humaine et impact durable',
                  'Confidentialité et qualité garanties',
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[12px] text-white/90">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-white border border-gray-100 shadow-md p-6 lg:p-8">
            <p className="text-center text-[11px] tracking-[0.3em] font-bold text-mce-teal">
              NOTRE PROCESSUS EN 5 ÉTAPES
            </p>
            <div className="h-1 w-12 bg-mce-teal mx-auto rounded-full mt-3 mb-8" />

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-mce-teal/30" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                {[
                  { num: '01', title: 'ÉCOUTER', text: 'Comprendre vos besoins et vos objectifs.', icon: MessageCircle, tone: 'teal-light' },
                  { num: '02', title: 'CONCEVOIR', text: 'Imaginer un concept créatif et adapté.', icon: Target, tone: 'teal' },
                  { num: '03', title: 'ORGANISER', text: 'Planifier, coordonner et mobiliser les ressources.', icon: ClipboardList, tone: 'teal' },
                  { num: '04', title: 'RÉALISER', text: 'Coordonner sur site et assurer une exécution parfaite.', icon: Users, tone: 'navy' },
                  { num: '05', title: 'VALORISER', text: "Mesurer l'impact et créer des souvenirs qui durent.", icon: Award, tone: 'navy' },
                ].map((s) => {
                  const bg =
                    s.tone === 'teal-light' ? 'bg-mce-teal/70' : s.tone === 'teal' ? 'bg-mce-teal' : 'bg-mce-navy';
                  return (
                    <div key={s.num} className="text-center">
                      <div className={`w-16 h-16 rounded-full ${bg} mx-auto flex items-center justify-center shadow-md`}>
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="mt-3 text-[11px] font-bold text-mce-teal tracking-wider">{s.num}</div>
                      <div className="text-[13px] font-black text-mce-navy mt-1">{s.title}</div>
                      <p className="mt-2 text-[11px] text-mce-navy/70 leading-snug px-1">{s.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ===================== MCE EN CHIFFRES =================== */}
      {/* ========================================================= */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="rounded-2xl bg-mce-navy text-white p-8 lg:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="text-[13px] font-black text-mce-teal tracking-wider leading-tight">
                MCE EN<br />CHIFFRES
              </div>
            </div>
            {[
              { icon: Users, value: '150+', label: 'événements\norganisés' },
              { icon: Globe, value: '3', label: "pays d'intervention\n(France, Sénégal, Maroc)" },
              { icon: Users, value: '200+', label: 'partenaires\nqualifiés' },
              { icon: Heart, value: '98%', label: 'clients\nsatisfaits' },
              { icon: Calendar, value: '10+', label: "années d'expertise\ndans l'événementiel" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <s.icon className="w-8 h-8 text-mce-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-2xl lg:text-[28px] font-black leading-none">{s.value}</div>
                  <div className="text-[11px] text-white/75 mt-1 leading-tight whitespace-pre-line">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* =========== UNE SOURCE D'INSPIRATION (COVERFLOW) ======== */}
      {/* ========================================================= */}
      <section className="pb-24 pt-4 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-mce-teal" />
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">GALERIE</p>
          </div>
          <h2 className="section-title text-left">
            Une source <span className="text-mce-teal">d&rsquo;inspiration</span>
          </h2>

          <div
            className="relative mt-16 mb-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-[420px] flex items-center justify-center">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="absolute w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer"
                  style={getCardStyle(i)}
                  onClick={() => setActiveIdx(i)}
                >
                  <img src={src} alt={`Inspiration ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 shadow-xl border border-gray-100 flex items-center justify-center hover:bg-mce-teal hover:text-white text-mce-navy transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 shadow-xl border border-gray-100 flex items-center justify-center hover:bg-mce-teal hover:text-white text-mce-navy transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Aller à l'image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === activeIdx ? 'w-8 bg-mce-teal' : 'w-2 bg-mce-navy/25 hover:bg-mce-navy/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ Le bloc "Parlons-en" est volontairement omis */}
    </div>
  );
}