import {FC} from "react";
import Props from "./TwoColumnsTypes";
import TwoColumnsSettings from "./TwoColumnsSettings";
import {
    useBlockProps,
    RichText,
} from '@wordpress/block-editor';
import './styles.scss'

const TwoColumnsEdit: FC<Props> = ({attributes, setAttributes}) => {
    return <div className="wh_container" {...useBlockProps()}>
        <TwoColumnsSettings attributes={attributes} setAttributes={setAttributes}/>
        <section>
            <div className="two-columns">
               <div className="img">
                   image
               </div>
                <div className="text">
                    <h1>{attributes.title}</h1>
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

export default TwoColumnsEdit;