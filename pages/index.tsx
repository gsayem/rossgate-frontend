import Header from "components/header";
import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

function MainContent({ children }: Props) {
  return <main className="container-inner">{children}</main>;
}
export default function Login() {
  const router = useRouter();
  const [loginWith, setLoginWith] = useState("mobile");
  const [inputCredentialEmail, setInputCredentialEmail] = useState("");
  const [inputCredentialMobile, setInputCredentialMobile] = useState("");
  const [isValidForVarification, setIsValidForVarification] = useState(false);
  const onChangeInputCredential = (lw, e) => {
    setLoginWith(lw);
    if (lw === "mobile") {
      if (e.target) {
        setInputCredentialMobile(e.target.value);
      }
    } else if (lw === "email") {
      if (e.target) {
        setInputCredentialEmail(e.target.value);
      }
    } else {
      setInputCredentialEmail("");
      setInputCredentialMobile("");
    }
  };

  const onContinue = async () => {
    // No validation for now
    if (loginWith === "email") {
      if (inputCredentialEmail || inputCredentialEmail.length > 0) {
        setIsValidForVarification(true);
        router.push({
          pathname: "/verification",
          query: { email: inputCredentialEmail, loginWith: loginWith },
        });
      }
    } else if (loginWith === "mobile") {
      if (inputCredentialMobile || inputCredentialMobile.length > 0) {
        setIsValidForVarification(true);
        router.push({
          pathname: "/verification",
          query: { mobile: inputCredentialMobile, loginWith: loginWith },
        });
      }
    }
  };
  return (
    <>
      <Header />
      <MainContent>
        <div className="email-phone d-flex justify-content-center">
          <button
            type="button"
            className={classNames({
              btn: true,
              "btn-email": true,
              "btn-outline": loginWith === "email",
            })}
            onClick={() => {
              onChangeInputCredential("email", "");
            }}
          >
            Email
          </button>
          <button
            type="button"
            className={classNames({
              btn: true,
              "btn-phone": true,
              "btn-outline": loginWith === "mobile",
            })}
            onClick={() => {
              setLoginWith("mobile");
              onChangeInputCredential("mobile", "");
            }}
          >
            Phone
          </button>
        </div>
        {loginWith === "mobile" && (
          <div className="email">
            <input
              value={inputCredentialMobile}
              onChange={(e) => onChangeInputCredential("mobile", e)}
              type="tel"
              className="form-control"
              id="email"
              placeholder="Ex (337) 378 8383"
            />
          </div>
        )}
        {loginWith === "email" && (
          <div className="email">
            <input
              onChange={(e) => onChangeInputCredential("email", e)}
              type="email"
              className="form-control"
              id="email"
              placeholder="johndoe@gmail.com"
              value={inputCredentialEmail}
            />
          </div>
        )}
        <div className="continue-button d-flex justify-content-center align-items-center">
          <button
            onClick={() => {
              onContinue();
            }}
            type="button"
            className={classNames({
              btn: true,
              "btn-continue": true,
              "btn-continue-disabled":
                loginWith === "email"
                  ? inputCredentialEmail == undefined ||
                    inputCredentialEmail.length <= 0
                  : inputCredentialMobile == undefined ||
                    inputCredentialMobile.length <= 0,
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
            and {" "}
            <a className="link" href="#">
            {" "}  Privacy Policy
            </a>
          </span>
        </div>
        <div className="divider"></div>
        <h6 className="text-center">Already have NEAR account?</h6>
        <div className="login-button d-flex justify-content-center align-items-center">
          <button type="button" className="btn btn-dark btn-login">
            Log in with NEAR
          </button>
        </div>
      </MainContent>
    </>
  );
}
