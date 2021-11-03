import React from "react";
import { render, cleanup, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import DisplayPokemon from "../DisplayPokemon"
import { LOAD_POKEMONS_DETAIL } from './../../GraphQl/Queries'
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: LOAD_POKEMONS_DETAIL,
            variables: {
                name: "currPoke"
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


//   it("rendered getPokemonDetail", async () => {
//     const { getByText } = render(
//         <MockedProvider mocks={mocks} addTypename={false}>
//            <Router>
//                 <DisplayPokemon />
//             </Router>
//         </MockedProvider>
//     );
//     // await new Promise(resolve => setTimeout(resolve,1000));
//     await waitFor(() => new Promise((res) => setTimeout(res, 0)));

//     const get = getByText("bulbasaur")
//     expect(get).toBeTruthy() ;


// });

    // it("rendered PokemonType", async () => {
    //     const { getByTestId } = render(
    //         <MockedProvider mocks={mocks}>
    //             <DisplayPokemon />
    //         </MockedProvider>
    //     );
    //     await new Promise(resolve => setTimeout(resolve, 0));
    //     const type = getByTestId("typestest")
    //     expect(type).toBeTruthy();
    // });
  
});

