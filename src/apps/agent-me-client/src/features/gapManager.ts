import { useState } from "react"

export function useGapManager() {
  const [viewGap, setViewGap] = useState<number>(3)

  const moreGap = () => {
    setViewGap(viewGap + 3)
  }
  const lessGap = () => {
    setViewGap(viewGap - 3)
  }

  return {
    moreGap,
    lessGap,
    viewGap
  }
}
