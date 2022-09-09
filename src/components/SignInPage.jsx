import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useAuth } from "../hooks/auth-context";
import Input from "../clean-up/input/Input";
import IconEyeOpen from "../clean-up/icon/IconEyeOpen";
import IconEyeClose from "../clean-up/icon/IconEyeClose";
import Button from "../clean-up/button/Button";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  // Icon Show / Hide Password
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // 1. Start
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  // console.log(userInfo);
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  // 1. End
  const handleSignIn = async (values) => {
    // console.log(values);
    // Neu co loi thi se dung luon
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <div>
      <div className="h-[84px] flex items-center list-none bg-[#FFFFFF]">
        <Link to="/">
          <img
            src="https://1000marcas.net/wp-content/uploads/2021/06/Shopee-Logo-2015.png"
            alt=""
            className="w-[150px] h-[70px]  inline text-[14px] left-[220px] object-contain absolute top-[8px] rounded-[20px]"
          />
        </Link>
        <h2 className="w-[138px] h-[29px] text-[#222222] lg:text-[24px] absolute lg:left-[380px] font-bold left-4 text-sm">
          {" "}
          Đăng nhập{" "}
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
          className="absolute z-10 lg:left-[1100px] lg:top-[300px] bg-[#fff] rounded-[0.25rem] lg:w-[400px] h-[600px] list-none w-[320px] top-28 left-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex items-center">
            <h3 className="w-[141px] h-[24px] text-[#222222] text-[20px] font-bold ml-5">
              {" "}
              Đăng Nhập{" "}
            </h3>
            <li className="w-[160px] h-[60px] text-[#FFBF00] text-[14px] bg-[#FEFAEC] p-3 border border-[#FFBF00] font-bold mt-6">
              {" "}
              Đăng nhập với mã QR{" "}
            </li>
            <span className="text-[40px] mt-6 ml-3">
              <i class="bx bx-qr-scan"></i>
            </span>
          </div>
          <Input
            type="email"
            name="email"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            control={control}
          ></Input>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
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
            className="w-[337px] h-[40px] text-[#FFFFFF] text-[14px] bg-[#EE4D2D] mt-9"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            {" "}
            ĐĂNG NHẬP{" "}
          </Button>
          <div className="flex items-center justify-between ml-5 mt-2">
            <li className="w-[82px] h-[14px] text-[#0055AA] text-[12px]">
              {" "}
              Quên mật khẩu{" "}
            </li>
            <li className="w-[107px] h-[14px] text-[#0055AA] text-[12px] absolute right-[39px]">
              {" "}
              Đăng nhập với SMS{" "}
            </li>
          </div>
          <div className="w-[337px] h-[29px] flex items-center lg:ml-9 mt-2 ml-2">
            <li> __________________ </li>
            <li className="w-[67px] h-[14px] text-violet-700 text-[12px] ml-4 mt-2 font-bold">
              {" "}
              HOẶC{" "}
            </li>
            <li className="absolute ml-[184px]"> __________________ </li>
          </div>
          <div className="flex items-center mt-6 lg:ml-12 ml-1">
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] text-purple-500">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Facebook{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] text-orange-500">
                <i class="bx bxl-google"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Google{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] text-red-500">
                <i class="bx bxl-apple"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] lg:opacity-100 lg:visible opacity-0 invisible">
                {" "}
                Apple{" "}
              </li>
            </div>
          </div>
          <div className="flex items-center lg:mt-8 lg:ml-14 ml-8 mt-8">
            <p> Bạn mới biết đến Shopee ? </p>
            <p className="w-[68px] h-[17px] text-[#EE4D2D] ml-3 text-[14px]">
              <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
