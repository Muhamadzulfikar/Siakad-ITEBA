const PostMethod = (api, json) => {
    async function postdata() {
        await fetch(
            api, {
            method: 'POST',
            headers: {
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