export function getDataFromCache(cacheName) {
    try {
        const data = localStorage.getItem(cacheName);
        if (data) {
            var newData = JSON.parse(data);
            newData.password = atob(newData.password)
            return newData;
        } else {
            console.log("no data in cache");
            return null;
        }
    } catch (error) {
        console.log("error getting cache: " + error);
    }
}

export function addDataIntoCache(cacheName, response) {
    try {
        localStorage.setItem(cacheName, JSON.stringify(response))
    } catch (error) {
        console.log("error adding cache: " + error);
    }
}
