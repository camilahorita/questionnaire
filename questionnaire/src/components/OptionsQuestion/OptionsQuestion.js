import "./OptionsQuestion.css"
function OptionsQuestion() {

    return (
        <div>
            <div className="boolQuest">
            <p>What do you know about ..... ?</p>
            <div>
                <input className="checkbox" type="radio" name="value" id="option1" />
                <label className="option" htmlFor="option1" >Option1 </label>
                <input className="checkbox" type="radio" name="value" id="option2" />
                <label className="option" htmlFor="option2" >Option2 </label>
            </div>
        </div>
        </div>
    )
}
export default OptionsQuestion;
