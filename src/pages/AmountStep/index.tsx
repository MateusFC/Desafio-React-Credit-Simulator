import React, { useEffect } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import RangerComponent from '../../components/RangerComponent';
import { useLimits } from '../../context/limits';

const AmountStep: React.FC = () => {
    const navigate = useNavigate();
    const { limits, loading } = useLimits();
    const [amount, setAmount] = useLocalStorage<number>('amount', limits?.min ?? 0);
    useEffect(() => {
        if (amount === 0 && limits) {
            setAmount(limits.min);
        }
    }, [amount, limits, loading, setAmount]);

    const handleSliderChange = (newAmount: number) => {
        if (limits && newAmount >= limits.min && newAmount <= limits.max) {
            setAmount(newAmount);
        }
    };

    return (
        <Flex flexDirection="column" gap={12}>
            <Heading as="h2" fontSize="xx-large" fontWeight="bold">
                Primeiro Passo
            </Heading>
            <RangerComponent label={'Montante'} type="currency" amount={amount} limits={limits!} onChange={handleSliderChange} />
            <Flex>
                <Button width={'full'} colorScheme="blue" onClick={() => navigate('/months')}>
                    Próximo
                </Button>
            </Flex>
        </Flex>
    );
};

export default AmountStep;
