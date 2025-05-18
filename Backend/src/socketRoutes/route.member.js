import { getMembers } from "../controllers/member.controller.js";

export default async function handleMemberConnection(socket) {
    console.log('Member Connected', socket.handshake.headers.cookie)

    socket.on("getAllMembers", (ack) => getMembers(socket, ack));
} 