(async () => {
    async function getUserInfo(userName) {
        let response = await fetch(`https://api.github.com/users/${userName}`);
        let info = await response.json()

        return {name: info.login, id: info.id}
    }

    let userInfo = await getUserInfo('vladislavovhich')

    console.log(userInfo)
})()