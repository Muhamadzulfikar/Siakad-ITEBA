const DeleteMethod = (api, token) => {
    const bearer = `Bearer ${token}`
    async function deletedata() {
        await fetch(
            api, {
            method: 'DELETE',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
    }
    deletedata()
}

export default DeleteMethod