// @packages
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlMenuItem from './menu-item';

// @styles
import styles from './styles';

const CtrlMainMenu = ({
    className,
    classes,
    currentUrl,
    id,
    menuItems,
    onExpandSubMenu,
    subMenuIsExpanded,
    userPermissions,
    visible
}) => {
    if (!visible) {
        return null;
    }

    const mainMenuClass = classNames(
        className,
        classes.mainMenu
    );

    return (
        <Drawer
            className={mainMenuClass}
            classes={{ paper: classes.menuPaper }}
            id={id}
            open
            variant="persistent"
        >
            {menuItems.map((menuItem, index) => (
                <CtrlMenuItem
                    currentUrl={currentUrl}
                    icon={menuItem.icon}
                    id={`${id}-${menuItem.name.toLowerCase()}-menu-item`}
                    key={index}
                    label={menuItem.description}
                    name={menuItem.name}
                    onExpandSubMenu={onExpandSubMenu}
                    permission={menuItem.permission}
                    subMenuIsExpanded={subMenuIsExpanded}
                    url={menuItem.url}
                    userPermissions={userPermissions}
                />
            ))}
        </Drawer>
    );
};

CtrlMainMenu.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    currentUrl: PropTypes.string,
    id: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string,
        isDefault: PropTypes.bool,
        name: PropTypes.string.isRequired,
        subMenuItems: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            icon: PropTypes.string,
            isDefault: PropTypes.bool,
            name: PropTypes.string.isRequired,
            subMenuItems: PropTypes.arrayOf(PropTypes.shape({
                description: PropTypes.string.isRequired,
                icon: PropTypes.string,
                isDefault: PropTypes.bool,
                name: PropTypes.string.isRequired
            }))
        }))
    })).isRequired,
    onExpandSubMenu: PropTypes.func.isRequired,
    subMenuIsExpanded: PropTypes.bool.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    visible: PropTypes.bool
};

CtrlMainMenu.defaultProps = {
    className: null,
    currentUrl: null,
    visible: true
};

export default withStyles(styles)(CtrlMainMenu);
