"use client";
import {Card, Container, Text} from "@nextui-org/react";

export default function Home() {
  return (
    <Container as="main">
      <>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Let's
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Grill
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Takoyaki!!
        </Text>
      </>
      <Card variant="bordered" css={{ height: "360px" }}>
        <Card.Body as="iframe" src="https://app.vectary.com/p/0OUhsKuQI8AuMwK2wEJnir" css={{ border: "none" }}/>
      </Card>
    </Container>
  )
}
