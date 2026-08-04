import React, { useEffect, useState } from 'react';
import { Mail, Scale, ShieldCheck } from 'lucide-react';

const HEADING_PATTERN = /^(Article\s+\d+(?:\.\d+)?|\d+\.|Préambule|Identification de l’entreprise|Disposition Légales Applicables)/i;

function formatBlock(block, index) {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
  const firstLine = lines[0] || '';
  const isHeading = HEADING_PATTERN.test(firstLine);

  if (isHeading) {
    return (
      <section className="legal-section" key={`${firstLine}-${index}`}>
        <h2>{firstLine}</h2>
        {lines.length > 1 && <p>{lines.slice(1).join('\n')}</p>}
      </section>
    );
  }

  return <p className="legal-paragraph" key={`${firstLine}-${index}`}>{lines.join('\n')}</p>;
}

export default function LegalDocument({ title, eyebrow, source, type = 'privacy' }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(source)
      .then((response) => {
        if (!response.ok) throw new Error('Document indisponible');
        return response.text();
      })
      .then((text) => active && setContent(text.replace(/^\uFEFF/, '').trim()))
      .catch(() => active && setError(true));
    return () => { active = false; };
  }, [source]);

  const blocks = content.split(/\r?\n\s*\r?\n/).filter(Boolean);
  const Icon = type === 'terms' ? Scale : ShieldCheck;

  return (
    <main className="legal-page pt-[72px]">
      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span><Icon />{eyebrow}</span>
          <h1>{title}</h1>
          <p>Consultez les informations applicables aux services et à l’utilisation du site de MCE Groupe.</p>
        </div>
      </header>

      <div className="legal-layout">
        <aside className="legal-aside">
          <Icon />
          <h2>Document officiel</h2>
          <p>Cette page présente le texte communiqué par MCE Groupe dans une mise en page adaptée à la lecture en ligne.</p>
          <a href="mailto:mceproagency@gmail.com"><Mail />mceproagency@gmail.com</a>
        </aside>

        <article className="legal-document">
          {error && <p className="legal-error">Le document ne peut pas être affiché pour le moment.</p>}
          {!error && !content && <p className="legal-loading">Chargement du document…</p>}
          {blocks.map(formatBlock)}
        </article>
      </div>
    </main>
  );
}

export function TermsPage() {
  return <LegalDocument title="Conditions Générales de Vente" eyebrow="CONDITIONS CONTRACTUELLES" source="/legal/conditions-generales-de-vente.txt" type="terms" />;
}

export function PrivacyPage() {
  return <LegalDocument title="Politique de Confidentialité" eyebrow="PROTECTION DES DONNÉES" source="/legal/politique-confidentialite.txt" />;
}
