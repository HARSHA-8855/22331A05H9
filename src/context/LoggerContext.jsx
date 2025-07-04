import React, { createContext, useContext } from 'react';

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const log = (message, data) => {
    const logEntry = {
      timestamp: new Date().toISOString(),
      message,
      data,
    };
    // Custom logging - you can store it or send to a file/server if needed
    document.dispatchEvent(new CustomEvent('app-log', { detail: logEntry }));
  };

  return (
    <LoggerContext.Provider value={{ log }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = () => useContext(LoggerContext);