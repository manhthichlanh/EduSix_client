import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { connect } from "socket.io-client";
import { serverEndpoint } from "../utils/http";
// const socket = io('localhost:3000/');
// const socket = io(serverEndpoint);
export const SocketContext = createContext();
const socket = connect(serverEndpoint, {
  reconnect: true,
  autoConnect: true
});

export const SocketProvider = ({ children }) => {
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const [certificateMessage, setCertificateMessage] = useState([]);
  const [allMessage, setAllMessage] = useState([]);
  useEffect(() => {
    !socket.hasListeners("connect") &&
    socket.on('connect', () => {
      console.log(socket)
      setIsSocketConnected(true)
      console.log('Connected to server');
    });

    // Bắt sự kiện khi mất kết nối và cố gắng kết nối lại
    !socket.hasListeners("disconnect") &&
    socket.on('disconnect', () => {
      setIsSocketConnected(false)
      console.log('Disconnected from server, attempting to reconnect...');
    });

    // Bắt sự kiện khi kết nối lại thành công
    !socket.hasListeners("reconnect") &&
    socket.on('reconnect', (attemptNumber) => {
      console.log(`Reconnected to server after ${attemptNumber} attempts`);
    });

  }
  )
  // useEffect(() => {
  //   console.log("thay doi");
  //   console.log(isSocketConnected);
  //   const learner_get_message = (message) => {
  //     setAllMessage([...allMessage, message]);
  //   }
  //   const learner_get_certificate_message = (message) => {
  //     setCertificateMessage([...certificateMessage, message]);
  //   }
  //   if (isSocketConnected) {

  //     socket.on("learner-get-message", learner_get_message);
  //     socket.on("learner-get-certificate-message", learner_get_certificate_message);

  //   }
  //   return () => {
  //     socket.off('learner-get-message', learner_get_message);
  //     socket.off('learner-get-certificate-message', learner_get_certificate_message);

  //   }
  // }, [isSocketConnected]
  // )
  const value = useMemo(() => ({
    socket,
    isSocketConnected,
  }), [isSocketConnected]
  )
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
}

export function useSocket() {
  return useContext(SocketContext);
}
