const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Function to perform an HTTP GET request using Axios and retrieve the HTML content of a webpage.
 *
 * @param {string} url - The URL of the webpage.
 * @param {string} id - The ID of the HTML element to retrieve.
 * @returns {Promise<string>} A promise that resolves with the content of the HTML element with the specified ID.
 */
async function getId(url, id) {
    try {
        const response = await axios.get(url);
        const htmlContent = response.data;
        const element = document.createElement('div');
        element.innerHTML = htmlContent;
        const elementWithId = element.querySelector(`#${id}`);
        if (elementWithId) {
            return elementWithId.innerHTML;
        } else {
            throw new Error(`HTML element with ID '${id}' not found.`);
        }
    } catch (error) {
        throw new Error(`Error retrieving HTML content: ${error.message}`);
    }
}

function changeId(url, newId) {
    return axios.get(url)
        .then(response => {
            const object = response.data;
 
            object.id = newId;
 
            // Make a request
            return axios.put(url, object)
                .then(response => {
                    // update object
                    return response.data;
                });
        })
        .catch(error => {
            // Handles
            throw new Error(`Failed to change ID: ${error.message}`);
        });
};

//scrape data with cheerio
async function makeGetRequest(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error making GET request: ${error.message}`);
    }
}

function scrapeData(html, selector) {
    const $ = cheerio.load(html);
    const scrapedData = [];
 
    $(selector).each((index, element) => {
        const data = $(element).text();
        scrapedData.push(data);
    });
 
    return scrapedData;
}

module.exports = {
	getId,
	changeId,
	makeGetRequest,
	scrapeData
};