//es la manera recomendada solo para files no existen
//componentes controlados
import { useState } from "react"



const App = () => {
    const [value, setValue] = useState({
        normal: '',
        texto: '',
        selector: '',
        check: false,
        radio: '1'
    })
    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }))
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input placeholder="type something" type="text" name="normal" value={value.normal} onChange={handleChange} />
            <textarea placeholder="type more" name='texto' value={value.texto} onChange={handleChange} />
            <select name="selector" value={value.selector} onChange={handleChange}>
                <option value=''>-- Seleccione --</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <input type="checkbox" name="check" checked={value.check} onChange={handleChange} />
            <div>
                <label>Tipos</label>
                <input
                    type="radio"
                    value="1"
                    name="radio"
                    onChange={handleChange}
                    checked={value.radio === '1'}
                /> 1
                <input
                    type="radio"
                    value="2"
                    name="radio"
                    onChange={handleChange}
                    checked={value.radio === '2'}
                /> 2
                <input
                    type="radio"
                    value="3"
                    name="radio"
                    onChange={handleChange}
                    checked={value.radio === '3'}
                /> 3
            </div>
        </div>

    )
}

export default App