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
    return `${duration.days} days left`
  }
  return duration.toFormat("hh:mm:ss")
}

interface CountdownProps {
  targetDate: DateTime
  underline?: boolean
  display?: "inline" | "block"
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  underline = false,
  display = "block",
}) => {
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

  let style = {} as any
  if (underline) {
    style.textDecoration = "underline"
  }
  if (display === "inline") {
    style.fontSize = "inherit"
  }

  return (
    <Display size="9" style={style} inline={display === "inline"}>
      {displayDuration}
    </Display>
  )
}
