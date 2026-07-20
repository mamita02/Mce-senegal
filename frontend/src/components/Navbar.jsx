import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, ChevronDown, Monitor, LayoutTemplate, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Solutions digitales',
    to: '/solutions-digitales',
    submenu: [
      { label: 'SaaS & logiciels métiers', to: '/solutions-digitales/saas-logiciels', desc: 'CRM, ERP, automatisation, dashboards', icon: Monitor },
      { label: 'Sites & plateformes',      to: '/solutions-digitales/sites-plateformes', desc: 'Vitrines, e-commerce, plateformes web', icon: LayoutTemplate },
      { label: 'Hébergement & sécurité',   to: '/solutions-digitales/hebergement-securite', desc: 'Hosting, sauvegardes, maintenance', icon: ShieldCheck },
    ],
  },
  { label: 'Talents & RH', to: '/talents-rh' },
  { label: 'Accompagnement & Événements', to: '/accompagnement-evenements' },
  { label: 'MCE & Partenaires', to: '/mce-partenaires' },
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
          <img src="https://customer-assets-gfyr7b9c.emergentagent.net/job_web-design-complete-1/artifacts/g2pp2993_image.png" alt="MCE Sénégal" className="h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <div key={l.to} className="relative group">
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `relative px-3 py-2 text-[14px] font-semibold flex items-center gap-1 transition-colors ${isActive ? 'text-mce-teal' : 'text-mce-navy/85 hover:text-mce-teal'}`}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {l.submenu && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                    {isActive && <span className="absolute -bottom-0.5 left-3 right-3 h-[3px] bg-mce-teal rounded-full" />}
                  </>
                )}
              </NavLink>

              {l.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 w-[380px]">
                  <div className="rounded-xl bg-white shadow-2xl border border-gray-100 p-3">
                    <p className="text-[10.5px] tracking-[0.25em] font-bold text-mce-navy/50 px-3 pt-1 pb-2">SOLUTIONS DIGITALES</p>
                    {l.submenu.map((s) => (
                      <Link key={s.to} to={s.to} className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-mce-teal/5 transition-colors group/item">
                        <div className="w-9 h-9 rounded-lg bg-mce-teal/10 flex items-center justify-center shrink-0">
                          <s.icon className="w-4 h-4 text-mce-teal" />
                        </div>
                        <div>
                          <p className="text-[13.5px] font-bold text-mce-navy group-hover/item:text-mce-teal transition-colors">{s.label}</p>
                          <p className="text-[11.5px] text-mce-navy/60 mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-gold text-[13px]">
          <Calendar className="w-4 h-4" />
          PARLER DE VOTRE PROJET
        </Link>

        <button className="lg:hidden text-mce-navy" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <div key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `py-2 text-sm font-semibold block ${isActive ? 'text-mce-teal' : 'text-mce-navy'}`}>{l.label}</NavLink>
                {l.submenu && (
                  <div className="pl-4 border-l border-gray-200 ml-1 mb-2">
                    {l.submenu.map((s) => (
                      <NavLink key={s.to} to={s.to} className={({ isActive }) => `block py-1.5 text-[13px] ${isActive ? 'text-mce-teal font-semibold' : 'text-mce-navy/75'}`}>{s.label}</NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-gold text-xs mt-3 w-fit"><Calendar className="w-4 h-4" />PARLER DE VOTRE PROJET</Link>
          </div>
        </div>
      )}
    </header>
  );
}
