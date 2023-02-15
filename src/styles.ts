import styled from "styled-components";
import {Card} from "@mui/material";
import {CountryCardProps} from "./components/molecules/Question/types";

export const CountryCard = styled(Card)<CountryCardProps>`
  margin-bottom: 1em;
  
  background-color: ${({isCorrect}) => isCorrect ? '#b0e8b0 !important' : 'white'};
`
