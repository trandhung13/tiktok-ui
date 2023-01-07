import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1673190000&x-signature=Xrr3qkVqjfBUJHzXt2O5hp4NhK4%3D"
        alt="hanassi"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>DaoLePhuongHoa</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>hanassi</span>
      </div>
    </div>
  );
}

export default AccountItem;
