
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export function SectionCard({
  title,
  description,
  icon,
  to,
  className,
  color = "primary"
}: SectionCardProps) {
  const bgColors = {
    primary: "bg-music-50 hover:bg-music-100 border-music-200",
    secondary: "bg-acoustic-50 hover:bg-acoustic-100 border-acoustic-200",
    accent: "bg-accent/10 hover:bg-accent/20 border-accent/30"
  };

  return (
    <Link 
      to={to}
      className={cn(
        "block rounded-xl border p-6 transition-all card-hover",
        bgColors[color],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
          color === "primary" ? "bg-music-100 text-music-700" :
          color === "secondary" ? "bg-acoustic-100 text-acoustic-700" :
          "bg-accent/20 text-accent"
        )}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium">
            <span className={cn(
              color === "primary" ? "text-music-600" :
              color === "secondary" ? "text-acoustic-600" :
              "text-accent"
            )}>
              Découvrir
            </span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
