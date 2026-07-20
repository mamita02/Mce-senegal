import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Cloud, Server, RefreshCcw, Bell, LockKeyhole, Activity,
  ArrowRight, CheckCircle2, Calendar, MessageCircle, TrendingUp, HeartPulse,
  Clock, Eye, Zap, Users,
} from 'lucide-react';

export default function HebergementSecurite() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #050f22 0%, #0a1e3a 50%, #142b4f 100%)' }}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(8,145,178,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.35) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        {/* Glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.35) 0%, transparent 60%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mce-teal/15 border border-mce-teal/40 text-mce-teal text-[11px] font-bold tracking-[0.25em]">
              SOLUTIONS DIGITALES / HÉBERGEMENT & SÉCURITÉ
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.05]">
              Livrer, c’est bien.<br />
              <span className="text-mce-teal">Accompagner dans la durée</span>, c’est mieux.
            </h1>
            <p className="mt-6 text-white/80 text-[15px] leading-relaxed max-w-2xl">
              Hébergement performant, sauvegardes automatiques, sécurité avancée, mises à jour, monitoring et support technique. MCE reste à vos côtés bien au-delà de la mise en ligne.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="btn-primary"><Calendar className="w-4 h-4" /> ÉVALUER MON INFRASTRUCTURE</Link>
              <a href="#offres" className="btn-outline-light">VOIR LES SERVICES <ArrowRight className="w-4 h-4" /></a>
            </div>

            {/* Live status strip */}
            <div className="mt-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur px-5 py-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mce-teal opacity-70"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mce-teal"></span>
                </span>
                <span className="text-[12px] text-white/85 font-semibold">Tous les services : opérationnels</span>
              </div>
              <div className="text-[12px] text-white/70 flex items-center gap-2"><Activity className="w-4 h-4 text-mce-teal" /> Uptime 99,95%</div>
              <div className="text-[12px] text-white/70 flex items-center gap-2"><Clock className="w-4 h-4 text-mce-teal" /> Support 24/7</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Shield illustration */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-mce-teal/10 blur-2xl" />
              </div>
              <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-mce-teal/20 to-white/5 border border-mce-teal/30 flex items-center justify-center">
                <ShieldCheck className="w-32 h-32 text-mce-teal" strokeWidth={1.4} />
                {[
                  { icon: Cloud,       pos: '-top-4 left-8' },
                  { icon: LockKeyhole, pos: 'top-8 -right-4' },
                  { icon: RefreshCcw,  pos: '-bottom-4 right-10' },
                  { icon: Bell,        pos: 'bottom-10 -left-4' },
                ].map((n, i) => (
                  <div key={i} className={`absolute ${n.pos} w-12 h-12 rounded-xl bg-white shadow-xl flex items-center justify-center`}>
                    <n.icon className="w-5 h-5 text-mce-navy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Activity,   value: '99,95%',   label: 'Uptime garanti' },
            { icon: RefreshCcw, value: '24/7',     label: 'Sauvegardes' },
            { icon: HeartPulse, value: '< 30 min', label: 'Temps de réaction' },
            { icon: Users,      value: '20+',      label: 'Années d’expérience' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-mce-teal/10 flex items-center justify-center"><s.icon className="w-5 h-5 text-mce-teal" /></div>
              <div>
                <p className="text-lg font-black text-mce-navy leading-none">{s.value}</p>
                <p className="text-[11.5px] text-mce-navy/60 mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="offres" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-teal">CE QUE COUVRE NOTRE ACCOMPAGNEMENT</p>
          <h2 className="section-title mt-3">Un service continu, pas un livrable ponctuel.</h2>
          <div className="h-1 w-16 bg-mce-teal mx-auto rounded-full mt-3 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Cloud,       title: 'Hébergement performant',   desc: 'Serveurs optimisés, CDN, SSD rapides, latence réduite en Afrique et à l’international.' },
              { icon: RefreshCcw,  title: 'Sauvegardes automatiques', desc: 'Snapshots quotidiens, rétention long terme, restauration en un clic si besoin.' },
              { icon: ShieldCheck, title: 'Sécurité avancée',         desc: 'SSL, WAF, protection DDoS, scans réguliers, correctifs de vulnérabilités.' },
              { icon: Bell,        title: 'Monitoring 24/7',          desc: 'Surveillance de la disponibilité, alertes en temps réel, tableau de bord dédié.' },
              { icon: LockKeyhole, title: 'Contrôle d’accès',         desc: 'Gestion fine des accès, authentification renforcée, journal d’audit.' },
              { icon: TrendingUp,  title: 'Optimisation continue',    desc: 'Analyse de performance, recommandations, mises à jour majeures planifiées.' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-mce-teal/10 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-mce-teal" /></div>
                <h3 className="font-bold text-[15px] text-mce-navy">{s.title}</h3>
                <p className="text-[13px] text-mce-navy/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[12px] tracking-[0.3em] font-bold text-mce-gold">APRÈS LA MISE EN LIGNE</p>
          <h2 className="section-title mt-3">
            Un partenaire dans la <span className="text-mce-gold">durée</span>
          </h2>
          <p className="text-center text-mce-navy/60 mt-3 text-[13.5px]">
            Voici concrètement ce que nous prenons en charge, jour après jour.
          </p>
          <div className="h-1 w-16 bg-mce-gold mx-auto rounded-full mt-4 mb-14" />

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-mce-gold/30 md:-translate-x-1/2" />

            <div className="space-y-8">
              {[
                {
                  m: 'JOUR 1',
                  title: 'Mise en ligne sécurisée',
                  desc: "Déploiement, configuration DNS, certificats SSL, activation du monitoring. Nous surveillons en direct pour intervenir immédiatement au moindre signal.",
                  icon: Zap,
                  bullets: ['Vérifications techniques complètes', 'Certificats SSL A+', 'Monitoring 24/7 activé'],
                },
                {
                  m: 'SEMAINE 1',
                  title: 'Sauvegardes validées',
                  desc: "Nous testons la première restauration pour garantir que vos données sont réellement récupérables. Pas de sauvegarde théorique — une preuve concrète.",
                  icon: RefreshCcw,
                  bullets: ['Sauvegardes quotidiennes automatiques', 'Restauration testée en conditions réelles', 'Redondance hors site'],
                },
                {
                  m: 'MOIS 1',
                  title: 'Rapport de performance',
                  desc: "Bilan détaillé : trafic, vitesse, disponibilité, sécurité. Nous ajustons la configuration pour optimiser l'expérience utilisateur.",
                  icon: Activity,
                  bullets: ['Analyse de charge & vitesse', 'Optimisation base de données', 'Recommandations personnalisées'],
                },
                {
                  m: 'MOIS 3',
                  title: 'Audit sécurité approfondi',
                  desc: "Scan complet de vulnérabilités, mise à jour des composants critiques, application des correctifs. Rapport clair remis à votre équipe.",
                  icon: ShieldCheck,
                  bullets: ['Scan de vulnérabilités', 'Mise à jour des dépendances', 'Rapport de conformité'],
                },
                {
                  m: 'EN CONTINU',
                  title: 'Support réactif & évolutions',
                  desc: "Une question, un souci ? Réponse sous 30 minutes en heures ouvrées. Un point trimestriel pour anticiper vos prochaines évolutions.",
                  icon: HeartPulse,
                  bullets: ['Support < 30 min en heures ouvrées', 'Point stratégique trimestriel', 'Évolutions planifiées'],
                },
              ].map((step, i) => (
                <div key={i} className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-6 items-start">
                  {/* Icon on the line */}
                  <div className="absolute left-0 top-0 md:static md:col-start-5 md:col-span-1 md:flex md:justify-center md:pt-2">
                    <div className="w-12 h-12 rounded-full bg-mce-gold text-white flex items-center justify-center shadow-lg ring-4 ring-gray-50 relative z-10">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-xl bg-white border border-gray-100 shadow-sm p-5 card-hover ${
                      i % 2 === 0
                        ? 'md:col-start-1 md:col-span-4 md:text-right'
                        : 'md:col-start-6 md:col-span-4'
                    }`}
                  >
                    <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-mce-gold/15 text-mce-gold text-[10.5px] font-bold tracking-[0.2em]">
                        {step.m}
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-mce-navy mt-2">{step.title}</h4>
                    <p className="text-[13px] text-mce-navy/70 mt-2 leading-relaxed">{step.desc}</p>
                    <ul className={`mt-3 space-y-1.5 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex items-center gap-2 text-[12.5px] text-mce-navy/85 ${
                            i % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-mce-gold shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary card */}
          <div className="mt-14 rounded-2xl bg-mce-navy text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-mce-gold/15 rounded-full blur-3xl" />
            <div className="w-14 h-14 rounded-xl bg-mce-gold flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="w-7 h-7 text-mce-navy" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold text-white leading-snug">
                Vous ne payez pas juste un hébergeur. Vous vous offrez une équipe technique dédiée.
              </p>
              <p className="text-[13px] text-white/70 mt-1">
                Un interlocuteur unique, des rapports clairs, des interventions rapides.
              </p>
            </div>
            <Link to="/contact" className="btn-gold text-[12.5px] shrink-0">
              <Calendar className="w-4 h-4" /> RÉSERVER UN ÉCHANGE
            </Link>
          </div>
        </div>
      </section>

      {/* SECURITY DETAIL */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">SÉCURITÉ & CONFORMITÉ</p>
            <h2 className="text-3xl md:text-[36px] font-black text-mce-navy leading-tight mt-3">Vos données sont un actif. Nous les traitons comme tel.</h2>
            <p className="text-mce-navy/70 text-[14px] mt-4 leading-relaxed">Sécurité en profondeur, sauvegardes multi-sites, confidentialité, conformité. Vous savez ce qui se passe, où c’est stocké et qui y a accès.</p>
            <ul className="mt-6 space-y-3">
              {[
                'Chiffrement des données en transit et au repos',
                'Sauvegardes redondantes hors site',
                'Gestion granulaire des accès',
                'Journal d’audit détaillé',
                'Politique de rétention personnalisable',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13.5px] text-mce-navy/85"><CheckCircle2 className="w-4 h-4 text-mce-teal" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-mce-navy text-white p-8 relative overflow-hidden shadow-xl">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-mce-teal/20 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-mce-teal" />
                <p className="text-[12px] tracking-[0.25em] font-bold text-white">TABLEAU DE BORD SÉCURITÉ</p>
              </div>
              {[
                { label: 'SSL & HTTPS', status: 'A+', color: 'text-mce-teal' },
                { label: 'Sauvegarde dernière', status: 'il y a 2h', color: 'text-mce-teal' },
                { label: 'Vulnérabilités critiques', status: '0', color: 'text-mce-teal' },
                { label: 'Utilisateurs actifs', status: '12', color: 'text-white' },
                { label: 'Tentatives suspectes bloquées (24h)', status: '148', color: 'text-mce-gold' },
              ].map((r) => (
                <div key={r.label} className="flex items-center justify-between border-t border-white/10 py-3 text-[13px]">
                  <span className="text-white/85">{r.label}</span>
                  <span className={`font-bold ${r.color}`}>{r.status}</span>
                </div>
              ))}
              <button className="w-full mt-5 py-2.5 rounded-md bg-mce-teal hover:bg-mce-teal/90 text-white font-semibold text-[12.5px] transition-colors">TOUT VÉRIFIER</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(90deg, #0a1e3a 0%, #0f2340 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Faites de MCE votre équipe technique.</h3>
            <p className="text-white/70 text-[14px] mt-2">On évalue gratuitement votre infrastructure et on propose la meilleure formule.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary"><Calendar className="w-4 h-4" /> ÉVALUATION GRATUITE</Link>
            <Link to="/contact" className="btn-outline-light"><MessageCircle className="w-4 h-4" /> WHATSAPP</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
