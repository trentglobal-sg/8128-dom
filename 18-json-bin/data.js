const BASE_API_URL="https://api.jsonbin.io/v3";
const BIN_ID = "6ac5caccffd5d1605354cad2"

async function getBin(binID) {
    const response = await axios.get(`${BASE_API_URL}/b/${binID}/latest`);
    return response.data.record;
}

async function saveBin(binID, data) {
    // for axios.post, put and patch, the second argument is
    // the data that you want to persist
    const response = await axios.put(`${BASE_API_URL}/b/${binID}`, data );
    console.log(response);
}