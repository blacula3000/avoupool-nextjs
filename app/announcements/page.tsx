"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Logo } from "@/components/logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Filter, Search, Megaphone, AlertCircle } from "lucide-react"

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      title: "Important: April Payment Schedule Update",
      content:
        "Due to the upcoming holiday, the payment schedule for April has been adjusted. All payments will now be due on April 5th instead of April 2nd. Please ensure your automatic payments are updated accordingly.",
      date: "Mar 25, 2024",
      author: "Admin Team",
      category: "important",
      read: false,
    },
    {
      id: 2,
      title: "New Mobile App Features Released",
      content:
        "We're excited to announce new features in our mobile app! You can now set up payment reminders, view your position in the queue, and chat with other members directly from the app. Download the latest update from your app store.",
      date: "Mar 20, 2024",
      author: "Tech Team",
      category: "announcement",
      read: true,
    },
    {
      id: 3,
      title: "Community Meetup: Financial Planning Workshop",
      content:
        "Join us for our monthly community meetup! This month, we'll be hosting a financial planning workshop with guest speaker Sarah Johnson, a certified financial planner. The event will be held on April 10th at 7 PM at the Community Center.",
      date: "Mar 18, 2024",
      author: "Events Committee",
      category: "event",
      read: true,
    },
    {
      id: 4,
      title: "Welcome New Members!",
      content:
        "We're thrilled to welcome 5 new members to our community pool this month! Please join us in welcoming John, Maria, David, Emma, and Michael. Our community continues to grow stronger with each new member.",
      date: "Mar 15, 2024",
      author: "Membership Team",
      category: "announcement",
      read: true,
    },
    {
      id: 5,
      title: "Payment System Maintenance",
      content:
        "Our payment system will undergo scheduled maintenance on March 30th from 10 PM to 2 AM. During this time, you won't be able to make payments or update your payment methods. We apologize for any inconvenience.",
      date: "Mar 12, 2024",
      author: "Tech Team",
      category: "important",
      read: true,
    },
    {
      id: 6,
      title: "Quarterly Financial Report Available",
      content:
        "The Q1 2024 financial report is now available in your dashboard. This report includes a summary of all contributions, payouts, and administrative expenses for the quarter. Please review and let us know if you have any questions.",
      date: "Mar 10, 2024",
      author: "Finance Team",
      category: "announcement",
      read: true,
    },
    {
      id: 7,
      title: "New Pool Opening in June",
      content:
        "We're opening registration for our new Summer 2024 Pool starting in June. This pool will have 50 members with bi-weekly contributions of $200. Registration opens on April 1st, so mark your calendars!",
      date: "Mar 5, 2024",
      author: "Admin Team",
      category: "announcement",
      read: true,
    },
    {
      id: 8,
      title: "Community Survey Results",
      content:
        "Thank you to everyone who participated in our community satisfaction survey. We received valuable feedback and are working on implementing your suggestions. A summary of the results is available in the Members Area.",
      date: "Mar 1, 2024",
      author: "Admin Team",
      category: "announcement",
      read: true,
    },
  ]

  // Filter announcements based on search query and category
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || announcement.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  // Get category badge styling
  const getCategoryBadge = (category) => {
    switch (category) {
      case "important":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700 border-red-200">
            Important
          </Badge>
        )
      case "event":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700 border-blue-200"
          >
            Event
          </Badge>
        )
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 border-gray-200"
          >
            Announcement
          </Badge>
        )
    }
  }

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "important":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "event":
        return <Calendar className="h-5 w-5 text-blue-500" />
      default:
        return <Megaphone className="h-5 w-5 text-gray-500" />
    }
  }

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
              href="/announcements"
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
            <h1 className="text-2xl font-bold tracking-tight">Announcements</h1>
            <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <span className="relative z-10">Subscribe to Newsletter</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <Card className="avou-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Latest Announcements</CardTitle>
                      <CardDescription>Stay updated with important news and events</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="search"
                          placeholder="Search announcements..."
                          className="pl-8 bg-white border-gray-300 w-[200px]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="icon" className="border-gray-300 bg-white">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" onValueChange={setCategoryFilter}>
                    <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                      <TabsTrigger value="all" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="important"
                        className="data-[state=active]:bg-avou data-[state=active]:text-black"
                      >
                        Important
                      </TabsTrigger>
                      <TabsTrigger
                        value="announcement"
                        className="data-[state=active]:bg-avou data-[state=active]:text-black"
                      >
                        General
                      </TabsTrigger>
                      <TabsTrigger value="event" className="data-[state=active]:bg-avou data-[state=active]:text-black">
                        Events
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4 space-y-4">
                      {filteredAnnouncements.length > 0 ? (
                        filteredAnnouncements.map((announcement) => (
                          <AnnouncementCard key={announcement.id} announcement={announcement} />
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No announcements found matching your search.</p>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="important" className="mt-4 space-y-4">
                      {filteredAnnouncements.length > 0 ? (
                        filteredAnnouncements.map((announcement) => (
                          <AnnouncementCard key={announcement.id} announcement={announcement} />
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No important announcements found.</p>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="announcement" className="mt-4 space-y-4">
                      {filteredAnnouncements.length > 0 ? (
                        filteredAnnouncements.map((announcement) => (
                          <AnnouncementCard key={announcement.id} announcement={announcement} />
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No general announcements found.</p>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="event" className="mt-4 space-y-4">
                      {filteredAnnouncements.length > 0 ? (
                        filteredAnnouncements.map((announcement) => (
                          <AnnouncementCard key={announcement.id} announcement={announcement} />
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-600">No event announcements found.</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="avou-card">
                <CardHeader>
                  <CardTitle>Important Updates</CardTitle>
                  <CardDescription>Critical information you should know</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements
                      .filter((a) => a.category === "important")
                      .slice(0, 3)
                      .map((announcement) => (
                        <div
                          key={announcement.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-100"
                        >
                          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">{announcement.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{announcement.date}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="avou-card">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Mark your calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements
                      .filter((a) => a.category === "event")
                      .slice(0, 3)
                      .map((announcement) => (
                        <div
                          key={announcement.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                        >
                          <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">{announcement.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{announcement.date}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-gray-300 bg-white">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>

              <Card className="avou-card">
                <CardHeader>
                  <CardTitle>Newsletter Subscription</CardTitle>
                  <CardDescription>Get updates directly to your inbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Subscribe to our newsletter to receive important announcements, event invitations, and community
                        updates.
                      </p>
                      <div className="flex gap-2">
                        <Input placeholder="Your email address" className="bg-white border-gray-300" />
                        <Button className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                          <span className="relative z-10">Subscribe</span>
                          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                      <p>
                        You can unsubscribe at any time. We respect your privacy and will never share your email
                        address.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Announcement Card Component
function AnnouncementCard({ announcement }) {
  // Get category badge styling
  const getCategoryBadge = (category) => {
    switch (category) {
      case "important":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700 border-red-200">
            Important
          </Badge>
        )
      case "event":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700 border-blue-200"
          >
            Event
          </Badge>
        )
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 border-gray-200"
          >
            Announcement
          </Badge>
        )
    }
  }

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "important":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "event":
        return <Calendar className="h-5 w-5 text-blue-500" />
      default:
        return <Megaphone className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div
      className={`p-4 rounded-lg border ${announcement.read ? "bg-white" : "bg-avou/5"} ${announcement.category === "important" ? "border-red-200" : announcement.category === "event" ? "border-blue-200" : "border-gray-200"}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">{getCategoryIcon(announcement.category)}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium">
              {announcement.title}
              {!announcement.read && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-avou"></span>}
            </h3>
            {getCategoryBadge(announcement.category)}
          </div>
          <p className="text-sm text-gray-600 mb-3">{announcement.content}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6 bg-gray-100">
                <AvatarFallback className="text-xs bg-gray-100 text-gray-700">
                  {announcement.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span>{announcement.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>{announcement.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
