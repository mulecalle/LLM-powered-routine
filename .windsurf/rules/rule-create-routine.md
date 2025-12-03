---
trigger: manual
description: 
globs: 
---

To establish a new set of monthly gym routines with correct file structure, navigation updates, and homepage integration.

1. 📂 File and Folder Structure Creation. These steps define the required file and folder layout and the necessary configuration updates.

1.1 - Define Month Variable:
* Determine the target month.
* Set the variable $MONTH_KEY to the first three lowercase letters of the month (e.g., dec for December).
* Set the variable $MONTH_TITLE to the full capitalized name of the month (e.g., December).

1.2 - Create Content Folder:
* Create a new directory: month/$MONTH_KEY
* Create Routine Files: Copy from the previous month each of the markdown files: d1.md, d2.md, and d3.md

1.3 - Update Navigation (.vitepress/config.mts):
* Locate the sidebar array.
* Crucially, add the new month object as the FIRST element of the sidebar array.
*The structure of the new object MUST be:
```
{
    text: '$MONTH_TITLE', // Use full month name
    items: [
        { text: 'Day 1 - PECHO Y BICEPS', link: '/month/$MONTH_KEY/d1' },
        { text: 'Day 2 - PIERNAS Y HOMBROS', link: '/month/$MONTH_KEY/d2' },
        { text: 'Day 3 - ESPALDA Y TRICEPS', link: '/month/$MONTH_KEY/d3' },
    ]
}
```

1.4 - Update Homepage Actions (index.md):
* Locate the actions array (VitePress feature array).
* Crucially, add the new month object as the FIRST element of the actions array.
* The structure of the new object MUST be:
```
- theme: brand
  text: $MONTH_TITLE
  link: /month/$MONTH_KEY/d1
```

1.5 - Style Previous Month's Action:
* Locate the action object that was previously the first in the list (the routine for the past month).
* Change its theme value from brand to alt.
* Constraint: Only the newest month (the first element in actions) should have theme: brand.