
const getGitHubUserWithFetch = async () => {
    const response = await fetch("https://5fbb616ec09c200016d4067a.mockapi.io/kito");
    const jsonData = await response.json();
    return jsonData;
};
export default getGitHubUserWithFetch;