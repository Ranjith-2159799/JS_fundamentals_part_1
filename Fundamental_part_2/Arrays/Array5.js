function fetchData(url, callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5;
        if (error) {
            callback(`error, ${url}`);
        } else {
            callback(`success, ${url}`);
        }
    }, 1000); 
}

function callbackFunction(result) {
    if (result.startsWith("error")) {
        console.log(`Error occurred: ${result}`);
    } else {
        console.log(`Response is successful. URL: ${result}`);
    }
}

fetchData("https://www.google.com", callbackFunction);