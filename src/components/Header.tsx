import { Link } from "react-router-dom";
import { PenSquare } from "lucide-react";
export function Header() {
  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <PenSquare className="h-8 w-8 text-foreground/80 group-hover:text-foreground transition-colors" />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Clarity
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}