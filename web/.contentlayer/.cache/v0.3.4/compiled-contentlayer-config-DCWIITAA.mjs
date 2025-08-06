// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "**/*.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    order: { type: "number", required: false },
    updated: { type: "date", required: false }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath }
  }
}));
var contentlayer_config_default = makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Doc],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolink, { behavior: "wrap" }]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DCWIITAA.mjs.map
