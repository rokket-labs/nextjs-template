import { Box, Container, Heading, Link, Text, WrapItem } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'

import { LaunchData } from '../pages/launches'

type LaunchProps = {
  data: LaunchData
}

const randomElem = <T,>(arr: T[]): T | null =>
  arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null

export const Launch: React.FC<LaunchProps> = ({ data }) => (
  <WrapItem>
    <Box borderWidth={1} borderRadius={8} minW={400}>
      <Container borderRadius={2} py="0.5rem">
        <Image
          height={200}
          width={350}
          layout="responsive"
          src={
            randomElem<{ name: string; image: string; home_port: string }>(
              data.ships,
            )?.image ||
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRocket&psig=AOvVaw1RYDAh-BxCkYXDRmVwYK5Q&ust=1614093755794000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCC3fzl_e4CFQAAAAAdAAAAABAD'
          }
        />
      </Container>
      <Box mx="0.75rem" my="0.5rem">
        <Heading as="h6" size="sm">
          {data.mission_name}
        </Heading>
        <Text mt="0.25rem">
          {dayjs(data.launch_date_local).format('YYYY-MM-DD')}
        </Text>
        {data.links.article_link && (
          <Link
            href={data.links.article_link}
            color="primary.active"
            isExternal>
            Go to launch article
          </Link>
        )}
      </Box>
    </Box>
  </WrapItem>
)
