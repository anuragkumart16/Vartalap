import { io } from "socket.io-client";


const memberSocket = io(`${import.meta.env.VITE_URL}/member`, {
  withCredentials: true
});

const friendSocket = io(`${import.meta.env.VITE_URL}/friend`, {
  withCredentials: true
});

export { memberSocket , friendSocket } 
