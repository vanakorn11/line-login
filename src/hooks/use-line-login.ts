import liff from "@line/liff"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../stores/auth"

function liftInit() {
  return liff.init({
    liffId: import.meta.env.VITE_LIFF_ID,
  })
}

function useLineLogin() {
  const navigate = useNavigate()
  const { login, logout } = useAuthStore()

  const onLogout = async () => {
    await liftInit()
    liff.logout()
    logout()
  }

  const onLoginCallback = async () => {
    try {
      await liftInit()

      const [profile, token] = await Promise.all([
        liff.getProfile(),
        liff.getIDToken(),
      ])

      if (profile && token) {
        login(profile.displayName, token)
        navigate('/')
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const onLogin = async () => {
    await liftInit()
    liff.login()
  }

  return { onLogin, onLoginCallback, onLogout }
}

export default useLineLogin
