import classNames from "classnames";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export default function Verification() {
  const router = useRouter();
  const { email, mobile, loginWith } = router.query;
  const [verificationCode1, setVerificationCode1] = useState<string>();
  const [verificationCode2, setVerificationCode2] = useState<string>();
  const [verificationCode3, setVerificationCode3] = useState<string>();
  const [verificationCode4, setVerificationCode4] = useState<string>();
  const [verificationCode5, setVerificationCode5] = useState<string>();
  const [verificationCode6, setVerificationCode6] = useState<string>();

  const title =
    "We've sent a 6-digit verification code to " +
    (loginWith === "mobile" ? "your phone" : "the email address");

  const setVerificationCode = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    switch (i) {
      case 1:
        setVerificationCode1("");
        if (e.target.value) {
          setVerificationCode1(e.target.value);
        }
        break;
      case 2:
        setVerificationCode2("");
        if (e.target.value) {
          setVerificationCode2(e.target.value);
        }
        break;
      case 3:
        setVerificationCode3("");
        if (e.target.value) {
          setVerificationCode3(e.target.value);
        }
        break;
      case 4:
        setVerificationCode4("");
        if (e.target.value) {
          setVerificationCode4(e.target.value);
        }
        break;
      case 5:
        setVerificationCode5("");
        if (e.target.value) {
          setVerificationCode5(e.target.value);
        }
        break;
      case 6:
        setVerificationCode6("");
        if (e.target.value) {
          setVerificationCode6(e.target.value);
        }
        break;
    }
  };
  const onContinue = async () => {
    const inValid =
      verificationCode1 &&
      verificationCode2 &&
      verificationCode3 &&
      verificationCode4 &&
      verificationCode5 &&
      verificationCode6;

    if (inValid) {
      router.push("createAccount");
    } else {
      console.log("Invalid");
    }
  };
  return (
    <>
      <header className="header">
        <div className="header-inner d-flex justify-content-center align-items-center">
          <h5>Verification</h5>
          <button
            type="button"
            className="close-btn"
            aria-label="Close"
          ></button>
        </div>
      </header>
      <div className="verification-code-text d-flex flex-column align-items-center text-center">
        {title}
        <a className="link" href="#">
          {loginWith === "mobile" ? mobile : email}
        </a>
      </div>

      <div className="verification-wrap">
        <h6 className="text-center">Enter verification code</h6>

        <div className="verification-row d-flex justify-content-center">
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode1}
            onChange={(e) => setVerificationCode(1, e)}
          />
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode2}
            onChange={(e) => setVerificationCode(2, e)}
          />
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode3}
            onChange={(e) => setVerificationCode(3, e)}
          />
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode4}
            onChange={(e) => setVerificationCode(4, e)}
          />
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode5}
            onChange={(e) => setVerificationCode(5, e)}
          />
          <input
            maxLength={1}
            type="text"
            className="form-control"
            value={verificationCode6}
            onChange={(e) => setVerificationCode(6, e)}
          />
        </div>
      </div>

      <div className="continue-button d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={(e) => onContinue()}
          className={classNames({
            btn: true,
            "btn-continue": true,
            "btn-continue-disabled":
              verificationCode1 == undefined ||
              verificationCode1.length <= 0 ||
              verificationCode2 == undefined ||
              verificationCode2.length <= 0 ||
              verificationCode3 == undefined ||
              verificationCode3.length <= 0 ||
              verificationCode4 == undefined ||
              verificationCode4.length <= 0 ||
              verificationCode5 == undefined ||
              verificationCode5.length <= 0 ||
              verificationCode6 == undefined ||
              verificationCode6.length <= 0,
          })}
        >
          Continue
        </button>
      </div>

      <div className="intro-text text-center">
        by clicking continue you must agree to near labs
        <span className="d-block">
          <a className="link" href="#">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a className="link" href="#">
            Privacy Policy
          </a>
        </span>
      </div>

      <div className="divider"></div>

      <h6 className="text-center">Didn't receive your code?</h6>

      <div className="links text-center m-3">
        <a href="#" className="link">
          Send to a different email address
        </a>
      </div>
      <div className="links text-center m-1">
        <a href="#" className="link">
          Resend your code{" "}
        </a>
      </div>
    </>
  );
}
