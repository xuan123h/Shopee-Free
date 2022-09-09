import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";
import LoadingSpinner from "../loading/Loading";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  width: 95%;
  height: ${(props) => props.height || "56px"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 10px;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 */

const Button = ({
  type = "button",
  children,
  onClick = () => {},
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props; // su dung destructuring + rest
  // su dung 2 dau !! de convert number thanh boolean
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink
        to={to}
        style={{
          display: "inline-block",
        }}
      >
        <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};
export default Button;
