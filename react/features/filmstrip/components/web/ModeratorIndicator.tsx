import React from 'react';

import { IconModerator } from '../../../base/icons/svg';
import BaseIndicator from '../../../base/react/components/web/BaseIndicator';

/**
 * The type of the React {@code Component} props of {@link ModeratorIndicator}.
 */
type Props = {

    /**
     * From which side of the indicator the tooltip should appear from.
     */
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
};

/**
 * React {@code Component} for showing a moderator icon with a tooltip.
 *
 * @returns {JSX.Element}
 */
const ModeratorIndicator = ({ tooltipPosition }: Props): JSX.Element => (
    <BaseIndicator
        icon = { IconModerator }
        iconSize = { 16 }
        tooltipKey = 'videothumbnail.moderator'
        tooltipPosition = { tooltipPosition } />
);

export default ModeratorIndicator;
