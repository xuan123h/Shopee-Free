import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase-config";
import Header from "./Header";
import Field from "../clean-up/field/Field";
import Label from "../clean-up/label/Label";
import Input from "../clean-up/input/Input";
import IconEyeClose from "../clean-up/icon/IconEyeClose";
import IconEyeOpen from "../clean-up/icon/IconEyeOpen";
import Button from "../clean-up/button/Button";
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    // Sau khi tạo xong thì sẽ update ngay vào firebase : su dung updateProfile
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    // update trường vào firebase store
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully !!!");
    navigate("/");
  };
  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = " Register Page ";
  }, []);
  return (
    <div>
      <div className=" h-[84px] flex items-center list-none bg-[#FFFFFF]">
        <Link to="/">
          <img
            src="https://1000marcas.net/wp-content/uploads/2021/06/Shopee-Logo-2015.png"
            alt=""
            className="w-[150px] h-[70px]  inline text-[14px] left-[220px] object-contain absolute top-[8px] rounded-[20px]"
          />
        </Link>
        <h2 className="w-[108px] h-[29px] text-[#222222] lg:text-[24px] absolute lg:left-[380px] font-bold left-4 text-sm">
          {" "}
          Đăng ký{" "}
        </h2>
        <li className="w-[130px] h-[17px] text-[#EE4D2D] text-[14px] absolute right-[200px] font-semibold lg:opacity-100 lg:visible opacity-0 invisible">
          {" "}
          Bạn cần giúp đỡ ?{" "}
        </li>
      </div>
      <div className="flex items-center">
        <img
          src="https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba"
          alt=""
          className="w-full lg:opacity-100 lg:visible opacity-0 invisible"
        />
        <form
          className="absolute z-10 lg:left-[1100px] lg:top-[200px] bg-[#fff] rounded-[0.25rem] lg:w-[400px] h-[740px] list-none w-[310px] top-24 left-8"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <h3 className="w-[107px] h-[24px] text-[#222222] text-[20px] mt-2 ml-6 font-bold mb-8">
            {" "}
            Đăng Ký{" "}
          </h3>
          <Input
            // cho id vào nó sẽ tự focus
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
          <br />
          <Input
            // cho id vào nó sẽ tự focus
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
          <br />
          <Input
            // cho id vào nó sẽ tự focus
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
          <Button
            type="submit"
            className="h-[20px] text-[#FFFFFF] text-[14px] bg-[#EE4D2D] mt-[40px]"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            {" "}
            TIẾP THEO{" "}
          </Button>
          <div className="lg:w-[337px] h-[29px] flex items-center lg:ml-11 mt-4 ml-1">
            <li> __________________ </li>
            <li className="w-[67px] h-[14px] text-violet-700 text-[12px] ml-3 mt-2 font-bold">
              {" "}
              HOẶC{" "}
            </li>
            <li className="absolute ml-[180px]"> __________________ </li>
          </div>
          <div className="flex items-center mt-4 lg:ml-[40px]">
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] absolute mt-1 lg:left-[50px] text-purple-500 left-10">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5 lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Facebook{" "}
              </li>
            </div>
            <div className="flex items-center ml-1 w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] absolute mt-1 lg:left-[154px] text-orange-500">
                <i class="bx bxl-google"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5 lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Google{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] absolute mt-1 lg:left-[260px] text-red-500">
                <i class="bx bxl-apple"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5 lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Apple{" "}
              </li>
            </div>
          </div>
          <div className="text-[#000000DE] text-[12px] w-[332px] h-[29px] mt-8 lg:ml-20 ml-6">
            <p> Bằng việc đăng kí, bạn đã đồng ý với Shopee về </p>
            <p className="w-[232px] h-[12px] text-[#EE4D2D] text-[12px] ml-3 font-semibold">
              {" "}
              Điều khoản dịch vụ & Chính sách bảo mật{" "}
            </p>
          </div>
          <div className=" flex items-center mt-9 lg:ml-20 w-[401px] h-[17px]  text-[14px] ml-10">
            <p className="mt-1 font-medium text-gray-600">
              {" "}
              Bạn đã có tài khoản ?{" "}
            </p>
            <p className="ml-3 w-[108px] h-[17px] text-[#EE4D2D] text-[14px] font-bold">
              <Link to="/sign-in">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
