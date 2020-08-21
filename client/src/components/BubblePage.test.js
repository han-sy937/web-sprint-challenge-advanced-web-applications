import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockApi } from '../components/fetchApi'

let colorsData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]

jest.mock(`../components/fetchApi`)

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockApi.mockResolvedValue(colorsData)

  render(<BubblePage />)

  await waitFor(() => {
    expect(screen.getByTestId(/rainbow/i)).toBeInTheDocument()
  })

  await waitFor(() => {
    expect(screen.getByText(/aliceblue/i)).toBeInTheDocument()
  })
  

});
