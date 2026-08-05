import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Calendar, Menu, X, ChevronDown, Monitor, LayoutTemplate,
  ShieldCheck, Compass, Network, GraduationCap, UserSearch, UsersRound,
  Handshake, Images,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Solutions digitales',
    to: '/solutions-digitales',
    submenu: [
      { label: 'SaaS & logiciels métiers', to: '/solutions-digitales/saas-logiciels', desc: 'CRM, applications, automatisation et outils internes', icon: Monitor },
      { label: 'Sites & plateformes', to: '/solutions-digitales/sites-plateformes', desc: 'Sites vitrines, e-commerce, Landing Pages et plateformes', icon: LayoutTemplate },
      { label: 'Hébergement & sécurité', to: '/solutions-digitales/hebergement-securite', desc: 'Maintenance, sauvegardes, sécurité et suivi technique', icon: ShieldCheck },
    ],
  },
  {
    label: 'Talents & RH',
    to: '/talents-rh',
    submenu: [
      { label: 'MCE Academy', to: '/talents-rh/academy', desc: 'Formations pratiques, mises en situation et certificat', icon: GraduationCap },
      { label: 'Recrutement & sourcing', to: '/talents-rh/recrutement', desc: 'Définition du besoin, sourcing, évaluation et intégration', icon: UserSearch },
      { label: 'Accompagnement RH', to: '/talents-rh/accompagnement-rh', desc: 'Organisation, management, performance et coaching', icon: UsersRound },
    ],
  },
  {
    label: 'Événements & Impact',
    to: '/accompagnement-evenements',
    submenu: [
      { label: 'Accompagnement stratégique', to: '/accompagnement-evenements/accompagnement', desc: 'Structuration, développement, vente et partenariats', icon: Compass },
      { label: 'Événements professionnels & networking', to: '/accompagnement-evenements/networking', desc: 'Rencontres, emploi, conférences, ateliers et impact', icon: Network },
      { label: 'Événementiel', to: '/accompagnement-evenements/evenementiel', desc: 'Organisation, planification et exécution d\'événements', icon: Calendar },
    ],
  },
  {
    label: 'MCE & Partenaires',
    to: '/mce-partenaires',
    submenu: [
      { label: 'Découvrir MCE', to: '/mce-partenaires', desc: 'Notre vision, notre présence et nos partenaires', icon: Handshake },
      { label: 'Galerie', to: '/mce-partenaires/galerie', desc: 'Nos rencontres, projets et moments forts en images', icon: Images },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/85 backdrop-blur'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/mce-logo-transparent.png" alt="MCE Sénégal" className="h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const eventsContext = l.to === '/accompagnement-evenements' && location.pathname.startsWith('/accompagnement-evenements');
            return (
            <div key={l.to} className="relative group">
              <NavLink
                to={l.to}
                end={l.to === '/' || l.to === '/solutions-digitales' || l.to === '/accompagnement-evenements'}
                className={({ isActive }) => `relative px-3 py-2 text-[14px] font-semibold flex items-center gap-1 transition-colors ${eventsContext ? 'text-blue-600' : isActive ? 'text-mce-teal' : 'text-mce-navy/85 hover:text-mce-teal'}`}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {l.submenu && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                    {(isActive || eventsContext) && <span className={`absolute -bottom-0.5 left-3 right-3 h-[3px] rounded-full ${eventsContext ? 'bg-blue-600 animate-pulse' : 'bg-mce-teal'}`} />}
                  </>
                )}
              </NavLink>

              {l.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 w-[440px]">
                  <div className="rounded-xl bg-white shadow-2xl border border-gray-100 p-3">
                    <p className="text-[10.5px] tracking-[0.25em] font-bold text-mce-navy/50 px-3 pt-1 pb-2">{l.label.toUpperCase()}</p>
                    {l.submenu.map((s) => (
                      <NavLink key={s.to} to={s.to} end className={({ isActive }) => `flex items-start gap-3 px-3 py-3 rounded-lg transition-all group/item ${isActive ? 'bg-mce-teal/10 ring-1 ring-mce-teal/20 translate-x-1' : 'hover:bg-mce-teal/5'}`}>
                        <div className="w-9 h-9 rounded-lg bg-mce-teal/10 flex items-center justify-center shrink-0">
                          <s.icon className="w-4 h-4 text-mce-teal" />
                        </div>
                        <div>
                          <p className="text-[13.5px] font-bold text-mce-navy group-hover/item:text-mce-teal transition-colors">{s.label}</p>
                          <p className="text-[11.5px] text-mce-navy/60 mt-0.5">{s.desc}</p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );})}
        </nav>

       

        <button className="lg:hidden text-mce-navy" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => {
              const eventsContext = l.to === '/accompagnement-evenements' && location.pathname.startsWith('/accompagnement-evenements');
              return (
              <div key={l.to}>
                <NavLink to={l.to} end={l.to === '/' || l.to === '/solutions-digitales' || l.to === '/accompagnement-evenements'} className={({ isActive }) => `py-2 text-sm font-semibold block ${eventsContext ? 'text-blue-600' : isActive ? 'text-mce-teal' : 'text-mce-navy'}`}>{l.label}</NavLink>
                {l.submenu && (
                  <div className="pl-4 border-l border-gray-200 ml-1 mb-2">
                    {l.submenu.map((s) => (
                      <NavLink key={s.to} to={s.to} className={({ isActive }) => `block py-1.5 text-[13px] ${isActive ? 'text-mce-teal font-semibold' : 'text-mce-navy/75'}`}>{s.label}</NavLink>
                    ))}
                  </div>
                )}
              </div>
            );})}
           
          </div>
        </div>
      )}
    </header>
  );
}
