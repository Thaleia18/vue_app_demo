export default {
  login(credentials) {
    return new Promise((resolve) => {
      const { username, password } = credentials;
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve({ ok: true });
        } else {
          resolve({ ok: false });
        }
      }, 1000); // Simulating network delay
    });
  },

  logout() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ok: true }), 1000); // Mock successful logout
    });
  },

  askQuestion(question) {
    return new Promise((resolve) => {
      let answer;

      // Check for specific questions and provide corresponding answers
      if (question.toLowerCase() === 'discharge letter') {
        answer = `
          Discharge Letter for John Doe<br><br>
          <strong>Date of Discharge: June 20, 2024</strong><br><br>
          <strong>Diagnosis: Bacterial Infection</strong><br><br>
          Treatment Summary:<br>
          Mr. John Doe was admitted for the treatment of a bacterial infection. 
          During his stay, he received appropriate antibiotics and supportive care.<br><br>
          Discharge Medications:<br>
          <strong>Antibiotic: Amoxicillin 500 mg</strong><br>
          <strong>Dosage: Take one tablet three times a day for 7 days.</strong><br><br>
          Instructions: Complete the full course of antibiotics even if symptoms improve.<br><br>
          Follow-Up Appointment: Please schedule a follow-up appointment in one week.<br><br>
          Physician's Name: Dr. Jane Smith
        `;
        // Resolve with a JSON response for the discharge letter
        return resolve({
          ok: true,
          json: () => Promise.resolve({ answer })
        });
      } else if (question.toLowerCase().includes('generate image')) {
        const imageUrl = '/img/img.jpeg'; //path
        return resolve({
          ok: true,
          json: () => Promise.resolve({ answer: imageUrl }) // Return image URL as the answer
        });
      } else {
        answer = 'This is a mock answer. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'; // General answer
        // Resolve with a JSON response for general questions
        return resolve({
          ok: true,
          json: () => Promise.resolve({ answer })
        });
      }
    });
  },

  sendSelectedWords({ selectedWords, sentTo }) {
    return new Promise((resolve) => {
      // Use the parameters to avoid unused variable warnings
      console.log('Selected Words:', selectedWords);
      console.log('Sent To:', sentTo);

      setTimeout(() => resolve({ ok: true }), 1000); // Mock sending words
    });
  }
};
