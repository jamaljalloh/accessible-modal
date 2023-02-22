import { LongText } from "./components/LongText/LongText";
import ApplyLoanModal from "./components/Modal/Variants/ApplyLoan/ApplyLoanModal";
import { styled, useGlobalStyles } from "./stitches.config";

const StyledApp = styled("div", {
  textAlign: "center",
  h1: {
    backgroundImage: "$fontGradient",
    backgroundClip: "text"
  }
});

const Heading = styled("h1", {
  background: "$fontGradient"
});

export default function App() {
  useGlobalStyles();
  return (
    <StyledApp>
      <main>
        <Heading
          css={{
            WebkitTextFillColor: "transparent"
          }}
        >
          MyLoans
        </Heading>
        <ApplyLoanModal />
        <LongText />
      </main>
    </StyledApp>
  );
}
