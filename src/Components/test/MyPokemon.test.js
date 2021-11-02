import React from "react";
import { getByText, render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import MyPokemon from "../MyPokemon"
import  wait  from 'waait'



//Really sorry, I don't think I can understand the reactJs unit and integration testing
//on time, I will keep my best to understand what went wrong in the future time.

afterEach(cleanup);

describe('MyPokemon Component Test', () => {
    it("rendered mypokemonList", async () => {

        const { getByTestId } = render(
                <MyPokemon />
        );
        const get = getByTestId("mypokemoncontainer")
        expect(get).toBeTruthy();
    });

});