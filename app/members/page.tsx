"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Logo } from "@/components/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for members
  const members = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      joinDate: "Jan 10, 2024",
      position: 12,
      status: "Active",
      payoutDate: "Mar 12, 2024",
      verified: true,
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      joinDate: "Jan 10, 2024",
      position: 8,
      status: "Active",
      payoutDate: "Feb 13, 2024",
      verified: true,
    },
    {
      id: 3,
      name: "David Lee",
      email: "david.lee@example.com",
      joinDate: "Jan 10, 2024",
      position: 24,
      status: "Active",
      payoutDate: "Jun 4, 2024",
      verified: true,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      joinDate: "Jan 10, 2024",
      position: 35,
      status: "Active",
      payoutDate: "Aug 20, 2024",
      verified: true,
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      joinDate: "Jan 10, 2024",
      position: 25,
      status: "Active",
      payoutDate: "Jun 11, 2024",
      verified: true,
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      joinDate: "Jan 10, 2024",
      position: 26,
      status: "Active",
      payoutDate: "Jun 18, 2024",
      verified: false,
    },
    {
      id: 7,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      joinDate: "Jan 10, 2024",
      position: 27,
      status: "Active",
      payoutDate: "Jun 25, 2024",
      verified: true,
    },
    {
      id: 8,
      name: "James Taylor",
      email: "james.taylor@example.com",
      joinDate: "Jan 10, 2024",
      position: 28,
      status: "Active",
      payoutDate: "Jul 2, 2024",
      verified: true,
    },
    {
      id: 9,
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      joinDate: "Jan 10, 2024",
      position: 42,
      status: "Active",
      payoutDate: "Oct 8, 2024",
      verified: false,
    },
    {
      id: 10,
      name: "William Thomas",
      email: "william.thomas@example.com",
      joinDate: "Jan 10, 2024",
      position: 15,
      status: "Active",
      payoutDate: "Apr 2, 2024",
      verified: true,
    },
  ]

  // Filter members based on search query and status
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "verified" && member.verified) ||
      (statusFilter === "unverified" && !member.verified)

    return matchesSearch && matchesStatus
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
            <h1 className="text-2xl font-bold tracking-tight">Members</h1>
            <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <span className="relative z-10">Invite Member</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </div>

          <Card className="avou-card">
            <CardHeader>
              <CardTitle>Pool Members</CardTitle>
              <CardDescription>View all 50 members participating in the current Avou Community Pool</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search members..."
                    className="pl-8 bg-white border-gray-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-[180px] bg-white border-gray-300">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Members</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="unverified">Unverified</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon" className="border-gray-300 bg-white">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-md border border-gray-200">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead>Member</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Payout Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Verification</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map((member) => (
                      <TableRow key={member.id} className="border-gray-200">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9 bg-gray-100">
                              <AvatarFallback className="bg-gray-100 text-gray-700">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-xs text-gray-600">{member.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>#{member.position}</TableCell>
                        <TableCell>{member.payoutDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                          >
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {member.verified ? (
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                            >
                              Verified
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-amber-50 text-amber-700 hover:bg-amber-50 hover:text-amber-700 border-amber-200"
                            >
                              Pending
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View profile</DropdownMenuItem>
                              <DropdownMenuItem>View payment history</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Send message</DropdownMenuItem>
                              {!member.verified && <DropdownMenuItem>Verify member</DropdownMenuItem>}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                  Showing <strong>{filteredMembers.length}</strong> of <strong>{members.length}</strong> members
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
        </main>
      </div>
    </div>
  )
}
