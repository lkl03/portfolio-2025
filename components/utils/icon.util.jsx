// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add free icon packs to library
library.add(fas, far, fab)

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here.
 *
 * Only free icon packs are included.
 * 
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {JSX.Element} 	<Icon />
 */
export default function Icon({ icon }) {
	const [iconType, iconKey] = icon
	const [stateIconKey, setIconKey] = useState('circle-notch')

	useEffect(() => setIconKey(iconKey), [iconKey])

	return (
		<FontAwesomeIcon icon={[iconType, stateIconKey]} />
	)
}

