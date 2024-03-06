import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import { accessTokenDecode } from '../../utils/middlewareFunction/accessTokenDecode';
import { roleDetection } from '../../utils/middlewareFunction/roleDetection';
import AnimateHeight from 'react-animate-height';
import { profileGet } from '../../utils/functions/usage/profile/profile'
import { IRootState } from '../../store';
import clsx from 'clsx'
import { useState, useEffect } from 'react';

const Sidebar = () => {

    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [availableRoleList, setAvailableRoleList] = useState<any>([])

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {

        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if (accessToken !== null && refreshToken !== null) {
            async function fetchData() {
                let result = await profileGet(accessTokenDecode(accessToken)).then()
                setAvailableRoleList(result.role[0] && result.role[0].admittingPageList !== undefined ? result.role[0].admittingPageList : [])
            }
            fetchData()
        }
    }, [])

    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            {/* <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" /> */}
                            <img className="w-12 ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/logo.png" alt="logo" />
                            {/* <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('UNCAPPED')}</span> */}
                            <img className="w-24 text-2xl ltr:ml-4 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light" src="/assets/images/mark.png" alt="mark" />
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 m-auto">
                                <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="nav-item">
                                <ul>
                                    <li className="menu nav-item">
                                        <button
                                            type="button"
                                            className={clsx(currentMenu === 'System' ? 'active' : "nav-link group w-full")}
                                            onClick={() => toggleMenu('System')}
                                        >
                                            <div className={clsx("flex items-center")}>
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                                                </svg>
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('System')}</span>
                                            </div>

                                            <div
                                                className={clsx(currentMenu === 'System' ? 'rotate-90' : 'rtl:rotate-180')}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimateHeight
                                            duration={300}
                                            height={currentMenu === 'System' ? 'auto' : 0}
                                        >
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, 'User Manager') ? "" : "")} >
                                                    <NavLink to="/admin/userManager">{t('User Manager')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                        <AnimateHeight
                                            duration={300}
                                            height={currentMenu === 'System' ? 'auto' : 0}
                                        >
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Role Manager") ? "" : "")} >
                                                    <NavLink to="/admin/roleManager">{t('Role Manager')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                        <AnimateHeight
                                            duration={300}
                                            height={currentMenu === 'System' ? 'auto' : 0}
                                        >
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Premium Manager") ? "" : "")} >
                                                    <NavLink to="/admin/premiumSetter">{t('Premium Manager')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className='menu nav-item'>
                                        <button
                                            type="button"
                                            className={clsx(
                                                `${currentMenu === 'Business Analytics' ? 'active' : ''} nav-link group w-full`
                                            )}
                                            onClick={() => toggleMenu('Business Analytics')}
                                        >
                                            <div className={clsx("flex items-center")}>
                                                <svg className="group-hover:!text-primary shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        opacity="0.5"
                                                        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Business Analytics')}</span>
                                            </div>

                                            <div className={clsx(currentMenu === 'Business Analytics' ? 'rotate-90' : 'rtl:rotate-180')} >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'Business Analytics' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Sales") ? "" : "")} >
                                                    <NavLink to="/">{t('Sales')}</NavLink>
                                                </li>
                                                <li className={clsx(roleDetection(availableRoleList, "Analytics") ? "" : "")} >
                                                    <NavLink to="/analytics">{t('Analytics')}</NavLink>
                                                </li>
                                                <li className={clsx(roleDetection(availableRoleList, "Finance") ? "" : "")} >
                                                    <NavLink to="/finance">{t('Finance')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className='menu nav-item'>
                                        <button
                                            type="button"
                                            className={clsx(
                                                `${currentMenu === 'Article Admin' ? 'active' : ''} nav-link group w-full`
                                            )}
                                            onClick={() => toggleMenu('Article Admin')}
                                        >
                                            <div className={clsx("flex items-center")}>
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Article Admin')}</span>
                                            </div>

                                            <div className={clsx(currentMenu === 'Article Admin' ? 'rotate-90' : 'rtl:rotate-180')} >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'Article Admin' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Sales") ? "" : "")} >
                                                    <NavLink to="/admin/blog-admin">{t('Blog')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    <li className='menu nav-item'>
                                        <button
                                            type="button"
                                            className={clsx(
                                                `${currentMenu === 'Notification Admin' ? 'active' : ''} nav-link group w-full`
                                            )}
                                            onClick={() => toggleMenu('Notification Admin')}
                                        >
                                            <div className={clsx("flex items-center")}>
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="notification" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"></path></svg>
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Notification Admin')}</span>
                                            </div>

                                            <div className={clsx(currentMenu === 'Notification Admin' ? 'rotate-90' : 'rtl:rotate-180')} >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'Notification Admin' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Sales") ? "" : "")} >
                                                    <NavLink to="/admin/notification">{t('Notification')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                    
                                    <li className='menu nav-item'>
                                        <button
                                            type="button"
                                            className={clsx(
                                                `${currentMenu === 'Support Admin' ? 'active' : ''} nav-link group w-full`
                                            )}
                                            onClick={() => toggleMenu('Support Admin')}
                                        >
                                            <div className={clsx("flex items-center")}>
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Support Admin')}</span>
                                            </div>

                                            <div className={clsx(currentMenu === 'Support Admin' ? 'rotate-90' : 'rtl:rotate-180')} >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'Support Admin' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li className={clsx(roleDetection(availableRoleList, "Sales") ? "" : "")} >
                                                    <NavLink to="/admin/support">{t('Checker')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav >
        </div >
    );
};

export default Sidebar;
