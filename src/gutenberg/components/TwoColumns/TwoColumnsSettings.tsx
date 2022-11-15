import {
    InspectorControls,
} from '@wordpress/block-editor';
import {PanelBody, PanelRow, CheckboxControl} from '@wordpress/components';

import {FC} from "react";
import IContainer from './TwoColumnsTypes'

const TwoColumnsSettings: FC<IContainer> = ({attributes, setAttributes}) => {
    return <InspectorControls key="settings">
        <PanelBody title="My Block Settings" initialOpen={true}>
            <PanelRow>
                <CheckboxControl
                    label="Full Width"
                    checked={attributes.fullWidth}
                    onChange={() => setAttributes({fullWidth: !attributes.fullWidth})}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
}

export default TwoColumnsSettings;