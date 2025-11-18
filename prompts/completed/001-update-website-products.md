<objective>
Update the Chouinard Woodworks website with new products, reordered product grid, updated pricing, and text changes as requested by Julie (CMO and wife of the craftsman).
</objective>

<context>
This is a static website for Chouinard Woodworks built with HTML and Tailwind CSS. All content is in `index.html`. The site features a minimalist, masculine, and earthy design aesthetic with custom color palette (night, lion, dim-gray, etc.).

Review the CLAUDE.md file for project conventions and styling guidelines.

New product images have already been added to the `/images/` directory:
- book-holder-111825.png
- spaghetti-measuring-tool-111825.png
- bottle-openers-111825.jpg
- cutting-boards-with-leaves-111825.png (for charcuterie board update)
</context>

<requirements>
Make the following changes to `index.html`:

1. **Add Three New Products to Trending Products Section**
   Add these three new product cards to the grid:

   - **Book Holders**
     - Image: `./images/book-holder-111825.png`
     - Title: "Book Holders"
     - Description: "Perfect for your favorite reading nook to keep your place and your readers handy"
     - Price: "$40"

   - **Spaghetti Measuring Tool**
     - Image: `./images/spaghetti-measuring-tool-111825.png`
     - Title: "Spaghetti Measuring Tool"
     - Description: "A beautiful and practical kitchen essential with four portion-sized holes"
     - Price: "$20"

   - **Bottle Openers**
     - Image: `./images/bottle-openers-111825.jpg`
     - Title: "Bottle Openers"
     - Description: "Includes built-in magnet to store handsomely on your fridge, grill, or cooler"
     - Price: "$20"

2. **Reorder All Trending Products**
   The complete grid should display products in this exact order (3 columns × 3 rows):

   Row 1: Charcuterie Boards, Wine Bottle Display, Coasters
   Row 2: Book Holders, Cutting Boards, Herb Strippers
   Row 3: Spaghetti Measuring Tool, Bottle Openers, Custom Step Stools

3. **Update Charcuterie Boards Product**
   - Replace the current image with: `./images/cutting-boards-with-leaves-111825.png`
   - Update price from "$20-$65" to "$60-$80"
   - Keep the existing title and description unchanged

4. **Update FIND US Section**
   In the "Local Craft Fairs" list item (around line 165-167):
   - Change: "Check our events calendar for upcoming shows"
   - To: "Check our Instagram for upcoming shows @chouinardwoodworks"

5. **Update Footer Copyright Year**
   Change the copyright year from "2024" to "2025" (around line 303)
</requirements>

<implementation>
- Maintain the existing HTML structure and Tailwind CSS classes for consistency
- Each product card should follow the same pattern as existing products (same div structure, aspect ratios, classes)
- Ensure all image paths use the `./images/` prefix
- Preserve all existing styling, hover effects, and responsive design classes
- Keep the color scheme consistent (lion for prices, dim-gray for descriptions, etc.)
</implementation>

<output>
Modify the existing file:
- `./index.html` - Update with all product changes, reordering, and text updates
</output>

<verification>
Before completing, verify:
1. All 9 products appear in the Trending Products grid in the correct order
2. New product images load correctly with proper aspect ratios (3:4)
3. All prices, titles, and descriptions match the requirements exactly
4. FIND US section references Instagram (@chouinardwoodworks) instead of events calendar
5. Footer shows "© 2025 Chouinard Woodworks"
6. All existing Tailwind classes and styling remain intact
7. No HTML structure or layout is broken
</verification>

<success_criteria>
- Trending Products section displays exactly 9 products in the specified order
- Three new products (Book Holders, Spaghetti Measuring Tool, Bottle Openers) are added with correct images, descriptions, and prices
- Charcuterie Boards shows the new image and updated price ($60-$80)
- FIND US section mentions Instagram for upcoming shows
- Footer copyright reads 2025
- Website maintains its existing visual design and responsiveness
</success_criteria>
