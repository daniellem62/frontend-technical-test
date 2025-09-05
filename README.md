# Frontend Technical Test

Our client has been using this project in production. They recently requested a new feature.

When they tried to run the project, it failed to start. They’re unsure what changed and need it fixed so the app runs correctly before the new feature can be added.

Your task is to get the project running and implement the requested feature.

## Feature requirements

- The user should type a **letter** into a textbox.
- The app should generate a project code name in the format: **“Adjective Pokémon”**.
- Both the adjective and the Pokémon name should start with the same letter.
  - Examples:
    - `H` → “Hungry Haunter” or “Happy Horsea”
    - `B` → “Bouncing Bulbasaur” or “Bright Bulbasaur”
- Pokémon details, including their **sprite (image)** and **stats**, should be fetched dynamically from the [PokeAPI](https://pokeapi.co/).
- The client would like the **image of the Pokémon aligned next to its stats and centered**, so both are displayed clearly together.
- Add unit tests that verify the new feature works as intended.

## General Advice

- If anything is unclear in the brief, please ask clarifying questions. It's important that you're clear and explicit about any assumptions that you're making.
- Over-communicate. Even if you don't think your solution is fully complete, talk us through what your thought process is.

## Helpful Links

- [PokeAPI Documentation](https://pokeapi.co/docsv2/)