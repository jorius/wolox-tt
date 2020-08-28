// @packages
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlLoginForm from './login-form';
import { initialState } from './state';
import { isAllPropsValid } from '../../util';

// @styles
import styles from './styles';
import { globalUI } from '../../core';

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleFieldOnChange = this.handleFieldOnChange.bind(this);
        this.handleOnRememberMe = this.handleOnRememberMe.bind(this);
        this.handleOnLogIn = this.handleOnLogIn.bind(this);
    }

    get isFormValid() {
        return isAllPropsValid(this.state);
    }

    handleFieldOnChange({ name, isValid, value }) {
        this.setState({
            [name]: {
                isValid,
                value
            }
        });
    }

    handleOnRememberMe({ value }) {
        const { userProps } = this.props;
        userProps.onRememberMe(value);
    }

    handleOnLogIn() {
        if (this.isFormValid) {
            const { userProps } = this.props;
            const { email, password } = this.state;

            userProps
                .onLogin({
                    email: email.value,
                    password: password.value
                }).then(() => {
                    globalUI.navigateToDefaultUrl();
                }).catch(() => {});
        } else {
            this.setState({ showErrors: true });
        }
    }

    render() {
        const {
            classes,
            userProps: { rememberMe }
        } = this.props;

        const { email, password, showErrors } = this.state;

        return (
            <div
                className={classes.loginPage}
                id="login-page"
            >
                <CtrlLoginForm
                    emailValue={email.value}
                    id="login-page-form"
                    onFieldChange={this.handleFieldOnChange}
                    onLogin={this.handleOnLogIn}
                    onRememberMe={this.handleOnRememberMe}
                    passwordValue={password.value}
                    rememberMeValue={rememberMe}
                    showErrors={showErrors}
                />
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
    userProps: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        onLogin: PropTypes.func.isRequired,
        onRememberMe: PropTypes.func.isRequired,
        rememberMe: PropTypes.bool.isRequired
    }).isRequired
};

export default withStyles(styles)(LoginPage);
