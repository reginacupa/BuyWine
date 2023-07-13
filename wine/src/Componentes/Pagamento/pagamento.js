import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('pay');

  const handleChange = (event) => {
    setValue(event.target.value);

  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Formas de pagamento</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="cartc" control={<Radio />} label="Cartão de crédito" />
        <FormControlLabel value="cartd" control={<Radio />} label="Cartão de débito" />
        <FormControlLabel value="boleto" control={<Radio />} label="Boleto bancário" />
        <FormControlLabel value="pix" control={<Radio />} label="pix" />

      </RadioGroup>
    </FormControl>
    
  );
}