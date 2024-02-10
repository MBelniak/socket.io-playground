import {useEffect} from "react";
import {io} from 'socket.io-client'
export const useSocket = (addToBasket: (taskName: string) => void) => {
    useEffect(() => {
        const messages = document.getElementById('messages')!;

        const appendMessage = (content: any) => {
            const item = document.createElement('li');
            item.textContent = content;
            messages.appendChild(item);
        };

        const socket = io("http://localhost:3000", {transports: ['websocket']});

        socket.on('connect', () => {
            appendMessage(`event: connect | session id: ${socket.id}`);
        });

        socket.on('connect_error', err => {
            appendMessage(`event: connect_error | reason: ${err.message}`);
        });

        socket.on('disconnect', reason => {
            appendMessage(`event: disconnect | reason: ${reason}`);
        });

        socket.on('content-added-to-basket', (event) => {
            appendMessage(`event: Added product with name ${event}`);
            addToBasket(event)
        });
    }, [])
}