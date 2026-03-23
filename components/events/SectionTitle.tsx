type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h1
      className="font-black text-[#0d1b2a] leading-tight"
      style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
    >
      {title}
    </h1>
  );
}