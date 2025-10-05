export default function ModelSelector({ selectedModel, setSelectedModel }) {
  const models = ["logistic", "tree", "forest", "knn", "svm"];
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Select Model</label>
      <select
        value={selectedModel}
        onChange={e => setSelectedModel(e.target.value)}
        className="w-full p-2 border rounded-md bg-white shadow-sm"
      >
        {models.map(model => (
          <option key={model} value={model}>{model.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}
