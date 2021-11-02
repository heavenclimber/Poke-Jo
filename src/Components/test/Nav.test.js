import React from "react";
import { cleanup, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import Nav from "../Nav"


//Really sorry, I don't think I can understand the reactJs unit and integration testing
//on time, I will keep my best to understand what went wrong in the future time.

afterEach(cleanup)

describe('Nav Component Test', () => {
    it("rendered nav", () => {
        const { getByTestId } = render(
            <MockedProvider>
                <Nav />
            </MockedProvider>
        );
        const nav = getByTestId("navbar")
        expect(nav).toBeTruthy();
    });

});

