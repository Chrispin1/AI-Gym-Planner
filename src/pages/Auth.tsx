import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { pathname } = useParams();
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="max-w-md w-full">
        <AuthView pathname={pathname} />
      </div>
    </div>
  );
}
