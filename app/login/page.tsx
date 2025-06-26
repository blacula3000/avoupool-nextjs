"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background via-background to-slate-50 dark:from-background dark:via-background dark:to-slate-950">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">A</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Avou Community Pool</h1>
          <p className="text-sm text-muted-foreground">Access your community savings account</p>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="data-[state=active]:bg-avou data-[state=active]:text-black">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-avou data-[state=active]:text-black">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Sign In</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black" asChild>
                  <Link href="/dashboard">
                    <span className="relative z-10">Sign In</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Create Account</CardTitle>
                <CardDescription>Join our community savings pool</CardDescription>
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
                  <Link href="/verification">
                    <span className="relative z-10">Create Account</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
