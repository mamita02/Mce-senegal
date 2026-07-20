import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Gem, Users, ShieldCheck, Heart, Puzzle, BarChart3, Globe, ArrowRight, Star, Calendar, FileText, MessageCircle } from 'lucide-react';
import { IMG, VALUES, REASONS, PARTNERS } from '../mock';
import CTASection from '../components/CTASection';

const ICONS = { Target, Eye, Gem, Users, ShieldCheck, Heart, Puzzle, BarChart3, Globe };

export default function MCEPartenaires() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden hero-navy-gradient text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url('${IMG.heroPartners}')`, backgroundSize: 'cover', backgroundPosition: 'right center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05]">
              QUI SOMMES-NOUS ?<br />
              UNE VISION. UNE ÉQUIPE.<br />
              <span className="text-mce-gold">UN IMPACT.</span>
            </h1>
            <p className="mt-6 text-white/85 text-[14.5px] max-w-2xl leading-relaxed">
              MCE accompagne depuis plus de 20 ans les entreprises, organisations et talents dans leur transformation et leur croissance. Notre force : l’alliance de l’expertise, de l’humain et de l’innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-3xl">
              {VALUES.map((v, i) => {
                const Ico = ICONS[v.icon];
                return (
                  <div key={i}>
                    <Ico className="w-8 h-8 text-mce-gold" />
                    <p className="text-[12.5px] font-bold mt-2">{v.title}</p>
                    <p className="text-[11.5px] text-white/70 mt-1 leading-tight">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-mce-navy-3/60 backdrop-blur rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-3"><Globe className="w-6 h-6 text-mce-gold" /><div><p className="text-2xl font-black">3 PAYS</p><p className="text-[12px] text-white/70">France · Sénégal · Maroc</p></div></div>
            </div>
            <div className="bg-mce-navy-3/60 backdrop-blur rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-3"><Users className="w-6 h-6 text-mce-gold" /><div><p className="text-2xl font-black">+1000</p><p className="text-[12px] text-white/70">Talents formés, recrutés et accompagnés</p></div></div>
            </div>
            <div className="bg-mce-navy-3/60 backdrop-blur rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-3"><Star className="w-6 h-6 text-mce-gold" /><div><p className="text-2xl font-black">+200</p><p className="text-[12px] text-white/70">Projets menés avec succès</p></div></div>
            </div>
          </div>
        </div>

        {/* Founder quote card centered */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 -mt-6">
          <div className="bg-white text-mce-navy rounded-2xl p-6 shadow-2xl max-w-lg">
            <p className="text-5xl text-mce-gold leading-none">“</p>
            <p className="text-[14px] leading-relaxed -mt-2">Donner aux organisations les moyens d’agir aujourd’hui pour construire leur succès de demain.</p>
            <p className="font-script text-3xl text-mce-navy mt-4">Mounia Amane</p>
            <p className="text-[12px] text-mce-navy/60">Fondatrice & Directrice Générale<br />MCE GROUP</p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-12">NOS <span className="text-mce-gold">PARTENAIRES</span> CLÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'KEBA CONSULTING', desc: 'Conseil en management, leadership et transformation organisationnelle.', img: IMG.team2, color: 'blue' },
              { name: 'WOMEN BUILD AFRICA', desc: "Promouvoir l’entrepreneuriat féminin, l’inclusion et l’impact social à travers des actions concrètes.", img: IMG.women1, color: 'red' },
              { name: 'SPARCK PROJECT', desc: 'Innovation, digital et développement de projets à fort impact pour un avenir durable.', img: IMG.coding, color: 'teal' },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden card-hover">
                <div className="h-40 overflow-hidden"><img src={p.img} alt={p.name} className="w-full h-full object-cover" /></div>
                <div className="p-5">
                  <h3 className="font-black text-[16px] text-mce-navy">{p.name}</h3>
                  <p className="text-[13px] text-mce-navy/70 mt-2 leading-relaxed">{p.desc}</p>
                  <button className="mt-4 text-mce-teal font-bold text-[12.5px] inline-flex items-center gap-2 hover:gap-3 transition-all">DÉCOUVRIR LE PARTENARIAT <ArrowRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem strip */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h3 className="text-center section-title text-lg mb-8">UN <span className="text-mce-teal">ÉCOSYSTÈME</span> DE PARTENAIRES ENGAGÉS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {PARTNERS.map((p) => (
              <div key={p.name} className="text-center opacity-80 hover:opacity-100 transition-opacity p-4 rounded-lg">
                <div className="text-[13px] font-black tracking-widest text-mce-navy">{p.name}</div>
                <p className="text-[11px] text-mce-navy/60 mt-2 whitespace-pre-line">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="font-black text-[15px] text-mce-navy leading-tight">POURQUOI CHOISIR MCE ?<br /><span className="text-mce-gold">PLUS QU’UN PRESTATAIRE, UN VRAI PARTENAIRE.</span></p>
            </div>
            {REASONS.map((r, i) => {
              const Ico = ICONS[r.icon];
              return (
                <div key={i} className="text-center md:text-left">
                  <Ico className="w-7 h-7 text-mce-gold mb-2" />
                  <p className="font-bold text-[13px] text-mce-navy leading-tight">{r.title}</p>
                  <p className="text-[11.5px] text-mce-navy/60 mt-1 leading-tight">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="ENSEMBLE, CRÉONS L’AVENIR" subtitle="DE VOTRE ORGANISATION." />
    </div>
  );
}
