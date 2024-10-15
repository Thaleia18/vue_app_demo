<template>
<div id="app" class="app-container">
    <Sidebar @logout="logout" @showSessions="showSessions" />
    <div class="content">
        <div v-if="!loggedIn">
            <h2>Login</h2>
            <input v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button @click="login">Login</button>
        </div>
        <div v-if="loggedIn">
        <h2>Ask a Question</h2>
        <input v-model="question" placeholder="Type your question" />
        <button @click="askQuestion">Ask</button>
        <div v-if="answer">
            <div v-if="answer.includes('Date of Discharge')" class="answer-box">
                <span v-html="answer"></span>
            </div>
            <div v-else-if="answer.includes('<img') && answer.includes('src=')" class="answer-box">
                <div v-html="answer"></div> <!-- Render the image if the backend returns an <img> tag -->
            </div>
            <div v-else class="answer-box">
                Answer: {{ answer }}
            </div>
        </div>
        <button  v-if="answer && !answer.includes('<img')" @click="saveSelectedWords">Save Highlighted Words</button> <!-- Add this button -->
        <div v-if="selectedWords.length > 0" class="selected-words-box">
            <strong>Highlighted Words:</strong><br>
            <span v-html="selectedWords.join('.  ')" /> <!-- Use v-html to render HTML -->
        </div>
        <div v-if="selectedWords.length > 0">
            <input v-model="sentTo" placeholder="Enter name to send selected words" />
            <button @click="sendSelectedWords">Send highlighted Words</button>
        </div>

                    
        <div v-if="qaHistory.length > 0" class="session-history">
        <h3>Session History</h3>
        <ul>
            <li v-for="(item, index) in qaHistory" :key="index">
                <strong>Q:</strong> {{ item.question }} <br />
                <strong>A:</strong>
                <span v-if="item.answer && item.answer.includes('Date of Discharge')">
                    Sensitive information omitted. <!-- Display this message -->
                </span>
                <span v-else-if="item.answer && item.answer.includes('<img')">
                    <div v-html="item.answer"></div> <!-- Render the image if the answer contains an <img> tag -->
                </span>
                <span v-else>
                    {{ item.answer }} <!-- Display the actual answer -->
                </span>
                <br />
                <strong>Time:</strong> {{ item.timestamp }}
            </li>
        </ul>
        </div>
    </div>
</div>
</div>
</template>