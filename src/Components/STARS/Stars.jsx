// 1. Import Stars Icon which you can use in your component: import { FaStar } from 'react-icons/fa';
// 2.Pass number of stars in your component.
// 3. Create state for Rating and hover.: const [rating, setRating] = useState(0);
// const [hover, setHover] = useState(0);
// The rating state keeps track of the selected rating.
// The hover state tracks the star currently being hovered over.
// 4. Apply array map mMethod[...Array(noOfStars)].map((_, index) => ...). This code snippet is using JavaScript’s array manipulation methods. Also, Apply conmdition to change the color from white to yellow in case of hover or raqting color={index < (hover || rating) ? '#ffc107' : '#e4e5e9'}
//5. Apply  onClick={() => handleStarClick(index)} onMouseEnter={() => handleStarHover(index)} onMouseLeave={handleMouseLeave} // Handle mouse leave
