import { Card, CardBody, HStack, Heading, Image, Wrap } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" fontSize="2xl" width={"300px"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <Wrap>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Wrap>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
