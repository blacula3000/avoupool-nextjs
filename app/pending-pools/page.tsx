"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, Users, CalendarPlus2Icon as CalendarIcon2, ArrowRight, CheckCircle, Info } from "lucide-react"
import { format } from "date-fns"
import { Logo } from "@/components/logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PendingPoolsPage() {
  const [selectedPool, setSelectedPool] = useState(null)
  const [selectedPosition, setSelectedPosition] = useState("")
  const [date, setDate] = useState(null)
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false)

  // Mock data for pending pools
  const pendingPools = [
    {
      id: 1,
      name: "Summer 2024 Pool",
      startDate: "June 1, 2024",
      endDate: "May 15, 2025",
      totalMembers: 50,
      registeredMembers: 32,
      contributionAmount: 200,
      frequency: "Bi-weekly",
      status: "Open",
      description: "Our summer pool starting in June 2024. Join now to secure your preferred position!",
      availablePositions: [5, 8, 13, 17, 22, 25, 30, 33, 38, 42, 45, 48],
    },
    {
      id: 2,
      name: "Fall 2024 Pool",
      startDate: "September 15, 2024",
      endDate: "August 30, 2025",
      totalMembers: 50,
      registeredMembers: 18,
      contributionAmount: 200,
      frequency: "Bi-weekly",
      status: "Open",
      description: "Our fall pool starting in September 2024. Many positions still available!",
      availablePositions: [
        3, 4, 7, 9, 10, 12, 15, 16, 19, 21, 23, 24, 26, 28, 29, 31, 32, 34, 35, 36, 37, 39, 40, 41, 43, 44, 46, 47, 49,
        50,
      ],
    },
    {
      id: 3,
      name: "Winter 2025 Pool",
      startDate: "January 10, 2025",
      endDate: "December 25, 2025",
      totalMembers: 50,
      registeredMembers: 5,
      contributionAmount: 200,
      frequency: "Bi-weekly",
      status: "Open",
      description: "Our winter pool starting in January 2025. Almost all positions are still available!",
      availablePositions: Array.from({ length: 45 }, (_, i) => i + 6),
    },
  ]

  // Function to calculate payout date based on position and start date
  const calculatePayoutDate = (startDate, position) => {
    const start = new Date(startDate)
    // Add bi-weekly periods (position - 1) * 2 weeks
    const payoutDate = new Date(start)
    payoutDate.setDate(start.getDate() + (position - 1) * 14)
    return format(payoutDate, "MMMM d, yyyy")
  }

  // Function to generate payment schedule
  const generatePaymentSchedule = (startDate, totalPayments) => {
    const schedule = []
    const start = new Date(startDate)

    for (let i = 0; i < totalPayments; i++) {
      const paymentDate = new Date(start)
      paymentDate.setDate(start.getDate() + i * 14)
      schedule.push({
        number: i + 1,
        date: format(paymentDate, "MMMM d, yyyy"),
      })
    }

    return schedule
  }

  const handlePoolSelect = (pool) => {
    setSelectedPool(pool)
    setSelectedPosition("")
  }

  const handleRegister = () => {
    // In a real app, this would submit the registration to the backend
    console.log("Registering for pool:", selectedPool?.name)
    console.log("Selected position:", selectedPosition)
    setShowRegistrationSuccess(true)
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
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Pending Pools</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="space-y-6">
            <Card className="avou-card">
              <CardHeader>
                <CardTitle>Available Pools</CardTitle>
                <CardDescription>Join an upcoming pool and secure your position</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingPools.map((pool) => (
                  <div
                    key={pool.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedPool?.id === pool.id ? "border-avou bg-avou/10" : "border-gray-200 hover:border-avou/50"
                    }`}
                    onClick={() => handlePoolSelect(pool)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{pool.name}</h3>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {pool.status}
                      </Badge>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">Starts: {pool.startDate}</div>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="h-3.5 w-3.5" />
                        <span>
                          {pool.registeredMembers}/{pool.totalMembers} members
                        </span>
                      </div>
                      <div className="text-sm font-medium text-avou">
                        ${pool.contributionAmount} {pool.frequency}
                      </div>
                    </div>
                    <Progress
                      value={(pool.registeredMembers / pool.totalMembers) * 100}
                      className="mt-2 h-1.5 bg-gray-100"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="avou-card">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>Understanding pending pools</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-gray-200">
                    <AccordionTrigger>What are pending pools?</AccordionTrigger>
                    <AccordionContent>
                      Pending pools are upcoming Avou Community Pools that haven't started yet. By joining a pending
                      pool, you can secure your position in advance and plan your finances accordingly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-gray-200">
                    <AccordionTrigger>How do I choose a position?</AccordionTrigger>
                    <AccordionContent>
                      Your position determines when you'll receive your lump sum payout. Lower positions receive payouts
                      earlier, while higher positions receive them later. Choose based on when you'd prefer to receive
                      your payout.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-gray-200">
                    <AccordionTrigger>What is the payment schedule?</AccordionTrigger>
                    <AccordionContent>
                      Payments are made bi-weekly starting from the pool's start date. You'll need to contribute for the
                      entire duration of the pool, regardless of when you receive your payout.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-gray-200">
                    <AccordionTrigger>Can I change my position later?</AccordionTrigger>
                    <AccordionContent>
                      Position changes are only possible if another member agrees to swap with you and the admin
                      approves the change. We recommend choosing your position carefully.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {selectedPool ? (
            <Card className="avou-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{selectedPool.name}</CardTitle>
                    <CardDescription>Register for this pool and select your position</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {selectedPool.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Pool Details</Label>
                    <div className="rounded-lg border border-gray-200 p-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-medium">{selectedPool.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">End Date:</span>
                        <span className="font-medium">{selectedPool.endDate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Contribution:</span>
                        <span className="font-medium text-avou">
                          ${selectedPool.contributionAmount} {selectedPool.frequency}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Total Members:</span>
                        <span className="font-medium">{selectedPool.totalMembers}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Registered:</span>
                        <span className="font-medium">
                          {selectedPool.registeredMembers}/{selectedPool.totalMembers}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Available Positions:</span>
                        <span className="font-medium">{selectedPool.availablePositions.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Your Position</Label>
                    <div className="rounded-lg border border-gray-200 p-4 space-y-3">
                      <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Choose your position" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          {selectedPool.availablePositions.map((position) => (
                            <SelectItem key={position} value={position.toString()}>
                              Position #{position} - Payout: {calculatePayoutDate(selectedPool.startDate, position)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {selectedPosition && (
                        <div className="mt-4 p-3 bg-avou/10 rounded-lg border border-avou/20">
                          <div className="flex items-center gap-2 mb-2">
                            <CalendarIcon2 className="h-4 w-4 text-avou" />
                            <span className="font-medium">Your Payout Details</span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-gray-600">Position:</span>
                            <span className="font-medium">#{selectedPosition}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-1">
                            <span className="text-gray-600">Payout Date:</span>
                            <span className="font-medium">
                              {calculatePayoutDate(selectedPool.startDate, selectedPosition)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-1">
                            <span className="text-gray-600">Payout Amount:</span>
                            <span className="font-medium text-avou">
                              ${selectedPool.contributionAmount * selectedPool.totalMembers}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {selectedPosition && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Your Payment Schedule</Label>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 border-gray-300 bg-white hover:bg-gray-50"
                          >
                            <CalendarIcon className="h-4 w-4" />
                            <span>View Full Schedule</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl bg-white border-gray-200">
                          <DialogHeader>
                            <DialogTitle>Complete Payment Schedule</DialogTitle>
                            <DialogDescription>All bi-weekly payments for {selectedPool.name}</DialogDescription>
                          </DialogHeader>
                          <div className="max-h-[60vh] overflow-y-auto">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-gray-200">
                                  <TableHead>Payment #</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Amount</TableHead>
                                  <TableHead>Status</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {generatePaymentSchedule(selectedPool.startDate, selectedPool.totalMembers).map(
                                  (payment) => (
                                    <TableRow key={payment.number} className="border-gray-200">
                                      <TableCell>{payment.number}</TableCell>
                                      <TableCell>{payment.date}</TableCell>
                                      <TableCell className="text-avou">${selectedPool.contributionAmount}</TableCell>
                                      <TableCell>
                                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-300">
                                          Scheduled
                                        </Badge>
                                      </TableCell>
                                    </TableRow>
                                  ),
                                )}
                              </TableBody>
                            </Table>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-4">
                      <div className="space-y-3">
                        {generatePaymentSchedule(selectedPool.startDate, 5).map((payment) => (
                          <div key={payment.number} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full bg-avou/20 flex items-center justify-center text-xs text-avou">
                                {payment.number}
                              </div>
                              <span>Payment #{payment.number}</span>
                            </div>
                            <span className="font-medium">{payment.date}</span>
                          </div>
                        ))}
                        <div className="pt-2 text-center text-sm text-gray-600">
                          <span>+ {selectedPool.totalMembers - 5} more payments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-lg border border-amber-200 p-4 bg-amber-50">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800">Important Information</h4>
                      <p className="text-sm text-amber-700 mt-1">
                        By registering for this pool, you commit to making all bi-weekly payments of $
                        {selectedPool.contributionAmount} for the entire duration, regardless of when you receive your
                        payout. Missed payments may result in penalties or removal from the pool.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleRegister}
                  disabled={!selectedPosition}
                  className="relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                >
                  <span className="relative z-10">Register for This Pool</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="avou-card flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-avou/20 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-avou" />
                </div>
                <h3 className="text-lg font-medium">Select a Pool</h3>
                <p className="text-sm text-gray-600 max-w-md">
                  Choose a pending pool from the list on the left to view details and register for a position.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Registration Success Dialog */}
      <Dialog open={showRegistrationSuccess} onOpenChange={setShowRegistrationSuccess}>
        <DialogContent className="bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle>Registration Successful!</DialogTitle>
            <DialogDescription>You've successfully registered for the pending pool.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium">Registration Confirmed</h3>
              <p className="text-sm text-gray-600">
                You've secured position #{selectedPosition} in {selectedPool?.name}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg w-full">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Pool:</span>
                <span className="font-medium">{selectedPool?.name}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-600">Position:</span>
                <span className="font-medium">#{selectedPosition}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-600">Payout Date:</span>
                <span className="font-medium">
                  {selectedPool && calculatePayoutDate(selectedPool.startDate, selectedPosition)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-600">First Payment:</span>
                <span className="font-medium">
                  {selectedPool && format(new Date(selectedPool.startDate), "MMMM d, yyyy")}
                </span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button asChild className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
              <Link href="/dashboard">
                <span className="relative z-10">Go to Dashboard</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
