import "./App.css";
import Sidebar from "./components/sidebar";
import { FormProvider } from "./context/useFormBuilder";
import PreviewLayout from "./layout/previewlayout";

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
