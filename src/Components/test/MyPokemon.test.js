import React from "react";
import { getByText, render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import MyPokemon from "../MyPokemon"
import  wait  from 'waait'


const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

  global.localStorage = localStorageMock;

afterEach(cleanup);

describe('MyPokemon Component Test', () => {
    it("rendered mypokemonListContainer", async () => {
        const { getByTestId } = render(
                <MyPokemon />
        );
        const get = getByTestId("mypokemoncontainer")
        expect(get).toBeTruthy();
    });
    console.log(global.localStorage)
    it("rendered getLocalStorage", async () => {
        expect(localStorageMock.getItem).toBeTruthy()
    })
});