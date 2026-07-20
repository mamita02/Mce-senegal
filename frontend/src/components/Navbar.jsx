import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../mock';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/80 backdrop-blur'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className="text-[26px] font-black tracking-tight">
              <span className="text-mce-teal">M</span>
              <span className="text-mce-navy">CE</span>
            </span>
            <span className="text-[10px] tracking-[0.35em] text-mce-navy/80 font-semibold -mt-0.5">SÉNÉGAL</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `relative px-3 py-2 text-[14px] font-semibold flex items-center gap-1 transition-colors ${isActive ? 'text-mce-teal' : 'text-mce-navy/85 hover:text-mce-teal'}`}
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {['Solutions digitales','Talents & RH','Accompagnement & Événements','MCE & Partenaires'].includes(l.label) && (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                  {isActive && <span className="absolute -bottom-0.5 left-3 right-3 h-[3px] bg-mce-teal rounded-full" />}
                </>
              )}
            </NavLink>
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
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `py-2 text-sm font-semibold ${isActive ? 'text-mce-teal' : 'text-mce-navy'}`}>{l.label}</NavLink>
            ))}
            <Link to="/contact" className="btn-gold text-xs mt-2 w-fit"><Calendar className="w-4 h-4" />PARLER DE VOTRE PROJET</Link>
          </div>
        </div>
      )}
    </header>
  );
}
