


import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

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

        const response = await axios.post(baseURL +'/tasks', task, {
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

        await axios.put(baseURL +`/tasks/${task._id}`, task, {
            withCredentials: true 
        });
        
    } catch (error) {
        console.log("Error getting products", error)
        throw error
        
        
    }
}

export const deleteTask = async (taskId) =>{

    try {

        await axios.delete(baseURL +`/tasks/${taskId}`,{
            withCredentials: true
        })
        
    } catch (error) {

        console.log("Error deleting the product", error)
        throw error
        


        
    }
 
}


