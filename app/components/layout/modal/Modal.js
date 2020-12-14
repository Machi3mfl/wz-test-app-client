import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

/******************************************
 *  Modal css styles
 ******************************************/
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  width: 70%;
  height: 60%;
  overflow: auto;
  background-color: white;
  position: relative;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;
const CloseButton = styled.svg`
  width: 15px;
  height: 15px;
  position: absolute;
  color: black;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
};

const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" }
};

////////////////////////////////////////////////////////////////////////


const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && 

        (
        /** Modal Overlay */     
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          {/** Modal Container */}
          <ModalContainer variants={containerVariant}>
            {/** Modal Close Button */}
            <CloseButton
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39">
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#0d6efd"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#0d6efd"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </CloseButton>
            {/** Modal Content */}
            {children}
          </ModalContainer>
        </Overlay>)
      }
    </AnimatePresence>
  );
};

export default Modal;
