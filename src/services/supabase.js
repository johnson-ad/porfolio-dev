import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Auth helpers
export const authService = {
  // Sign in with email/password
  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  // Sign up new user
  async signUp(email, password, metadata = {}) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    return { data, error }
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Get current session
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Get current user
  async getUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Listen to auth changes
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Projects CRUD
export const projectsService = {
  // Get all projects
  async getAll() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order_index', { ascending: true })
    return { data, error }
  },

  // Get project by ID
  async getById(id) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  // Get project by slug
  async getBySlug(slug) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()
    return { data, error }
  },

  // Create new project
  async create(project) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single()
    return { data, error }
  },

  // Update project
  async update(id, updates) {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    return { data, error }
  },

  // Delete project
  async delete(id) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    return { error }
  },

  // Upload project image
  async uploadImage(file, projectId) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${projectId}-${Date.now()}.${fileExt}`
    const filePath = `projects/${fileName}`

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (error) return { data: null, error }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    return { data: publicUrl, error: null }
  }
}

// Testimonials CRUD
export const testimonialsService = {
  // Get all testimonials
  async getAll() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Create new testimonial
  async create(testimonial) {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([testimonial])
      .select()
      .single()
    return { data, error }
  },

  // Update testimonial
  async update(id, updates) {
    const { data, error } = await supabase
      .from('testimonials')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    return { data, error }
  },

  // Delete testimonial
  async delete(id) {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)
    return { error }
  }
}

// Contact messages
export const contactService = {
  // Create new message
  async create(message) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select()
      .single()
    return { data, error }
  },

  // Get all messages
  async getAll() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Mark as read
  async markAsRead(id) {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ read: true })
      .eq('id', id)
      .select()
      .single()
    return { data, error }
  },

  // Delete message
  async delete(id) {
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id)
    return { error }
  }
}

