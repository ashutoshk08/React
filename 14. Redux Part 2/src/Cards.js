import FoodItem from "./FootItem";

const foodItems = [
  {
    id: 1,
    food: "Pizza",
    price: 250,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 2,
    food: "Pasta",
    price: 100,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 3,
    food: "Chole Bhature",
    price: 150,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 4,
    food: "Dosa",
    price: 100,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 5,
    food: "Bhel Puri",
    price: 50,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 6,
    food: "Dal Makhni",
    price: 150,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 7,
    food: "Idli",
    price: 80,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 8,
    food: "Misal Pav",
    price: 50,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 9,
    food: "Vadapav",
    price: 50,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
  {
    id: 10,
    food: "Rajma Chawal",
    price: 50,
    image:
      "https://hogr.app/blog/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
  },
];

export default function Cards() {
  return (
    <div className="card-container">
      {foodItems.map((value) => {
        return <FoodItem {...value} />;
      })}
    </div>
  );
}
