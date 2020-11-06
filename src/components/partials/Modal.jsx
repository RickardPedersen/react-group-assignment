import * as Styled from "./GeneralStyles";
import React from "react";

export default function Modal(props) {
  const { open, children, width, setOpen, title } = props;
  return (
    <>
      {open && (
        <Styled.Div
          position="fixed"
          flex
          direciton="column"
          justify="center"
          align="center"
          padding="xxl"
          background="rgba(0, 0, 0, 0.5)"
          fullscreen
        >
          <Styled.Div
            background="gray1"
            flex
            direction="column"
            justify="space-between"
            maxHeight="100%"
            height="auto"
            width={width || "800px"}
            borderRadius="borderRadius"
            padding="m"
          >
            <Styled.Div margin="0 0 m 0" flex justify="space-between" align="center">
              <Styled.H3 margin="0" >{title || 'title'}</Styled.H3>
              <Styled.Cross  margin="0" onClick={() => setOpen(false)}>+</Styled.Cross>
            </Styled.Div>
            {children}
          </Styled.Div>
        </Styled.Div>
      )}
    </>
  );
}
