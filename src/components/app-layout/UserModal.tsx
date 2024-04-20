import React from "react";
import Modal from "../Modal";
import Signup from "../../screens/signup";
import Signin from "../../screens/signin";

const UserModal = ({
  isSignupModalOpen,
  setIsSignupModalOpen,
  isSigninModalOpen,
  setIsSigninModalOpen,
}: any) => {
  return (
    <div>
      {" "}
      <Modal
        isModalOpen={isSignupModalOpen}
        setIsModalOpen={setIsSignupModalOpen}
        ModalClass="w-[90%] md:w-[50%] lg:w-[30%] max-h-[90vh] md:max-h-[90vh] m-2 overflow-auto z-50"
      >
        <Signup setIsModalOpen={setIsSignupModalOpen} />
      </Modal>
      <Modal
        isModalOpen={isSigninModalOpen}
        setIsModalOpen={setIsSigninModalOpen}
        ModalClass="w-[90%] md:w-[50%] max-h-[50vh] lg:w-[30%] md:max-h-[50vh] z-50"
      >
        <Signin setIsModalOpen={setIsSigninModalOpen} />
      </Modal>
    </div>
  );
};

export default React.memo(UserModal);
