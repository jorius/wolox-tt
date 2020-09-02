// @packages
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlTextField from '../../components/common/ctrl-text-field';
import { config } from '../../config';
import { format } from '../../util';

// @styles
import styles from './styles';

// @constants
const INITIAL_STATE = {
    keyword: {
        isValid: false,
        value: null
    }
};

const HomePage = ({
    classes,
    onGetTechCollection,
    techCollectionItems,
    totalTechCollection
}) => {
    const [showErrors, toggleShowErrors] = useState(false);
    const [state, onChangeState] = useState(INITIAL_STATE);

    useEffect(() => {
        onGetTechCollection();
    }, [onGetTechCollection]);

    const handleOnFieldChange = ({ name, isValid, value }) => {
        onChangeState({
            ...state,
            [name]: {
                isValid,
                value
            }
        });
    };

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
                        variant="outlined"
                    />
                ))}
            </div>
        );
    };

    const renderTechCollection = techCollectionItems.length
        ? (
            <List>
                {techCollectionItems.map(({
                    author,
                    language,
                    license,
                    logo,
                    tech,
                    type,
                    year
                }, index) => (
                    <Fragment key={tech}>
                        <Divider component="li" variant="middle" />
                        <ListItem className={classes.techItem} alignItems="center">
                            <ListItemAvatar>
                                <img
                                    alt={tech}
                                    className={classes.techLogo}
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
                        {index === techCollectionItems.length - 1
                            ? <Divider component="li" variant="middle" />
                            : null}
                    </Fragment>
                ))}
            </List>
        )
        : null;

    const { keyword } = state;

    const renderTechCollectionFilters = (
        <Paper className={classes.techFilters} elevation={0}>
            <Grid container>
                <Grid className={classes.textField} item>
                    <CtrlTextField
                        id="keyword"
                        label={config.text.homePage.keyword}
                        name="keyword"
                        onChange={handleOnFieldChange}
                        placeholder={config.text.homePage.keyword}
                        required
                        showErrors={showErrors}
                        type="text"
                        value={keyword.value}
                    />
                </Grid>
            </Grid>
        </Paper>
    );

    return (
        <div id="home-page" className={classes.homePage}>
            <Grid container>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                    {renderTechCollection}
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    {renderTechCollectionFilters}
                </Grid>
            </Grid>
        </div>
    );
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
    onGetTechCollection: PropTypes.func.isRequired,
    techCollectionItems: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
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
    totalTechCollection: null
};

export default withStyles(styles)(HomePage);
