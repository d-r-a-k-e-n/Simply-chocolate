import Skeleton from "../../ui/skeleton/Skeleton";
import "../../ui/skeleton/skeleton.css";

export default function ResponseCardSkeleton() {
  return (
    <li className="skeleton-response-card">
      <Skeleton
        width={80}
        height={80}
        circle
        className="skeleton-response-card__avatar"
      />
      <Skeleton
        width="60%"
        height={18}
        borderRadius={10}
        className="skeleton-response-card__title"
      />
      <Skeleton
        width="100%"
        height={12}
        className="skeleton-response-card__text"
      />
      <Skeleton
        width="80%"
        height={12}
        className="skeleton-response-card__text"
      />
    </li>
  );
}
