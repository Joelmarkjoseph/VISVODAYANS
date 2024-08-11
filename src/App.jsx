import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Land from "./components/Land";
import CodeEditor from "./components/CodeEditor";
// import Playground from "./components/Playground";
import Arena from "./components/Arena";
// import Battleground from "./components/Battleground";

function App() {
  return (
    <Router>
      <Box maxW="1200px" mx="auto" p={4} bg="gray.50">
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/playground" element={<CodeEditor />} />
          <Route path="/arena" element={<Arena />} />
          {/* <Route path="/battleground" element={<Battleground />} /> */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
