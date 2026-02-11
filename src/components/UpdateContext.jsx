import { createContext, useContext, useEffect, useState } from "react";

const UpdateContext = createContext();

export function UpdateProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const commitMessage = import.meta.env.VITE_VERCEL_GIT_COMMIT_MESSAGE;
  const commitSha = import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA;

  useEffect(() => {
    localStorage.setItem('lastSeenCommit', 0)
    const lastSeen = localStorage.getItem("lastSeenCommit");
    console.log(lastSeen);
    console.log(commitMessage);
    console.log(commitSha);
    
    if (commitSha && lastSeen !== commitSha) {
        console.log('mudja');
        
      setIsOpen(true);
      localStorage.setItem("lastSeenCommit", commitSha);
    }
  }, [commitSha]);

  return (
    <UpdateContext.Provider value={{ isOpen, setIsOpen, commitMessage }}>
      {children}
    </UpdateContext.Provider>
  );
}

export const useUpdate = () => useContext(UpdateContext);