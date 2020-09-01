// @packages
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import { config } from '../../config';
import {
    getBaseUrl,
    navigateToUrl,
    navigateToExternalUrl
} from '../../util';

// @styles
import styles from './styles';

// @images
import BlackBullet from '../../assets/images/Ic_Bullet_2.svg';
import BlueBullet from '../../assets/images/Ic_Bullet_3.svg';
import GreenBullet from '../../assets/images/Ic_Bullet_1.svg';
import IcBrain from '../../assets/images/Ic_Brain.svg';
import IcDrinkSnacks from '../../assets/images/Ic_DrinkSnacks.svg';
import IcHomeOffice from '../../assets/images/Ic_HomeOffice.svg';
import IcHour from '../../assets/images/Ic_Hour.svg';
import IcIlustraHero from '../../assets/images/Ic_ilustra_Hero.png';
import IcLaptop from '../../assets/images/Ic_Laptop.svg';
import IcTechnologies from '../../assets/images/Ic_Technologies.svg';
import IcWorkshops from '../../assets/images/Ic_Workshops.svg';
import footerLogo from '../../assets/images/Ic_Wolox_Footer.svg';
import logo from '../../assets/images/logo_full_color.svg';

const LandingPage = ({ classes, onChangeLanguage, userIsLoggedIn }) => {
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
                    <img alt="logo" src={logo} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        <Link className={classes.cleanLink} to="/#start">
                            {config.text.landingPage.start}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        <Link className={classes.cleanLink} to="/#technologies">
                            {config.text.landingPage.technologies}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        <Link className={classes.cleanLink} to="/#benefits">
                            {config.text.landingPage.benefits}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.menuItem}
                        variant="body1"
                    >
                        <Link className={classes.cleanLink} to="/#requirements">
                            {config.text.landingPage.requirements}
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    {!userIsLoggedIn
                        ? (
                            <Button
                                classes={{ root: classes.loginButton }}
                                color="primary"
                                id="login-button"
                                size="large"
                                onClick={() => { navigateToUrl(`${getBaseUrl()}/#/login`); }}
                                value={config.text.loginPage.continue}
                            >
                                {config.text.loginPage.formTitle}
                            </Button>
                        )
                        : null}
                </Grid>
                <Grid item>
                    <ButtonGroup>
                        <Button onClick={() => { onChangeLanguage('es'); }} variant="text">es</Button>
                        <Button onClick={() => { onChangeLanguage('en'); }} variant="text">en</Button>
                    </ButtonGroup>
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
                id="start"
                justify="space-between"
            >
                <Grid item>
                    <Typography
                        className={classes.mainText}
                        variant="h3"
                    >
                        {config.text.landingPage.welcomeToYour}
                    </Typography>
                    <Typography
                        className={classNames(classes.mainText, classes.bold)}
                        variant="h3"
                    >
                        {config.text.landingPage.technicalInterview}
                    </Typography>
                    <Typography
                        className={classNames(classes.mainText, classes.green)}
                        variant="h3"
                    >
                        {config.text.appName}
                    </Typography>
                </Grid>
                <Grid className={classes.icIlustraHeroImage} item>
                    <img alt="background" src={IcIlustraHero} />
                </Grid>
            </Grid>
            <Grid
                alignItems="center"
                className={classes.secondContent}
                container
                direction="row"
                id="technologies"
                justify="space-between"
            >
                <Grid item>
                    <Typography
                        className={classes.subText}
                        variant="h4"
                    >
                        {config.text.landingPage.weAreLookingFor}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt="technologies" src={IcTechnologies} />
                </Grid>
            </Grid>
            <Grid
                className={classes.secondContent}
                container
                id="benefits"
                justify="space-around"
            >
                <Grid className={classes.woloxerLeft} item>
                    <Grid
                        alignContent="center"
                        alignItems="center"
                        container
                        direction="column"
                        justify="center"
                        style={{ height: 400 }}
                    >
                        <Grid item>
                            <div style={{ display: 'flex', padding: 20 }}>
                                <Typography className={classNames(classes.bold, classes.green)} variant="h3">
                                    350 +&nbsp;
                                </Typography>
                                <Typography className={classNames(classes.blue, classes.bold)} variant="h3">
                                    Woloxers
                                </Typography>
                            </div>
                            <div className={classes.twitter}>
                                <Typography className={classes.twitterLink}>@Wolox</Typography>
                                <Button
                                    className={classes.followUsButton}
                                    onClick={() => { navigateToExternalUrl('https://twitter.com/Wolox'); }}
                                    variant="outlined"
                                >
                                    {config.text.landingPage.followUs}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.woloxerRight} item>
                    <Grid
                        alignContent="center"
                        alignItems="center"
                        container
                        direction="column"
                        justify="center"
                        style={{ height: 400 }}
                    >
                        <Grid item>
                            <Typography className={classes.bold} variant="h3">
                                {config.text.landingPage.weWorkFor}
                            </Typography>
                            <div style={{ display: 'flex' }}>
                                <Typography className={classNames(classes.blue, classes.bold)} variant="h3">
                                    {config.text.landingPage.turn}
                                    &nbsp;
                                </Typography>
                                <Typography className={classNames(classes.bold, classes.green)} variant="h3">
                                    {config.text.landingPage.ideas}
                                </Typography>
                            </div>
                            <Typography className={classes.bold} variant="h3">
                                {config.text.landingPage.products}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                className={classes.secondContent}
                container
                justify="center"
            >
                <Grid item>
                    <Typography className={classes.bold} variant="h4">
                        {config.text.landingPage.amongBenefits}
                        &nbsp;&nbsp;
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classNames(classes.bold, classes.blue)} variant="h4">;)</Typography>
                </Grid>
            </Grid>
            <Grid
                alignContent="center"
                alignItems="center"
                className={classes.benefits}
                container
                id="requirements"
                justify="space-between"
            >
                <Grid item>
                    <img alt={config.text.landingPage.flexibleSchedule} src={IcHour} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold)}>
                        {config.text.landingPage.flexibleSchedule}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt={config.text.landingPage.homeOffice} src={IcHomeOffice} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold)}>
                        {config.text.landingPage.homeOffice}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt={config.text.landingPage.trainingsAndWorkshops} src={IcWorkshops} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold)}>
                        {config.text.landingPage.trainingsAndWorkshops}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt={config.text.landingPage.snacksAndFruits} src={IcDrinkSnacks} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold)}>
                        {config.text.landingPage.snacksAndFruits}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt={config.text.landingPage.remoteWeek} src={IcLaptop} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold, classes.remoteWeek)}>
                        {config.text.landingPage.remoteWeek}
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt={config.text.landingPage.workInLatestTech} src={IcBrain} style={{ width: 100 }} />
                    <Typography className={classNames(classes.benefitsLegend, classes.bold)}>
                        {config.text.landingPage.workInLatestTech}
                    </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid
                container
                alignItems="center"
                justify="space-around"
            >
                <Grid item>
                    <Typography className={classes.bold} variant="h4">
                        {config.text.landingPage.requirements}
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid className={classes.requirementItem} item>
                            <img alt="green-bullet" className={classes.bullet} src={GreenBullet} />
                            <Typography className={classes.bold}>{config.text.landingPage.advancedStudents}</Typography>
                        </Grid>
                        <Grid className={classes.requirementItem} item>
                            <img alt="black-bullet" className={classes.bullet} src={BlackBullet} />
                            <Typography className={classes.bold}>{config.text.landingPage.englishLevel}</Typography>
                        </Grid>
                        <Grid className={classes.requirementItem} item>
                            <img alt="blue-bullet" className={classes.bullet} src={BlueBullet} />
                            <Typography className={classes.bold}>
                                {config.text.landingPage.knowledgeInAgileMethods}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.footer} container justify="center">
                <Grid item>
                    <Typography className={classes.bold} variant="h3">
                        {config.text.landingPage.thanksFor}
                        &nbsp;
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classNames(classes.blue, classes.bold)} variant="h3">
                        {config.text.landingPage.completeTheExercise}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        {config.text.landingPage.weInviteYou}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item>
                    <Button
                        className={classes.learnMoreButton}
                        onClick={() => { navigateToExternalUrl('https://www.wolox.com.ar/'); }}
                        variant="contained"
                    >
                        {config.text.landingPage.learnMore}
                    </Button>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid className={classes.footerLogo} item>
                    <img alt="footer-logo" src={footerLogo} />
                </Grid>
            </Grid>
        </div>
    );
};

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
    onChangeLanguage: PropTypes.func.isRequired,
    userIsLoggedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(LandingPage);
