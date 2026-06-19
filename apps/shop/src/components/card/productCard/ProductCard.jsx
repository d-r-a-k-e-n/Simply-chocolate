import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
import Skeleton from "../../ui/skeleton/Skeleton";

import "./productCard.css";

export default function ProductCard({ title, photo, ingredient, prise, onBuy }) {
  const [isImageReady, setIsImageReady] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const hasPhoto = Boolean(photo);

  useEffect(() => {
    setIsImageReady(false);
    setHasImageError(false);
  }, [photo]);

  const showSkeleton = !hasPhoto || hasImageError || !isImageReady;

  return (
    <li className="products-section__item">
      {showSkeleton && (
        <Skeleton
          width="86.5%"
          height={178}
          borderRadius={15}
          className="products-section__item-img"
        />
      )}
      {hasPhoto && !hasImageError && (
        <img
          className="products-section__item-img"
          src={photo}
          alt={title}
          onLoad={() => setIsImageReady(true)}
          onError={() => setHasImageError(true)}
          hidden={!isImageReady}
        />
      )}
      <h3 className="products-section__item-title">{title}</h3>
      <p className="products-section__item-description">
        {ingredient} | {(prise / 100).toFixed(2)} $
      </p>
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
