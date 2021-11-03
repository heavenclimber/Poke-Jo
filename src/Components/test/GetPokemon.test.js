import React from "react";
import { render, cleanup, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import GetPokemon from "../GetPokemon"
import { LOAD_POKEMONS } from './../../GraphQl/Queries'
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: LOAD_POKEMONS,
            variables: {
                limit: 32,
                offset: 0,
            }
        }, result: {
            data: {
                pokemons: {
                    count: 1118,
                    next: "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1",
                    previous: null,
                    status: true,
                    message: "",
                    results: [
                        {
                            url: "https://pokeapi.co/api/v2/pokemon/1/",
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        }
                    ]
                }
            }
        },
    }
]

describe('GetPokemon Component Test', () => {
    it("rendered pokemonList", async () => {

        const { getByTestId } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Router>
                    <GetPokemon />
                </Router>
            </MockedProvider>
        );
        const get = getByTestId("pokemonlist")
        expect(get).toBeTruthy();
    });

    it("rendered getPokemonList", async () => {

        const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
               <Router>
                    <GetPokemon />
                </Router>
            </MockedProvider>
        );

        // await new Promise(resolve => setTimeout(resolve,1000));
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));

        const get = getByText("bulbasaur")
        expect(get).toBeTruthy() ;


    });

});

