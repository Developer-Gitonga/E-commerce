import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import Container from 'react-bootstrap/Container';

const Spinner = () => {
  return (
    <Container fluid='true' className='spr'>
      <SpinnerCircular
        size={144}
        thickness={84}
        speed={111}
        color='rgba(110, 68, 255, 1)'
        secondaryColor='rgba(186, 187, 243, 1)'
      />
    </Container>
  );
};

export default Spinner;
