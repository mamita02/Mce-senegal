import {
  AlertTriangle, ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  FileText,
  Globe,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMG } from '../mock';
import heroImage from '../assets/hero.png';
import heroMobileImage from '../assets/hero-mobile.png';
import ordi from '../assets/ordi.png';

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* ===================== HERO ===================== */}
      
      {/* ============= VERSION DESKTOP (lg+) ============= */}
      <section
        className="hidden lg:block relative overflow-hidden"
        style={{ backgroundColor: '#ffffff', minHeight: '620px' }}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '90% center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Voile blanc dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,0.6) 52%, rgba(255,255,255,0) 65%)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto pl-10 pr-10 pt-14 pb-20 grid grid-cols-12 gap-10 items-center">
          {/* ============ COLONNE GAUCHE : TEXTE ============ */}
          <div className="col-span-5 fade-up">
            <span
              className="inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-bold tracking-[0.2em]"
              style={{
                borderColor: 'rgba(0,26,61,0.5)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#001a3d',
              }}
            >
              CONSEIL &nbsp;&ndash;&nbsp; FORMATION &nbsp;&ndash;&nbsp; DIGITAL &nbsp;&ndash;&nbsp; RH &nbsp;&ndash;&nbsp; ÉVÉNEMENTIEL
            </span>

            <h1
              className="mt-6 text-[38px] font-black leading-[1.1] tracking-tight"
              style={{ color: '#001a3d' }}
            >
              Des solutions concrètes pour transformer{' '}
              <span style={{ color: '#0099CC' }}>vos ambitions en résultats.</span>
            </h1>

            <p
              className="mt-5 text-[15px] leading-relaxed max-w-2xl"
              style={{ color: '#001a3d', opacity: 0.8 }}
            >
              MCE accompagne les entreprises, organisations et talents avec des solutions sur mesure,
              humaines et performantes pour un impact durable.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: '#001a3d', color: '#ffffff' }}
              >
                <FileText className="w-4 h-4" style={{ color: '#0099CC' }} />
                Nos evenements
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide border-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderColor: '#001a3d',
                  color: '#001a3d',
                }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#0099CC' }} />
                Prendre rendez-vous
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
              {[
                { icon: CheckCircle2, title: 'Un interlocuteur unique', sub: 'Des solutions multiples' },
                { icon: Sparkles, title: 'Accompagnement', sub: 'sur mesure' },
                { icon: MapPin, title: 'Présent en France,', sub: 'Sénégal et Maroc' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <r.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0099CC' }} />
                  <div className="text-[12.5px] leading-tight" style={{ color: '#001a3d' }}>
                    <div className="font-semibold">{r.title}</div>
                    <div className="opacity-70">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7 relative min-h-[500px]" />
        </div>

        <div className="relative">
          <svg viewBox="0 0 1440 40" className="w-full h-10" preserveAspectRatio="none">
            <path d="M0,20 Q360,0 720,20 T1440,20 L1440,40 L0,40 Z" fill="#d4a017" />
          </svg>
        </div>
      </section>

      {/* ============= VERSION MOBILE (<lg) ============= */}
      <section
        className="lg:hidden relative overflow-hidden flex flex-col"
        style={{
          backgroundImage: `url(${heroMobileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 'calc(100vh - 72px)',
          minHeight: '520px',
        }}
      >
        {/* Dégradé noir/transparent de bas en haut pour lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Contenu texte — EN HAUT */}
        <div className="relative z-10 px-6 pt-8 flex-1 flex flex-col">
          <h1
            className="text-2xl font-black leading-[1.2] tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Des solutions concrètes pour transformer{' '}
            <span style={{ color: '#0099CC' }}>vos ambitions en résultats.</span>
          </h1>

          <p
            className="mt-3 text-[14px] leading-relaxed max-w-lg"
            style={{ color: '#ffffff', opacity: 0.95 }}
          >
            MCE accompagne les entreprises, organisations et talents avec des solutions sur mesure,
            humaines et performantes pour un impact durable.
          </p>
        </div>

        {/* Boutons — EN BAS */}
        <div className="relative z-10 px-6 pb-6 flex flex-col gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
            style={{ backgroundColor: '#001a3d', color: '#ffffff' }}
          >
            <FileText className="w-4 h-4" style={{ color: '#0099CC' }} />
            Nos evenements
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide border-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderColor: '#001a3d',
              color: '#001a3d',
            }}
          >
            <Calendar className="w-4 h-4" style={{ color: '#0099CC' }} />
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* ===================== PAIN POINTS ===================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
          {/* Titre centré en haut */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-center">
              <h3 className="text-lg lg:text-xl font-black text-mce-navy leading-tight">
                Vos défis d&rsquo;aujourd&rsquo;hui
              </h3>
              <p className="text-[13px] text-mce-navy/70 font-medium mt-1">
                sont nos missions quotidiennes
              </p>
            </div>
          </div>

          {/* Défis en grille compacte */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Vous manquez de temps ?',
              'Vos équipes ont besoin de compétences ?',
              'Vous cherchez des talents fiables ?',
              'Vous voulez digitaliser ou automatiser ?',
              'Vous souhaitez organiser un événement impactant ?',
            ].map((q, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-mce-teal/30 hover:bg-mce-teal/5 transition-all"
              >
                <p className="text-[13px] text-mce-navy font-medium leading-relaxed">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3 UNIVERS ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mt-3 text-center">Trois expertises, un seul objectif : votre réussite.</h2>
          <div className="h-1 w-16 mx-auto rounded-full mt-3 mb-12" style={{ backgroundColor: '#0099CC' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'SOLUTIONS DIGITALES',
                sub: 'Solutions CRM, SaaS et de gestion pour votre transformation numérique.',
                img: IMG.coding,
                titleColor: 'text-mce-navy',
                btn: 'bg-mce-navy hover:bg-mce-navy/90 text-white',
                cta: 'SOLUTIONS DIGITALES',
                items: [
                  'Automatisation des tâches',
                  'Sauvegardes sécurisées',
                  'Analytique avancée',
                ],
                to: '/solutions-digitales',
              },
              {
                title: 'TALENTS & RH',
                sub: 'Développer les talents. Renforcer les équipes. Booster la performance.',
                img: IMG.team1,
                titleColor: 'text-black',
                btn: 'text-black transition-colors',
                cta: 'DÉVELOPPER VOS TALENTS',
                items: [
                  'Formations certifiantes',
                  'Recrutement ciblé',
                  'Coaching & Management',
                ],
                to: '/talents-rh',
              },
              {
                title: 'ACCOMPAGNEMENT & ÉVÉNEMENTS',
                sub: 'Vous accompagner à chaque étape. Créer des connexions impactantes.',
                img: IMG.event1,
                titleColor: 'text-mce-navy',
                btn: 'bg-mce-navy hover:bg-mce-navy/90 text-white',
                cta: 'CRÉER DES IMPACTS',
                items: [
                  'Accompagnement stratégique',
                  'Conférences & Séminaires',
                  'Réseautage professionnel',
                ],
                to: '/accompagnement-evenements',
              },
            ].map((u, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden card-hover flex flex-col p-6"
              >
                <div className="relative h-[180px] rounded-xl overflow-hidden mb-5">
                  <img src={u.img} alt={u.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col text-center">
                  <h3 className={`font-black text-[20px] leading-tight ${u.titleColor} whitespace-pre-line`}>
                    {u.title}
                  </h3>
                  <p className="text-[14px] text-mce-navy/75 mt-3 leading-relaxed">{u.sub}</p>
                  <ul className="mt-5 space-y-2.5 flex-1 text-left inline-block mx-auto">
                    {u.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[14px] text-mce-navy/85">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#0099CC' }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={u.to}
                    className={`mt-6 text-[13px] font-bold py-3.5 rounded-md ${u.btn} inline-flex items-center justify-center gap-2 tracking-wide w-full`}
                    style={i === 1 ? { backgroundColor: '#0099CC' } : {}}
                  >
                    {u.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* LE FUTUR EST DIGITAL */}
          <div className="mt-16 rounded-2xl bg-mce-navy text-white p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden relative shadow-xl">
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <img
                  src={ordi}
                  alt="Isometric Digital Cloud Network"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-5 text-left">
              <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">
                LE FUTUR EST DIGITAL.<br />
                <span style={{ color: '#0099CC' }}>PRENEZ UNE LONGUEUR D'AVANCE.</span>
              </h3>
              <p className="text-white/90 text-[15px] mt-5 leading-relaxed">
                CRM, plateformes, applications métiers, tableaux de bord... Nos solutions SaaS et personnalisées simplifient vos processus, améliorent votre productivité et accélèrent votre croissance.
              </p>
            </div>
            <div className="md:col-span-3 text-left space-y-3">
              <ul className="space-y-3">
                {[
                  'Automatisation des tâches',
                  'Gestion de la relation client',
                  'Analytique de données',
                  'Décisions basées sur la donnée',
                  'Sécurité des tâches',
                  'Hébergement de confiance',
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[14px]">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#0099CC' }} /> {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/solutions-digitales"
                className="mt-6 inline-flex items-center gap-2 text-white text-[13px] font-bold py-3.5 px-6 rounded-md transition-colors w-full justify-center shadow-lg"
                style={{ backgroundColor: '#0099CC' }}
              >
                DÉCOUVRIR NOS SOLUTIONS SAAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MCE EN CHIFFRES ===================== */}
      <section className="py-12 lg:pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mt-3 text-center">MCE en chiffres.</h2>
          <div className="h-1 w-16 mx-auto rounded-full mt-3 mb-8" style={{ backgroundColor: '#0099CC' }} />
          
          {/* ========== DESKTOP (md+) ========== */}
          <div className="hidden md:grid rounded-2xl bg-white shadow-md border border-gray-100 px-8 py-8 grid-cols-4 gap-8">
            {[
              { icon: Briefcase, color: '#0099CC', value: "+15 ans", label: "D'expérience en", sub: "ressources humaines" },
              { icon: GraduationCap, color: '#9333ea', value: "+50", label: "Projets réalisés", sub: "par année" },
              { icon: Globe, color: '#0099CC', value: "3", label: "Pays d'implantation", sub: "France · Sénégal · Maroc" },
              { icon: Star, color: '#d4a017', value: "+95%", label: "De clients satisfaits", sub: "et recommandant MCE" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <s.icon className="w-8 h-8" style={{ color: s.color }} />
                <span className="text-2xl font-black text-mce-navy">{s.value}</span>
                <div className="text-[13px] font-medium text-mce-navy/80 leading-tight">
                  <div>{s.label}</div>
                  <div className="opacity-75">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ========== MOBILE (<md) ========== */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {[
              { icon: Briefcase, color: '#0099CC', value: "+15 ans", label: "D'expérience en\nressources humaines" },
              { icon: GraduationCap, color: '#0099CC', value: "+50", label: "Projets réalisés\npar année" },
              { icon: Globe, color: '#0099CC', value: "3", label: "Pays d'implantation\nFrance · Sénégal · Maroc" },
              { icon: Star, color: '#d4a017', value: "+95%", label: "De clients satisfaits\net recommandant MCE" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3">
                <div className="flex items-center justify-center">
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <div className="text-center">
                  <div className="font-black text-base text-mce-navy">{s.value}</div>
                  <div className="text-[11px] text-mce-navy/70 leading-snug whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PARTENAIRES ===================== */}
      <section className="pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mt-3 text-center">
            Un écosystème de <span style={{ color: '#0099CC' }}>partenaires engagés</span>.
          </h2>
          <div className="h-1 w-16 mx-auto rounded-full mt-3 mb-8" style={{ backgroundColor: '#0099CC' }} />
          <div className="rounded-2xl bg-gray-50 border border-gray-100 px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                logo: (
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-700 leading-none">KEBA</div>
                    <div className="text-[10px] tracking-[0.35em] font-bold text-blue-700 mt-1">CONSULTING</div>
                  </div>
                ),
                desc: 'Conseil, formation et accompagnement des leaders et organisations.',
              },
              {
                logo: (
                  <div className="text-center">
                    <div className="text-2xl font-black text-rose-600 leading-tight">WOMEN</div>
                    <div className="text-[11px] tracking-[0.3em] font-bold text-mce-navy">BUILD AFRICA</div>
                  </div>
                ),
                desc: "Promouvoir l'entrepreneuriat féminin et l'impact social.",
              },
              {
                logo: (
                  <div className="text-center">
                    <div className="text-2xl font-black text-mce-navy leading-tight">SPARCK</div>
                    <div className="text-[11px] tracking-[0.3em] font-bold text-mce-navy/70">PROJECT</div>
                  </div>
                ),
                desc: 'Projets innovants, formation et transformation digitale.',
              },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="w-32 shrink-0">{p.logo}</div>
                <div>
                  <p className="text-[13px] text-mce-navy/85 leading-relaxed">{p.desc}</p>
                  <a href="#" className="font-semibold text-[12.5px] inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all" style={{ color: '#0099CC' }}>
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/221771234567"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}