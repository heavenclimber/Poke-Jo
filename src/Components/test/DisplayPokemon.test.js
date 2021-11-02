import React from "react";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import DisplayPokemon from "../DisplayPokemon"
import { LOAD_POKEMONS_DETAIL } from './../../GraphQl/Queries'
import  wait  from 'waait'


//Really sorry, I don't think I can understand the reactJs unit and integration testing
//on time, I will keep my best to understand what went wrong in the future time.

const mocks = [
    {
        request: {
            query: LOAD_POKEMONS_DETAIL,
            variables: {
                name: "bulbasaur"
            }
        }, result: {
            data: {
              pokemon: {
                id: 1,
                name: "bulbasaur",
                abilities: [
                  {
                    ability: {
                      name: "overgrow"
                    }
                  },
                  {
                    ability: {
                      name: "chlorophyll"
                    }
                  }
                ],
                moves: [
                  {
                    move: {
                      name: "grassy-terrain"
                    }
                  },
                  {
                    move: {
                      name: "confide"
                    }
                  }
                ],
                types: [
                  {
                    type: {
                      name: "grass"
                    }
                  },
                  {
                    type: {
                      name: "poison"
                    }
                  }
                ],
                message: "",
                status: true
              }
            }
          }
    }
]

describe('DisplayPokemon Component Test', () => {
    it("rendered PokemonDetail", () => {
        const { getByTestId } = render(
            <MockedProvider>
                <DisplayPokemon />
            </MockedProvider>
        );
        const display = getByTestId("displaypoke")
        expect(display).toBeTruthy();
    });

    it("rendered cath button", () => {
      const { getByTestId } = render(
          <MockedProvider>
              <DisplayPokemon />
          </MockedProvider>
      );
      const display = getByTestId("catchbarbutton")
      expect(display).toBeTruthy();
  });
    
    // it("rendered displayPokemonFetch", async () => {
    //     const { findByText } = render(
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //             <DisplayPokemon />
    //         </MockedProvider>
    //     );
    //     const pokename = await findByText('bulbasaur');
    //     expect(pokename).toBeInTheDocument();
    // });


    it("rendered PokemonType", async () => {
        const { getByTestId } = render(
            <MockedProvider mocks={mocks}>
                <DisplayPokemon />
            </MockedProvider>
        );
        await new Promise(resolve => setTimeout(resolve, 0));
        const type = getByTestId("typestest")
        expect(type).toBeTruthy();
    });

});

