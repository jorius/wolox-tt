// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LandingPage from '../pages/landing-page';
import { config } from '../config';
import { updateLanguage } from '../redux';

const LandingPageContainer = ({ onChangeLanguage, userIsLoggedIn }) => {
    const handleOnChangeLanguage = (langCode) => {
        config.applyLanguage(langCode);
        onChangeLanguage(langCode);
    };
    return (
        <LandingPage
            content={config.text.landingPage.content}
            onChangeLanguage={handleOnChangeLanguage}
            userIsLoggedIn={userIsLoggedIn}
        />
    );
};

LandingPageContainer.propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
    userIsLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = ({
    user
}) => ({
    userIsLoggedIn: Boolean(user.account.authToken) && Boolean(user.account.permissions.length)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onChangeLanguage: updateLanguage
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LandingPageContainer);
