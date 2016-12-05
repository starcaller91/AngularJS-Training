export class Menu {
    day: number;
    id: number;
    items: MenuItem[];
}

export class MenuItem {
    breakfast: boolean;
    dinner: boolean;
    lunch: boolean;
    meal: Meal;
    id: number;
}

export class Meal {
    category: Category;
    id: number;
    name: string;
    price: number;
}

export class Category {
    id: number;
    name: string;
}

export class Table {
    id: number;
    order: Order;
    hover: boolean = false;
}

export class Order {
    id: number;
    items: OrderItem;
    price: number;
    tableNumber: number;
    status: number;
}

export class OrderItem {
    id: number;
    meal: Meal;
    quantity: number;
}