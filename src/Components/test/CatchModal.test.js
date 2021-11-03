import React from "react";
import { cleanup, render, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import CatchModal from "../CatchModal"
import SuccessCaught from "../SuccessCaught"
import FailedCaught from "../FailedCaught"

afterEach(cleanup);


const datapi = {
    abilities: [
        {
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/"
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: "chlorophyll",
                url: "https://pokeapi.co/api/v2/ability/34/"
            },
            is_hidden: true,
            slot: 3
        }
    ],
    base_experience: 142,
    forms: [
        {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon-form/2/"
        }
    ],
    game_indices: [
        {
            game_index: 9,
            version: {
                name: "red",
                url: "https://pokeapi.co/api/v2/version/1/"
            }
        },
        {
            game_index: 2,
            version: {
                name: "white-2",
                url: "https://pokeapi.co/api/v2/version/22/"
            }
        }
    ],
    height: 10,
    held_items: [],
    id: 2,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/2/encounters",
    moves: [
        {
            move: {
                name: "swords-dance",
                url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: "machine",
                        url: "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    version_group: {
                        name: "red-blue",
                        url: "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
            ]
        },
    ],
    name: "ivysaur",
    order: 2,
    past_types: [],
    species: {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/2/"
    },
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
        back_female: null,
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
        back_shiny_female: null,
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        front_female: null,
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        front_shiny_female: null,
    },
    stats: [
        {
            base_stat: 60,
            effort: 0,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            base_stat: 62,
            effort: 0,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            base_stat: 63,
            effort: 0,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            base_stat: 80,
            effort: 1,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/"
            }
        },
    ],
    types: [
        {
            slot: 1,
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            slot: 2,
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],
    weight: 130
}

describe('CatchModal Component Test', () => {
    it("rendered modalSuccess", async () => {

        const { getByTestId } = render(
            <MockedProvider>
                <CatchModal name='ivysaur' data={datapi} closeModal={true} >
                    <SuccessCaught name='ivysaur' data={datapi} closeModal={true} />
                </CatchModal>
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 3000)));
        // Promise.resolve().then(() => jest.advanceTimersByTime(3000));
        
        const display = getByTestId("successModalTest")
        expect(display).toBeTruthy();
    });

    it("rendered modalFailed", async () => {

        const { getByTestId } = render(
            <MockedProvider>
                <CatchModal name='ivysaur' data={datapi} closeModal={false} >
                    <SuccessCaught name='ivysaur' data={datapi} closeModal={false} />
                </CatchModal>
            </MockedProvider>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 3000)));
        
        const display = getByTestId("failedModalTest")
        expect(display).toBeTruthy();
    });

});