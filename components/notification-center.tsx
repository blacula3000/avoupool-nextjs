import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell } from "lucide-react"

interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
}

interface NotificationCenterProps {
  notifications: Notification[]
}

export function NotificationCenter({ notifications }: NotificationCenterProps) {
  return (
    <div className="absolute right-0 mt-2 w-80 z-50 rounded-md border bg-background shadow-md">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <h4 className="font-medium">Notifications</h4>
          <Badge variant="secondary" className="ml-1">
            {notifications.filter((n) => !n.read).length} new
          </Badge>
        </div>
        <button className="text-xs text-primary hover:underline">Mark all as read</button>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="p-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`mb-2 rounded-lg p-3 ${notification.read ? "bg-background" : "bg-primary/5"}`}
            >
              <div className="flex justify-between items-start">
                <h5 className="font-medium text-sm">{notification.title}</h5>
                {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
              <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-2 border-t">
        <button className="w-full text-center text-xs text-primary hover:underline p-2">View all notifications</button>
      </div>
    </div>
  )
}
