// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'
import { differenceInYears, differenceInMonths } from 'date-fns';

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	function calculateDuration(startDate) {
		const now = new Date();
		const years = differenceInYears(now, startDate);
		const months = differenceInMonths(now, startDate) % 12;
		return `${years} years ${months} months`;
	}

	function calculateSpecificDuration(startDate, endDate) {
		const years = differenceInYears(endDate, startDate);
		const months = differenceInMonths(endDate, startDate) % 12;
		return years > 0 ? `${years} years ${months} months` : `${months} months`;
	}

	return (
		<Section id="my-experience" classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="My Experience"
					preTitle="Career"
					subTitle="Discover my journey throughout the years."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
								<span className={career.companyHeader}>
									<h3>Luxury Presence</h3>
									<h4>Web Builder · Contractor Full-time</h4>
									<h4 style={{ fontWeight: 300 }}>May 2022 - Present · {calculateDuration(new Date(2022, 4))}</h4>
									<h5 style={{ fontWeight: 300, fontStyle: 'italic' }}>Austin, TX (Remote)</h5>
								</span>
								<p>
								My role includes leading and coordinating design teams, developing responsive websites using Figma and CSS with a focus on optimized UI/UX, and effectively training and onboarding new team members—requiring a strategic, adaptable approach to ensure seamless collaboration and continuous improvement.
								</p>
							<Badges list={luxuryPresence} block="stack"/>
						</div>
					</article>

					<article className={`${career.company} ${career.reverse}`}>
							<div className={ `${career.companyContent} ${career.textEnd}`}>
								<span className={career.companyHeader}>
									<h3>Small Projects Bureau Development</h3>
									<h4>Engineer Project Manager · Contractor Part-time</h4>
									<h4 style={{ fontWeight: 300 }}>Aug 2024 - Oct 2024 · {calculateSpecificDuration(new Date(2024, 8), new Date(2024, 10))}</h4>
									<h5 style={{ fontWeight: 300, fontStyle: 'italic' }}>New York City, NY (Remote)</h5>
								</span>
								<p>
								My role involves leading projects from strategic planning through execution, supervising teams, optimizing development processes, and ensuring exceptional user experiences—requiring a highly agile and continuously evolving approach to project management and team coordination.
								</p>
							<Badges list={spbd} block="stack" align="end"/>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
								<span className={career.companyHeader}>
									<h3>Coinpeeker</h3>
									<h4>User Interface Designer · Part-time</h4>
									<h4 style={{ fontWeight: 300 }}>Apr 2024 - Aug 2024 · {calculateSpecificDuration(new Date(2024, 4), new Date(2024, 8))}</h4>
									<h5 style={{ fontWeight: 300, fontStyle: 'italic' }}>Buenos Aires, AR (Remote)</h5>
								</span>
								<p>
								My work focuses on designing intuitive user interfaces in Figma, particularly optimized for mobile devices, collaborating closely with development teams to maintain UI/UX consistency, and refining user flows through usability testing—this demands a tailored and continuously evolving approach to creating seamless user experiences.
								</p>
							<Badges list={coinpeeker} block="stack"/>
						</div>
					</article>

					<article className={`${career.company} ${career.reverse}`}>
						<div className={ `${career.companyContent} ${career.textEnd}`}>
								<span className={career.companyHeader}>
									<h3>Bioprotece S.A.</h3>
									<h4>Web Developer · Permanent Full-Time</h4>
									<h4 style={{ fontWeight: 300 }}>Feb 2022 - May 2022 · {calculateSpecificDuration(new Date(2022, 2), new Date(2022, 5))}</h4>
									<h5 style={{ fontWeight: 300, fontStyle: 'italic' }}>Buenos Aires, AR (Remote)</h5>
								</span>
								<p>
								My role includes developing a responsive website using NextJS, Firebase, and TailwindCSS, as well as implementing a custom employee management system in PHP—this requires a highly adaptable and evolving approach to how digital solutions are architected and maintained.
								</p>
								<Badges list={bioprotece} block="stack" align="end"/>

						</div>
					</article>
				</section>
			</Container>
		</Section>
	);
}

const luxuryPresence	= [
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 			type: 'devicon' },
	{ key: 'salesforce', 	name: 'Salesforce', 				type: 'devicon' },
	{ key: 'slack', 		name: 'Slack', 				type: 'devicon' },
]

const spbd	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },

	{ key: 'asana', 	name: 'Asana', 				type: 'devicon' },
]

const coinpeeker	= [
	{ key: 'figma', 		name: 'Figma', 			type: 'devicon' },
	{ "key": "optimalworkshop", 		"name": "Optimal Workshop", 		"type": "devicon" },
	{ "key": "whimsical", 		"name": "Whimsical", 		"type": "devicon" },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'slack', 	name: 'Slack', 				type: 'devicon' },
]

const bioprotece	= [
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ "key": "firebase", 	"name": "Firebase", 	"type": "devicon" },
	{ "key": "tailwindcss",		"name": "TailwindCSS", 		"type": "devicon" },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },

]