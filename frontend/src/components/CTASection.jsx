import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection({ title, subtitle }) {
  return (
    <section className="bg-mce-navy text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div>
            <p className="text-[13px] font-semibold text-mce-gold tracking-wide">{title || 'PRÊT(E) À PASSER À L’ACTION ?'}</p>
            <p className="text-white/80 text-sm mt-1">{subtitle || 'Parlons de votre projet ou de vos besoins.'}</p>
          </div>
          <CTAItem icon={<Calendar className="w-5 h-5" />} title="PRENDRE RENDEZ-VOUS" sub="(Calendly) Échange découverte offert" color="bg-purple-500" to="/contact" />
          <CTAItem icon={<FileText className="w-5 h-5" />} title="DEMANDER UN DEVIS" sub="Réponse rapide – Étude personnalisée" color="bg-mce-teal" to="/contact" />
          <CTAItem icon={<MessageCircle className="w-5 h-5" />} title="ÉCRIRE SUR WHATSAPP" sub="Réponse immédiate. Nous sommes disponibles" color="bg-green-500" to="https://wa.me/221771234567" />
        </div>
      </div>
    </section>
  );
}

function CTAItem({ icon, title, sub, color, to }) {
  const content = <>
      <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>{icon}</div>
      <div className="min-w-0">
        <div className="text-[13px] font-bold flex items-center gap-1 group-hover:text-mce-gold transition-colors">{title} <ArrowRight className="w-3.5 h-3.5 opacity-70" /></div>
        <div className="text-[11.5px] text-white/70 leading-snug">{sub}</div>
      </div>
    </>;
  return to.startsWith('http')
    ? <a href={to} target="_blank" rel="noreferrer" className={`flex items-start gap-3 group ${to.includes('wa.me') ? 'footer-whatsapp-cta' : ''}`}>{content}</a>
    : <Link to={to} className="flex items-start gap-3 group">{content}</Link>;
}
