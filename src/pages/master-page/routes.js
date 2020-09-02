// @packages
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import { config } from '../../config';
import { mapComponent } from './component-mapper';

// @styles
import styles from './styles';

const CtrlRoutes = ({
    classes,
    userProps
}) => {
    const routes = userProps.isLoggedIn
        ? config.routes.filter((route) =>
            (route.permission === null || userProps.permissions.includes(route.permission)))
        : config.routes.filter((route) => route.permission === null);

    const containerClass = classNames({
        [classes.loggedInPage]: userProps.isLoggedIn
    });

    return (
        <div className={containerClass}>
            <Switch>
                {
                    routes.map((route, index) => (
                        <Route
                            component={mapComponent(route.container)}
                            exact
                            key={index}
                            path={route.url}
                        />
                    ))
                }
            </Switch>
        </div>
    );
};

CtrlRoutes.propTypes = {
    classes: PropTypes.object.isRequired,
    userProps: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default withStyles(styles)(CtrlRoutes);
