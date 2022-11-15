import './index.scss'
import {registerBlockCollection, registerBlockType} from '@wordpress/blocks'
import {Container, TwoColumns} from "./components";

function generate_block_name(slug) {
    return `wisehunter/${slug}`
}

registerBlockType(generate_block_name('container'), Container)
registerBlockType(generate_block_name('two_columns'), TwoColumns)

