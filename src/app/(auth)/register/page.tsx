import { RegisterForm } from "@/components/features/auth/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register",
  description: "Create a FoodZilla account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-brand-secondary/30 py-20 px-4">
      <RegisterForm />
      <p className="text-center mt-8 text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-primary font-bold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
