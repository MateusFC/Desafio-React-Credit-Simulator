import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RangerComponent from "../../components/RangerComponent";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const MonthsStep: React.FC = () => {
    const navigate = useNavigate()
    const [months, setMonths] = useLocalStorage<number>('month', 0);
    const handleNext = () => {
        if (months >= 3 && months <= 12) {
            navigate("/resume")
        } else {
            alert("Os meses devem estar entre 3 e 12");
        }
    }

    useEffect(() => { if (months === 0) setMonths(3) }, [])

    return (
        <Flex flexDirection="column" gap={12}>
            <Heading as="h2" fontSize="xx-large" fontWeight="bold">
                Segundo Passo
            </Heading>
            <RangerComponent label={'Prazo'} value={months} type="months" amount={months} limits={{ max: 12, min: 3 }} onChange={(e) => setMonths(Number(e))} />
            <Flex flexDirection={"row"} gap={4}>
                <Button width={'full'} colorScheme="red" onClick={() => navigate("/")}>
                    Voltar
                </Button>
                <Button width={'full'} colorScheme="blue" onClick={handleNext}>
                    Próximo
                </Button>
            </Flex>
        </Flex>
    )
}

export default MonthsStep;
