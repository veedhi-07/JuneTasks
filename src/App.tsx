import { useCallback, useState } from "react";
import "./App.css";
import PreviewForm from "./components/previewform";
import Sidebar from "./components/sidebar";
import { FormProvider } from "./context/useFormBuilder";
import PreviewLayout from "./layout/previewlayout";
// import addTextInput from "./components/utils/helper";

function App() {

  return (
    <>
      <div className="root flex flex-row">
        <FormProvider>
          <Sidebar />
          <PreviewLayout />
        </FormProvider>
      </div>
    </>
  );
}

export default App;
