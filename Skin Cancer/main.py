from fastapi import FastAPI
from fastapi.responses import JSONResponse
import torch
from ultralytics import YOLO
import requests
from io import BytesIO
from PIL import Image
from pydantic import BaseModel
import uvicorn
import nest_asyncio

# Initialize FastAPI app
app = FastAPI()

# Load your YOLO model
model = YOLO('best.pt')

# Pydantic model for the input data
class Item(BaseModel):
    url: str  # URL to the image to predict on

# Prediction endpoint using the image URL
@app.post("/predict")
async def predict(item: Item):
    try:
        # Get the image from Cloudinary URL
        image_url = item.url
        image_bytes = requests.get(image_url).content

        # Open the image using PIL
        img = Image.open(BytesIO(image_bytes))

        # Save the image temporarily to perform inference
        temp_image_path = "./temp_image.jpg"
        img.save(temp_image_path)

        # Run inference with the YOLO model
        results = model(temp_image_path)
        result = results[0]

        # Get the detections from the model
        detections = [model.names[int(cls)] for cls in result.boxes.cls]

        return JSONResponse(content={"detections": detections})
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Main entry point
if __name__ == "__main__":
    nest_asyncio.apply()
    uvicorn.run(app, host="0.0.0.0", port=8001)
