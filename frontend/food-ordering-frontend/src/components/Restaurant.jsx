
import RestaurantCard from './RestaurantCard';

function Restaurant() {
    const restaurants = [
        {
            id: 1,
            name: "Paradise Biryani",
            cuisine: "Biryani and Indian food",
            price: 250,
            image: "/images/biryani3.jpg"
        },
        {
            id: 2,
            name: "Pizza Palace",
            cuisine: "Pizza and Italian food",
            price: 199,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
        },
        {
            id: 3,
            name: "Burger House",
            cuisine: "Burgers and Fast Food",
            price: 120,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
        },
        {
            id: 4,
            name: "South Spice",
            cuisine: "South Indian",
            price: 100,
            image: "/images/biryani.jpg"
        }
    ];

    return (
        <div className="restaurant-container">
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    image={restaurant.image}
                    cuisine={restaurant.cuisine}
                    price={restaurant.price}
                />
            ))}
        </div>
    );
}

export default Restaurant;
