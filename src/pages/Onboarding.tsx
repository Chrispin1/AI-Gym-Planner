import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../hooks/useAuth";

export default function Onboarding() {
  const { user } = useAuth();
  if (!user) {
    <RedirectToSignIn />;
  }
  return (
    <SignedIn>
      <div>Onboarding</div>;
    </SignedIn>
  );
}
