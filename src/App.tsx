import React, { useState } from "react";
import "./App.scss";
import { LongText } from "./components/LongText/LongText";
import Modal from "./components/Modal/Modal";
import ApplyLoanModal from "./components/Modal/Variants/ApplyLoanModal";

export default function App() {
  return (
    <div className="App">
      <h1>NewDay</h1>
      <h2>Let&apos;s see a modal</h2>
      <ApplyLoanModal />
      <LongText/>
    </div>
  );
}
