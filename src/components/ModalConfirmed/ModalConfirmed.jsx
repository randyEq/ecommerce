import React from "react";
import styled from "styled-components";
import {
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";

const ModalConfirmed = () => {
  return (
    <>
      <StyledDivModal>
        <StyledModalCart>
          <img
            style={{ width: "35px", height: "35px" }}
            src="./src/assets/images/icon-order-confirmed.svg"
          />
          <h1>
            Order <br /> Confirmed
          </h1>
          <StyledParagraphModal>
            We hope you enjoy your food!
          </StyledParagraphModal>
        </StyledModalCart>
      </StyledDivModal>
    </>
  );
};

export default ModalConfirmed;
