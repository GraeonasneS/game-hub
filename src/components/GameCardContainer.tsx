import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={"10px"}
      overflow="hidden"
      fontSize="2xl"
      _hover={{
        transform: "scale(1.03)",
        transition: "transfom .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
