import openai
openai.api_key = "sk-atE2Blrom56yz7eVtU0PyxuZb5LO29dbAcQSIETW"
response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)
