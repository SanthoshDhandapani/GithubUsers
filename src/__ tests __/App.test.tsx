import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App.tsx";
import { store } from "../store";

const WrapWithStore = (props: React.PropsWithChildren) => (
  <Provider store={store}>{props?.children}</Provider>
);

test("Renders the app page", () => {
  const { container } = render(
    <WrapWithStore>
      <App />
    </WrapWithStore>
  );
  expect(container.children.length).toBeGreaterThan(1);
});
