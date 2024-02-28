import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '../../store/themeConfigSlice';
import { profileGet, summaryProGet } from '../../utils/functions/usage/profile/profile'
import { accessTokenDecode } from '../../utils/middlewareFunction/accessTokenDecode'
import UserPersonal from './profileComponent/UserPersonal';
import PaymentHistory from './profileComponent/PaymentHistory';
import Summary from './profileComponent/Summary';
import ProPlan from './profileComponent/ProPlan';
import CardDetail from './profileComponent/CardDetail'
import SignLog from './profileComponent/SignLog'

const Profile = () => {

    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        displayName: null,
        firstName: '',
        lastName: '',
        socialAvatar: '',
        user: {
            email: ''
        }
    })
    const [pokerTypeCount, setPokerTypeCount] = useState([])
    const [proPlan, setProPlan] = useState({})

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken !== null && refreshToken !== null) {
            async function fetchData() {
                let result = await profileGet(accessTokenDecode(accessToken)).then()
                setUserInfo(result)
            }
            fetchData()
        }
    }, [])

    useEffect(() => {
        async function fetchData() {
            let result = await summaryProGet("6596be9ddfae083621d4c326").then()
            setPokerTypeCount(result.summary)
            setProPlan(result.proPlan)
        }
        fetchData()
    }, [])

    useEffect(() => {
        dispatch(setPageTitle('Profile'));
    });

    return (
        <div className="pt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                <UserPersonal userInfo={userInfo} />
                <div className="panel lg:col-span-2 xl:col-span-3 flex justify-between items-start">
                    <Summary pokerTypeCount={pokerTypeCount} />
                    {proPlan === null || proPlan === undefined ? null : <ProPlan proPlan={proPlan} />}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <PaymentHistory />
                <CardDetail />
            </div>
            <SignLog />
        </div>
    );
};

export default Profile;
