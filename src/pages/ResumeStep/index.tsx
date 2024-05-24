import React from 'react';
import { Box, Button, Heading, Flex, Text, useToast } from '@chakra-ui/react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const ResumeStep: React.FC = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [amount] = useLocalStorage<number>('amount', 0);
    const [months] = useLocalStorage<number>('month', 0);

    // Calculando juros de 1% ao mês (valor fictício)
    const interestRate = 0.01;
    const totalAmount = amount * (1 + interestRate * months);
    const monthlyPayment = totalAmount / months;
    const handleSendSimulation = () => {
        toast({
            title: 'Proposta Enviada',
            description: "Aguarde, entraremos em contato em breve.",
            status: 'success',
            duration: 9000,
            position: "top-right",
            isClosable: true,
        })
    }
    return (
        <Flex flexDirection="column" gap={8} alignItems="center" justifyContent={"center"}>
            <Heading as="h2" fontSize="2xl" fontWeight="semibold" color={'GrayText'} textAlign="center">
                Mensalidade:
                <Text fontSize="xxx-large" color={'black'} fontWeight="bold" mb={4}>
                    {monthlyPayment ? monthlyPayment.toFixed(2) : 0}€
                </Text>
            </Heading>
            <Box textAlign="center">
                <Flex justifyContent="center" textAlign="center" flexWrap="wrap" gap={5}>
                    <Box flex="1" textAlign="start" m={2}>
                        <Text fontSize="xl" fontWeight="semibold" color={'GrayText'}>Meses:</Text>
                        <Text fontSize="xx-large" fontWeight="bold">{months}</Text>
                    </Box>
                    <Box flex="1" textAlign="start" m={2}>
                        <Text fontSize="xl" fontWeight="semibold" color={'GrayText'}>Taxa:</Text>
                        <Text fontSize="xx-large" fontWeight="bold">{(interestRate * 100).toFixed(0)}%</Text>
                    </Box>
                    <Box flex="1" textAlign="start" m={2}>
                        <Text fontSize="xl" fontWeight="semibold" color={'GrayText'}>Montante:</Text>
                        <Text fontSize="xx-large" fontWeight="bold">{amount}€</Text>
                    </Box>
                </Flex>
            </Box>
            <Button colorScheme="green" onClick={handleSendSimulation} size="lg">
                Enviar Simulação
            </Button>
            <Button colorScheme="blue" onClick={() => navigate("/")}>
                Fazer simulação novamente
            </Button>
        </Flex>
    );
};

export default ResumeStep;
