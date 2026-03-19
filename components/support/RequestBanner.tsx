// components/mainComponents/RequestBanner.tsx

type Props = {
  text?: string;
};

export default function RequestBanner({ text = "REQUEST" }: Props) {
  return (
    <div className="w-full overflow-hidden">
      {/* Yellow space above */}
      <div style={{ backgroundColor: "#FFC501", height: "clamp(40px, 8vw, 120px)" }} />

      {/* Text centered on yellow/white boundary */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(to bottom, #FFC501 50%, #ffffff 50%)",
        }}
      >
        <h1
          className="w-full text-center font-black leading-none m-0 p-0"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(50px, 15vw, 200px)",
            fontWeight: 900,
            color: "#292929",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          {text}
        </h1>
      </div>

      {/* White space below */}
      <div style={{ backgroundColor: "#ffffff", height: "clamp(20px, 4vw, 60px)" }} />
    </div>
  );
}