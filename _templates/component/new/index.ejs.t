---
to: components/<%= h.inflection.classify(name) %>/index.ts
---
<% formattedName = h.inflection.classify(name) -%>
export * from './<%= formattedName %>';