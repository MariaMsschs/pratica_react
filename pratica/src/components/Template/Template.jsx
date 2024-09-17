import React from "react";
import styles from "./Template.module.css";
import check from "../../assets/check.png"
import xis from "../../assets/xis.png"

const Template = ({plano, imgSrc}) => {
    return(
        <>
            <div className={styles.plano}>
                <p>{plano}</p>
                <div className={styles.beneficios}>
                    <img src={imgSrc} alt="" className={styles.ind} />
                    <p>PNG</p>
                </div>
                <div className={styles.ret}>Try Now</div>
            </div>
        </>
    )
}

export default Template;