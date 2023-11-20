import "./App.css";

import SingleFileUploader from "./components/SingleFileUploader";
import MultipleFileUploader from "./components/MultipleFileUploader";
import UploadcareUploader from "./components/UploadcareUploader";

function App() {
  return (
    <>
      <h1>React File Upload</h1>

      <h2>Single File Upload</h2>
      <SingleFileUploader />

      <h2>Multiple File Upload</h2>
      <MultipleFileUploader />

      <h2>Uploadcare File Uploader</h2>
      <UploadcareUploader />
    </>
  );
}

export default App;
