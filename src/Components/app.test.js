import React from "react";
import { ReactDOM } from "react";

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import {isTSAnyKeyword} from '@babel/types'

import CatchBar from "./CatchBar";
import CatchModal from "./CatchModal";
import DisplayPokemon from "./DisplayPokemon"
import GetPokemon from "./GetPokemon"
import FailedCaught from "./FailedCaught";
import MyPokemon from "./MyPokemon"
import Nav from "./Nav"
import Skeleteon from "./skeleton"
import SuccessCaught from "./SuccessCaught";


it("renders nav correctly", ()=>{
     render(<Nav/>)
    // expect(getByTestId('nav')).toHaveTextContent('')
})