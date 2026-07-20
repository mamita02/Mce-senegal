import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FOOTER_LINKS } from '../mock';

export default function Footer() {
  return (
    <footer className="bg-mce-navy text-white pt-14 pb-6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-[28px] font-black tracking-tight">
                <span className="text-mce-teal">M</span>
                <span className="text-white">CE</span>
              </span>
              <span className="text-[10px] tracking-[0.35em] text-white/70 font-semibold -mt-0.5">SÉNÉGAL</span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/70">
              Construisons ensemble les solutions digitales qui transforment vos idées en succès durables.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md bg-white/10 hover:bg-mce-teal flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] tracking-widest font-bold mb-4 text-white">SOLUTIONS DIGITALES</h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {FOOTER_LINKS.solutions.map((s) => (<li key={s}><Link to="/solutions-digitales" className="hover:text-mce-teal transition-colors">{s}</Link></li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-widest font-bold mb-4 text-white">TALENTS & RH</h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {FOOTER_LINKS.talents.map((s) => (<li key={s}><Link to="/talents-rh" className="hover:text-mce-teal transition-colors">{s}</Link></li>))}
            </ul>
            <h4 className="text-[13px] tracking-widest font-bold mb-4 mt-6 text-white">ACCOMPAGNEMENT</h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {FOOTER_LINKS.accompagnement.map((s) => (<li key={s}><Link to="/accompagnement-evenements" className="hover:text-mce-teal transition-colors">{s}</Link></li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-widest font-bold mb-4 text-white">LIENS RAPIDES</h4>
            <ul className="space-y-2 text-[13px] text-white/75">
              {FOOTER_LINKS.rapides.map((s) => (<li key={s}><a href="#" className="hover:text-mce-teal transition-colors">{s}</a></li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-widest font-bold mb-4 text-white">NOUS CONTACTER</h4>
            <ul className="space-y-3 text-[13px] text-white/75">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-mce-teal" /> Almadies, Dakar – Sénégal</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-mce-teal" /> +221 77 123 45 67</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-mce-teal" /> contact@mce.sn</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-mce-teal" /> Lun - Ven : 9h00 - 18h00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/60">
          <span>&copy; 2024 MCE GROUP – Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
            <a href="#" className="hover:text-white">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
