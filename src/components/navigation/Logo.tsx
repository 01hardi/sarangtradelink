
import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      aria-label="Logo"
      className="flex items-center justify-center h-12 md:h-16"
      style={{ lineHeight: 0 }}
    >
      <img
        src="/lovable-uploads/cb28afbe-20b6-4ebc-826b-a2587f840738.png"
        alt="TTC Logo"
        className="h-8 md:h-10 w-auto"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default Logo;
