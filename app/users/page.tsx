"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, MessageSquare, Eye } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Logo } from "@/components/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for users
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 12,
      verified: true,
      lastActive: "2 hours ago",
      bio: "Financial advisor with 10+ years experience",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 8,
      verified: true,
      lastActive: "1 day ago",
      bio: "Small business owner and entrepreneur",
    },
    {
      id: 3,
      name: "David Lee",
      email: "david.lee@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 24,
      verified: true,
      lastActive: "3 days ago",
      bio: "Software engineer and tech enthusiast",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 35,
      verified: true,
      lastActive: "5 hours ago",
      bio: "Marketing specialist and community organizer",
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 25,
      verified: true,
      lastActive: "Just now",
      bio: "Community manager and financial planner",
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 26,
      verified: false,
      lastActive: "2 weeks ago",
      bio: "Real estate agent and investor",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 27,
      verified: true,
      lastActive: "1 hour ago",
      bio: "Healthcare professional and community volunteer",
    },
    {
      id: 8,
      name: "James Taylor",
      email: "james.taylor@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 28,
      verified: true,
      lastActive: "12 hours ago",
      bio: "Accountant and financial literacy advocate",
    },
    {
      id: 9,
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      role: "Member",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 42,
      verified: false,
      lastActive: "1 week ago",
      bio: "Teacher and education professional",
    },
    {
      id: 10,
      name: "William Thomas",
      email: "william.thomas@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "Jan 10, 2024",
      position: 15,
      verified: true,
      lastActive: "4 hours ago",
      bio: "Financial consultant and community pool organizer",
    },
  ]

  // Filter users based on search query and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.bio.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "verified" && user.verified) ||
      (statusFilter === "unverified" && !user.verified)

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
              href="/users"
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
              Community Users
            </Link>
            <Link
              href="/announcements"
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
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" x2="12" y1="9" y2="13" />
                <line x1="12" x2="12.01" y1="17" y2="17" />
              </svg>
              Announcements
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
            <h1 className="text-2xl font-bold tracking-tight">Community Users</h1>
            <div className="flex items-center gap-2">
              <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                <span className="relative z-10">Connect with Members</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>

          <Card className="avou-card">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Community Members</CardTitle>
                  <CardDescription>Connect with other members of the Avou Community Pool</CardDescription>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search members..."
                      className="pl-8 bg-white border-gray-300 w-full md:w-[250px]"
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
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="grid" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="grid" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                    Grid View
                  </TabsTrigger>
                  <TabsTrigger value="table" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                    Table View
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="grid">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex flex-col p-4 rounded-lg border border-gray-200 bg-white hover:border-avou/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-12 w-12 bg-gray-100">
                            <AvatarFallback className="bg-gray-100 text-gray-700">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-gray-600">Position #{user.position}</div>
                          </div>
                          {user.verified && (
                            <Badge
                              variant="outline"
                              className="ml-auto bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                            >
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{user.bio}</p>
                        <div className="text-xs text-gray-500 mb-4">Last active: {user.lastActive}</div>
                        <div className="mt-auto flex items-center justify-between">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Eye className="h-3.5 w-3.5" />
                            <span>Profile</span>
                          </Button>
                          <Button
                            size="sm"
                            className="gap-1 relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                          >
                            <span className="relative z-10">Message</span>
                            <MessageSquare className="h-3.5 w-3.5 relative z-10" />
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="table">
                  <div className="rounded-md border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200">
                          <TableHead>Member</TableHead>
                          <TableHead>Position</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Last Active</TableHead>
                          <TableHead>Verification</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.map((user) => (
                          <TableRow key={user.id} className="border-gray-200">
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 bg-gray-100">
                                  <AvatarFallback className="bg-gray-100 text-gray-700">
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{user.name}</div>
                                  <div className="text-xs text-gray-600">{user.bio.substring(0, 30)}...</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>#{user.position}</TableCell>
                            <TableCell>{user.joinDate}</TableCell>
                            <TableCell>{user.lastActive}</TableCell>
                            <TableCell>
                              {user.verified ? (
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
                                  <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    <span>View profile</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    <span>Send message</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-600">
                  Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> members
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
