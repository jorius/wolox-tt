// @packages
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlSubMenuItems from './menu-items';

// @styles
import styles from './styles';

const CtrlMainSubMenu = ({
    className,
    classes,
    collapseTooltipLabel,
    currentUrl,
    id,
    onCollapseSubMenu,
    subMenuItems,
    title,
    visible
}) => {
    if (!visible) {
        return null;
    }

    const mainSubMenuClass = classNames(
        className,
        classes.mainSubMenu
    );

    const handleMenuExpanderOnClick = () => {
        if (visible) {
            onCollapseSubMenu();
        }
    };

    const items = subMenuItems.reduce((accumulator, currentValue) => {
        if (!accumulator.length && currentValue.url === currentUrl
            && Object.prototype.hasOwnProperty.call(currentValue, 'subMenuItems')) {
            return [...currentValue.subMenuItems];
        }

        return accumulator;
    }, []);

    if (visible && items && !items.length) {
        onCollapseSubMenu();
    }

    return (
        <Drawer
            className={mainSubMenuClass}
            classes={{ paper: classes.paper }}
            id={id}
            open={visible && Boolean(items && items.length)}
            variant="persistent"
        >
            <AppBar position="static">
                <Toolbar classes={{ root: classes.toolbarContainer }}>
                    <Typography
                        classes={{ root: classes.toolbarTypography }}
                        color="textPrimary"
                        gutterBottom
                        id={`${id}-title`}
                        variant="subtitle1"
                    >
                        {title}
                    </Typography>
                    <Button
                        className={classes.collapseButton}
                        color="inherit"
                        id={`${id}-close`}
                        onClick={handleMenuExpanderOnClick}
                    >
                        <Tooltip placement="right" title={collapseTooltipLabel}>
                            <Icon>navigate_before</Icon>
                        </Tooltip>
                    </Button>
                </Toolbar>
            </AppBar>
            <CtrlSubMenuItems items={items} />
        </Drawer>
    );
};

CtrlMainSubMenu.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    collapseTooltipLabel: PropTypes.string.isRequired,
    currentUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onCollapseSubMenu: PropTypes.func.isRequired,
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
    })).isRequired,
    title: PropTypes.string,
    visible: PropTypes.bool
};

CtrlMainSubMenu.defaultProps = {
    className: null,
    title: '',
    visible: true
};

export default withStyles(styles)(CtrlMainSubMenu);
