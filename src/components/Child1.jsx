import styled from "styled-components";
import { useState, useEffect } from "react";
import { Child2 } from "./Child2";


export const Child1 = () => {
    const [text, setText] = useState("");
    const [showString, setShowString] = useState(false);
    const onClickButton = () => {
        setShowString((p) => !p)
    };

    useEffect(() => {
        fetch("texts/text1.txt")
            .then(response => response.text())
            .then(data => setText(data.split('\n')));
        }, []);

    return (
        <>
            <SContainer>Quiz サンプル</SContainer>
            <SButton onClick={onClickButton}>問題</SButton>
            {showString && 
                <div>
                    <p>あああああ</p>
                    <p>{text}</p>
                    <Child2 />
                </div>
            }
        </>
    );
};

const SContainer = styled.div`
    background: rgba(255, 128, 0, 0.4);
    font-size: 30px;
    text-align: center;
    display: block;
    height: 40px;
    width: 20%;
`

const SButton = styled.button`
    margin: 10px;
    font-size: 15px;
    `