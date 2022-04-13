import React from "react";

import { render, screen, fireEvent } from "utils/test-utils";
import {component-name} from "./{component-name}";

describe("<{component-name} />", () => {
  it("should render component", () => {
    render(<{component-name} />);
    expect(screen.getByText("form.component")).toBeInTheDocument();
  });
});