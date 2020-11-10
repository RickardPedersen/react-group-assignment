import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";
import { H3, P, Span, Div } from "./partials/GeneralStyles";

export default function UserInfo() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    UserKit.getMe()
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, []);
  return (
    <>
      {currentUser && (
        <Div
          borderRadius="borderRadius borderRadius 0 0"
          background="gray2"
          flex
          align="center"
          justify="center"
          padding="xl m"
          margin="0 0 0 0"
        >
          <H3 margin="0">
            Welcome back {`${currentUser.firstName} ${currentUser.lastName}`}
            <Span fontSize="0.8rem" fontWeight="400" margin="0 0 0 s">
              {currentUser.email}
            </Span>
          </H3>
        </Div>
      )}
    </>
  );
}
