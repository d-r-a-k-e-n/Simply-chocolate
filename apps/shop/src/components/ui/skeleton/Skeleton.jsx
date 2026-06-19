import "./skeleton.css";

export default function Skeleton({
  width = "100%",
  height = 12,
  borderRadius = 8,
  circle = false,
  className = "",
  style,
  count = 1,
}) {
  const skeletonStyle = {
    width,
    height,
    borderRadius: circle ? "50%" : borderRadius,
    ...style,
  };

  if (count === 1) {
    return (
      <span
        className={`skeleton ${className}`.trim()}
        style={skeletonStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={`skeleton ${className}`.trim()}
          style={skeletonStyle}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
