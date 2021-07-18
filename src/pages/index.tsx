import { Head, Link } from "@/Next";

import { RecipeCard } from "@/src/components/RecipeCard";

import { Recipe } from "@/types/recipe";
type Props = {
  recipes: Recipe[];
};

export default function Home({ recipes }: Props) {
  return (
    <>
      <Head>
        <title>Midnight Recipes</title>
        <meta name="description" content="Recetas para todos el día, todos los días" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl text-center text-purple-400">Midnight Recipes</h1>
        <h2>Nuestras recetas más famosas</h2>
        <section className="grid grid-cols-1 gap-4 p-4 m-4 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </section>

        <h2>¿Buscas inspiración? ¡Busca en nuestras categorías!</h2>
        <Link href="/cocktails">
          <a>Cocktails</a>
        </Link>
      </main>
    </>
  );
}

import { recipes } from "@/src/mocks/recipes";
export const getStaticProps = async () => {
  return {
    props: { recipes },
  };
};
