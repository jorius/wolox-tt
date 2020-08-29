// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';

const LandingPage = ({ classes, content }) =>
    (
        <div id="home-page" className={classes.landingPage}>
            {content}
        </div>
    );

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

export default withStyles(styles)(LandingPage);
