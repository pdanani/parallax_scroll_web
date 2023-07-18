import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  margin-bottom: 10px;
`;

const NavigationButton = styled.button`
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 3px;
  transition: background-color 0.3s;
  ${({ active }) =>
    active &&
    `
    background-color: #333;
    color: #fff;
  `}

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Navigation = ({ scrollToSection }) => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationButton onClick={() => scrollToSection('profile')}>
            Profile
          </NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={() => scrollToSection('experiences')}>
            Experiences
          </NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={() => scrollToSection('education')}>
            Education
          </NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={() => scrollToSection('projects')}>
            Projects
          </NavigationButton>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default Navigation;
