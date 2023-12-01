export function getDataFromCache(cacheName) {
    try {
        const data = localStorage.getItem(cacheName);
        if (data) {
            var newData = JSON.parse(data);
            newData.password = atob(newData.password)
            return newData;
        } else {
            return null;
        }
    } catch (error) {
        console.error("error getting cache: " + error);
    }
}

export function addDataIntoCache(cacheName, response) {
    try {
        localStorage.setItem(cacheName, JSON.stringify(response))
    } catch (error) {
        console.error("error adding cache: " + error);
    }
}

export function removeDataFromCache(cacheName) {
    try {
        localStorage.removeItem(cacheName)
    } catch (error) {
        console.error("error removing cache: " + error);
    }
}
