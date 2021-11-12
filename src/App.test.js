import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Cindy's Kitchen/);

    expect(h1).toHaveTextContent("Cindy's Kitchen");
});

test("selecting checkbox", () => {
    const { getByAltText, getByLabelText } = render(<App />);
    const img = getByAltText(/Pepper/);
    const checkbox = getByLabelText(/Spicy/);

    expect(img.hidden).toEqual(true);

    fireEvent.click(checkbox);

    expect(img.hidden).toEqual(false);
});