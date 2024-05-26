import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@chakra-ui/react';
import getLimits from '../services/limits-service';

interface Limits {
  min: number;
  max: number;
}

interface LimitsContextValue {
  limits: Limits | null;
  loading: boolean;
}

const LimitsContext = createContext<LimitsContextValue>({} as LimitsContextValue);

interface LimitsProviderProps {
  children: ReactNode;
}

export const LimitsProvider: React.FC<LimitsProviderProps> = ({ children }) => {
  const toast = useToast();
  const [limits, setLimits] = useState<Limits | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLimits = async () => {
      try {
        const storedLimits = localStorage.getItem('limits');
        if (storedLimits) {
          setLimits(JSON.parse(storedLimits));
        } else {
          const response = await getLimits();
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
  }, [toast]);

  return (
    <LimitsContext.Provider value={{ limits, loading }}>
      {children}
    </LimitsContext.Provider>
  );
};

export const useLimits = (): LimitsContextValue => {
  const context = useContext(LimitsContext);
  if (context === undefined) {
    throw new Error('useLimits must be used within a LimitsProvider');
  }
  return context;
};
