import { render } from "@testing-library/react";
import App from "./App";

test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Cindy's Kitchen/);

    expect(h1).toHaveTextContent("Cindy's Kitchen");
});