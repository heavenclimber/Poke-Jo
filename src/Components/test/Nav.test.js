import React from "react";
import { cleanup, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { MockedProvider } from '@apollo/client/testing'
import Nav from "../Nav"


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

