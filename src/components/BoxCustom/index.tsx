import { Box, Image } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface ContainerComponentProps {
    children: ReactNode;
}
const BoxCustom: React.FC<ContainerComponentProps> = ({ children }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="blue.500">
            <Box bg="white" width="40%" padding="40px" borderRadius="md">
                <Box display="flex" alignItems="center" justifyContent="center" mb={10} h="100%">
                    <Image src={'/public/logo.png'} alt={'logo'} objectFit="cover" h={120} />
                </Box>
                {children}
            </Box>
        </Box>
    );
};
export default BoxCustom;
