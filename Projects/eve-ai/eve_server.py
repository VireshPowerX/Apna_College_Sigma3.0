from flask import Flask, request, jsonify
from flask_cors import CORS
from gpt4all import GPT4All
import os

os.environ["CUDA_VISIBLE_DEVICES"] = ""  # Disable GPU (optional)

app = Flask(__name__)
CORS(app)

# ✅ Correct model name and path
model = GPT4All(model_name="q4_0-orca-mini-3b.gguf", model_path="C:/Users/Viresh/gpt4all/models")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    prompt = data.get("message")

    # 💬 Generate response using GPT4All
    response = model.generate(prompt, max_tokens=100)

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(port=5000)
