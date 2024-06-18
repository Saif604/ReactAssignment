
This Project is created using React.
Idea:
1. Stored all filters and components in ./src/utils/features.jsx, it is done so that at every page I can send related data.
2. Three main component is of this project is App.jsx, Filter.jsx and Form.jsx
3. From App.jsx data is drilled to required component and any changes made on those components is updated simultaneously.
4. In Filter.jsx data is extracted from features.jsx and filter section is created.
5. Form.jsx contains different input types, so to achieve that FilterPage.jsx is created and current filter is passed into it.
6. FitlerPage.jsx import different components from ./src/components/ and imbedded in FilterPage.
7. Styled component is used to achieve required layout in a particular page.
8. index.css is used for global styling.