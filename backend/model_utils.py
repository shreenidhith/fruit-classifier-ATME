import joblib

def load_model(name):
    return joblib.load(f"models/{name}.pkl")

def predict(model, features):
    label = model.predict([features])[0]
    prob = model.predict_proba([features])[0].max()
    return label, prob
