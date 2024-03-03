import { render } from "@testing-library/react"
import App from "../App"

test("Renders the app page", () => {
    const {container} = render(<App />)
    expect(container.children.length).toBeGreaterThan(1);
})