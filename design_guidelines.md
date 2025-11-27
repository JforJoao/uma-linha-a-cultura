# Design Guidelines: VR Brazilian Music Experience Landing Page

## Design Approach

**Selected Approach**: Reference-based with Spotify's immersive music presentation + Apple Vision Pro's spatial computing aesthetics

**Design Principles**:
- Cinematic minimalism with bold contrasts
- Nostalgic meets futuristic - vintage Brazilian music culture through VR lens
- The white horizontal line as a narrative thread connecting decades

## Core Design Elements

### Typography
- **Headline Font**: Inter or Montserrat (700-900 weight) for modern VR tech feel
- **Body Font**: Inter or Work Sans (400-500 weight) for readability
- **Accent Font**: Bebas Neue or Oswald for decade markers and dramatic emphasis
- **Sizes**: Hero h1 (text-6xl to text-8xl), Section titles (text-4xl to text-5xl), Body (text-lg), Timeline markers (text-2xl)

### Layout System
**Spacing**: Tailwind units of 4, 8, 12, 16, 24 (p-4, h-8, my-12, py-16, gap-24)
- Generous vertical breathing room between sections (py-16 to py-24)
- Asymmetric layouts to break monotony
- Full-width hero with contained content sections (max-w-7xl)

### Component Library

**Hero Section**:
- Full viewport height with large hero image of vintage vinyl records/VR headset fusion
- Dramatic headline: "Reviva 60 Anos de Música Brasileira em Realidade Virtual"
- White horizontal line positioned at 40% height, spanning full width as visual anchor
- CTA buttons with blur backgrounds overlaid on image

**Timeline Component** (Centerpiece):
- Horizontal scrollable timeline from 1930s-1990s
- White line serves as the timeline baseline
- Decade markers above line with iconic artist photos below
- Interactive hover reveals artist names and signature songs
- Grid layout on mobile (vertical stack)

**Music Genres Section**:
- 2-column layout (lg:grid-cols-2) showcasing genre cards
- Each card: Genre name, era badge, representative artists
- Vinyl record imagery as background textures

**Audio Player Module**:
- Fixed bottom player (sticky) with waveform visualization
- Decade selector tabs
- Featured track carousel with album art

**Experience Gallery**:
- 3-column masonry grid (lg:grid-cols-3) of VR experience screenshots
- Mix of historical performance footage + VR interface overlays

**CTA Section**:
- Split layout: left side form, right side "What You'll Experience" list
- White line as subtle divider

**Footer**:
- Minimal with social links, newsletter signup
- Credits to music legends featured

### Images

**Hero Image**: VR headset overlaid on vintage Brazilian album covers collage - cinematic, high-contrast
**Timeline**: Small circular photos of Carmen Miranda, Tom Jobim, Elis Regina, Gilberto Gil, Caetano Veloso, etc.
**Gallery**: 6-9 images showing VR interface mockups of concert halls, recording studios, carnival scenes from different eras
**Genre Cards**: Subtle background images of instruments (guitar, cuica, berimbau, drums)

### Animations
- Minimal, purposeful only
- Timeline: Smooth horizontal scroll snap
- Hero: Subtle parallax on scroll (image moves slower than content)
- White line: Gentle pulse/glow effect on load
- Audio player: Waveform animation when playing

### Accessibility
- High contrast maintained (white text on black, careful with grays)
- Focus states clearly visible with white outlines
- Timeline keyboard navigable
- Audio controls WCAG compliant

### Unique Design Elements
- **The White Line**: Not just decorative - functions as timeline spine, section divider, and visual rhythm throughout page
- **Decade Color Accents**: Subtle warm sepia/gold tints for vintage decades (30s-60s), vibrant accents for modern eras (70s-90s) - applied sparingly to maintain black base
- **Vinyl Record Motif**: Circular elements, grooved textures as subtle overlays

**Page Structure** (7 sections):
1. Hero with VR/music fusion imagery
2. Value proposition (3-column feature cards)
3. Interactive timeline (horizontal scroll)
4. Genre showcase (2-column grid)
5. Experience gallery (masonry)
6. Audio preview player
7. Sign-up CTA + Footer