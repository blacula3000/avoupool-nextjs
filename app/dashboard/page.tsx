"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Bell,
  CalendarDays,
  CreditCard,
  DollarSign,
  MessageSquare,
  Users,
  ChevronRight,
  Clock,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { NotificationCenter } from "@/components/notification-center"
import { Logo } from "@/components/logo"

export default function DashboardPage() {
  const [progress, setProgress] = useState(24)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Mock data for the dashboard
  const poolData = {
    totalMembers: 50,
    biWeeklyContribution: 200,
    totalPool: 10000,
    currentCycle: 12,
    totalCycles: 25,
    nextPayout: "April 2, 2024",
    myPosition: 18,
    myContributions: 2400,
    myPayout: "August 13, 2024",
    recentPayments: [
      { id: 1, member: "John Smith", date: "March 19, 2024", amount: 200, status: "Completed" },
      { id: 2, member: "Maria Garcia", date: "March 19, 2024", amount: 200, status: "Completed" },
      { id: 3, member: "David Lee", date: "March 19, 2024", amount: 200, status: "Completed" },
      { id: 4, member: "Sarah Johnson", date: "March 18, 2024", amount: 200, status: "Completed" },
    ],
    upcomingRecipients: [
      { position: 13, name: "Emma Wilson", date: "March 26, 2024" },
      { position: 14, name: "Michael Brown", date: "April 9, 2024" },
      { position: 15, name: "Sophia Martinez", date: "April 23, 2024" },
      { position: 16, name: "James Taylor", date: "May 7, 2024" },
    ],
    notifications: [
      {
        id: 1,
        title: "Payment Due",
        message: "Your bi-weekly contribution of $200 is due in 2 days",
        time: "2 hours ago",
        read: false,
      },
      { id: 2, title: "New Member", message: "Sarah Johnson has joined the pool", time: "1 day ago", read: true },
      {
        id: 3,
        title: "Payout Completed",
        message: "Maria Garcia has received her payout of $10,000",
        time: "2 days ago",
        read: true,
      },
      {
        id: 4,
        title: "System Update",
        message: "We've added new payment methods to the platform",
        time: "3 days ago",
        read: true,
      },
    ],
    pendingPools: [
      { id: 1, name: "Summer 2024 Pool", startDate: "June 1, 2024", position: 22 },
      { id: 2, name: "Fall 2024 Pool", startDate: "September 15, 2024", position: 15 },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="sticky top-0 z-50 w-full avou-header">
        <div className="container flex h-16 items-center">
          <Logo className="mr-6" />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="sr-only">Notifications</span>
              </Button>
              {notificationsOpen && <NotificationCenter notifications={poolData.notifications} />}
            </div>
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] py-6">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px] avou-sidebar">
          <nav className="grid items-start gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-avou/10 px-3 py-2 text-avou font-medium"
            >
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
                className="h-4 w-4"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              Dashboard
            </Link>
            <Link
              href="/payments"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
              <CreditCard className="h-4 w-4" />
              Payments
            </Link>
            <Link
              href="/schedule"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Schedule
            </Link>
            <Link
              href="/members"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
              <Users className="h-4 w-4" />
              Members
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Community Chat
            </Link>
            <Link
              href="/pending-pools"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
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
                className="h-4 w-4"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Pending Pools
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 hover:text-black transition-colors"
            >
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
                className="h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Profile
            </Link>
          </nav>
        </aside>
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <span className="relative z-10">Make Payment</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="avou-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Pool</CardTitle>
                <DollarSign className="h-4 w-4 text-avou" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${poolData.totalPool}</div>
                <p className="text-xs text-gray-600">
                  ${poolData.biWeeklyContribution} × {poolData.totalMembers} members
                </p>
              </CardContent>
            </Card>
            <Card className="avou-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Contributions</CardTitle>
                <CreditCard className="h-4 w-4 text-avou" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${poolData.myContributions}</div>
                <p className="text-xs text-gray-600">
                  ${poolData.biWeeklyContribution} × {poolData.currentCycle} cycles
                </p>
              </CardContent>
            </Card>
            <Card className="avou-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pool Progress</CardTitle>
                <CalendarDays className="h-4 w-4 text-avou" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  Cycle {poolData.currentCycle}/{poolData.totalCycles}
                </div>
                <Progress value={(poolData.currentCycle / poolData.totalCycles) * 100} className="mt-2 bg-gray-100" />
              </CardContent>
            </Card>
            <Card className="avou-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Position</CardTitle>
                <Users className="h-4 w-4 text-avou" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#{poolData.myPosition}</div>
                <p className="text-xs text-gray-600">Payout on {poolData.myPayout}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
            <Card className="lg:col-span-4 avou-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Pool Schedule</CardTitle>
                    <CardDescription>Next payout: {poolData.nextPayout}</CardDescription>
                  </div>
                  <Link href="/schedule">
                    <Button variant="ghost" size="sm" className="gap-1 text-gray-600 hover:text-black">
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Current Progress</div>
                      <div className="text-gray-600">
                        {poolData.currentCycle}/{poolData.totalCycles} cycles
                      </div>
                    </div>
                    <Progress value={(poolData.currentCycle / poolData.totalCycles) * 100} className="bg-gray-100" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Upcoming Recipients</h4>
                    <div className="space-y-3">
                      {poolData.upcomingRecipients.map((recipient) => (
                        <div
                          key={recipient.position}
                          className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-avou/20 text-avou">
                              {recipient.position}
                            </div>
                            <div>
                              <div className="font-medium">{recipient.name}</div>
                              <div className="text-xs text-gray-600">Cycle #{recipient.position}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-gray-600" />
                            <div className="text-sm text-gray-600">{recipient.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 avou-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Payments</CardTitle>
                    <CardDescription>Latest member contributions</CardDescription>
                  </div>
                  <Link href="/payments">
                    <Button variant="ghost" size="sm" className="gap-1 text-gray-600 hover:text-black">
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {poolData.recentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 bg-gray-100">
                          <AvatarFallback className="bg-gray-100 text-gray-700">
                            {payment.member
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{payment.member}</p>
                          <p className="text-xs text-gray-600">{payment.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`text-sm ${payment.status === "Completed" ? "text-green-600" : "text-amber-600"}`}
                        >
                          ${payment.amount}
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            payment.status === "Completed"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-gray-300 bg-white hover:bg-gray-50">
                  <Link href="/payments">View All Payments</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <Card className="avou-card">
              <CardHeader>
                <CardTitle>Your Payment Status</CardTitle>
                <CardDescription>Track your contributions and upcoming payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="contributions">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                    <TabsTrigger
                      value="contributions"
                      className="data-[state=active]:bg-avou data-[state=active]:text-black"
                    >
                      My Contributions
                    </TabsTrigger>
                    <TabsTrigger value="payout" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                      My Payout
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="contributions" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Total Contributed</div>
                        <div className="font-bold text-avou">${poolData.myContributions}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Bi-Weekly Contribution</div>
                        <div className="text-avou">${poolData.biWeeklyContribution}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Next Payment Due</div>
                        <div>March 26, 2024</div>
                      </div>
                    </div>
                    <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                      <span className="relative z-10">Make This Cycle's Payment</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </TabsContent>
                  <TabsContent value="payout" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Your Position</div>
                        <div className="font-bold">#{poolData.myPosition}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Expected Payout Date</div>
                        <div>{poolData.myPayout}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Payout Amount</div>
                        <div className="text-avou">${poolData.totalPool}</div>
                      </div>
                    </div>
                    <div className="rounded-md bg-gray-50 p-4">
                      <div className="font-medium">Payout Progress</div>
                      <Progress
                        value={(poolData.currentCycle / poolData.myPosition) * 100}
                        className="mt-2 bg-gray-200"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        {Math.max(0, poolData.myPosition - poolData.currentCycle)} cycles until your payout
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="avou-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Pending Pools</CardTitle>
                    <CardDescription>Upcoming pools you've registered for</CardDescription>
                  </div>
                  <Link href="/pending-pools">
                    <Button variant="ghost" size="sm" className="gap-1 text-gray-600 hover:text-black">
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {poolData.pendingPools.length > 0 ? (
                  <div className="space-y-4">
                    {poolData.pendingPools.map((pool) => (
                      <div key={pool.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-avou/20 text-avou">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">{pool.name}</div>
                            <div className="text-xs text-gray-600">Starts: {pool.startDate}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 mb-1">
                            Position #{pool.position}
                          </Badge>
                          <Link href={`/pending-pools?id=${pool.id}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 gap-1 text-xs text-gray-600 hover:text-black"
                            >
                              <span>Details</span>
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <Calendar className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-sm font-medium">No Pending Pools</h3>
                    <p className="text-sm text-gray-600 mt-1 max-w-xs">
                      You haven't registered for any upcoming pools yet.
                    </p>
                    <Button asChild className="mt-4 relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                      <Link href="/pending-pools">
                        <span className="relative z-10">Browse Pending Pools</span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
