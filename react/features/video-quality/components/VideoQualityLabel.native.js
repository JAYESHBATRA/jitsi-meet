// @flow

import React from 'react';
import { connect } from 'react-redux';

import { translate } from '../../base/i18n';
import { Label } from '../../base/label';
import { type StyleType, combineStyles } from '../../base/styles';

import AbstractVideoQualityLabel, {
    IProps as AbstractProps,
    _abstractMapStateToProps
} from './AbstractVideoQualityLabel';
import styles from './styles';

type Props = AbstractProps & {

    /**
     * Style of the component passed as props.
     */
    style: ?StyleType
};

/**
 * React {@code Component} responsible for displaying a label that indicates
 * the displayed video state of the current conference.
 *
 * NOTE: Due to the lack of actual video quality information on mobile side,
 * this component currently only displays audio only indicator, but the naming
 * is kept consistent with web and in the future we may introduce the required
 * api and extend this component with actual quality indication.
 */
class VideoQualityLabel extends AbstractVideoQualityLabel<Props> {

    /**
     * Implements React {@link Component}'s render.
     *
     * @inheritdoc
     */
    render() {
        const { _audioOnly, style, t } = this.props;

        if (!_audioOnly) {
            // We don't have info about the quality so no need for the indicator
            return null;
        }

        return (
            <Label
                style = { combineStyles(styles.indicatorAudioOnly, style) }
                text = { t('videoStatus.audioOnly') } />
        );
    }
}

export default translate(connect(_abstractMapStateToProps)(VideoQualityLabel));
