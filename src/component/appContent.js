import React from 'react';
import Introduction from './introduction';
import Skills from './skills';
import Community from './community';
import FCCGZ from './fccgz';

const appContentContainer = {
  backgroundColor: '#fff',
};

const appContent = () => (
  <div style={appContentContainer}>
    <Introduction />
    <Skills />
    <Community />
    <FCCGZ />
  </div>
);

export default appContent;
