import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';
import Icon from '../../utils/icon.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';

import content from '../../../content/index/hero.json';

export default function Hero() {

  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <Section classProp={`${hero.section}`} style={{ position: 'relative' }}>
      <Container spacing={'VerticalXXXL'}>
        <TypeAnimation className={`${hero.preHeader}`}
          sequence={[
            content.intro.startDelay,
            () => { setTypingStatus('typing') },
            content.intro.start,
            () => { setTypingStatus('typed') },
            content.intro.deleteDelay,
            () => { setTypingStatus('deleting') },
            content.intro.end,
            () => { setTypingStatus('deleted') },
            content.intro.restartDelay,
          ]}
          speed={content.intro.speed}
          deletionSpeed={content.intro.deletionSpeed}
          wrapper={content.intro.wrapper}
          repeat={Infinity}
        />
        <section>
          <h1 className={hero.header}>
            {content.header.name}
          </h1>
          <h1 className={`${hero.header} ${hero.primaryDim}`}>
            {content.header.usp}
          </h1>
        </section>
        <section>
          <p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
            {content.paragraph}
          </p>
        </section>
        <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a
            className={`button ${button.primary}`}
            href="/CV-Luca Lago-2025.pdf"
            download="CV-Luca Lago-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
          <a
            className={`button ${button.secondary}`}
            href="/#featured-projects"
          >
            View My Projects
          </a>
        </section>
      </Container>

      {/* Scroll Down Icon */}
      <a href="#featured-projects" className={hero.scrollDown}>
        <Icon icon={['fas', 'chevrons-down']} />
      </a>

      <HeroBg theme="bg-color-1" />
    </Section>
  )
}