import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, FileSpreadsheet, Smartphone, ShoppingCart, Cloud, ShieldCheck, Ruler, TrendingUp, Puzzle, Target, ClipboardList, PenTool, Code2, Rocket, LineChart, ArrowRight, CheckCircle2, Shield, Server, Zap, Calendar, FileText, Globe } from 'lucide-react';
import { IMG, DIGITAL_EXPERTISES, DIGITAL_BENEFITS, DIGITAL_PROCESS, HOSTING_OFFERS, TECHS, TECH_PARTNERS } from '../mock';
import CTASection from '../components/CTASection';

const ICONS = { Monitor, FileSpreadsheet, Smartphone, ShoppingCart, Cloud, ShieldCheck, Ruler, TrendingUp, Puzzle, Target, ClipboardList, PenTool, Code2, Rocket, LineChart };

const STEP_COLORS = {
  teal: 'bg-mce-teal', purple: 'bg-purple-500', blue: 'bg-blue-500', orange: 'bg-orange-500'
};
const OFFER_COLORS = {
  teal: { chip: 'text-mce-teal', btn: 'bg-mce-teal hover:bg-mce-teal/90' },
  purple: { chip: 'text-purple-600', btn: 'bg-purple-500 hover:bg-purple-600' },
  blue: { chip: 'text-blue-600', btn: 'bg-blue-500 hover:bg-blue-600' },
  orange: { chip: 'text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' },
};

export default function SolutionsDigitales() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden hero-teal-gradient text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url('${IMG.heroDigital}')`, backgroundSize: 'cover', backgroundPosition: 'right center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">SOLUTIONS DIGITALES</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.05]">
              Des solutions tech<br />pour des entreprises<br />performantes.
            </h1>
            <p className="mt-6 text-white/80 text-[14px] leading-relaxed max-w-2xl">
              SaaS, logiciels métiers, applications, plateformes et sites web sur mesure : MCE conçoit des outils digitaux fiables, sécurisés et évolutifs pour accélérer votre croissance en France, au Sénégal, au Maroc et partout à l’international.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Shield, label: 'SÉCURISÉ & FIABLE', sub: 'Vos données protégées' },
                { icon: Zap, label: 'PERFORMANT & ÉVOLUTIF', sub: 'Des solutions qui grandissent avec vous' },
                { icon: Globe, label: 'DISPONIBLE PARTOUT', sub: 'France · Sénégal · Maroc' },
                { icon: CheckCircle2, label: 'ACCOMPAGNEMENT COMPLET', sub: 'De la stratégie à la mise en production' },
              ].map((f, i) => (
                <div key={i}>
                  <f.icon className="w-7 h-7 text-mce-teal" />
                  <p className="text-[12px] font-bold mt-2 leading-tight">{f.label}</p>
                  <p className="text-[11px] text-white/70 mt-1">{f.sub}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <button className="btn-primary">DÉCOUVRIR NOS SOLUTIONS <ArrowRight className="w-4 h-4" /></button>
              <Link to="/contact" className="btn-outline-light"><FileText className="w-4 h-4" />DEMANDER UN DEVIS</Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-mce-navy-3/40 backdrop-blur border border-white/10 rounded-2xl p-5">
              <p className="text-[11px] tracking-[0.3em] font-bold text-white/70 mb-3">UNE PRÉSENCE<br />INTERNATIONALE</p>
              <div className="space-y-2">
                {['SÉNÉGAL – Dakar','FRANCE – Paris','MAROC – Casablanca','Afrique de l’Ouest','International'].map((loc) => (
                  <div key={loc} className="flex items-center gap-2 text-[13px]"><Globe className="w-4 h-4 text-mce-teal" /> {loc}</div>
                ))}
              </div>
              <p className="text-[12px] text-white/70 mt-4">Une équipe, plusieurs expertises, une vision sans frontières.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-2 flex-wrap gap-3">
            <div>
              <h2 className="text-3xl font-black text-mce-navy text-center md:text-left w-full">NOS <span className="text-mce-teal">EXPERTISES</span> DIGITALES</h2>
              <p className="text-mce-navy/60 mt-2 text-sm">Des solutions sur mesure pour répondre à vos enjeux métiers</p>
            </div>
            <a href="#" className="text-mce-teal font-semibold text-sm inline-flex items-center gap-1">VOIR TOUS NOS SERVICES <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
            {DIGITAL_EXPERTISES.map((e, i) => {
              const Ico = ICONS[e.icon];
              return (
                <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 card-hover">
                  <div className="w-14 h-14 rounded-xl bg-mce-teal/10 flex items-center justify-center mb-3"><Ico className="w-7 h-7 text-mce-teal" /></div>
                  <h3 className="font-bold text-[14px] text-mce-teal leading-tight">{e.title}</h3>
                  <p className="text-[12px] text-mce-navy/70 mt-2 leading-relaxed">{e.desc}</p>
                  <a href="#" className="text-[12px] font-semibold text-mce-teal inline-flex items-center gap-1 mt-3">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS DARK STRIP */}
      <section className="py-14 bg-mce-navy text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title text-white mb-10">DES SOLUTIONS PENSÉES POUR VOTRE <span className="text-mce-teal">SUCCÈS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {DIGITAL_BENEFITS.map((b, i) => {
              const Ico = ICONS[b.icon];
              return (
                <div key={i}>
                  <div className="w-14 h-14 rounded-xl bg-mce-teal/15 flex items-center justify-center mb-3"><Ico className="w-6 h-6 text-mce-teal" /></div>
                  <h4 className="font-bold text-[15px]">{b.title}</h4>
                  <p className="text-[12.5px] text-white/70 mt-2 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-12">NOTRE PROCESSUS DE RÉALISATION</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-8 right-8 h-0.5 border-t-2 border-dashed border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
              {DIGITAL_PROCESS.map((p) => {
                const Ico = ICONS[p.icon];
                return (
                  <div key={p.step} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-mce-teal font-black text-lg">{p.step}</span>
                      <div className={`w-12 h-12 rounded-full ${STEP_COLORS[p.color] || 'bg-mce-teal'} flex items-center justify-center shadow-md`}>
                        <Ico className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-[14px] text-mce-navy">{p.title}</h4>
                    <p className="text-[12px] text-mce-navy/70 mt-2 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING OFFERS */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-10">NOS OFFRES D’HÉBERGEMENT & SERVICES ASSOCIÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {HOSTING_OFFERS.map((o) => {
              const c = OFFER_COLORS[o.color];
              return (
                <div key={o.name} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 card-hover flex flex-col">
                  <h4 className={`font-black text-[15px] ${c.chip}`}>{o.name}</h4>
                  <p className="text-[11px] text-mce-navy/60 mt-1">{o.tagline}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {o.items.map((it) => (<li key={it} className="flex items-start gap-2 text-[12.5px] text-mce-navy/80"><CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${c.chip}`} />{it}</li>))}
                  </ul>
                  <button className={`mt-5 py-2.5 rounded-md text-white text-[12.5px] font-semibold ${c.btn} transition-colors`}>Sur devis</button>
                </div>
              );
            })}
            <div className="rounded-xl bg-mce-navy text-white p-5 relative overflow-hidden">
              <Server className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
              <h4 className="font-black text-[15px]">Vos données sont précieuses.</h4>
              <p className="text-[12.5px] text-white/80 mt-3 leading-relaxed">Nous garantissons sécurité, confidentialité et conformité aux standards internationaux.</p>
              <ShieldCheck className="w-16 h-16 text-mce-teal mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-8 flex-wrap">
            <div>
              <p className="text-[11px] tracking-[0.3em] font-bold text-mce-navy">TECHNOLOGIES</p>
              <p className="text-[11px] tracking-[0.3em] font-bold text-mce-navy">MAÎTRISÉES</p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {TECHS.map((t) => (<div key={t} className="text-[13px] font-semibold text-mce-navy/80 hover:text-mce-teal transition-colors">{t}</div>))}
            </div>
            <div className="ml-auto">
              <p className="text-[11px] tracking-[0.3em] font-bold text-mce-navy">PARTENAIRES</p>
              <p className="text-[11px] tracking-[0.3em] font-bold text-mce-navy">TECHNOLOGIQUES</p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {TECH_PARTNERS.map((t) => (<div key={t} className="text-[13px] font-semibold text-mce-navy/80">{t}</div>))}
              <span className="text-mce-navy/60">...</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BAND */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 hero-navy-gradient" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-black leading-tight">Un projet digital ?<br />Parlons-en.</h3>
            <p className="text-white/70 text-sm mt-3">Nous vous accompagnons de l’idée à la mise en production avec des solutions fiables, innovantes et adaptées à votre marché.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Feature icon={Clock} label="Réponse rapide" sub="sous 24h" />
            <Feature icon={FileText} label="Devis gratuit &" sub="personnalisé" />
            <Feature icon={Rocket} label="Accompagnement" sub="de A à Z" />
            <div className="flex flex-col gap-2">
              <button className="btn-gold text-[12px]"><Calendar className="w-4 h-4" />PRENDRE RENDEZ-VOUS (Calendly)</button>
              <button className="btn-outline-light text-[12px]"><FileText className="w-4 h-4" />DEMANDER UN DEVIS</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, label, sub }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-7 h-7 text-mce-gold" />
      <div className="text-[12.5px] leading-tight"><span className="font-bold">{label}</span><br /><span className="text-white/70">{sub}</span></div>
    </div>
  );
}

function Clock(props){
  return (<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>);
}
