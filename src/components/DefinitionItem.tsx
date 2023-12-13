import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box margin={5}>
      <Heading as="dt" fontSize={"md"} color="gray.600" marginY={1}>
        {term}:
      </Heading>
      <Text as={"dd"}>{children}</Text>
    </Box>
  );
};

export default DefinitionItem;
