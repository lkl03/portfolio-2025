import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'
import ThemeMode from '../utils/theme.util'

import settings from '../../content/_settings.json'
import content  from '../../content/navbar.json'
import css from '../../styles/structure/navbar.module.scss'

export default function Navbar() {

	const router = useRouter()

	const [ menuState, menuToggle ] = useState()

	useEffect( () => {
		menuToggle(false)
	}, [] )

	useEffect( () => {
		class RouteEvents {

			constructor() {
				console.log(
					'%c☰  Navigation Router Events Loaded', 
					'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; '
				)
				this.addEventListeners()
			}

			closeMenu() {
				menuToggle(false)
			}

			addEventListeners() {
				router.events.on('routeChangeComplete', this.closeMenu)
			}

			removeEventListeners() {
				router.events.off('routeChangeComplete', this.closeMenu)
			}
		}

		const routeEvents = new RouteEvents

		return () => {
			routeEvents.removeEventListeners()
		}
	}, [router.events] )

	useEffect( () => {

		class ScrollEvents {

			constructor() {
				console.log(
					'%c▼  Navigation Scroll Events Loaded', 
					'background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; '
				)

				window.sticky		= {}
				window.sticky.nav	= document.querySelector(`nav`)

				this.addEventListeners()
			}

			addEventListeners() {
				if ( window.sticky.nav ) {
					window.addEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.addEventListener('scroll', this.maybeHideNav, false)
				}
			}

			removeEventListeners() {
				if ( window.sticky.nav ) {
					window.removeEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.removeEventListener('scroll', this.maybeHideNav, false)
				}
			}

			getPosition( e = null, top = true ) {
				let offset

				if ( !e ) return

				if ( top ) {
					offset = e.getBoundingClientRect().top + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				} else {
					offset = e.getBoundingClientRect().bottom + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				}	
			}

			maybeHideNav() {
				const nC = window.sticky.nav.classList;
			  
				if (window.scrollY > 0 && !nC.contains(css.visible)) {
				  nC.add(css.visible);
				} else if (window.scrollY === 0 && nC.contains(css.visible)) {
				  nC.remove(css.visible);
				}
			  
				this.lastY = window.scrollY;
			  }
		}

		const scrollEvents = new ScrollEvents

		return () => {
			scrollEvents.removeEventListeners()
		}
	}, [] )

	const toggleMenu = () => {
		let bool = ! menuState
		menuToggle(bool)
	}

	return (
		<nav id="Navbar" className={css.container}>
			<ul className={css.menu}>
				<li className={css.menuHeader}>
					<Link className={css.logo} href="/"  >
						{settings.name}
					</Link>
					<button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
						</div>
					</button>
				</li>
				<li data-open={menuState} className={css.menuContent}>
					<ul>
						{
						content.map( ({ url, title }, index) => {
							return (
								<li key={index}>
									<Link href={url}>{title}</Link>
								</li>
							)
						})	
						}
						<li>
							<ThemeMode />
						</li>
					</ul>
				</li>
			</ul>
			<span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
		</nav>
	)
}
