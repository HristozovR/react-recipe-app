import React from 'react'
import style from './recipes.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{Math.floor(calories)} Calories</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe
