

const TodoList = (props) =>{
    return(<section className="w-2/6">
        <ul className="grid gap-3 m-0 p-5  bg-teal-100 rounded-2xl w-6/6 shadow-2xl">
            {props.children}
        </ul>
    </section>)
}

export {TodoList}