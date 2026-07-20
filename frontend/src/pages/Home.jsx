import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, GraduationCap, Users, Target, Star, ArrowRight, Globe, ChevronRight, CheckCircle2, Compass, Award, Handshake, Megaphone, Sparkles, Calendar, FileText, Monitor, Briefcase, PartyPopper, AlertTriangle } from 'lucide-react';
import { IMG, HOME_STATS, HOME_SOLUTIONS, PARTNERS, EVENTS } from '../mock';
import CTASection from '../components/CTASection';

const COLOR_MAP = {
  teal: { bg: 'bg-mce-teal/10', text: 'text-mce-teal', ring: 'ring-mce-teal/40', chip: 'text-mce-teal border-mce-teal/40', accent: 'bg-mce-teal' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', ring: 'ring-purple-500/40', chip: 'text-purple-600 border-purple-400', accent: 'bg-purple-500' },
  gold:   { bg: 'bg-amber-400/15', text: 'text-amber-500', ring: 'ring-amber-400/40', chip: 'text-amber-600 border-amber-400', accent: 'bg-amber-500' },
  red:    { bg: 'bg-rose-500/10', text: 'text-rose-600', ring: 'ring-rose-500/40', chip: 'text-rose-600 border-rose-400', accent: 'bg-rose-500' },
  blue:   { bg: 'bg-blue-500/10', text: 'text-blue-600', ring: 'ring-blue-500/40', chip: 'text-blue-600 border-blue-400', accent: 'bg-blue-500' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', ring: 'ring-orange-500/40', chip: 'text-orange-600 border-orange-400', accent: 'bg-orange-500' },
};

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden text-mce-navy" style={{ backgroundColor: '#ffffff' }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/hwoxv3xw_hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {/* Right-side darkening layer on the image */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0) 55%, rgba(5,15,34,0.55) 100%)' }} />
        {/* White gradient overlay: opaque left -> transparent right */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.55) 62%, rgba(255,255,255,0) 82%)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 fade-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-mce-teal/60 text-mce-teal text-[11.5px] font-bold tracking-[0.2em]">
              CONSEIL &nbsp;&ndash;&nbsp; FORMATION &nbsp;&ndash;&nbsp; DIGITAL &nbsp;&ndash;&nbsp; RH &nbsp;&ndash;&nbsp; &Eacute;V&Eacute;NEMENTIEL
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05] tracking-tight text-mce-navy">
              Des solutions concr&egrave;tes<br />
              pour transformer<br />
              <span className="text-mce-gold">vos ambitions en r&eacute;sultats.</span>
            </h1>
            <p className="mt-6 text-mce-navy/70 text-[15px] leading-relaxed max-w-2xl">
              MCE accompagne les entreprises, organisations et talents avec des solutions sur mesure, humaines et performantes.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {[
                { icon: Monitor, label: 'Digital & SaaS' },
                { icon: GraduationCap, label: 'Formation & RH' },
                { icon: Briefcase, label: 'Accompagnement' },
                { icon: PartyPopper, label: '\u00c9v\u00e9nements & Networking' },
              ].map((c, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white border border-gray-200 text-mce-navy text-[12.5px] font-semibold hover:border-mce-teal transition-colors shadow-sm">
                  <c.icon className="w-4 h-4 text-mce-teal" /> {c.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary">
                <Calendar className="w-4 h-4" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>PRENDRE RENDEZ-VOUS</span>
                  <span className="text-[10.5px] font-normal opacity-80">(Calendly)</span>
                </span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border-[1.5px] border-mce-navy/25 text-mce-navy px-6 py-3 rounded-md font-semibold hover:border-mce-navy transition-colors bg-white">
                <FileText className="w-4 h-4" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>DEMANDER UN DEVIS</span>
                  <span className="text-[10.5px] font-normal opacity-70">R&eacute;ponse rapide</span>
                </span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[13px] text-mce-navy/80">
              <CheckCircle2 className="w-4 h-4 text-mce-gold" />
              Un interlocuteur unique. Des solutions multiples.
            </div>
          </div>

          <div className="lg:col-span-5 relative fade-up hidden lg:block">
            <div className="space-y-4">
              <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] text-mce-navy">
                  <Globe className="w-4 h-4 text-mce-gold" />
                  FRANCE &middot; S&Eacute;N&Eacute;GAL &middot; MAROC
                </div>
                <p className="text-[12px] text-mce-navy/70 mt-2 leading-relaxed">
                  Une pr&eacute;sence internationale<br />au service de votre croissance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-black text-mce-gold leading-none">+1000</div>
                  <p className="text-[11.5px] text-mce-navy/70 mt-2">Talents accompagn&eacute;s</p>
                </div>
                <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-black text-mce-teal leading-none">+200</div>
                  <p className="text-[11.5px] text-mce-navy/70 mt-2">Projets men&eacute;s avec succ&egrave;s</p>
                </div>
                <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-black text-mce-navy leading-none">20+</div>
                  <p className="text-[11.5px] text-mce-navy/70 mt-2">Ann&eacute;es d&rsquo;expertise</p>
                </div>
                <div className="bg-white/95 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-black text-mce-gold leading-none">98%</div>
                  <p className="text-[11.5px] text-mce-navy/70 mt-2">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* gold wave divider */}
        <div className="relative">
          <svg viewBox="0 0 1440 40" className="w-full h-8" preserveAspectRatio="none">
            <path d="M0,20 Q360,0 720,20 T1440,20 L1440,40 L0,40 Z" fill="#d4a017" />
          </svg>
        </div>
      </section>

      {/* Pain points strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-1 md:grid-cols-6 gap-5 items-center">
          <div className="flex items-center gap-3 md:col-span-1">
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-[13px] font-bold text-mce-navy leading-tight">Vos d&eacute;fis d&rsquo;aujourd&rsquo;hui<br /><span className="text-mce-navy/70 font-normal">sont nos missions quotidiennes</span></p>
          </div>
          {[
            'Vous manquez\nde temps ?',
            'Vos \u00e9quipes ont besoin\nde comp\u00e9tences ?',
            'Vous cherchez\ndes talents fiables ?',
            'Vous voulez digitaliser\nou automatiser ?',
            'Vous souhaitez organiser\nun \u00e9v\u00e9nement impactant ?',
          ].map((q, i) => (
            <p key={i} className="text-[12.5px] text-mce-navy/80 whitespace-pre-line font-medium border-l border-gray-200 pl-4">
              {q}
            </p>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white -mt-10 relative z-10">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {HOME_STATS.map((s, i) => {
              const c = COLOR_MAP[s.color];
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center`}>
                    <Users className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-mce-navy leading-none">{s.value}</div>
                    <div className="text-[12px] text-mce-navy/70 leading-tight mt-1">{s.label}<br />{s.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-2">NOS SOLUTIONS POUR VOTRE <span className="text-mce-teal underline decoration-4 underline-offset-4">RÉUSSITE</span></h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-2 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {HOME_SOLUTIONS.map((s, i) => {
              const c = COLOR_MAP[s.color];
              return (
                <Link key={i} to={s.to} className="card-hover rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm group">
                  <div className="relative h-40 overflow-hidden">
                    <img src={IMG[s.img]} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute -bottom-5 left-4 w-11 h-11 rounded-full ${c.accent} flex items-center justify-center shadow-lg`}>
                      {i===0 && <Globe className="w-5 h-5 text-white" />}
                      {i===1 && <Users className="w-5 h-5 text-white" />}
                      {i===2 && <GraduationCap className="w-5 h-5 text-white" />}
                      {i===3 && <Handshake className="w-5 h-5 text-white" />}
                      {i===4 && <Megaphone className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                  <div className="p-5 pt-7">
                    <h3 className={`text-[13px] font-black tracking-wide ${c.text}`}>{s.title}</h3>
                    <p className="text-[12.5px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
                    <span className={`text-[12px] font-semibold mt-3 inline-flex items-center gap-1 ${c.text}`}>En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE ROW BANNERS */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            { title: 'SOUTENIR LES FEMMES ENTREPRENEURES', color: 'red', img: IMG.women1, items: ['Coaching & Mentoring personnalisé','Accès à un réseau de partenaires','Visibilité & opportunités d’affaires','Accès à des financements & ressources','Formations adaptées à leurs défis'], cta: 'DÉCOUVRIR LE PROGRAMME' },
            { title: 'NETWORKING & OPPORTUNITÉS', color: 'teal', img: IMG.event1, items: ['Afterworks professionnels','Conférences & Panels','Rencontres entreprises - jeunes talents','Salons de l’entrepreneuriat féminin','Partenariats locaux & internationaux'], cta: 'VOIR NOS PROCHAINS ÉVÉNEMENTS' },
            { title: 'EMPLOI & JEUNES TALENTS', color: 'orange', img: IMG.team3, items: ['Recrutement & placement','Ateliers CV & entretiens','Rencontres emploi en direct','Suivi & accompagnement'], cta: 'DÉCOUVRIR LES PROGRAMMES' },
          ].map((b, i) => {
            const c = COLOR_MAP[b.color];
            return (
              <div key={i} className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-2 gap-0">
                  <div className="p-5">
                    <h3 className={`text-[13px] font-black tracking-wide leading-tight ${c.text}`}>{b.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {b.items.map((it, j) => (
                        <li key={j} className="flex gap-1.5 text-[11.5px] text-mce-navy/80">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.text}`} />{it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-full">
                    <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <button className={`w-full ${c.accent} text-white text-[12px] font-bold py-3 tracking-wide hover:opacity-90 transition-opacity`}>{b.cta}</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* PARTNERS BAR */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h3 className="text-center section-title text-lg mb-8">ILS NOUS FONT <span className="text-mce-teal">CONFIANCE</span></h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {PARTNERS.slice(0,8).map((p) => (
              <div key={p.name} className="text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-[13px] font-black tracking-widest text-mce-navy">{p.name}</div>
              </div>
            ))}
            <span className="text-[13px] italic text-mce-navy/60">Et bien d’autres...</span>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-10">NOS ÉVÉNEMENTS & ACTIONS <span className="text-mce-teal">À IMPACT</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {EVENTS.map((e, i) => {
              const c = COLOR_MAP[e.tagColor];
              return (
                <div key={i} className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm card-hover">
                  <img src={IMG[e.img]} alt={e.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-black text-[15px] text-mce-navy leading-tight">{e.title}</h4>
                    <span className={`chip mt-2 ${c.chip}`}>{e.tag}</span>
                    <p className="text-[12px] text-mce-navy/70 mt-3 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              );
            })}
            <div className="rounded-xl overflow-hidden bg-mce-navy text-white p-5 flex flex-col justify-between">
              <div>
                <h4 className="font-black text-[15px] leading-tight">UNE PRÉSENCE INTERNATIONALE,<br />UN ENGAGEMENT LOCAL.</h4>
                <p className="text-[12.5px] text-white/80 mt-3 leading-relaxed">France · Sénégal · Maroc<br />Afrique de l’Ouest · Diaspora</p>
              </div>
              <Globe className="w-24 h-24 text-white/10 self-end" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
