// Database types - re-export from schema
export type {
  User,
  NewUser,
  Household,
  NewHousehold,
  HouseholdMember,
  NewHouseholdMember,
  Profile,
  NewProfile,
  Task,
  NewTask,
  UserPoints,
  NewUserPoints,
} from '@/db/schema'

// UI Component types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'space'
    | 'glass'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

// Form types
export interface SignInFormData {
  email: string
  password?: string
}

export interface SignUpFormData {
  name: string
  email: string
  password: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType
  description?: string
}

// Dashboard types
export interface DashboardStats {
  households: number
  activeTasks: number
  familyMembers: number
  totalPoints: number
}

export interface Activity {
  id: string
  message: string
  timestamp: Date
  userId?: string
}
