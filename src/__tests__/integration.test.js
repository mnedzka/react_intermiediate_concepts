import React from "react";
import { mount } from "enzyme";
import App from "components/App";
import Root from "Root";

// let wrapped;

// beforeEach(() => {

// });

// afterEach(() => {
//   wrapped.unmount();
// });

it("can fetch a list of comments and display them", () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});
