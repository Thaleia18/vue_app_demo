import mockApi from './mockApi.js';
import Sidebar from './components/SidebarComponent.vue'; 

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      username: '',
      password: '',
      question: '',
      answer: '',
      loggedIn: false,
      qaHistory: [],
      selectedWords: [],
      sentTo: '',
    };
  },
  methods: {
    async login() {
      const response = await mockApi.login({ username: this.username, password: this.password });
      if (response.ok) {
        this.loggedIn = true;
        this.selectedWords = [];
      } else {
        alert('Login failed');
      }
    },
    async logout() {
      const response = await mockApi.logout();
      if (response.ok) {
        this.loggedIn = false;
        this.username = '';
        this.password = '';
        this.question = '';
        this.answer = '';
        this.qaHistory = []; // Clear history on logout
      } else {
        alert('Logout failed');
      }
    },
    async askQuestion() {
      const response = await mockApi.askQuestion(this.question);
        if (response.ok) {
          const data = await response.json(); // Handle JSON response
          if (data.answer.startsWith('/img/')) {
            // Handle image response
            this.answer = `<img src="${data.answer}" alt="Generated Image" />`;
          } else {
            // Handle text response
            this.answer = data.answer;
          }
          // Add the Q&A to history with a timestamp
          const timestamp = new Date().toLocaleString();
          this.qaHistory.push({
            question: this.question,
            answer: this.answer,
            timestamp: timestamp,
          });
          this.question = '';
        } else {
          alert('Error asking question');
        }
    },
    async sendSelectedWords() {
      if (!this.sentTo) {
        alert("Please enter a file name to send the words to.");
        return;
      }
      const dataToSend = {
        sentTo: this.sentTo,
        selectedWords: this.selectedWords,
      };
      const response = await mockApi.sendSelectedWords(dataToSend);
      if (response.ok) {
        alert("Highlighted words sent successfully!");
        this.selectedWords = [];  // Clear selected words
        this.sentTo = '';         // Clear the "Sent to" field
        this.question = '';       // Clear question box
        this.answer = '';         // Clear answer box
      } else {
        alert("Error sending highlighted words.");
      }
    },
    showSessions() {
      alert('Show sessions functionality is not implemented yet.');
    },
    saveSelectedWords() {
      const answerHtml = this.answer;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = answerHtml;
      const strongElements = tempDiv.getElementsByTagName('strong');
      const wordsToAdd = [];

      // Check if there are <strong> elements
      if (strongElements.length > 0) {
        // If <strong> elements exist, add their text to wordsToAdd
        for (let i = 0; i < strongElements.length; i++) {
          const word = strongElements[i].innerText.trim();
          if (word) {
            wordsToAdd.push(word);
          }
        }
      } else {
        // If no <strong> elements, allow manual selection
        const selection = window.getSelection().toString().trim();
        if (selection) {
          wordsToAdd.push(selection);
        }
      }
      // Add unique words to selectedWords
      wordsToAdd.forEach(word => {
        if (word && !this.selectedWords.includes(word)) {
          this.selectedWords.push(word);
        }
      });
    },
  },
};
