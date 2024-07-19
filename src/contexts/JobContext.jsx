import React, { createContext, useContext } from "react";

const JobContext = createContext();

export const useJob = () => useContext(JobContext);

export const JobProvider = ({ children, deleteJob, addJob }) => {
  return (
    <JobContext.Provider value={{ deleteJob, addJob }}>
      {children}
    </JobContext.Provider>
  );
};
