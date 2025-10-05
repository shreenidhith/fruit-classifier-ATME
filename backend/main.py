from fastapi import FastAPI, UploadFile, File, Form
from preprocessing import extract_color_histogram
from model_utils import load_model, predict
from PIL import Image
import tempfile
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

@app.post("/predict")
async def classify_fruit(file: UploadFile = File(...), model_name: str = Form(...)):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        features = extract_color_histogram(tmp.name)
    model = load_model(model_name)
    label, confidence = predict(model, features)
    return {"fruit": label, "confidence": round(confidence, 2)}

@app.get("/models")
def list_models():
    return {"available_models": ["logistic", "tree", "forest", "knn", "svm"]}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)