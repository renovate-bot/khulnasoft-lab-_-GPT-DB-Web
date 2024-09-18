import { format } from 'sql-formatter';

/** Theme */
export const STORAGE_THEME_KEY = '__gpt_db_theme_key';
/** Language */
export const STORAGE_LANG_KEY = '__gpt_db_lng_key';
/** Init Message */
export const STORAGE_INIT_MESSAGE_KET = '__gpt_db_im_key';
/** Flow nodes */
export const FLOW_NODES_KEY = '__gpt_db_static_flow_nodes_key';

export function formatSql(sql: string, lang?: string) {
  if (!sql) return '';
  try {
    return format(sql, { language: lang });
  } catch {
    return sql;
  }
}

export * from './constants';
export * from './storage';
