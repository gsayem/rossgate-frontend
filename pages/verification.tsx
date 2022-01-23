
import qs from "qs";
import { Outlet, useLocation } from 'react-router-dom';

// }
export default function Verification() {
  //const location = useLocation();
  // const { mobile, email, loginWith } = qs.parse(
  //   location?.search.substring(1)
  // ) as Record<string, string>;
  const email="test@test.com"
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
        We've sent a 6-digit verification code to the email address
        <a className="link" href="#">
          {email}
        </a>
      </div>

      <div className="verification-wrap">
        <h6 className="text-center">Enter verification code</h6>

        <div className="verification-row d-flex justify-content-center">
          <input type="number" className="form-control" value="" />
          <input type="number" className="form-control" value="" />
          <input type="number" className="form-control" value="" />
          <input type="number" className="form-control" value="" />
          <input type="number" className="form-control" value="" />
          <input type="number" className="form-control" value="" />
        </div>
      </div>

      <div className="continue-button d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-continue-disabled btn-continue"
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
          ans
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
