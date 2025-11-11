# Serverless Quotes API

A beginner-friendly **AWS Serverless REST API** built using:
- **AWS Lambda** (backend logic)
- **Amazon DynamoDB** (database)
- **Amazon API Gateway** (public API endpoint)

## 🚀 How It Works
1. The Lambda function reads random quotes from a DynamoDB table.
2. API Gateway exposes it as a REST endpoint.
3. The endpoint can be called from any frontend (HTML, React, etc).

## 🧩 Example API Response
```json
{"id": "1", "quote": "The best way to get started is to quit talking and begin doing."}
