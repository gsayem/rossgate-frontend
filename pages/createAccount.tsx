import classNames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateAccount() {
  const router = useRouter();
  const [fullName, setFullName] = useState<string>();
  const [accountId, setAccountId] = useState<string>();
  const [showSampleError, setshowSampleError] = useState<boolean>(false); //To show the error message
  const onContinue = async () => {
    if (!showSampleError) {
      setshowSampleError(true);
      return;
    }

    router.push("secureAccount");
  };
  return (
    <>
      <header className="header">
        <div className="header-inner d-flex justify-content-center align-items-center">
          <h5>Create NEAR account</h5>
          <button
            type="button"
            className="close-btn"
            aria-label="Close"
          ></button>
        </div>
      </header>

      <main className="container-inner">
        <div className="paragraph-text">
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </div>

        <div className="create-account">
          <div className="group">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Ex. John doe"
              value={fullName}
              onChange={(e) => {
                if (e.target) {
                  setFullName(e.target.value);
                }
              }}
            />
          </div>
          <div
            className={classNames({
              group: true,
              "error-group": showSampleError,
            })}
          >
            <label htmlFor="account_id" className="form-label d-flex">
              Account ID <img src="images/icon-info.png" alt="" />
            </label>
            <div className="account-form d-flex">
              <input
                type="text"
                className="form-control"
                id="account_id"
                placeholder="accountId"
                value={accountId}
                onChange={(e) => {
                  if (e.target) {
                    setAccountId(e.target.value);
                  }
                }}
              />
              <button type="button" className="btn btn-id">
                .near
              </button>
            </div>
            {showSampleError && (
              <span className="error">Account ID already taken!</span>
            )}
          </div>
        </div>

        <div className="continue-button d-flex justify-content-center align-items-center">
          <button
            onClick={(e) => onContinue()}
            type="button"
            className={classNames({
              btn: true,
              "btn-continue": true,
              "btn-continue-disabled":
                fullName == undefined ||
                fullName.length <= 0 ||
                accountId == undefined ||
                accountId.length <= 0,
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
      </main>

      <div className="divider"></div>

      <h6 className="text-center">Already have NEAR account?</h6>

      <div className="login-button d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-dark btn-login">
          Log in with NEAR
        </button>
      </div>
    </>
  );
}
