# MLJ Website

The README and the website are under construction. 

## 🧑🏾‍🔧 For Maintainers
Pages in the website are controlled by the data files in `src/data` as well as files automatically downloaded such as:
- The MLJ Model Browser which is generated by downloading the `ModelDescriptors.toml` file from the MLJ repo
- The MLJ Cheat Sheet which is generated by downloading the cheatsheet readme file from the MLJ repo
- The DataScienceTutorials Navigation JSON which is downloaded from the DataScienceTutorials.jl repo
  
If you change any of these files in their respective repos, then the updates will be reflected in the site in less than six hours unless you choose to trigger the [corresponding Github actions](https://github.com/JuliaAI/MLJ/actions) manually.

For any other changes in the website that don't correspond to redesigns of the page, see the corresponding file in `src/data`:
```
.
├── Header.yaml                # Navigation Bar Data
├── ModelsPage.yaml            # Models Page Data
├── TutorialsPage.yaml         # Tutorials Page Data
├── ExternalTutorials.yaml     # For Adding Extra Tutorials
├── EcosystemPage.yaml         # Ecosystem Page Data
└── Footer.yaml                # Footer Page Data
```
For experienced frontend developers willing to contribute to the site itself, the following folders in `src` should be relevant:
```
.
├── data          
├── lib                      # components implemented here
│   ├── Common               # components used in multiple pages
│   ├── HomePage
│   ├── CheatSheetPage       # self-explanatory...
│   ├── ModelsPage
│   ├── TutorialsPage
│   ├── EcosystemPage
│   ├── Data                 # automatically generated data
│   └── app.css              # global styles
└── routes                   # SvelteKit routes
```

To test your changes you will need to have [Node.js](https://nodejs.org/en) installed then run `npm run dev`. Alternatively, making a PR should automatically deploy your changes to a temporary view of the website.
