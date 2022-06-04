import React, { forwardRef } from "react";
import styles from "styles/components/modal.module.css";

const Modal = forwardRef(
  ({ header, body, footer = null, height = "80%" }, ref) => {
    return (
      <div className={styles[`modal-background`]}>
        <section className={styles[`modal`]} style={{ height }} ref={ref}>
          <header className={styles[`modal-header`]}>{header}</header>
          <section className={styles[`modal-body`]}>{body} </section>
          {footer && (
            <footer className={styles[`modal-footer`]}>{footer}</footer>
          )}
        </section>
      </div>
    );
  }
);

export default Modal;
