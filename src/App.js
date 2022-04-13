import { WelcomeHeader } from "./components/WelcomeHeader";
import { InputName } from "./components/InputName";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <InputName catchUserName={setName} />
      <WelcomeHeader userName={name} />
    </div>
  );
}

export default App;
