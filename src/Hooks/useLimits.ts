import { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

interface Limits {
  min: number;
  max: number;
}

const useLimits = () => {
  const [limits, setLimits] = useState<Limits | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLimits = async () => {
      try {
        const storedLimits = localStorage.getItem('limits');
        if (storedLimits) {
          setLimits(JSON.parse(storedLimits));
        } else {
          const response = await ApiService.getLimits();
          setLimits(response);
          localStorage.setItem('limits', JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error fetching limits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLimits();
  }, []);

  return { limits, loading };
};

export default useLimits;
