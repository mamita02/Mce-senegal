import {
  AlertTriangle, ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cloud,
  FileText,
  Globe,
  GraduationCap,
  MessageCircle,
  Monitor,
  PartyPopper,
  Star,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMG } from '../mock';

// Injection de la police Playfair Display (élégante et raffinée)
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
  
  * {
    font-family: 'Poppins', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden text-mce-navy" style={{ backgroundColor: '#ffffff' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/hwoxv3xw_hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* subtle right-side darkening for image clarity */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0) 60%, rgba(5,15,34,0.35) 100%)' }}
        />
        {/* WHITE overlay: responsive - léger sur mobile, dégradé sur desktop */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.7)', // Overlay visible sur toute l'écran mobile pour lisibilité
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255, 255, 255, 0.96) 40%, rgba(110, 98, 98, 0.55) 62%, rgba(81, 160, 235, 0) 82%)',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 fade-up">
            {/* Badge - Bleu foncé élégant du catalogue MCE */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border text-[11.5px] font-bold tracking-[0.2em]" style={{ borderColor: 'rgba(0,26,61,0.6)', color: '#001a3d' }}>
              CONSEIL &nbsp;&ndash;&nbsp; FORMATION &nbsp;&ndash;&nbsp; DIGITAL &nbsp;&ndash;&nbsp; RH &nbsp;&ndash;&nbsp; ÉVÉNEMENTIEL
            </span>
            
            {/* Titre - Bleu foncé élégant */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05] tracking-tight" style={{ color: '#001a3d' }}>
              Des solutions concrètes<br />
              pour transformer<br />
              <span className="text-mce-gold">vos ambitions en résultats.</span>
            </h1>
            
            {/* Description - Bleu foncé avec opacité */}
            <p className="mt-6 text-[15px] leading-relaxed max-w-2xl" style={{ color: '#001a3d', opacity: 0.85 }}>
              MCE accompagne les entreprises, organisations et talents avec des solutions sur mesure,
              humaines et performantes.
            </p>

            {/* Tags - Bleu foncé élégant */}
            <div className="flex flex-wrap gap-2.5 mt-7">
              {[
                { icon: Monitor, label: 'Digital & SaaS' },
                { icon: GraduationCap, label: 'Formation & RH' },
                { icon: Briefcase, label: 'Accompagnement' },
                { icon: PartyPopper, label: 'Événements & Networking' },
              ].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[12.5px] font-semibold transition-colors"
                  style={{ backgroundColor: 'rgba(0, 26, 61, 0.08)', border: '1px solid rgba(0, 26, 61, 0.25)', color: '#001a3d' }}
                >
                  <c.icon className="w-4 h-4" style={{ color: '#001a3d' }} /> {c.label}
                </span>
              ))}
            </div>

            {/* Boutons - Bleu foncé élégant */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-3 px-5 py-3 rounded-md transition-all" style={{ backgroundColor: '#001a3d', color: '#ffffff' }}>
                <Calendar className="w-4 h-4" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>PRENDRE RENDEZ-VOUS</span>
                  <span className="text-[10.5px] font-normal opacity-80">(Calendly)</span>
                </span>
              </Link>
              <Link to="/contact" className="btn-outline-light inline-flex items-center gap-3 px-5 py-3 rounded-md transition-all border" style={{ borderColor: '#001a3d', color: '#001a3d', backgroundColor: 'transparent' }}>
                <FileText className="w-4 h-4" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>DEMANDER UN DEVIS</span>
                  <span className="text-[10.5px] font-normal opacity-80">Réponse rapide</span>
                </span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[13px]" style={{ color: 'rgba(0, 26, 61, 0.9)' }}>
              <CheckCircle2 className="w-4 h-4 text-mce-gold" />
              Un interlocuteur unique. Des solutions multiples.
            </div>
          </div>

          <div className="lg:col-span-5 relative fade-up hidden lg:block">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] text-white">
                  <Globe className="w-4 h-4 text-mce-gold" />
                  FRANCE &middot; SÉNÉGAL &middot; MAROC
                </div>
                <p className="text-[12px] text-white/80 mt-2 leading-relaxed">
                  Une présence internationale<br />au service de votre croissance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                  <div className="text-3xl font-black leading-none" style={{ color: '#22d3ee' }}>+1000</div>
                  <p className="text-[11.5px] text-white/80 mt-2">Talents accompagnés</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                  <div className="text-3xl font-black leading-none" style={{ color: '#22d3ee' }}>+200</div>
                  <p className="text-[11.5px] text-white/80 mt-2">Projets menés avec succès</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                  <div className="text-3xl font-black text-white leading-none">20+</div>
                  <p className="text-[11.5px] text-white/80 mt-2">Années d&rsquo;expertise</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4">
                  <div className="text-3xl font-black text-mce-gold leading-none">98%</div>
                  <p className="text-[11.5px] text-white/80 mt-2">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* gold wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 40" className="w-full h-8" preserveAspectRatio="none">
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
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-teal">NOS 3 UNIVERS</p>
          <h2 className="section-title mt-3">Trois expertises, un seul objectif : votre réussite.</h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'SOLUTIONS\nDIGITALES',
                sub: 'Des technologies puissantes pour des entreprises plus productives.',
                img: IMG.coding,
                titleColor: 'text-mce-teal',
                btn: 'bg-mce-teal hover:bg-mce-teal/90',
                cta: 'DÉCOUVRIR NOS SOLUTIONS',
                items: [
                  'SaaS & logiciels métiers (CRM, applications…)',
                  'Sites web, plateformes & Landing Pages',
                  'Hébergement, maintenance & sécurité',
                  'Solutions sur mesure & automatisation',
                ],
                to: '/solutions-digitales',
              },
              {
                title: 'TALENTS & RH',
                sub: 'Développer les talents. Renforcer les équipes. Booster la performance.',
                img: IMG.team1,
                titleColor: 'text-purple-600',
                btn: 'bg-purple-500 hover:bg-purple-600',
                cta: 'DÉVELOPPER VOS TALENTS',
                items: [
                  'Formations pratiques & certifiantes',
                  'Recrutement, sourcing & intégration',
                  'Accompagnement RH & management',
                  'Coaching individuel & développement personnel',
                ],
                to: '/talents-rh',
              },
              {
                title: 'ACCOMPAGNEMENT\n& ÉVÉNEMENTS',
                sub: 'Vous accompagner à chaque étape. Créer des connexions qui changent tout.',
                img: IMG.event1,
                titleColor: 'text-mce-gold',
                btn: 'bg-mce-gold hover:bg-amber-500 text-mce-navy',
                cta: 'CRÉER DES IMPACTS',
                items: [
                  'Accompagnement stratégique & business',
                  'Événements, séminaires & conférences',
                  'Networking jeunes talents & entreprises',
                  'Événementiel international & conciergerie',
                ],
                to: '/accompagnement-evenements',
              },
            ].map((u, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden card-hover flex flex-col"
              >
                <div className="grid grid-cols-2 gap-0 items-start">
                  <div className="p-5">
                    <h3 className={`font-black text-[18px] leading-tight ${u.titleColor} whitespace-pre-line`}>
                      {u.title}
                    </h3>
                    <p className="text-[12.5px] text-mce-navy/75 mt-3 leading-relaxed">{u.sub}</p>
                  </div>
                  <div className="relative h-[140px]">
                    <img src={u.img} alt={u.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div className="px-5 pb-5 flex-1 flex flex-col">
                  <ul className="mt-4 space-y-2.5 flex-1">
                    {u.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[12.5px] text-mce-navy/85">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${u.titleColor}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={u.to}
                    className={`mt-5 text-white text-[12px] font-bold py-3 rounded-md ${u.btn} transition-colors inline-flex items-center justify-center gap-2 tracking-wide`}
                  >
                    {u.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* LE FUTUR EST DIGITAL */}
          <div className="mt-10 rounded-2xl bg-mce-navy text-white p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center overflow-hidden relative">
            <div className="lg:col-span-3 flex items-center justify-center">
              <div className="relative">
                <Cloud className="w-28 h-28 text-mce-teal" strokeWidth={1.4} />
                <div className="absolute -bottom-2 -right-2 grid grid-cols-2 gap-1">
                  {[0, 1, 2, 3].map((k) => (
                    <div key={k} className="w-6 h-6 rounded bg-mce-teal/30 border border-mce-teal/50" />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h3 className="text-2xl md:text-[26px] font-black leading-tight">
                LE FUTUR EST DIGITAL.<br />
                <span className="text-mce-gold">PRENEZ UNE LONGUEUR D&rsquo;AVANCE.</span>
              </h3>
              <p className="text-white/80 text-[13px] mt-4 leading-relaxed">
                CRM, plateformes, applications métiers, tableaux de bord… Nos solutions SaaS et personnalisées
                simplifient vos processus, améliorent votre productivité et accélèrent votre croissance.
              </p>
            </div>
            <div className="lg:col-span-4">
              <ul className="space-y-2.5">
                {[
                  'Automatisation des tâches',
                  'Meilleure gestion de la relation client',
                  'Décisions basées sur la donnée',
                  'Sécurité & hébergement de confiance',
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13px]">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" /> {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/solutions-digitales"
                className="mt-5 inline-flex items-center gap-2 bg-mce-teal hover:bg-mce-teal/90 text-white text-[12px] font-bold py-3 px-5 rounded-md transition-colors"
              >
                DÉCOUVRIR NOS SOLUTIONS SAAS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MCE EN CHIFFRES ===================== */}
      <section className="pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-teal">MCE EN CHIFFRES</p>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-8" />
          <div className="rounded-2xl bg-white shadow-md border border-gray-100 px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Users, color: 'text-mce-teal', bg: 'bg-mce-teal/10', value: '+200', label: 'Entreprises &', sub: 'organisations\naccompagnées' },
              { icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-500/10', value: '+50', label: 'Formations réalisées', sub: 'chaque année' },
              { icon: Briefcase, color: 'text-mce-gold', bg: 'bg-amber-400/15', value: '+1 000', label: 'Talents recrutés', sub: 'et accompagnés' },
              { icon: Globe, color: 'text-blue-600', bg: 'bg-blue-500/10', value: '3', label: "Pays d'implantation", sub: 'France · Sénégal · Maroc' },
              { icon: Star, color: 'text-mce-gold', bg: 'bg-amber-400/15', value: '98%', label: 'De clients satisfaits', sub: 'et recommandant MCE' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-black text-mce-navy leading-none">{s.value}</div>
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
      <section className="pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[13px] tracking-[0.3em] font-bold text-mce-navy">
            UN ÉCOSYSTÈME DE <span className="text-mce-teal">PARTENAIRES ENGAGÉS</span>
          </p>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-8" />
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
                  <a href="#" className="text-mce-teal font-semibold text-[12.5px] inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all">
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