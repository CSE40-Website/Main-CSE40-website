import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageCenter } from '../../styles/Global.js';

const LogoAnimation = styled.div`
  svg {
    width: ${({ logoSize }) => logoSize};
    transition: width 1s;
  }
`;

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState('80px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize('240px');
      } else {
        setLogoSize('350px');
      }
    };

    // Set initial logo size
    handleResize();

    // Update logo size on window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageCenter justifyCenter>
      <LogoAnimation logoSize={logoSize}>
      </LogoAnimation>
    </PageCenter>
  );
};

export default SplashScreen;