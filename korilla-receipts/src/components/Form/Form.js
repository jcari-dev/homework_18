import React,{useState,useRef} from 'react'

function Form(props) {
    const inputEl = useRef("");
    const [formData, setFormData] = useState({
        searchreceipt: ""
    })

    const handleChange = (event) => {
        console.log(inputEl.current.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.test(inputEl.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputEl} type="text" name="searchreceipt" placeholder="search by name" onChange={handleChange} value={props.term}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form
