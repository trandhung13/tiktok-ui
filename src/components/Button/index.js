import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  upload = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    upload,
    disabled,
    rounded,
  });

  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("left-icon")}>{leftIcon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
