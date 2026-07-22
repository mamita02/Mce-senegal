import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Cloud, Server, RefreshCcw, Bell, LockKeyhole, Activity,
  ArrowRight, CheckCircle2, Calendar, MessageCircle, TrendingUp, HeartPulse,
  Clock, Eye, Zap, Users,
} from 'lucide-react';
import MobileCarouselControls from '../components/MobileCarouselControls';

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
          <div className="hosting-hero-copy lg:col-span-7 lg:order-2">
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
              <Link to="/contact?service=maintenance-securite#formulaire-devis" className="btn-primary"><Calendar className="w-4 h-4" /> ÉVALUER MON INFRASTRUCTURE</Link>
              <a href="#tarifs-hebergement" className="btn-outline-light">VOIR NOS SERVICES <ArrowRight className="w-4 h-4" /></a>
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

          <div className="hosting-hero-image lg:col-span-5 lg:order-1">
            <img src="/assets/hosting-security-hero.jpg" alt="Architecture de sécurité, chiffrement, cloud et supervision" />
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="hosting-promise-strip">
        <div className="hosting-promise-panel grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* JOURNEY / TIMELINE - horizontal, compact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[12px] tracking-[0.3em] font-bold text-mce-gold">APRÈS LA MISE EN LIGNE</p>
            <h2 className="section-title mt-3">
              Un partenaire dans la <span className="text-mce-gold">durée</span>
            </h2>
            <p className="text-mce-navy/60 mt-3 text-[13.5px] max-w-2xl mx-auto">
              Voici concrètement ce que nous prenons en charge, jour après jour.
            </p>
          </div>

          <div className="relative">
            {/* horizontal dashed line */}
            <div className="hidden md:block absolute left-[10%] right-[10%] top-[52px] h-0 border-t-2 border-dashed border-mce-gold/50" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
              {[
                {
                  m: 'JOUR 1',
                  title: 'Mise en ligne sécurisée',
                  desc: "DNS, SSL, monitoring activé — nous surveillons en direct.",
                  icon: Zap,
                },
                {
                  m: 'SEMAINE 1',
                  title: 'Sauvegardes validées',
                  desc: "Restauration testée : la preuve que vos données sont récupérables.",
                  icon: RefreshCcw,
                },
                {
                  m: 'MOIS 1',
                  title: 'Rapport de performance',
                  desc: "Bilan trafic, vitesse, sécurité — et optimisations ciblées.",
                  icon: Activity,
                },
                {
                  m: 'MOIS 3',
                  title: 'Audit sécurité',
                  desc: "Scan de vulnérabilités, correctifs, rapport de conformité.",
                  icon: ShieldCheck,
                },
                {
                  m: 'EN CONTINU',
                  title: 'Support réactif',
                  desc: "Réponse < 30 min en heures ouvrées + point trimestriel.",
                  icon: HeartPulse,
                },
              ].map((s, i) => (
                <div key={i} className="relative text-center">
                  {/* small badge on top */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-mce-gold/15 text-mce-gold text-[10.5px] font-bold tracking-[0.2em] mb-3">
                    {s.m}
                  </span>
                  {/* Icon node */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white ring-4 ring-gray-50 border-2 border-mce-gold flex items-center justify-center shadow-md z-10">
                      <s.icon className="w-6 h-6 text-mce-gold" />
                    </div>
                  </div>
                  <h4 className="mt-4 font-black text-[14.5px] text-mce-navy">{s.title}</h4>
                  <p className="text-[12.5px] text-mce-navy/70 mt-1.5 leading-snug px-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact summary strip */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-5 border-t border-mce-gold/30 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-mce-gold flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-mce-navy" />
              </div>
              <div>
                <p className="text-[14.5px] font-bold text-mce-navy">
                  Vous ne payez pas juste un hébergeur. <span className="text-mce-gold">Vous vous offrez une équipe technique.</span>
                </p>
                <p className="text-[12.5px] text-mce-navy/60 mt-0.5">Un interlocuteur unique · Des rapports clairs · Des interventions rapides</p>
              </div>
            </div>
            <Link to="/contact?service=maintenance-securite#formulaire-devis" className="btn-gold text-[12.5px] shrink-0">
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

      <PlanSection
        id="tarifs-hebergement"
        title="Packs d'hébergement"
        description="Nos packs d'hébergement sont conçus pour offrir à votre site web une base fiable, rapide et sécurisée. Ils garantissent une disponibilité optimale, de bonnes performances et une protection adaptée."
        plans={[
          ['STANDARD','Pack Hébergement','Pour démarrer avec une base fiable et simple.',['Nom de domaine gratuit','30 000 visites mensuelles','10 Go de stockage SSD','SSL gratuit illimité'],'49 000 FCFA / an','hebergement-standard'],
          ['PREMIUM','Pack Hébergement','Pour les sites en croissance qui reçoivent plus de trafic.',['Nom de domaine gratuit','100 000 visites mensuelles','50 Go de stockage SSD','SSL gratuit & illimité'],'59 000 FCFA / an','hebergement-premium'],
          ['PLATINIUM','Pack Hébergement','Idéal pour les PME en croissance et entrepreneurs ambitieux nécessitant une solution complète.',['Nom de domaine gratuit','500 000 visites mensuelles','100 Go de stockage SSD','SSL gratuit & illimité'],'Sur devis','hebergement-platinium'],
        ]}
      />
      <PlanSection
        id="tarifs-maintenance"
        title="Pack Maintenance et Sécurité"
        description="Nos packs maintenance et sécurité sont pensés pour assurer la protection, la stabilité et le bon fonctionnement de votre site web sur le long terme : surveillance, mises à jour et prévention des pannes."
        tinted
        plans={[
          ['ESSENTIEL','Sécurité de base','Jusqu’à 10 services. La protection indispensable pour tout site.',['Wordfence Premium installé et configuré','Scan antivirus automatique','Pare-feu actif 24/7','Protection brute force','Blocage bots malveillants','Alertes sécurité critiques']],
          ['PRO','Maintenance + Sécurité avancée','Tout le pack Essentiel inclus, avec un niveau de sécurité supérieur.',['Scan antivirus quotidien','2FA pour administrateurs','Analyse manuelle par MCE en cas d’alerte','Nettoyage préliminaire si suspicion d’infection','Rapport sécurité annuel personnalisé','Priorité support sécurité']],
          ['SÉRÉNITÉ','Maintenance totale + Sécurité premium',"La tranquillité complète pour les sites qui ne peuvent pas se permettre d'interruption.",['Wordfence Premium & firewall optimisé max','Scan antivirus quotidien + surveillance active','Nettoyage malware (1 intervention/an incluse)','Audit annuel complet (sécurité + performance)','Détection des changements critiques','Protection renforcée e-commerce']],
        ]}
      />

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(90deg, #0a1e3a 0%, #0f2340 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight">Faites de MCE votre équipe technique.</h3>
            <p className="text-white/70 text-[14px] mt-2">On évalue gratuitement votre infrastructure et on propose la meilleure formule.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact?service=maintenance-securite#formulaire-devis" className="btn-primary"><Calendar className="w-4 h-4" /> ÉVALUATION GRATUITE</Link>
            <a href="https://wa.me/221771234567" target="_blank" rel="noreferrer" className="btn-outline-light"><MessageCircle className="w-4 h-4" /> WHATSAPP</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanSection({ id, title, description, plans, tinted = false }) {
  const targetId = tinted ? 'maintenance-plans-carousel' : 'hosting-plans-carousel';
  return <section id={id} className={`hosting-plans py-20 ${tinted ? 'hosting-plans-tinted' : 'bg-white'}`}><div className="max-w-[1200px] mx-auto px-6"><header><span>NOS TARIFS</span><h2>{title}</h2><p>{description}</p></header><div id={targetId} className="hosting-plan-grid">{plans.map(([tier,name,desc,items,price='Sur devis',service='maintenance-securite'],index)=><article key={tier} className={index===1?'featured':''}><div><span>{tier}</span>{index===1&&<b>RECOMMANDÉ</b>}</div><h3>{name}</h3><strong>{price}</strong><p>{desc}</p><ul>{items.map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul><Link to={`/contact?service=${service}#formulaire-devis`}>Demander un devis</Link></article>)}</div><MobileCarouselControls targetId={targetId}/></div></section>;
}
