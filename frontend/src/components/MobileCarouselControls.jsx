import React from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

export default function MobileCarouselControls({ targetId }) {
  const move = (direction) => {
    const track = document.getElementById(targetId);
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: 'smooth' });
  };

  return (
    <div className="mobile-carousel-controls" aria-label="Commandes du carrousel">
      <button type="button" onClick={() => move(-1)} aria-label="Afficher l’élément précédent"><ChevronLeft /></button>
      <span><MoveHorizontal /> Faites défiler</span>
      <button type="button" onClick={() => move(1)} aria-label="Afficher l’élément suivant"><ChevronRight /></button>
    </div>
  );
}
