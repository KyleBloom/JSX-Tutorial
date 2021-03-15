
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party pooper"
  },
  {
    emoji: "💃",
    name: "dancing woman"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
    return (
      <div className = "container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p> I am writing JSX</p>}
      <ul>
        {/* map over the emojis array in the <ul> tag and return a <li>. 
        In each <li> use the emoji name as the key prop. The button will 
        have the same function as normal. In the <span> element, replace the 
        aria-label and id with the name. The content of the <span> tag should 
        be the emoji. */}
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
              onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
      </div>
    )
}

export default App;
