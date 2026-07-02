type StarsProps = {
  rating: 1 | 2 | 3 | 4 | 5;
};

/**
 * Five-star rating, accessible to screen readers via a single label.
 * Individual stars are aria-hidden so they aren't read one at a time.
 */
export function Stars({ rating }: StarsProps) {
  return (
    <span
      className="inline-flex gap-1 text-sm leading-none"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < rating ? "text-clay" : "text-[#d8d2c6]"}
        >
          ★
        </span>
      ))}
    </span>
  );
}
