topic:

dishes spa

Foods db

Dish table:
dishID (pk)
dishName

Recepies table:
recepID
dishID
recepUploaderName
recepName
ingredients


INSERT INTO dish (dishID, dishName) VALUES (NULL, 'Taco');

INSERT INTO recepies (recepID, dishID, recepUploaderName, recepName, ingredients, preperationDetails) VALUES (NULL, '1', 'John Mogi', 'Taco Fried Rice', 'rice, tako, the works', 'you make the rice, cook the Taco and bob\'s your uncle.');


SELECT * FROM recipes WHERE dishID = 1

