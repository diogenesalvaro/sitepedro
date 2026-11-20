import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { LOGO_URL } from "../data/constants";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-24 w-24",
    xl: "w-full max-w-xl"
  };

  if (error) {
    return (
      <div className={`${sizeClasses[size]} bg-brand-yellow rounded-full flex items-center justify-center border-2 border-brand-black shadow-lg ${className}`}>
        <ShieldCheck className="text-brand-black w-2/3 h-2/3" />
      </div>
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="Vade Concursos"
      onError={() => setError(true)}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
