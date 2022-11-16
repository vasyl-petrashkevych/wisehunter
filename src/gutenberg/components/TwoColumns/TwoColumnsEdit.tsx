import {FC} from "react";
import Props from "./TwoColumnsTypes";
import TwoColumnsSettings from "./TwoColumnsSettings";
import {
    useBlockProps,
    RichText,
} from '@wordpress/block-editor';
import {ResponsiveWrapper} from '@wordpress/components';

import './styles.scss'
import {withSelect} from '@wordpress/data'

const TwoColumnsEdit: FC<Props> = (props) => {

    const {media, attributes, setAttributes} = props;
    return <div className="wh_container" {...useBlockProps()}>
        <TwoColumnsSettings media={media} attributes={attributes} setAttributes={setAttributes}/>
        <section>
            <div className={`two-columns${attributes.reverse ? ' reverse' : ''}`}>

               <ResponsiveWrapper
                   naturalWidth="100%"
                   naturalHeight="auto"
               >
                   <img src={attributes.mediaUrl} />
               </ResponsiveWrapper>
                <div className="text">
                    <h2>{attributes.title}</h2>
                    <RichText
                        tagName="p"
                        value={ attributes.text }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( text ) => setAttributes( { text } ) }
                        placeholder={'Text...' }
                    />
                </div>
            </div>
        </section>
    </div>;
}

export default withSelect((select, props) => {
    return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
})(TwoColumnsEdit);