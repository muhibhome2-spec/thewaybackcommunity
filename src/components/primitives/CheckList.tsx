import { Tick } from "./Tick";

type CheckListProps = {
  items: readonly string[];
  /** Visual rhythm of the items. */
  size?: "md" | "lg";
  className?: string;
};

/**
 * A list of statements each marked with a brand tick. Used in the
 * "future", "for-you", and pricing-includes blocks.
 */
export function CheckList({ items, size = "lg", className }: CheckListProps) {
  const item =
    size === "lg"
      ? "text-list font-light leading-snug"
      : "text-[19px] font-light leading-snug";

  return (
    <ul className={["grid gap-4 list-none m-0 p-0", className].filter(Boolean).join(" ")}>
      {items.map((text) => (
        <li
          key={text}
          className={`flex items-start gap-4 ${item}`}
        >
          <span aria-hidden="true" className="mt-[6px] flex-none text-clay">
            <Tick />
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
