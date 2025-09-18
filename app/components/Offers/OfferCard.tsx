import { Card, Text, Button } from "@mantine/core";
import { ArrowLineUpRightIcon  } from "@phosphor-icons/react";


interface OfferCardProps {
  title: string;
  description: React.ReactNode;
  footer: string;
  buttonText?: string;
}

const OfferCard = (
  { title,
    description,
    footer,
    buttonText = "Explore Platform" }: OfferCardProps) => {
  return (
    <Card
      style={
        {
          width: 730
        }}
      withBorder
      shadow="sm"
      radius="lg">
      <Card.Section
        withBorder
        inheritPadding
        py="xs">
        <Text
          ta="center"
          fw={900}
          c="blue">
          {title}
        </Text>

        <Button
          mt="sm"
          variant="default"
          rightSection={<ArrowLineUpRightIcon size={20} weight="thin" color="black" />}
          fw={700}
          c="black"
        >
          {buttonText}
        </Button>

        <Text
          c="dimmed"
          mt="sm"
          size="sm">
          {description}
        </Text>
      </Card.Section>

      <Card.Section
        withBorder
        inheritPadding
        py="xs">
        <Text
          fw={500}
          c="teal.9">
          {footer}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default OfferCard;

