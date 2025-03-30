import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomXXXLrg']}>
				<section className={css.sections}>
					<ul className={css.social}>
						<li><h4>Follow Me On:</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a  key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>
				</section>
				<section className={css.github}>
				<a href="https://github.com/atlamors/portfolio" rel="noreferrer" target="_blank">
					<h5>View This Template Repository on GitHub</h5>
				</a>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
