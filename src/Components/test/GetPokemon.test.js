import React from "react";
import { render, cleanup, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import GetPokemon from "../GetPokemon"
import { LOAD_POKEMONS } from './../../GraphQl/Queries'
import wait from 'waait'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

afterEach(cleanup);



//Really sorry, I don't think I can understand the reactJs unit and integration testing
//on time, I will keep my best to understand what went wrong in the future.

const mocks = [
    {
        request: {
            query: LOAD_POKEMONS,
            variables: {
                limit: 1,
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

        console.log(JSON.stringify(mocks[0]))

        // await new Promise(resolve => setTimeout(resolve,1000));
        await waitFor(() => new Promise((res) => setTimeout(res, 0)));
        console.log('inibawah')
        console.log(JSON.stringify(mocks[0]))

        const get = getByText("bulbasaur")
        expect(get).toBeTruthy()

            // const wrapper = render(
            //     <MockedProvider mocks={mocks} addTypename={false}>
            //         <GetPokemon />
            //     </MockedProvider>
            // );

            // await waitFor(() => {
            //     expect(getByText('bulbasaur')).toBeDefined();
            //   });

            // await wait(0);
            // wrapper.update()

            // expect(wrapper.firstChild).toHaveClass()
            ;


    });


    // it("rendered fetchPokemonListLoading", async () => {

    //     const { getByText, queryByText } = render(
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //             <GetPokemon />
    //         </MockedProvider>
    //     );

    //     await waitFor(()=> queryByText("pokemon-box"));

    //     const get = getByText("Loading..")
    //     expect(get).toBeInTheDocument();
    // });

});

