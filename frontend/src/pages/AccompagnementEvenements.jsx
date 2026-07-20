import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Rocket, TrendingUp, ArrowRight, CheckCircle2, Briefcase, Globe, Calendar, FileText, MessageCircle, Star } from 'lucide-react';
import { IMG, EVENT_DOMAINS } from '../mock';
import CTASection from '../components/CTASection';

const COLOR = {
  navy:   { badge: 'bg-mce-navy', text: 'text-mce-navy', chip: 'text-mce-navy border-mce-navy/30', btn: 'bg-mce-navy hover:bg-mce-navy-3' },
  gold:   { badge: 'bg-amber-500', text: 'text-amber-600', chip: 'text-amber-600 border-amber-400', btn: 'bg-amber-500 hover:bg-amber-600' },
  purple: { badge: 'bg-purple-500', text: 'text-purple-600', chip: 'text-purple-600 border-purple-400', btn: 'bg-purple-500 hover:bg-purple-600' },
};

export default function AccompagnementEvenements() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden hero-navy-gradient text-white">
        <div className="absolute inset-0 opacity-35" style={{ backgroundImage: `url('${IMG.heroEvents}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05]">
              ACCOMPAGNER. CONNECTER.<br />
              <span className="text-mce-gold">INSPIRER. IMPACTER.</span>
            </h1>
            <p className="mt-6 text-white/85 text-[14px] max-w-2xl leading-relaxed">
              De la stratégie à la mise en œuvre, en passant par vos événements, nous créons des expériences qui transforment les idées en opportunités.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-3xl">
              {[
                { icon: Target, label: 'Vision claire', sub: 'Des stratégies adaptées à vos ambitions' },
                { icon: Users, label: 'Réseaux puissants', sub: 'Connecter les bonnes personnes' },
                { icon: Rocket, label: 'Exécution parfaite', sub: 'Une organisation sans faille' },
                { icon: TrendingUp, label: 'Impact durable', sub: 'Des résultats concrets' },
              ].map((f, i) => (
                <div key={i}>
                  <f.icon className="w-7 h-7 text-mce-gold" />
                  <p className="text-[12.5px] font-bold mt-2">{f.label}</p>
                  <p className="text-[11.5px] text-white/70 mt-1 leading-tight">{f.sub}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <button className="btn-gold">DÉCOUVRIR NOS SERVICES <ArrowRight className="w-4 h-4" /></button>
              <Link to="/contact" className="btn-outline-light"><Calendar className="w-4 h-4" />PRENDRE RENDEZ-VOUS (Calendly)</Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white text-mce-navy rounded-xl p-5 shadow-xl">
              <p className="text-4xl text-mce-gold leading-none">“</p>
              <p className="text-[13px] leading-relaxed -mt-2">Nous ne faisons pas que des événements. Nous créons des rencontres qui changent tout.</p>
              <p className="font-bold text-mce-gold mt-3 text-[13px]">MCE, votre partenaire<br />de croissance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10 text-center">
              <p className="font-bold text-white text-[13px] tracking-widest">FRANCE · SÉNÉGAL · MAROC</p>
              <Globe className="w-20 h-20 mx-auto my-3 text-white/40" />
              <p className="text-[12px] text-white/70">Une expertise internationale, ancrée localement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-gold">NOS 3 DOMAINES D’ACCOMPAGNEMENT</p>
          <h2 className="section-title mt-3 mb-12">Des solutions pour chaque étape de votre croissance</h2>
          <div className="space-y-6">
            {EVENT_DOMAINS.map((d, i) => {
              const c = COLOR[d.color];
              return (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 rounded-xl overflow-hidden">
                    <img src={IMG[d.img]} alt={d.title} className="w-full h-64 object-cover" />
                  </div>
                  <div className="lg:col-span-8 rounded-xl bg-white border border-gray-100 shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full ${c.badge} flex items-center justify-center text-white font-black shrink-0`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-black text-[18px] text-mce-navy leading-tight">{d.num}. {d.title}</h3>
                        <p className={`font-semibold text-[13.5px] ${c.text} mt-1`}>{d.subtitle}</p>
                        <p className="text-[13px] text-mce-navy/70 mt-3 leading-relaxed">{d.desc}</p>
                        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {d.items.map((it) => (<li key={it} className="flex items-start gap-2 text-[12.5px] text-mce-navy/85"><CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} />{it}</li>))}
                        </ul>
                        <button className={`mt-5 text-white text-[12px] font-bold px-4 py-2.5 rounded-md ${c.btn} transition-colors inline-flex items-center gap-2`}>{d.cta} <ArrowRight className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MCE strip */}
      <section className="py-14 bg-amber-50/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="flex gap-1 text-mce-gold mb-2">{[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 fill-current" />)}</div>
              <p className="font-black text-[16px] text-mce-navy">POURQUOI CHOISIR MCE ?<br /><span className="text-mce-gold">L’ALLIANCE DE L’EXPERTISE ET DE L’HUMAIN</span></p>
            </div>
            {[
              { title: 'Plus de 20 ans', sub: "d’expérience" },
              { title: 'Une approche sur mesure', sub: 'et orientée résultats' },
              { title: 'Un réseau solide', sub: "de partenaires et d’experts" },
              { title: 'Exigence, créativité', sub: 'et excellence' },
            ].map((r, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="font-bold text-[13px] text-mce-navy leading-tight">{r.title}</p>
                <p className="text-[12px] text-mce-navy/60 mt-1">{r.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-mce-navy text-white p-5 flex items-center justify-between flex-wrap gap-4">
            <p className="text-mce-gold text-4xl leading-none">“</p>
            <p className="text-[14px] font-semibold flex-1 min-w-[240px]">Votre succès est notre mission. Votre impact est notre fierté.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
