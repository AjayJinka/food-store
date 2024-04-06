import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import ResCard, { withPromoted } from "../ResCard";

it("Should render the ResCard component with the props data", () => {
  render(<ResCard resData={MOCK_DATA} />);
  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument();
});

it("Should render the ResCard component with Promoted Label", () => {
  const ResCardWithPromoted = withPromoted(ResCard);
  render(<ResCardWithPromoted resData={MOCK_DATA} />);
  const resCardWithPromotedLabel = screen.getByText("Promoted");
  expect(resCardWithPromotedLabel).toBeInTheDocument();
});
