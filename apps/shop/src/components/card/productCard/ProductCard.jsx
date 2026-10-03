import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button';
import Skeleton from '../../ui/skeleton/Skeleton';

import './productCard.css';

export default function ProductCard({
  title,
  photo,
  ingredient,
  prise,
  onBuy,
  to,
}) {
  const [isImageReady, setIsImageReady] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const hasPhoto = Boolean(photo);

  useEffect(() => {
    setHasImageError(false);

    if (!photo) {
      setIsImageReady(false);
      return undefined;
    }

    let cancelled = false;
    const preload = new Image();

    preload.onload = () => {
      if (!cancelled) setIsImageReady(true);
    };
    preload.onerror = () => {
      if (!cancelled) {
        setIsImageReady(false);
        setHasImageError(true);
      }
    };
    preload.src = photo;

    if (preload.complete && preload.naturalWidth > 0) {
      setIsImageReady(true);
    } else {
      setIsImageReady(false);
    }

    return () => {
      cancelled = true;
    };
  }, [photo]);

  const showSkeleton = !hasPhoto || hasImageError || !isImageReady;

  const media = (
    <>
      <div className="products-section__item-media">
        {showSkeleton && (
          <Skeleton
            width="100%"
            height="100%"
            borderRadius={15}
            className="products-section__item-skeleton"
          />
        )}
        {hasPhoto && !hasImageError && (
          <img
            className={`products-section__item-img${isImageReady ? ' products-section__item-img--ready' : ''}`}
            src={photo}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <h3 className="products-section__item-title">{title}</h3>
      <p className="products-section__item-description">
        {ingredient} | {(prise / 100).toFixed(2)} $
      </p>
    </>
  );

  return (
    <li className="products-section__item">
      {to ? (
        <Link to={to} className="products-section__item-link">
          {media}
        </Link>
      ) : (
        media
      )}
      <Button
        variant="outline"
        className="products-section__item-btn"
        onClick={onBuy}
      >
        Buy
      </Button>
    </li>
  );
}
