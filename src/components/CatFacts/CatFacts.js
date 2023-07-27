import React from "react";
import PropTypes from "prop-types";
import styles from "./CatFacts.module.scss";

export default function CatFacts({ catFact }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Cat fact:</h2>
      <p className={styles.text}>{catFact}</p>
    </div>
  );
}

CatFacts.propTypes = { catFact: PropTypes.string };

CatFacts.defaultProps = { catFact: "" };
