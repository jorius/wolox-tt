// @packages
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';
import { globalUI } from '../../../core';

const CtrlSubMenuItem = ({
    classes,
    items
}) => {
    const handleSubMenuItemClick = (url) => {
        globalUI.navigateToUrl(url);
    };

    return (
        <div className={classes.subMenuItem}>
            {items.map((item, index) => {
                const hasSubMenuItems = Array.isArray(item.subMenuItems) && item.subMenuItems.length;

                return (
                    <ExpansionPanel
                        key={index}
                        className={classes.subMenuItemPanel}
                    >
                        <ExpansionPanelSummary
                            className={classes.subMenuItemSummary}
                            expandIcon={hasSubMenuItems && <ExpandMoreIcon />}
                        >
                            <Typography
                                className={classes.subMenuItemTextExpanded}
                            >
                                {item.description}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.subMenuItemDetails}>
                            <List
                                className={classes.subMenuItemList}
                                component="div"
                                disablePadding
                            >
                                {hasSubMenuItems
                                    && item.subMenuItems.map((subItem, index) => (
                                        <ListItem
                                            button
                                            key={index + 1}
                                            onClick={() => handleSubMenuItemClick(subItem.url)}
                                        >
                                            <ListItemText
                                                className={classes.subMenuItemListText}
                                                primary={subItem.description}
                                            />
                                        </ListItem>
                                    ))}
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            })}
        </div>
    );
};

CtrlSubMenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
        isDefault: PropTypes.bool,
        name: PropTypes.string,
        permission: PropTypes.string,
        subMenuItems: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            icon: PropTypes.string,
            isDefault: PropTypes.bool,
            name: PropTypes.string,
            permission: PropTypes.string,
            url: PropTypes.string
        })),
        url: PropTypes.string
    })).isRequired
};

export default withStyles(styles)(CtrlSubMenuItem);
