# frontend
# Vue App Demo

# Description
This Vue app is a frontend demo showcasing three main features:
1. **Chat Interaction**: Engage in normal back-and-forth text interactions with a chat AI agent.
2. **Information Saving**: Highlighted information (shown in bold) can be saved and sent 
						to a database/JSON file (in the backend part). If the output doesnt include
						highlighted text you can highlight with the cursor and save it.
3. **Image Retrieval**: Users can request images from the chatbot and retrieve them.

# Additional Features
- **Login System**: Implemented a secure login that requires a username and password.
- **Session History**: All questions and answers during the session are displayed in the Session 
					History box at the bottom of the page. In the backend a function to save the session
					information (user,datetime, question, text asnwer is included), and the idea is that 
					you can access to previouse session using the Show Sessions button..

# Installation
To run this Vue app, follow these steps:
1. **Prerequisites**: Ensure you have [Node.js] installed on your machine (recommended version: 14.x or later).
2. **Vue Version**: This app uses Vue version 3.2.13.
3. **Download the App**: [Download the ZIP file] containing the app.
4. **Extract the ZIP File**: Unzip the downloaded file using 7zip to a directory of your choice.
5. **Install Dependencies**: Navigate to the app directory in your terminal and run:
   ```bash
   npm install
	```
6. **Launch the app ** To Compiles and hot-reloads for development
	```
	npm run serve
	```

# Components
-**AppTemplate.** The AppTemplate component defines the overall structure and layout of the application. 
-**AppStyle.** The AppStyle component handles all the styling for the application. 
-**AppScript.** The AppScript component contains all the logic and functionality of the application,
		including handling user interactions, API calls, and managing application state. 
-**Backend Interaction.** In a typical setup, this application is designed to work with a Flask backend, 
				allowing seamless interaction with OpenAI agents for dynamic responses. 
				However, for the purposes of this demo, a mockApi.js has been included.
-**mockAPI.js** provides predetermined outputs, enabling the application to function without a backend.

# Usage Examples
1. Login: Use the following credentials to log in:
	Username: user
	Password: password
2. Ask a Generic Question: If you ask a generic question, you will receive a mock output.
	You can save text by selecting with the cursor and clicking Save Highlighted words.
3. Generate an Image: If you ask the chatbot to generate an image, it will retrieve an example image for you.
4. Request a Discharge Letter: Asking for a discharge letter will return an example discharge letter, 
	with relevant text highlighted in bold. You can save this word using Save Highlighted word.
