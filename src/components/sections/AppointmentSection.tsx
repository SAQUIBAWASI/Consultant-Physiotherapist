import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function AppointmentSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the appointment booking logic
    alert("Appointment request submitted! In a real application, this would book your appointment with Dr. Sharma.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule a <span className="text-primary">Consultation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book an appointment quickly and easily. Choose your preferred date and time, and I'll get back to you to confirm.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-none shadow-xl">
          <CardHeader>
            <CardTitle>Book Your Appointment</CardTitle>
            <CardDescription>Fill out the form below to request an appointment.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="appointment-name">Full Name</Label>
                  <Input id="appointment-name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appointment-email">Email</Label>
                  <Input id="appointment-email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="appointment-phone">Phone Number</Label>
                  <Input id="appointment-phone" placeholder="Your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appointment-type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger id="appointment-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Checkup</SelectItem>
                      <SelectItem value="cardio">Cardiovascular Consultation</SelectItem>
                      <SelectItem value="neuro">Neurological Assessment</SelectItem>
                      <SelectItem value="respiratory">Respiratory Consultation</SelectItem>
                      <SelectItem value="chronic">Chronic Disease Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <div className="border rounded-md p-3">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="mx-auto"
                      disabled={(date) => {
                        const day = date.getDay();
                        // Disable weekends (Saturday and Sunday)
                        return day === 0 || day === 6;
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appointment-time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger id="appointment-time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                      <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                      <SelectItem value="11-12">11:00 AM - 12:00 PM</SelectItem>
                      <SelectItem value="2-3">2:00 PM - 3:00 PM</SelectItem>
                      <SelectItem value="3-4">3:00 PM - 4:00 PM</SelectItem>
                      <SelectItem value="4-5">4:00 PM - 5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="appointment-notes">Additional Notes</Label>
                <Textarea 
                  id="appointment-notes" 
                  placeholder="Please provide any additional information about your condition or special requirements"
                  rows={3} 
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">Request Appointment</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}