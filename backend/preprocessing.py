from PIL import Image
import numpy as np

def extract_color_histogram(image_path, bins=(8, 8, 8)):
    image = Image.open(image_path).convert("RGB").resize((100, 100))
    image_np = np.array(image)
    hist = np.histogramdd(image_np.reshape(-1, 3), bins=bins, range=[(0, 256)]*3)[0]
    return hist.flatten() / hist.sum()
