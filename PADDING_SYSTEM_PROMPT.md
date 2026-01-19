# Padding System Prompt

Use a consistent padding system based on distance from sides, not max-width constraints:

**Padding Rules:**
- Mobile (default): `px-4` (16px padding from sides)
- All other devices (sm breakpoint and above): `sm:px-5` (20px padding from sides)

**Implementation:**
1. Remove all `max-w-[...] mx-auto` constraints from containers
2. Apply padding directly to sections/containers: `px-4 sm:px-5`
3. Use `w-full` instead of max-width on inner containers
4. Apply to: header, hero, all content sections, footer, admin panels, modals

**Example:**
```tsx
// Before (max-width approach)
<div className="max-w-[1400px] mx-auto">
  <section className="px-4 md:px-8">...</section>
</div>

// After (padding-based approach)
<section className="px-4 sm:px-5">...</section>
```

**Key Points:**
- Content width is controlled by padding from screen edges, not container max-width
- Same padding (20px) for all non-mobile devices (tablet, desktop, large screens)
- Mobile gets 16px padding for better space utilization
- No need for responsive padding variations beyond mobile vs. everything else

Apply this padding system (`px-4 sm:px-5`) to all sections, headers, footers, and containers throughout the project.
