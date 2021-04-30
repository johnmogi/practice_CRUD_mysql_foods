const express = require("express");
const dishLogic = require("../logic/business-layer");
const router = express.Router();

// GET http://localhost:3000/api/dishes 
router.get("/dishes", async (request, response) => {
    try {
        const dishes = await dishLogic.getAllDishesAsync();
        response.json(dishes);
    } catch (err) {
        response.status(500).send(err.message);
    }
});
 
// GET http://localhost:3000/api/receps 
router.get("/receps", async (request, response) => {
    try {
        const receps = await dishLogic.getAllRecepsAsync();
        response.json(receps);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3000/api/dish/:id 
router.get("/dish/:id", async (request, response) => {
    const id = request.params.id
    try {
        const dish = await dishLogic.getOneDishAsync(id);
        response.json(dish);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3000/api/recep/:id 
router.get("/recep/:id", async (request, response) => {
    const id = request.params.id
    try {
        const recep = await dishLogic.getOneRecepAsync(id);
        response.json(recep);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3000/api/dishes 
router.post("/dishes", async (request, response) => {
    const data = request.body
    try {
        const dishes = await dishLogic.addOneDishAsync(data);
        response.json(dishes);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3000/api/recep 
router.post("/receps", async (request, response) => {
    const data = request.body
    try {
        const dishes = await dishLogic.addOneRecepAsync(data);
        response.json(dishes);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// // DELETE http://localhost:3000/api/dish/:id 
// router.delete("/dish/:id", async (request, response) => {
//     const id = +request.params.id
//     try {
//         const dish = await dishLogic.deleteOneDishAsync(id);
//         response.sendStatus(204);

//     } catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // PUT http://localhost:3000/api/dish/:id  
// router.put("/dish/:id", async (request, response) => {
//     try {
//     const id = +request.params.id
//     const data = request.body
//     data.dishID = id;
//     const updatedDish = await dishLogic.updateFullDishAsync(data);
//     if(updatedDish === null) {
//         response.sendStatus(404);
//         return;
//     }
//         response.json(updatedDish);
//     } catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // PATCH http://localhost:3000/api/dish/:id  
// router.patch("/dish/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         const dish = request.body;
//         dish.dishID = id;
//         const updatedDish = await dishLogic.updatePartialDishAsync(dish);
        
//         if(updatedDish === null) {
//             response.sendStatus(404);
//             return;
//         }
        
//         response.json(updatedDish);
//     }
//     catch(err) {
//         response.status(500).send(err.message);
//     }
// });
module.exports = router;