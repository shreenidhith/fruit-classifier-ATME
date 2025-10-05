from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
import joblib, os
import numpy as np
from preprocessing import extract_color_histogram

def load_dataset(data_dir):
    X, y = [], []
    for label in os.listdir(data_dir):
        folder = os.path.join(data_dir, label)
        for img_file in os.listdir(folder):
            img_path = os.path.join(folder, img_file)
            features = extract_color_histogram(img_path)
            X.append(features)
            y.append(label)
    return np.array(X), np.array(y)

X_train, y_train = load_dataset("images")

models = {
    "logistic": LogisticRegression(max_iter=1000),
    "tree": DecisionTreeClassifier(),
    "forest": RandomForestClassifier(),
    "knn": KNeighborsClassifier(),
    "svm": SVC(probability=True)
}

for name, model in models.items():
    model.fit(X_train, y_train)
    joblib.dump(model, f"models/{name}.pkl")
