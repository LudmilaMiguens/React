export function Input({onAdd}) {
    return (
        <form onSubmit={onAdd}>
            <label htmlFor="input">Ingresa tu tarea</label>
            <input type="text" id="input" name="input"/>
            <input className="float- left" type="submit" value="Crear" />
        </form>
    )
    
}