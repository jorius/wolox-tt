// @packages
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';
import { globalUI } from '../../../core';

const CtrlMenuItem = ({
    classes,
    currentUrl,
    icon,
    id,
    label,
    onExpandSubMenu,
    permission,
    subMenuIsExpanded,
    url,
    userPermissions
}) => {
    const menuIconSelected = url === currentUrl
        ? classes.menuIconSelected
        : classes.menuIconUnselected;

    const handleOnMainMenuItemClick = () => {
        if (!subMenuIsExpanded) {
            onExpandSubMenu();
        }

        globalUI.navigateToUrl(url);
    };

    return (
        userPermissions.includes(permission) && (
            <div>
                <MenuItem
                    className={menuIconSelected}
                    id={id}
                    onClick={handleOnMainMenuItemClick}
                >
                    <Tooltip title={label} placement="right">
                        <div className={classes.menuItemDirection}>
                            <ListItemIcon>
                                <Icon
                                    className={classes.menuIcon}
                                    color="inherit"
                                    id={`${id}-icon`}
                                >
                                    {icon}
                                </Icon>
                            </ListItemIcon>
                        </div>
                    </Tooltip>
                </MenuItem>
                <Divider />
            </div>
        )
    );
};

CtrlMenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    currentUrl: PropTypes.string,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onExpandSubMenu: PropTypes.func.isRequired,
    permission: PropTypes.string.isRequired,
    subMenuIsExpanded: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired
};

CtrlMenuItem.defaultProps = {
    currentUrl: null
};

export default withStyles(styles)(CtrlMenuItem);
