export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          created_at: string | null
          description: string | null
          entity_id: string | null
          entity_type: string | null
          id: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_recommendations: {
        Row: {
          action_data: Json | null
          action_type: string
          created_at: string | null
          description: string
          dismissed: boolean | null
          id: string
          impact: string | null
          implemented: boolean | null
          title: string
          user_id: string
        }
        Insert: {
          action_data?: Json | null
          action_type: string
          created_at?: string | null
          description: string
          dismissed?: boolean | null
          id?: string
          impact?: string | null
          implemented?: boolean | null
          title: string
          user_id: string
        }
        Update: {
          action_data?: Json | null
          action_type?: string
          created_at?: string | null
          description?: string
          dismissed?: boolean | null
          id?: string
          impact?: string | null
          implemented?: boolean | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          budget: number | null
          clicks: number | null
          conversions: number | null
          created_at: string | null
          end_date: string | null
          id: string
          impressions: number | null
          name: string
          platform: string | null
          spent: number | null
          start_date: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          budget?: number | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          impressions?: number | null
          name: string
          platform?: string | null
          spent?: number | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          budget?: number | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          impressions?: number | null
          name?: string
          platform?: string | null
          spent?: number | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      dashboard_metrics: {
        Row: {
          conversion_change: number | null
          conversion_rate: number | null
          created_at: string | null
          id: string
          leads_change: number | null
          period_end: string
          period_start: string
          revenue: number | null
          revenue_change: number | null
          roi: number | null
          roi_change: number | null
          total_leads: number | null
          user_id: string
        }
        Insert: {
          conversion_change?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          leads_change?: number | null
          period_end: string
          period_start: string
          revenue?: number | null
          revenue_change?: number | null
          roi?: number | null
          roi_change?: number | null
          total_leads?: number | null
          user_id: string
        }
        Update: {
          conversion_change?: number | null
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          leads_change?: number | null
          period_end?: string
          period_start?: string
          revenue?: number | null
          revenue_change?: number | null
          roi?: number | null
          roi_change?: number | null
          total_leads?: number | null
          user_id?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          campaign_id: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          potential_value: number | null
          source: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          potential_value?: number | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          campaign_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          potential_value?: number | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_name: string | null
          created_at: string | null
          first_name: string | null
          id: string
          industry: string | null
          last_login: string | null
          last_name: string | null
          onboarding_completed: boolean | null
          plan_type: string | null
          updated_at: string | null
        }
        Insert: {
          company_name?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          industry?: string | null
          last_login?: string | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          plan_type?: string | null
          updated_at?: string | null
        }
        Update: {
          company_name?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          industry?: string | null
          last_login?: string | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          plan_type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
