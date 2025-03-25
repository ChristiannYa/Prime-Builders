import { useState, useEffect } from 'react';

export const useRateLimit = (limit = 5, timeWindow = 60000) => {
  const [attempts, setAttempts] = useState([]);
  const [isLimited, setIsLimited] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Clean up old attempts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setAttempts(prev => prev.filter(time => now - time < timeWindow));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeWindow]);

  // Update time remaining if rate limited
  useEffect(() => {
    if (isLimited) {
      const interval = setInterval(() => {
        const oldestAttempt = attempts[0];
        const now = Date.now();
        const remaining = Math.max(0, timeWindow - (now - oldestAttempt));
        
        setTimeRemaining(Math.ceil(remaining / 1000));
        
        if (remaining <= 0) {
          setIsLimited(false);
          setTimeRemaining(0);
        }
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isLimited, attempts, timeWindow]);

  const attempt = () => {
    const now = Date.now();
    const newAttempts = [...attempts, now];
    
    setAttempts(newAttempts);
    
    if (newAttempts.length > limit) {
      setIsLimited(true);
      return false;
    }
    
    return true;
  };

  return { attempt, isLimited, timeRemaining };
};
