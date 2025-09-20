import bgImage from "../../assets/onboarding_bg.jpg";
import logo from "../../assets/onboarding_logo.png";

import { Header } from "../components/Header";

export const Landing = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Onboarding Logo"
          style={{
            width: "60vw",
            maxWidth: "600px",
            minWidth: "120px",
            height: "auto",
          }}
        />
      </div>
    </>
  );
};
