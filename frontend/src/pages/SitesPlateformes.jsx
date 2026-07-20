import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, LayoutTemplate, Layers, ArrowRight, CheckCircle2,
  Sparkles, Compass, PenTool, Code2, Rocket, LineChart, Calendar, FileText,
  Palette, Smartphone, Zap, Search, Instagram, Megaphone,
} from 'lucide-react';

const TYPES = [
  { key: 'vitrine',    icon: Globe,          label: 'Site vitrine',            desc: 'Une présence élégante qui inspire confiance et convertit.' },
  { key: 'ecommerce',  icon: ShoppingCart,   label: 'E-commerce',              desc: 'Vendre en ligne avec fluidité, paiement local et international.' },
  { key: 'landing',    icon: LayoutTemplate, label: 'Landing page',            desc: 'Une page pensée pour une campagne, un lancement, une conversion.' },
  { key: 'plateforme', icon: Layers,         label: 'Plateforme web',          desc: 'Un espace client, un portail, un back-office – interface pro sur mesure.' },
];

export default function SitesPlateformes() {
  const [active, setActive] = useState('vitrine');
  const activeType = TYPES.find((t) => t.key === active);

  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fef3e6 0%, #fdf6f0 40%, #eefaff 100%)' }}>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.25) 0%, transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.20) 0%, transparent 60%)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-mce-teal/20 text-mce-teal text-[11px] font-bold tracking-[0.25em]">
              SOLUTIONS DIGITALES / SITES & PLATEFORMES
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05] text-mce-navy">
              Un site qui vous ressemble.<br />
              Une plateforme qui vous <span className="text-mce-teal">fait avancer.</span>
            </h1>
            <p className="mt-6 text-mce-navy/70 text-[15px] leading-relaxed max-w-2xl">
              Sites vitrines, e-commerce, landing pages, plateformes web et interfaces professionnelles. Nous concevons des expériences digitales qui reflètent votre identité et servent vos objectifs.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary"><FileText className="w-4 h-4" /> DEMANDER UNE ÉTUDE DE PROJET</Link>
              <a href="#types" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-mce-navy/25 text-mce-navy font-semibold hover:bg-white transition-colors">
                <Compass className="w-4 h-4" /> Découvrir nos formats
              </a>
            </div>
            <p className="mt-6 text-[12.5px] text-mce-navy/60 italic">Aucun tarif fixe. Chaque projet est étudié selon vos objectifs, vos fonctionnalités et vos besoins techniques.</p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              {/* Browser mockup */}
              <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden rotate-[-2deg]">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded bg-white border border-gray-200 px-2 py-0.5 text-[10.5px] text-gray-400">votremarque.com</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="h-6 w-32 bg-mce-navy rounded mb-4" />
                  <div className="h-4 w-3/4 bg-mce-navy/80 rounded mb-2" />
                  <div className="h-4 w-1/2 bg-mce-teal rounded mb-6" />
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-16 rounded bg-mce-teal/10" />
                    <div className="h-16 rounded bg-purple-500/10" />
                    <div className="h-16 rounded bg-amber-400/20" />
                  </div>
                  <div className="h-9 w-32 bg-mce-teal rounded flex items-center justify-center text-white text-[11px] font-bold">DÉCOUVRIR</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-xl border border-gray-100 p-3 rotate-[6deg] w-40">
                <Smartphone className="w-6 h-6 text-mce-teal mb-2" />
                <div className="h-2 bg-mce-navy/80 rounded mb-1" />
                <div className="h-2 bg-mce-navy/60 rounded w-2/3 mb-3" />
                <div className="h-6 bg-mce-teal rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES DE PROJETS - interactive tabs */}
      <section id="types" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-teal">CE QUE NOUS RÉALISONS</p>
          <h2 className="section-title mt-3">Un format pour chaque objectif.</h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-3">
              {TYPES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`w-full text-left rounded-xl p-4 border transition-all flex items-center gap-3 ${active === t.key ? 'border-mce-teal bg-mce-teal/5 shadow-md' : 'border-gray-100 bg-white hover:border-mce-teal/40'}`}
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${active === t.key ? 'bg-mce-teal text-white' : 'bg-gray-100 text-mce-navy'}`}>
                    <t.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-[14px] ${active === t.key ? 'text-mce-teal' : 'text-mce-navy'}`}>{t.label}</p>
                    <p className="text-[12px] text-mce-navy/60 mt-0.5">{t.desc}</p>
                  </div>
                  {active === t.key && <ArrowRight className="w-4 h-4 text-mce-teal" />}
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm p-8 h-full">
                <activeType.icon className="w-10 h-10 text-mce-teal" />
                <h3 className="text-2xl font-black text-mce-navy mt-3">{activeType.label}</h3>
                <p className="text-[14px] text-mce-navy/75 mt-2 leading-relaxed">{activeType.desc}</p>

                {active === 'vitrine' && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-6">
                    {['Design sur mesure & identité forte','SEO on-page & performance mobile','Formulaires & prise de contact','Blog & espace actualités','Multi-langue si besoin','Référencement local (Google)'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-mce-navy/85"><CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}</li>
                    ))}
                  </ul>
                )}
                {active === 'ecommerce' && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-6">
                    {['Catalogue & fiches produits','Paiement Wave, Orange Money, CB','Livraison & suivi de commande','Gestion des stocks & promos','Espace client & fidélité','Emails transactionnels automatiques'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-mce-navy/85"><CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}</li>
                    ))}
                  </ul>
                )}
                {active === 'landing' && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-6">
                    {['Focus sur une seule action','Copywriting orienté conversion','Preuves sociales & témoignages','A/B testing possible','Tracking & analytics','Déploiement rapide (2–4 semaines)'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-mce-navy/85"><CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}</li>
                    ))}
                  </ul>
                )}
                {active === 'plateforme' && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-6">
                    {['Espaces utilisateurs & rôles','Back-office administrateur','API & intégrations tierces','Sécurité & authentification','Design system réutilisable','Scalabilité pensée dès le départ'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-mce-navy/85"><CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                  <p className="text-[13px] text-mce-navy/70">Un projet en tête ? Parlons-en pour définir le périmètre idéal.</p>
                  <Link to="/contact" className="btn-primary text-[12.5px]">DEMANDER UNE ÉTUDE <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-2">DE L’IDÉE AU <span className="text-mce-teal">LANCEMENT</span></h2>
          <p className="text-center text-mce-navy/60 mb-12 text-[13.5px]">Une méthode simple, transparente, sans mauvaise surprise.</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: '01', title: 'Cadrage', desc: 'Objectifs, cibles, contenu, fonctionnalités.', icon: Compass, color: 'bg-mce-teal' },
              { n: '02', title: 'Design', desc: 'Maquettes UI et parcours utilisateur.', icon: Palette, color: 'bg-purple-500' },
              { n: '03', title: 'Développement', desc: 'Code propre, moderne, performant.', icon: Code2, color: 'bg-blue-500' },
              { n: '04', title: 'Recette & mise en ligne', desc: 'Tests, corrections, publication.', icon: Rocket, color: 'bg-orange-500' },
              { n: '05', title: 'Suivi', desc: 'Maintenance, évolutions, mesure.', icon: LineChart, color: 'bg-mce-gold' },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 text-center">
                <div className={`w-12 h-12 rounded-xl ${s.color} text-white flex items-center justify-center mx-auto shadow-md`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <p className="text-[11px] font-bold text-mce-navy/50 mt-3">ÉTAPE {s.n}</p>
                <h4 className="font-bold text-[14px] text-mce-navy mt-1">{s.title}</h4>
                <p className="text-[12px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">POURQUOI MCE</p>
            <h2 className="text-3xl md:text-[36px] font-black text-mce-navy leading-tight mt-3">Une agence qui pense produit, pas juste « site ».</h2>
            <p className="text-mce-navy/70 text-[14px] mt-4 leading-relaxed">Nous ne livrons pas un template. Nous livrons un outil digital qui sert votre business, se maintient dans le temps, et évolue avec vous.</p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Sparkles, t: 'Design distinctif', d: 'Chaque site est un projet unique, pas un modèle recyclé.' },
                { icon: Zap, t: 'Performance mesurée', d: 'Vitesse, SEO, accessibilité – mesurés et optimisés.' },
                { icon: Search, t: 'Pensé pour être trouvé', d: 'Bases SEO intégrées dès la conception.' },
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-mce-teal/10 flex items-center justify-center shrink-0"><f.icon className="w-5 h-5 text-mce-teal" /></div>
                  <div><p className="font-bold text-[14px] text-mce-navy">{f.t}</p><p className="text-[12.5px] text-mce-navy/70 mt-1">{f.d}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-mce-teal/10 via-white to-purple-500/10 p-8 border border-gray-100 shadow-sm">
              <blockquote className="text-lg md:text-xl font-semibold text-mce-navy leading-snug">
                « Un site web n’est pas une brochure. C’est un membre de votre équipe qui travaille 24/7. »
              </blockquote>
              <p className="mt-4 font-script text-2xl text-mce-teal">– L’équipe MCE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary services - discreet */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-mce-navy/60" />
              <Megaphone className="w-5 h-5 text-mce-navy/60" />
            </div>
            <p className="text-[13px] text-mce-navy/75 flex-1">
              <span className="font-semibold text-mce-navy">Besoin de compléments ?</span> Nous proposons aussi, en prestations complémentaires, un accompagnement léger sur les réseaux sociaux et campagnes publicitaires – uniquement sur devis, en soutien de votre présence digitale.
            </p>
            <Link to="/contact" className="text-mce-teal font-semibold text-[12.5px] inline-flex items-center gap-1">En parler <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mce-navy text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Racontez-nous votre projet.</h3>
            <p className="text-white/70 text-[14px] mt-2">Une étude offerte pour évaluer périmètre, durée et budget indicatif.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold text-[12.5px]"><FileText className="w-4 h-4" /> DEMANDER UNE ÉTUDE DE PROJET</Link>
            <Link to="/contact" className="btn-outline-light text-[12.5px]"><Calendar className="w-4 h-4" /> RENDEZ-VOUS</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
