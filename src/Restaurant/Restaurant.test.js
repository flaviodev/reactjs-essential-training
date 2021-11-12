import { render, fireEvent } from "@testing-library/react";
import Restaurant from ".";

test("renders an h1", () => {
    const { getByText } = render(<Restaurant />);
    const h1 = getByText(/Cindy's Kitchen/);

    expect(h1).toHaveTextContent("Cindy's Kitchen");
});

test("selecting checkbox", () => {
    const { getByAltText, getByLabelText } = render(<Restaurant />);
    const img = getByAltText(/Pepper/);
    const checkbox = getByLabelText(/Spicy/);

    expect(img.hidden).toEqual(true);

    fireEvent.click(checkbox);

    expect(img.hidden).toEqual(false);
});