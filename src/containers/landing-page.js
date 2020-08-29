// @packages
import React from 'react';

// @scripts
import LandingPage from '../pages/landing-page';
import { config } from '../config';

const LandingPageContainer = () =>
    <LandingPage content={config.text.landingPage.content} />;

export default LandingPageContainer;
