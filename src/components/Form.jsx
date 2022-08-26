import React from "react";
import { useState, useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";

export const Form = ({onSendMessage}) => {

    const [message, setMessage] = useState('');

    const handleChange = (event) => { // Обработчик отправки формы
        setMessage(event.target.value);
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [message]);

    return (            
        <div className="form">
            <TextField
                inputRef={inputRef}
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите сообщение"
                value={message}
                onChange={handleChange}
            />
            <Button onClick={() => {
                onSendMessage(message);
                setMessage('');
                }}
                sx={{
                    color: 'white',
                    fontSize: '30px'
                }}
            >ОТПРАВИТЬ</Button>
        </div>
    )
}