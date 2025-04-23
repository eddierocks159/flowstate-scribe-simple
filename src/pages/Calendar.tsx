
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const events = [
  {
    id: "1",
    title: "Team Meeting",
    date: new Date(2025, 3, 25),
    time: "10:00 AM - 11:00 AM",
  },
  {
    id: "2",
    title: "Project Review",
    date: new Date(2025, 3, 26),
    time: "2:00 PM - 3:30 PM",
  },
  {
    id: "3",
    title: "Client Call",
    date: new Date(2025, 3, 27),
    time: "11:00 AM - 12:00 PM",
  }
];

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) => 
      date && 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );

  return (
    <div className="flex-1 p-6 animate-fade-in">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <h2 className="text-xl font-medium">
                {date ? date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                }) : 'No date selected'}
              </h2>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="border rounded-md p-3 animate-slide-in">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No events scheduled for this day
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
