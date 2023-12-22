export function getItems(){
    const itemFrom = JSON.parse(window.localStorage.getItem("todo-list"));
    if(itemFrom === null){
        return  [];
    } else{
        return itemFrom
    }
}