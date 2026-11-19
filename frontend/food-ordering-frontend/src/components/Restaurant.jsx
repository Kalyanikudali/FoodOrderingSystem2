import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { API_BASE_URL } from '../config';

const defaultRestaurants = [
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

function Restaurant() {
    const [restaurants, setRestaurants] = useState(defaultRestaurants);

    useEffect(() => {
        fetch(`${API_BASE_URL}/restaurants/getall`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const mapped = data.map((r, idx) => ({
                        id: r.restaurantId || idx + 1,
                        name: r.name,
                        cuisine: r.location ? `${r.location} • Restaurant` : 'Multi-Cuisine',
                        price: 150,
                        image: defaultRestaurants[idx % defaultRestaurants.length].image
                    }));
                    setRestaurants(mapped);
                }
            })
            .catch(() => {
                // Keep default restaurants on network error
            });
    }, []);

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
