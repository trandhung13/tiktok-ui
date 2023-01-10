import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEarthAmerica,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faQuestionCircle,
  faSignOut,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { MessageIcon, InboxIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAmerica} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  let currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faVideoCamera} />,
      title: "LIVE Studio",
      to: "/studio",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // handle change language
        break;
      default:
    }
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
                </Button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1657974440944646~c5_100x100.jpeg?x-expires=1673506800&x-signature=Cjmt9PG%2FErli5egDaZEHUxq5wPo%3D"
                alt="ronaldo"
              />
            ) : (
              <>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
