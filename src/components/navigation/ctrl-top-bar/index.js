// @packages
import AppBar from '@material-ui/core/AppBar';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlIconButton from '../../common/ctrl-icon-button';
import CtrlProfileMenu from '../ctrl-profile-menu';
import { config } from '../../../config';
import { getNameInitials } from '../../../util';
import CtrlTextField from '../../common/ctrl-text-field';

// @styles
import styles from './styles';

const CtrlTopBar = ({
    className,
    classes,
    id,
    onFilterTechCollection,
    onSortTechCollection,
    profileMenu,
    techCollectionSortDirection,
    userName,
    userPermissions,
    visible
}) => {
    const [search, onSearchChange] = useState(null);

    if (!visible) {
        return null;
    }

    const handleOnClearFilter = () => {
        onFilterTechCollection({});
        onSortTechCollection(techCollectionSortDirection);
        onSearchChange(null);
    };

    const handleOnFieldChange = ({ value }) => {
        onSearchChange(value);
        onFilterTechCollection({ keywords: value });
    };

    const topBarClass = classNames(
        className,
        classes.topBar
    );

    const defaultSortIconClass = classNames({
        [classes.sortIconSelected]: techCollectionSortDirection === 'default',
        [classes.sortIcon]: true
    });

    const ascSortIconClass = classNames({
        [classes.sortIconSelected]: techCollectionSortDirection === 'asc',
        [classes.sortIcon]: true
    });

    const descSortIconClass = classNames({
        [classes.sortIconSelected]: techCollectionSortDirection === 'desc',
        [classes.sortIcon]: true
    });

    const nameInitials = getNameInitials(userName);

    return (
        <AppBar
            className={topBarClass}
            classes={{ root: classes.topBarRoot }}
            id={id}
            position="fixed"
        >
            <Toolbar>
                <Grid alignItems="center" container direction="row" justify="flex-start">
                    <Hidden smDown xsDown>
                        <Grid item>
                            <CtrlTextField
                                className={classes.searchTextField}
                                icon="close"
                                id="search"
                                label={config.text.homePage.search}
                                name="search"
                                onChange={handleOnFieldChange}
                                onIconClick={handleOnClearFilter}
                                placeholder={config.text.homePage.search}
                                type="text"
                                variant="outlined"
                                value={search}
                            />
                        </Grid>
                    </Hidden>
                    <Grid item>
                        <Tooltip title={config.text.homePage.defaultSort}>
                            <IconButton
                                className={defaultSortIconClass}
                                onClick={() => { onSortTechCollection('default'); }}
                            >
                                <ImportExportIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={config.text.homePage.ascSort}>
                            <IconButton
                                className={ascSortIconClass}
                                onClick={() => { onSortTechCollection('asc'); }}
                            >
                                <ArrowUpwardIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={config.text.homePage.descSort}>
                            <IconButton
                                className={descSortIconClass}
                                onClick={() => { onSortTechCollection('desc'); }}
                            >
                                <ArrowDownwardIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
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
    onFilterTechCollection: PropTypes.func.isRequired,
    onSortTechCollection: PropTypes.func.isRequired,
    profileMenu: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
        isDefault: PropTypes.bool,
        name: PropTypes.string.isRequired
    })).isRequired,
    techCollectionSortDirection: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    visible: PropTypes.bool
};

CtrlTopBar.defaultProps = {
    className: null,
    visible: true
};

export default withStyles(styles)(CtrlTopBar);
