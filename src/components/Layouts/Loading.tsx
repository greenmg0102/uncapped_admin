import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import styles from './layout.module.css'
import clsx from 'clsx'

export default function Loading() {

    const loadingStatus = useSelector((state: IRootState) => state.utilConfig.loadingStatus);

    return (
        <div className={clsx(loadingStatus ? styles.loading_screen : 'hidden')}>
            <img
                className={clsx(styles.loading, "z-[100]")}
                src="/assets/images/loading.png"
                alt="logo"
            />
        </div>
    )
}