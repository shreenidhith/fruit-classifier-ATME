import { useState } from 'react';

export default function UploadForm({ setFile }) {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">Upload Fruit Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
      />
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
}
