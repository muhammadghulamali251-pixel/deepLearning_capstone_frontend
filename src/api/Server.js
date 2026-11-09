// Server wakeup api

const serverWakeUp = async () => {
    try {
        const response = await fetch("https://deeplearning-capstone-backend-1.onrender.com/server/wakeup")

        const result = await response.json()
        
        if (!response.ok) {
            return {success: false, message:typeof result.detail === "string" ? result.detail : "Request failed"}
        }
        

        return {success: true, message: result}

    } catch {
        return {success: false, message: "Network failed."}
    }
}

export { serverWakeUp }