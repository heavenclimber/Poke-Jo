import React from "react";

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

import Nav from "./Nav"
import DisplayPokemon from "./DisplayPokemon"


// describe('Nav Component Test', ()=>{
//     it("rendered nav", ()=>{
//         const {getByTestId} =render(<Nav/>);
//         const nav = getByTestId("navbar")
//         expect(nav).toBeTruthy();
//     });
// });

describe('Display Component Test', ()=>{
    it("rendered detailDisplay", ()=>{
        const {getByTestId} =render(<DisplayPokemon></DisplayPokemon>);
        const display = getByTestId("displaypoke")
        expect(display).toBeTruthy();
    });
});