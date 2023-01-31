import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} to={config.routes.home} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    to={config.routes.following}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} to={config.routes.live} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
