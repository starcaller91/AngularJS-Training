insert into category (Name) values ('supe'),('glavna jela'), ('dezerti') 
insert into meal (CategoryID, name, Price) values
(1, 'Pileca supa', 320),
(2, 'Sarma', 400),
(3, 'Plazma torga', 150),
(2, 'Punjena paprika', 450)
insert into Menu (Day) values (1), (2), (3), (4), (5), (6), (0)
insert into MenuItem (Breakfast, Dinner, Lunch, MealId, MenuID) values
(1,	1,	1,	1,	1),
(1,	0,	0,	2,	6),
(0,	0,	0,	3,	2),
(0,	0,	1,	1,	2),
(1,	0,	1,	1,	3),
(1,	1,	1,	2,	7),
(1,	0,	1,	1,	4),
(0,	0,	0,	3,	1),
(1,	1,	0,	2,	4),
(0,	0,	0,	2,	1),
(0,	0,	0,	2,	2),
(0,	0,	0,	1,	5),
(0,	0,	0,	3,	5),
(0,	0,	0,	4,	3),
(0,	0,	0,	3,	3),
(0,	0,	0,	2,	5)
insert into [order] (Price, Status, TableNumber) values (855, 1, 5)
