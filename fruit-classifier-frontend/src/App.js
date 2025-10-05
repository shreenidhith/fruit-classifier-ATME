import { useState } from 'react';
import UploadForm from './components/UploadForm';
import ModelSelector from './components/ModelSelector';
import ResultDisplay from './components/ResultDisplay';
import { classifyFruit } from './api/predict';

function App() {
  const [file, setFile] = useState(null);
  const [selectedModel, setSelectedModel] = useState("logistic");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (file && selectedModel) {
      const res = await classifyFruit(file, selectedModel);
      setResult(res);
    }
  };

  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-br from-yellow-50 to-orange-100 p-6">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">🍍 Fruit Classifier</h1>
        <UploadForm setFile={setFile} />
          <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />

          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg shadow-md border-2 border-black"

            >
              Classify
            </button>
          </div>

          <ResultDisplay result={result} />
      </div>
    </div>
  );
}

export default App;
