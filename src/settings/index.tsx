import './index.scss'
import 'antd/dist/antd.css';

// Dependencies
import {createRoot} from 'react-dom/client'
import {App} from "./components";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(<App/>)
