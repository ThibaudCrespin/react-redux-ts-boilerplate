import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./App.module.scss";
import Header from "components/shared/Header/Header";
import Card from "components/shared/Card/Card";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className={styles.appBody}>
        <Card title="Tutorial">
          <Logo className={styles.appLogo} />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Card>
        <Card title="Description">
          <p>
            This is a boilerplate for <code>React / Redux with TypeScript</code>{" "}
            project.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Card>
      </div>
    </div>
  );
};

export default App;
