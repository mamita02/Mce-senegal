import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageCircle, CheckCircle2, ArrowRight, ClipboardCheck, Layers3, ShieldCheck } from 'lucide-react';
import { IMG } from '../mock';
import { useToast } from '../hooks/use-toast';

const WEB3FORMS_ACCESS_KEY = 'c98d7adb-6e49-4ef4-aef3-ab94bb396534';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const QUOTE_GROUPS = {
  web: [['landing-page','Landing Page','65 000 FCFA'],['site-vitrine','Site vitrine','Sur devis'],['e-commerce','E-commerce','Sur devis'],['refonte-site','Refonte de site','Sur devis']],
  saas: [['saas','SaaS / logiciel métier','Sur devis'],['application-web','Application web','Sur devis'],['crm','CRM / outil interne','Sur devis'],['automatisation','Automatisation','Sur devis']],
  hosting: [['hebergement-standard','Standard','49 000 FCFA / an'],['hebergement-premium','Premium','59 000 FCFA / an'],['hebergement-platinium','Platinium','Sur devis']],
  maintenance: [['maintenance-essentiel','Essentiel','Sur devis'],['maintenance-pro','Pro','Sur devis'],['maintenance-serenite','Sérénité','Sur devis']],
  complementary: [['identite-visuelle','Identité visuelle','Sur devis'],['strategie-digitale','Stratégie digitale','Sur devis'],['reseaux-sociaux','Réseaux sociaux','Sur devis'],['publicite-digitale','Publicité digitale','Sur devis']],
};

export default function Contact() {
  const location = useLocation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);
  const [quoteStep, setQuoteStep] = useState(1);
  const [quote, setQuote] = useState({ name:'', email:'', phone:'', company:'', service:[], budget:'', deadline:'', details:'', consent:false });

  useEffect(() => {
    const requested = new URLSearchParams(location.search).get('service');
    if (requested) setQuote((current) => ({ ...current, service: [requested === 'maintenance-securite' ? 'maintenance-pro' : requested] }));
    if (location.hash === '#formulaire-devis') setTimeout(() => document.getElementById('formulaire-devis')?.scrollIntoView({ behavior:'smooth', block:'start' }), 80);
  }, [location.search, location.hash]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const sendToWeb3Forms = async (payload) => {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, from_name: 'Site MCE Sénégal', ...payload }),
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error(result.message || 'Échec de l’envoi');
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);
    try {
      await sendToWeb3Forms({
        subject: form.subject ? `Nouveau message MCE — ${form.subject}` : 'Nouveau message depuis le site MCE',
        type_de_demande: 'Message de contact',
        nom: form.name,
        email: form.email,
        entreprise: form.company || 'Non renseignée',
        message: form.message,
      });
      setSubmitted(true);
      toast({ title: 'Message envoyé !', description: 'Merci, notre équipe vous répondra sous 24h.' });
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      toast({ title: 'Envoi impossible', description: 'Votre message n’a pas pu être transmis. Réessayez ou contactez-nous sur WhatsApp.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };
  const toggleService = (value) => setQuote((current) => ({ ...current, service: current.service.includes(value) ? current.service.filter(x => x !== value) : [...current.service,value] }));
  const chooseSingle = (value, group) => setQuote((current) => ({ ...current, service: [...current.service.filter(x => !group.includes(x)), ...(current.service.includes(value) ? [] : [value])] }));
  const webSelected = QUOTE_GROUPS.web.map(x=>x[0]).filter(x=>quote.service.includes(x));
  const saasSelected = QUOTE_GROUPS.saas.map(x=>x[0]).filter(x=>quote.service.includes(x));
  const hostingValues = QUOTE_GROUPS.hosting.map(x=>x[0]);
  const maintenanceValues = QUOTE_GROUPS.maintenance.map(x=>x[0]);
  const standardDisabled = quote.service.includes('e-commerce') || saasSelected.length > 0 || webSelected.length > 1;
  useEffect(() => { if (standardDisabled && quote.service.includes('hebergement-standard')) setQuote((current) => ({ ...current, service: current.service.filter(x=>x !== 'hebergement-standard') })); }, [standardDisabled, quote.service]);
  const hostingMessage = quote.service.includes('e-commerce')
    ? 'Site e-commerce sélectionné : l’hébergement doit être au minimum Premium. Le pack Standard est désactivé.'
    : (saasSelected.length > 0 && webSelected.length > 0)
      ? 'Site web et outil métier associés : choisissez Premium ou Platinium pour supporter l’ensemble de la solution.'
      : saasSelected.length > 1
        ? 'Plusieurs outils métiers sélectionnés : Premium devient le niveau minimum recommandé et Standard est indisponible.'
        : saasSelected.length === 1
          ? 'Solution SaaS sélectionnée : privilégiez Premium ou Platinium pour la disponibilité, les données et les évolutions.'
          : webSelected.length > 1
            ? 'Plusieurs projets web sélectionnés : une infrastructure Premium minimum est nécessaire pour les regrouper.'
      : quote.service.includes('landing-page')
        ? 'Landing Page sélectionnée : un hébergement Standard suffit largement.'
        : (quote.service.includes('site-vitrine') || quote.service.includes('refonte-site'))
          ? 'Solution digitale sélectionnée : choisissez l’hébergement le plus adapté au niveau du projet.'
          : 'Vous pouvez choisir une formule d’hébergement seule ou l’associer à votre solution digitale.';
  const goToQuoteDetails = () => { if (!quote.service.length) { toast({ title:'Choisissez au moins un service', description:'Sélectionnez une prestation avant de passer à l’étape suivante.' }); return; } setQuoteStep(2); };
  const submitQuote = async (e) => {
    e.preventDefault();
    if (!quote.service.length) {
      toast({ title:'Choisissez au moins un service', description:'Cette information permet de diriger votre demande vers la bonne expertise.' });
      return;
    }
    setQuoteSending(true);
    setQuoteSubmitted(false);
    try {
      const serviceLabels = Object.values(QUOTE_GROUPS).flat().filter(([value]) => quote.service.includes(value)).map(([,label,price]) => `${label} (${price})`);
      await sendToWeb3Forms({
        subject: `Nouvelle demande de devis MCE — ${quote.name}`,
        type_de_demande: 'Demande de devis',
        nom: quote.name,
        email: quote.email,
        telephone_whatsapp: quote.phone,
        entreprise: quote.company || 'Non renseignée',
        services_demandes: serviceLabels.join(', '),
        budget: quote.budget || 'À définir ensemble',
        delai_souhaite: quote.deadline || 'À définir',
        details_du_projet: quote.details || 'Aucun détail complémentaire',
        consentement: quote.consent ? 'Accepté' : 'Non accepté',
      });
      setQuoteSubmitted(true);
      toast({ title:'Demande de devis envoyée', description:'MCE étudiera votre besoin et vous recontactera pour préciser le périmètre.' });
      setQuote({ name:'', email:'', phone:'', company:'', service:[], budget:'', deadline:'', details:'', consent:false });
      setQuoteStep(1);
    } catch (error) {
      toast({ title:'Envoi impossible', description:'La demande de devis n’a pas pu être transmise. Réessayez ou contactez-nous sur WhatsApp.', variant:'destructive' });
    } finally {
      setQuoteSending(false);
    }
  };

  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden hero-navy-gradient text-white">
        <div className="contact-hero-image absolute inset-0" style={{ backgroundImage: `url('${IMG.meeting}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mce-navy via-mce-navy/85 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
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
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-mce-teal/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-mce-teal" /></div><div><p className="font-bold text-[14px] text-mce-navy">Adresse</p><p className="text-[12.5px] text-mce-navy/70">Ouest Foire, Dakar – Sénégal</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center"><Phone className="w-5 h-5 text-amber-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Téléphone</p><p className="text-[12.5px] text-mce-navy/70">+221 78 183 99 73</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center"><Mail className="w-5 h-5 text-purple-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Email</p><p className="text-[12.5px] text-mce-navy/70">mceproagency@gmail.com</p></div></div>
            </div>
            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3"><div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center"><Clock className="w-5 h-5 text-blue-600" /></div><div><p className="font-bold text-[14px] text-mce-navy">Horaires</p><p className="text-[12.5px] text-mce-navy/70">Lun - Ven : 9h00 - 18h00</p></div></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="btn-primary text-[12px] w-full justify-center"><Calendar className="w-4 h-4" />CALENDLY</button>
              <a href="https://wa.me/221781839973" target="_blank" rel="noreferrer" className="btn-primary text-[12px] w-full justify-center bg-green-500 hover:bg-green-600"><MessageCircle className="w-4 h-4" />WHATSAPP</a>
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
                <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />
                <Field label="Nom complet *" name="name" value={form.name} onChange={onChange} required />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} required />
                <Field label="Entreprise" name="company" value={form.company} onChange={onChange} />
                <Field label="Sujet" name="subject" value={form.subject} onChange={onChange} />
                <div className="md:col-span-2">
                  <label className="text-[12px] font-semibold text-mce-navy/80">Message *</label>
                  <textarea name="message" required value={form.message} onChange={onChange} rows={6} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-[14px] focus:border-mce-teal focus:outline-none focus:ring-2 focus:ring-mce-teal/30 transition-colors" placeholder="Décrivez votre projet..." />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" disabled={sending} className="btn-gold disabled:cursor-wait disabled:opacity-60"><Send className="w-4 h-4" />{sending ? 'ENVOI EN COURS…' : 'ENVOYER LE MESSAGE'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="formulaire-devis" className="quote-builder-section">
        <div className="quote-builder-shell">
          <aside className="quote-builder-intro">
            <span>DEMANDE DE DEVIS</span>
            <h2>Construisons une proposition adaptée à votre besoin.</h2>
            <p>Choisissez votre prestation, précisez votre contexte et recevez une étude personnalisée. Les éléments transmis servent à cadrer le périmètre avant validation définitive.</p>
            <div><article><ClipboardCheck/><b>Besoin clarifié</b><small>Votre demande est analysée avant toute proposition.</small></article><article><Layers3/><b>Offre personnalisée</b><small>Le devis dépend des fonctionnalités et du niveau d’accompagnement.</small></article><article><ShieldCheck/><b>Données protégées</b><small>Vos informations restent utilisées uniquement pour traiter la demande.</small></article></div>
          </aside>
          <div className="quote-builder-form">
            <div className="quote-stepper"><span className={quoteStep===1?'active':'done'}><b>01</b>Choix des services</span><i/><span className={quoteStep===2?'active':''}><b>02</b>Vos coordonnées</span></div>
            {quoteSubmitted && <div className="quote-success"><CheckCircle2/>Votre demande a bien été enregistrée.</div>}
            <form onSubmit={submitQuote}>
              <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />
              <div className={`quote-slide ${quoteStep===1?'active':'inactive-left'}`} aria-hidden={quoteStep!==1}>
                <div className="quote-selection-toolbar"><span>Configurez librement votre demande.</span><button type="button" disabled={!quote.service.length} onClick={()=>setQuote((current)=>({...current,service:[]}))}>Tout désélectionner</button></div>
                <QuoteCategory title="Sites web & Landing Pages" note="Plusieurs choix possibles" items={QUOTE_GROUPS.web} selected={quote.service} onToggle={toggleService}/>
                <QuoteCategory title="SaaS & logiciels métiers" note="Plusieurs choix possibles" items={QUOTE_GROUPS.saas} selected={quote.service} onToggle={toggleService}/>
                <QuoteCategory title="Hébergement" note="Une seule formule" items={QUOTE_GROUPS.hosting} selected={quote.service} onToggle={(value)=>chooseSingle(value,hostingValues)} disabledValues={standardDisabled?['hebergement-standard']:[]} message={hostingMessage} highlighted/>
                <QuoteCategory title="Maintenance & sécurité" note="Une seule formule" items={QUOTE_GROUPS.maintenance} selected={quote.service} onToggle={(value)=>chooseSingle(value,maintenanceValues)}/>
                <QuoteCategory title="Services complémentaires" note="Un ou plusieurs choix possibles" items={QUOTE_GROUPS.complementary} selected={quote.service} onToggle={toggleService}/>
                <div className="quote-next-row"><p>{quote.service.length} service{quote.service.length>1?'s':''} sélectionné{quote.service.length>1?'s':''}</p><button type="button" onClick={goToQuoteDetails}>Passer à l’étape suivante <ArrowRight/></button></div>
              </div>
              <div className={`quote-slide ${quoteStep===2?'active':'inactive-right'}`} aria-hidden={quoteStep!==2}>
                <div className="quote-details-heading"><button type="button" onClick={()=>setQuoteStep(1)}>← Modifier les services</button><span>COORDONNÉES</span><h3>À qui devons-nous adresser la proposition ?</h3><p>Les coordonnées sont obligatoires dès lors qu’une formule est sélectionnée.</p></div>
                <div className="quote-contact-grid"><Field label="Nom complet *" name="name" value={quote.name} onChange={(e)=>setQuote({...quote,name:e.target.value})} required/><Field label="Email professionnel *" name="email" type="email" value={quote.email} onChange={(e)=>setQuote({...quote,email:e.target.value})} required/><Field label="Téléphone / WhatsApp *" name="phone" value={quote.phone} onChange={(e)=>setQuote({...quote,phone:e.target.value})} required/><Field label="Entreprise / organisation" name="company" value={quote.company} onChange={(e)=>setQuote({...quote,company:e.target.value})}/><div><label>Budget approximatif</label><select value={quote.budget} onChange={(e)=>setQuote({...quote,budget:e.target.value})}><option value="">À définir ensemble</option><option>Moins de 100 000 FCFA</option><option>100 000 à 300 000 FCFA</option><option>300 000 à 700 000 FCFA</option><option>Plus de 700 000 FCFA</option></select></div><div><label>Délai souhaité</label><select value={quote.deadline} onChange={(e)=>setQuote({...quote,deadline:e.target.value})}><option value="">À définir</option><option>Dès que possible</option><option>1 à 2 mois</option><option>3 à 6 mois</option><option>Plus de 6 mois</option></select></div></div>
                <div className="quote-details"><label>Détails de votre projet <small>(optionnel)</small></label><textarea rows="5" value={quote.details} onChange={(e)=>setQuote({...quote,details:e.target.value})} placeholder="Objectifs, utilisateurs, fonctionnalités, contraintes, éléments déjà disponibles…"/></div>
                <label className="quote-consent"><input type="checkbox" required checked={quote.consent} onChange={(e)=>setQuote({...quote,consent:e.target.checked})}/><span>J’accepte que MCE utilise ces informations pour étudier ma demande. J’ai pris connaissance de la politique de confidentialité et des conditions générales de vente. Le devis devient contractuel uniquement après validation écrite des parties.</span></label>
                <div className="quote-submit-row quote-submit-final"><p>En envoyant ce formulaire, vos informations sont transmises à MCE uniquement dans le cadre de votre demande de devis.</p><button type="submit" disabled={quoteSending}>{quoteSending ? 'Envoi en cours…' : 'Envoyer ma demande de devis'} {!quoteSending && <ArrowRight/>}</button></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteCategory({ title, note, items, selected, onToggle, disabledValues=[], message, highlighted=false }) {
  return <fieldset className={`quote-category ${highlighted?'quote-category-highlighted':''}`}><legend><span>{title}</span><small>{note}</small></legend>{message&&<p className="quote-rule-message">{message}</p>}<div>{items.map(([value,label,price])=>{const disabled=disabledValues.includes(value);return <label key={value} className={`${selected.includes(value)?'selected':''} ${disabled?'disabled':''}`}><input type="checkbox" disabled={disabled} checked={selected.includes(value)} onChange={()=>onToggle(value)}/><span><CheckCircle2/></span><span><b>{label}</b><small>{price}</small></span></label>})}</div></fieldset>;
}

function Field({ label, name, type='text', value, onChange, required }) {
  return (
    <div>
      <label className="text-[12px] font-semibold text-mce-navy/80">{label}</label>
      <input type={type} name={name} required={required} value={value} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-[14px] focus:border-mce-teal focus:outline-none focus:ring-2 focus:ring-mce-teal/30 transition-colors" />
    </div>
  );
}
