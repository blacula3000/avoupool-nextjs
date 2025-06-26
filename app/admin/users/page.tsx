"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, UserPlus, Download, Trash2, UserX, UserCheck, Edit, Eye } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showSuspendDialog, setShowSuspendDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)

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
      lastLogin: "2 hours ago",
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
      lastLogin: "1 day ago",
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
      lastLogin: "3 days ago",
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
      lastLogin: "5 hours ago",
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
      lastLogin: "Just now",
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Member",
      status: "Suspended",
      joinDate: "Jan 10, 2024",
      position: 26,
      verified: false,
      lastLogin: "2 weeks ago",
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
      lastLogin: "1 hour ago",
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
      lastLogin: "12 hours ago",
    },
    {
      id: 9,
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      role: "Member",
      status: "Pending",
      joinDate: "Jan 10, 2024",
      position: 42,
      verified: false,
      lastLogin: "Never",
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
      lastLogin: "4 hours ago",
    },
  ]

  // Filter users based on search query and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && user.status === "Active") ||
      (statusFilter === "suspended" && user.status === "Suspended") ||
      (statusFilter === "pending" && user.status === "Pending")

    return matchesSearch && matchesStatus
  })

  const handleDeleteUser = (user) => {
    setSelectedUser(user)
    setShowDeleteDialog(true)
  }

  const handleSuspendUser = (user) => {
    setSelectedUser(user)
    setShowSuspendDialog(true)
  }

  const confirmDelete = () => {
    // In a real app, this would call an API to delete the user
    console.log("Deleting user:", selectedUser?.name)
    setShowDeleteDialog(false)
  }

  const confirmSuspend = () => {
    // In a real app, this would call an API to suspend/unsuspend the user
    console.log("Suspending user:", selectedUser?.name)
    setShowSuspendDialog(false)
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
            <Link
              href="/admin/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link href="/admin/users" className="text-sm font-medium transition-colors hover:text-primary">
              Users
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
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                  <span className="relative z-10">Add User</span>
                  <UserPlus className="h-4 w-4 relative z-10" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                  <DialogDescription>
                    Create a new user account. The user will receive an email invitation.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Smith" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.smith@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue="member">
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="member">Member</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position (optional)</Label>
                      <Input id="position" type="number" placeholder="Enter position number" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch id="send-invitation" defaultChecked />
                    <Label htmlFor="send-invitation">Send email invitation</Label>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                    <span className="relative z-10">Create User</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage all user accounts in the system</CardDescription>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search users..."
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
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
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
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="all" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                  All Users
                </TabsTrigger>
                <TabsTrigger value="members" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                  Members
                </TabsTrigger>
                <TabsTrigger value="admins" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                  Admins
                </TabsTrigger>
                <TabsTrigger value="suspended" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                  Suspended
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="rounded-md border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Login</TableHead>
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
                                <div className="text-xs text-gray-600">{user.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                user.role === "Admin"
                                  ? "bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700 border-purple-200"
                                  : "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700 border-blue-200"
                              }
                            >
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                user.status === "Active"
                                  ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                                  : user.status === "Suspended"
                                    ? "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700 border-red-200"
                                    : "bg-amber-50 text-amber-700 hover:bg-amber-50 hover:text-amber-700 border-amber-200"
                              }
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>#{user.position}</TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
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
                                  <span>View details</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>Edit user</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {user.status === "Active" ? (
                                  <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                    <UserX className="mr-2 h-4 w-4" />
                                    <span>Suspend user</span>
                                  </DropdownMenuItem>
                                ) : user.status === "Suspended" ? (
                                  <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                    <UserCheck className="mr-2 h-4 w-4" />
                                    <span>Reactivate user</span>
                                  </DropdownMenuItem>
                                ) : null}
                                <DropdownMenuItem
                                  onClick={() => handleDeleteUser(user)}
                                  className="text-red-600 focus:text-red-600"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete user</span>
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

              <TabsContent value="members">
                <div className="rounded-md border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead>User</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers
                        .filter((user) => user.role === "Member")
                        .map((user) => (
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
                                  <div className="text-xs text-gray-600">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  user.status === "Active"
                                    ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                                    : user.status === "Suspended"
                                      ? "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700 border-red-200"
                                      : "bg-amber-50 text-amber-700 hover:bg-amber-50 hover:text-amber-700 border-amber-200"
                                }
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>#{user.position}</TableCell>
                            <TableCell>{user.joinDate}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
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
                                    <span>View details</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit user</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {user.status === "Active" ? (
                                    <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                      <UserX className="mr-2 h-4 w-4" />
                                      <span>Suspend user</span>
                                    </DropdownMenuItem>
                                  ) : user.status === "Suspended" ? (
                                    <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                      <UserCheck className="mr-2 h-4 w-4" />
                                      <span>Reactivate user</span>
                                    </DropdownMenuItem>
                                  ) : null}
                                  <DropdownMenuItem
                                    onClick={() => handleDeleteUser(user)}
                                    className="text-red-600 focus:text-red-600"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete user</span>
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

              <TabsContent value="admins">
                <div className="rounded-md border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead>User</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers
                        .filter((user) => user.role === "Admin")
                        .map((user) => (
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
                                  <div className="text-xs text-gray-600">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  user.status === "Active"
                                    ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700 border-green-200"
                                    : user.status === "Suspended"
                                      ? "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700 border-red-200"
                                      : "bg-amber-50 text-amber-700 hover:bg-amber-50 hover:text-amber-700 border-amber-200"
                                }
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>#{user.position}</TableCell>
                            <TableCell>{user.joinDate}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
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
                                    <span>View details</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit user</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {user.status === "Active" ? (
                                    <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                      <UserX className="mr-2 h-4 w-4" />
                                      <span>Suspend user</span>
                                    </DropdownMenuItem>
                                  ) : user.status === "Suspended" ? (
                                    <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                      <UserCheck className="mr-2 h-4 w-4" />
                                      <span>Reactivate user</span>
                                    </DropdownMenuItem>
                                  ) : null}
                                  <DropdownMenuItem
                                    onClick={() => handleDeleteUser(user)}
                                    className="text-red-600 focus:text-red-600"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete user</span>
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

              <TabsContent value="suspended">
                <div className="rounded-md border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers
                        .filter((user) => user.status === "Suspended")
                        .map((user) => (
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
                                  <div className="text-xs text-gray-600">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  user.role === "Admin"
                                    ? "bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700 border-purple-200"
                                    : "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700 border-blue-200"
                                }
                              >
                                {user.role}
                              </Badge>
                            </TableCell>
                            <TableCell>#{user.position}</TableCell>
                            <TableCell>{user.joinDate}</TableCell>
                            <TableCell>{user.lastLogin}</TableCell>
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
                                    <span>View details</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit user</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem onClick={() => handleSuspendUser(user)}>
                                    <UserCheck className="mr-2 h-4 w-4" />
                                    <span>Reactivate user</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => handleDeleteUser(user)}
                                    className="text-red-600 focus:text-red-600"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete user</span>
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
                Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
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
      </div>

      {/* Delete User Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {selectedUser && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Avatar className="h-10 w-10 bg-gray-100">
                  <AvatarFallback className="bg-gray-100 text-gray-700">
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedUser.name}</div>
                  <div className="text-xs text-gray-600">{selectedUser.email}</div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
            >
              Delete User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Suspend User Dialog */}
      <Dialog open={showSuspendDialog} onOpenChange={setShowSuspendDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedUser?.status === "Suspended" ? "Reactivate User" : "Suspend User"}</DialogTitle>
            <DialogDescription>
              {selectedUser?.status === "Suspended"
                ? "Are you sure you want to reactivate this user? They will regain access to the system."
                : "Are you sure you want to suspend this user? They will lose access to the system."}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {selectedUser && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Avatar className="h-10 w-10 bg-gray-100">
                  <AvatarFallback className="bg-gray-100 text-gray-700">
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedUser.name}</div>
                  <div className="text-xs text-gray-600">{selectedUser.email}</div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSuspendDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={confirmSuspend}
              className={
                selectedUser?.status === "Suspended"
                  ? "relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                  : "bg-amber-600 hover:bg-amber-700 text-white"
              }
            >
              {selectedUser?.status === "Suspended" ? (
                <>
                  <span className="relative z-10">Reactivate User</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </>
              ) : (
                "Suspend User"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
