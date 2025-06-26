"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Avou Community Pool</h1>
          <p className="text-sm text-muted-foreground">Create an account to join our Avou Community Pool</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>Enter your details to create your account</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                  terms and conditions
                </Link>
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black" asChild>
              <Link href="/dashboard">
                <span className="relative z-10">Create Account</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
