import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, FileSpreadsheet, Smartphone, ShoppingCart, Cloud, ShieldCheck,
  Ruler, TrendingUp, Puzzle, Target,
  ClipboardList, PenTool, Code2, Rocket, LineChart,
  ArrowRight, CheckCircle2, Shield, Server, Zap, Calendar, FileText, Globe, Clock,
} from 'lucide-react';
import { IMG, DIGITAL_EXPERTISES, DIGITAL_BENEFITS, DIGITAL_PROCESS, HOSTING_OFFERS, TECHS, TECH_PARTNERS } from '../mock';

const ICONS = { Monitor, FileSpreadsheet, Smartphone, ShoppingCart, Cloud, ShieldCheck, Ruler, TrendingUp, Puzzle, Target, ClipboardList, PenTool, Code2, Rocket, LineChart };

const STEP_COLORS = { teal: 'bg-mce-teal', purple: 'bg-purple-500', blue: 'bg-blue-500', orange: 'bg-orange-500' };
const OFFER_COLORS = {
  teal:   { chip: 'text-mce-teal',   btn: 'bg-mce-teal hover:bg-mce-teal/90' },
  purple: { chip: 'text-purple-600', btn: 'bg-purple-500 hover:bg-purple-600' },
  blue:   { chip: 'text-blue-600',   btn: 'bg-blue-500 hover:bg-blue-600' },
  orange: { chip: 'text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' },
};

export default function SolutionsDigitales() {
  return (
    <div className="pt-[72px]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: '#050f22' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/y0abfufz_image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,15,34,0.65) 0%, rgba(5,15,34,0.55) 50%, rgba(5,15,34,0.75) 100%)' }} />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-mce-teal/15 border border-mce-teal/60 text-mce-teal text-[11.5px] font-bold tracking-[0.25em]">
            SOLUTIONS DIGITALES
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.05]">
            Des solutions tech<br />pour des entreprises <span className="text-mce-teal">performantes.</span>
          </h1>
          <p className="mt-6 text-white/85 text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            SaaS, logiciels métiers, applications, plateformes et sites web sur mesure : MCE conçoit des outils digitaux fiables, sécurisés et évolutifs pour accélérer votre croissance en France, au Sénégal, au Maroc et partout à l&rsquo;international.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-4xl w-full">
            {[
              { icon: Shield,       label: 'SÉCURISÉ\n& FIABLE',      sub: 'Vos données protégées' },
              { icon: Zap,          label: 'PERFORMANT\n& ÉVOLUTIF',  sub: 'Grandit avec vous' },
              { icon: Globe,        label: 'DISPONIBLE\nPARTOUT',     sub: 'France · Sénégal · Maroc' },
              { icon: CheckCircle2, label: 'ACCOMPAGNEMENT\nCOMPLET', sub: 'De A à Z' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <f.icon className="w-7 h-7 text-mce-teal" />
                <p className="text-[12px] font-bold mt-2 leading-tight whitespace-pre-line">{f.label}</p>
                <p className="text-[11px] text-white/70 mt-1 leading-tight">{f.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10 justify-center">
            <button className="btn-primary">
              DÉCOUVRIR NOS SOLUTIONS <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="btn-outline-light">
              <FileText className="w-4 h-4" />DEMANDER UN DEVIS
            </Link>
          </div>
        </div>
      </section>

      {/* ============ NOS EXPERTISES DIGITALES ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-3 gap-4">
            <div>
              <h2 className="text-3xl md:text-[32px] font-black text-mce-navy">
                NOS <span className="text-mce-teal underline decoration-4 underline-offset-4">EXPERTISES</span> DIGITALES
              </h2>
              <p className="text-mce-navy/60 mt-2 text-[13.5px]">
                Des solutions sur mesure pour répondre à vos enjeux métiers
              </p>
            </div>
            <a href="#" className="text-mce-teal font-semibold text-[13px] inline-flex items-center gap-1 hover:gap-2 transition-all">
              VOIR TOUS NOS SERVICES <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
            {DIGITAL_EXPERTISES.map((e, i) => {
              const Ico = ICONS[e.icon];
              return (
                <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 card-hover">
                  <div className="w-14 h-14 rounded-xl bg-mce-teal/10 flex items-center justify-center mb-3">
                    <Ico className="w-7 h-7 text-mce-teal" />
                  </div>
                  <h3 className="font-bold text-[14px] text-mce-teal leading-tight">{e.title}</h3>
                  <p className="text-[12px] text-mce-navy/70 mt-2 leading-relaxed">{e.desc}</p>
                  <a href="#" className="text-[12px] font-semibold text-mce-teal inline-flex items-center gap-1 mt-3 hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DES SOLUTIONS PENSÉES POUR VOTRE SUCCÈS (dark) ============ */}
      <section className="relative py-16 text-white overflow-hidden" style={{ backgroundColor: '#0a1e3a' }}>
        <div className="absolute inset-0 opacity-10 world-dots-bg" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-[26px] font-black text-white mb-10 text-center">
            DES SOLUTIONS PENSÉES POUR VOTRE <span className="text-mce-teal">SUCCÈS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {DIGITAL_BENEFITS.map((b, i) => {
              const Ico = ICONS[b.icon];
              return (
                <div key={i}>
                  <div className="w-14 h-14 rounded-xl bg-mce-teal/15 flex items-center justify-center mb-3">
                    <Ico className="w-6 h-6 text-mce-teal" />
                  </div>
                  <h4 className="font-bold text-[15px]">{b.title}</h4>
                  <p className="text-[12.5px] text-white/70 mt-2 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ NOTRE PROCESSUS DE RÉALISATION ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-12">NOTRE PROCESSUS DE RÉALISATION</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 border-t-2 border-dashed border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
              {DIGITAL_PROCESS.map((p) => {
                const Ico = ICONS[p.icon];
                return (
                  <div key={p.step} className="text-center relative bg-white z-10">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-mce-teal font-black text-lg">{p.step}</span>
                      <div className={`w-14 h-14 rounded-full ${STEP_COLORS[p.color] || 'bg-mce-teal'} flex items-center justify-center shadow-lg`}>
                        <Ico className="w-6 h-6 text-white" />
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

      {/* ============ NOS OFFRES D'HÉBERGEMENT ============ */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-10">NOS OFFRES D&rsquo;HÉBERGEMENT & SERVICES ASSOCIÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {HOSTING_OFFERS.map((o) => {
              const c = OFFER_COLORS[o.color];
              return (
                <div key={o.name} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 card-hover flex flex-col">
                  <h4 className={`font-black text-[15px] ${c.chip} text-center`}>{o.name}</h4>
                  <p className="text-[11px] text-mce-navy/60 mt-1 text-center">{o.tagline}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {o.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[12.5px] text-mce-navy/80">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${c.chip}`} />{it}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-5 py-2.5 rounded-md text-white text-[12.5px] font-semibold ${c.btn} transition-colors`}>Sur devis</button>
                </div>
              );
            })}
            <div className="rounded-xl bg-mce-navy text-white p-5 relative overflow-hidden">
              <Server className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
              <h4 className="font-black text-[15px]">Vos données sont précieuses.</h4>
              <p className="text-[12.5px] text-white/80 mt-3 leading-relaxed">
                Nous garantissons sécurité, confidentialité et conformité aux standards internationaux.
              </p>
              <ShieldCheck className="w-16 h-16 text-mce-teal mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGIES MARQUEE ============ */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-[11px] tracking-[0.35em] font-bold text-mce-navy">TECHNOLOGIES MAÎTRISÉES</p>
            <p className="text-[11px] tracking-[0.35em] font-bold text-mce-navy/70">PARTENAIRES TECHNOLOGIQUES</p>
          </div>
        </div>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {(() => {
              const items = [
                { name: 'React',    color: '#61dafb' },
                { name: 'Next.js',  color: '#0a1e3a' },
                { name: 'Node.js',  color: '#3c873a' },
                { name: 'Laravel',  color: '#ff2d20' },
                { name: 'Python',   color: '#3776ab' },
                { name: 'Flutter',  color: '#02569b' },
                { name: 'AWS',      color: '#ff9900' },
                { name: 'Supabase', color: '#3ecf8e' },
                { name: 'Docker',   color: '#2496ed' },
                { name: 'Odoo',     color: '#875a7b' },
                { name: 'OVHcloud', color: '#123f6d' },
                { name: 'Cloudflare', color: '#f38020' },
                { name: 'Stripe',   color: '#635bff' },
              ];
              const doubled = [...items, ...items];
              return doubled.map((t, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 px-2">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                    <Code2 className="w-5 h-5" style={{ color: t.color }} />
                  </div>
                  <span className="text-[16px] font-bold" style={{ color: t.color }}>{t.name}</span>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ============ Un projet digital ? Parlons-en. ============ */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(10,30,58,0.9) 0%, rgba(10,30,58,0.9) 100%), url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=60") center/cover',
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-black leading-tight">
              Un projet digital ?<br />Parlons-en.
            </h3>
            <p className="text-white/70 text-[13.5px] mt-3 leading-relaxed">
              Nous vous accompagnons de l&rsquo;idée à la mise en production avec des solutions fiables, innovantes et adaptées à votre marché.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            <Feature icon={Clock}    label="Réponse rapide"       sub="sous 24h" />
            <Feature icon={FileText} label="Devis gratuit &"       sub="personnalisé" />
            <Feature icon={Rocket}   label="Accompagnement"       sub="de A à Z" />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-3">
            <button className="btn-gold text-[12.5px]">
              <Calendar className="w-4 h-4" />PRENDRE RENDEZ-VOUS (Calendly)
            </button>
            <button className="btn-outline-light text-[12.5px]">
              <FileText className="w-4 h-4" />DEMANDER UN DEVIS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, label, sub }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-7 h-7 text-mce-gold shrink-0" />
      <div className="text-[13px] leading-tight">
        <span className="font-bold">{label}</span>
        <br />
        <span className="text-white/70">{sub}</span>
      </div>
    </div>
  );
}
