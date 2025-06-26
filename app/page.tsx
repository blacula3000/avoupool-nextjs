import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Shield, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-slate-50 dark:from-background dark:via-background dark:to-slate-950">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <span className="hidden font-bold sm:inline-block">Avou Community Pool</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/features" className="transition-colors hover:text-foreground/80">
                Features
              </Link>
              <Link href="/how-it-works" className="transition-colors hover:text-foreground/80">
                How It Works
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild variant="ghost" className="ml-auto">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="ml-2 relative overflow-hidden group">
                <Link href="/register">
                  <span className="relative z-10">Register</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex rounded-md px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
                    Modern Financial Community
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                    Avou Community Pool
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our rotating savings group where members contribute bi-weekly and each receives a lump sum
                    payout on a transparent, secure schedule.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                  >
                    <Link href="/register">
                      <span className="relative z-10">Join Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Card className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">How It Works</CardTitle>
                    <CardDescription>Our money pooling system is transparent and secure</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-medium leading-none">Bi-Weekly Contributions</p>
                        <p className="text-sm text-muted-foreground">
                          Each member contributes a fixed amount every two weeks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-medium leading-none">Rotating Payouts</p>
                        <p className="text-sm text-muted-foreground">
                          One member receives the full pool each cycle on a rotating basis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-medium leading-none">Complete Cycle</p>
                        <p className="text-sm text-muted-foreground">
                          After all cycles, every member will have received their payout
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                    >
                      <Link href="/register">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefits of Avou Community Pool
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community and experience the advantages of collective saving
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 mt-8">
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>No Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Unlike traditional loans, there's no interest to pay. You receive exactly what the group
                    contributes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Build relationships with other members while achieving your financial goals together.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Forced Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The regular contribution schedule helps you develop consistent saving habits.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Transparent System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our platform provides complete visibility into all contributions and payouts.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary mb-2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M8 11h8" />
                    <path d="M8 15h8" />
                    <path d="M11 8h2" />
                  </svg>
                  <CardTitle>Flexible Payout Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Payout order can be adjusted based on member needs and group consensus.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary mb-2"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <CardTitle>Digital Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track your contributions, upcoming payouts, and pool status from any device.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Growing Community
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the power of collective saving with Avou Community Pool
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                >
                  <Link href="/register">
                    <span className="relative z-10">Get Started Today</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">A</span>
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Avou Community Pool. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="underline underline-offset-4 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
