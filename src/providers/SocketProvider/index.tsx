import React, { FC, useEffect } from 'react';
import io from 'socket.io-client';
import { SOCKET_SERVER } from '@/constants';
import { useAuthState } from '@/hooks/redux';

const socket = io(SOCKET_SERVER, { path: '' });

const SocketProvider: FC = ({
  children
}) => {
  const { account, tokens } = useAuthState();

  useEffect(() => {
    if (account) {
      socket.emit('join', tokens?.accessToken);

      const eventHandler = (data: any) => {
        console.log('***** event handler ***', data);
      }

      socket.on(account.id, eventHandler);

      return () => {
        socket.off(account.id, eventHandler);
      }
    }
  }, [account]);

  return (
    <>
      {children}
    </>
  )
};

export default SocketProvider;
