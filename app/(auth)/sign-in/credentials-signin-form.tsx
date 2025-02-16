"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { signInDefaultValues } from "@/lib/constants";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} variant="default" className="w-full">
        { pending? "Signing... In": "Sign In" }
      </Button>
    );
  };
  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <input type="hidden" name="callbackUrl" value={callbackUrl} />
          <Label htmlFor="email">Email</Label>
          <Input
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
          <Label htmlFor="password">password</Label>
          <Input
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
            <SignInButton/>
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        {/* 注册 */}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account ?{" "}
          <Link href="/sign-up" target="_self" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
