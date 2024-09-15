import requests as r

headers = {
   
    'Content-Type': 'application/json'
}

for i in range(0,30):
    print("Request #"+str(i))
    response = r.get("https://h0x7fb38l3.execute-api.eu-central-1.amazonaws.com/Prod/bedrock/chat",headers=headers)

    print(response.status_code)


