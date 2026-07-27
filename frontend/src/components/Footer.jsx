import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

const SOLUTIONS = [
  'SaaS & Plateformes',
  'Logiciels métiers & CRM',
  'Applications web & mobiles',
  'Sites web & e-commerce',
  'Hébergement & Infrastructure',
  'Sécurité & Maintenance',
];

const TALENTS = [
  'Recrutement & Placement',
  'Accompagnement RH',
  'Événements emploi',
  'Jeunes talents',
];

const FORMATIONS = [
  'Formations professionnelles',
  'Leadership & Management',
  'Communication & Vente',
  'Certifications',
];

const ACCOMP = [
  "Stratégie d'entreprise",
  'Développement commercial',
  'Performance & Transformation',
  'Financement & Partenariats',
];

const SOCIAL_LINKS = [
  { Icon: Linkedin, label: 'LinkedIn', url: '#' },
  { Icon: Facebook, label: 'Facebook', url: '#' },
  { Icon: Instagram, label: 'Instagram', url: '#' },
  { Icon: Youtube, label: 'YouTube', url: '#' },
];

export default function Footer() {
  return (
    <>
      <section className="bg-white px-6 py-0 lg:px-10" aria-label="Parler de votre projet">
        <div className="mx-auto max-w-[1400px] py-6">
          <div
            className="relative min-h-[280px] overflow-hidden rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=500&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-mce-navy/80" />
            <div className="relative flex min-h-[280px] flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-10">
              <div className="md:flex-1">
                <h2 className="mb-3 text-3xl font-black leading-tight text-white md:text-4xl">
                  Construisons ensemble
                  <br />
                  votre prochain succès.
                </h2>
                <p className="text-[15px] leading-relaxed text-white/90">
                  Parlons de vos objectifs et trouvons la meilleure solution
                  <br className="hidden sm:block" />
                  {' '}pour les atteindre.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-1 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[13px] font-bold tracking-wide text-mce-navy shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Calendar className="h-4 w-4" />
                  Prendre rendez-vous
                </Link>
                <Link
                  to="/contact#formulaire-devis"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-mce-primary px-6 py-3 text-[13px] font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-mce-primary-dark hover:shadow-xl"
                >
                  <FileText className="h-4 w-4" />
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-mce-navy text-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-8 lg:px-10">
          <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            <div className="lg:col-span-1">
              <img
                src="/assets/mce-logo-transparent.png"
                alt="MCE Sénégal"
                className="mb-4 h-14 w-auto brightness-125"
              />
              <p className="mb-5 text-[13px] leading-relaxed text-white/70">
                Construisons ensemble les solutions digitales qui transforment vos idées en succès durables.
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-mce-primary"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="SOLUTIONS DIGITALES" items={SOLUTIONS} to="/solutions-digitales" />
            <FooterColumn title="TALENTS & RH" items={TALENTS} to="/talents-rh" />
            <FooterColumn title="FORMATIONS & ACADEMY" items={FORMATIONS} to="/talents-rh/academy" />
            <FooterColumn title="ACCOMPAGNEMENT" items={ACCOMP} to="/accompagnement-evenements" />

            <div>
              <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Contact
              </h4>
              <ul className="space-y-4 text-[13px] text-white/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mce-primary" />
                  <span>Dakar, Sénégal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-mce-primary" />
                  <a href="tel:+221771234567" className="transition-colors hover:text-mce-primary">
                    +221 77 123 45 67
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mce-primary" />
                  <a href="mailto:contact@mce.sn" className="transition-colors hover:text-mce-primary">
                    contact@mce.sn
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-mce-primary" />
                  <span>Lun - Ven : 9h00 - 18h00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/60 md:flex-row">
            <span>© 2024 MCE GROUP – Tous droits réservés.</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="transition-colors hover:text-white">Mentions légales</a>
              <a href="#" className="transition-colors hover:text-white">Politique de confidentialité</a>
              <a href="#" className="transition-colors hover:text-white">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, items, to }) {
  return (
    <div>
      <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <ul className="space-y-3 text-[13px] text-white/75">
        {items.map((item) => (
          <li key={item}>
            <Link
              to={to}
              className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-mce-primary"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
