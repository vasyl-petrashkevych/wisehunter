import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, CheckboxControl, Button, ResponsiveWrapper} from '@wordpress/components';

import {FC} from "react";
import ITwoColumns from './TwoColumnsTypes'

const TwoColumnsSettings: FC<ITwoColumns> = ({media, attributes, setAttributes}) => {
    const removeMedia = () => {
        setAttributes({
            mediaId: 0,
            mediaUrl: ''
        });
    }

    const onSelectMedia = (media) => {
        setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
        });
    }


    return <InspectorControls key="settings">
        <PanelBody title="Block Settings" initialOpen={true}>
            <PanelRow>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectMedia}
                        value={attributes.mediaId}
                        allowedTypes={ ['image'] }
                        render={({open}) => (
                            <Button
                                className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                onClick={open}
                            >
                                {attributes.mediaId == 0 && 'Choose an image'}
                                {(media != undefined || attributes.mediaId != 0) &&
                                  <ResponsiveWrapper
                                    naturalWidth={ media.media_details.width }
                                    naturalHeight={ media.media_details.height }
                                  >
                                    <img src={media.source_url} />
                                  </ResponsiveWrapper>
                                }
                            </Button>
                        )}
                    />
                </MediaUploadCheck>
            </PanelRow>
            <PanelRow>
                <CheckboxControl
                    label="Reverse"
                    checked={ attributes.reverse }
                    onChange={() => setAttributes({reverse: !attributes.reverse})}
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