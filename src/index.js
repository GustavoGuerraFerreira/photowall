import React  from "react";
import {createRoot} from "react-dom/client"
import Main from "./Components/Main";
import './styles/stylesheet.css'


const rootElement = document.getElementById('root')
const root = createRoot( rootElement)

root.render(
    
<Main/>
)
