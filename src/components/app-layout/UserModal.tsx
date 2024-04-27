import React from "react";
import Modal from "../Modal";
import Signup from "../../screens/public/signup";
import Signin from "../../screens/public/signin";

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
        ModalClass="w-[90%] md:w-[50%] lg:w-[30%] h-[90%] lg:h-[84%] m-2 overflow-auto z-50 lg:mt-20 py-10"
        >
        {/* ModalClass="w-[90%] md:w-[50%] lg:w-[30%] max-h-[90vh] md:max-h-[90vh] m-2 overflow-auto z-50 lg:mt-20 py-10" */}
        <Signup setIsModalOpen={setIsSignupModalOpen} />
      </Modal>
      <Modal
        isModalOpen={isSigninModalOpen}
        setIsModalOpen={setIsSigninModalOpen}
        ModalClass="w-[90%] md:w-[50%] lg:w-[30%]  h-[50%] md:h-[40%] lg:h-[60%]  z-20 "
      >
        <Signin setIsModalOpen={setIsSigninModalOpen} />
      </Modal>
    </div>
  );
};

export default React.memo(UserModal);
