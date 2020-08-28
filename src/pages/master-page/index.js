// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlCommonControls from './common-controls';
import CtrlRestrictedControls from './restricted-controls';
import CtrlRoutes from './routes';

// @styles
import styles from './styles';

const MasterPage = ({
    classes,
    currentUrl,
    loadingPageProps,
    mainMenu,
    modalDialogProps,
    title,
    toastNotificationProps,
    userProps
}) => (
    <div id="master-page" className={classes.masterPage}>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <CtrlRoutes
            mainMenuIsExpanded={mainMenu.isExpanded}
            userProps={userProps}
        />
        <CtrlCommonControls
            modalDialogProps={modalDialogProps}
            loadingPageProps={loadingPageProps}
            toastNotificationProps={toastNotificationProps}
        />
        <CtrlRestrictedControls
            currentUrl={currentUrl}
            mainMenu={mainMenu}
            userProps={userProps}
        />
    </div>
);

MasterPage.propTypes = {
    classes: PropTypes.object.isRequired,
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
        onCollapse: PropTypes.func.isRequired,
        onCollapseItem: PropTypes.func.isRequired,
        onExpand: PropTypes.func.isRequired,
        onExpandItem: PropTypes.func.isRequired
    }).isRequired,
    modalDialogProps: PropTypes.shape({
        cancelLabel: PropTypes.string,
        customActions: PropTypes.element,
        customActionsTop: PropTypes.element,
        isVisible: PropTypes.bool.isRequired,
        maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        msg: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
        okLabel: PropTypes.string,
        onConfirm: PropTypes.func,
        onHide: PropTypes.func.isRequired,
        title: PropTypes.string
    }).isRequired,
    loadingPageProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    }).isRequired,
    title: PropTypes.string.isRequired,
    toastNotificationProps: PropTypes.shape({
        isVisible: PropTypes.bool.isRequired,
        msg: PropTypes.string,
        onHide: PropTypes.func.isRequired,
        type: PropTypes.string
    }).isRequired,
    userProps: PropTypes.shape({
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool.isRequired,
        name: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default withStyles(styles)(MasterPage);
