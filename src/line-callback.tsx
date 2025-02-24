import { useEffect } from "react"
import useLineLogin from "./hooks/use-line-login"
import "./App.css"

function LineCallback() {
  const { onLoginCallback } = useLineLogin()

  useEffect(() => {
    onLoginCallback()
  }, [])

  return null
}

export default LineCallback
