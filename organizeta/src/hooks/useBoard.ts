import { useAppStore } from '../app/store'

export function useBoard() {
  const currentBoardId = useAppStore((state) => state.currentBoardId)
  const setCurrentBoard = useAppStore((state) => state.setCurrentBoard)

  return { currentBoardId, setCurrentBoard }
}
