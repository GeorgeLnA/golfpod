# Admin Panel Creation Prompt

Create a fully functional admin panel with the following specifications:

## Core Requirements

1. **Password Protection**
   - Simple password-based authentication (store password as constant, use sessionStorage)
   - Login screen with password input
   - Session persistence using sessionStorage
   - Logout functionality that clears session

2. **Database Integration**
   - Connect to Supabase
   - Create a table for form submissions (e.g., `project_leads` or `contact_submissions`)
   - Table should have: id (UUID), name, email, phone (optional), company_name (optional), created_at (timestamp)
   - Disable Row Level Security (RLS) for public form submissions

3. **CRUD Operations**
   - **View**: Display all submissions in a clean list/table
   - **Edit**: Modal dialog to edit any submission
   - **Delete**: Delete submissions with confirmation dialog
   - Auto-refresh after edit/delete operations

4. **Mobile Optimization**
   - Mobile-first design approach
   - On mobile: Use card-based layout (compact, no unnecessary line breaks)
   - On desktop: Use table layout
   - Responsive typography (smaller on mobile, larger on desktop)
   - Touch-friendly buttons (minimum 44px height)
   - Proper text wrapping for long content
   - Compact header with buttons side-by-side

5. **Design Guidelines**
   - Match website's design system (colors, fonts, spacing)
   - Use white cards on colored background for contrast
   - Clean, minimal spacing - avoid excessive line breaks
   - Consistent button styling
   - Proper hover states and transitions

6. **Form Integration**
   - Connect all "REQUEST" buttons to open a form modal
   - Form fields: Company Name (required), Name (required), Email (required), Phone (optional)
   - Submit to Supabase table
   - Show thank you message after successful submission
   - Auto-close form after 3 seconds
   - Reset form on close

7. **Routing**
   - Add admin route (e.g., `/admin`)
   - Configure Netlify/vercel for SPA routing (redirect all routes to index.html except API routes)
   - Add admin link in footer

8. **Technical Setup**
   - Install `@supabase/supabase-js`
   - Create `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   - Create Supabase client in `lib/supabase.ts`
   - Update `pnpm-lock.yaml` after adding dependencies
   - Use React Router for navigation

## Implementation Checklist

- [ ] Create admin page component
- [ ] Add password protection with sessionStorage
- [ ] Create Supabase table with proper schema
- [ ] Implement fetch/display submissions
- [ ] Add edit functionality (modal dialog)
- [ ] Add delete functionality (with confirmation)
- [ ] Optimize for mobile (card layout)
- [ ] Optimize for desktop (table layout)
- [ ] Connect form submissions to Supabase
- [ ] Add thank you message after form submission
- [ ] Add admin route to router
- [ ] Add admin link in footer
- [ ] Configure deployment platform for SPA routing
- [ ] Test on mobile and desktop

## Key Code Patterns

**Password Protection:**
```typescript
const ADMIN_PASSWORD = "yourpassword";
const [isAuthenticated, setIsAuthenticated] = useState(false);

// Check sessionStorage on mount
useEffect(() => {
  const authStatus = sessionStorage.getItem("admin_authenticated");
  if (authStatus === "true") {
    setIsAuthenticated(true);
    fetchData();
  }
}, []);

// Login handler
const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  if (password === ADMIN_PASSWORD) {
    setIsAuthenticated(true);
    sessionStorage.setItem("admin_authenticated", "true");
    fetchData();
  }
};
```

**Supabase Operations:**
```typescript
// Fetch
const { data, error } = await supabase
  .from('table_name')
  .select('*')
  .order('created_at', { ascending: false });

// Insert
const { data, error } = await supabase
  .from('table_name')
  .insert({ field: value })
  .select();

// Update
const { error } = await supabase
  .from('table_name')
  .update({ field: newValue })
  .eq('id', id);

// Delete
const { error } = await supabase
  .from('table_name')
  .delete()
  .eq('id', id);
```

**Mobile-First Layout:**
- Use `md:hidden` for mobile-only views
- Use `hidden md:block` for desktop-only views
- Keep spacing tight on mobile (`space-y-3` not `space-y-6`)
- Use compact padding (`p-4` not `p-6` on mobile)
- Single column layout on mobile
- Side-by-side buttons in header

**Form Success State:**
```typescript
const [formSubmitted, setFormSubmitted] = useState(false);

// After successful submit
setFormSubmitted(true);
setTimeout(() => {
  setFormOpen(false);
  setFormSubmitted(false);
}, 3000);
```

## Netlify Configuration

Add to `netlify.toml`:
```toml
[[redirects]]
  force = true
  from = "/api/*"
  status = 200
  to = "/.netlify/functions/api/:splat"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

## Important Notes

- Always run `pnpm install` after adding dependencies and commit `pnpm-lock.yaml`
- Keep mobile cards compact - avoid excessive spacing and line breaks
- Use white backgrounds for cards on colored backgrounds for better contrast
- Make buttons touch-friendly (minimum 44px height on mobile)
- Test form submission flow end-to-end
- Ensure proper error handling for all Supabase operations
