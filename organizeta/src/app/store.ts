import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark'

type AppState = {
  theme: ThemeMode
  currentBoardId: string | null
  setTheme: (theme: ThemeMode) => void
  setCurrentBoard: (boardId: string | null) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  currentBoardId: null,
  setTheme: (theme) => set({ theme }),
  setCurrentBoard: (currentBoardId) => set({ currentBoardId }),
}))
