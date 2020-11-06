import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";
import { H3, P, Span, Div } from "./partials/GeneralStyles";

export default function UserInfo() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    UserKit.getMe()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      });
  }, []);
  return (
    <>
      {currentUser && (
        <Div
			borderRadius="borderRadius 0 borderRadius 0"
			background="gray1"
			flex
			align="center"
			margin="0 0 m 0"
		>
          <H3 margin="0">
            Welcome back {`${currentUser.firstName} ${currentUser.lastName}`}
			<Span fontSize="0.8rem" fontWeight="400"  margin="0 0 0 s">{currentUser.email}</Span>
          </H3>
        </Div>
      )}
    </>
  );
}
