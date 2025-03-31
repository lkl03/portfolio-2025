// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="about-me" classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="My Bio"
					subTitle="A brief overview of my background and interests."
				/>
				<section className={about.content}>
					<div className={`${about.image} ${about.background} ${about.technicalSvg} ${about.moveHorizontal}`} style={{ zIndex: -1 }}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
					{/*<div className={about.image}>*/}
						{/*<img src="/img/myself.jpg" alt="My photo"/>*/}
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					{/*</div>*/}
					
					<div className={about.copy} >
						<CopyBlock 
							title="How I started"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'face-smile' ]}
							copy="My passion for building websites began in childhood when I created a fan blog for the online game Club Penguin in 2012. At that time, website design wasn't nearly as widespread as it is today, but that early experience sparked a deep and lasting interest in the field. Over the years, I've progressed from mastering the fundamentals of Adobe Photoshop, HTML, and CSS to exploring advanced JavaScript and modern frameworks like ReactJS and NextJS. Eventually, I specialized in UI design, becoming proficient with industry-standard design tools such as Figma and Adobe XD. My development background, combined with my growing passion for design, allows me to engage fully across the entire creative process—from conceptualizing ideas from scratch to bringing them to life in functional apps and websites."
						/>
						<CopyBlock  
							title="Hobbies and Interests" 
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'pencil' ]}
							copy="When I'm not behind the lines of code, I like to go running, enjoy reading a good book, listen to quality music, or watch a good movie. I also have a YouTube channel where I bring out my creative side apart from design stuff :)"
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}