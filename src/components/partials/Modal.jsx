import React, { useEffect } from "react";
import * as Styled from "./GeneralStyles";

export default function Modal(props) {
  const { open, children, width, setOpen, title } = props;

  useEffect(() => {
    if(open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [open])
  return (
    <>
      {open && (
        <Styled.Div
          position="fixed"
          flex
          direciton="column"
          justify="center"
          align="center"
          padding="80px xl xl xl"
          background="rgba(0, 0, 0, 0.5)"
          fullscreen
          z-index="10000"
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
            overflow="hidden auto"
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
