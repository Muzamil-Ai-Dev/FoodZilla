import { LoginForm } from "@/components/features/auth/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Log in to your FoodZilla account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-secondary/30 py-20 px-4">
      <LoginForm />
      <p className="text-center mt-8 text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-brand-primary font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
