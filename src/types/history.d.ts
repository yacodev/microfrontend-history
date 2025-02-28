declare module 'host/pokemonStore' {
  interface Store {
    selectedPokemon: Pokemon | null;
    listSelectedPokemon: Pokemon[];
    setSelectedPokemon: (pokemon: Pokemon) => void;
    setListSelectedPokemon: (pokemon: Pokemon) => void;
  }

  const usePokemonStore: {
    (): Store;
    <T>(selector: (state: Store) => T): T;
  };

  export default useUserStore;
}
