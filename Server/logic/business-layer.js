const dal = require("../data/access-layer");
async function getAllDishesAsync() {
    const sql = "SELECT * FROM dishes";
    const dishes = await dal.executeAsync(sql);
    return dishes;
}

async function getAllRecepsAsync() {
    const sql = "SELECT * FROM recipes";
    const receps = await dal.executeAsync(sql);
    return receps;
}

async function getOneDishAsync(id) {
    const sql = `SELECT * FROM dishes WHERE dishID = ${id}`;
    const dishes = await dal.executeAsync(sql);
    return dishes;
}
async function getOneRecepAsync(id) {
    const sql = `SELECT * FROM recipes WHERE recepID = ${id}`;
    const receps = await dal.executeAsync(sql);
    return receps;
}
async function addOneDishAsync(data) {
    const sql = ` INSERT INTO dishes (dishName) VALUES ( '${data.dishName}')`;
    const dishes = await dal.executeAsync(sql);
    return dishes;
}

async function addOneRecepAsync(data) {
    const sql = `INSERT INTO recipes ( dishID , recepUploaderName, recepName, ingredients, preperationDetails) 
    VALUES ( ${data.dishID} , '${data.recepUploaderName}' , '${data.recepName}' , '${data.ingredients}' , '${data.preperationDetails}')`;
    const dishes = await dal.executeAsync(sql);
    return dishes;
}

// async function deleteOneDishAsync(id) {
//     const sql = `DELETE FROM dishes WHERE disheID = ${id}`;
//     const dishe = await dal.executeAsync(sql);
//     return dishe;
// }

// async function updateFullDishAsync(data) {
//     const sql = `UPDATE dishes SET disheName = '${data.disheName}', disheAddress = '${data.disheAddress}', dishePhone = '${data.dishePhone}', disheMail = '${data.disheMail}' WHERE disheID = ${data.disheID}`;
//     const info = await dal.executeAsync(sql);
//     return info.affectedRows === 0 ? null : data;
// }

// async function updatePartialDishAsync(dishe) {

//     let sql = "UPDATE dishes SET ";

//     if(dishe.disheName) {
//         sql += `disheName = '${dishe.disheName}',`
//     }
//     if(dishe.disheAddress) {
//         sql += `disheAddress = '${dishe.disheAddress}',`
//     }
//     if(dishe.dishePhone) {
//         sql += `UnitsInStock = '${dishe.dishePhone}',`
//     }

//     // Delete last comma:
//     sql = sql.substr(0, sql.length - 1);

//     sql += ` WHERE disheID = ${dishe.disheID}`;

//     const info = await dal.executeAsync(sql);
//     return info.affectedRows === 0 ? null : dishe;
// }

module.exports = {
    getAllDishesAsync, getAllRecepsAsync, getOneDishAsync, getOneRecepAsync,
    addOneDishAsync, addOneRecepAsync
    //  deleteOneDishAsync,
    // updateFullDishAsync, updatePartialDishAsync
}