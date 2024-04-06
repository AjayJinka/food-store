import { fireEvent, render, screen } from "@testing-library/react";
import ResMenu from "../ResMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restarurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const burgersAccordion = screen.getByText("BURGERS (14)");
  expect(burgersAccordion).toBeInTheDocument();

  fireEvent.click(burgersAccordion);
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(14);

  const addBtns = screen.getAllByText("Add +");
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart🛒 - (1 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItem").length).toBe(15);
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart🛒 - (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItem").length).toBe(16);

  const clearCartBtn = screen.getByText("Clear Cart🧹");
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItem").length).toBe(14);
  expect(
    screen.getByText("Cart is Empty, Add items to the Cart!")
  ).toBeInTheDocument();
});
