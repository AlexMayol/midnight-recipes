import { Link, Head, Image } from "@/Next";
import { Recipe as IRecipe } from "@/types/recipe";
import { Metadata } from "@/components/Metadata";

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  const { content, excerpt, image, slug, title } = recipe;

  return (
    <>
      <Head>
        <title>{title}</title>
        <Metadata title={title} description={excerpt} image={image} url={`${process.env.SITE_NAME}/recipe/${slug}`} />
      </Head>
      <section className="p-4 bg-gray-100">
        <Image src={image} alt="" width={200} height={200} />
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>

      <p>
        <Link href="/">
          <a className="p-4 text-white bg-red-600 rounded-lg">Home</a>
        </Link>
      </p>
    </>
  );
};
export default Recipe;

import { recipes } from "@/src/mocks/recipes";
import { GetStaticProps, GetStaticPropsContext } from "next";
export async function getStaticPaths() {
  const paths = recipes.map((recipe) => ({
    params: {
      slug: recipe.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      recipe: recipes.find((recipe) => recipe.slug === params!.slug),
    },
  };
};
