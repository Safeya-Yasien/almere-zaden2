import cucumber from "@assets/images/products/cucumber.webp";
import product_1_1 from "@assets/images/products/product_1_1.webp";
import eggplant from "@assets/images/products/eggplant.webp";
import product_2_2 from "@assets/images/products/product_2_2.webp";
import melon from "@assets/images/products/melon.webp";
import product_3_3 from "@assets/images/products/product_3_3.webp";
import pepper from "@assets/images/products/pepper.webp";
import product_4_4 from "@assets/images/products/product_3_3.webp";
import zucchini from "@assets/images/products/zucchini.webp";
import product_5_5 from "@assets/images/products/product_3_3.webp";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  description?: string;
}

export const products = [
  {
    id: "1",
    name: "Cucumber",
    price: 49.99,
    image: cucumber,
    hoverImage: product_1_1,
    description:
      "At Almere Zaden, we understand the vital role that high-quality seeds play in successful farming. Our dedicated cucumber seeds product line is designed to meet the diverse needs of farmers who seek to cultivate robust, flavorful cucumbers that stand out in the marketplace. Cucumbers are not only a popular crop but also a key ingredient in many culinary traditions around the world. With our meticulously selected cucumber seeds, you can ensure an abundant harvest full of crisp, refreshing cucumbers that will delight consumers and enhance your farming output. Our cucumber seeds are developed and tested to thrive in various growing conditions, offering remarkable resilience against pests and diseases. Whether you are looking for early varieties for rapid harvest or unique heirloom options that bring exceptional taste and texture, Almere Zaden provides a range of solutions to empower your agricultural success. Join us in nurturing the future of sustainable farming with our premium cucumber seeds— because at Almere Zaden, we are committed to supporting your journey from seed to harvest. Explore our selection and discover the difference that quality seeds can make for your farm today!",
  },
  {
    id: "2",
    name: "Eggplant",
    price: 59.99,
    image: eggplant,
    hoverImage: product_2_2,
    description:
      "Almere Zaden, your trusted partner in providing top-quality seeds for large-scale farming operations. Our carefully curated selection of eggplant seeds is designed to help farmers achieve optimal growth and productivity, ensuring that each season yields the best possible results. At Almere Zaden, we take pride in offering eggplant varieties that exhibit outstanding growth characteristics, robust disease resistance, and excellent adaptability to various growing conditions. Our seeds not only ensure high yields but also support sustainable farming practices, allowing you to cultivate healthier crops with fewer resources. Discover the potential of our premium eggplant seeds and enhance your farming success with Almere Zaden. Together, let’s grow a better tomorrow, one seed at a time.",
  },
  {
    id: "3",
    name: "Melon",
    price: 39.99,
    image: melon,
    hoverImage: product_3_3,
    description:
      "At Almere Zaden, we are dedicated to supplying high-quality seeds specifically designed for large-scale agricultural operations. Our melon seeds are meticulously selected for their exceptional yield potential and robust disease resistance, ensuring that your farming endeavors are both fruitful and sustainable. At Almere Zaden, we understand the unique challenges faced by modern farmers. That’s why our seeds are engineered to thrive in a variety of conditions, delivering consistent performance and resilience. Whether you're cultivating sweet cantaloupes or refreshing watermelons, our diverse selection of melon varieties is sure to meet your specific farm requirements. Elevate your farming practices with Almere Zaden’s premium melon seeds and experience the difference that quality makes in your harvest. Join us in cultivating success, one seed at a time.",
  },
  {
    id: "4",
    name: "Pepper",
    price: 39.99,
    image: pepper,
    hoverImage: product_4_4,
    description:
      "Almere Zaden devoted to equipping large-scale farmers with premium seed solutions for optimal crop yield and quality. Our diverse selection of pepper seeds includes both sweet and hot varieties, all crafted to meet the dynamic needs of modern agriculture. At Almere Zaden, we understand that successful farming hinges on utilizing high-quality seeds that deliver performance and reliability. Our pepper seeds are carefully selected for their superior germination rates, vigorous growth, and robust disease resistance. This ensures that your pepper crops thrive in various conditions while maximizing productivity throughout the growing season. Join us on the journey towards agricultural excellence with Almere Zaden's premium pepper seeds. Cultivate a successful harvest and bring the vibrant flavors of your crops to market with confidence, one seed at a time.",
  },
  {
    id: "5",
    name: "Zucchini",
    price: 39.99,
    image: zucchini,
    hoverImage: product_5_5,
    description:
      "where we are committed to providing top-tier seed solutions tailored for large-scale agricultural success. Our zucchini seeds are expertly selected to deliver exceptional yield potential and remarkable resilience, ensuring that your farming operations are not only productive but also sustainable. At Almere Zaden, we understand the importance of reliable seed quality in today’s competitive market. Our diverse range of zucchini varieties have been cultivated to thrive in various conditions, offering resistance to common pests and diseases, which ultimately empowers farmers to maximize their harvest potential. Transform your farming experience and achieve outstanding results with our premium zucchini seeds. Partner with Almere Zaden as we work together to cultivate a prosperous future, one seed at a time.",
  },
];
