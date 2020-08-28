// @packages
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlIconButton from '../../common/ctrl-icon-button';
import CtrlProfileMenu from '../ctrl-profile-menu';
import { config } from '../../../config';
import { getNameInitials } from '../../../util';

// @styles
import styles from './styles';

const CtrlTopBar = ({
    className,
    classes,
    id,
    profileMenu,
    userName,
    userPermissions,
    visible
}) => {
    if (!visible) {
        return null;
    }

    const topBarClass = classNames(
        className,
        classes.topBar
    );

    const nameInitials = getNameInitials(userName);

    return (
        <AppBar
            className={topBarClass}
            classes={{ root: classes.topBarRoot }}
            id={id}
            position="fixed"
        >
            <Toolbar className={classes.topBarPadding}>
                <CtrlIconButton
                    className={classes.leftIcon}
                    icon="search"
                    id={`${id}-search`}
                    tooltip={config.text.topBar.search}
                    userPermissions={userPermissions}
                />
                <div className={classes.divider} />
                <CtrlIconButton
                    contextMenu={{
                        component: CtrlProfileMenu,
                        props: {
                            id: `${id}-profile-menu`,
                            profileMenu,
                            style: {
                                color: 'red'
                            },
                            userPermissions
                        }
                    }}
                    label={userName}
                    id={`${id}-user`}
                    userPermissions={userPermissions}
                    icon="arrow_drop_down"
                />
                <Button>
                    <div className={classes.avatarAdorment}>
                        <Avatar className={classes.avatar}>{nameInitials}</Avatar>
                    </div>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

CtrlTopBar.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    profileMenu: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
        isDefault: PropTypes.bool,
        name: PropTypes.string.isRequired
    })).isRequired,
    userName: PropTypes.string.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    visible: PropTypes.bool
};

CtrlTopBar.defaultProps = {
    className: null,
    visible: true
};

export default withStyles(styles)(CtrlTopBar);
