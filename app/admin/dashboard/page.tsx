"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  AlertTriangle,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  FileText,
  Users,
  UserCheck,
  Bell,
} from "lucide-react"
import { UserNav } from "@/components/user-nav"

export default function AdminDashboardPage() {
  // Mock data for the admin dashboard
  const adminData = {
    totalMembers: 50,
    activeMembers: 48,
    pendingVerifications: 3,
    totalContributions: 24000,
    missedPayments: 2,
    nextPayout: {
      member: "Emma Wilson",
      position: 13,
      date: "March 26, 2024",
      amount: 10000,
    },
    recentActivities: [
      { id: 1, type: "payment", user: "John Smith", action: "made a payment", amount: 200, time: "2 hours ago" },
      {
        id: 2,
        type: "verification",
        user: "Olivia Anderson",
        action: "submitted verification documents",
        time: "5 hours ago",
      },
      { id: 3, type: "payout", user: "Maria Garcia", action: "received payout", amount: 10000, time: "1 day ago" },
      { id: 4, type: "registration", user: "William Thomas", action: "joined the pool", time: "2 days ago" },
    ],
    pendingVerificationUsers: [
      {
        id: 1,
        name: "Michael Brown",
        email: "michael.brown@example.com",
        submitted: "Mar 15, 2024",
        documents: ["ID Card", "Proof of Address"],
      },
      {
        id: 2,
        name: "Olivia Anderson",
        email: "olivia.anderson@example.com",
        submitted: "Mar 18, 2024",
        documents: ["Passport", "Utility Bill"],
      },
      {
        id: 3,
        name: "Robert Johnson",
        email: "robert.johnson@example.com",
        submitted: "Mar 19, 2024",
        documents: ["Driver's License", "Bank Statement"],
      },
    ],
    upcomingPayouts: [
      { position: 13, name: "Emma Wilson", date: "March 26, 2024", amount: 10000 },
      { position: 14, name: "Michael Brown", date: "April 9, 2024", amount: 10000 },
      { position: 15, name: "Sophia Martinez", date: "April 23, 2024", amount: 10000 },
    ],
    missedPaymentUsers: [
      {
        id: 1,
        name: "Daniel Wilson",
        email: "daniel.wilson@example.com",
        dueDate: "Mar 19, 2024",
        amount: 200,
        daysMissed: 2,
      },
      {
        id: 2,
        name: "Jennifer Lopez",
        email: "jennifer.lopez@example.com",
        dueDate: "Mar 19, 2024",
        amount: 200,
        daysMissed: 2,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="hidden font-bold sm:inline-block">Avou Community Pool</span>
            <Badge variant="secondary">Admin</Badge>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link href="/admin/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link
              href="/admin/members"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Members
            </Link>
            <Link
              href="/admin/payments"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Payments
            </Link>
            <Link
              href="/admin/verifications"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Verifications
            </Link>
            <Link
              href="/admin/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Settings
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              <span>Generate Report</span>
            </Button>
            <Button className="gap-2 relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <span className="relative z-10">Export Data</span>
              <Download className="h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminData.totalMembers}</div>
              <p className="text-xs text-muted-foreground">
                {adminData.activeMembers} active, {adminData.pendingVerifications} pending verification
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contributions</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${adminData.totalContributions}</div>
              <p className="text-xs text-muted-foreground">From {adminData.activeMembers} active members</p>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
              <UserCheck className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminData.pendingVerifications}</div>
              <p className="text-xs text-muted-foreground">Requires your review</p>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Missed Payments</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminData.missedPayments}</div>
              <p className="text-xs text-muted-foreground">Requires follow-up</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7 mt-6">
          <Card className="md:col-span-4 bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Monitor all member activities</CardDescription>
                </div>
                <Link href="/admin/activity">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <span>View All</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {adminData.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{activity.user}</div>
                        <div className="text-xs text-muted-foreground">
                          {activity.action}
                          {activity.amount && ` ($${activity.amount})`}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-3 bg-background/80 backdrop-blur-sm border-none shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Next Payout</CardTitle>
                  <CardDescription>Scheduled for {adminData.nextPayout.date}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {adminData.nextPayout.member
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-lg">{adminData.nextPayout.member}</div>
                      <div className="text-sm text-muted-foreground">Position #{adminData.nextPayout.position}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold">${adminData.nextPayout.amount}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium">Time until payout</div>
                    <div className="text-muted-foreground">7 days remaining</div>
                  </div>
                  <Progress value={70} />
                </div>

                <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                  <span className="relative z-10">Prepare Payout</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Tabs defaultValue="verifications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="verifications" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                Pending Verifications
              </TabsTrigger>
              <TabsTrigger value="payouts" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                Upcoming Payouts
              </TabsTrigger>
              <TabsTrigger value="missed" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                Missed Payments
              </TabsTrigger>
            </TabsList>
            <TabsContent value="verifications" className="mt-4">
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                <CardHeader>
                  <CardTitle>Pending Verifications</CardTitle>
                  <CardDescription>Review and approve member identity verifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adminData.pendingVerificationUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                            <div className="text-xs mt-1">
                              <span className="text-muted-foreground">Documents: </span>
                              {user.documents.join(", ")}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                          >
                            <span className="relative z-10">Approve</span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payouts" className="mt-4">
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                <CardHeader>
                  <CardTitle>Upcoming Payouts</CardTitle>
                  <CardDescription>Schedule and manage upcoming member payouts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adminData.upcomingPayouts.map((payout) => (
                      <div
                        key={payout.position}
                        className="flex items-center justify-between bg-muted/50 p-3 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {payout.position}
                          </div>
                          <div>
                            <div className="font-medium">{payout.name}</div>
                            <div className="text-xs text-muted-foreground">Scheduled for {payout.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-base font-medium">${payout.amount}</div>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="missed" className="mt-4">
              <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                <CardHeader>
                  <CardTitle>Missed Payments</CardTitle>
                  <CardDescription>Follow up with members who have missed payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adminData.missedPaymentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                            <div className="text-xs mt-1">
                              <span className="text-muted-foreground">Due date: </span>
                              {user.dueDate} <span className="text-amber-500">({user.daysMissed} days overdue)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-base font-medium text-amber-500">${user.amount}</div>
                          <Button
                            size="sm"
                            className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                          >
                            <span className="relative z-10">Send Reminder</span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
