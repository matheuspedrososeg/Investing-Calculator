
export default function UserInput({onChange, userInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial investment</label>
                <input type="number" required 
                max={9999999}
                value={userInput.initialInvestment} 
                onChange={(event) => 
                    onChange('initialInvestment', event.target.value)}/>

            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" required 
                max={9999999}
                value={userInput.annualInvestment} 
                onChange={(event) => 
                    onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
            <label htmlFor="">Expected return</label>
                <input type="number" required 
                max={20}
                value={userInput.expectedReturn} 
                onChange={(event) => 
                    onChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
            <label htmlFor="">Duration</label>
                <input type="number" required 
                max={80}
                value={userInput.duration} 
                onChange={(event) => 
                    onChange('duration', event.target.value)}/>
            </p>
        </div>
    </section>
}