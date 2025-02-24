import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define the store type
interface AuthState {
  user: string | null
  accessToken: string | null
  isAuthenticated: boolean
  login: (username: string, token: string) => void
  logout: () => void
}

// Create the auth store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      isAuthenticated: false,
      // Login function - stores username and accessToken
      login: (username, token) =>
        set({ accessToken: token, isAuthenticated: true, user: username }),

      // Logout function - clears all auth state
      logout: () =>
        set({ accessToken: null, isAuthenticated: false, user: null }),

      user: null,
    }),
    { name: "auth-storage" }, // Key used in localStorage
  ),
)
