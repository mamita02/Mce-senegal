import React from 'react';
import { Link } from 'react-router-dom';
import { UserSearch, Users, GraduationCap, Trophy, MessagesSquare, HeartHandshake, ArrowRight, CheckCircle2, Star, Calendar, FileText, Sparkles } from 'lucide-react';
import { IMG, RH_SERVICES, RH_PROGRAMS } from '../mock';
import CTASection from '../components/CTASection';

const ICONS = { UserSearch, Users, GraduationCap, Trophy, MessagesSquare, HeartHandshake };
const SVC_COLORS = {
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', accent: 'bg-purple-500' },
  blue:   { bg: 'bg-blue-500/10',   text: 'text-blue-600',   accent: 'bg-blue-500' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', accent: 'bg-orange-500' },
  red:    { bg: 'bg-rose-500/10',   text: 'text-rose-600',   accent: 'bg-rose-500' },
  teal:   { bg: 'bg-mce-teal/10',   text: 'text-mce-teal',   accent: 'bg-mce-teal' },
  gold:   { bg: 'bg-amber-400/15',  text: 'text-amber-600',  accent: 'bg-amber-500' },
};
const PGM_COLORS = {
  purple: { bg: 'bg-purple-500', ring: 'ring-purple-500' },
  orange: { bg: 'bg-orange-500', ring: 'ring-orange-500' },
  gold: { bg: 'bg-amber-500', ring: 'ring-amber-500' },
};

export default function TalentsRH() {
  return (
    <div className="pt-[72px]">
      <section className="relative overflow-hidden hero-navy-gradient text-white">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url('${IMG.heroTalents}')`, backgroundSize: 'cover', backgroundPosition: 'right center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[12px] tracking-[0.3em] font-bold text-purple-300">TALENTS & RH</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.05] max-w-4xl">
            Révélez le potentiel<br />de vos <span className="text-purple-400">équipes</span> et accélérez<br />leur développement.
          </h1>
          <p className="mt-6 text-white/80 text-[14px] max-w-2xl leading-relaxed">
            Recrutement, placement, formations, coaching et accompagnement RH : MCE développe et connecte les talents dont votre entreprise a besoin.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button className="btn-primary bg-purple-500 hover:bg-purple-600">DÉVELOPPER VOS TALENTS <ArrowRight className="w-4 h-4" /></button>
            <Link to="/contact" className="btn-outline-light"><Calendar className="w-4 h-4" />PRENDRE RENDEZ-VOUS</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-2">NOS <span className="text-purple-600">SERVICES</span> RH</h2>
          <p className="text-center text-mce-navy/60 mb-12">Des solutions complètes pour attirer, développer et fidéliser les talents</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RH_SERVICES.map((s, i) => {
              const c = SVC_COLORS[s.color];
              const Ico = ICONS[s.icon];
              return (
                <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 card-hover">
                  <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-4`}><Ico className={`w-7 h-7 ${c.text}`} /></div>
                  <h3 className={`font-bold text-[15px] ${c.text}`}>{s.title}</h3>
                  <p className="text-[13px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
                  <a href="#" className={`text-[12.5px] font-semibold ${c.text} inline-flex items-center gap-1 mt-4`}>En savoir plus <ArrowRight className="w-3.5 h-3.5" /></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-10">NOS <span className="text-mce-teal">PROGRAMMES</span> PHARES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RH_PROGRAMS.map((p, i) => {
              const c = PGM_COLORS[p.color];
              return (
                <div key={i} className={`rounded-2xl p-6 bg-white shadow-md ring-1 ${c.ring} ring-opacity-30 card-hover relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${c.bg}`} />
                  <Sparkles className={`w-7 h-7 ${c.bg.replace('bg-','text-')}`} />
                  <h3 className="font-black text-[18px] text-mce-navy mt-3">{p.title}</h3>
                  <p className="text-[13px] text-mce-navy/70 mt-3 leading-relaxed">{p.desc}</p>
                  <button className={`mt-6 text-white text-[12px] font-bold px-4 py-2.5 rounded-md ${c.bg} hover:opacity-90 transition-opacity inline-flex items-center gap-2`}>DÉCOUVRIR <ArrowRight className="w-3.5 h-3.5" /></button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-10">ILS TÉMOIGNENT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Aminata Diop', role: 'DRH – Startup Tech', text: 'MCE nous a aidés à recruter 12 profils tech en 3 mois. Une véritable extension de nos équipes RH.', img: IMG.team1 },
              { name: 'Cheikh Ndiaye', role: 'CEO – Cabinet Conseil', text: 'La formation leadership de MCE Academy a transformé notre culture managériale.', img: IMG.team2 },
              { name: 'Fatou Ba', role: 'Fondatrice – E-commerce', text: 'Le coaching individuel m’a permis de structurer ma vision et d’accélérer ma croissance.', img: IMG.women2 },
            ].map((t, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 text-mce-gold mb-3">{[...Array(5)].map((_,j)=><Star key={j} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-[13.5px] text-mce-navy/80 leading-relaxed">“{t.text}”</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[14px] text-mce-navy">{t.name}</p>
                    <p className="text-[12px] text-mce-navy/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
