import axios from "axios";
import "./NumQuestion.css";

function NumQuestion(){

    function getQuestion() {
        axios
      
        .get("http://localhost:9090/api/boolq", { withCredentials: true })
      
        .then(function (response) {
      
          let resp = response;
          console.log(resp);
      
        })
        .catch(function (error) {
    
      
          console.log(error);
      
        })
      }
      getQuestion();
    return (
        <div className="numQuest">
            <p>What do you know about ..... ?</p>
            <div>
                <div className="radioOption"><label>1<input type="radio" name="value" value="1" checked/></label></div>
                <div className="radioOption"><label>2<input type="radio" name="value" value="2" /></label></div>
                <div className="radioOption"><label>3<input type="radio" name="value" value="3" checked/></label></div>
                <div className="radioOption"><label>4<input type="radio" name="value" value="4" /></label></div>
                <div className="radioOption"><label>5<input type="radio" name="value" value="5" checked/></label></div>
                <div className="radioOption"><label>6<input type="radio" name="value" value="6" /></label></div>
                <div className="radioOption"><label>7<input type="radio" name="value" value="7" checked/></label></div>
                <div className="radioOption"><label>8<input type="radio" name="value" value="8" /></label></div>
                <div className="radioOption"><label>9<input type="radio" name="value" value="9" checked/></label></div>
                <div className="radioOption"><label>10<input type="radio" name="value" value="10" /></label></div>      
            </div>
        </div>
    )
};

export default NumQuestion;