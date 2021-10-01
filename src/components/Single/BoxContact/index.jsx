import React from "react";
import styled from "styled-components";

const BoxContactStyle = styled.div`
  max-width: 220px;
  max-height: 250px;
  padding: 10px;
  background-color: lightgrey;
  
  p{
    font-size: 18px;
    margin-bottom: 5px;
}
`

export const ContactTitle = styled.p`
text-transform: uppercase;
font-weight: 600;
`

const BoxContact = () => {

    return (
        <BoxContactStyle>
            <h3>DUPONT <span>Louison</span></h3>
            <ContactTitle>Fonction</ContactTitle>
            <p>Secrétaire</p>
            <ContactTitle>Téléphone</ContactTitle>
            <p>0247458441</p>
            <ContactTitle>Email</ContactTitle>
            <p>a.dupont@exemple.com</p>
        </BoxContactStyle>

    )
}

export default BoxContact;