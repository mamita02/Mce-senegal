import {
  AlertTriangle, ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cloud,
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
import ordi from '../assets/ordi.png';
import kebaConsultingLogo from '../assets/keba-consulting-logo.png';
import sparksProjectLogo from '../assets/sparks-project-logo.png';

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* ===================== HERO ===================== */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff', minHeight: '620px' }}
      >
        {/* Image de fond (mobile + desktop) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '90% center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Voile blanc dégradé DESKTOP */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,0.6) 52%, rgba(255,255,255,0) 65%)',
          }}
        />

        {/* Voile blanc dégradé MOBILE */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 55%, rgba(255,255,255,0.75) 75%, rgba(255,255,255,0.4) 90%, rgba(255,255,255,0.2) 100%)',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto pl-4 pr-4 lg:pl-10 lg:pr-10 pt-10 lg:pt-14 pb-14 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* ============ COLONNE GAUCHE : TEXTE ============ */}
          <div className="lg:col-span-5 fade-up">
            <span
              className="inline-flex items-center px-4 py-2 rounded-full border text-[10.5px] lg:text-[11px] font-bold tracking-[0.18em] lg:tracking-[0.2em]"
              style={{
                borderColor: 'rgba(0,26,61,0.5)',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#001a3d',
              }}
            >
              CONSEIL &nbsp;&ndash;&nbsp; FORMATION &nbsp;&ndash;&nbsp; DIGITAL &nbsp;&ndash;&nbsp; RH &nbsp;&ndash;&nbsp; ÉVÉNEMENTIEL
            </span>

            <h1
              className="mt-6 text-3xl md:text-4xl lg:text-[38px] font-black leading-[1.1] tracking-tight"
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

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
              <Link
                to="/accompagnement-evenements"
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                style={{ backgroundColor: '#001a3d', color: '#ffffff' }}
              >
                <FileText className="w-4 h-4" style={{ color: '#0099CC' }} />
                Nos évènements
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-md transition-all font-bold text-[13px] tracking-wide border-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
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

          <div className="lg:col-span-7 relative hidden lg:block min-h-[500px]" />
        </div>

        <div className="relative">
          <svg viewBox="0 0 1440 40" className="w-full h-10" preserveAspectRatio="none">
            <path d="M0,20 Q360,0 720,20 T1440,20 L1440,40 L0,40 Z" fill="#d4a017" />
          </svg>
        </div>
      </section>

      {/* ===================== PAIN POINTS ===================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-1 md:grid-cols-6 gap-5 items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-[13px] font-bold text-mce-navy leading-tight">
              Vos défis d&rsquo;aujourd&rsquo;hui<br />
              <span className="text-mce-navy/70 font-normal">sont nos missions quotidiennes</span>
            </p>
          </div>
          {[
            'Vous manquez\nde temps ?',
            'Vos équipes ont besoin\nde compétences ?',
            'Vous cherchez\ndes talents fiables ?',
            'Vous voulez digitaliser\nou automatiser ?',
            'Vous souhaitez organiser\nun événement impactant ?',
          ].map((q, i) => (
            <p
              key={i}
              className="text-[12.5px] text-mce-navy/80 whitespace-pre-line font-medium border-l border-gray-200 pl-4"
            >
              {q}
            </p>
          ))}
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
                    style={i === 1 ? { backgroundColor: '#0099CC', hover: '#0099CC/90' } : {}}
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
                to="/solutions-digitales/saas-logiciels"
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
      <section className="pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
          <h2 className="section-title mt-3 text-center">MCE en chiffres.</h2>
          <div className="h-1 w-16 mx-auto rounded-full mt-3 mb-8" style={{ backgroundColor: '#0099CC' }} />
          <div className="rounded-2xl bg-white shadow-md border border-gray-100 px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Users, color: '#0099CC', bg: 'bg-blue-100', value: '+200', label: 'Entreprises &', sub: 'organisations\naccompagnées' },
              { icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-500/10', value: '+50', label: 'Formations réalisées', sub: 'chaque année' },
              { icon: Briefcase, color: 'text-mce-gold', bg: 'bg-amber-400/15', value: '+1 000', label: 'Talents recrutés', sub: 'et accompagnés' },
              { icon: Globe, color: '#0099CC', bg: 'bg-blue-100', value: '3', label: "Pays d'implantation", sub: 'France · Sénégal · Maroc' },
              { icon: Star, color: 'text-mce-gold', bg: 'bg-amber-400/15', value: '98%', label: 'De clients satisfaits', sub: 'et recommandant MCE' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.icon className="w-6 h-6" style={{ color: typeof s.color === 'string' && s.color.startsWith('#') ? s.color : undefined }} />
                </div>
                <div>
                  <div className="home-stat-value text-3xl font-black text-mce-navy leading-none">{s.value}</div>
                  <div className="text-[12px] text-mce-navy/70 leading-tight mt-2 whitespace-pre-line">
                    {s.label}
                    <br />
                    {s.sub}
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
                  <img src={kebaConsultingLogo} alt="KEBA Consulting" className="w-full h-16 object-contain" />
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
                  <img src={sparksProjectLogo} alt="Sparks Project" className="w-full h-16 object-contain" />
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
