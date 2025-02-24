import { useNavigate } from "react-router-dom"
import useLineLogin from "./hooks/use-line-login"
import { useAuthStore } from "./stores/auth"
import "./App.css"

function Home() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuthStore()
  const { onLogout } = useLineLogin()

  return (
    <>
      <h1>Home</h1>
      {isAuthenticated
        ? (
            <>
              <h3>
                welcome:
                {user}
              </h3>
              <button onClick={onLogout}>logout</button>
            </>
          )
        : (
            <button onClick={() => navigate("login")}>login</button>
          )}
    </>
  )
}

export default Home
