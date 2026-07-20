import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, Calendar, FileText, MessageCircle, ArrowRight } from 'lucide-react';

const NAV = [
  { label: 'Accueil', to: '/' },
  { label: 'Solutions digitales', to: '/solutions-digitales' },
  { label: 'Talents & RH', to: '/talents-rh' },
  { label: 'Accompagnement & Événements', to: '/accompagnement-evenements' },
  { label: 'MCE & Partenaires', to: '/mce-partenaires' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-mce-navy text-white">
      {/* Top row: CTA */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          <div>
            <h3 className="text-2xl md:text-[26px] font-black leading-tight">
              Prêt à <span className="text-mce-teal">passer à l&rsquo;action ?</span>
              <br />
              Parlons de votre projet.
            </h3>
            <p className="text-white/70 text-[13px] mt-2">Un échange suffit pour faire la différence.</p>
          </div>

          {[
            { icon: Calendar, bg: 'bg-purple-500', title: 'PRENDRE RENDEZ-VOUS', sub: '(Calendly)', sub2: 'Échange découverte offert' },
            { icon: FileText, bg: 'bg-mce-teal', title: 'DEMANDER UN DEVIS', sub: 'Personnalisé', sub2: 'Réponse sous 24h' },
            { icon: MessageCircle, bg: 'bg-green-500', title: 'ÉCRIRE SUR WHATSAPP', sub: 'Réponse immédiate', sub2: '' },
          ].map((c, i) => (
            <Link to="/contact" key={i} className="flex items-start gap-3 group">
              <div className={`${c.bg} w-11 h-11 rounded-lg flex items-center justify-center shrink-0`}>
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-bold flex items-center gap-1 group-hover:text-mce-gold transition-colors">
                  {c.title} <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                </div>
                <div className="text-[11.5px] text-white/70 leading-snug mt-0.5">
                  {c.sub}
                  {c.sub2 && (<><br />{c.sub2}</>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Bottom row */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-3 flex items-center gap-3">
            <img
              src="https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/g2pp2993_image.png"
              alt="MCE Sénégal"
              className="h-12 w-auto brightness-125"
            />
            <p className="text-[12px] text-white/70 leading-snug">
              Des solutions concrètes<br />pour des ambitions durables.
            </p>
          </div>

          <nav className="lg:col-span-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-[13px] font-medium text-white/85 hover:text-mce-teal transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-2">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-mce-teal flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="https://wa.me/221771234567"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors ml-1 shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-5 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11.5px] text-white/50">
          <span>© 2024 MCE GROUP – Tous droits réservés.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <a href="#" className="hover:text-white">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
