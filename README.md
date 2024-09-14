# Github-Finder Project:

-  It's a react project to find and show Github profile of users.

## Made this React Project Using Vite + Tailwind + DaisyUI:

### Available Scripts

#### `npm run dev`

-  Runs the app in the development mode.

#### `npm run build`

-  Builds the app for Production

## Flow Of Creation of GithubFinder App:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '18px', 'fontFamily': 'Algerian' , 'primaryBorderColor': 'blue' , 'background' : 'purple', 'mainBkg': 'pink'}}}%%
flowchart TD
   1[\Project Starting/]
   -.-> 2[Added Dependencies - Tailwind Css, DaisyUi ]
   -.-> 3[Navbar Component]
   -.-> 4[Footer Component]
   -.-> 5
    5(Routes and Pages Creation) --> B
    B{{User List Component - where our output of request will be }}
    B --> C{{Display users }}
     --> D( Setup GIthubContext)
     --> E(Reducers and usereducers hook )
     --> F{{User sEarch component complete with Clear Button working }}
     --> G[AlertContext and Alert Provider ]
     --> M( )
     --> N( )
     --> O( )
     --> P( )
     --> Q( )

```
