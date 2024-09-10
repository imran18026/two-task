import OutputComponent from "./OutputComponent";

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const AlphabetTileInteraction = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Alphabet Tile Interaction
      </h1>
      <OutputComponent />
    </div>
  );
};

export default AlphabetTileInteraction;
