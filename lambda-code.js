import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-south-1" });

export const handler = async () => {
  try {
    const data = await client.send(new ScanCommand({ TableName: "Quotes" }));
    const items = data.Items.map(item => ({
      id: item.id.S,
      quote: item.quote.S
    }));

    const random = items[Math.floor(Math.random() * items.length)];

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(random)
    };
  } catch (err) {
    console.error("Error fetching quote:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching quote" })
    };
  }
};
