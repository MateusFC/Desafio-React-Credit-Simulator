import { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

import { useToast } from '@chakra-ui/react';
interface Limits {
  min: number;
  max: number;
}

const useLimits = () => {
  const toast = useToast();
  const [limits, setLimits] = useState<Limits | null>(null);
  const [loading, setLoading] = useState(true);
  // Fiz uma abordagem de guardar os dados localStorage assim não vai ficar chamando APi várias vezes.
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
        toast({
          title: 'Error',
          description: `Error fetching limits: ${error}`,
          status: 'error',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
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
