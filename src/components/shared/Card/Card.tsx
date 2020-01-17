import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

export default Card;
