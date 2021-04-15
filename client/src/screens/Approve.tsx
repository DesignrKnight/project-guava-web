import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  DetailsMenu,
  RequestDetails,
} from '../components';

const Auth: React.FC = () => {
  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <DetailsMenu />
        <RequestDetails />
      </HalvesColumn1>

      <HalvesColumn2 className={classes.column2}>hello</HalvesColumn2>
    </HalvesTemplate>
  );
};

export default Auth;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  column2: {
    position: 'relative',
    maxWidth: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));
