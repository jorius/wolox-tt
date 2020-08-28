// @packages
import PropTypes from 'prop-types';
import React from 'react';

// @scripts
import CtrlMainMenu from '../../components/navigation/ctrl-main-menu';
import CtrlMainSubMenu from '../../components/navigation/ctrl-main-submenu';
import CtrlTopBar from '../../components/navigation/ctrl-top-bar';
import { config } from '../../config';

const CtrlRestrictedControls = ({
    currentUrl,
    mainMenu,
    userProps
}) => {
    if (!userProps.isLoggedIn) {
        return null;
    }

    return ([
        <CtrlTopBar
            id="ctrl-top-bar"
            key="ctrl-top-bar"
            profileMenu={userProps.profileMenu}
            userName={userProps.name}
            userPermissions={userProps.permissions}
        />,
        <CtrlMainMenu
            currentUrl={currentUrl}
            id="ctrl-main-menu"
            key="ctrl-main-menu"
            menuItems={mainMenu.menuItems}
            onCollapseSubMenu={mainMenu.onCollapse}
            onExpandSubMenu={mainMenu.onExpand}
            subMenuIsExpanded={mainMenu.isExpanded}
            userPermissions={userProps.permissions}
        />,
        <CtrlMainSubMenu
            collapseTooltipLabel={config.text.topBar.collapse}
            currentUrl={currentUrl}
            id="ctrl-main-sub-menu"
            key="ctrl-main-sub-menu"
            onCollapseSubMenu={mainMenu.onCollapse}
            subMenuItems={mainMenu.menuItems}
            title={mainMenu.pageTitle}
            visible={mainMenu.isExpanded}
        />
    ]);
};

CtrlRestrictedControls.propTypes = {
    currentUrl: PropTypes.string.isRequired,
    mainMenu: PropTypes.shape({
        expandedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
        isExpanded: PropTypes.bool.isRequired,
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
        onCollapseItem: PropTypes.func.isRequired,
        onExpandItem: PropTypes.func.isRequired,
        pageTitle: PropTypes.string
    }).isRequired,
    userProps: PropTypes.shape({
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
        name: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
        profileMenu: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
            isDefault: PropTypes.bool,
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default CtrlRestrictedControls;
