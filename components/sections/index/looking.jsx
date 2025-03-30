import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Specing util
import Spacing from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking from '../../../styles/sections/index/looking.module.scss';
import section from '../../../styles/blocks/section.title.module.scss'
import button from '../../../styles/blocks/button.module.scss';

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  const [typingTrueStatus, setTypingTrueStatus] = useState('Initializing');

  return (
    <Section id="contact" classProp={`${looking.section} borderBottom`}>
      <Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
        <h4>Get in touch!</h4>

        <h2 className={looking.json}>&#123;</h2>

        <h2 className={looking.jsonSub}>
          <span className={looking.highlight}>I am a</span>: [
        </h2>

        <TypeAnimation
          sequence={[
            1000,
            () => setTypingStatus('typing'),
            'Front-End Web Developer\n& UX/UI Designer',
            () => setTypingStatus('typed'),
            3000,
            () => setTypingStatus('deleting'),
            '',
            () => setTypingStatus('deleted'),
            1000,
          ]}
          speed={60}
          deletionSpeed={40}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className={`${looking.jsonSub} ${looking.highlight2}`}
          style={{ whiteSpace: 'pre-line' }}
        />

        <h2 className={looking.jsonSub}>],</h2>

        <h2 className={looking.jsonSub}>
          <span className={looking.highlight}>Ready to work</span>:&nbsp;
          <TypeAnimation
            sequence={[
              4800, // Ensure it waits for the first typing to finish clearly
              () => setTypingTrueStatus('typingTrue'),
              'true',
              () => setTypingTrueStatus('typedTrue'),
              3000,
              () => setTypingTrueStatus('deletingTrue'),
              '',
              () => setTypingTrueStatus('deletedTrue'),
              1000,
            ]}
            speed={10}
            deletionSpeed={10}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className={looking.highlight2}
          />
        </h2>

        <h2 className={looking.json}>&#125;</h2>

        <h4>Got a project or idea? Let’s make it happen!</h4>

        <section style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a
						className={`button ${button.primary}`}
						href="mailto:ll.lucalago@gmail.com"
						target="_blank" rel="noopener noreferrer"
					>
						Email Me
					</a>
          <a
						className={`button ${button.secondary} leaveSite`}
						href="https://www.linkedin.com/in/ll-luca-lago/"
						target="_blank" rel="noopener noreferrer"
					>
						Visit My LinkedIn
					</a>
        </section>
      </Container>
    </Section>
  );
}