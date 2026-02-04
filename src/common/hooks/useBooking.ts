'use client';
import { useState, useEffect } from 'react';

export const useBooking = (houseId: string, initialBooked = false) => {
  const [isBooked, setIsBooked] = useState(initialBooked);
  const storageKey = `booking-${houseId}`;


  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      setIsBooked(stored === 'true');
    }
  }, [storageKey]);

  
  const toggleBooking = () => {
    const newState = !isBooked;
    setIsBooked(newState);
    localStorage.setItem(storageKey, String(newState));
  };

  return { isBooked, toggleBooking };
};
