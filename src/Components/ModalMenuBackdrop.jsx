import React from 'react';

import classes from './ModalMenuBackdrop.module.css';

function ModalMenuBackdrop(props) {
  return <div className={classes.backdrop} onClick={props.onToggleMenu} />;
}

export default ModalMenuBackdrop;
