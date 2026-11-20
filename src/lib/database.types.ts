// ============================================================
// AGS Supabase Database Type Definitions
// Auto-generated shape — matches scripts/init-supabase.sql
// If you add new tables/columns, update this file accordingly.
// For full type generation: npx supabase gen types typescript
// ============================================================

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      web_inquiries: {
        Row: {
          id:                 number;
          name:               string;
          email:              string;
          phone:              string | null;
          nationality:        string | null;
          destination:        string | null;
          preferred_regions:  string[] | null;
          group_size:         string | null;
          group_dynamics:     Json | null;
          travel_date:        string | null;
          hotel_tier:         string | null;
          handicap:           string | null;
          message:            string | null;
          source_url:         string | null;
          inquiry_type:       'quote' | 'guide' | 'general' | 'tournament';
          privacy_consent:    boolean;
          marketing_consent:  boolean;
          policy_version:     string;
          consent_timestamp:  string;
          ip_hash:            string | null;
          lead_score:         number | null;
          created_at:         string;
          updated_at:         string;
        };
        Insert: {
          name:               string;
          email:              string;
          phone?:             string | null;
          nationality?:       string | null;
          destination?:       string | null;
          preferred_regions?: string[] | null;
          group_size?:        string | null;
          group_dynamics?:    Json | null;
          travel_date?:       string | null;
          hotel_tier?:        string | null;
          handicap?:          string | null;
          message?:           string | null;
          source_url?:        string | null;
          inquiry_type?:      'quote' | 'guide' | 'general' | 'tournament';
          privacy_consent:    boolean;
          marketing_consent?: boolean;
          policy_version?:    string;
          consent_timestamp?: string;
          ip_hash?:           string | null;
          lead_score?:        number | null;
        };
        Update: Partial<Database['public']['Tables']['web_inquiries']['Insert']>;
        Relationships: [];
      };

      tournament_signups: {
        Row: {
          id:                 number;
          name:               string;
          email:              string;
          handicap:           string | null;
          home_club:          string | null;
          dietary_reqs:       string | null;
          shirt_size:         'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | null;
          privacy_consent:    boolean;
          marketing_consent:  boolean;
          policy_version:     string;
          consent_timestamp:  string;
          ip_hash:            string | null;
          created_at:         string;
        };
        Insert: {
          name:               string;
          email:              string;
          handicap?:          string | null;
          home_club?:         string | null;
          dietary_reqs?:      string | null;
          shirt_size?:        'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | null;
          privacy_consent:    boolean;
          marketing_consent?: boolean;
          policy_version?:    string;
          consent_timestamp?: string;
          ip_hash?:           string | null;
        };
        Update: Partial<Database['public']['Tables']['tournament_signups']['Insert']>;
        Relationships: [];
      };

      consent_logs: {
        Row: {
          id:                   number;
          email:                string | null;
          consent_type:         'analytics' | 'marketing' | 'privacy' | 'all';
          consent_given:        boolean;
          policy_version:       string;
          ip_hash:              string | null;
          user_agent_hash:      string | null;
          source_form:          string | null;
          withdrawal_timestamp: string | null;
          created_at:           string;
        };
        Insert: {
          email?:                string | null;
          consent_type:          'analytics' | 'marketing' | 'privacy' | 'all';
          consent_given:         boolean;
          policy_version?:       string;
          ip_hash?:              string | null;
          user_agent_hash?:      string | null;
          source_form?:          string | null;
          withdrawal_timestamp?: string | null;
        };
        Update: Partial<Database['public']['Tables']['consent_logs']['Insert']>;
        Relationships: [];
      };

      behavioral_events: {
        Row: {
          id:             number;
          session_id:     string;
          event_type:     'course_view' | 'destination_view' | 'package_view' | 'accommodation_view' | 'blog_read' | 'gallery_interact' | 'itinerary_viewed' | 'cta_click' | 'form_start' | 'guide_download';
          entity_slug:    string | null;
          entity_type:    'course' | 'destination' | 'package' | 'accommodation' | 'blog' | 'general' | null;
          dwell_seconds:  number | null;
          referrer:       string | null;
          utm_source:     string | null;
          utm_medium:     string | null;
          utm_campaign:   string | null;
          lead_id:        number | null;
          created_at:     string;
        };
        Insert: {
          session_id:     string;
          event_type:     'course_view' | 'destination_view' | 'package_view' | 'accommodation_view' | 'blog_read' | 'gallery_interact' | 'itinerary_viewed' | 'cta_click' | 'form_start' | 'guide_download';
          entity_slug?:   string | null;
          entity_type?:   'course' | 'destination' | 'package' | 'accommodation' | 'blog' | 'general' | null;
          dwell_seconds?: number | null;
          referrer?:      string | null;
          utm_source?:    string | null;
          utm_medium?:    string | null;
          utm_campaign?:  string | null;
          lead_id?:       number | null;
        };
        Update: Partial<Database['public']['Tables']['behavioral_events']['Insert']>;
        Relationships: [
          {
            foreignKeyName: 'behavioral_events_lead_id_fkey';
            columns: ['lead_id'];
            isOneToOne: false;
            referencedRelation: 'web_inquiries';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      vw_golf_market_insights: {
        Row: Record<string, unknown>;
        Relationships: [];
      };
      vw_behavioral_heatmap: {
        Row: Record<string, unknown>;
        Relationships: [];
      };
      vw_consent_audit_summary: {
        Row: Record<string, unknown>;
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
