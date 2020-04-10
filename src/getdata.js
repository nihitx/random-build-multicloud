const getdata = async (url) => {
    const result = await fetch(`${url}/dev/get`);
    const resultBody = await result.json();
    return resultBody;
}

module.exports = {
    getdata
}
