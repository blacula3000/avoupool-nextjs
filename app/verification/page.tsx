"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Upload, CheckCircle, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VerificationPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background via-background to-slate-50 dark:from-background dark:via-background dark:to-slate-950">
      <div className="mx-auto flex w-full max-w-[600px] flex-col justify-center space-y-6 p-4">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">A</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Identity Verification</h1>
          <p className="text-sm text-muted-foreground">Complete your verification to join Avou Community Pool</p>
        </div>

        <Card className="bg-background/80 backdrop-blur-sm border-none shadow-md">
          <CardHeader>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle>
                  Step {step} of {totalSteps}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Identity Verification"}
                  {step === 3 && "Payment Setup"}
                </div>
              </div>
              <Progress value={(step / totalSteps) * 100} className="bg-secondary" />
            </div>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
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
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Government ID</Label>
                  <p className="text-sm text-muted-foreground">
                    Upload a photo of your government-issued ID (passport, driver's license, or national ID card)
                  </p>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground mt-1">Supported formats: JPG, PNG, PDF</p>
                    <Button variant="outline" className="mt-4">
                      Select File
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Proof of Address</Label>
                  <p className="text-sm text-muted-foreground">
                    Upload a document showing your current address (utility bill, bank statement, etc. issued within the
                    last 3 months)
                  </p>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground mt-1">Supported formats: JPG, PNG, PDF</p>
                    <Button variant="outline" className="mt-4">
                      Select File
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <p className="text-sm text-muted-foreground">
                    Set up your payment method for bi-weekly contributions
                  </p>

                  <div className="space-y-4 mt-4">
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
                  </div>
                </div>

                <div className="rounded-lg border p-4 bg-muted">
                  <h4 className="font-medium">Bi-Weekly Contribution</h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-muted-foreground">Your contribution amount:</p>
                    <p className="font-bold">$200</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-muted-foreground">First payment date:</p>
                    <p>April 2, 2024</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < totalSteps ? (
              <Button
                onClick={nextStep}
                className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black"
              >
                <span className="relative z-10">Continue</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Button>
            ) : (
              <Button asChild className="w-full relative overflow-hidden group bg-avou hover:bg-avou/90 text-black">
                <Link href="/dashboard">
                  <span className="relative z-10">Complete Verification</span>
                  <CheckCircle className="ml-2 h-4 w-4 relative z-10" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
