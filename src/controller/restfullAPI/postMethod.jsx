const PostMethod = (api, token, json) => {
    const bearer = `Bearer ${token}`
    async function postdata() {
        await fetch(
            api, {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(json)
        }
        )
    }
    postdata()
}

export default PostMethod