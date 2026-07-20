import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-mce-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/g2pp2993_image.png"
              alt="MCE Sénégal"
              className="h-12 w-auto brightness-125 mb-4"
            />
            <p className="text-[12.5px] text-white/70 leading-relaxed">
              Construisons ensemble les solutions digitales qui transforment vos idées en succès durables.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-mce-teal flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="SOLUTIONS DIGITALES" items={SOLUTIONS} to="/solutions-digitales" />
          <FooterColumn title="TALENTS & RH" items={TALENTS} to="/talents-rh" />
          <FooterColumn title="FORMATIONS & ACADEMY" items={FORMATIONS} to="/talents-rh" />
          <FooterColumn title="ACCOMPAGNEMENT" items={ACCOMP} to="/accompagnement-evenements" />

          {/* Contact column */}
          <div>
            <h4 className="text-[12px] tracking-[0.2em] font-bold mb-4 text-white">CONTACT</h4>
            <ul className="space-y-3 text-[12.5px] text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" /> Dakar, Sénégal
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" /> +221 77 123 45 67
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" /> contact@mce.sn
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-mce-teal shrink-0" /> Lun - Ven : 9h00 - 18h00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/60">
          <span>© 2024 MCE GROUP – Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, to }) {
  return (
    <div>
      <h4 className="text-[12px] tracking-[0.2em] font-bold mb-4 text-white">{title}</h4>
      <ul className="space-y-2.5 text-[12.5px] text-white/75">
        {items.map((it) => (
          <li key={it}>
            <Link to={to} className="hover:text-mce-teal transition-colors">
              {it}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
