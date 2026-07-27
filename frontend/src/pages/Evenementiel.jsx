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

// ⚠️ IMPORT DES DRAPEAUX
// Place les 3 fichiers dans src/assets/flags/ puis les imports ci-dessous fonctionneront.
import flagFrance from '../assets/flags/france.webp';
import flagSenegal from '../assets/flags/senegal.webp';
import flagMaroc from '../assets/flags/maroc.webp';

export default function Evenementiel() {
  // ================== CAROUSEL COVERFLOW ==================
  const gallery = [
    IMG.event1 || 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    IMG.event2 || 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800',
    IMG.event3 || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    IMG.event4 || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    IMG.event5 || 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play toutes les 4s (sauf si l'utilisateur survole)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % gallery.length), 4000);
    return () => clearInterval(t);
  }, [paused, gallery.length]);

  const next = () => setActiveIdx((i) => (i + 1) % gallery.length);
  const prev = () => setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);

  // Position relative de chaque carte par rapport à la carte active
  const getCardStyle = (i) => {
    const total = gallery.length;
    let offset = i - activeIdx;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const abs = Math.abs(offset);
    if (abs > 2) return { display: 'none' };

    const translate = offset * 220; // décalage horizontal en px
    const scale = 1 - abs * 0.15;
    const opacity = 1 - abs * 0.25;
    const rotate = offset * 3; // légère inclinaison

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
      {/* ===================== HERO ============================== */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-mce-navy text-white">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-[11px] lg:text-[12px] tracking-[0.25em] font-bold text-mce-teal">
              ÉVÉNEMENTIEL<br />INTERNATIONAL &amp; CONCIERGERIE
            </p>

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-black leading-[1.1] tracking-tight">
              Des événements<br />qui marquent.<br />
              <span className="text-mce-teal">Des expériences<br />qui restent.</span>
            </h1>

            <p className="mt-6 text-[14px] leading-relaxed text-white/85 max-w-md">
              De l&rsquo;idée à la réalisation, MCE imagine, organise et coordonne
              vos événements en France, au Sénégal, au Maroc et partout
              dans le monde.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                { icon: Sparkles, title: 'Créativité', sub: '& excellence' },
                { icon: Globe, title: 'Réseau local &', sub: 'international' },
                { icon: ShieldCheck, title: 'Gestion complète', sub: '& sur-mesure' },
                { icon: Heart, title: 'Impact humain', sub: '& durable' },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  <div className="w-9 h-9 rounded-full border border-mce-teal/40 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-mce-teal" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-white/60">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[300px] shadow-xl">
            <img
              src={IMG.eventHero || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200'}
              alt="Événement MCE"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <div className="rounded-2xl border border-white/15 bg-mce-navy/60 backdrop-blur-sm p-6 shadow-lg">
              <h3 className="text-[13px] font-black tracking-wide leading-tight">
                NOUS ORGANISONS<br />VOS ÉVÉNEMENTS
              </h3>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Séminaires & conférences',
                  'Team building & incentives',
                  'Lancements de produits',
                  "Cocktails & soirées d'entreprise",
                  'Mariages & événements privés',
                  "Voyages d'affaires",
                  'Conciergerie premium',
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[12.5px] text-white/90">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <div className="flex-1 text-[12.5px] leading-relaxed text-white/85">
                Un interlocuteur unique,<br />
                une organisation fluide,<br />
                un résultat inoubliable.
              </div>
              <Plane className="w-8 h-8 text-mce-teal shrink-0 -rotate-45" strokeWidth={1.6} />
            </div>
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
                  {/* Drapeau dans le cercle */}
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
                src={IMG.founder || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600'}
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
          {/* Header aligné à gauche comme sur la ref */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-mce-teal" />
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">GALERIE</p>
          </div>
          <h2 className="section-title text-left">
            Une source <span className="text-mce-teal">d&rsquo;inspiration</span>
          </h2>

          {/* Carousel coverflow */}
          <div
            className="relative mt-16 mb-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Zone d'affichage des cartes */}
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

            {/* Flèches nav */}
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

          {/* Dots indicateurs */}
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