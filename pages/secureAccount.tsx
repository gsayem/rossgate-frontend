import classNames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SecureAccount() {
  const router = useRouter();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const onContinue = async () => {
    router.push("experiences");
  };
  return (
    <>
      <header className="header">
        <div className="header-inner d-flex justify-content-center align-items-center">
          <h5>Secure your account</h5>
          <button
            type="button"
            className="close-btn"
            aria-label="Close"
          ></button>
        </div>
      </header>

      <main className="container-inner position-relative">
        <div className="complete-bar two"></div>

        <div className="paragraph-text">
          Keep your apps safe from other with access to your computer.
        </div>

        <div className="password-form">
          <div className="form-group">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                if (e.target) {
                  setPassword(e.target.value);
                }
              }}
              value={password}
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={(e) => {
                if (e.target) {
                  setConfirmPassword(e.target.value);
                }
              }}
              value={confirmPassword}
              type="password"
              className="form-control"
              id="inputConfirmPassword"
            />
          </div>
        </div>

        <div className="continue-button mb-0 d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={(e) => onContinue()}
            className={classNames({
              btn: true,
              "btn-continue": true,
              "btn-continue-disabled":
                password == undefined ||
                password.length <= 0 ||
                confirmPassword == undefined ||
                confirmPassword.length <= 0 ||
                password !== confirmPassword,
            })}
          >
            Continue
          </button>
        </div>

        <div className="email-id text-center">
          <a href="#">claudio@metapool.app</a>
        </div>

        <div className="intro-text text-center">
          by clicking continue you must agree to near labs
          <span className="d-block">
            <a className="link primary-link" href="#">
              Terms & Conditions
            </a>{" "}
            and
            <a className="link primary-link" href="#">
              {" "}
              Privacy Policy
            </a>
          </span>
        </div>
      </main>
    </>
  );
}
