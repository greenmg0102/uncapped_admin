import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Detail from './Detail'
import { useNavigate } from "react-router-dom";
import { getHand } from '../../../../utils/functions/HandAPI'

const HandDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [handData, setHandData] = useState({})

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken === null && refreshToken === null) navigate('/auth/boxed-signin');
    }, [])

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getHand(id)
            setHandData(response.data)
        }
        fetchMyAPI()
    }, [id])

    const urlBack = (url: string) => navigate(url);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <p className='text-[24px] text-white font-bold'>Hand # {id}</p>
                <div className='flex justify-start items-center'>
                    <button type="button" className="btn btn-outline-primary mr-4" onClick={() => urlBack("/user/poker/process/")}>Back</button>
                </div>
            </div>
            <Detail handData={handData} />
        </div>
    );
};

export default HandDetail;
