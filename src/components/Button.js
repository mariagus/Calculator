import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button id={props.id} className={styles.button}>
      {props.label}
    </button>
  );
}

export default Button;
