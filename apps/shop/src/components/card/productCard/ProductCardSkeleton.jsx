import Skeleton from "../../ui/skeleton/Skeleton";
import "../../ui/skeleton/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <li className="skeleton-product-card">
      <Skeleton
        width="100%"
        height={178}
        borderRadius={15}
        className="skeleton-product-card__image"
      />
      <Skeleton
        width="70%"
        height={18}
        borderRadius={10}
        className="skeleton-product-card__title"
      />
      <Skeleton
        width="55%"
        height={12}
        className="skeleton-product-card__text"
      />
      <Skeleton
        width={160}
        height={40}
        borderRadius={100}
        className="skeleton-product-card__button"
      />
    </li>
  );
}
