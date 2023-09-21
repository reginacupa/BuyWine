import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Enviar
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Obrigado por sua compra! 
          Tim Tim! ;)
        </div>
      </Collapse>
    </>
  );
}

export default Example;