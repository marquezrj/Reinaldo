
import { Type } from '@google/genai';

export const NEWS_JSON_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    generated_at_utc: { type: Type.STRING, format: "date-time", description: "UTC timestamp when JSON was generated" },
    city: { type: Type.STRING, description: "City focus for this batch (e.g., 'Rio de Janeiro')" },
    update_window_hours: { type: Type.NUMBER, description: "Configured update window in hours (optional)" },
    news_items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "Unique id (uuid recommended)" },
          title: { type: Type.STRING },
          lead: { type: Type.STRING },
          body: { type: Type.STRING, description: "Full article body (plain text)" },
          summary_2_sentences: { type: Type.STRING },
          published_datetime_utc: { type: Type.STRING, format: "date-time" },
          time_class: { type: Type.STRING, enum: ["last_hour", "last_24h", "weekly", "other"] },
          tags: { type: Type.ARRAY, items: { type: Type.STRING } },
          category: { type: Type.STRING, description: "High-level category (Turismo, Gastronomia, Eventos, Cultura)" },
          location: {
            type: Type.OBJECT,
            properties: {
              city: { type: Type.STRING },
              state: { type: Type.STRING },
              lat: { type: Type.NUMBER },
              lon: { type: Type.NUMBER },
              poi_name: { type: Type.STRING }
            },
            required: ["city", "state"]
          },
          sources: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                url: { type: Type.STRING, format: "uri" },
                name: { type: Type.STRING },
                published: { type: Type.STRING, format: "date-time" },
                author: { type: Type.STRING },
                source_type: { type: Type.STRING, enum: ["rss", "api", "scrape", "review", "social", "other"] },
                credibility_score: { type: Type.NUMBER }
              },
              required: ["url", "name", "published"]
            }
          },
          images: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                url: { type: Type.STRING, format: "uri" },
                caption: { type: Type.STRING },
                license: { type: Type.STRING },
                attribution: { type: Type.STRING }
              },
              required: ["url"]
            }
          },
          seo: {
            type: Type.OBJECT,
            properties: {
              title_tag: { type: Type.STRING },
              meta_description: { type: Type.STRING },
              og_title: { type: Type.STRING },
              og_description: { type: Type.STRING },
              twitter_card: { type: Type.STRING },
              canonical: { type: Type.STRING, format: "uri" },
              json_ld: { type: Type.OBJECT, description: "Embedded JSON-LD (schema.org NewsArticle)" }
            },
            required: ["title_tag", "meta_description", "canonical", "json_ld"]
          },
          confidence: { type: Type.NUMBER },
          flags: { type: Type.ARRAY, items: { type: Type.STRING } },
          notes: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["id", "title", "lead", "body", "summary_2_sentences", "published_datetime_utc", "time_class", "tags", "category", "location", "sources", "seo", "confidence"]
      }
    },
    daily_summary: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Short bullets with top topics for the last 24h"
    },
    weekly_top20: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          rank: { type: Type.INTEGER },
          place: { type: Type.STRING },
          city: { type: Type.STRING },
          state: { type: Type.STRING },
          score: { type: Type.NUMBER },
          breakdown: { type: Type.OBJECT, description: "Numeric sub-scores used to compute final score" },
          sources: { type: Type.ARRAY, items: { type: Type.STRING, format: "uri" } }
        },
        required: ["rank", "place", "score", "breakdown"]
      }
    },
    notes: { type: Type.ARRAY, items: { type: Type.STRING } },
    meta: { type: Type.OBJECT, description: "Optional backend metadata" }
  },
  required: ["generated_at_utc", "city", "news_items", "daily_summary"]
};
