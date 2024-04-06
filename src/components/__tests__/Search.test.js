import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCardListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load 2 Restaurant cards with search text ice", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "ice" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should load 12 top rated restaurants on hitting Top Rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(12);
});
