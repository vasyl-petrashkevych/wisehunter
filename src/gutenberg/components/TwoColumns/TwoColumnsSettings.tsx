import {
    InspectorControls,
} from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, CheckboxControl} from '@wordpress/components';

import {FC} from "react";
import ITwoColumns from './TwoColumnsTypes'

const TwoColumnsSettings: FC<ITwoColumns> = ({attributes, setAttributes}) => {
    return <InspectorControls key="settings">
        <PanelBody title="Block Settings" initialOpen={true}>
            <PanelRow>
                <CheckboxControl
                    label="Flip"
                    checked={ attributes.flip }
                    onChange={() => setAttributes({flip: !attributes.flip})}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Title"
                    value={ attributes.title }
                    onChange={(title) => setAttributes({title})}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
}

export default TwoColumnsSettings;