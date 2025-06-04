import UserAuthCard from "@/components/UserAuthCard";

export default function LoginUserPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <UserAuthCard
        title="Citizen Login"
        subtitle="Sign in to your account"
        buttonText="Sign In"
        showSwitchLink={true}
        switchText="Don't have an account?"
        switchHref="/signup-user"
      />
    </main>
  );
}