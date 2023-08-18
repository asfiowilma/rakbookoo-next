export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _AuthorToBook: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
        Relationships: [
          {
            foreignKeyName: '_AuthorToBook_A_fkey'
            columns: ['A']
            referencedRelation: 'Author'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: '_AuthorToBook_B_fkey'
            columns: ['B']
            referencedRelation: 'Book'
            referencedColumns: ['id']
          }
        ]
      }
      _BookToTag: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
        Relationships: [
          {
            foreignKeyName: '_BookToTag_A_fkey'
            columns: ['A']
            referencedRelation: 'Book'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: '_BookToTag_B_fkey'
            columns: ['B']
            referencedRelation: 'Tag'
            referencedColumns: ['id']
          }
        ]
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Author: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      Book: {
        Row: {
          blurb: string | null
          coverImage: string | null
          id: number
          isbn: string | null
          rating: number
          shelfId: number
          title: string
        }
        Insert: {
          blurb?: string | null
          coverImage?: string | null
          id?: number
          isbn?: string | null
          rating: number
          shelfId: number
          title: string
        }
        Update: {
          blurb?: string | null
          coverImage?: string | null
          id?: number
          isbn?: string | null
          rating?: number
          shelfId?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Book_shelfId_fkey'
            columns: ['shelfId']
            referencedRelation: 'Shelf'
            referencedColumns: ['id']
          }
        ]
      }
      Note: {
        Row: {
          bookId: number
          content: string
          createdAt: string
          id: number
        }
        Insert: {
          bookId: number
          content: string
          createdAt?: string
          id?: number
        }
        Update: {
          bookId?: number
          content?: string
          createdAt?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'Note_bookId_fkey'
            columns: ['bookId']
            referencedRelation: 'Book'
            referencedColumns: ['id']
          }
        ]
      }
      Shelf: {
        Row: {
          id: number
          name: string
          userUid: string
        }
        Insert: {
          id?: number
          name: string
          userUid: string
        }
        Update: {
          id?: number
          name?: string
          userUid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'Shelf_userUid_fkey'
            columns: ['userUid']
            referencedRelation: 'User'
            referencedColumns: ['uid']
          }
        ]
      }
      Tag: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          avatar_url: string | null
          name: string | null
          uid: string
        }
        Insert: {
          avatar_url?: string | null
          name?: string | null
          uid: string
        }
        Update: {
          avatar_url?: string | null
          name?: string | null
          uid?: string
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
