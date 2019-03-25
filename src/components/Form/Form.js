import React, { useState } from 'react';
import { Wrapper, Label, WhiteButton, Input, FormElement } from './Form.styles';

export default function Form () {
  const [change, setChange] = useState('');
  const [Submit, setSubmit] = useState('');

  const handleChange = event => {
    setChange(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(event.target.useState.value);
    setChange('');
  };

  return (
    <Wrapper>
      <FormElement onSubmit={handleSubmit}>
        <Label> a form for some use </Label>
        <Input id='useState' type='text' value={change} onChange={handleChange} />
        <WhiteButton type="submit"> Submit </WhiteButton>
      </FormElement>
      <div>
        <p> Input area value: {change} </p>
        <p> Submit value: {Submit} </p>
      </div>
    </Wrapper>
  )
}
