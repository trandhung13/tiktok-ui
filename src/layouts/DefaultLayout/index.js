import classNames from 'classnames/bind';
import styles from './DefaulLayout.module.scss';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
