export default function ResultDisplay({ result }) {
  return result ? (
    <div className="mt-6 p-4 border rounded-lg bg-green-50 text-green-800 shadow">
      <h3 className="text-xl font-bold">🍉 Prediction Result</h3>
      <p className="mt-2">Fruit: <strong>{result.fruit}</strong></p>
      <p>Confidence: <strong>{result.confidence}</strong></p>
    </div>
  ) : null;
}
