import UserAuthCard from "@/components/UserAuthCard";

export default function SignupUserPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <UserAuthCard
        title="Citizen Signup"
        subtitle="Create your account"
        buttonText="Sign Up"
        showName={true}
        showSwitchLink={true}
        switchText="Already have an account?"
        switchHref="/login-user"
      />
    </main>
  );
}