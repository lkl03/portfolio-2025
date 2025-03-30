import Head from 'next/head';

import Hero from '../components/sections/index/hero'
import Looking from '../components/sections/index/looking'
import About from '../components/sections/index/about'
import Technical from '../components/sections/index/technical'
import Career from '../components/sections/index/career'
import FeaturedProjects from '../components/sections/projects/featured'

import Color from '../components/utils/page.colors.util'

import colors from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Head>
				<title>Luca Lago – Portfolio</title>
				<meta name="description" content="A curated selection of work by Luca Lago – showcasing thoughtful design and front-end development." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="Luca Lago – Portfolio" />
				<meta property="og:description" content="A curated selection of work by Luca Lago – showcasing thoughtful design and front-end development." />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Color colors={colors} />
			<Hero />
			<FeaturedProjects />
			<About />
			<Career />
			<Looking />

		</>
	);
}