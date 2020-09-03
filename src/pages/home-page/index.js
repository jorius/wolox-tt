// @packages
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import { config } from '../../config';
import { format } from '../../util';

// @styles
import styles from './styles';

const HomePage = ({
    classes,
    onFilterTechCollection,
    onGetTechCollection,
    techCollectionItems,
    totalTechCollection
}) => {
    useEffect(() => {
        onGetTechCollection();
    }, [onGetTechCollection]);

    const renderTechItemTags = (langs, type) => {
        const tags = [...langs.split(','), type];
        return (
            <div className={classes.techTags}>
                {tags.map((tag) => (
                    <Chip
                        className={classes.techTag}
                        color="primary"
                        key={tag}
                        label={tag}
                        onClick={() => { onFilterTechCollection({ keywords: tag }); }}
                        variant="outlined"
                    />
                ))}
            </div>
        );
    };

    const totalCountFilteredItems = techCollectionItems.filter((item) => item.flagged).length;

    const renderTechCollection = techCollectionItems.length
        ? (
            <List>
                {techCollectionItems.map((item) => {
                    const flagRule = Object.prototype.hasOwnProperty.call(item, 'flagged') && !item.flagged;

                    const {
                        author,
                        language,
                        license,
                        logo,
                        tech,
                        type,
                        year
                    } = item;

                    const techItemClass = classNames({
                        [classes.techItemUnflagged]: flagRule,
                        [classes.techItem]: Boolean(item)
                    });

                    return (
                       <Fragment key={tech}>
                            <ListItem
                                className={techItemClass}
                                alignItems="center"
                            >
                                <ListItemAvatar>
                                    <img
                                        alt={tech}
                                        src={logo}
                                        style={{ padding: 15, width: 120 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.techTitle}
                                    primary={(
                                        <Typography variant="subtitle1">
                                            <strong>{`${tech},`}</strong>
                                            {config.text.homePage.createdBy}
                                            <strong>{author}</strong>
                                            {config.text.common.in}
                                            <strong>{`${year}.`}</strong>
                                        </Typography>
                                    )}
                                    secondary={(
                                        <>
                                        <Typography variant="subtitle1">
                                            {format(config.text.homePage.itHasLicense, <strong>{license}</strong>)}
                                            {format(config.text.homePage.usesLangs, <strong>{language}</strong>)}
                                        </Typography>
                                        {renderTechItemTags(language, type)}
                                        </>
                                    )}
                                />
                            </ListItem>
                            <Divider component="li" variant="middle" />
                       </Fragment>
                    );
                })}
            </List>
        )
        : null;

    return (
        <div id="home-page" className={classes.homePage}>
            <Grid container direction="column">
                <Grid item>
                    <Grid container direction="row" justify="flex-start">
                        <Grid className={classes.totalCount} item>
                            <Typography variant="subtitle1">
                                {`${config.text.homePage.totalCount}: `}
                                <strong>{totalTechCollection}</strong>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                {`${config.text.homePage.totalCountFilter}: `}
                                <strong>{totalCountFilteredItems}</strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {renderTechCollection}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
    onFilterTechCollection: PropTypes.func.isRequired,
    onGetTechCollection: PropTypes.func.isRequired,
    techCollectionItems: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        flagged: PropTypes.bool,
        language: PropTypes.string.isRequired,
        license: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    })),
    totalTechCollection: PropTypes.number
};

HomePage.defaultProps = {
    techCollectionItems: null,
    totalTechCollection: 0
};

export default withStyles(styles)(HomePage);
