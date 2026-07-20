import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSpreadsheet, XCircle, CheckCircle2, ArrowRight, Sparkles, LayoutDashboard,
  Users, Zap, Workflow, Database, LineChart, Rocket, Calendar, FileText,
  MessageCircle, ShieldCheck, RefreshCcw, Bell, ClipboardCheck, Boxes,
} from 'lucide-react';

export default function SaaSLogiciels() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ background: 'radial-gradient(1200px 500px at 80% 20%, rgba(8,145,178,0.35) 0%, transparent 60%), linear-gradient(135deg, #050f22 0%, #0a1e3a 60%, #0f2340 100%)' }}>
        <div className="absolute inset-0 opacity-30 world-dots-bg" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-[12px] text-mce-teal font-bold tracking-[0.25em]">
              <span className="h-px w-8 bg-mce-teal" /> SOLUTIONS DIGITALES / SAAS & LOGICIELS MÉTIERS
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05]">
              Vos processus méritent<br />mieux qu’un <span className="line-through decoration-mce-gold decoration-[3px]">fichier Excel</span>.<br />
              <span className="text-mce-teal">Ils méritent un vrai outil.</span>
            </h1>
            <p className="mt-6 text-white/80 text-[15px] leading-relaxed max-w-2xl">
              CRM, ERP léger, outils métiers, automatisation, tableaux de bord… MCE conçoit les logiciels et plateformes SaaS qui font gagner du temps à vos équipes.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary">
                <Calendar className="w-4 h-4" /> DISCUTER DE MON PROJET
              </Link>
              <a href="#docmanya" className="btn-outline-light">
                <Sparkles className="w-4 h-4" /> DÉCOUVRIR DOCMANYA
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Mock dashboard card */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-mce-teal/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-4 w-52 h-52 bg-mce-gold/10 rounded-full blur-3xl" />
              <div className="relative rounded-2xl bg-white/8 backdrop-blur border border-white/15 p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[11px] text-white/60">app.mce.sn</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Clients', value: '1 248', delta: '+12%' },
                    { label: 'Deals', value: '76', delta: '+8%' },
                    { label: 'CA MTD', value: '18,4M', delta: '+21%' },
                  ].map((k) => (
                    <div key={k.label} className="rounded-lg bg-white/5 p-3 border border-white/10">
                      <p className="text-[10.5px] uppercase tracking-wider text-white/60">{k.label}</p>
                      <p className="text-lg font-black mt-1">{k.value}</p>
                      <p className="text-[10px] text-mce-teal font-semibold">{k.delta}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <p className="text-[11px] text-white/60 mb-2">Pipeline commercial</p>
                  <svg viewBox="0 0 300 80" className="w-full h-16">
                    <polyline points="0,60 40,50 80,55 120,35 160,40 200,20 240,25 300,10" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
                    <polyline points="0,60 40,50 80,55 120,35 160,40 200,20 240,25 300,10 300,80 0,80" fill="rgba(34,211,238,0.15)" />
                  </svg>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-white/70">
                  <ClipboardCheck className="w-4 h-4 text-mce-teal" /> 12 tâches automatisées aujourd’hui
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-teal">VOUS VOUS RECONNAISSEZ ?</p>
          <h2 className="section-title mt-3">Les signes que votre entreprise a besoin d’un outil sur mesure.</h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Vous gérez encore vos clients sur plusieurs fichiers Excel qui se contredisent.',
              'Vos commerciaux perdent du temps à chercher les bonnes informations.',
              'Vous n’avez pas de vraie visibilité sur vos ventes ou vos stocks en temps réel.',
              'Vos équipes ressaisissent les mêmes données dans 3 outils différents.',
              'Un logiciel du marché ne colle pas exactement à votre métier.',
              'Vos tableaux de bord sont bricolés et personne ne les consulte.',
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-gray-100 shadow-sm bg-white p-5 flex items-start gap-3 card-hover">
                <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                <p className="text-[13.5px] text-mce-navy/85 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-mce-teal/10 border-l-4 border-mce-teal p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <Sparkles className="w-7 h-7 text-mce-teal shrink-0" />
            <div className="flex-1">
              <p className="text-[15px] font-bold text-mce-navy">MCE peut concevoir un CRM ou un logiciel métier adapté à votre organisation.</p>
              <p className="text-[13px] text-mce-navy/70 mt-1">Un outil pensé pour vos processus, pas l’inverse.</p>
            </div>
            <Link to="/contact" className="btn-primary">DISCUTER DE MON PROJET <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* NOS EXPERTISES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-2">CE QUE NOUS <span className="text-mce-teal">CONSTRUISONS</span> POUR VOUS</h2>
          <p className="text-center text-mce-navy/60 mb-12 text-[13.5px]">Des solutions logicielles taillées pour votre métier</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'CRM sur mesure', desc: 'Gérer clients, prospects, deals, relances et suivi commercial – sans usine à gaz.', color: 'text-mce-teal', bg: 'bg-mce-teal/10' },
              { icon: Boxes, title: 'ERP léger', desc: 'Ventes, achats, stocks, factures, trésorerie – un cockpit unique pour piloter.', color: 'text-purple-600', bg: 'bg-purple-500/10' },
              { icon: LayoutDashboard, title: 'Tableaux de bord', desc: 'Vos KPI en temps réel. Fini les reportings du lundi matin qui prennent 3 jours.', color: 'text-blue-600', bg: 'bg-blue-500/10' },
              { icon: Workflow, title: 'Automatisation', desc: 'Envois auto, workflows, notifications, relances, calculs… vos tâches répétitives disparaissent.', color: 'text-orange-600', bg: 'bg-orange-500/10' },
              { icon: Database, title: 'Outils internes', desc: 'Une base propre, unique, sécurisée – exit les fichiers Excel qui se chaînent.', color: 'text-mce-gold', bg: 'bg-amber-400/15' },
              { icon: FileSpreadsheet, title: 'Applications métier', desc: 'Un logiciel conçu pour votre secteur : santé, immobilier, logistique, éducation…', color: 'text-rose-600', bg: 'bg-rose-500/10' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 card-hover">
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className={`font-bold text-[15px] ${s.color}`}>{s.title}</h3>
                <p className="text-[13px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCMANYA feature */}
      <section id="docmanya" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-mce-navy via-mce-navy-2 to-mce-navy-3 text-white relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-mce-teal/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-mce-gold/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mce-teal/15 border border-mce-teal/40 text-mce-teal text-[11px] font-bold tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> PLATEFORME PHARE MCE
                </div>
                <h3 className="mt-5 text-4xl md:text-[42px] font-black leading-[1.05]">DocManya</h3>
                <p className="text-mce-teal font-semibold text-[15px] mt-2">La solution qui digitalise la gestion documentaire de vos équipes.</p>
                <p className="mt-5 text-white/80 text-[14px] leading-relaxed max-w-2xl">
                  Centralisation, workflows d’approbation, signatures, traçabilité, archivage légal… DocManya est la première plateforme SaaS de la gamme MCE. Conçue au Sénégal, pensée pour l’Afrique.
                </p>
                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {['Gestion documentaire centralisée','Workflows d’approbation','Signature électronique','Recherche full-text','Journal d’audit complet','Multi-utilisateurs & rôles'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px]">
                      <CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/contact" className="btn-gold text-[12.5px]">DEMANDER UNE DÉMO <ArrowRight className="w-3.5 h-3.5" /></Link>
                  <Link to="/contact" className="btn-outline-light text-[12.5px]">EN SAVOIR PLUS</Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-md bg-mce-teal flex items-center justify-center font-black text-mce-navy">D</div>
                    <div>
                      <p className="text-[13px] font-bold">DocManya</p>
                      <p className="text-[10px] text-white/60">v2.4 · Enterprise</p>
                    </div>
                  </div>
                  {[
                    { label: 'Contrat commercial – KEBA', status: 'Signé', color: 'text-mce-teal' },
                    { label: 'Bon de commande #4821', status: 'En attente', color: 'text-amber-400' },
                    { label: 'Facture janv. 2026', status: 'Approuvé', color: 'text-mce-teal' },
                    { label: 'NDA Fournisseur A', status: 'Brouillon', color: 'text-white/60' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between border-t border-white/10 py-2.5 text-[12.5px]">
                      <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-white/60" /> {d.label}</span>
                      <span className={`font-semibold ${d.color}`}>{d.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-navy/60">AUTRES PLATEFORMES MCE EN COURS DE DÉVELOPPEMENT</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {[
                { name: 'MCE Talents', desc: 'ATS & pipeline recrutement' },
                { name: 'MCE Sales', desc: 'CRM commercial africain' },
                { name: 'MCE Learn', desc: 'LMS formations certifiantes' },
              ].map((p) => (
                <div key={p.name} className="px-4 py-3 rounded-lg border border-dashed border-mce-teal/50 bg-mce-teal/5">
                  <p className="text-[13px] font-bold text-mce-navy">{p.name}</p>
                  <p className="text-[11.5px] text-mce-navy/60">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="section-title mb-2">NOTRE APPROCHE</h2>
          <p className="text-center text-mce-navy/60 mb-12 text-[13.5px]">De l’idée à l’outil que vos équipes utilisent tous les jours.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Immersion métier', desc: 'On écoute vos équipes, on cartographie vos processus réels.', icon: Users },
              { n: '02', title: 'Prototype rapide', desc: 'On valide l’expérience avec des maquettes cliquables avant de coder.', icon: Zap },
              { n: '03', title: 'Développement itératif', desc: 'Livraisons régulières, feedback continu, ajustements en direct.', icon: Rocket },
              { n: '04', title: 'Adoption & évolution', desc: 'Formation, support, et évolutions au rythme de votre croissance.', icon: LineChart },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 relative">
                <span className="absolute top-4 right-4 text-4xl font-black text-mce-teal/15 leading-none">{s.n}</span>
                <s.icon className="w-8 h-8 text-mce-teal" />
                <h4 className="font-bold text-[15px] mt-3 text-mce-navy">{s.title}</h4>
                <p className="text-[12.5px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(90deg, #0a1e3a 0%, #0f2340 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Prêt à arrêter les fichiers Excel ?</h3>
            <p className="text-white/70 text-[14px] mt-2">Parlons de votre métier. On trouvera la bonne solution.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary"><Calendar className="w-4 h-4" /> RENDEZ-VOUS DÉCOUVERTE</Link>
            <Link to="/contact" className="btn-outline-light"><MessageCircle className="w-4 h-4" /> WHATSAPP</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
