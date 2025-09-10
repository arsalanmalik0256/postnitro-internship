import { Avatar, Badge, Button, Container, Group, Stack, Text } from '@mantine/core';
import { Star } from '@phosphor-icons/react/dist/ssr/Star';

import { IconStar } from '@tabler/icons-react';
import React from 'react';


export default function Herosection() {
	return (
		<Stack align="center"
			justify="center">



			<Badge variant="dot"
				color="blue">
				AI-Powered Carousel Generator for Instagram, LinkedIn & More
			</Badge>

			<Text size="xl"
				lineClamp={2}
				fw={900}
				variant="gradient"
				gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
			>
				AI-Powered Carousel Generator for Instagram, LinkedIn

			</Text>

			<Text size="xl"
				
				fw={900}
				variant="gradient"
				gradient={{ from: 'rgba(0, 0, 0, 0.62)', to: 'rgba(0, 0, 0, 1)', deg: 0 }}
			>
				& More

			</Text>

			<Text
				size="xs">
				{/*fsgsfg*/}
				PostNitro's AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more. Boost your social media engagement with customizable, brand-
			</Text>
			<Text
				size="xs">
				{/*fsgsfg*/}
				aligned content generated in minutes.
			</Text>
			<Group>
				
			
      <Avatar variant="filled" radius="xl" src=""  />
      <Avatar variant="filled" radius="xl" src="" />
      <Avatar variant="filled" radius="xl" src="" />
      <Avatar variant="filled" radius="xl" src="" />
      <Avatar variant="filled" radius="xl" src="" />
      <Avatar variant="filled" radius="xl" src="" />
      <Avatar variant="filled" radius="xl" src="" />
	  
	
	  <Star size={20} color="orange" weight="fill" />
	  <Star size={20} color="orange" weight="fill" />
	  <Star size={20} color="orange" weight="fill" />
	  <Star size={20} color="orange" weight="fill" />
	  <Star size={20} color="orange" weight="fill" />
    </Group>
	
		</Stack>


	);
}
