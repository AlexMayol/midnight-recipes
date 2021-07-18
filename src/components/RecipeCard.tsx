import Link from "next/link";

import { Recipe } from "@/types/recipe";
type Props = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: Props) => {
  return (
    <article className="flex flex-col space-y-4">
      <h1>{recipe.title}</h1>
      <span>{recipe.excerpt}</span>
      <Link href={`/recipe/${recipe.slug}`}>
        <a className="p-4 text-white bg-red-600 rounded-lg">See full recipe</a>
      </Link>
    </article>
  );
};
