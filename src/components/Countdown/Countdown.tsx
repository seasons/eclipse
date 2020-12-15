import React from "react"
import { Display } from "@/elements/Typography"
import { DateTime, Duration } from "luxon"

const formatDisplayDuration = (targetDate: DateTime) => {
  const duration =
    targetDate.isValid && targetDate.valueOf() > Date.now()
      ? targetDate.diffNow(["days", "hours", "minutes", "seconds"])
      : Duration.fromMillis(0)
  const twoDays = Duration.fromObject({ days: 2 })
  if (duration >= twoDays) {
    return `${duration.days} days`
  }
  return duration.toFormat("hh:mm:ss")
}

export const Countdown: React.FC<{
  targetDate: DateTime
}> = ({ targetDate }) => {
  const [displayDuration, setDisplayDuration] = React.useState(
    formatDisplayDuration(targetDate)
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayDuration(formatDisplayDuration(targetDate))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <Display size="9">{displayDuration}</Display>
}
