import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { IMG } from '../mock';
import { useToast } from '../hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: 'Message envoyé !', description: 'Merci, notre équipe vous répondra sous 24h.' });
    setForm({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden hero-navy-gradient text-white">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url('${IMG.meeting}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <p className="text-[12px] tracking-[0.3em] font-bold text-mce-teal">CONTACT</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.05] max-w-3xl">
            Parlons de votre projet.<br />
            <span className="text-mce-gold">Ensemble, créons de l’impact.</span>
          </h1>
          <p className="mt-6 text-white/80 text-[14px] max-w-2xl leading-relaxed">
            Notre équipe est à votre écoute pour comprendre vos besoins et vous proposer des solutions sur mesure. Réponse garantie sous 24h.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-mce-teal/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-mce-teal" /></div><div><p className="font-bold text-[14px] text-mce-navy">Adresse</p><p className="text-[12.5px] text-mce-navy/70">Almadies, Dakar – Sénégal</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center"><Phone className="w-5 h-5 text-amber-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Téléphone</p><p className="text-[12.5px] text-mce-navy/70">+221 77 123 45 67</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center"><Mail className="w-5 h-5 text-purple-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Email</p><p className="text-[12.5px] text-mce-navy/70">contact@mce.sn</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center"><Clock className="w-5 h-5 text-blue-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Horaires</p><p className="text-[12.5px] text-mce-navy/70">Lun - Ven : 9h00 - 18h00</p></div></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="btn-primary text-[12px] w-full justify-center"><Calendar className="w-4 h-4" />CALENDLY</button>
              <button className="btn-primary text-[12px] w-full justify-center bg-green-500 hover:bg-green-600"><MessageCircle className="w-4 h-4" />WHATSAPP</button>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8">
              <h2 className="text-2xl font-black text-mce-navy">Envoyez-nous un message</h2>
              <p className="text-mce-navy/60 text-[13px] mt-1">Nous vous répondrons dans les plus brefs délais.</p>
              {submitted && (
                <div className="mt-5 flex items-center gap-2 bg-mce-teal/10 text-mce-teal p-3 rounded-lg text-[13px] font-semibold"><CheckCircle2 className="w-4 h-4" />Votre demande a bien été enregistrée.</div>
              )}
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Field label="Nom complet *" name="name" value={form.name} onChange={onChange} required />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} required />
                <Field label="Entreprise" name="company" value={form.company} onChange={onChange} />
                <Field label="Sujet" name="subject" value={form.subject} onChange={onChange} />
                <div className="md:col-span-2">
                  <label className="text-[12px] font-semibold text-mce-navy/80">Message *</label>
                  <textarea name="message" required value={form.message} onChange={onChange} rows={6} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-[14px] focus:border-mce-teal focus:outline-none focus:ring-2 focus:ring-mce-teal/30 transition-colors" placeholder="Décrivez votre projet..." />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="btn-gold"><Send className="w-4 h-4" />ENVOYER LE MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type='text', value, onChange, required }) {
  return (
    <div>
      <label className="text-[12px] font-semibold text-mce-navy/80">{label}</label>
      <input type={type} name={name} required={required} value={value} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-[14px] focus:border-mce-teal focus:outline-none focus:ring-2 focus:ring-mce-teal/30 transition-colors" />
    </div>
  );
}
