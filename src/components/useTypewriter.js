/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function useTypewriter( words, deleteDelay = 50, typeDelay = 60) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? deleteDelay : typeDelay);

        return () => clearTimeout(timer);

    }, [wordIndex, isDeleting, text]);

    function type() {
        const currentWord = words[wordIndex];

        const shouldDelete = isDeleting ? 1 : -1;

        setText((current) =>
            currentWord.substring(0, current.length - shouldDelete)
        );

        if (!isDeleting && text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
        } 
        else if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((current) => (current + 1) % words.length);
        }
    }

    return text;
}

export default useTypewriter;
