 // Make sure to import useState
import { useState } from "react";
import PropTypes from "prop-types";
import myContext from "./myContext";

function MyState(props) {
    const { mode, setMode } = useState('light'); // You might want to destructure the useState properly

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };
    const [loading, setLoading] = useState(false)
    return (
        <myContext.Provider value={{ mode, toggleMode, loading, setLoading}}>
            {props.children}
        </myContext.Provider>
    );
}

MyState.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is passed
};

export default MyState;
