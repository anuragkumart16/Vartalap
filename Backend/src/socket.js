import handleMemberConnection from "./socketRoutes/route.member.js";
import { Message } from './models/message.models.js';

export const socketHandler = (io) => {
    // Creation of Separte Sockets
    const chatSocket = io.of('/chat');
    const notifcationSocket = io.of('/notification');
    const callLogSocket = io.of('/calllog');
    const memberSocket = io.of('/member');
    const friendSocket = io.of('/friend');


    // Methods for each Socket
    memberSocket.on('connection', handleMemberConnection);

    // Chat message handler
    chatSocket.on('connection', (socket) => {
        console.log('[Socket.IO] New client connected to /chat namespace');
        // Expect the frontend to emit 'join' with their userId after connecting
        socket.on('join', (userId) => {
            console.log('[Socket.IO] User joined room:', userId);
            socket.join(userId);
        });

        // Expect the frontend to emit 'message' with { to, message, from }
        socket.on('message', async ({ to, message, from }) => {
            try {
                console.log('[Socket.IO] Received message:', { to, message, from });
                const saved = await Message.create({ senderId: from, receiverId: to, message });
                console.log('[Socket.IO] Message saved:', saved);
                chatSocket.to(to).emit('message', { message, from });
                console.log('[Socket.IO] Emitted message to room:', to);
            } catch (err) {
                console.error('[Socket.IO] Error saving message:', err);
            }
        });
    });
}
