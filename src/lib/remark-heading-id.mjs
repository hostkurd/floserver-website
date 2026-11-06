// "## Some heading {#my-id}" gives the heading the id "my-id", so docs links
// keep working when a heading's wording changes.
export default function remarkHeadingId() {
  const walk = (node) => {
    if (node.type === 'heading') {
      const last = node.children?.at(-1);
      if (last && last.type === 'text') {
        const m = last.value.match(/\s*\{#([a-z0-9-]+)\}\s*$/);
        if (m) {
          last.value = last.value.slice(0, m.index);
          node.data ??= {};
          node.data.hProperties = { ...(node.data.hProperties ?? {}), id: m[1] };
        }
      }
    }
    node.children?.forEach(walk);
  };
  return walk;
}
