/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: "8px",
    radius: "4px",
    padding: "0",
  },
  medium: {
    height: "12px",
    radius: "4px",
    padding: "0",
  },
  large: {
    height: "24px",
    radius: "4px",
    padding: "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={{
        "--padding": styles.padding,
        "--radius": styles.radius,
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <ProgressValue
          value={value}
          style={{
            "--height": styles.height,
            "--width": value + "%",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;
export default ProgressBar;
