import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  it("Should load the login button in Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("Should change the Login to Logout on click of Login button in Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Log Out" });
    expect(logoutButton).toBeInTheDocument();
  });

  it("Should load the cart in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });

  it("Should load the cart with 0 items in the Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartWithZeroItems = screen.getByText("Cart🛒 - (0 items)");
    expect(cartWithZeroItems).toBeInTheDocument();
  });
});
