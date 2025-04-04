



import axios from 'axios'



const baseURL = "http://localhost:8080/api"


export const getTasks = async () =>{
    try{

        const response = await axios.get(baseURL +"/tasks",{
            withCredentials: true
        })
        return response.data

    } catch (error){
        console.log("Error getting products", error)
        throw error
    }
}



export const addTask = async (task) =>{
    try {

        const response = await axios.post('http://localhost:8080/api/tasks', task, {
            withCredentials: true 
        });

        return response.data
        
    } catch (error) {
        console.log("Error adding the product", error)
        throw error

    }
}


export const updateTask = async (task) =>{
    try {

        await axios.put(`http://localhost:8080/api/tasks/${task.id}`, task, {
            withCredentials: true 
        });
        
    } catch (error) {
        console.log("Error getting products", error)
        throw error
        
        
    }
}

export const deleteTask = async (taskId) =>{

    try {

        await axios.delete(`http://localhost:8080/api/tasks/${taskId}`,{
            withCredentials: true
        })
        
    } catch (error) {

        console.log("Error deleting the product", error)
        throw error
        


        
    }
 
}


