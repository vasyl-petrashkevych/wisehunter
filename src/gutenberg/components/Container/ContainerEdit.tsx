import {FC} from "react";
import Props from "./ContainerTypes";
import ContainerSettings from "./ContainerSettings";
import {
    useBlockProps,
} from '@wordpress/block-editor';


const ContainerEdit: FC<Props> = ({attributes, setAttributes}) => {
    return <div className="wh_container" {...useBlockProps()}>
        <ContainerSettings attributes={attributes} setAttributes={setAttributes}/>
    </div>;
}

export default ContainerEdit;