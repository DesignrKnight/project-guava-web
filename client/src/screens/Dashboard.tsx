import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import {CertificateIcon} from '../components';

// Assets
import {DUMMY_CERTIFICATE} from '../assets/placeholder';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Container>
        {['pending', 'approved', 'distributed'].map(status => (
          <CertificateIcon
            key={status}
            data={DUMMY_CERTIFICATE}
            status={status}
          />
        ))}
      </Container>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles(() => ({
  pageContainer: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
  },
}));
