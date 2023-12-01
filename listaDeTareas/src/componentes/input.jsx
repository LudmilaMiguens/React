
export function Input({onAdd}) {
    return (
        <form>
            <label htmlFor="input"></label>
            <input type="text" id="input" name="input"/>
            <input className="float- left" type="submit" value="Crear" />
            <input className=" float-right" type="reset" value="Limpiar"/>
        </form>
    )
    
}