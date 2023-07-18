// Section.js
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';

const SectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overflow-anchor: none;
`;

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const Section = ({ sectionRef, children }) => {
  return (
    <Element ref={sectionRef}>
      <SectionWrapper>{children}</SectionWrapper>
    </Element>
  );
};

export default Section;
