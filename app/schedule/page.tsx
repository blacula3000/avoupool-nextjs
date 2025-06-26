"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import { Logo } from "@/components/logo"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function SchedulePage() {
  const [cycleFilter, setCycleFilter] = useState("current")

  // Mock data for the schedule
  const scheduleData = Array.from({ length: 50 }, (_, i) => {
    const weekNumber = i + 1
    const date = new Date(2024, 0, 9) // Jan 9, 2024 as start date
    date.setDate(date.getDate() + (weekNumber - 1) * 7) // Add weeks

    return {
      position: weekNumber,
      member: `Member ${weekNumber}`,
      date: date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      amount: 5000,
      status: weekNumber <= 24 ? "Completed" : "Pending",
    }
  })

  // Replace some generic names with actual names
  const memberNames = {
    12: "John Smith",
    8: "Maria Garcia",
    24: "David Lee",
    35: "Sarah Johnson",
    25: "Emma Wilson",
    26: "Michael Brown",
    27: "Sophia Martinez",
    28: "James Taylor",
    42: "Olivia Anderson",
    15: "William Thomas",
  }

  Object.entries(memberNames).forEach(([position, name]) => {
    scheduleData[Number.parseInt(position) - 1].member = name
  })

  // Filter schedule based on cycle
  const filteredSchedule = scheduleData.filter((item) => {
    if (cycleFilter === "current") {
      return true // Show all for current cycle
    } else if (cycleFilter === "completed") {
      return item.status === "Completed"
    } else if (cycleFilter === "pending") {
      return item.status === "Pending"
    }
    return true
  })

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <header className="sticky top-0 z-50 w-full avou-header">
        <div className="container flex h-16 items-center">
          <Logo className="mr-6" />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] py-6">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px] avou-sidebar">
          <nav className="grid items-start gap-2">
            <Link
              href="/dashboard"
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
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Payments
            </Link>
            <Link
              href="/schedule"
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              Schedule
            </Link>
            <Link
              href="/members"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Members
            </Link>
            <Link
              href="/chat"
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
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
            <h1 className="text-2xl font-bold tracking-tight">Payout Schedule</h1>
            <div className="flex items-center gap-2">
              <Select value={cycleFilter} onValueChange={setCycleFilter}>
                <SelectTrigger className="w-[180px] bg-white border-gray-300">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">All Weeks</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 border-gray-300 bg-white">
                <CalendarDays className="h-4 w-4" />
                Calendar View
              </Button>
            </div>
          </div>

          <Card className="avou-card">
            <CardHeader>
              <CardTitle>Weekly Payout Schedule</CardTitle>
              <CardDescription>Complete schedule of all 50 payouts in the current cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead>Week</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchedule.map((item) => (
                      <TableRow key={item.position} className="border-gray-200">
                        <TableCell className="font-medium">#{item.position}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.member}</TableCell>
                        <TableCell>${item.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              item.status === "Completed"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                                : "bg-amber-50 text-amber-700 hover:bg-amber-50 hover:text-amber-700 border-amber-200"
                            }
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 rounded-md bg-gray-50 p-4">
                <h3 className="font-medium mb-2">About the Schedule</h3>
                <p className="text-sm text-gray-600">
                  The payout schedule determines when each member receives their lump sum payment. The order was
                  determined at the beginning of the cycle based on member preferences and needs. Any changes to the
                  schedule must be approved by all members.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
