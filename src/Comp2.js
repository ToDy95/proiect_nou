import React from 'react';
import styles from './Comp2.module.css';
// import Comp4 from './components/Comp4';
import Comp5 from './components/Comp5';

const Comp2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Title}>TITLU TEMA</div>
      <div className={styles.content}>
        <Comp5 props={'SALUT'} />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 props={'SALUT2'} />
        <Comp5 />
        <Comp5 />
        <Comp5 />
        <Comp5 props={'SALUT3'} />
        <Comp5 />
        <Comp5 props={'SALUT5'} />
      </div>
    </div>
  );
};

export default Comp2;
