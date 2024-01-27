
const Greetings = ({ lang, children }) => {
  let greetingText = '';

  switch (lang) {
    case 'de':
      greetingText = `Hallo, ${children}!`;
      break;      
    
    case 'fr':
      greetingText = `Bonjour, ${children}!`;
      break;
    
  }

  return (
    <div className="greetings">
      <p>{greetingText}</p>
    </div>
  );
};

export default Greetings;
