import  handleMemberConnection  from "./routes/route.member.js";

export const socketHandler = (io) => {
    // Creation of Separte Sockets
    const chatSocket = io.of('/chat');
    const notifcationSocket = io.of('/notification');
    const callLogSocket = io.of('/calllog');
    const memberSocket = io.of('/member');
    const friendSocket = io.of('/friend');


    // Methods for each Socket
    memberSocket.on('connection', handleMemberConnection);
}
