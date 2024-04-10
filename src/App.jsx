import "./App.css";
import { RxCross2, RxPlus } from "react-icons/rx";

function App() {
  return (
    <>
      <main className="m-auto grid gap-y-9 bg-White md:my-32 md:max-w-desktop md:rounded-3xl md:p-10 md:pb-6">
        <div className="truncate md:rounded-xl">
          <img src="/images/image-omelette.jpeg" alt="food picture" />
        </div>

        <div className="grid gap-y-8 px-8 md:px-0">
          <div className="grid gap-y-6">
            <h1 className="font-Youngserif text-4xl text-DarkCharcoal md:text-[2.5rem]">
              Simple Omelette Recipe
            </h1>
            <p className="font-Outfit text-WengeBrown">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>

          <div className="grid gap-y-3 rounded-xl bg-RoseWhite px-6 py-4 font-Outfit md:px-7 md:py-5">
            <h2 className="text-xl font-OutfitBold text-DarkRaspberry">
              Preparation time
            </h2>
            <ul className="grid list-disc gap-y-1 text-WengeBrown">
              <li className="flex items-center before:px-2 before:pe-7 before:text-xl before:content-['•']">
                <p>
                  <b>Total</b>: Approximately 10 minutes
                </p>
              </li>
              <li className="flex items-center before:px-2 before:pe-7 before:text-xl before:content-['•']">
                <p>
                  <b>Preparation</b>: 5 minutes
                </p>
              </li>
              <li className="flex items-center before:px-2 before:pe-7 before:text-xl before:content-['•']">
                <p>
                  <b>Cooking</b>: 5 minutes
                </p>
              </li>
            </ul>
          </div>

          <div className="grid gap-y-5">
            <h2 className="font-Youngserif text-3xl text-[1.75rem] text-Nutmeg">
              Ingredients
            </h2>
            <ul className="grid gap-y-1 px-2 font-Outfit text-WengeBrown">
              <li className="flex items-center before:pe-7 before:text-xl before:content-['•']">
                2-3 large eggs
              </li>
              <li className="flex items-center before:pe-7 before:text-xl before:content-['•']">
                Salt, to taste
              </li>
              <li className="flex items-center before:pe-7 before:text-xl before:content-['•']">
                Pepper, to taste
              </li>
              <li className="flex items-center before:pe-7 before:text-xl before:content-['•']">
                1 tablespoon of butter or oil
              </li>
              <li className="flex items-center before:pe-7 before:text-xl before:content-['•']">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <hr className="border-LightGrey" />

          <div className="grid gap-y-5 md:gap-y-4">
            <h2 className="font-Youngserif text-3xl text-[1.75rem] text-Nutmeg">
              Instructions
            </h2>
            <ol className="grid list-decimal gap-y-2 px-6 font-Outfit text-WengeBrown marker:font-Outfit marker:font-OutfitBold marker:text-Nutmeg">
              <li className="ps-4">
                <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </li>
              <li className="ps-4">
                <b>Heat the pan</b>: Place a non-stick frying pan over medium
                heat and add butter or oil.
              </li>
              <li className="ps-4">
                <b>Cook the omelette</b>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li className="ps-4">
                <b>Add fillings (optional)</b>: When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </li>
              <li className="ps-4">
                <b>Fold and serve</b>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li className="ps-4">
                <b>Enjoy</b>: Serve hot, with additional salt and pepper if
                needed.
              </li>
            </ol>
          </div>

          <hr className="border-LightGrey" />

          <div className="grid gap-y-3">
            <h2 className="font-Youngserif text-3xl text-[1.75rem] text-Nutmeg">
              Nutrition
            </h2>
            <p className="font-Outfit text-WengeBrown">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <ul className="font-Outfit text-WengeBrown">
              <li className="grid grid-cols-2 gap-x-4 border-b border-LightGrey px-8 py-3">
                Calories
                <span className="font-OutfitBold text-Nutmeg">277kcal</span>
              </li>
              <li className="grid grid-cols-2 gap-x-4 border-b border-LightGrey px-8 py-3">
                Carbs
                <span className="font-OutfitBold text-Nutmeg">0g</span>
              </li>
              <li className="grid grid-cols-2 gap-x-4 border-b border-LightGrey px-8 py-3">
                Protein
                <span className="font-OutfitBold text-Nutmeg">20g</span>
              </li>
              <li className="grid grid-cols-2 gap-x-4 px-8 py-3">
                Fat
                <span className="font-OutfitBold text-Nutmeg">22g</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <main className="m-auto grid gap-y-9 bg-White hidden p-8 md:my-32 md:max-w-desktop md:rounded-3xl md:p-10 md:pb-6">
        <div className="flex justify-between">
          <h1 className="font-Youngserif text-4xl text-DarkCharcoal md:text-[2.5rem]">
            New/Edit Recipe
          </h1>
          <button>
            <RxCross2 className="font-OutfitBold text-Nutmeg"/>
          </button>
        </div>
        <hr className="border-LightGrey" />
        <div className="grid gap-y-5">
          <form action="#" className="grid gap-y-4 font-Outfit text-WengeBrown">
            {/* Name */}
            <div className="grid gap-y-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Name */}
            <div className="grid gap-y-2">
              <label htmlFor="recipe-name" className="text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Preparation time */}
            <div className="grid gap-y-2">
              <label htmlFor="preparation-time" className="text-sm">
                Preparation Time (minutes)
              </label>
              <input
                type="number"
                name="preparation-time"
                id="preparation-time"
                placeholder="Preparation Time"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Cooking time */}
            <div className="grid gap-y-2">
              <label htmlFor="cooking-time" className="text-sm">
                Cooking Time (minutes)
              </label>
              <input
                type="number"
                name="cooking-time"
                id="cooking-time"
                placeholder="Cooking Time"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Ingredients */}
            <div className="grid gap-y-2">
              <label htmlFor="ingredients" className="text-sm">
                Ingredient
              </label>
              <div className="flex gap-3 align-middle">
                <input
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  placeholder="Ingredient"
                  className="rounded-md border border-[lightGrey] px-4 py-1.5"
                />
                <button className="text-black aspect-square rounded-md bg-LightGrey">
                  <RxPlus className="m-auto font-OutfitBold text-Nutmeg" />
                </button>
              </div>
            </div>
            {/* Instructions */}
            <div className="grid gap-y-2">
              <label htmlFor="instructions" className="text-sm">
                Instruction
              </label>
              <div className="flex gap-3 align-middle">
                <input
                  type="text"
                  name="instruction"
                  id="instruction"
                  placeholder="Instruction"
                  className="rounded-md border border-[lightGrey] px-4 py-1.5"
                />
                <button className="text-black aspect-square rounded-md bg-LightGrey">
                  <RxPlus className="m-auto font-OutfitBold text-Nutmeg" />
                </button>
              </div>
            </div>
            {/* Carbs */}
            <div className="grid gap-y-2">
              <label htmlFor="carbs" className="text-sm">
                Carbs
              </label>
              <input
                type="number"
                name="carbs"
                id="carbs"
                placeholder="Carbs"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Protein */}
            <div className="grid gap-y-2">
              <label htmlFor="protein" className="text-sm">
                Protein
              </label>
              <input
                type="number"
                name="protein"
                id="protein"
                placeholder="Protein"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
            {/* Fat */}
            <div className="grid gap-y-2">
              <label htmlFor="fat" className="text-sm">
                Fat
              </label>
              <input
                type="number"
                name="fat"
                id="fat"
                placeholder="Fat"
                className="rounded-md border border-[lightGrey] px-4 py-1.5"
              />
            </div>
          </form>
        </div>
        <hr className="border-LightGrey" />
        <button className="text-black ml-auto flex gap-1 rounded-md bg-LightGrey px-4 py-2">
          <p className="my-auto font-Outfit text-Nutmeg">Save</p>
        </button>
      </main>
    </>
  );
}

export default App;
