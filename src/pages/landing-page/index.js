// @packages
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import { config } from '../../config';

// @styles
import styles from './styles';

// @images
import IcIlustraHero from '../../assets/images/Ic_ilustra_Hero.png';
import logo from '../../assets/images/logo_full_color.svg';

const LandingPage = ({ classes }) => {
    const renderMainMenu = (
        <>
            <Grid
                alignItems="center"
                className={classes.menu}
                container
                direction="row"
                justify="center"
            >
                <Grid item>
                    <img alt="logo" src={logo} style={{ width: 220 }} />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        {config.text.landingPage.start}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        {config.text.landingPage.technologies}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        {config.text.landingPage.benefits}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        {config.text.landingPage.requirements}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        classes={{ root: classes.loginButton }}
                        color="primary"
                        id="login-button"
                        size="large"
                        value={config.text.loginPage.continue}
                    >
                        {config.text.loginPage.formTitle}
                    </Button>
                </Grid>
            </Grid>
        </>
    );

    return (
        <div id="landing-page" className={classes.landingPage}>
            {renderMainMenu}
            <Grid
                alignItems="center"
                container
                direction="row"
                justify="center"
            >
                <Grid className={classes.welcomeSentenceContainer} item lg={6} md={6} sm={6} xs={12}>
                    <div className={classes.welcomeSentence}>
                        <Typography
                            className={classes.mainText}
                            variant="h3"
                        >
                            {config.text.landingPage.welcomeToYour}
                        </Typography>
                        <Typography
                            className={classes.mainText}

                            style={{ fontWeight: 'bold' }}
                            variant="h3"
                        >
                            {config.text.landingPage.technicalInterview}
                        </Typography>
                        <Typography
                            className={classes.mainText}
                            style={{ color: '#97CF00', fontWeight: 'bold' }}
                            variant="h3"
                        >
                            {config.text.appName}
                        </Typography>
                    </div>
                </Grid>
                <Grid className={classes.icIlustraHeroImage} item lg={6} md={6} sm={6} xs={12}>
                    <img alt="" src={IcIlustraHero} />
                </Grid>
            </Grid>
        </div>
    );
};

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
