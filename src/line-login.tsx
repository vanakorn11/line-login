import useLineLogin from "./hooks/use-line-login"
import "./App.css"

function LineLogin() {
  const { onLogin } = useLineLogin()

  return <button onClick={onLogin}>line login</button>
}

export default LineLogin
