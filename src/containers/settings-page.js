// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import SettingsPage from '../pages/settings-page';
import { config } from '../config';
import { updateLanguage } from '../redux';

const SettingsPageContainer = ({
    languageCode,
    languageOnChange
}) => (
    <SettingsPage
        languageProps={{
            code: languageCode,
            list: config.masterData.languages,
            onChange: languageOnChange
        }}
    />
);

SettingsPageContainer.propTypes = {
    languageCode: PropTypes.string.isRequired,
    languageOnChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
    languageCode: user.languageCode
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    languageOnChange: updateLanguage
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(SettingsPageContainer);
