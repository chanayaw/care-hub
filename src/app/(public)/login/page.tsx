import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-10">
      <PageHeader title="Login" description="Access your CareHub account." />

      <form className="space-y-4 rounded-lg border-4 border-stone-200 p-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className="placeholder-stone-300"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="• • • • • • • •"
            className="placeholder-stone-300"
          />
        </div>

        <Button type="submit">Log in</Button>
      </form>
    </main>
  );
}
