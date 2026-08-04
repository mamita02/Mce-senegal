import React from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin, Facebook, Instagram, Youtube,
  MapPin, Phone, Mail, Clock, Calendar, FileText, Globe,
} from 'lucide-react';
import logoMCE from '../assets/logo.png';
// ============ EN HAUT DU FICHIER, avec les autres imports ============
import ctaBackground from '../assets/degrade.png'; // ⚠️ adapte le nom de fichier

// ============ MENUS ============
const SOLUTIONS = [
  { label: 'SaaS & Plateformes', to: '/solutions-digitales/saas-logiciels#services-offerts' },
  { label: 'Logiciels métiers & CRM', to: '/solutions-digitales/saas-logiciels#approche-technique' },
  { label: 'Applications web & mobiles', to: '/solutions-digitales/sites-plateformes#notre-approche' },
  { label: 'Sites web & e-commerce', to: '/solutions-digitales/sites-plateformes#landing-page' },
  { label: 'Hébergement & Infrastructure', to: '/solutions-digitales/hebergement-securite#tarifs-hebergement' },
  { label: 'Sécurité & Maintenance', to: '/solutions-digitales/hebergement-securite#tarifs-maintenance' },
];

const TALENTS = [
  { label: 'Formations professionnelles', to: '/talents-rh/academy#catalogue' },
  { label: 'Recrutement & Placement', to: '/talents-rh/recrutement#nos-services' },
  { label: 'Accompagnement RH', to: '/talents-rh/accompagnement-rh#nos-interventions' },
  { label: 'Leadership & Management', to: '/talents-rh' },
  { label: 'Coaching & Développement', to: '/talents-rh/academy#notre-philosophie' },
];

const ACCOMP_EVENTS = [
  { label: 'Accompagnement stratégique', to: '/accompagnement-evenements/accompagnement#axes-accompagnement' },
  { label: 'Séminaires & Conférences', to: '/accompagnement-evenements/networking#notre-intention' },
  { label: 'Networking & Impact', to: '/accompagnement-evenements' },
  { label: 'Événementiel international', to: '/accompagnement-evenements/evenementiel' },
  { label: 'Conciergerie premium', to: '/accompagnement-evenements/networking#notre-intention' },
];

const SOCIAL_LINKS = [
  { Icon: Linkedin, url: 'https://www.linkedin.com/company/mce-management-communication-event/', label: 'LinkedIn' },
  { Icon: Facebook, url: 'https://www.facebook.com/mce.monde', label: 'Facebook' },
  { Icon: Instagram, url: 'https://www.instagram.com/mce_group1/', label: 'Instagram' },
  { Icon: Youtube, url: 'https://www.youtube.com/@MCEAgency', label: 'YouTube' },
];

// ============ COMPOSANT ============
export default function Footer() {
  return (
    <>
     
{/* ===================== CTA BLOCK (image asset, sans overlay) ===================== */}
<section className="bg-white pt-8 pb-0">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
    <div
      className="relative overflow-hidden rounded-t-2xl"
      style={{
        backgroundImage: `url(${ctaBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Pas de dégradé overlay : la photo a déjà son dégradé bleu intégré */}

      <div className="relative px-6 lg:px-10 py-4 flex flex-col md:flex-row md:items-end justify-between gap-5">
  {/* Texte à gauche */}
  <div className="md:pt-2 md:max-w-md">
    <h2 className="text-xl md:text-2xl font-black text-white leading-tight mb-1.5">
      Construisons ensemble<br />
      votre prochain succès.
    </h2>
    <p className="text-white/90 text-[13px] leading-snug">
      Parlons de vos objectifs et trouvons la meilleure solution pour les atteindre.
    </p>
  </div>

  {/* Boutons rapprochés à gauche et descendus */}
  <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 md:pb 4 md:mr-auto md:ml-80">
    <Link
      to="/contact"
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-bold text-[13px] tracking-wide bg-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
      style={{ color: '#00AEEF' }}
    >
      <Calendar className="w-4 h-4" />
      Prendre rendez-vous
    </Link>
    <Link
      to="/contact#formulaire-devis"
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-bold text-[13px] tracking-wide text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
      style={{ backgroundColor: '#00AEEF' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0095CC')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00AEEF')}
    >
      <FileText className="w-4 h-4" />
      Demander un devis
    </Link>
  </div>
</div>
    </div>
  </div>
</section>
      {/* ===================== FOOTER ===================== */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            {/* ---------- Brand column ---------- */}
            <div>
              <div className="mb-4 -mt-5 -ml-5 overflow-hidden">
                <img
                  src={logoMCE}
                  alt="MCE Sénégal"
                  className="h-36 w-56 object-cover object-center brightness-125"
                />
              </div>
              <p className="text-[13px] text-gray-300 leading-relaxed mb-5">
                Construisons ensemble les solutions numériques, humaines et
                événementielles qui transforment vos idées en succès durables.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ Icon, url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* ---------- Catégories ---------- */}
            <FooterColumn title="SOLUTIONS NUMÉRIQUES" items={SOLUTIONS} />
            <FooterColumn title="TALENTS & RH" items={TALENTS} />
            <FooterColumn title="ACCOMPAGNEMENT & ÉVÉNEMENTS" items={ACCOMP_EVENTS} />

            {/* ---------- Contact column ---------- */}
            <div>
              <h4 className="text-[11px] tracking-[0.18em] font-bold mb-5 text-white uppercase whitespace-nowrap">
                Contact
              </h4>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <span>Dakar, Sénégal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+221338200936" className="hover:text-blue-500 transition-colors">
                      🇸🇳 +221 33 820 09 36
                    </a>
                    <a href="tel:+33698681150" className="hover:text-blue-500 transition-colors">
                      🇫🇷 +33 6 98 68 11 50 (WhatsApp)
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <a href="mailto:mceproagency@gmail.com" className="hover:text-blue-500 transition-colors">
                    mceproagency@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <span>Lun - Ven : 9h00 - 18h00</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                  <span className="text-[12px]">France · Sénégal · Maroc</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ===================== FOOTER BOTTOM ===================== */}
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

// ============ SOUS-COMPOSANT ============
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-[11px] tracking-[0.15em] font-bold mb-5 text-white uppercase whitespace-nowrap">
        {title}
      </h4>
      <ul className="space-y-3 text-[13px] text-gray-300">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="transition-colors duration-300 hover:text-blue-500 hover:translate-x-1 inline-block"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
