import { useReducer } from 'react';

const reducer = (state, action) => {
    const reducerAction = [
        {id: "changeName", value:{name: state.name = "nazir"}},
        {id: "changeAge", value:{age: state.age = 25}},
        {id: "changeCountry", value:{country: state.country = "indonesia"}},
    ]

    reducerAction.map(({id, value}) =>{
        return (
            (action.type === id) && value
        )
    })
}

const App = () => {
    const person = {
        name: "Jhon Doe",
        age: 25,
        country: "America"
    }
    const [state, dispatch] = useReducer(reducer, person)
    return (
        <div className="container">
            <button onClick={() => { dispatch({ type: 'changeName' }) }}>
                changeName
            </button>
            <button onClick={() => { dispatch({ type: 'changeAge' }) }}>
                changeAge
            </button>
            <button onClick={() => { dispatch({ type: 'changeCountry' }) }}>
                changeCountry
            </button>
            <p>
                hallo my name is {state.name}
                <br />
                my age is {state.age}
                <br />
                my Country is {state.country}
            </p>
        </div>
    )
}

export default App