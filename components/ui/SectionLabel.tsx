export function SectionLabel({
  children,
  onDark = false,
}: {
  children: string;
  onDark?: boolean;
}) {
  return <p className={onDark ? "kicker kicker-on-dark" : "kicker"}>{children}</p>;
}
