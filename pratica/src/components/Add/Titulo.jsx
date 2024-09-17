import React from "react";
import styles from "./Titulo.module.css";
import check from "../../assets/check.png"
import xis from "../../assets/xis.png"


const Titulo = ({titulo}) => {
  return (
    <>
    <div className={styles.container}>
        <p className={styles.nome}>{titulo}</p>
        <div className={styles.ret}>red</div>
    </div>
    </>
  );
}

export default Titulo;