import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  className?: string;
}

export function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <span className={cn("placeholder-field", className)}>{label}</span>
  );
}
