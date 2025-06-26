"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Upload, CheckCircle, Shield, User, Lock, CreditCardIcon, Bell } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [verificationStatus, setVerificationStatus] = useState("verified")

  // Mock user data
  const userData = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "January 10, 2024",
    position: 12,
    payoutDate: "March 12, 2024",
    paymentMethods: [
      { id: 1, type: "Credit Card", last4: "4242", expiry: "04/25", default: true },
      { id: 2, type: "Bank Account", last4: "9876", name: "Chase Checking", default: false },
    ],
    verificationDocuments: [
      { id: 1, type: "Government ID", status: "verified", date: "Jan 12, 2024" },
      { id: 2, type: "Proof of Address", status: "verified", date: "Jan 12, 2024" },
    ],
    notificationSettings: {
      email: true,
      sms: true,
      app: true,
      paymentReminders: true,
      payoutNotifications: true,
      communityUpdates: false,
    },
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
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md h-fit">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@username" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">{userData.name}</h3>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Verified
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700">
                    Position #{userData.position}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                >
                  <span className="relative z-10">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Photo
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Personal Information</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Verification</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <CreditCardIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Payment Methods</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <Bell className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Notifications</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <Lock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Security</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="verification">Verification</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-4">
                <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Smith" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={userData.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" defaultValue={userData.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main St" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="New York" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="NY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" defaultValue="10001" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                      <span className="relative z-10">Save Changes</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="verification" className="mt-4">
                <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Identity Verification</CardTitle>
                    <CardDescription>Verify your identity to ensure security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border p-4 bg-green-50">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <h4 className="font-medium text-green-700">Verification Complete</h4>
                          <p className="text-sm text-green-600">Your identity has been verified successfully.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Verification Documents</h4>
                      {userData.verificationDocuments.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{doc.type}</div>
                              <div className="text-xs text-muted-foreground">Uploaded on {doc.date}</div>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                          >
                            Verified
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Upload Additional Documents</h4>
                      <p className="text-sm text-muted-foreground">
                        If you need to update your verification documents, you can upload them here.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="doc-type">Document Type</Label>
                          <Select>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select document type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="id">Government ID</SelectItem>
                              <SelectItem value="passport">Passport</SelectItem>
                              <SelectItem value="drivers">Driver's License</SelectItem>
                              <SelectItem value="utility">Utility Bill</SelectItem>
                              <SelectItem value="bank">Bank Statement</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-end">
                          <Button
                            variant="outline"
                            className="w-full gap-2 relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
                          >
                            <span className="relative z-10">
                              <Upload className="h-4 w-4" />
                              Upload Document
                            </span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-4">
                <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods for contributions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Saved Payment Methods</h4>
                      {userData.paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <CreditCard className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">
                                {method.type} •••• {method.last4}
                                {method.default && (
                                  <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                    Default
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {method.type === "Credit Card" ? `Expires ${method.expiry}` : method.name}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Add New Payment Method</h4>
                      <p className="text-sm text-muted-foreground">
                        Add a new payment method for your bi-weekly contributions.
                      </p>
                      <div className="grid gap-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="payment-type">Payment Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select payment type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="card">Credit/Debit Card</SelectItem>
                                <SelectItem value="bank">Bank Account</SelectItem>
                                <SelectItem value="paypal">PayPal</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="card-name">Name on Card</Label>
                            <Input id="card-name" placeholder="John Smith" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2 col-span-2">
                            <Label htmlFor="expiry">Expiration Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        <Button className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                          <span className="relative z-10">Add Payment Method</span>
                          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4">
                <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Notification Channels</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                          </div>
                          <Switch id="email-notifications" checked={userData.notificationSettings.email} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="sms-notifications">SMS Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                          </div>
                          <Switch id="sms-notifications" checked={userData.notificationSettings.sms} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-notifications">In-App Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications within the app</p>
                          </div>
                          <Switch id="app-notifications" checked={userData.notificationSettings.app} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Notification Types</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="payment-reminders">Payment Reminders</Label>
                            <p className="text-sm text-muted-foreground">Receive reminders about upcoming payments</p>
                          </div>
                          <Switch id="payment-reminders" checked={userData.notificationSettings.paymentReminders} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="payout-notifications">Payout Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive notifications about your payout</p>
                          </div>
                          <Switch
                            id="payout-notifications"
                            checked={userData.notificationSettings.payoutNotifications}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="community-updates">Community Updates</Label>
                            <p className="text-sm text-muted-foreground">Receive updates about the community</p>
                          </div>
                          <Switch id="community-updates" checked={userData.notificationSettings.communityUpdates} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                      <span className="relative z-10">Save Preferences</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
