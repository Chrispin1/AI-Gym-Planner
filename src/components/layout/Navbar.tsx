import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../hooks/useAuth";
import { UserButton } from "@neondatabase/neon-js/auth/react";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="border-b border-border fixed top-0 left-0 backdrop-blur-md bg-background/50 w-full z-50">
      <div className="flex items-center justify-between h-16 mx-auto px-4 md:px-20">
        <Link to="/" className="flex items-center gap-2 ">
          <Dumbbell className="w-8 h-8 text-accent" />
          <span className="font-bold font-grotesque text-md md:text-xl">
            GymAI
          </span>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center">
              <Link to="/profile">
                <Button size="sm" className="font-grotesque text-md md:text-lg">
                  My Plans
                </Button>
              </Link>
              <UserButton className="bg-accent ml-2 my-1 h-8 md:h-12 md:ml-4 md:my-4 font-grotesque " />
            </div>
          ) : (
            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/auth/sign-in">
                <Button size="sm" variant="secondary">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
