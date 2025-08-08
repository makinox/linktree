/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PORTFOLIO_SOURCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}