const DeleteMethod = (api) => {
    async function deletedata() {
        await fetch(
            api, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
    }
    deletedata()
}

export default DeleteMethod