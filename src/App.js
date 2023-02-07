import logo from "./logo.svg";
import "./App.css";
import luffy from "./images/luffy.jpg";
import { base64Photo } from "./Constant";
import Logo from "./logo.svg";
import DeleteIcon from "./DeleteIcon";

function App() {
  return (
    <div className="container">
      <div>Dùng ảnh trong reactjs</div>
      <img src={luffy} width="200" height="350" className="img" />
      <div className="require-title">Ảnh dùng require</div>
      <img src={require("./images/luffy.jpg")} />
      <div className="require-title">Đây là ảnh dùng link online</div>
      <img src="https://i.imgur.com/0BJobQo.jpg" className="img2" />
      <div className="require-title">Đây là ảnh dùng base64</div>
      <img src={base64Photo} className="img3" />
      <div className="require-title">Đây là ảnh dùng svg</div>
      <img src={Logo} className="img3" />
      <DeleteIcon />
    </div>
  );
}

export default App;
