import { SocketContext } from "../context/SocketContext"
import { useContext } from "react"

export const useSocketContext = () => {
  const context = useContext(SocketContext)

  if(!context) {
    throw Error('useSocketContext must be used inside an SocketContextProvider')
  }

  return context
}