import React from 'react';
import { Flex, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderProps, Box } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

interface RangerProps extends SliderProps {
    amount: number;
    label?: string;
    type?: "currency" | "months";
    limits?: { min: number; max: number };
    onChange: (value: number) => void;
}

const RangerComponent: React.FC<RangerProps> = ({ label, type, amount, limits, onChange, ...props }) => {
    const handleIncrease = () => {
        if (limits && amount < limits.max) {
            onChange(amount + 1);
        }
    };

    const handleDecrease = () => {
        if (limits && amount > limits.min) {
            onChange(amount - 1);
        }
    };

    return (
        <Flex flexDirection="column">
            <Flex mb={4} justifyContent="space-between" alignItems="center">
                {label && (
                    <Text fontWeight="semibold" fontSize="large">{label}</Text>
                )}
                {type && (
                    <Text fontSize="x-large" fontWeight="semibold">
                        {amount}{type === "currency" ? "€" : " meses"}
                    </Text>
                )}
            </Flex>
            {limits && (
                <Flex flexDirection="column">
                    <Flex flexDirection="row" justifyContent="space-around" alignItems="center" gap={5}>
                        <Box
                            as="button"
                            boxSize={10}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            border="2px solid"
                            borderColor="gray.200"
                            borderRadius="50%"
                            _hover={{ borderColor: "blue.500", color: "blue.500" }}
                            _active={{ borderColor: "blue.500", color: "blue.500" }}
                            onClick={handleDecrease}
                        >
                            <MinusIcon boxSize={4} />
                        </Box>
                        <Slider min={limits.min} max={limits.max} step={1} value={amount} onChange={onChange} {...props}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb fontSize="sm" boxSize="32px" />
                        </Slider>
                        <Box
                            as="button"
                            boxSize={10}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            border="2px solid"
                            borderColor="gray.200"
                            borderRadius="50%"
                            _hover={{ borderColor: "blue.500", color: "blue.500" }}
                            _active={{ borderColor: "blue.500", color: "blue.500" }}
                            onClick={handleIncrease}
                        >
                            <AddIcon boxSize={4} />
                        </Box>
                    </Flex>
                    <Flex mt={5} justifyContent="space-between">
                        <Text>{limits.min}</Text>
                        <Text>{limits.max}</Text>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export default RangerComponent;
