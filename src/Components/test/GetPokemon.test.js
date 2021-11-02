import React from "react";
import { getByText, render, cleanup, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import GetPokemon from "../GetPokemon"
import { LOAD_POKEMONS } from './../../GraphQl/Queries'
import  wait  from 'waait'

afterEach(cleanup);

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
                <GetPokemon />
            </MockedProvider>
        );
        const get = getByTestId("pokemonlist")
        expect(get).toBeTruthy();
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

    it("rendered getPokemonList", async () => {

        const mockslist = [
            {
                request: {
                    query: LOAD_POKEMONS,
                    variables: {
                        limit: 1,
                        offset: 0,
                    }
                }, result: {
                    "data": {
                      "pokemons": {
                        "results": [
                          {
                            "url": "https://pokeapi.co/api/v2/pokemon/1/",
                            "name": "bulbasaur",
                            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                          }
                        ]
                      }
                    }
                  },
            }
        ]


        const { findByText, getByTestId, getByText } = render(
            <MockedProvider mocks={JSON.stringify} addTypename={false}>
                <GetPokemon />
            </MockedProvider>
        );

        console.log(JSON.stringify(mockslist))

        // const wrapper = render(
        //     <MockedProvider mocks={mocks} addTypename={false}>
        //         <GetPokemon />
        //     </MockedProvider>
        // );

        await new Promise(resolve => setTimeout(resolve, 0));

        // await waitFor(() => {
        //     expect(getByText('bulbasaur')).toBeDefined();
        //   });

        // await wait(0);
        // wrapper.update()

        // expect(wrapper.firstChild).toHaveClass()
        const get = getByText("bulbasaur")
        expect(get).toBeTruthy();
    });
});

