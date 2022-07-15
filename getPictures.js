const axios = require('axios');
const BASE_URL1 = `https://wmp512t973.user-space.cdn.idcfcloud.net/catalog/20220701/pic/20220701-01-`;
const BASE_URL2 = `-1.jpg`;
const fs = require('fs');
const path = './picture/selectionsale2022/'

const main = async () => {
    for (let i = 1; i < 312; i++) {
        let url = BASE_URL1 + String(i).padStart(4,'0') + BASE_URL2
        try {
            let res = await axios.get(url, {responseType: 'arraybuffer'});
            fs.writeFileSync(path + String(i).padStart(4,'0') + ".jpg", new Buffer.from(res.data), 'binary');
            console.log(String(i).padStart(3,'0'));
        } catch (e) {
            console.log(String(i).padStart(3,'0') + e.response.status);
        }
    }
};

main();