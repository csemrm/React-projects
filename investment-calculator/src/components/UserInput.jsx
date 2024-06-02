import { useState } from "react";

const UserInput = ({ userinput, onChange }) => {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label> Initial Investment </label>
                <input
                    type="number"
                    required
                    min={0}
                    value={userinput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)}
                />
            </p>

        </div>
        <div className="input-group">
            <p>
                <label> Annual Investment </label>
                <input type="number" required
                    min={0}
                    value={userinput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)}
                />
            </p>

        </div>
        <div className="input-group">
            <p>
                <label> Expected Return </label>
                <input type="number" required
                    min={0}
                    value={userinput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)}
                />
            </p>

        </div>
        <div className="input-group">
            <p>
                <label> Duration </label>
                <input type="number" required

                    min={1}
                    value={userinput.duration}
                    onChange={(event) => onChange('duration', event.target.value)}
                />
            </p>

        </div>
    </section>;
}

export default UserInput;