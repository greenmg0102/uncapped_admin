import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        const accessToken = urlParams.get('accessToken');
        const refreshToken = urlParams.get('refreshToken');

        if (accessToken !== null && refreshToken !== null) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            navigate('/');
        }
    }, [urlParams]);




    return (
        <div>
            <h1>Error</h1>
        </div>
    );
};

export default Error;
