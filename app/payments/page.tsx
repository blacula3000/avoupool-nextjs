"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, Search, Filter } from "lucide-react"
import { format } from "date-fns"
import { Logo } from "@/components/logo"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function PaymentsPage() {
  const [date, setDate] = useState(null)
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for payments
  const paymentsData = [
    { id: 1, member: "John Smith", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    { id: 2, member: "Maria Garcia", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Bank Transfer" },
    { id: 3, member: "David Lee", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    { id: 4, member: "Sarah Johnson", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Bank Transfer" },
    { id: 5, member: "Emma Wilson", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    { id: 6, member: "Michael Brown", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Bank Transfer" },
    { id: 7, member: "Sophia Martinez", date: "Mar 19, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    { id: 8, member: "James Taylor", date: "Mar 18, 2024", amount: 100, status: "Completed", method: "Bank Transfer" },
    { id: 9, member: "Olivia Anderson", date: "Mar 18, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    {
      id: 10,
      member: "William Thomas",
      date: "Mar 18, 2024",
      amount: 100,
      status: "Completed",
      method: "Bank Transfer",
    },
    { id: 11, member: "John Smith", date: "Mar 12, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    { id: 12, member: "Maria Garcia", date: "Mar 12, 2024", amount: 100, status: "Completed", method: "Bank Transfer" },
    { id: 13, member: "David Lee", date: "Mar 12, 2024", amount: 100, status: "Completed", method: "Credit Card" },
    {
      id: 14,
      member: "Sarah Johnson",
      date: "Mar 12, 2024",
      amount: 100,
      status: "Completed",
      method: "Bank Transfer",
    },
    { id: 15, member: "Emma Wilson", date: "Mar 12, 2024", amount: 100, status: "Completed", method: "Credit Card" },
  ]

  // Filter payments based on status
  const filteredPayments = paymentsData.filter((payment) => {
    if (statusFilter === "all") {
      return true
    } else {
      return payment.status.toLowerCase() === statusFilter.toLowerCase()
    }
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
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Payments
            </Link>
            <Link
              href="/schedule"
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
            <h1 className="text-2xl font-bold tracking-tight">Payment History</h1>
            <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <span className="relative z-10">Make Payment</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </div>

          <Card className="avou-card mb-6">
            <CardHeader>
              <CardTitle>All Payments</CardTitle>
              <CardDescription>View and track all member contributions to the pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search payments..." className="pl-8 bg-white border-gray-300" />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px] bg-white border-gray-300">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[240px] justify-start text-left font-normal border-gray-300 bg-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <Button variant="outline" size="icon" className="border-gray-300 bg-white">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="gap-2 border-gray-300 bg-white">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="rounded-md border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead>Member</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id} className="border-gray-200">
                        <TableCell className="font-medium">{payment.member}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                          >
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                  Showing <strong>{filteredPayments.length}</strong> of <strong>{paymentsData.length}</strong> payments
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled className="border-gray-300 bg-white">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 bg-white">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="avou-card">
              <CardHeader>
                <CardTitle>Your Payment History</CardTitle>
                <CardDescription>Track your personal contributions to the pool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Week 12</p>
                      <p className="text-sm text-gray-600">Mar 19, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">$100</div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Week 11</p>
                      <p className="text-sm text-gray-600">Mar 12, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">$100</div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Week 10</p>
                      <p className="text-sm text-gray-600">Mar 5, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">$100</div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Week 9</p>
                      <p className="text-sm text-gray-600">Feb 27, 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">$100</div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                      >
                        Completed
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-gray-300 bg-white">
                  View All Your Payments
                </Button>
              </CardContent>
            </Card>

            <Card className="avou-card">
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>Contribute your weekly amount to the pool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md bg-gray-50 p-4">
                    <div className="font-medium">Next Payment Due</div>
                    <p className="text-sm text-gray-600 mt-1">Week 13 - March 26, 2024</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="font-medium">Amount:</div>
                      <div className="text-xl font-bold text-avou">$100</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Payment Method</div>
                    <Select defaultValue="card">
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="mobile">Mobile Money</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                    <span className="relative z-10">Make Payment</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
