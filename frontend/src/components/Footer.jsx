import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Calendar, FileText } from 'lucide-react';
import logoMCE from '../assets/logo.png';

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
  { Icon: Linkedin, url: '#' },
  { Icon: Facebook, url: '#' },
  { Icon: Instagram, url: '#' },
  { Icon: Youtube, url: '#' },
];

export default function Footer() {
  return (
    <>
      {/* ===================== CTA BLOCK ===================== */}
      <div className="bg-white px-6 lg:px-10 py-0">
        <div className="max-w-[1400px] mx-auto py-6">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '280px',
            }}
          >
            {/* Overlay bleu foncé */}
            <div
              className="absolute inset-0 bg-black/60"
            />

            <div className="relative px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Texte */}
              <div className="md:flex-1">
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                  Construisons ensemble<br />
                  votre prochain succès.
                </h2>
                <p className="text-white/90 text-[15px] leading-relaxed">
                  Parlons de vos objectifs et trouvons la meilleure solution<br />
                  pour les atteindre.
                </p>
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-3 md:flex-1 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-[13px] tracking-wide text-black bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  Prendre rendez-vous
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-[13px] tracking-wide text-white bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <FileText className="w-4 h-4" />
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FOOTER CONTENT ===================== */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-0 pb-8">
          {/* Grid principal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-10 pt-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img
                  src={logoMCE}
                  alt="MCE Sénégal"
                  className="h-20 w-auto brightness-125"
                />
              </div>
              <p className="text-[13px] text-gray-300 leading-relaxed mb-5">
                Construisons ensemble les solutions numériques qui transforment vos idées en succès durables.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Columns */}
            <FooterColumn title="SOLUTIONS DIGITALES" items={SOLUTIONS} to="/solutions-digitales" />
            <FooterColumn title="TALENTS & RH" items={TALENTS} to="/talents-rh" />
            <FooterColumn title="FORMATIONS & ACADEMY" items={FORMATIONS} to="/formations" />
            <FooterColumn title="ACCOMPAGNEMENT" items={ACCOMP} to="/accompagnement" />

            {/* Contact column */}
            <div>
              <h4 className="text-[11px] tracking-[0.2em] font-bold mb-5 text-white uppercase">
                Contact
              </h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <span>Dakar, Sénégal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <a href="tel:+221771234567" className="hover:text-blue-500 transition-colors">
                    +221 77 123 45 67
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <a href="mailto:contact@mce.sn" className="hover:text-blue-500 transition-colors">
                    contact@mce.sn
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <span>Lun - Ven : 9h00 - 18h00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-400">
            <span>© 2024 MCE GROUP – Tous droits réservés.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                CGV
              </a>
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
      <h4 className="text-[11px] tracking-[0.2em] font-bold mb-5 text-white uppercase">
        {title}
      </h4>
      <ul className="space-y-3 text-[13px] text-gray-300">
        {items.map((item) => (
          <li key={item}>
            <Link
              to={to}
              className="transition-colors duration-300 hover:text-blue-500 hover:translate-x-1 inline-block"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}