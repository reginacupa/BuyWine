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
        Adicionar
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Produto adicionado ao carrinho!
        </div>
      </Collapse>
    </>
  );
}

export default Example;