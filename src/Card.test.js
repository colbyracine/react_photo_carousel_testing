import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card";

test("it rendered without creashing", () => {
  render(<Card caption />);
});

test("it matched snapshot", () => {
  const { asFragment } = render(
    <Card caption="caption" src="src" currNum="1" totalNum="3" />
  );
  expect(asFragment()).toMatchSnapshot();
});
