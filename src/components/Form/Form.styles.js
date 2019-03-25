import styled from 'styled-components';

const Wrapper = styled.div`
padding: 4em;
background: #FF416C;
background: -webkit-linear-gradient(to right, #ff8d90, #FF5A5F);
background: linear-gradient(to right, #ff8d90, #FF5A5F);
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
transition: 0.3s;
text-align: center;
color: white;
`;

const Label = styled.label`
font-size: 1.6em;
text-align: center;
color: white;
`;

const WhiteButton = styled.button`
background-color: transparent;
border-color: #FFFFFF;
color: white;
font-size: 1em;
margin: 0 0 0 1%;
`;

const Input = styled.input`
font-size: 1em;
border:none;
border-bottom:1px solid #757575;
`;

const FormElement = styled.form`
    text-align: center;
    height: 100%;
    transition: all 0.6s ease-in-out;
`;

export { Wrapper, Label, WhiteButton, Input, FormElement };
