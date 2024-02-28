import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Process from './Process'

const GameProcess = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken === null && refreshToken === null) navigate('/auth/boxed-signin');
    }, [])

    return (
        <Process />
    );
};

export default GameProcess;
