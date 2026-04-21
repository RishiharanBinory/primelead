
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
   <div className="min-h-[calc(100vh-64px)] max-h-[860px] w-full relative bg-white">
  {/* Cool Blue Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
     <div>
        Hello world
     </div>
</div>

  );
};

export default Component;