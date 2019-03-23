import styled from 'styled-components';

const Wrapper = styled.div`
padding: 4em;
background: floralwhite;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
transition: 0.3s;
text-align: center
`;

const Title = styled.h1`
font-size: 2em;
text-align: center;
color: #484848;
`;

const Button = styled.button`
color: #484848;
cursor: pointer;
background-color: white;
line-height: normal;
margin: 1% 1% 1% 1%;
padding: 0.5% 1% 0.5% 1%;
font-weight: 100;
border: solid;
border-radius: 3px;
border-width: 2px;
font-size: 1em;
text-decoration: one;
`;

export { Wrapper, Title, Button };
