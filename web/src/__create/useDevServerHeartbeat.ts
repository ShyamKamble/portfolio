'use client';

import { useEffect } from 'react';

export function useDevServerHeartbeat() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastAction = Date.now();
    const throttle = 60_000 * 3; // 3 minutes
    const timeout = 60_000; // 1 minute

    const keepAlive = () => {
      const now = Date.now();
      if (now - lastAction >= timeout) {
        fetch('/', {
          method: 'GET',
        }).catch(() => {
          // this is a no-op, we just want to keep the dev server alive
        });
        lastAction = now;
      }
    };

    const handleActivity = () => {
      lastAction = Date.now();
    };

    // Listen for user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    // Check periodically
    const interval = setInterval(keepAlive, throttle);

    return () => {
      clearInterval(interval);
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, []);
}
