import "./page.css";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="landing_page">
        <div className="flex min-h-screen items-center justify-center">
          <div id="cont_base" className="left">
            {" "}
            <Image
              className="mt-6"
              src="/images/logo.png"
              alt="logo"
              width={600}
              height={900}
            />
          </div>
          <div id="cont_base" className="right">
            <div className="upper">
              <h1 className="upper_heading">Happening Now.</h1>
              <h3>Join today.</h3>
            </div>
            <div className="middle">
              <button>Google</button>
              <button>Sign up with apple</button>
              <div style={{ display: "flex" }}>
                <hr style={{ color: "white", width: "9vw" }} />
                or
                <hr style={{ color: "white", width: "10vw" }} />
              </div>

              <button>Create Account</button>
              <div className="sublower">
                {" "}
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </div>
            </div>
            <div className="lower">
              Already have an account?
              <button>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
