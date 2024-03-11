import React, { PropsWithChildren } from 'react';
import * as CSS from 'csstype';
import animationStyles from './index.css';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#000',
    overflow: 'hidden',
  },
  fade: {
    position: 'relative' as CSS.Property.Position,
    width: '100%',
    minHeight: '60vh',
    top: '-25px',
    backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
    zIndex: 1,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative' as CSS.Property.Position,
    height: '800px',
    color: '#feda4a',
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize: '500%',
    fontWeight: '600',
    letterSpacing: '6px',
    lineHeight: '150%',
    perspective: '400px',
    textAlign: 'justify' as CSS.Property.TextAlign,
  },
  crawl: {
    position: 'relative' as CSS.Property.Position,
    top: '9999px',
    transformOrigin: '50% 100%',
    animation: `${animationStyles.crawl} 60s linear`,
  },
  title: {
    fontSize: '90%',
    textAlign: 'center' as CSS.Property.TextAlign,
  },
  subTitle: {
    margin: '0 0 100px',
    textTransform: 'uppercase' as CSS.Property.TextTransform,
  },
};

const Crawl = ({
  children,
  containerStyles,
  fadeStyles,
  textContainerStyles,
  crawlStyles,
  titleStyles,
  subTitleStyles,
  textStyles,
  title,
  subTitle,
  text,
  speed = 60,
}: PropsWithChildren<{
  containerStyles?: CSS.Properties;
  fadeStyles?: CSS.Properties;
  textContainerStyles?: CSS.Properties;
  crawlStyles?: CSS.Properties;
  titleStyles?: CSS.Properties;
  subTitleStyles?: CSS.Properties;
  textStyles?: CSS.Properties;
  title: string;
  subTitle: string;
  text: string;
  speed?: number;
}>) => (
  <div className="crawler" style={{ ...styles.container, ...containerStyles }}>
    <div style={{ ...styles.fade, ...fadeStyles }}></div>
    <section style={{ ...styles.textContainer, ...textContainerStyles }}>
      <div
        style={{
          ...styles.crawl,
          ...crawlStyles,
          animation: `${animationStyles.crawl} ${speed}s linear`,
        }}
      >
        <div style={{ ...styles.title, ...titleStyles }}>
          <p className="title">{title}</p>
          <h1
            className="subTitle"
            style={{ ...styles.subTitle, ...subTitleStyles }}
          >
            {subTitle}
          </h1>
        </div>
        <p className="text" style={textStyles}>
          {text}
        </p>
        {children}
      </div>
    </section>
  </div>
);

export default Crawl;
