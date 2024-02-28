import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { IRootState } from './store';
import Loading from './components/Layouts/Loading'
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
import axiosAuthMiddleware from './utils/middlewareFunction/axiosInterceptor'

function App({ children }: PropsWithChildren) {

    const dispatch = useDispatch();

    useEffect(() => {

        axiosAuthMiddleware.initialize(); // Call the initialization function

        // document.addEventListener('contextmenu', event => event.preventDefault());
        // document.onkeydown = function (e: any) {
        //     if (e.keyCode == 123) return false;
        // };

        // const clearBrowserCache = () => {
        //     if ('caches' in window) {
        //         caches.keys().then((names) => {
        //             names.forEach((name) => {
        //                 caches.delete(name);
        //             });
        //         });
        //     }
        // }
        
        // clearBrowserCache()

    }, []);

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    useEffect(() => {

        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
    
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    return (
        <div
            className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass} relative main-section antialiased relative font-nunito text-sm font-normal`}
        >
            {children}
            <Loading />
        </div>
    );
}

export default App;
