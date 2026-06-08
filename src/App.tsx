import "./App.css";
import Sidebar from "./components/sidebar";
import { FormProvider } from "./context/useFormBuilder";
import UsersTable from "./jsondatadownload";
import PreviewLayout from "./layout/previewlayout";

function App() {
  return (
    <>
      <div className="root flex flex-row">
        <FormProvider>
          <Sidebar />
          <PreviewLayout />
        </FormProvider>
        {/* <UsersTable /> */}
      </div>
    </>
  );
}

export default App;
