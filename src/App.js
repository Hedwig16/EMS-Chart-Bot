import './App.css';

function App() {
  return (
    <div className="App">
      {/* Dialogflow Messenger integration */}
      <df-messenger
        project-id="emschartchatbot"
        agent-id="05924197-6bbd-4f08-881c-16bacb3e1f89"
        language-code="en"
        max-query-length="-1"
        allow-feedback="all">
        <df-messenger-chat-bubble chat-title="EMS-Chart-Agent" class="custom-chat-bubble">
          {/* No need for an <img> tag here */}
        </df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
}

export default App;

