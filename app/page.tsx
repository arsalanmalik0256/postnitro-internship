import { Badge, Button, Title } from '@mantine/core';
import React from 'react';


export default function HomePage() {
	return (
		<>
			<Button justify="center"
			size="md" 
			leftSection=  <Badge size="xs" circle/> 
			variant="default"
			 mt="m">
			 AI-Powered Carousel Generator for Instagram, LinkedIn & More
      </Button>
	  <Button
	  size="md"
	  variant="subtle"
	  color="black"
  > AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more. Boost your social media engagement with customizable, brand-aligned content generated in minutes
  </Button>


		</>
	
	);
}
