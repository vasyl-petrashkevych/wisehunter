import {FC} from "react";
import Props from "./TwoColumnsTypes";
import TwoColumnsSettings from "./TwoColumnsSettings";
import {
    useBlockProps,
} from '@wordpress/block-editor';


const TwoColumnsEdit: FC<Props> = ({attributes, setAttributes}) => {
    return <div className="wh_container" {...useBlockProps()}>
        <TwoColumnsSettings attributes={attributes} setAttributes={setAttributes}/>
    </div>;
}

export default TwoColumnsEdit;