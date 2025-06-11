import React from 'react';

import Hero from './Hero';
import Education from './Education';
import Skill from './Skill';
import Certificate from './Certificate';
import Resume from './Resume';

function HomePage () {
    return (
        <>
          <Hero />
          <Education />
          <Skill />
          <Certificate />
          <Resume />
        </>
    );
}

export default HomePage;