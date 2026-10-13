# Archived Experience Section

This component was archived from the live portfolio. Follow the instructions below to restore it.

## How to Restore

1. **Move component back (optional):**
   You can move `experience.tsx` back to `components/experience.tsx`:
   ```bash
   mv src/archive/experience/experience.tsx components/experience.tsx
   ```
   Or import it directly from this archive folder.

2. **Add import and element in `app/page.tsx`:**
   ```tsx
   import { Experience } from '@/components/experience' // or '@/src/archive/experience/experience'
   ```
   Insert `<Experience />` into `<main>` where desired:
   ```tsx
   <main>
     <Hero />
     <Experience />
     ...
   </main>
   ```

3. **Restore navigation item in `components/site-nav.tsx`:**
   Add `{ id: 'experience', label: 'Experience' }` into the `SECTIONS` array:
   ```ts
   const SECTIONS = [
     { id: 'home', label: 'Home' },
     { id: 'experience', label: 'Experience' },
     // ...
   ]
   ```
