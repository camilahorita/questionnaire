import "./BooleanQuestion.css";

function BooleanQuestion(){
    return (
        <div>
            <div className="boolQuest">
            <p>What do you know about ..... ?</p>
            <div>
                <div className="radioOption"><label>True<input type="radio" name="value" value="true" checked/></label></div>
                <div className="radioOption"><label>False<input type="radio" name="value" value="false" /></label></div>
            </div>
        </div>
        </div>
    )
}

export default BooleanQuestion;